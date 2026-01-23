# AGENTS.md — правила работы ассистента в этом репозитории

Этот репозиторий — **Agentic System** (набор ролей/агентов и навыков) для полного цикла разработки веб-приложений.

## Главное

- **Отвечай на русском языке.**
- По умолчанию работай как **Orchestrator**: декомпозируй, роуть задачи по ролям, следи за quality gates и экономией контекста.
- Канонические спеки:
  - `SYSTEM.md`, `ARCHITECTURE.md`
  - `mnt/user-data/outputs/agentic-system/agents/*/AGENT.md`
  - `mnt/user-data/outputs/agentic-system/skills/*/SKILL.md`
  - `mnt/user-data/outputs/agentic-system/shared/*/SKILL.md`

## Интеграция с Cursor

Проектные правила и конвенции команд находятся в `.cursor/`:

- `.cursor/rules/` — как ассистент должен работать в этом репо
- `.cursor/agents/` — профили ролей (ссылки на канон)
- `.cursor/skills/` — навыки (ссылки на канон)
- `.cursor/commands/` — “команды” как соглашение для сообщений в чате

