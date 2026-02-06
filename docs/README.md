# BIOMAX AI — Документация для инвесторов

**Personal Health Operating System**  
Мультиагентная AI-платформа для управления здоровьем и биохакинга

---

## Кратко для инвестора

**BIOMAX AI** — это «операционная система для здоровья»: единая платформа, которая объединяет **15 специализированных AI-агентов**, **100+ интеграций** с устройствами и лабораториями и **Custom RAG** (персональная база знаний пользователя). Целевой рынок — русскоязычные биохакеры и health optimizers; продукт локализован под РФ с полным соблюдением **152-ФЗ**.

| Параметр | Значение |
|----------|----------|
| **Модель** | Freemium SaaS (990–9 990 ₽/мес) + B2B Enterprise |
| **SAM (русскоязычный рынок)** | ~$2B |
| **SOM (цель к 2028)** | ~$50M ARR |
| **Target MRR (M24)** | 60M ₽ |
| **Ключевое отличие** | Мультиагентная AI + Custom RAG + полный охват биохакинга в одной платформе |

---

## 1. Проблема и решение

### Проблема

- **Фрагментация:** данные разбросаны по 5–10+ приложениям (Oura, CGM, лаборатории, трекеры питания).
- **Узкий фокус конкурентов:** кровь (InsideTracker), только CGM (Levels), только сон (Oura) — нет целостной картины.
- **Нет персонализации:** рекомендации не учитывают генетику, биомаркеры и историю пользователя.
- **Нет своей базы знаний:** нельзя подключать свои протоколы и исследования.
- **Нет инструментов для N=1 экспериментов:** сложно объективно оценить эффективность протоколов.

### Решение

**Единая платформа** с:

- **Health Score 0–100** и единым дашбордом по всем категориям здоровья.
- **15 AI-агентов** (Coach, Sleep, Nutrition, Lab Interpreter, Longevity, Genomics, Safety и др.) с оркестрацией через LangGraph.
- **100+ интеграций:** wearables (Oura, Garmin, WHOOP), CGM, лаборатории (INVITRO, Helix, CMD), геномика (23andMe, Atlas).
- **Custom RAG:** загрузка PDF/MD протоколов и исследований → персональные рекомендации с привязкой к источникам.
- **Biohacker Lab:** дизайн N=1 экспериментов, baseline → интервенция → ML-анализ.
- **152-ФЗ compliance:** хранение и обработка персональных данных в РФ, российские LLM (GigaChat, YandexGPT).

---

## 2. Рынок

| Уровень | Оценка | Описание |
|---------|--------|----------|
| **TAM** | ~$150B | Biohacking + longevity + AI-driven wellness (глобально) |
| **SAM** | ~$2B | Русскоязычный digital health + biohacking |
| **SOM (3 года)** | $40–60M | Реалистичный захват при успешном product-market fit |

**Тренды:** рост рынка AI-агентов в healthcare (CAGR ~45%), консолидация point-решений в платформы, смещение фокуса от lifespan к healthspan/brainspan. Российский рынок digital health остаётся недоразвитым — окно для первопроходца с локализованным решением.

**Сегменты:** продвинутые биохакеры (primary), health optimizers, longevity-focused, B2B/Corporate Wellness.

Подробно: [Market Research](research/market-research.md), [Competitive Analysis](discovery/competitive-analysis.md).

---

## 3. Продукт и дорожная карта

### Фазы развития

| Фаза | Срок | Цель | Пользователи |
|------|------|------|--------------|
| **Alpha** | M1–M3 | Инфраструктура, первые агенты, 1–2 интеграции | Внутренние + 50 тестеров |
| **Beta (MVP)** | M4–M6 | Валидация PMF | 1 000 beta |
| **V1.0 Launch** | M6–M9 | Публичный запуск, монетизация | 10 000 |
| **V1.5 Growth** | M9–M12 | Рост, удержание | 50 000 |
| **V2.0 Scale** | M12–M18 | Mobile (Flutter), B2B, маркетплейс | 200 000 |
| **V3.0** | M18–M24 | Мультирегион, enterprise | 500 000 |

**Каналы доставки:** Telegram Bot (первый контакт) → Telegram WebApp → Web Dashboard → Flutter (iOS/Android).

Подробно: [Roadmap](discovery/roadmap.md), [PRD](discovery/prd.md), [Vision](discovery/vision.md).

---

## 4. Бизнес-модель и unit economics

### Тарифы (B2C)

| Тариф | Цена/мес | Цель (M24) | LTV (18 мес) | LTV/CAC |
|-------|----------|------------|--------------|---------|
| **Free** | 0 ₽ | Lead gen | — | — |
| **Optimize** | 990 ₽ | 30 000 | 17 100 ₽ | 6x |
| **Biohacker Pro** | 2 490 ₽ | 15 000 | 43 020 ₽ | 9.4x |
| **Longevity Elite** | 9 990 ₽ | 3 000 | 172 620 ₽ | 18.7x |
| **Enterprise** | Custom | 50 | 1.8M ₽ | — |

### Источники дохода (Target M24)

- **Подписки B2C:** ~70% выручки.
- **B2B/Enterprise:** ~15%.
- **Маркетплейс (комиссии), рефералы лабораторий, премиум-протоколы:** ~15%.

### Ключевые метрики (Target M24)

| Метрика | M12 | M24 |
|---------|-----|-----|
| **MRR** | 15M ₽ | 60M ₽ |
| **ARR** | 180M ₽ | 720M ₽ |
| **Paying users** | 10 000 | 40 000 |
| **Free users** | 150 000 | 500 000 |
| **Gross margin** | 70% | 75% |
| **Конверсия Free→Paid** | 5% | 7% |

Подробно: [Business Model](business/business-model.md).

---

## 5. Конкурентное позиционирование

**Уникальная позиция:** широкий охват категорий биохакинга + глубокая персонализация за счёт мультиагентной AI и Custom RAG.

- **InsideTracker, Levels, Oura, WHOOP** — узкий фокус (лаборатории, CGM, wearables).
- **Wild Health** — персонализация через человеческих коучей, высокая цена ($362–495/мес).
- **BIOMAX AI** — все категории в одной платформе, 15 AI-агентов, Custom RAG, N=1 Lab, локализация под РФ и 152-ФЗ.

Подробно: [Competitive Analysis](discovery/competitive-analysis.md).

---

## 6. Регуляторика и риски

- **152-ФЗ:** данные граждан РФ хранятся в РФ, явные согласия, учёт особых категорий (здоровье). Документация: [152-ФЗ Compliance](discovery/legal/152-fz-compliance.md), [Legal Summary](discovery/legal/legal-summary.md).
- **Wellness vs Medicine:** продукт позиционируется как wellness; дисклеймеры, Safety Agent, запрет медицинских назначений. [Wellness vs Medicine](discovery/legal/wellness-vs-medicine.md).
- **Риски:** регуляторные изменения, конверсия Free→Paid, галлюцинации LLM (митигация: RAG, Safety Agent), зависимость от API партнёров, конкуренция BigTech. Описаны в [Business Model — риски](business/business-model.md#риски-и-митигации).

---

## 7. Партнёрства и GTM

**Ключевые партнёры:** лаборатории (INVITRO, Helix, CMD), wearables (Oura, Garmin, WHOOP), геномика (23andMe, Atlas), LLM (GigaChat, YandexGPT), облака (Yandex Cloud, VK Cloud).

**Go-to-Market:** Telegram-first, контент и партнёрства для привлечения биохакеров и health optimizers; затем WebApp и мобильное приложение; B2B — прямые продажи и партнёрства со страховыми/wellness.

Подробно: [Marketing Strategy](marketing/strategy.md), [Launch Plan](marketing/launch-plan.md), [Partnership Page](partnership-page.md).

---

## 8. Ссылки на бизнес-документацию

Ниже — структурированный список документов для углублённого due diligence.

### Стратегия и продукт

| Документ | Описание |
|----------|----------|
| [Vision](discovery/vision.md) | Видение, проблема, ценностное предложение, целевая аудитория |
| [PRD](discovery/prd.md) | Требования к продукту, цели, метрики успеха |
| [User Stories](discovery/user-stories.md) | User stories и acceptance criteria |
| [Personas](discovery/personas.md) | Персоны, JTBD, готовность платить |
| [Roadmap](discovery/roadmap.md) | Дорожная карта по фазам и релизам |
| [Competitive Analysis](discovery/competitive-analysis.md) | Анализ конкурентов |
| [Extended Research](BIOMAX_AI_v2_Extended_Research%20(1).md) | Расширенное исследование рынка и трендов |

### Бизнес и модель монетизации

| Документ | Описание |
|----------|----------|
| [Business Model](business/business-model.md) | Canvas, сегменты, потоки доходов, unit economics, риски |
| [Requirements (FURPS+)](business/requirements-furps.md) | Функциональные и нефункциональные требования |
| [Use Cases](business/use-cases.md) | Основные сценарии использования по персонам |

### Рынок и исследование

| Документ | Описание |
|----------|----------|
| [Market Research](research/market-research.md) | TAM/SAM/SOM, тренды, сегменты, барьеры входа |

### Правовое и регуляторное

| Документ | Описание |
|----------|----------|
| [152-ФЗ Compliance](discovery/legal/152-fz-compliance.md) | Требования к персональным данным в РФ |
| [Wellness vs Medicine](discovery/legal/wellness-vs-medicine.md) | Границы wellness/медицина, позиционирование |
| [Legal Summary](discovery/legal/legal-summary.md) | Резюме рисков и чеклист compliance |
| [Disclaimers Templates](discovery/legal/disclaimers-templates.md) | Шаблоны дисклеймеров |

### Техническая архитектура

| Документ | Описание |
|----------|----------|
| [API Integrations](discovery/technical/api-integrations.md) | 100+ API по категориям |
| [LangGraph Architecture](discovery/technical/langraph-architecture.md) | Мультиагентная архитектура |
| [Technical Summary](discovery/technical/technical-summary.md) | Обзор стека и инфраструктуры |
| [Kubernetes Infrastructure](discovery/technical/kubernetes-infrastructure.md) | Развёртывание, масштабирование |

### Аналитика и метрики

| Документ | Описание |
|----------|----------|
| [Metrics Framework](analytics/metrics-framework.md) | AARRR, health KPIs, таксономия событий |
| [Tracking Plan](analytics/tracking-plan.md) | События, воронки, дашборды |

### Дизайн и UX

| Документ | Описание |
|----------|----------|
| [User Flows](design/user-flows.md) | Основные сценарии (onboarding, дашборд, RAG, отчёты) |
| [UX Research](discovery/ux-research.md) | Исследование пользователей, инсайты |
| [CJM](design/cjm.md) | Customer Journey Map |

### Маркетинг и партнёрства

| Документ | Описание |
|----------|----------|
| [Marketing Strategy](marketing/strategy.md) | Go-to-Market по сегментам |
| [Launch Plan](marketing/launch-plan.md) | Фазы запуска (Beta → Public → Growth) |
| [Content Plan](marketing/content-plan.md) | Контент-план (блог, соцсети, email) |
| [Channel Strategy](marketing/channel-strategy.md) | Каналы и метрики |
| [Partnership Page](partnership-page.md) | Лендинг для партнёров (лаборатории, вендоры) |

### Краткое описание проекта

| Документ | Описание |
|----------|----------|
| [Project Description](project-description.md) | Краткое текстовое описание проекта в одном файле |

---

*Документ подготовлен для инвесторов. Актуальность: февраль 2026. Для полного каталога документов проекта см. [README в корне репозитория](../README.md).*
