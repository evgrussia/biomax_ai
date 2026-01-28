# Ручной деплой BIOMAX AI на VPS

## Подключение к серверу

```bash
ssh deploy@213.159.67.199
# Пароль: HHlklk6878gbhjkLyrfdfghhhuew
```

## Шаг 1: Анализ сервера

### Проверка Nginx
```bash
sudo nginx -t
sudo ls -la /etc/nginx/sites-enabled/
sudo cat /etc/nginx/nginx.conf | head -30
```

### Проверка занятых портов
```bash
sudo netstat -tulpn | grep LISTEN
# Или
sudo ss -tulpn | grep LISTEN
```

### Проверка Docker
```bash
docker --version
docker-compose --version
docker ps
```

### Проверка существующих проектов
```bash
ls -la /var/www/
sudo ls -la /etc/nginx/sites-available/
```

## Шаг 2: Подготовка проекта

```bash
# Создание директории
sudo mkdir -p /var/www/biomax_ai
sudo chown -R deploy:deploy /var/www/biomax_ai

# Клонирование репозитория
cd /var/www/biomax_ai
git clone -b main https://github.com/evgrussia/biomax_ai.git .

# Или если уже существует
cd /var/www/biomax_ai
git pull origin main
```

## Шаг 3: Определение свободных портов

```bash
# Проверьте, какие порты заняты
sudo netstat -tulpn | grep LISTEN | awk '{print $4}' | cut -d: -f2 | sort -n | uniq

# Найдите свободные порты (например, 8080, 8081, 8082, 8083)
# Если 8080 занят, используйте другой (например, 8082)
# Если 8081 занят, используйте другой (например, 8083)
```

## Шаг 4: Настройка docker-compose.yml

Отредактируйте `docker-compose.yml` и измените порты, если нужно:

```bash
cd /var/www/biomax_ai
nano docker-compose.yml
```

Измените порты в секциях `ports`:
```yaml
frontend-home:
  ports:
    - "8080:80"  # Измените 8080 на свободный порт, если нужно

frontend-dashboard:
  ports:
    - "8081:80"  # Измените 8081 на свободный порт, если нужно
```

Сохраните (Ctrl+O, Enter, Ctrl+X в nano).

## Шаг 5: Сборка и запуск контейнеров

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

## Шаг 6: Настройка Nginx

Создайте файл конфигурации:

```bash
sudo nano /etc/nginx/sites-available/biomax_ai
```

Вставьте следующую конфигурацию (замените порты на те, что вы используете):

```nginx
# BIOMAX AI - Home Page
upstream biomax_home {
    server 127.0.0.1:8080;  # Замените на ваш порт для home
}

# BIOMAX AI - Dashboard
upstream biomax_dashboard {
    server 127.0.0.1:8081;  # Замените на ваш порт для dashboard
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
# Создать симлинк
sudo ln -sf /etc/nginx/sites-available/biomax_ai /etc/nginx/sites-enabled/biomax_ai

# Проверить конфигурацию
sudo nginx -t

# Если проверка прошла успешно, перезагрузить nginx
sudo systemctl reload nginx
```

## Шаг 7: Проверка работы

```bash
# Проверка контейнеров
cd /var/www/biomax_ai
docker-compose ps

# Проверка логов
docker-compose logs frontend-home | tail -20
docker-compose logs frontend-dashboard | tail -20

# Локальная проверка (на сервере)
curl -I http://localhost:8080  # Замените на ваш порт
curl -I http://localhost:8081  # Замените на ваш порт

# Проверка через домены (если DNS настроен)
curl -I http://biomax-ai.ru
curl -I http://app.biomax-ai.ru
```

## Шаг 8: Настройка DNS

Убедитесь, что DNS записи настроены у вашего регистратора домена:

- `A` запись для `biomax-ai.ru` → `213.159.67.199`
- `A` запись для `app.biomax-ai.ru` → `213.159.67.199`

Проверка DNS:
```bash
dig biomax-ai.ru
dig app.biomax-ai.ru
```

## Шаг 9: Настройка HTTPS (опционально)

```bash
# Установка certbot
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx -y

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
```

### Перезапуск
```bash
cd /var/www/biomax_ai
docker-compose restart
```

### Обновление кода
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

Если порты заняты, измените их в `docker-compose.yml` и обновите nginx конфигурацию.

### Проблемы с nginx

```bash
# Проверка конфигурации
sudo nginx -t

# Просмотр логов ошибок
sudo tail -f /var/log/nginx/error.log

# Проверка активных конфигураций
sudo ls -la /etc/nginx/sites-enabled/
```

### Проблемы с Docker

```bash
# Проверка контейнеров
docker ps -a
docker logs <container_id>

# Очистка и пересборка
cd /var/www/biomax_ai
docker-compose down
docker system prune -a
docker-compose up -d --build
```

### Проверка доступности портов

```bash
# Проверка, что контейнеры слушают на нужных портах
sudo netstat -tulpn | grep docker
```
