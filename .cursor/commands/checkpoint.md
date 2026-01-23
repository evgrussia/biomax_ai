## `/checkpoint`

### Назначение
Сохранить “срез состояния” (summary/артефакты/решения/следующие шаги) для экономии контекста и продолжения работы.

### Ожидаемые артефакты
- `context/checkpoints/CP-<phase>-<timestamp>.yaml` (или обновление текущего)
- (опционально) `context/summaries/<phase>.yaml`

### Спецификация
См. `.cursor/skills/context-manager.md` и `.cursor/agents/orchestrator.md`.

