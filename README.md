# BIOMAX AI v2.0 — Personal Health Operating System

**Мультиагентная платформа для управления здоровьем с AI-агентами**

- 🎯 **15 специализированных AI-агентов** для анализа всех аспектов здоровья
- 📊 **100+ интеграций** с устройствами, лабораториями и сервисами данных
- 🧠 **Custom RAG** — пользовательская база знаний с протоколами и исследованиями
- 🔒 **152-ФЗ compliance** — полная защита персональных данных
- 🇷🇺 **Локализирована для России** — интеграция с российскими лабораториями и LLM

---

## 📚 Каталог документов проекта

Все документы проекта организованы по **типам** и **фазам разработки**. Используйте этот каталог для навигации по проекту.

### 🎯 Быстрый старт (5-10 минут)

Начните отсюда, если нужен быстрый обзор проекта:

- **[Project Brief](context/project-brief.yaml)** — основной документ проекта
  - Видение и проблемы
  - Целевая аудитория и рынок
  - Основные функции (7 P0 features)
  - Tech stack и MVP-модули
  - Решения и следующие шаги

- **[Project Brief Summary](context/summaries/project-brief-summary.md)** — 1-страничное резюме
  - Одна строка описания
  - Инновации и преимущества
  - Целевые сегменты

---

## 📋 ПО ТИПАМ ДОКУМЕНТОВ

### 1️⃣ СТРАТЕГИЯ И ПРОДУКТ (7 документов)

#### 📄 Основные документы

| № | Документ | Размер | Описание |
|---|----------|--------|---------|
| 1 | [Vision Statement](docs/discovery/vision.md) | 457 строк | **Видение продукта**: проблемы, решение, уникальная ценность, успеха метрики |
| 2 | [Product Requirements Document (PRD)](docs/discovery/prd.md) | 568 строк | **27 функциональных требований P0** + personas + goals + roadmap outline |
| 3 | [User Stories](docs/discovery/user-stories.md) | 1,356 строк | **21 user story** с acceptance criteria в формате Gherkin; 15 агентов |
| 4 | [Personas](docs/discovery/personas.md) | ~350 строк | **3 подробные persona** с JTBD, pain points, willingness to pay |
| 5 | [Roadmap](docs/discovery/roadmap.md) | ~300 строк | **Трёхфазный roadmap**: MVP → Growth → Scale с таймлайнами |
| 6 | [Competitive Analysis](docs/discovery/competitive-analysis.md) | 875 строк | **8 конкурентов** (InsideTracker, Levels, Oura, WHOOP, Gyroscope и др.) |
| 7 | [Extended Research](docs/BIOMAX_AI_v2_Extended_Research%20(1).md) | 1,284 строк | **Глубокий market research** — biohacking тренды, научная база, inspiration |

#### 📋 Резюме для быстрого ознакомления

| Документ | Размер | Для кого |
|----------|--------|----------|
| [PRD Summary](context/summaries/prd-summary.md) | 75 строк | Быстрый обзор основных фич |
| [Personas Summary](context/summaries/personas-summary.yaml) | 50 строк | 3 personas на одной странице |
| [Roadmap Summary](context/summaries/roadmap-summary.yaml) | 40 строк | Таймлайн фаз в YAML |

---

### 2️⃣ БИЗНЕС И МОДЕЛЬ (4 документа)

| № | Документ | Размер | Описание |
|---|----------|--------|---------|
| 1 | [Business Model](docs/business/business-model.md) | ~300 строк | **5 pricing tiers** (Free → Longevity Elite), revenue streams, unit economics |
| 2 | [Requirements (FURPS+)](docs/business/requirements-furps.md) | ~400 строк | **218 требований**: Functional, Usability, Reliability, Performance, Supportability |
| 3 | [Use Cases](docs/business/use-cases.md) | ~200 строк | **Основные юз-кейсы** по personas |

#### 📋 Резюме

| Документ | Размер |
|----------|--------|
| [Business Model Summary](context/summaries/business-model-summary.md) | 55 строк |
| [Requirements Summary (FURPS+)](context/summaries/requirements-furps-summary.yaml) | 60 строк |
| [Use Cases Summary](context/summaries/use-cases-summary.yaml) | 50 строк |

---

### 3️⃣ ПРАВОВЫЕ И РЕГУЛЯТОРНЫЕ (3 документа)

| № | Документ | Размер | Описание |
|---|----------|--------|---------|
| 1 | [152-ФЗ Compliance](docs/discovery/legal/152-fz-compliance.md) | 461 строк | **Российское законодательство**: требования к хранению данных, контрольные точки |
| 2 | [Wellness vs Medicine](docs/discovery/legal/wellness-vs-medicine.md) | ~250 строк | **Правовые границы**: что можем/не можем, disclaimers, positioning |
| 3 | [Legal Summary](docs/discovery/legal/legal-summary.md) | 371 строк | **Резюме рисков** и compliance checklist |

#### 📄 Доп. материалы

- [Disclaimers Templates](docs/discovery/legal/disclaimers-templates.md) — готовые шаблоны дисклеймеров

---

### 4️⃣ ТЕХНИЧЕСКАЯ АРХИТЕКТУРА (3 документа)

| № | Документ | Размер | Описание |
|---|----------|--------|---------|
| 1 | [API Integrations](docs/discovery/technical/api-integrations.md) | ~400 строк | **100+ API** по категориям (wearables, CGM, labs, genomics, microbiome) |
| 2 | [LangGraph Architecture](docs/discovery/technical/langraph-architecture.md) | ~300 строк | **Мультиагентная архитектура**: 15 агентов, orchestration, state management |
| 3 | [Kubernetes Infrastructure](docs/discovery/technical/kubernetes-infrastructure.md) | ~250 строк | **K8s deployment**, 152-ФЗ considerations, scalability |

#### 📄 Tech Stack Preview

```yaml
Backend:
  - API Gateway: FastAPI + Kong
  - Agent Orchestrator: LangGraph / CrewAI
  - RAG Pipeline: LlamaIndex + Qdrant
  - Databases: PostgreSQL, ClickHouse, Qdrant, Neo4j
  
Frontend:
  - Mobile: Flutter (iOS + Android)
  - Web: Next.js + Tailwind
  - Telegram: aiogram 3.x
  - Voice: Whisper + TTS

LLM:
  - International: GPT-4o, Claude
  - Russian: GigaChat, YandexGPT
```

---

### 5️⃣ АНАЛИТИКА И МЕТРИКИ (2 документа)

| № | Документ | Размер | Описание |
|---|----------|--------|---------|
| 1 | [Metrics Framework](docs/analytics/metrics-framework.md) | ~250 строк | **AARRR metrics** + health outcome KPIs + event taxonomy |
| 2 | [Tracking Plan](docs/analytics/tracking-plan.md) | ~300 строк | **Event taxonomy**, dashboards, data architecture, funnel definitions |

#### 📋 Резюме

| Документ | Размер |
|----------|--------|
| [Metrics Summary](context/summaries/metrics-framework-summary.yaml) | 50 строк |
| [Tracking Plan Summary](context/summaries/tracking-plan-summary.yaml) | 50 строк |

---

### 6️⃣ ДИЗАЙН И UX (2 документа)

| № | Документ | Размер | Описание |
|---|----------|--------|---------|
| 1 | [User Flows](docs/design/user-flows.md) | ~250 строк | **5 основных flow**: Onboarding, Dashboard, RAG, Recommendations, Reports |
| 2 | [UX Research](docs/discovery/ux-research.md) | ~300 строк | **Findings** по биохакерам и health optimizers, insights, accessibility |

#### 📄 Доп. материалы

- [Customer Journey Map](docs/design/cjm.md) — CJM для каждой personas

#### 📋 Резюме

| Документ | Размер |
|----------|--------|
| [UX Research Summary](context/summaries/ux-research-summary.yaml) | 50 строк |

---

### 7️⃣ МАРКЕТИНГ И ПАРТНЁРСТВА (4 документа)

| № | Документ | Размер | Описание |
|---|----------|--------|---------|
| 1 | [Marketing Strategy](docs/marketing/strategy.md) | ~250 строк | **Go-to-Market strategy** для трёх personas |
| 2 | [Launch Plan](docs/marketing/launch-plan.md) | ~200 строк | **Фазовый launch**: Beta → Public → Growth |
| 3 | [Content Plan](docs/marketing/content-plan.md) | ~200 строк | **Content roadmap**: блог, социал, email, events |
| 4 | [Partnership Page](docs/partnership-page.md) | 453 строк | **Landing page для партнёров** (лабы, вендоры, интеграции) |
| 5 | [Channel Strategy](docs/marketing/channel-strategy.md) | ~150 строк | **5 основных каналов** с метриками |

---

### 8️⃣ RESEARCH И MARKET INSIGHTS (1 документ)

| № | Документ | Размер | Описание |
|---|----------|--------|---------|
| 1 | [Market Research](docs/research/market-research.md) | ~150 строк | **Размер рынка**, тренды, opportunity gaps |

---

## 📅 ПО ФАЗАМ ПРОЕКТА

### DISCOVERY ✅ ЗАВЕРШЕНО (2026-01-26)

**Статус**: Phase complete, all 7 actions delivered ✅

#### 🎯 Deliverables (32 артефакта)

**Primary Documents (18)**
- ✅ Vision + PRD + User Stories
- ✅ Business Model + Requirements (FURPS+)
- ✅ Legal (152-ФЗ compliance)
- ✅ Technical Architecture (LangGraph, K8s, APIs)
- ✅ Competitive Analysis (8 competitors)
- ✅ UX Research (10 interviews)
- ✅ Marketing & Partnerships
- ✅ Analytics & Metrics

**Summaries (9)**
- ✅ Project Brief Summary
- ✅ PRD Summary
- ✅ Personas Summary
- ✅ Requirements Summary
- ✅ Metrics Framework Summary
- ✅ Roadmap Summary
- ✅ Use Cases Summary
- ✅ UX Research Summary
- ✅ Business Model Summary

**Checkpoints (5)**
- ✅ 2026-01-26-requirements-furps.md
- ✅ 2026-01-26-tracking-plan.md
- ✅ 2026-01-26-use-cases.md
- ✅ 2026-01-26-ux-research.md
- ✅ 2026-01-26-discovery-phase-complete.md

**Phase Metrics**
- Requirements: 218 (P0: 156, P1: 56, P2: 6)
- User Stories: 21 (all with AC in Gherkin)
- Competitors Analyzed: 8
- AI Agents Mapped: 15
- API Integrations: 100+
- Quality Gate: 10/10 ✅

#### 📖 Discovery Documents Index

```
/context/
├── project-brief.yaml ..................... Master doc (448 lines)
├── summaries/ ............................ Quick reference (9 docs, ~500 lines)
├── checkpoints/ ......................... Progress tracking (5 docs)

/docs/discovery/
├── vision.md ............................ Vision statement (457 lines)
├── prd.md .............................. Product Requirements (568 lines)
├── user-stories.md ..................... User Stories × 21 (1,356 lines)
├── personas.md ......................... Personas × 3
├── roadmap.md .......................... Phase-based roadmap
├── competitive-analysis.md ............ Competitors (8) — 875 lines
├── ux-research.md ..................... UX Findings, insights, accessibility
├── technical/
│   ├── api-integrations.md ........... 100+ API catalog
│   ├── langraph-architecture.md ..... Multi-agent design
│   └── kubernetes-infrastructure.md  K8s + 152-ФЗ
├── legal/
│   ├── 152-fz-compliance.md ......... Russian law
│   ├── wellness-vs-medicine.md ..... Legal boundaries
│   └── legal-summary.md ............ Risk assessment

/docs/business/
├── business-model.md ............... 5 pricing tiers
├── requirements-furps.md ........... 218 requirements
└── use-cases.md ................... Key use cases

/docs/analytics/
├── metrics-framework.md ........... AARRR + KPIs
└── tracking-plan.md .............. Event taxonomy

/docs/design/
├── user-flows.md ................. 5 core flows
├── cjm.md ........................ Customer Journey Map

/docs/marketing/
├── strategy.md ................... Go-to-Market
├── launch-plan.md ................ Launch timeline
├── channel-strategy.md ........... 5 channels
└── content-plan.md ............... Content roadmap

/docs/
├── partnership-page.md ........... Partner landing page
├── research/
│   └── market-research.md ....... Market size & trends
└── BIOMAX_AI_v2_Extended_Research (1).md ... Deep research (1,284 lines)
```

**Reference**: [DISCOVERY_COMPLETION_REPORT.md](DISCOVERY_COMPLETION_REPORT.md)

---

### DESIGN (UPCOMING)

**Timeline**: ~6 weeks (estimated start 2026-01-27)

**Expected Deliverables**:
- [ ] Design System (60+ components, WCAG A compliance)
- [ ] Wireframes (all user flows, 5+ screens per persona)
- [ ] High-Fidelity Prototypes (Figma, interactive core features)
- [ ] Detailed LangGraph Design (15 agents, orchestration)
- [ ] Database Schema v1 (relationships, 152-ФЗ constraints)
- [ ] API Contract Specs (OpenAPI for all integrations)
- [ ] Technical Deep-Dives (per-agent specifications)
- [ ] Security Threat Model (data protection strategy)
- [ ] Accessibility Plan (WCAG A roadmap)

**Location**: `/docs/design/` (TBD)

---

### DEVELOPMENT (FUTURE)

**Estimated Timeline**: Phases MVP → Growth → Scale

**Expected Artifacts**:
- Backend Implementation (FastAPI, LangGraph orchestrator)
- Frontend (Flutter, Next.js, Telegram Bot)
- Database Migrations (PostgreSQL, ClickHouse, Qdrant)
- Integration Implementations (100+ APIs)
- Testing & QA (unit, integration, E2E)
- DevOps & Deployment (Kubernetes, CI/CD)

**Location**: `/src/`, `/backend/`, `/frontend/` (TBD)

---

## 🎯 15 СПЕЦИАЛИЗИРОВАННЫХ AI-АГЕНТОВ

Вот основные агенты, детализированные в документах:

| № | Агент | Роль | Основные User Stories | Интеграции |
|----|-------|------|----------------------|-----------|
| 1 | **Orchestrator** | Координация, маршрутизация | Multi-agent routing | LangGraph |
| 2 | **Coach** | Мотивация, рекомендации | Actionable insights, habits | Telegram, notifications |
| 3 | **Sleep** | Анализ сна, циркадные ритмы | Sleep patterns, recommendations | Oura Ring API |
| 4 | **Nutrition** | Диеты, нутригеномика | Personalized diet, supplements | MyFitnessPal API |
| 5 | **Longevity** | Биовозраст, антистарение | Epigenetic age, protocols | TruDiagnostic, test uploads |
| 6 | **Lab Interpreter** | Анализы крови | Blood test insights | INVITRO API / PDF parser |
| 7 | **Safety** | Контрпоказания, red flags | Contraindications, warnings | DrugBank API |
| 8 | **Data Scientist** | Паттерны, корреляции | Pattern analysis, trends | Internal data synthesis |
| 9 | **Genomics** | ДНК, SNP, персонализация | DNA insights, recommendations | 23andMe raw data import |
| 10 | **Research** | Поиск исследований | Literature synthesis | PubMed API |
| 11 | **Mental Health** | Стресс, mood tracking | Mood tracking, CBT | PHQ-9/GAD-7 surveys |
| 12 | **Fitness** | Тренировки, восстановление | Workout analysis, recovery | Strava API |
| 13 | **Integration** | Синтез данных, cross-agent | Data synthesis, correlations | Internal orchestration |
| 14 | **Custom Protocol** | Пользовательские методики | RAG indexing, file upload | PDF/MD file upload |
| 15 | **Cognitive** | Ноотропы, нейрофидбэк | Cognitive enhancement | Cambridge Brain Sciences |

**Детально описаны в**: [LangGraph Architecture](docs/discovery/technical/langraph-architecture.md)

---

## 📊 КЛЮЧЕВЫЕ МЕТРИКИ

### Проектные Метрики

| Метрика | Значение | Статус |
|---------|----------|--------|
| **Total Artifacts** | 32 | ✅ Превышено (target 20) |
| **Primary Documents** | 18 | ✅ Превышено (target 10) |
| **Requirements** | 218 | ✅ Превышено (target 150) |
| **Quality Gate** | 10/10 | ✅ Passed |
| **Critical Blockers** | 0 | ✅ None |

### Business Metrics (M12 Projections)

| Метрика | Прогноз |
|---------|---------|
| **Total Users** | 150,000 |
| **Paying Users** | 10,000 |
| **Conversion Rate** | 6.7% |
| **ARPU** | 1,200 ₽ |
| **MRR** | 15M ₽ |
| **LTV/CAC** | 5x |

**Детально**: [Metrics Framework](docs/analytics/metrics-framework.md) & [Tracking Plan](docs/analytics/tracking-plan.md)

---

## 🚀 БЫСТРАЯ НАВИГАЦИЯ

### Для разных ролей

**👤 Product Manager**
1. [Project Brief](context/project-brief.yaml) — overview
2. [PRD](docs/discovery/prd.md) — requirements
3. [User Stories](docs/discovery/user-stories.md) — acceptance criteria
4. [Roadmap](docs/discovery/roadmap.md) — timeline

**👨‍💼 Business Lead**
1. [Business Model](docs/business/business-model.md) — pricing, revenue
2. [Competitive Analysis](docs/discovery/competitive-analysis.md) — market gaps
3. [Legal/Compliance](docs/discovery/legal/) — risks
4. [Metrics Framework](docs/analytics/metrics-framework.md) — KPIs

**👨‍💻 Tech Architect**
1. [LangGraph Architecture](docs/discovery/technical/langraph-architecture.md) — multi-agent design
2. [API Integrations](docs/discovery/technical/api-integrations.md) — integration catalog
3. [Kubernetes Infrastructure](docs/discovery/technical/kubernetes-infrastructure.md) — deployment
4. [Requirements (FURPS+)](docs/business/requirements-furps.md) — technical specs

**🎨 Design & UX**
1. [UX Research](docs/discovery/ux-research.md) — user insights
2. [User Flows](docs/design/user-flows.md) — information architecture
3. [Customer Journey Map](docs/design/cjm.md) — CJM by persona
4. [Personas](docs/discovery/personas.md) — detailed personas

**📊 Analyst / Marketing**
1. [Metrics Framework](docs/analytics/metrics-framework.md) — KPIs
2. [Tracking Plan](docs/analytics/tracking-plan.md) — event taxonomy
3. [Marketing Strategy](docs/marketing/strategy.md) — GTM
4. [Competitive Analysis](docs/discovery/competitive-analysis.md) — market positioning

---

## 📖 РЕКОМЕНДУЕМЫЙ ПОРЯДОК ЧТЕНИЯ

### 🟢 Для новых членов команды (2-3 часа)

1. **[Project Brief Summary](context/summaries/project-brief-summary.md)** (5 мин)
2. **[Vision Statement](docs/discovery/vision.md)** (20 мин)
3. **[PRD Summary](context/summaries/prd-summary.md)** (10 мин)
4. **[Personas Summary](context/summaries/personas-summary.yaml)** (5 мин)
5. **[Business Model Summary](context/summaries/business-model-summary.md)** (10 мин)
6. Выберите свою роль и углубитесь в соответствующие docs (30-60 мин)

### 🟡 Для влубленного изучения (8-12 часов)

Прочитайте **все Primary Documents (18)** в порядке:
1. Project Brief + Summaries (30 мин)
2. Vision + PRD + User Stories (2 часа)
3. Business + Legal (1.5 часа)
4. Technical Architecture (1.5 часа)
5. UX + Design (1 час)
6. Analytics + Marketing (1 час)
7. Competitive Analysis + Research (2 часа)

### 🔴 Для экспертизы (полное изучение)

Прочитайте **все 32 документа** (Discovery Completion Report + Checkpoints):
- Primary Documents: ~5,500 lines
- Summaries: ~500 lines
- Checkpoints: ~800 lines
- **Total**: ~6,800 lines (8-12 часов)

---

## 📝 КОНТЕКСТНЫЕ РЕЗЮМЕ

Все резюме находятся в `/context/summaries/` для быстрого ознакомления:

```
📁 context/summaries/
├── project-brief-summary.md ............. 54 lines (1 liner, innovations)
├── prd-summary.md ....................... 75 lines (exec summary)
├── personas-summary.yaml ............... 50 lines (3 personas overview)
├── requirements-furps-summary.yaml ...... 60 lines (218 reqs breakdown)
├── metrics-framework-summary.yaml ....... 50 lines (key metrics)
├── roadmap-summary.yaml ................. 40 lines (phases & timelines)
├── use-cases-summary.yaml ............... 50 lines (key use cases)
├── ux-research-summary.yaml ............. 50 lines (research findings)
└── business-model-summary.md ........... 55 lines (revenue model)

Total: ~505 lines (perfect for 30-45 minute read)
```

---

## 🔖 CHECKPOINTS И PROGRESS TRACKING

Фазовые контрольные точки находятся в `/context/checkpoints/`:

```
📁 context/checkpoints/
├── 2026-01-26-requirements-furps.md ............... FURPS+ requirements checkpoint
├── 2026-01-26-tracking-plan.md ................... Metrics & tracking checkpoint
├── 2026-01-26-use-cases.md ....................... Use cases checkpoint
├── 2026-01-26-ux-research.md ..................... UX research findings checkpoint
└── 2026-01-26-discovery-phase-complete.md ........ **FINAL PHASE COMPLETION** ✅
```

**Reference**: [DISCOVERY_COMPLETION_REPORT.md](DISCOVERY_COMPLETION_REPORT.md)

---

## ⚙️ TECH STACK

### Backend
- **API Gateway**: FastAPI + Kong
- **Agent Orchestrator**: LangGraph / CrewAI
- **RAG Pipeline**: LlamaIndex + Qdrant
- **Databases**: PostgreSQL (profiles), ClickHouse/TimescaleDB (time-series), Qdrant (vectors), Neo4j (graph)
- **Cache**: Redis
- **Queue**: Kafka / RabbitMQ
- **ML Platform**: MLflow + PyTorch

### Frontend
- **Mobile**: Flutter (iOS + Android)
- **Web**: Next.js + Tailwind
- **Telegram**: aiogram 3.x
- **Voice**: Whisper + TTS

### LLM Providers
- **International**: OpenAI GPT-4o, Anthropic Claude
- **Russian**: GigaChat, YandexGPT
- **Medical**: Med-PaLM 2, BioMistral
- **Embeddings**: text-embedding-3-large, e5-mistral-7b

---

## 💰 BUSINESS MODEL

### Pricing Tiers

| Tier | Price | Features | Target |
|------|-------|----------|--------|
| **Free** | 0 ₽ | Базовый Health Score, 1 интеграция, 10 запросов/день | Lead generation |
| **Optimize** | 990 ₽/мес | Все wearables, 5 агентов, 100 запросов/день | Health Optimizers |
| **Biohacker Pro** | 2,490 ₽/мес | Все агенты, Custom RAG 5GB, безлимит | Advanced Biohackers |
| **Longevity Elite** | 9,990 ₽/мес | Эпигенетика, RAG 50GB, API, консультации | Longevity Focused |
| **Enterprise** | Custom | White-label, On-premise, SLA | B2B/Corporate |

### Revenue Streams
1. 💳 **Subscription** — Primary revenue (90%)
2. 🏪 **Marketplace** — 10-15% commission on supplements
3. 🧬 **Lab Referrals** — 5-8% affiliate on tests
4. 📚 **Premium Protocols** — Sell curated protocols
5. 🏢 **B2B/Corporate** — White-label wellness programs

**Projections M12**: MRR 15M ₽, LTV/CAC 5x

---

## ✅ DISCOVERY PHASE COMPLETION

**Status**: ✅ **QUALITY GATE PASSED** (10/10 criteria)

**Deliverables**: 32 artifacts (18 primary + 9 summaries + 5 checkpoints)

**Quality Metrics**:
- ✅ Requirements: 218 (P0: 156, P1: 56)
- ✅ User Stories: 21 (all with AC in Gherkin)
- ✅ AI Agents: 15 mapped and documented
- ✅ API Integrations: 100+ catalog
- ✅ Competitors: 8 analyzed
- ✅ Critical Blockers: 0

**Recommendation**: ✅ **PROCEED TO DESIGN PHASE**

**Next Phase**: DESIGN (6 weeks, est. 2026-02-23 sign-off)

---

## 📚 ДОКУМЕНТАЦИЯ ПО АСПЕКТАМ

### 🛡️ Безопасность и Compliance

- [152-ФЗ Compliance](docs/discovery/legal/152-fz-compliance.md) — Российское законодательство
- [Wellness vs Medicine](docs/discovery/legal/wellness-vs-medicine.md) — Правовые границы
- [Legal Summary](docs/discovery/legal/legal-summary.md) — Risk assessment
- [Disclaimers Templates](docs/discovery/legal/disclaimers-templates.md) — Ready-to-use templates

### 🔗 Интеграции (100+ API)

**Категории**:
- 📱 **Wearables**: Oura, Apple Watch, WHOOP, Garmin, Fitbit
- 📊 **CGM**: Dexcom, Libre, Levels
- 🧪 **Labs (RU)**: INVITRO, Helix, CMD, Гемотест
- 🧬 **Genomics**: 23andMe, Ancestry, Nebula
- 🦠 **Microbiome**: Viome, ZOE, Atlas
- 🍽️ **Nutrition**: MyFitnessPal, Cronometer

**Детальный каталог**: [API Integrations](docs/discovery/technical/api-integrations.md)

### 📊 Аналитика и Метрики

**Framework**: AARRR (Acquisition, Activation, Retention, Revenue, Referral)

**Key Metrics**:
- DAU/MAU ratio > 30%
- AI queries per user > 5/week
- Free → Paid conversion > 5%
- Paid retention (M3) > 70%
- NPS > 50

**Документы**: [Metrics Framework](docs/analytics/metrics-framework.md) + [Tracking Plan](docs/analytics/tracking-plan.md)

---

## 🎯 КЛЮЧЕВЫЕ РЕШЕНИЯ (2026-01-26)

| Решение | Выбор | Обоснование |
|---------|-------|-----------|
| **Platform Priority** | Telegram Bot → WebApp → Flutter | Time-to-market через Telegram |
| **Target Market** | Russia (primary) | 152-ФЗ compliance, local labs, GigaChat |
| **MVP Scope** | Max modules + 1 integration each | Демонстрация полноты платформы |
| **Infrastructure** | Self-hosted Kubernetes | Контроль данных, 152-ФЗ, гибкость |
| **Partnerships** | Landing Page для привлечения | Нужна для outreach к партнёрам |

---

## 🚨 РИСКИ И СМЯГЧЕНИЕ

| Риск | Вероятность | Воздействие | Смягчение |
|------|-------------|------------|----------|
| **Regulatory Constraints** | High | High | Wellness positioning, disclaimers |
| **Data Security Breach** | Medium | **CRITICAL** | E2E encryption, 152-ФЗ, SOC2 |
| **AI Hallucinations** | Medium | High | RAG + safety agent, human-in-loop |
| **Low Conversion F→P** | High | Medium | Value demo, trials, gamification |
| **BigTech Competition** | High | High | Advanced biohackers focus, RU market |

**Полный анализ**: [Legal Summary](docs/discovery/legal/legal-summary.md) & [DISCOVERY_COMPLETION_REPORT.md](DISCOVERY_COMPLETION_REPORT.md)

---

## 📞 КОНТАКТЫ И ПОДДЕРЖКА

**Project Lead**: Orchestrator Agent  
**Documentation**: Last updated 2026-01-26  
**Status**: Discovery Complete ✅ → Design Phase Ready 🎨

---

## 📄 Лицензия

MIT License — используйте и адаптируйте свободно.

---

## 🙏 Благодарности

Спасибо всем участникам Discovery фазы:
- **Product Team** — Vision, PRD, User Stories
- **Research Team** — Competitive analysis, market research
- **Business Team** — Business model, requirements
- **Technical Team** — Architecture, integrations
- **Legal Team** — Compliance, regulatory framework
- **UX Team** — User research, flows, accessibility
- **Analytics Team** — Metrics, tracking plan
- **Orchestrator** — Coordination and quality gates

---

**Последнее обновление**: 26 января 2026 года  
**Статус**: ✅ DISCOVERY PHASE COMPLETE | 🎨 DESIGN PHASE READY
