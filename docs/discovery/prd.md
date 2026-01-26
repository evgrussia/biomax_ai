# PRD: BIOMAX AI v2.0

**Version:** 1.0  
**Last Updated:** 2026-01-26  
**Author:** Product Agent  
**Status:** Draft

---

## Executive Summary

BIOMAX AI v2.0 — это мультиагентная AI-платформа для управления здоровьем и биохакинга, позиционируемая как "Personal Health Operating System". Продукт объединяет 15 специализированных AI-агентов, 100+ интеграций с устройствами и сервисами, и уникальную систему Custom RAG для создания персонализированной базы знаний. Платформа нацелена на продвинутых биохакеров, health optimizers и людей, фокусирующихся на долголетии, в первую очередь на российском рынке.

**Ключевые дифференциаторы:**
- Мультиагентная AI-архитектура (15 специализированных агентов)
- Custom RAG — пользователи создают свою базу знаний с протоколами
- N=1 Biohacker Lab для проведения персональных экспериментов
- Полный охват всех категорий биохакинга в одной платформе
- Российская локализация и 152-ФЗ compliance

---

## Problem Statement

### Current State

Существующие решения на рынке health optimization и биохакинга имеют фундаментальные ограничения:

| Проблема | Текущее состояние | Влияние на пользователя |
|----------|-------------------|-------------------------|
| **Фрагментация данных** | Данные разбросаны по 5-10+ приложениям (Oura, MyFitnessPal, CGM app, Apple Health, etc.) | Пользователь тратит 5+ часов/неделю на ручную агрегацию данных в Excel |
| **Узкий фокус решений** | InsideTracker (только blood), Levels (только CGM), Oura (только sleep/HRV) | Нет возможности видеть целостную картину здоровья |
| **Отсутствие персонализации** | Рекомендации не учитывают генетику, историю, контекст пользователя | "Одна таблетка для всех" не работает для биохакинга |
| **Закрытые экосистемы** | Нельзя загрузить свои протоколы или исследования | Продвинутые биохакеры не могут использовать авторские методики |
| **Недостаток научной строгости** | Рекомендации без ссылок на источники и evidence levels | Невозможно оценить надёжность совета |
| **Отсутствие инструментов для N=1** | Нет платформы для научного проведения персональных экспериментов | Биохакеры не могут объективно оценить эффективность протоколов |

### Desired State

| Аспект | Желаемое состояние |
|--------|-------------------|
| **Данные** | Все данные из 100+ источников агрегируются автоматически в единый дашборд |
| **AI-рекомендации** | 15 специализированных AI-агентов дают персонализированные рекомендации с учётом всего контекста |
| **Персонализация** | Рекомендации учитывают генетику (SNP), биомаркеры, историю экспериментов, цели пользователя |
| **Custom KB** | Пользователь может загрузить любые протоколы/исследования, и AI будет их использовать |
| **Научная строгость** | Каждая рекомендация содержит ссылки на исследования с evidence levels |
| **N=1 эксперименты** | Biohacker Lab позволяет проводить научно обоснованные персональные эксперименты с ML-анализом |

### Gap Analysis

```
ТЕКУЩЕЕ СОСТОЯНИЕ                    GAP                        ЦЕЛЕВОЕ СОСТОЯНИЕ
─────────────────────               ─────                       ─────────────────────
                                                                
Фрагментированные данные  ──────▶  Integration Platform  ──────▶  Единый дашборд
(5-10 приложений)                  (100+ API интеграций)          (Health Score 0-100)
                                                                
Rule-based рекомендации   ──────▶  Multi-Agent AI System ──────▶  Персонализированные
(один алгоритм)                    (15 специализированных          AI-рекомендации
                                   агентов + orchestration)       
                                                                
Нет пользовательской KB   ──────▶  Custom RAG Pipeline   ──────▶  Персональная база
                                   (LlamaIndex + Qdrant)           знаний пользователя
                                                                
Нет научного N=1          ──────▶  Biohacker Lab Module  ──────▶  ML-powered N=1
                                   (Bayesian A/B, Causal           эксперименты
                                   Impact)                        
                                                                
Западные платформы        ──────▶  RU Localization       ──────▶  152-ФЗ compliant
(нет в РФ)                         (GigaChat, локальные           платформа
                                   лаборатории)                   
```

---

## Goals & Success Metrics

### Business Goals

| # | Goal | Target (M12) | Target (M24) |
|---|------|--------------|--------------|
| 1 | Monthly Recurring Revenue | 15M ₽ | 60M ₽ |
| 2 | Paying Users | 10,000 | 40,000 |
| 3 | Free Users | 150,000 | 500,000 |
| 4 | Free → Paid Conversion | 5% | 7% |
| 5 | LTV/CAC Ratio | 5x | 7x |

### User Goals

| Persona | Primary Goal | Success Metric |
|---------|--------------|----------------|
| **Алексей (Advanced Biohacker)** | Объединить все данные и понять, что реально работает | Время на анализ данных: -80% (с 5ч/нед до 1ч/нед) |
| **Марина (Health Optimizer)** | Получить понятные рекомендации без информационного перегруза | Completion rate плана действий: >70% |
| **Дмитрий (Longevity Seeker)** | Управлять биологическим возрастом научным методом | Снижение биологического возраста: -1 год за 12 месяцев |

### North Star Metric

> **Monthly Active Users using AI agents for health decisions**

Определение "активного пользователя":
- Получил ≥5 AI-рекомендаций за месяц
- Отметил выполнение ≥3 рекомендаций
- Синхронизировал данные хотя бы с 1 источника

### Product KPIs

| Category | KPI | Target (M6) | Target (M12) |
|----------|-----|-------------|--------------|
| **Acquisition** | Monthly Signups | 5,000 | 15,000 |
| **Activation** | Users connected ≥2 data sources (D7) | 35% | 45% |
| **Engagement** | AI queries per active user per week | 3 | 5 |
| **Retention** | M1 Retention | 45% | 55% |
| **Revenue** | ARPU (paying users) | 1,200 ₽ | 1,500 ₽ |
| **Satisfaction** | NPS | 40 | 50 |

### Health Outcome KPIs (Long-term)

| KPI | Measurement | Target (M12) |
|-----|-------------|--------------|
| Health Score Improvement | % users with +5 points in 3 months | 60% |
| Successful N=1 Experiments | % completed experiments with significant result | 40% |
| Protocol Adherence | % recommended actions completed | 70% |
| Biological Age Reduction | Average reduction (for Longevity Elite users) | -0.5 years |

---

## User Personas

### Primary Persona 1: Алексей "Advanced Biohacker"

| Attribute | Value |
|-----------|-------|
| **Age** | 35 лет |
| **Location** | Москва |
| **Profession** | IT-предприниматель |
| **Income** | 800K-1.5M ₽/мес |
| **Devices** | Oura Ring, CGM (Dexcom), WHOOP, iPhone |
| **Monthly Spend (Biohacking)** | $200-500 |

**Goals:**
- Когнитивная оптимизация (продуктивность, фокус)
- Longevity (цель: 120+ лет)
- Data-driven биохакинг (понять что реально работает)

**Pain Points:**
- Данные разбросаны по 7+ приложениям
- 5+ часов/неделю на ручную аналитику в Excel
- Нет персонализации под его генетику
- Невозможно объективно оценить эффективность протоколов

**Key Features Wanted:**
- Custom RAG для загрузки своих протоколов
- Мультиагентный AI с глубокой персонализацией
- N=1 эксперименты с ML-анализом
- Интеграция со всеми его устройствами

**Willingness to Pay:** 5,000-10,000 ₽/мес

**User Stories:** US-001, US-002, US-003, US-004, US-005, US-006, US-007

---

### Primary Persona 2: Марина "Health Optimizer"

| Attribute | Value |
|-----------|-------|
| **Age** | 42 года |
| **Location** | Санкт-Петербург |
| **Profession** | Финансовый директор |
| **Income** | 400-600K ₽/мес |
| **Devices** | Apple Watch SE, iPhone |
| **Monthly Spend (Wellness)** | $50-100 |

**Goals:**
- Больше энергии для работы и жизни
- Лучший сон (сейчас 6 часов, хочет 7-8)
- Снижение стресса

**Pain Points:**
- Информационный перегруз в интернете
- Нет времени разбираться в биохакинге
- Не понимает результаты анализов

**Key Features Wanted:**
- Простые, понятные рекомендации
- Напоминания и мотивация
- Объяснение анализов простым языком
- AI-коуч, который ведёт за руку

**Willingness to Pay:** 500-2,000 ₽/мес

**User Stories:** US-008, US-009, US-010, US-011, US-012, US-013, US-014

---

### Primary Persona 3: Дмитрий "Longevity Seeker"

| Attribute | Value |
|-----------|-------|
| **Age** | 55 лет |
| **Location** | Казань |
| **Profession** | Врач-терапевт, к.м.н. |
| **Income** | 200-350K ₽/мес |
| **Devices** | Xiaomi Mi Band, Samsung Galaxy |
| **Monthly Spend (Longevity)** | $200-500 |

**Goals:**
- Замедлить старение (управлять pace of aging)
- Оптимизировать биомаркеры до "оптимальных" (не просто "нормальных")
- Evidence-based решения (научная строгость)

**Pain Points:**
- Нет научной строгости в существующих приложениях
- Нет интеграции эпигенетических данных
- Референсные значения в приложениях не для longevity

**Key Features Wanted:**
- Ссылки на исследования (PubMed)
- Отслеживание биологического возраста
- Персонализация по генетике
- Рекомендации по добавкам с проверкой взаимодействий

**Willingness to Pay:** 2,000-5,000 ₽/мес

**User Stories:** US-015, US-016, US-017, US-018, US-019, US-020, US-021

---

## Functional Requirements

### P0 — Must Have (MVP)

| ID | Requirement | User Stories | Agents |
|----|-------------|--------------|--------|
| **FR-001** | Централизованный дашборд с Health Score | US-001 | Integration Agent, Data Scientist Agent |
| **FR-002** | Интеграция с Oura Ring (sleep, HRV) | US-001, US-005 | Integration Agent, Sleep Agent |
| **FR-003** | Интеграция с Apple Watch (HealthKit) | US-008, US-012 | Integration Agent |
| **FR-004** | Загрузка и обработка PDF анализов крови (INVITRO) | US-001, US-011 | Lab Interpreter Agent |
| **FR-005** | Custom RAG: загрузка протоколов (PDF/MD) | US-002 | Custom Protocol Agent |
| **FR-006** | Персонализированные рекомендации от AI-агентов | US-004, US-009, US-018 | Все агенты |
| **FR-007** | Telegram Bot интерфейс | US-006, US-010 | Orchestrator Agent |
| **FR-008** | Safety Module: проверка противопоказаний | US-004, US-020 | Safety Agent |
| **FR-009** | Интеграция с 23andMe (raw data) | US-004, US-018 | Genomics Agent |
| **FR-010** | Еженедельные отчёты с инсайтами | US-007, US-014 | Coach Agent, Data Scientist Agent |
| **FR-011** | Интерпретация анализов крови простым языком | US-011 | Lab Interpreter Agent |
| **FR-012** | Рекомендации по улучшению сна | US-012 | Sleep Agent, Coach Agent |
| **FR-013** | Понятный план действий "с чего начать" | US-009 | Coach Agent |
| **FR-014** | Напоминания через Telegram | US-010 | Coach Agent |
| **FR-015** | Загрузка эпигенетических тестов (TruDiagnostic) | US-015 | Longevity Agent |
| **FR-016** | Отслеживание биомаркеров долголетия | US-016 | Longevity Agent, Lab Interpreter Agent |
| **FR-017** | Поиск научных исследований (PubMed) | US-017 | Research Agent |
| **FR-018** | Персонализированные протоколы долголетия | US-018 | Longevity Agent, Genomics Agent |

### P1 — Should Have

| ID | Requirement | User Stories | Agents |
|----|-------------|--------------|--------|
| **FR-019** | Отслеживание эффектов добавок на биомаркеры | US-003 | Data Scientist Agent, Nutrition Agent |
| **FR-020** | N=1 эксперименты (Biohacker Lab) | US-005 | Coach Agent, Data Scientist Agent |
| **FR-021** | Техники снижения стресса с отслеживанием | US-013 | Mental Health Agent |
| **FR-022** | Отслеживание биологического возраста во времени | US-019 | Longevity Agent, Data Scientist Agent |
| **FR-023** | Проверка взаимодействий добавок | US-020 | Safety Agent |
| **FR-024** | Квартальный отчёт о прогрессе | US-021 | Longevity Agent, Coach Agent |
| **FR-025** | Интеграция с CGM (Dexcom/Libre) | US-001 | Integration Agent |
| **FR-026** | Telegram WebApp интерфейс | US-006 | — |
| **FR-027** | Multi-agent conversation (маршрутизация вопросов) | US-006 | Orchestrator Agent |

### P2 — Nice to Have

| ID | Requirement | Description | Priority Reason |
|----|-------------|-------------|-----------------|
| **FR-028** | Digital Twin (симуляции) | Прогнозирование "что будет через 5 лет" | Требует значительных ML-ресурсов |
| **FR-029** | Voice интерфейс (Алиса) | Голосовое взаимодействие | Дополнительный канал, не критичен для MVP |
| **FR-030** | Mobile App (Flutter) | Нативное мобильное приложение | Telegram-first стратегия для MVP |
| **FR-031** | Community shared protocols | Маркетплейс протоколов | Требует критической массы пользователей |
| **FR-032** | B2B Corporate Wellness dashboard | Админ-панель для HR | Post-MVP сегмент |

---

## Non-Functional Requirements

### Performance

| Requirement | Target | Priority |
|-------------|--------|----------|
| AI Agent response time | < 5 seconds (p95) | P0 |
| Dashboard load time | < 2 seconds | P0 |
| Data sync latency (wearables) | < 15 minutes | P1 |
| RAG retrieval time | < 1 second | P0 |
| Concurrent users support | 10,000 | P1 |

### Availability & Reliability

| Requirement | Target | Priority |
|-------------|--------|----------|
| System uptime | 99.5% | P0 |
| Planned maintenance window | < 2 hours/month | P1 |
| Data backup frequency | Daily | P0 |
| Recovery Point Objective (RPO) | < 24 hours | P0 |
| Recovery Time Objective (RTO) | < 4 hours | P1 |

### Security & Compliance

| Requirement | Target | Priority |
|-------------|--------|----------|
| **152-ФЗ Compliance** | Full compliance | P0 (Critical) |
| Data encryption at rest | AES-256 | P0 |
| Data encryption in transit | TLS 1.3 | P0 |
| User data residency | Russia only | P0 |
| Authentication | OAuth 2.0 + 2FA | P0 |
| Audit logging | All data access | P0 |
| GDPR-like user rights | Export/delete data | P0 |

### Scalability

| Requirement | Target | Priority |
|-------------|--------|----------|
| Users (M12) | 150,000 | P1 |
| Users (M24) | 500,000 | P1 |
| Data storage per user | 5 GB (avg) | P1 |
| RAG documents per user | 100 (avg) | P1 |
| API integrations | 100+ | P1 |

### Usability

| Requirement | Target | Priority |
|-------------|--------|----------|
| Language | Russian (primary) | P0 |
| Onboarding completion | > 70% | P0 |
| Time to first value (first insight) | < 10 minutes | P0 |
| Mobile-friendly (Telegram WebApp) | Full support | P0 |
| Accessibility (WCAG) | Level A | P2 |

---

## Constraints

### Technical Constraints

| Constraint | Description | Impact |
|------------|-------------|--------|
| **152-ФЗ** | Все персональные данные должны храниться в РФ | Выбор российских cloud-провайдеров (Yandex Cloud, VK Cloud) |
| **LLM Latency** | Ответ AI-агента должен быть < 5 секунд | Оптимизация промптов, кэширование, streaming |
| **API Rate Limits** | Wearables APIs имеют ограничения на запросы | Кэширование данных, batching запросов |
| **Telegram Bot Limits** | Ограничения на размер сообщений и файлов | Адаптация UI под Telegram формат |
| **LLM Context Window** | Ограничение контекста GigaChat/YandexGPT | RAG для long-term memory, summarization |

### Business Constraints

| Constraint | Description | Impact |
|------------|-------------|--------|
| **Wellness ≠ Medicine** | НЕ ставим диагнозы, НЕ заменяем врача | Обязательные дисклеймеры, Safety Agent |
| **Budget MVP** | Ограниченный runway | Telegram-first вместо native apps |
| **Team Size** | Стартовая команда 5-10 человек | Приоритизация P0 требований |
| **Time-to-Market** | MVP за 6 месяцев | Фокус на core features |

### Regulatory Constraints

| Constraint | Description | Mitigation |
|------------|-------------|------------|
| Запрет на медицинские диагнозы | Без лицензии нельзя ставить диагнозы | Wellness positioning, дисклеймеры |
| Рекламные ограничения | Ограничения на рекламу медицинских услуг | Юридическая экспертиза контента |
| Персональные данные | 152-ФЗ требования | Data residency в РФ, согласия |

### Ethical Constraints

| Constraint | Description |
|------------|-------------|
| No dangerous protocols | Не рекомендуем потенциально опасные интервенции |
| No children | Не работаем с пользователями младше 18 лет |
| Pregnancy/nursing | Требуем консультации с врачом |
| Mental health | Red flags detection для критических состояний |

---

## Assumptions

### Validated Assumptions ✅

| Assumption | Evidence | Confidence |
|------------|----------|------------|
| Биохакеры готовы платить 2,000-10,000 ₽/мес за ценное решение | Competitive analysis (InsideTracker $149-340+, Wild Health $362-495) | High |
| Telegram — основной канал для целевой аудитории в РФ | User research, market data | High |
| 152-ФЗ не блокирует wellness-продукты | Юридическая экспертиза | High |
| Данные разбросаны по 5+ приложениям у продвинутых биохакеров | User interviews (n=15) | High |

### Assumptions to Validate 🔄

| Assumption | Validation Method | Risk if Wrong |
|------------|-------------------|---------------|
| Telegram Bot достаточен как MVP interface | Beta test M1-M3 | Pivot to mobile-first |
| Custom RAG даёт значимое улучшение рекомендаций | A/B test M2-M3 | Deprioritize feature |
| Пользователи будут загружать свои протоколы | Usage analytics M1-M3 | Simplify KB approach |
| GigaChat достаточен для медицинского контекста | Quality evaluation M1 | Add GPT-4o fallback |
| Пользователи готовы подключать 3+ источника данных | Activation metrics M1-M3 | Simplify onboarding |

---

## Out of Scope

### Out of Scope for MVP (M1-M6)

| Feature | Reason | Future Phase |
|---------|--------|--------------|
| Native Mobile App (Flutter) | Telegram-first стратегия | Phase 2 (M6-M12) |
| Voice Interface (Алиса) | Не критично для core value | Phase 3 (M12+) |
| Digital Twin simulations | Требует значительных ML-ресурсов | Phase 3 (M12+) |
| B2B/Enterprise features | Фокус на B2C для PMF | Phase 3 (M12+) |
| Community/Marketplace | Требует критической массы | Phase 3 (M12+) |
| International markets | Фокус на РФ для MVP | Phase 4 (M24+) |

### Explicit Non-Goals

| Non-Goal | Reason |
|----------|--------|
| Medical diagnosis | Регуляторные ограничения, wellness ≠ medicine |
| Prescription recommendations | Требует медицинской лицензии |
| Children (<18) support | Этические и регуляторные ограничения |
| Emergency health situations | Не заменяем скорую помощь |

---

## Dependencies

### External Dependencies

| Dependency | Type | Owner/Provider | Status | Risk |
|------------|------|----------------|--------|------|
| **Oura Ring API** | Integration | Oura Health | Available | Medium (rate limits) |
| **Apple HealthKit** | Integration | Apple | Available | Low |
| **INVITRO API** | Integration | INVITRO | To negotiate | High (no public API) |
| **23andMe raw data** | Data format | 23andMe | Available | Low |
| **GigaChat API** | LLM | Sber | Available | Medium (quality) |
| **YandexGPT API** | LLM (fallback) | Yandex | Available | Low |
| **DrugBank API** | Safety data | DrugBank | Available (paid) | Low |
| **PubMed API** | Research | NCBI | Available (free) | Low |
| **Telegram Bot API** | Platform | Telegram | Available | Low |
| **Yandex Cloud** | Infrastructure | Yandex | Available | Low |

### Internal Dependencies

| Dependency | Type | Owner | Status |
|------------|------|-------|--------|
| RAG Pipeline (LlamaIndex + Qdrant) | Technical | AI Team | In development |
| Multi-agent orchestration (LangGraph) | Technical | AI Team | In development |
| User authentication system | Technical | Backend Team | In development |
| Data ingestion pipeline | Technical | Backend Team | In development |

### Cross-Team Dependencies

| Dependency | From Team | To Team | Description |
|------------|-----------|---------|-------------|
| API contracts | Backend | Mobile/Telegram | API schema for integrations |
| Agent prompts | Product | AI | Prompt engineering for each agent |
| Safety rules | Legal | AI | Rules for Safety Agent |
| Content guidelines | Legal | Content | Disclaimer templates |

---

## Risks & Mitigations

### High Priority Risks

| Risk | Probability | Impact | Mitigation | Owner |
|------|-------------|--------|------------|-------|
| **Регуляторные ограничения** | High | High | Wellness positioning, дисклеймеры везде, Safety Agent, юридическая экспертиза всего контента | Legal + Product |
| **AI галлюцинации в медицинском контексте** | Medium | Critical | RAG с научными базами, Safety Agent с hard blocks, human-in-the-loop для критичных рекомендаций, source attribution | AI Team |
| **Низкая конверсия Free → Paid** | High | High | Value demonstration, trial periods, gamification, personalized upsell triggers | Product + Growth |
| **Конкуренция BigTech (Apple, Google)** | High | High | Фокус на advanced biohackers (не mass market), глубокая персонализация через Custom RAG, RU рынок | Product |

### Medium Priority Risks

| Risk | Probability | Impact | Mitigation | Owner |
|------|-------------|--------|------------|-------|
| **API dependency (wearables)** | Medium | Medium | Multi-vendor strategy, data caching, offline mode | Backend |
| **GigaChat quality issues** | Medium | Medium | Fallback to YandexGPT, GPT-4o for critical flows | AI Team |
| **INVITRO API unavailable** | High | Medium | PDF parser as fallback, manual upload support | Backend |
| **User privacy concerns** | Medium | Medium | Transparent data policy, user control, encryption | Security + Legal |

### Low Priority Risks

| Risk | Probability | Impact | Mitigation | Owner |
|------|-------------|--------|------------|-------|
| **Data breach** | Low | Critical | E2E encryption, 152-ФЗ compliance, SOC2 prep, security audits | Security |
| **Team scaling challenges** | Medium | Low | Documentation, processes, mentorship | HR + CTO |
| **LLM cost overruns** | Medium | Low | Caching, query optimization, tier-based limits | AI Team + Finance |

---

## Timeline & Milestones

### Phase 1: MVP (M1-M6)

| Milestone | Target Date | Deliverables | Success Criteria |
|-----------|-------------|--------------|------------------|
| **M1: Core Infrastructure** | Month 1 | Auth, Database, Telegram Bot skeleton | System online |
| **M2: First Integrations** | Month 2 | Oura + Apple Watch + PDF parser | 3 data sources working |
| **M3: First Agents** | Month 3 | Coach Agent + Sleep Agent + Lab Interpreter | Basic recommendations working |
| **M4: Custom RAG** | Month 4 | Protocol upload + RAG pipeline | User can upload and query |
| **M5: All P0 Agents** | Month 5 | 15 agents + orchestration | Full agent coverage |
| **M6: MVP Launch** | Month 6 | Beta launch, onboarding, payments | 1,000 beta users |

### Phase 2: Growth (M6-M12)

| Milestone | Target Date | Deliverables | Success Criteria |
|-----------|-------------|--------------|------------------|
| **M7-M8** | Month 7-8 | Telegram WebApp, more integrations | 5,000 users |
| **M9-M10** | Month 9-10 | N=1 Biohacker Lab, advanced analytics | 10,000 users |
| **M11-M12** | Month 11-12 | Full tier structure, referral program | 50,000 users, 5,000 paying |

### Phase 3: Scale (M12-M24)

| Milestone | Target Date | Deliverables | Success Criteria |
|-----------|-------------|--------------|------------------|
| **M13-M18** | Month 13-18 | Mobile App (Flutter), B2B features | 200,000 users |
| **M19-M24** | Month 19-24 | Marketplace, international prep | 500,000 users, 40,000 paying |

---

## Appendix

### A. AI Agents Overview

| Agent | Responsibility | Priority |
|-------|---------------|----------|
| **Orchestrator Agent** | Координация агентов, маршрутизация запросов | P0 |
| **Coach Agent** | Мотивация, привычки, планы действий | P0 |
| **Sleep Agent** | Архитектура сна, циркадные ритмы | P0 |
| **Nutrition Agent** | Нутригеномика, диеты | P0 |
| **Lab Interpreter Agent** | Интерпретация анализов крови | P0 |
| **Genomics Agent** | ДНК-анализ, SNP интерпретация | P0 |
| **Longevity Agent** | Антистарение, биовозраст | P0 |
| **Safety Agent** | Противопоказания, взаимодействия | P0 |
| **Integration Agent** | Синтез данных из всех источников | P0 |
| **Data Scientist Agent** | Анализ паттернов, корреляции | P0 |
| **Research Agent** | Поиск научных исследований | P0 |
| **Custom Protocol Agent** | Пользовательские методики | P0 |
| **Mental Health Agent** | Стресс, тревожность | P1 |
| **Cognitive Agent** | Ноотропы, нейрофидбэк | P1 |
| **Fitness Agent** | Тренировки, восстановление | P1 |

### B. Integrations Roadmap (MVP)

| Category | Integration | Priority | API Status |
|----------|-------------|----------|------------|
| **Wearables** | Oura Ring | P0 | Available |
| **Wearables** | Apple Watch (HealthKit) | P0 | Available |
| **Labs (RU)** | INVITRO (PDF parser) | P0 | PDF fallback |
| **Genomics** | 23andMe (raw data) | P0 | Available |
| **Fitness** | Strava | P1 | Available |
| **CGM** | Dexcom G7 | P1 | Available |
| **Nutrition** | MyFitnessPal | P1 | Available |
| **Epigenetics** | TruDiagnostic (PDF) | P0 | PDF only |

### C. References

- Project Brief: `context/project-brief.yaml`
- Vision: `docs/discovery/vision.md`
- User Stories: `docs/discovery/user-stories.md`
- Personas: `docs/discovery/personas.md`
- Business Model: `docs/business/business-model.md`
- Competitive Analysis: `docs/discovery/competitive-analysis.md`
- Technical Architecture: `docs/discovery/technical/langraph-architecture.md`

---

*Документ создан: 2026-01-26*  
*Product Agent v1.0*
