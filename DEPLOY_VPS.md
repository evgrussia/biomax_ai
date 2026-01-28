# Инструкция по деплою на VPS

## Подготовка

### 1. Установка необходимых инструментов на локальной машине

Для Windows:
```powershell
# Установка sshpass (если нужно)
# Или используйте WSL/Ubuntu для выполнения скрипта
```

Для Linux/Mac:
```bash
# Установка sshpass
sudo apt-get install sshpass  # Ubuntu/Debian
brew install sshpass          # Mac
```

### 2. Подключение к серверу

Проверьте подключение:
```bash
ssh deploy@213.159.67.199
# Введите пароль: HHlklk6878gbhjkLyrfdfghhhuew
```

## Автоматический деплой

### Вариант 1: Использование скрипта (Linux/Mac/WSL)

```bash
chmod +x deploy.sh
./deploy.sh
```

### Вариант 2: Ручной деплой (пошагово)

#### Шаг 1: Анализ сервера

```bash
ssh deploy@213.159.67.199

# Проверка nginx
sudo nginx -t
sudo ls -la /etc/nginx/sites-enabled/
sudo netstat -tulpn | grep ':80\|:443'

# Проверка Docker
docker --version
docker ps

# Проверка занятых портов
sudo netstat -tulpn | grep LISTEN
```

#### Шаг 2: Подготовка проекта

```bash
# Создание директории
sudo mkdir -p /var/www/biomax_ai
sudo chown -R deploy:deploy /var/www/biomax_ai

# Клонирование репозитория
cd /var/www/biomax_ai
git clone -b main https://github.com/evgrussia/biomax_ai.git .

# Или обновление, если уже существует
cd /var/www/biomax_ai
git pull origin main
```

#### Шаг 3: Настройка портов в docker-compose.yml

Проверьте, какие порты свободны:
```bash
sudo netstat -tulpn | grep LISTEN
```

Отредактируйте `docker-compose.yml` и измените порты, если нужно:
```yaml
ports:
  - "8080:80"  # для home (если 8080 свободен)
  - "8081:80"  # для dashboard (если 8081 свободен)
```

#### Шаг 4: Сборка и запуск контейнеров

```bash
cd /var/www/biomax_ai

# Остановка существующих контейнеров (если есть)
docker-compose down

# Сборка
docker-compose build --no-cache

# Запуск
docker-compose up -d

# Проверка статуса
docker-compose ps
docker-compose logs -f
```

#### Шаг 5: Настройка Nginx

Создайте файл `/etc/nginx/sites-available/biomax_ai`:

```nginx
# BIOMAX AI - Home Page
upstream biomax_home {
    server 127.0.0.1:8080;
}

# BIOMAX AI - Dashboard
upstream biomax_dashboard {
    server 127.0.0.1:8081;
}

# Home domain
server {
    listen 80;
    server_name biomax-ai.ru www.biomax-ai.ru;

    # Redirect www to non-www
    if ($host = www.biomax-ai.ru) {
        return 301 http://biomax-ai.ru$request_uri;
    }

    location / {
        proxy_pass http://biomax_home;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}

# Dashboard subdomain
server {
    listen 80;
    server_name app.biomax-ai.ru;

    location / {
        proxy_pass http://biomax_dashboard;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

Активируйте конфигурацию:
```bash
sudo ln -sf /etc/nginx/sites-available/biomax_ai /etc/nginx/sites-enabled/biomax_ai
sudo nginx -t
sudo systemctl reload nginx
```

#### Шаг 6: Настройка DNS

Убедитесь, что DNS записи настроены:
- `A` запись для `biomax-ai.ru` → `213.159.67.199`
- `A` запись для `app.biomax-ai.ru` → `213.159.67.199`

Проверка DNS:
```bash
dig biomax-ai.ru
dig app.biomax-ai.ru
```

#### Шаг 7: Проверка работы

```bash
# Локальная проверка на сервере
curl -I http://localhost -H 'Host: biomax-ai.ru'
curl -I http://localhost -H 'Host: app.biomax-ai.ru'

# Проверка извне
curl -I http://biomax-ai.ru
curl -I http://app.biomax-ai.ru
```

## Настройка HTTPS (опционально)

```bash
# Установка certbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx

# Получение сертификатов
sudo certbot --nginx -d biomax-ai.ru -d www.biomax-ai.ru -d app.biomax-ai.ru

# Автоматическое обновление
sudo certbot renew --dry-run
```

## Управление

### Просмотр логов
```bash
cd /var/www/biomax_ai
docker-compose logs -f frontend-home
docker-compose logs -f frontend-dashboard
docker-compose logs -f nginx
```

### Перезапуск
```bash
cd /var/www/biomax_ai
docker-compose restart
```

### Обновление
```bash
cd /var/www/biomax_ai
git pull origin main
docker-compose up -d --build
```

### Остановка
```bash
cd /var/www/biomax_ai
docker-compose down
```

## Troubleshooting

### Проблемы с портами

Если порты 8080/8081 заняты, измените в `docker-compose.yml`:
```yaml
ports:
  - "8082:80"  # для home
  - "8083:80"  # для dashboard
```

И обновите nginx конфигурацию соответственно.

### Проблемы с nginx

Проверка конфигурации:
```bash
sudo nginx -t
sudo tail -f /var/log/nginx/error.log
```

### Проблемы с Docker

Проверка контейнеров:
```bash
docker ps -a
docker logs <container_id>
```

Очистка:
```bash
docker-compose down
docker system prune -a
docker-compose up -d --build
```

## Безопасность

1. **Измените пароль SSH** после первого подключения
2. **Настройте SSH ключи** вместо пароля
3. **Настройте firewall** (ufw/firewalld)
4. **Регулярно обновляйте систему**:
   ```bash
   sudo apt-get update && sudo apt-get upgrade
   ```
