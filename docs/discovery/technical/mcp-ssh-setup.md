# Настройка SSH MCP серверов для Cursor IDE

## Обзор

MCP (Model Context Protocol) серверы позволяют агентам в Cursor IDE подключаться к удаленным VPS серверам по SSH и выполнять задачи автоматически.

## Доступные варианты

### 1. ssh-mcp-server (рекомендуется) ⭐

**Пакет:** `@fangjunjie/ssh-mcp-server`

**Преимущества:**
- ✅ Двунаправленная передача файлов (upload/download через SCP/SFTP)
- ✅ Контроль безопасности команд (whitelist/blacklist)
- ✅ Изоляция учетных данных (SSH credentials остаются локально)
- ✅ Поддержка пароля и SSH ключей
- ✅ Управление несколькими серверами

**Установка:**
```bash
# Глобальная установка (опционально)
npm install -g @fangjunjie/ssh-mcp-server

# Или использование через npx (рекомендуется)
npx -y @fangjunjie/ssh-mcp-server
```

**Конфигурация в Cursor:**

Откройте настройки Cursor: `File > Preferences > Settings` (или `Ctrl+,`), найдите "MCP" или отредактируйте файл настроек напрямую.

**Вариант A: Через UI Cursor**
1. Откройте `Cursor Settings > Features > MCP`
2. Нажмите `"+ Add New MCP Server"`
3. Заполните форму:
   - **Name:** `biomax-vps` (или любое имя)
   - **Type:** `stdio`
   - **Command:** `npx`
   - **Args:** `-y @fangjunjie/ssh-mcp-server --host 213.159.67.199 --port 22 --username deploy --password HHlklk6878gbhjkLyrfdfghhhuew`

**Вариант B: Через JSON конфигурацию**

Найдите файл настроек MCP (обычно в `%APPDATA%\Cursor\User\globalStorage\saoudrizwan.claude-dev\settings\cline_mcp_settings.json` на Windows или `~/.config/Cursor/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json` на Linux/Mac).

Добавьте конфигурацию:

```json
{
  "mcpServers": {
    "biomax-vps": {
      "command": "npx",
      "args": [
        "-y",
        "@fangjunjie/ssh-mcp-server",
        "--host",
        "213.159.67.199",
        "--port",
        "22",
        "--username",
        "deploy",
        "--password",
        "HHlklk6878gbhjkLyrfdfghhhuew"
      ]
    }
  }
}
```

**Безопасная конфигурация с SSH ключом:**

```json
{
  "mcpServers": {
    "biomax-vps": {
      "command": "npx",
      "args": [
        "-y",
        "@fangjunjie/ssh-mcp-server",
        "--host",
        "213.159.67.199",
        "--port",
        "22",
        "--username",
        "deploy",
        "--privateKey",
        "C:\\Users\\evgde\\.ssh\\id_rsa",
        "--passphrase",
        "your_passphrase_if_needed"
      ]
    }
  }
}
```

**Конфигурация с whitelist/blacklist для безопасности:**

```json
{
  "mcpServers": {
    "biomax-vps": {
      "command": "npx",
      "args": [
        "-y",
        "@fangjunjie/ssh-mcp-server",
        "--host",
        "213.159.67.199",
        "--port",
        "22",
        "--username",
        "deploy",
        "--privateKey",
        "C:\\Users\\evgde\\.ssh\\id_rsa",
        "--whitelist",
        "^(docker|git|cd|ls|cat|grep|tail|head|curl|wget|systemctl|nginx|apt-get|npm|node).*$"
      ]
    }
  }
}
```

### 2. ssh-mcp (альтернативный вариант)

**Пакет:** `ssh-mcp`

**Преимущества:**
- ✅ Простой и легковесный
- ✅ Базовая поддержка SSH команд
- ✅ Таймауты и защита от зависаний

**Установка:**
```bash
npm install -g ssh-mcp
```

**Конфигурация:**
```json
{
  "mcpServers": {
    "biomax-vps-simple": {
      "command": "ssh-mcp",
      "args": [
        "--host",
        "213.159.67.199",
        "--user",
        "deploy",
        "--password",
        "HHlklk6878gbhjkLyrfdfghhhuew"
      ]
    }
  }
}
```

## Настройка SSH ключей (рекомендуется)

Для безопасности лучше использовать SSH ключи вместо паролей:

### 1. Генерация SSH ключа (если еще нет)

```powershell
# В PowerShell или Git Bash
ssh-keygen -t rsa -b 4096 -C "biomax-vps-deploy"
# Сохраните в: C:\Users\evgde\.ssh\id_rsa_biomax
```

### 2. Копирование публичного ключа на сервер

```powershell
# Через ssh-copy-id (если установлен) или вручную:
type C:\Users\evgde\.ssh\id_rsa_biomax.pub | ssh deploy@213.159.67.199 "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"

# Или вручную:
# 1. Скопируйте содержимое id_rsa_biomax.pub
# 2. Подключитесь к серверу: ssh deploy@213.159.67.199
# 3. Выполните:
#    mkdir -p ~/.ssh
#    chmod 700 ~/.ssh
#    echo "ваш_публичный_ключ" >> ~/.ssh/authorized_keys
#    chmod 600 ~/.ssh/authorized_keys
```

### 3. Тестирование подключения

```powershell
ssh -i C:\Users\evgde\.ssh\id_rsa_biomax deploy@213.159.67.199
```

## Использование в Cursor

После настройки MCP сервера, агенты смогут:

1. **Выполнять команды на сервере:**
   - `docker ps`, `docker-compose up -d`
   - `git pull`, `git clone`
   - `nginx -t`, `systemctl status nginx`
   - Любые другие SSH команды

2. **Передавать файлы:**
   - Загрузка файлов на сервер (upload)
   - Скачивание файлов с сервера (download)
   - Синхронизация директорий

3. **Управлять деплоем:**
   - Автоматический деплой через `deploy_vps.py` или напрямую
   - Мониторинг логов
   - Перезапуск сервисов

## Примеры использования агентами

### Пример 1: Проверка статуса сервера

```
Агент может выполнить:
- docker ps (проверить контейнеры)
- docker-compose ps (статус сервисов)
- systemctl status nginx (статус nginx)
- df -h (использование диска)
- free -h (использование памяти)
```

### Пример 2: Деплой обновлений

```
Агент может:
1. git pull origin main (обновить код)
2. docker-compose build --no-cache (пересобрать)
3. docker-compose up -d (перезапустить)
4. docker-compose logs -f (проверить логи)
```

### Пример 3: Управление файлами

```
Агент может:
- Загрузить обновленный docker-compose.yml
- Скачать логи для анализа
- Обновить конфигурацию nginx
```

## Безопасность

### Рекомендации:

1. **Используйте SSH ключи вместо паролей** - более безопасно
2. **Настройте whitelist команд** - ограничьте доступные команды
3. **Используйте отдельного пользователя** - не root, с ограниченными правами
4. **Настройте firewall** - ограничьте доступ по IP
5. **Регулярно обновляйте систему** - `apt-get update && apt-get upgrade`

### Пример whitelist для безопасной работы:

```json
"--whitelist",
"^(docker|docker-compose|git|cd|ls|cat|grep|tail|head|curl|wget|systemctl|nginx|apt-get|npm|node|python3|pip3|mkdir|chmod|chown|cp|mv|rm|echo|export|unset).*$"
```

### Пример blacklist для блокировки опасных команд:

```json
"--blacklist",
"^(rm -rf /|mkfs|dd if=|:(){ :|:& };:|chmod 777|chown root|passwd|useradd|userdel|groupadd|groupdel|visudo|nano /etc|vi /etc|vim /etc).*$"
```

## Troubleshooting

### Проблема: MCP сервер не подключается

**Решение:**
1. Проверьте, что Node.js установлен: `node --version`
2. Проверьте подключение вручную: `ssh deploy@213.159.67.199`
3. Проверьте логи Cursor в Developer Tools (Help > Toggle Developer Tools)
4. Убедитесь, что путь к SSH ключу правильный (Windows: используйте двойные обратные слеши `\\`)

### Проблема: Команды не выполняются

**Решение:**
1. Проверьте права пользователя на сервере
2. Для команд с sudo может потребоваться настройка NOPASSWD в `/etc/sudoers`
3. Проверьте whitelist/blacklist правила

### Проблема: Таймауты

**Решение:**
1. Увеличьте timeout в конфигурации (если поддерживается)
2. Разбейте длинные операции на несколько команд
3. Используйте `nohup` или `screen` для долгих задач

## Дополнительные ресурсы

- [SSH MCP Server на cursormcp.dev](https://cursormcp.dev/mcp-servers/893-ssh)
- [GitHub: ssh-mcp-server](https://github.com/classfang/ssh-mcp-server)
- [GitHub: ssh-mcp](https://github.com/tufantunc/ssh-mcp)
- [Документация MCP](https://modelcontextprotocol.io/)

## Интеграция с текущим деплоем

После настройки MCP сервера, можно модифицировать агентов для использования SSH MCP вместо `deploy_vps.py`:

**Преимущества:**
- ✅ Интерактивная работа агента с сервером
- ✅ Возможность адаптации под ситуацию
- ✅ Прямой доступ к логам и статусу
- ✅ Автоматическое решение проблем

**Пример использования в агенте:**
```
Агент может:
1. Проверить текущий статус: docker-compose ps
2. Если есть проблемы - проанализировать логи: docker-compose logs
3. Принять решение о деплое или откате
4. Выполнить необходимые действия
5. Проверить результат
```
