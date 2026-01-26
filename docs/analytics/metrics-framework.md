# Metrics Framework: BIOMAX AI v2.0

**Version:** 1.0  
**Last Updated:** 2026-01-26  
**Author:** Analytics Agent  
**Status:** Draft

---

## Executive Summary

Данный документ определяет систему метрик для BIOMAX AI v2.0 — мультиагентной AI-платформы для управления здоровьем. Фреймворк построен на модели AARRR (Pirate Metrics) с дополнением специфических health outcome метрик.

**Ключевые принципы:**
- Data-driven decision making на всех уровнях
- Измеримость каждой фичи и агента
- Баланс между engagement metrics и health outcomes
- Прозрачность для пользователей (их собственный прогресс)

---

## North Star Metric

### Основная метрика

**Metric:** Monthly Active Users using AI agents for health decisions (MAU-AI)

**Definition:** Уникальные пользователи, которые за календарный месяц:
1. Получили ≥5 AI-рекомендаций от любого агента
2. Отметили выполнение ≥3 рекомендаций (follow-through)
3. Синхронизировали данные хотя бы с 1 источника

**Formula:** 
```sql
COUNT(DISTINCT user_id) 
WHERE ai_recommendations_received >= 5
  AND recommendations_completed >= 3
  AND data_sources_synced >= 1
  AND activity_month = CURRENT_MONTH
```

**Target:**
| Период | Target | Baseline |
|--------|--------|----------|
| M6 (MVP Launch) | 3,000 | 0 |
| M12 | 15,000 | — |
| M24 | 60,000 | — |

**Why this metric:**
- Объединяет engagement (AI usage) + action (follow-through) + data connectivity
- Напрямую коррелирует с value delivery пользователю
- Не позволяет "накрутить" просто количеством регистраций
- Отражает core value proposition продукта: AI-powered health decisions

### Вспомогательная North Star (Health Outcome)

**Metric:** Users with Improved Health Score (3-month rolling)

**Definition:** % пользователей, чей Health Score вырос на ≥5 пунктов за последние 3 месяца

**Formula:**
```sql
COUNT(user_id WHERE health_score_now - health_score_3months_ago >= 5)
/ COUNT(user_id WHERE tenure_days >= 90)
* 100
```

**Target:** 60% (M12)

---

## AARRR Funnel Metrics

### 1. Acquisition (Привлечение)

| Metric | Definition | Formula | Target (M6) | Target (M12) | Owner |
|--------|------------|---------|-------------|--------------|-------|
| **New Signups** | Новые зарегистрированные пользователи | COUNT(signups) WHERE date = period | 25,000 total | 150,000 total | Marketing |
| **Monthly Signups** | Регистрации за месяц | COUNT(signups) WHERE signup_month = month | 5,000/мес | 15,000/мес | Marketing |
| **Signup Conversion** | Visitors → Signups | Signups / Unique Visitors * 100 | 8% | 12% | Growth |
| **CAC (Cost per Acquisition)** | Стоимость привлечения пользователя | Total Marketing Spend / New Users | 200 ₽ | 150 ₽ | Marketing |
| **Organic %** | Доля органических регистраций | Organic Signups / Total Signups * 100 | 40% | 60% | Marketing |

#### Acquisition по каналам

| Channel | Target Share (M6) | Target Share (M12) | CAC Target |
|---------|-------------------|--------------------|-----------| 
| **Telegram organic** | 25% | 30% | 0 ₽ |
| **Content/SEO** | 15% | 25% | 50 ₽ |
| **Referral** | 10% | 20% | 100 ₽ |
| **Paid (VK/Yandex)** | 35% | 15% | 300 ₽ |
| **Partnerships** | 10% | 8% | 150 ₽ |
| **Influencers** | 5% | 2% | 400 ₽ |

---

### 2. Activation (Активация)

#### Aha Moment Definition

**Primary Aha Moment:** Пользователь получил первую персонализированную AI-рекомендацию на основе своих данных

**Quantified Aha:** 
- Подключил ≥2 источника данных (wearables/labs/genomics)
- Получил первую AI-рекомендацию
- Отметил её как "полезную" или выполнил

**Time to Aha Target:** < 10 минут от регистрации

#### Activation Metrics

| Metric | Definition | Formula | Target (M6) | Target (M12) | Owner |
|--------|------------|---------|-------------|--------------|-------|
| **Activation Rate** | Users reaching Aha Moment (D7) | Activated Users / Signups * 100 | 35% | 45% | Product |
| **Time to Activate** | Время до Aha Moment | AVG(first_aha_timestamp - signup_timestamp) | < 1 день | < 4 часа | Product |
| **Time to First Value** | Время до первой рекомендации | AVG(first_recommendation_timestamp - signup_timestamp) | < 10 мин | < 5 мин | Product |
| **Onboarding Completion** | % завершивших онбординг | Completed / Started * 100 | 70% | 80% | Product |
| **Data Sources Connected (D7)** | Источники данных за 7 дней | AVG(data_sources_count) WHERE tenure_days = 7 | 1.5 | 2.5 | Product |
| **≥2 Sources Connected (D7)** | % с 2+ источниками | Users with ≥2 sources / D7 Users * 100 | 35% | 45% | Product |
| **First AI Query (D1)** | % задавших вопрос AI в первый день | Users with AI query D1 / D0 Signups * 100 | 50% | 65% | Product |
| **RAG Upload (D30)** | % загрузивших протокол | Users with RAG upload / D30 Users * 100 | 15% | 25% | Product |

#### Activation Funnel

```
100% ─────────────── Signup
 │
 │ -15% ─────────────────────────────────────────────────────────
 │                                                               │
85% ─────────────── Started Onboarding                           │
 │                                                               │ Drop-off
 │ -15% ─────────────────────────────────────────────────────────│ Analysis
 │                                                               │
70% ─────────────── Completed Onboarding                         │
 │                                                               │
 │ -20% ─────────────────────────────────────────────────────────│
 │                                                               │
50% ─────────────── Connected 1st Data Source                    │
 │                                                               │
 │ -15% ─────────────────────────────────────────────────────────│
 │                                                               │
35% ─────────────── Connected 2nd Data Source (Activated)        ▼
 │
 │ -10%
 │
25% ─────────────── First AI Recommendation Completed
```

---

### 3. Retention (Удержание)

#### Core Retention Metrics

| Metric | Definition | Formula | Target (M6) | Target (M12) | Owner |
|--------|------------|---------|-------------|--------------|-------|
| **D1 Retention** | Вернулись на следующий день | D1 Active / D0 Signups * 100 | 45% | 55% | Product |
| **D7 Retention** | Вернулись через неделю | D7 Active / D0 Signups * 100 | 30% | 40% | Product |
| **D30 Retention** | Вернулись через месяц | D30 Active / D0 Signups * 100 | 20% | 28% | Product |
| **M1 Retention** | Активны в следующем месяце | M1 Active / M0 Users * 100 | 45% | 55% | Product |
| **M3 Retention** | Активны через 3 месяца | M3 Active / M0 Users * 100 | 25% | 35% | Product |
| **M3 Paid Retention** | Платящие через 3 месяца | M3 Paying / M0 Paying * 100 | 70% | 80% | Product |

#### Active User Definition

| User Type | Definition |
|-----------|------------|
| **DAU (Daily Active User)** | Открыл Telegram бот/WebApp + выполнил любое действие (query, check data, mark completion) |
| **WAU (Weekly Active User)** | ≥1 активный день за последние 7 дней |
| **MAU (Monthly Active User)** | ≥1 активный день за последние 30 дней |
| **Engaged MAU** | ≥5 AI queries + ≥1 data sync за последние 30 дней |

#### Retention by Cohort

Цели по retention curves для разных когорт:

| Cohort Type | D1 | D7 | D30 | D90 |
|-------------|-----|-----|------|------|
| **Organic** | 50% | 35% | 25% | 18% |
| **Paid** | 40% | 25% | 15% | 10% |
| **Referral** | 55% | 40% | 30% | 22% |
| **Activated (≥2 sources)** | 65% | 50% | 40% | 32% |
| **Paying** | 85% | 75% | 65% | 55% |

#### Engagement Metrics

| Metric | Definition | Formula | Target (M6) | Target (M12) | Owner |
|--------|------------|---------|-------------|--------------|-------|
| **DAU/MAU** | Stickiness ratio | DAU / MAU * 100 | 25% | 35% | Product |
| **AI Queries/Week** | Запросы к AI агентам | AVG(ai_queries) per WAU | 3 | 5 | Product |
| **Sessions/Week** | Сессии в неделю | AVG(sessions) per WAU | 4 | 6 | Product |
| **Avg Session Duration** | Длительность сессии | AVG(session_duration_seconds) | 180с | 300с | Product |
| **Recommendations Completed** | Выполненные рекомендации | AVG(completed_recommendations) per MAU | 5 | 10 | Product |
| **Data Sync Frequency** | Частота синхронизации данных | AVG(days_between_syncs) | 3 дня | 1 день | Product |

#### Churn Metrics

| Metric | Definition | Formula | Target (M6) | Target (M12) | Owner |
|--------|------------|---------|-------------|--------------|-------|
| **Monthly Churn (Free)** | Ушедшие free users | (Start - End + New - Resurrect) / Start * 100 | < 30% | < 25% | Product |
| **Monthly Churn (Paid)** | Ушедшие paid users | Cancelled / Start of Month Paying * 100 | < 8% | < 5% | Product |
| **Revenue Churn** | Потерянный MRR | Lost MRR / Start MRR * 100 | < 6% | < 4% | Revenue |
| **Net Revenue Retention** | NRR | (Start MRR + Expansion - Churn) / Start MRR * 100 | 95% | 110% | Revenue |

---

### 4. Revenue (Доход)

#### Core Revenue Metrics

| Metric | Definition | Formula | Target (M6) | Target (M12) | Owner |
|--------|------------|---------|-------------|--------------|-------|
| **MRR (Monthly Recurring Revenue)** | Ежемесячный повторяющийся доход | SUM(active_subscriptions * price) | 3M ₽ | 15M ₽ | Revenue |
| **ARR (Annual Recurring Revenue)** | Годовой доход | MRR * 12 | 36M ₽ | 180M ₽ | Revenue |
| **Paying Users** | Платящие пользователи | COUNT(active_subscriptions) | 2,500 | 10,000 | Revenue |
| **ARPU (All Users)** | Средний доход на пользователя | Total Revenue / MAU | 120 ₽ | 250 ₽ | Revenue |
| **ARPPU (Paying Users)** | Средний доход на платящего | Total Revenue / Paying Users | 1,200 ₽ | 1,500 ₽ | Revenue |
| **Free → Paid Conversion** | Конверсия в платящих | Paying / Total Registered * 100 | 4% | 7% | Growth |
| **Trial → Paid Conversion** | Конверсия триала | Paid after Trial / Trial Started * 100 | 25% | 35% | Growth |

#### Revenue by Tier

| Tier | Price | Target Users (M6) | Target Users (M12) | % of Revenue |
|------|-------|-------------------|--------------------|--------------| 
| **Free** | 0 ₽ | 22,500 | 140,000 | 0% |
| **Optimize** | 990 ₽/мес | 1,500 | 5,000 | 25% |
| **Biohacker Pro** | 2,490 ₽/мес | 800 | 3,500 | 40% |
| **Longevity Elite** | 9,990 ₽/мес | 200 | 1,500 | 35% |
| **Enterprise** | Custom | — | TBD | — |

#### Unit Economics

| Metric | Definition | Formula | Target (M6) | Target (M12) | Owner |
|--------|------------|---------|-------------|--------------|-------|
| **LTV** | Lifetime Value | ARPPU * Avg Customer Lifetime (months) | 14,400 ₽ | 27,000 ₽ | Finance |
| **CAC** | Customer Acquisition Cost | Marketing Spend / New Paying Users | 2,000 ₽ | 1,500 ₽ | Marketing |
| **LTV/CAC Ratio** | Окупаемость привлечения | LTV / CAC | 5x | 7x | Finance |
| **Payback Period** | Срок окупаемости | CAC / ARPPU | < 2 мес | < 1 мес | Finance |
| **Gross Margin** | Валовая маржа | (Revenue - COGS) / Revenue * 100 | 70% | 75% | Finance |

#### Additional Revenue Streams (Post-MVP)

| Stream | Definition | Target (M12) | Target (M24) |
|--------|------------|--------------|--------------|
| **Supplements Marketplace** | Комиссия с продаж добавок (10-15%) | 500K ₽/мес | 3M ₽/мес |
| **Lab Referrals** | Реферальные от лабораторий (5-8%) | 200K ₽/мес | 1M ₽/мес |
| **Premium Protocols** | Продажа авторских протоколов | 100K ₽/мес | 500K ₽/мес |

---

### 5. Referral (Рекомендации)

| Metric | Definition | Formula | Target (M6) | Target (M12) | Owner |
|--------|------------|---------|-------------|--------------|-------|
| **Referral Rate** | % пользователей, пригласивших других | Referrers / Total Users * 100 | 8% | 15% | Growth |
| **Invites Sent** | Приглашения отправлены | COUNT(invites_sent) per referrer | 3 | 5 | Growth |
| **Invite → Signup** | Конверсия приглашений | Signups from Invites / Invites Sent * 100 | 20% | 30% | Growth |
| **Viral Coefficient (K)** | Вирусность | Invites * Invite Conversion * Referral Rate | 0.5 | 0.9 | Growth |
| **Referral Revenue %** | Доля дохода от рефералов | Revenue from Referred Users / Total Revenue * 100 | 10% | 25% | Growth |

#### Referral Loop

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   User A (Active)                                            │
│        │                                                     │
│        ▼                                                     │
│   Sees "Share your Health Score" prompt ◄────────────────┐   │
│        │                                                 │   │
│        ▼                                                 │   │
│   Sends invite to 3 friends (avg)                        │   │
│        │                                                 │   │
│        ▼                                                 │   │
│   30% signup (0.9 new users)                             │   │
│        │                                                 │   │
│        ▼                                                 │   │
│   15% of new users become referrers ─────────────────────┘   │
│                                                              │
│   K-factor = 3 × 0.30 × 0.15 = 0.135 (target: 0.9)          │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Feature Metrics

### Feature: Multi-Agent AI System

| Metric | Definition | Formula | Target (M6) | Target (M12) |
|--------|------------|---------|-------------|--------------|
| **Agent Adoption** | % users, использующих агентов | Users with ≥1 agent query / MAU | 80% | 90% |
| **Queries per User/Week** | Запросы на пользователя | AVG(agent_queries) per WAU | 3 | 5 |
| **Multi-Agent Usage** | Использование 3+ агентов | Users using ≥3 agents / MAU | 40% | 60% |
| **Query Success Rate** | Успешные ответы | Successful Responses / Total Queries | 95% | 98% |
| **Recommendation Follow-through** | Выполнение рекомендаций | Completed / Recommended | 40% | 55% |
| **Helpful Rating** | Оценка полезности | Helpful Ratings / Total Ratings | 75% | 85% |
| **Agent Response Time (p95)** | Время ответа | P95(response_time_seconds) | < 5с | < 3с |

#### Agent-Specific Metrics

| Agent | Primary Metric | Target (M12) |
|-------|---------------|--------------|
| **Coach Agent** | Weekly Check-in Completion | 60% |
| **Sleep Agent** | Sleep Score Improvement (30d) | +5 points avg |
| **Nutrition Agent** | Meal Logging Consistency (7d) | 70% |
| **Lab Interpreter** | Labs Uploaded per User (quarter) | 2 |
| **Genomics Agent** | Genomics Data Uploaded | 25% of users |
| **Longevity Agent** | Biological Age Tracked | 15% of users |
| **Research Agent** | Papers Retrieved per Query | 5 avg |
| **Safety Agent** | Contraindication Alerts Shown | 10% of recommendations |

---

### Feature: Custom RAG (Knowledge Base)

| Metric | Definition | Formula | Target (M6) | Target (M12) |
|--------|------------|---------|-------------|--------------|
| **RAG Adoption** | % users с загруженными протоколами | Users with ≥1 upload / MAU | 10% | 25% |
| **Documents per User** | Среднее кол-во документов | AVG(documents) per RAG user | 3 | 8 |
| **RAG Retrieval Usage** | Использование RAG в ответах | Responses using RAG / Total Responses | 20% | 40% |
| **Upload Success Rate** | Успешные загрузки | Successful Uploads / Upload Attempts | 90% | 95% |
| **RAG Query Satisfaction** | Удовлетворённость RAG-ответами | Helpful Rating for RAG responses | 70% | 80% |

---

### Feature: Data Integrations

| Metric | Definition | Formula | Target (M6) | Target (M12) |
|--------|------------|---------|-------------|--------------|
| **Integration Adoption** | Avg sources per user | AVG(connected_sources) per MAU | 1.8 | 3.0 |
| **≥3 Sources Connected** | Users с 3+ источниками | Users with ≥3 sources / MAU | 25% | 45% |
| **Sync Success Rate** | Успешные синхронизации | Successful Syncs / Sync Attempts | 95% | 98% |
| **Data Freshness** | Свежесть данных | AVG(hours_since_last_sync) | < 24ч | < 6ч |
| **Integration Health** | % рабочих интеграций | Working Integrations / Total Connected | 95% | 99% |

#### Integration-Specific Targets

| Integration | Adoption Target (M12) | Sync Frequency |
|-------------|----------------------|----------------|
| **Oura Ring** | 20% of MAU | Daily |
| **Apple Watch** | 35% of MAU | Daily |
| **INVITRO (PDF)** | 15% of MAU | Quarterly |
| **23andMe** | 10% of MAU | One-time |
| **MyFitnessPal** | 15% of MAU | Daily |
| **Strava** | 10% of MAU | Per workout |

---

### Feature: N=1 Biohacker Lab (P1)

| Metric | Definition | Formula | Target (M6) | Target (M12) |
|--------|------------|---------|-------------|--------------|
| **Experiment Adoption** | % users, проводящих эксперименты | Users with ≥1 experiment / MAU | 5% | 15% |
| **Experiments per User** | Эксперименты на пользователя | AVG(experiments) per Lab user | 1 | 3 |
| **Experiment Completion** | Завершённые эксперименты | Completed / Started | 40% | 60% |
| **Significant Results** | Статистически значимые результаты | Significant / Completed | 30% | 40% |
| **Action Taken on Results** | Действия по результатам | Actions / Completed with Results | 70% | 85% |

---

### Feature: Health Score

| Metric | Definition | Formula | Target (M6) | Target (M12) |
|--------|------------|---------|-------------|--------------|
| **Health Score Adoption** | % users со Score | Users with calculated Score / MAU | 70% | 90% |
| **Score Completeness** | Полнота данных для Score | AVG(data_completeness_percent) | 50% | 70% |
| **Score Improvement (30d)** | Улучшение Score за 30 дней | AVG(score_delta_30d) for active users | +2 pts | +3 pts |
| **Score Check Frequency** | Частота проверки Score | AVG(score_views) per MAU per month | 5 | 10 |
| **Score Sharing** | Поделившиеся Score | Users who shared / MAU | 5% | 12% |

---

## Health Outcome Metrics

Эти метрики измеряют реальное влияние на здоровье пользователей — ключевой differentiator BIOMAX AI.

### Primary Health Outcomes

| Metric | Definition | Measurement Method | Target (M12) | Owner |
|--------|------------|-------------------|--------------|-------|
| **Health Score Improvement** | % users с улучшением Score ≥5 pts за 3 мес | Health Score delta | 60% | Product |
| **Biological Age Reduction** | Среднее снижение биовозраста (Longevity Elite) | Epigenetic tests delta | -0.5 лет | Product |
| **Sleep Quality Improvement** | % users с улучшением Sleep Score | Oura/wearable data | 50% | Product |
| **Protocol Adherence** | Выполнение рекомендованных действий | Completion tracking | 70% | Product |

### Secondary Health Outcomes

| Metric | Definition | Target (M12) |
|--------|------------|--------------|
| **HRV Improvement** | Avg HRV increase for active users (30d) | +5% |
| **Sleep Duration Optimization** | Users reaching 7-8h target | 40% |
| **Glucose Stability** | CGM users with improved time-in-range | 30% |
| **Biomarker Optimization** | % biomarkers moved to optimal range | 40% |
| **Successful N=1 Experiments** | Experiments with significant positive result | 40% |

### Long-term Outcome Tracking

| Outcome | Measurement | Tracking Period | Target |
|---------|-------------|-----------------|--------|
| **Self-reported Energy** | Survey (1-10 scale) | Monthly | +2 pts avg |
| **Self-reported Sleep Quality** | Survey (1-10 scale) | Monthly | +2 pts avg |
| **Stress Level Reduction** | Survey + HRV | Monthly | -20% |
| **Goal Achievement** | User-defined goals completion | Quarterly | 60% |

---

## Metric Definitions Glossary

### User States

| Term | Definition |
|------|------------|
| **Registered User** | Пользователь, создавший аккаунт (завершил signup) |
| **Activated User** | Подключил ≥2 источника данных + получил первую AI-рекомендацию (D7) |
| **Active User (Daily)** | Открыл приложение + выполнил любое действие за день |
| **Active User (Monthly)** | ≥1 активный день за последние 30 дней |
| **Engaged User** | MAU + ≥5 AI queries + ≥1 data sync за месяц |
| **Paying User** | Активная подписка (любой платный тир) |
| **Churned User** | Был активен в M0, не активен в M1 (или отменил подписку) |
| **Resurrected User** | Был churned, вернулся к активности |

### Time Periods

| Term | Definition |
|------|------------|
| **D0** | День регистрации |
| **D1/D7/D30** | 1/7/30 дней после регистрации |
| **M0** | Месяц регистрации |
| **M1/M3/M6/M12** | 1/3/6/12 месяцев после регистрации |
| **Cohort** | Группа пользователей, зарегистрированных в один период |

### Revenue Terms

| Term | Definition |
|------|------------|
| **MRR** | Monthly Recurring Revenue — сумма всех активных подписок |
| **New MRR** | MRR от новых подписчиков |
| **Expansion MRR** | MRR от апгрейдов тарифа |
| **Contraction MRR** | Потерянный MRR от даунгрейдов |
| **Churned MRR** | Потерянный MRR от отмен |
| **Net New MRR** | New + Expansion - Contraction - Churned |

---

## Dashboard Requirements

### 1. Executive Dashboard

**Audience:** Founders, Investors  
**Refresh:** Daily  
**Key Metrics:**

- North Star Metric (MAU-AI) — текущее значение + WoW/MoM тренд
- MRR — текущее + breakdown (New/Expansion/Churn)
- User funnel (Signups → Activated → Paying) — текущий месяц
- Key alerts (anomalies, SLA breaches)

### 2. Product Dashboard

**Audience:** Product Team  
**Refresh:** Real-time  
**Key Metrics:**

- Activation funnel (detailed steps)
- Feature adoption heatmap
- Agent usage distribution
- Error rates by feature
- User feedback summary (NPS, helpful ratings)

### 3. Growth Dashboard

**Audience:** Marketing, Growth Team  
**Refresh:** Daily  
**Key Metrics:**

- Acquisition by channel (with CAC)
- Conversion funnels (Signup → Trial → Paid)
- Cohort retention curves
- Referral metrics
- A/B test results

### 4. Health Outcomes Dashboard

**Audience:** Product, Medical Advisory  
**Refresh:** Weekly  
**Key Metrics:**

- Health Score distribution + improvement trends
- Outcome metrics by persona
- Protocol adherence rates
- Safety alerts triggered
- User-reported improvements

### 5. Real-time Monitoring

**Audience:** Engineering, Support  
**Refresh:** Real-time  
**Key Metrics:**

- System health (uptime, latency)
- API error rates
- Integration sync status
- LLM response times
- Active users (concurrent)

---

## Data Collection Implementation

### Event Taxonomy

Все события следуют naming convention: `[object]_[action]`

**Основные категории:**
- `user_*` — действия пользователя (signup, login, etc.)
- `agent_*` — взаимодействие с AI агентами
- `integration_*` — события синхронизации данных
- `subscription_*` — события подписки
- `health_*` — метрики здоровья
- `experiment_*` — N=1 эксперименты

### Data Sources

| Source | Data Type | Frequency | Storage |
|--------|-----------|-----------|---------|
| **Telegram Bot** | User actions, AI queries | Real-time | ClickHouse |
| **WebApp** | UI interactions | Real-time | ClickHouse |
| **Backend API** | Transactions, calculations | Real-time | PostgreSQL + ClickHouse |
| **Wearables APIs** | Health data | Daily/Hourly | TimescaleDB |
| **LLM Calls** | Agent interactions | Real-time | ClickHouse |
| **Payments** | Subscription events | Real-time | PostgreSQL |

### Privacy Considerations

- Все health data хранятся в РФ (152-ФЗ)
- PII хэшируется для analytics
- User может экспортировать/удалить свои данные
- Агрегированные метрики только для users ≥ 10 в когорте

---

## Review & Iteration

### Review Cadence

| Review | Frequency | Participants | Focus |
|--------|-----------|--------------|-------|
| **Daily Standup** | Daily | Product Team | Anomalies, blockers |
| **Weekly Metrics Review** | Weekly | Product + Growth | Trends, experiments |
| **Monthly Business Review** | Monthly | Leadership | KPIs vs targets, strategy |
| **Quarterly Planning** | Quarterly | All | Target setting, roadmap |

### Target Revision Process

1. Targets пересматриваются ежеквартально
2. При отклонении >20% от target — root cause analysis
3. Новые фичи получают targets после 4 недель baseline данных
4. A/B тесты требуют статистической значимости (p < 0.05)

---

## Appendix: Metric Calculations

### LTV Calculation

```sql
-- Simplified LTV (Average Revenue Method)
LTV = ARPPU * (1 / Monthly_Churn_Rate)

-- Example: ARPPU = 1500₽, Churn = 5%
LTV = 1500 * (1 / 0.05) = 1500 * 20 = 30,000₽

-- Cohort-based LTV (more accurate)
LTV = SUM(Revenue per cohort) / COUNT(users in cohort)
-- Calculated after 12-24 months of data
```

### Viral Coefficient (K-factor)

```sql
K = (Avg_Invites_per_User) * (Invite_Conversion_Rate) * (Referrer_Rate)

-- Example: 3 invites * 30% conversion * 15% become referrers
K = 3 * 0.30 * 0.15 = 0.135

-- Target K > 0.9 for sustainable viral growth
```

### Health Score Formula

```sql
Health_Score = 
    Physical_Health * 0.20 +
    Metabolic_Health * 0.15 +
    Cognitive_Health * 0.15 +
    Emotional_Health * 0.15 +
    Social_Wellness * 0.10 +
    Purpose_Meaning * 0.10 +
    Environmental * 0.05 +
    Biological_Age * 0.10

-- Each component: 0-100 based on available data
-- Missing components: use population average
```

---

## Summary

```yaml
analytics_summary:
  north_star_metric:
    name: "MAU using AI agents for health decisions"
    target_m12: "15,000"
    
  secondary_north_star:
    name: "Users with Improved Health Score (3mo)"
    target_m12: "60%"
  
  key_metrics:
    acquisition: ["Monthly Signups", "CAC", "Organic %"]
    activation: ["Activation Rate (D7)", "Time to First Value", "≥2 Sources Connected"]
    retention: ["D1/D7/D30 Retention", "M1/M3 Retention", "DAU/MAU"]
    revenue: ["MRR", "Free→Paid Conversion", "LTV/CAC", "ARPPU"]
    referral: ["Referral Rate", "K-factor", "Referral Revenue %"]
  
  health_outcomes:
    - "Health Score Improvement (≥5 pts): 60%"
    - "Protocol Adherence: 70%"
    - "Biological Age Reduction: -0.5 years"
    - "Successful N=1 Experiments: 40%"
  
  feature_metrics:
    multi_agent_ai: ["Agent Adoption", "Queries/Week", "Follow-through Rate"]
    custom_rag: ["RAG Adoption", "Documents/User", "RAG Usage in Responses"]
    integrations: ["Sources/User", "Sync Success Rate", "Data Freshness"]
    biohacker_lab: ["Experiment Adoption", "Completion Rate", "Significant Results"]
  
  dashboards:
    - "Executive Dashboard (daily)"
    - "Product Dashboard (real-time)"
    - "Growth Dashboard (daily)"
    - "Health Outcomes Dashboard (weekly)"
    - "Real-time Monitoring"
  
  documents_created:
    - path: "/docs/analytics/metrics-framework.md"
      status: "complete"
```

---

*Документ создан: 2026-01-26*  
*Analytics Agent v1.0*
