# Интеграция Agentic System в Cursor

Этот каталог делает проект **самоописываемым для Cursor**: правила (`rules`), профили “субагентов” (`agents`), навыки (`skills`) и заготовки команд (`commands`).

## Источники истины (canonical)

- **Система/архитектура**: `SYSTEM.md`, `ARCHITECTURE.md`
- **Агенты**: `mnt/user-data/outputs/agentic-system/agents/*/AGENT.md`
- **Навыки**: `mnt/user-data/outputs/agentic-system/skills/*/SKILL.md`
- **Shared skills**: `mnt/user-data/outputs/agentic-system/shared/*/SKILL.md`

Файлы в `.cursor/` — это **интеграционный слой**: они не дублируют полностью канон, а задают единый способ пользоваться системой в Cursor (включая “команды” и правила роутинга).

## Быстрый старт в чате Cursor

Поддерживаемая конвенция команд (обрабатывается правилами из `.cursor/rules`):

- `/start-project <идея>` — старт нового проекта и создание `context/project-brief.yaml`
- `/status` — статус текущей фазы/чекпоинта и следующий шаг
- `/route <agent> <задача>` — выполнить задачу в роли выбранного агента
- `/checkpoint` — создать/обновить чекпоинт в `context/checkpoints/`
- `/summary` — короткое саммари состояния и решений (для экономии контекста)

## Где “субагенты”

В `.cursor/agents/` лежат **профили ролей** (Orchestrator/Dev/Review/QA/…); они ссылаются на канонические спецификации в `mnt/.../agents/.../AGENT.md`.

