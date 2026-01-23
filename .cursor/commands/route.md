## `/route <agent> <task>`

### Назначение
Выполнить задачу в указанной роли (см. `.cursor/agents/INDEX.md`).

### Правила
- если задача большая — сначала декомпозиция, затем выполнение
- соблюдай формат `task_request/task_response` (см. `.cursor/rules/01-agent-routing-and-formats.md`)
- используй каноническую спецификацию роли из `mnt/user-data/outputs/agentic-system/agents/...`

