# Инструкция по деплою BIOMAX AI

## Требования

- Docker и Docker Compose установлены на VPS
- Домены настроены:
  - `biomax-ai.ru` → главная страница
  - `app.biomax-ai.ru` → дашбоард
- IP сервера: `213.159.67.199`

## Шаги деплоя

### 1. Подготовка сервера

```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Установка Docker (если не установлен)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Установка Docker Compose (если не установлен)
sudo apt install docker-compose -y
```

### 2. Настройка DNS

Убедитесь, что DNS записи настроены:
- `A` запись для `biomax-ai.ru` → `213.159.67.199`
- `A` запись для `app.biomax-ai.ru` → `213.159.67.199`

### 3. Клонирование и подготовка проекта

```bash
# Клонирование репозитория (или загрузка файлов)
git clone <repository-url>
cd biomax_ai

# Или загрузка через scp/sftp
```

### 4. Сборка и запуск

```bash
# Сборка и запуск всех сервисов
docker-compose up -d --build

# Проверка статуса
docker-compose ps

# Просмотр логов
docker-compose logs -f
```

### 5. Проверка работы

- Главная страница: http://biomax-ai.ru
- Дашбоард: http://app.biomax-ai.ru

## Структура деплоя

```
biomax_ai/
├── frontend_home/          # Главная страница
│   ├── Dockerfile
│   ├── nginx.conf
│   └── ...
├── frontend_dashboard/      # Дашбоард
│   ├── Dockerfile
│   ├── nginx.conf
│   └── ...
├── nginx/                   # Основной nginx роутер
│   ├── nginx.conf
│   └── conf.d/
│       └── biomax.conf
└── docker-compose.yml       # Оркестрация
```

## Управление

```bash
# Остановка
docker-compose down

# Перезапуск
docker-compose restart

# Обновление (после изменений в коде)
docker-compose up -d --build

# Просмотр логов конкретного сервиса
docker-compose logs -f frontend-home
docker-compose logs -f frontend-dashboard
docker-compose logs -f nginx
```

## Настройка SSL (опционально, для HTTPS)

Для настройки HTTPS используйте Let's Encrypt:

```bash
# Установка certbot
sudo apt install certbot python3-certbot-nginx -y

# Получение сертификатов
sudo certbot --nginx -d biomax-ai.ru -d www.biomax-ai.ru -d app.biomax-ai.ru
```

После этого обновите конфигурацию nginx для поддержки HTTPS.

## Troubleshooting

### Проблемы с портами

Если порты 80/443 заняты:
```bash
# Проверка занятых портов
sudo netstat -tulpn | grep :80
sudo netstat -tulpn | grep :443

# Остановка других сервисов или изменение портов в docker-compose.yml
```

### Проблемы с DNS

Проверьте DNS записи:
```bash
dig biomax-ai.ru
dig app.biomax-ai.ru
```

### Проблемы со сборкой

Очистка кэша Docker:
```bash
docker-compose down
docker system prune -a
docker-compose up -d --build
```

## Мониторинг

```bash
# Использование ресурсов
docker stats

# Проверка здоровья контейнеров
docker-compose ps
```
