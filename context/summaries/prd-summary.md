# PRD Summary — BIOMAX AI v2.0
# Level 2 Summary для контекст-менеджмента

**Document:** `docs/discovery/prd.md`  
**Created:** 2026-01-26  
**Status:** Draft  
**Token Estimate:** ~400 tokens

---

## Executive Summary

BIOMAX AI v2.0 — Personal Health Operating System с 15 AI-агентами, Custom RAG и 100+ интеграциями для биохакинга и health optimization. Фокус на российском рынке (152-ФЗ compliance).

## Scope Summary

| Metric | Value |
|--------|-------|
| **Total Requirements** | 32 (18 P0 + 9 P1 + 5 P2) |
| **User Stories Covered** | 21 (US-001 — US-021) |
| **AI Agents** | 15 (12 P0 + 3 P1) |
| **Integrations (MVP)** | 8 (Oura, Apple Watch, INVITRO, 23andMe, Strava, Dexcom, MyFitnessPal, TruDiagnostic) |
| **Primary Personas** | 3 (Алексей, Марина, Дмитрий) |

## Key P0 Requirements

1. **FR-001** — Централизованный дашборд с Health Score
2. **FR-005** — Custom RAG: загрузка протоколов
3. **FR-006** — Персонализированные AI-рекомендации
4. **FR-007** — Telegram Bot интерфейс
5. **FR-008** — Safety Module (противопоказания)

## Success Metrics (North Star)

> **Monthly Active Users using AI agents for health decisions**

| KPI | Target M12 |
|-----|------------|
| MRR | 15M ₽ |
| Paying Users | 10,000 |
| Free → Paid Conversion | 5% |
| NPS | 50 |

## Key Constraints

- **152-ФЗ** — данные только в РФ
- **Wellness ≠ Medicine** — не ставим диагнозы
- **Telegram-first** — MVP без native app
- **LLM < 5s** — ограничение на latency

## Top Risks

1. Регуляторные ограничения (High/High) → Safety Agent + дисклеймеры
2. AI галлюцинации (Medium/Critical) → RAG + source attribution
3. Низкая конверсия (High/High) → value demonstration

## Timeline

| Phase | Timeline | Goal |
|-------|----------|------|
| **MVP** | M1-M6 | 1,000 beta users, core features |
| **Growth** | M6-M12 | 50,000 users, full tier structure |
| **Scale** | M12-M24 | 500,000 users, B2B, mobile app |

## Dependencies (Critical)

- GigaChat API (LLM)
- Oura/Apple HealthKit (wearables)
- INVITRO PDF parser (labs)
- Yandex Cloud (infrastructure)

## References

- Full PRD: `docs/discovery/prd.md`
- User Stories: `docs/discovery/user-stories.md`
- Vision: `docs/discovery/vision.md`
- Business Model: `docs/business/business-model.md`
