# Checkpoint: Tracking Plan Created

**Date:** 2026-01-26  
**Agent:** Analytics  
**Phase:** Discovery  
**Status:** Complete

---

## Summary

Analytics Agent создал полный Tracking Plan для BIOMAX AI v2.0. План содержит 78 событий в 8 категориях, покрывающих все user flows и метрики из Metrics Framework.

**Ключевые результаты:**
- Определена naming convention для events и properties
- Описаны 15 user properties для сегментации
- Созданы 78 events с полной схемой (properties, types, triggers)
- Маппинг events → metrics (AARRR, feature metrics)
- Implementation notes для всех платформ (Telegram, WebApp, Backend)

---

## Artifacts Created

| Path | Status | Description |
|------|--------|-------------|
| `/docs/analytics/tracking-plan.md` | Complete | Full tracking plan (78 events) |
| `/context/summaries/metrics-framework-summary.yaml` | Updated | Added tracking plan reference |

---

## Key Decisions

1. **Event naming:** `[object]_[action]` в snake_case
2. **Server-side vs Client-side:** Критичные события (signup, payment, activation) — server-side
3. **PII protection:** Email hashed (SHA-256), query text truncated
4. **Storage:** ClickHouse для events, PostgreSQL для profiles
5. **152-FZ compliance:** Consent tracking, data localization

---

## Event Categories Summary

| Category | Events | Purpose |
|----------|--------|---------|
| Core User Journey | 11 | Signup, onboarding, activation, sessions |
| Data Integrations | 9 | Connect, sync, upload data sources |
| AI Agents | 8 | Queries, responses, ratings, recommendations |
| Custom RAG | 4 | Protocol uploads, RAG usage |
| Research & Labs | 6 | Research search, lab interpretation |
| N=1 Experiments | 6 | Experiment lifecycle |
| Subscription | 10 | Trial, purchase, upgrade, cancel |
| Engagement | 12 | Referrals, Health Score, reports |
| Errors | 2 | Error tracking, rate limits |

---

## Next Actions

1. **Implement SDK** — Create analytics SDK for all platforms
2. **ClickHouse schemas** — Design and deploy event schemas
3. **Dashboards** — Set up Metabase/Grafana dashboards
4. **A/B framework** — Create experiment framework document
5. **QA validation** — Test event tracking on staging

---

## References

- Metrics Framework: `/docs/analytics/metrics-framework.md`
- User Flows: `/docs/design/user-flows.md`
- User Stories: `/docs/discovery/user-stories.md`

---

*Checkpoint created by Analytics Agent*
