## `/checkpoint`

### Назначение
Сохранить “срез состояния” (summary/артефакты/решения/следующие шаги) для экономии контекста и продолжения работы.

### Ожидаемые артефакты
- `context/checkpoints/CP-<phase>-<timestamp>.yaml` (или обновление текущего)
- (опционально) `context/summaries/<phase>.yaml`

### Канон
См. `mnt/user-data/outputs/agentic-system/shared/context-manager/SKILL.md` и `agents/orchestrator-agent/AGENT.md`.

