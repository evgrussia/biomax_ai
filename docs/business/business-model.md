# Бизнес-модель: BIOMAX AI v2.0

**Версия:** 1.0  
**Дата:** 2026-01-26  
**Автор:** Business-Analyst Agent  
**Статус:** Draft → Review

---

## Executive Summary

BIOMAX AI — мультиагентная AI-платформа для управления здоровьем и биохакинга, позиционируемая как "Personal Health Operating System". Бизнес-модель строится на **freemium SaaS** с четырьмя тарифными планами, дополнительными revenue streams от маркетплейса и B2B-сегмента. Целевой рынок — русскоязычная аудитория биохакеров и health optimizers (SAM ~$2B). Ключевое конкурентное преимущество — мультиагентная AI-архитектура + Custom RAG для персонализации.

---

## Business Model Canvas

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                              BIOMAX AI — BUSINESS MODEL CANVAS                           │
├───────────────────┬───────────────────┬───────────────────┬───────────────────┬─────────┤
│ KEY               │ KEY               │ VALUE             │ CUSTOMER          │CUSTOMER │
│ PARTNERSHIPS      │ ACTIVITIES        │ PROPOSITIONS      │ RELATIONSHIPS     │SEGMENTS │
│                   │                   │                   │                   │         │
│ • Лаборатории     │ • AI Development  │ • Единая платформа│ • AI-коуч 24/7    │ PRIMARY │
│   (INVITRO,       │   (15 агентов +   │   для ВСЕХ        │ • Self-service    │ • Продв.│
│   Helix, CMD)     │   orchestration)  │   категорий       │   + AI assist     │   биохак│
│ • Wearables       │ • Интеграции с    │   биохакинга      │ • Community       │   еры   │
│   (Oura, Garmin,  │   устройствами    │ • Персонализация  │   (shared         │ • Health│
│   WHOOP)          │ • RAG Pipeline    │   через генетику, │   protocols)      │   optim.│
│ • Genomics        │   (Custom KB)     │   биомаркеры,     │ • Telegram        │ SECOND. │
│   (23andMe,       │ • Content &       │   данные wearables│   support         │ • Long- │
│   Atlas Biomed)   │   Protocol        │ • N=1 эксперименты│ • Premium:        │   evity │
│ • LLM Providers   │   Curation        │   с ML-анализом   │   Personal        │ • B2B   │
│   (GigaChat,      │ • User Engagement │ • Custom RAG —    │   Health Coach    │   Corp. │
│   YandexGPT)      │   & Support       │   своя база знаний│                   │   Well- │
│ • Cloud (Yandex   │ • Compliance &    │ • Научная         │                   │   ness  │
│   Cloud, VK Cloud)│   Security        │   строгость       │                   │         │
│ • Маркетплейсы    │                   │   (source attrib.)│                   │         │
│   (iHerb, добавки)│                   │                   │                   │         │
│                   ├───────────────────┤                   ├───────────────────┤         │
│                   │ KEY               │                   │ CHANNELS          │         │
│                   │ RESOURCES         │                   │                   │         │
│                   │                   │                   │ • Telegram Bot    │         │
│                   │ • AI/ML команда   │                   │   (primary)       │         │
│                   │   (LangGraph,     │                   │ • Telegram WebApp │         │
│                   │   RAG, agents)    │                   │ • Mobile Apps     │         │
│                   │ • RAG Knowledge   │                   │   (Flutter)       │         │
│                   │   Base (протоколы │                   │ • Web Dashboard   │         │
│                   │   + research)     │                   │ • Voice (Алиса)   │         │
│                   │ • Integration     │                   │ • Партнёрства     │         │
│                   │   Platform        │                   │   (лаборатории,   │         │
│                   │ • User Data       │                   │   wellness-клубы) │         │
│                   │   (152-ФЗ compl.) │                   │                   │         │
│                   │ • Brand & Trust   │                   │                   │         │
├───────────────────┴───────────────────┴───────────────────┴───────────────────┴─────────┤
│ COST STRUCTURE                              │ REVENUE STREAMS                            │
│                                             │                                            │
│ FIXED (60-70%)                              │ PRIMARY (85%)                              │
│ • Team (AI/ML, Backend, Mobile): 60%        │ • Subscriptions: 990-9990 ₽/мес           │
│ • Infrastructure (Cloud, LLM APIs): 15%     │   - Free: 0 ₽ (lead gen)                  │
│ • Office & Legal: 5%                        │   - Optimize: 990 ₽/мес                   │
│                                             │   - Biohacker Pro: 2,490 ₽/мес            │
│ VARIABLE (30-40%)                           │   - Longevity Elite: 9,990 ₽/мес          │
│ • LLM API calls (per query): 20%            │   - Enterprise: Custom (50-200k/год)      │
│ • Customer acquisition: 15%                 │                                            │
│ • Integration maintenance: 5%               │ SECONDARY (15%)                            │
│                                             │ • Marketplace commission: 10-15%           │
│ Target Gross Margin: 65-75%                 │ • Lab test referrals: 5-8%                │
│ Target Net Margin (M24): 15-20%             │ • Premium Protocols: one-time sales       │
│                                             │ • B2B/Enterprise: white-label, SLA        │
└─────────────────────────────────────────────┴────────────────────────────────────────────┘
```

---

## Детализация компонентов

### 1. Customer Segments (Сегменты клиентов)

| Сегмент | Описание | Размер (RU) | % от Revenue | Приоритет |
|---------|----------|-------------|--------------|-----------|
| **Продвинутые биохакеры** | 5+ устройств, активные протоколы, N=1 эксперименты | ~5M человек | 50% | **P0 — Primary** |
| **Health Optimizers** | Apple Watch, следят за здоровьем, ищут AI-коуча | ~15M человек | 30% | **P1 — Secondary** |
| **Longevity-focused** | Фокус на биовозраст, эпигенетика, premium | ~1.5M человек | 10% | **P1 — Niche Premium** |
| **B2B/Corporate Wellness** | HR-программы, ДМС интеграция | 10,000+ компаний | 10% | **P2 — Growth** |

#### Детальные профили сегментов

**Segment 1: Продвинутые биохакеры (Primary)**

| Характеристика | Значение |
|----------------|----------|
| **Demographics** | 25-55 лет, urban, доход 300K+₽/мес, tech-savvy |
| **Biohacking Stack** | Oura/WHOOP + CGM + Genomics + 10+ добавок |
| **Monthly Spend** | $214 в среднем на биохакинг ($150-500 диапазон) |
| **JTBD** | "Объединить все данные, понять что реально работает" |
| **Acquisition** | Telegram-каналы, YouTube (Huberman), подкасты |
| **Willingness to Pay** | 2,490-9,990 ₽/мес |
| **Churn Risk** | Низкий (высокая вовлечённость) |

**Segment 2: Health Optimizers (Secondary)**

| Характеристика | Значение |
|----------------|----------|
| **Demographics** | 30-50 лет, средний-высокий доход 150-300K₽/мес |
| **Health Stack** | Apple Watch / Fitbit + 1-2 приложения |
| **Monthly Spend** | $50-100 на wellness |
| **JTBD** | "Получить понятные рекомендации без PhD в биохакинге" |
| **Acquisition** | Instagram, TikTok, wellness-блоги |
| **Willingness to Pay** | 990-2,490 ₽/мес |
| **Churn Risk** | Средний (требует демонстрации value) |

**Segment 3: Longevity-focused (Niche Premium)**

| Характеристика | Значение |
|----------------|----------|
| **Demographics** | 40-65 лет, высокий доход 500K+₽/мес |
| **Focus** | Биологический возраст, эпигенетика, гормоны |
| **Monthly Spend** | $300-1,000+ на longevity |
| **JTBD** | "Управлять pace of aging научным методом" |
| **Acquisition** | Longevity-конференции, word-of-mouth, premium wellness |
| **Willingness to Pay** | 9,990 ₽/мес + premium services |
| **Churn Risk** | Низкий (high commitment) |

---

### 2. Value Propositions (Ценностные предложения)

| Для сегмента | Ценность | Дифференциатор |
|--------------|----------|----------------|
| **Продвинутые биохакеры** | Все данные + все протоколы + AI-анализ в одном месте | Custom RAG — уникальная персональная база знаний |
| **Health Optimizers** | AI-коуч, который знает ваш контекст и даёт понятные советы | Мультиагентная система (15 специализированных AI) |
| **Longevity-focused** | Научное управление биологическим возрастом | Digital Twin + Эпигенетические интеграции |
| **B2B/Corporate** | ROI wellness-программ + engagement сотрудников | Analytics dashboard + ДМС интеграция |

#### Value Proposition Canvas (Primary Segment)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    VALUE PROPOSITION CANVAS                              │
│                    (Продвинутые биохакеры)                               │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  CUSTOMER PROFILE                    │    VALUE MAP                      │
│  ─────────────────                   │    ─────────                      │
│                                      │                                   │
│  JOBS TO BE DONE:                    │    PRODUCTS/SERVICES:             │
│  ☐ Централизовать данные             │    ✓ 100+ интеграций              │
│    с 5+ устройств                    │    ✓ Health Score Dashboard       │
│  ☐ Понять cause-effect               │    ✓ N=1 Experiment Lab           │
│    интервенций                       │    ✓ 15 AI-агентов                │
│  ☐ Оптимизировать под                │    ✓ Custom RAG (своя KB)         │
│    свою генетику                     │                                   │
│  ☐ Проводить N=1                     │    PAIN RELIEVERS:                │
│    эксперименты                      │    ✓ Auto-sync со всех устройств  │
│  ☐ Следить за биовозрастом           │    ✓ ML для cause-effect          │
│                                      │    ✓ Genomics Agent               │
│  PAINS:                              │    ✓ Scientific protocol library  │
│  ✗ Данные в 7+ приложениях           │    ✓ Longevity Agent              │
│  ✗ 5+ ч/неделю на Excel              │                                   │
│  ✗ Нет персонализации                │    GAIN CREATORS:                 │
│  ✗ Невозможно оценить                │    ✓ Custom RAG с протоколами     │
│    эффективность протокола           │    ✓ Biohacker Lab (experiments)  │
│                                      │    ✓ Community shared protocols   │
│  GAINS:                              │    ✓ Source attribution           │
│  ☐ "Один источник правды"            │    ✓ Evidence levels              │
│  ☐ Персонализация под ДНК            │                                   │
│  ☐ Научный подход к N=1              │                                   │
│  ☐ Сообщество биохакеров             │                                   │
│                                      │                                   │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### 3. Channels (Каналы)

| Канал | Тип | Фаза | Эффективность | CAC |
|-------|-----|------|---------------|-----|
| **Telegram Bot** | Digital / Owned | Awareness → Delivery | Высокая | $10-20 |
| **Telegram Channels** | Social / Earned | Awareness | Высокая | $5-15 (organic) |
| **YouTube/Podcasts** | Content / Earned | Awareness → Evaluation | Средняя | $30-50 |
| **Telegram WebApp** | Digital / Owned | Evaluation → Purchase → Delivery | Высокая | — |
| **Mobile App (Flutter)** | Digital / Owned | Purchase → Delivery → After-sales | Высокая | — |
| **Партнёрства (Labs)** | Partner | Awareness → Purchase | Высокая | $20-40 |
| **Word-of-Mouth** | Organic | All phases | Очень высокая | $0-10 |
| **B2B Direct Sales** | Direct | Awareness → Purchase | Средняя | $200-500 |

#### Channel Strategy Matrix

| Фаза | Primary Channel | Secondary Channels | KPI |
|------|-----------------|-------------------|-----|
| **Awareness** | Telegram каналы + YouTube | Подкасты, Instagram, PR | Reach, Impressions |
| **Evaluation** | Telegram Bot (free tier) | Landing page, Demo videos | Sign-ups, Trial starts |
| **Purchase** | Telegram WebApp | Mobile App, Web | Conversion rate |
| **Delivery** | Telegram Bot + App | Web Dashboard | Active usage |
| **After-sales** | In-app + Telegram support | Community, Email | NPS, Retention |

---

### 4. Customer Relationships (Отношения с клиентами)

| Сегмент | Тип отношений | Стоимость | Детали |
|---------|---------------|-----------|--------|
| **Free** | Automated Self-service | Низкая | AI-ответы, базовый функционал |
| **Optimize** | AI-assisted Self-service | Низкая-средняя | 5 AI-агентов, Telegram support |
| **Biohacker Pro** | AI-personalized + Community | Средняя | Все агенты, Custom RAG, Community |
| **Longevity Elite** | Personal + Concierge | Высокая | Personal Health Coach, Priority support |
| **Enterprise** | Dedicated Account Manager | Высокая | SLA, Custom integrations, Onboarding |

#### Relationship Lifecycle

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    CUSTOMER RELATIONSHIP LIFECYCLE                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ONBOARDING (Day 0-7)                                                    │
│  ───────────────────                                                     │
│  1. Sign up via Telegram Bot                                             │
│  2. Connect first wearable (Oura/Apple Watch)                            │
│  3. Complete health profile questionnaire                                │
│  4. Get first Health Score                                               │
│  5. Receive personalized "Quick Wins" (3 actions)                        │
│                                                                          │
│  ACTIVATION (Day 7-30)                                                   │
│  ─────────────────────                                                   │
│  1. Connect 2nd data source                                              │
│  2. First AI conversation with specialized agent                         │
│  3. Set up first N=1 experiment OR                                       │
│  4. Upload first protocol to Custom RAG                                  │
│  5. Achieve first "milestone" (improved metric)                          │
│                                                                          │
│  ENGAGEMENT (Month 2-6)                                                  │
│  ──────────────────────                                                  │
│  1. Weekly AI insights and recommendations                               │
│  2. Monthly Health Score review                                          │
│  3. Community engagement (shared protocols)                              │
│  4. Upsell triggers based on usage patterns                              │
│                                                                          │
│  RETENTION (Month 6+)                                                    │
│  ─────────────────────                                                   │
│  1. Quarterly comprehensive health reports                               │
│  2. Personalized protocol optimizations                                  │
│  3. New feature early access                                             │
│  4. Referral program                                                     │
│  5. Anniversary rewards                                                  │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### 5. Revenue Streams (Потоки доходов)

| Источник | Модель | % от выручки (Target M24) | Маржа | Приоритет |
|----------|--------|---------------------------|-------|-----------|
| **Subscriptions (B2C)** | Recurring | 70% | 75-80% | P0 |
| **Enterprise (B2B)** | Recurring + Services | 15% | 60-70% | P1 |
| **Marketplace Commission** | Transaction | 8% | 95%+ | P2 |
| **Lab Referrals** | Commission | 4% | 95%+ | P2 |
| **Premium Protocols** | One-time | 3% | 80% | P3 |

#### Subscription Tiers Detail

| Tier | Price/мес | Price/год (скидка 20%) | Target Users | ARPU | LTV (18 мес) |
|------|-----------|------------------------|--------------|------|--------------|
| **Free** | 0 ₽ | — | 100,000 | 0 ₽ | 0 ₽ (→ conversion) |
| **Optimize** | 990 ₽ | 9,500 ₽ | 30,000 | 950 ₽ | 17,100 ₽ |
| **Biohacker Pro** | 2,490 ₽ | 23,900 ₽ | 15,000 | 2,390 ₽ | 43,020 ₽ |
| **Longevity Elite** | 9,990 ₽ | 95,900 ₽ | 3,000 | 9,590 ₽ | 172,620 ₽ |
| **Enterprise** | Custom | 600,000-2,400,000 ₽ | 50 | 100,000 ₽/мес | 1,800,000 ₽ |

#### Unit Economics (Target M24)

| Метрика | Free | Optimize | Biohacker Pro | Longevity Elite |
|---------|------|----------|---------------|-----------------|
| **CAC** | $5 | $30 | $50 | $100 |
| **ARPU/мес** | $0 | $10 | $26 | $104 |
| **Gross Margin** | — | 75% | 78% | 82% |
| **Payback Period** | — | 4 мес | 2.5 мес | 1.2 мес |
| **LTV** | $0 | $180 | $468 | $1,872 |
| **LTV/CAC** | — | 6.0x | 9.4x | 18.7x |

---

### 6. Key Resources (Ключевые ресурсы)

| Ресурс | Тип | Критичность | Описание |
|--------|-----|-------------|----------|
| **AI/ML Team** | Human | Critical | LangGraph, RAG, multi-agent orchestration |
| **RAG Knowledge Base** | Intellectual | Critical | Протоколы, исследования, персональные данные |
| **Integration Platform** | Physical/Tech | Critical | 100+ API интеграций с устройствами |
| **User Data (152-ФЗ)** | Intellectual | Critical | Персональные health данные |
| **Brand & Trust** | Intellectual | High | Репутация в biohacking community |
| **Infrastructure** | Physical | High | Kubernetes cluster, databases, LLM APIs |
| **Scientific Advisory Board** | Human | Medium | Эксперты для верификации контента |

#### Resource Investment Priorities

```
                    RESOURCE PRIORITY MATRIX
                    
                    High Strategic Value
                          │
       ┌──────────────────┼──────────────────┐
       │                  │                  │
       │   AI/ML Team     │   RAG Knowledge  │
       │   ★★★★★          │   Base ★★★★★     │
       │                  │                  │
───────┼──────────────────┼──────────────────┼───────
       │                  │                  │
High   │   Integration    │   User Data &    │  Low
Cost   │   Platform       │   Compliance     │  Cost
       │   ★★★★☆          │   ★★★★☆          │
       │                  │                  │
       └──────────────────┼──────────────────┘
                          │
                    Low Strategic Value

    ★★★★★ = Invest heavily, core differentiator
    ★★★★☆ = Maintain competitive parity
```

---

### 7. Key Activities (Ключевые активности)

| Активность | Категория | Для чего | Метрика успеха |
|------------|-----------|----------|----------------|
| **AI Agent Development** | Production | Создание и улучшение 15 агентов | Agent quality score, response time |
| **RAG Pipeline Operations** | Production | Индексация, поиск, генерация | RAG accuracy, latency |
| **Integration Development** | Production | Подключение новых устройств/API | # integrations, sync reliability |
| **Content Curation** | Production | Верификация протоколов, исследований | Content freshness, accuracy |
| **User Engagement** | Platform | Retention, upsell, community | MAU, NPS, conversion |
| **Compliance & Security** | Platform | 152-ФЗ, data protection | 0 breaches, audit pass |
| **Customer Support** | Problem-solving | Решение проблем пользователей | CSAT, response time |
| **Partnership Management** | Platform | Развитие партнёрской сети | # partners, revenue from partners |

---

### 8. Key Partnerships (Ключевые партнёрства)

| Партнёр | Тип | Что получаем | Что даём | Приоритет |
|---------|-----|--------------|----------|-----------|
| **Лаборатории (INVITRO, Helix, CMD)** | Strategic Alliance | API интеграция, данные анализов | Трафик, реферальные комиссии | P0 |
| **Wearables (Oura, Garmin, WHOOP)** | Coopetition | API access, данные | Пользовательская база, visibility | P0 |
| **Genomics (23andMe, Atlas)** | Strategic | Геномные данные | Трафик, интерпретация | P1 |
| **LLM Providers (GigaChat, YandexGPT)** | Supplier | LLM APIs, embeddings | Volume, case study | P0 |
| **Cloud (Yandex Cloud, VK Cloud)** | Supplier | Infrastructure, 152-ФЗ | Revenue, case study | P1 |
| **Маркетплейсы добавок** | Supplier | Продукты для рекомендаций | Трафик, конверсии | P2 |
| **Страховые (ДМС)** | Strategic | B2B клиенты, данные | White-label решение | P2 |
| **Wellness-клубы** | Strategic | Физическая дистрибуция | Digital capabilities | P2 |

#### Partnership Development Roadmap

| Фаза | Timeline | Focus Partners | Goal |
|------|----------|----------------|------|
| **MVP** | M1-M6 | INVITRO, Oura, GigaChat | Core integrations working |
| **Growth** | M6-M12 | +5 wearables, +2 labs, Atlas | Broad data coverage |
| **Scale** | M12-M24 | Insurance, Enterprise, International | B2B revenue, expansion |

---

### 9. Cost Structure (Структура затрат)

| Категория затрат | % от общих | Тип | Детали |
|------------------|------------|-----|--------|
| **Team (R&D)** | 45% | Fixed | AI/ML (40%), Backend (30%), Mobile (20%), QA (10%) |
| **Team (Operations)** | 15% | Fixed | Support, Content, Marketing, Legal |
| **Infrastructure** | 12% | Semi-variable | Cloud, Databases, Kubernetes |
| **LLM API Costs** | 15% | Variable | GigaChat, YandexGPT, embeddings |
| **Customer Acquisition** | 8% | Variable | Marketing, partnerships |
| **Legal & Compliance** | 3% | Fixed | 152-ФЗ audits, legal counsel |
| **Office & Admin** | 2% | Fixed | Office, tools, misc |

#### Cost Projection (Monthly, Target M24)

| Cost Category | M6 | M12 | M24 |
|---------------|-----|-----|-----|
| **Team** | 3M ₽ | 6M ₽ | 12M ₽ |
| **Infrastructure** | 500K ₽ | 1.5M ₽ | 3M ₽ |
| **LLM APIs** | 300K ₽ | 1.5M ₽ | 4M ₽ |
| **Marketing/CAC** | 500K ₽ | 1.5M ₽ | 3M ₽ |
| **Other** | 200K ₽ | 500K ₽ | 1M ₽ |
| **Total** | **4.5M ₽** | **11M ₽** | **23M ₽** |

---

## Ключевые метрики бизнес-модели

| Метрика | Текущее (M0) | Target M12 | Target M24 |
|---------|--------------|------------|------------|
| **MRR** | 0 | 15M ₽ | 60M ₽ |
| **ARR** | 0 | 180M ₽ | 720M ₽ |
| **Paying Users** | 0 | 10,000 | 40,000 |
| **Free Users** | 0 | 150,000 | 500,000 |
| **Conversion (Free→Paid)** | — | 5% | 7% |
| **CAC (blended)** | — | $35 | $30 |
| **ARPU (paying)** | — | 1,500 ₽ | 1,500 ₽ |
| **LTV/CAC** | — | 5x | 7x |
| **Gross Margin** | — | 70% | 75% |
| **Net Revenue Retention** | — | 105% | 115% |
| **Churn (monthly)** | — | 5% | 3% |

---

## Конкурентное позиционирование

### Positioning Map

```
                    DEPTH OF PERSONALIZATION
                           High
                            │
         ┌──────────────────┼──────────────────┐
         │                  │                  │
         │   Wild Health    │   BIOMAX AI ★    │
         │   ($395/mo)      │   (AI + Custom   │
         │   Human coaches  │   RAG + Multi-   │
         │                  │   Agent)         │
─────────┼──────────────────┼──────────────────┼─────────
         │                  │                  │
Wide     │   InsideTracker  │   Oura/WHOOP     │  Narrow
Coverage │   (Labs focus)   │   (Wearables     │  Coverage
         │                  │   only)          │
         │   Gyroscope      │   Levels         │
         │   (Data viz)     │   (CGM only)     │
         │                  │                  │
         └──────────────────┼──────────────────┘
                            │
                           Low
```

### Competitive Advantage Summary

| Advantage | BIOMAX AI | InsideTracker | Levels | Oura | Wild Health |
|-----------|-----------|---------------|--------|------|-------------|
| **All biohacking categories** | ✅ | ❌ (labs only) | ❌ (CGM) | ❌ (wearables) | ❌ (human-limited) |
| **Multi-agent AI** | ✅ 15 agents | ❌ | ❌ | ❌ | ❌ |
| **Custom RAG (user KB)** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **N=1 Experiments** | ✅ with ML | ❌ | ❌ | ❌ | ✅ (manual) |
| **RU Localization** | ✅ 152-ФЗ | ❌ | ❌ | ❌ | ❌ |
| **Price ($/mo)** | $10-104 | $15-30 | $42-125 | $6 | $362-495 |

---

## Риски и митигации

| Риск | Вероятность | Влияние | Митигация |
|------|-------------|---------|-----------|
| **Регуляторные ограничения** | High | High | Wellness ≠ medicine positioning, дисклеймеры, Safety Agent |
| **Низкая конверсия Free→Paid** | High | Medium | Value demonstration, trial periods, gamification |
| **LLM галлюцинации** | Medium | High | RAG с научными базами, human-in-the-loop, Safety Agent |
| **API зависимость (wearables)** | Medium | Medium | Multi-vendor strategy, data caching |
| **Конкуренция BigTech** | High | High | Niche focus (RU, advanced biohackers), Custom RAG |
| **Data breach** | Low | Critical | E2E encryption, 152-ФЗ compliance, SOC2 prep |

---

## Monetization Roadmap

### Phase 1: MVP (M1-M6)
- **Model:** Freemium с одним платным тарифом (Biohacker Pro)
- **Goal:** Product-market fit validation, 5,000 users
- **Revenue target:** Break-even на unit economics

### Phase 2: Growth (M6-M12)
- **Model:** Full tier structure (Free → Elite)
- **Goal:** 50,000 users, 5,000 paying
- **Revenue target:** 15M ₽ MRR

### Phase 3: Scale (M12-M24)
- **Model:** + B2B Enterprise + Marketplace
- **Goal:** 500,000 users, 40,000 paying
- **Revenue target:** 60M ₽ MRR

---

## Следующие шаги

1. **Financial Model** → Детальная финансовая модель на 3 года
2. **Go-to-Market Strategy** → План запуска и acquisition
3. **Partnership Outreach** → Контакты с INVITRO, Oura, GigaChat
4. **Pricing A/B Tests** → Валидация готовности платить

---

## References

- Project Brief: `context/project-brief.yaml`
- Vision: `docs/discovery/vision.md`
- Market Research: `docs/research/market-research.md`
- Competitive Analysis: `docs/discovery/competitive-analysis.md`
- User Stories: `docs/discovery/user-stories.md`

---

*Документ создан: 2026-01-26*  
*Business-Analyst Agent v1.0*
