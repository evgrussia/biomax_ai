## Сценарий использования агентской системы в Cursor (пример проекта Hyper‑Development)

Этот сценарий показывает, как **пошагово** использовать агентскую систему в Cursor для создания проекта: сайт‑портфолио/агентство Hyper‑Development + форма заказа веб‑приложения + админка/кабинеты.

### Входные данные (идея)

- **Продукт**: сайт‑портфолио Fullstack‑разработчика/Software Architect (Евгений Пономарев) + агентство Hyper‑Development.
- **Цели**: демонстрация работ, описания услуг, сбор заявок/заказов на разработку.
- **Ключевые функции MVP**:
  - админка: портфолио/услуги/секции лендинга
  - лендинг: витрина + форма заказа с выбором модулей
  - личный кабинет: отслеживание статуса заказа
  - админка: управление заказами

---

## Подготовка (1 раз на проект)

### Что должно быть в репозитории

- `.cursor/rules/*` — правила работы ассистента
- `.cursor/agents/*` — профили ролей
- `.cursor/skills/*` — навыки
- `.cursor/commands/*` — конвенции команд
- `SYSTEM.md`, `ARCHITECTURE.md` — описание системы

### Где система хранит контекст проекта

- `context/project-brief.yaml`
- `context/summaries/`
- `context/checkpoints/`

---

## Phase 0 — INTAKE (Orchestrator)

### Команда в чате Cursor

```
/start-project Агентство Hyper-Development по разработке web приложений. Сайт - портфолио Fullstack-разработчика / Software architect Пономарев Евгений. На сайте будут примеры работ и форма заказа web приложения. Услуги: разработка под ключ, MVP, грантовое сопровождение, рефакторинг, telegram webapp, highload/cloud/Helm/Istio/Kafka/Kong, финтех/распределённые системы (Saga, CQRS). Нужны: админка портфолио/услуг/секций лендинга, заказ проекта с выбором модулей, кабинет статуса заказа, админка заказов.
```

### Что делает Orchestrator

- создаёт `context/project-brief.yaml` (Level 0)
- фиксирует допущения (MVP‑границы)
- формирует план Discovery и “пакеты задач” для ролей

### Мини‑чеклист уточнений (если нужно)

- **Позиционирование**: личный бренд vs агентство (или оба в одном)?
- **Аудитория**: стартапы/SMB/энтерпрайз/гос‑проекты?
- **География/язык**: RU/EN? мультиязычность в MVP?
- **Способ связи**: email/телефон/Telegram, нужна ли CRM‑интеграция?
- **Авторизация**: кто и как логинится в админку и кабинет заказчика?

### Артефакт

- `context/project-brief.yaml`

Создай чекпоинт:

```
/checkpoint
```

---

## Phase 1 — DISCOVERY (Product + Research + Analytics)

### 1) Product: Vision / PRD / User Stories

```
/route product Сформируй Vision + PRD + User Stories (с acceptance criteria) для Hyper-Development: лендинг/портфолио, форма заказа с выбором модулей, кабинет статуса заказа, админка управления портфолио/услугами/секциями/заказами. Выдай структуру документов и предложения по MVP-границам на 1 неделю.
```

**Ожидаемые артефакты** (пример):
- `docs/discovery/vision.md`
- `docs/discovery/prd.md`
- `docs/discovery/user-stories.md`

### 2) Research: конкуренты/рынок/форматы агенств/портфолио

```
/route research Проведи исследование конкурентов и best practices для сайта-портфолио + агентство разработки: какие блоки лендинга работают, как оформляют кейсы, какие CTA, какие формы заказа/калькуляторы, как собирают требования. Итог: рекомендации по структуре сайта и отличиям.
```

**Ожидаемые артефакты**:
- `docs/research/competitive-analysis.md`
- `docs/research/findings.md`

### 3) Analytics: метрики и tracking plan

```
/route analytics Сделай метрики и tracking plan для Hyper-Development: воронка лидов (просмотр кейсов → CTA → начало заявки → отправка заявки), события, параметры (выбранные модули), цели, дашборд. Предложи A/B идеи для CTA/формы.
```

**Ожидаемые артефакты**:
- `docs/discovery/metrics-and-tracking.md`

### Закрытие фазы

```
/summary
/checkpoint
```

---

## Phase 2 — DESIGN (UX + UI + Content)

### 1) UX: user flows + IA + wireframes

```
/route ux Сконструируй IA и user flows: (1) посетитель → кейсы/услуги → заявка, (2) заказчик → кабинет → статус заказа, (3) админ → управление портфолио/услугами/секциями/заказами. Сделай wireframes по ключевым экранам.
```

**Ожидаемые артефакты**:
- `docs/design/information-architecture.md`
- `docs/design/user-flows.md`
- `docs/design/wireframes.md`

### 2) UI: дизайн‑система/компоненты/токены

```
/route ui Опиши дизайн-систему (токены, типографика, сетка) и UI kit для сайта Hyper-Development (современно, архитектурно-строго, доверие/экспертиза). Дай спецификацию ключевых компонентов (кейсы, карточки услуг, форма заказа, статус-таймлайн).
```

**Ожидаемые артефакты**:
- `docs/design/design-system.md`
- `docs/design/components-spec.md`

### 3) Content: voice & tone + тексты блоков + microcopy

```
/route content Подготовь voice&tone, тексты для лендинга (герой, услуги, кейсы, процесс, стек, доверие/дипломы, CTA), microcopy для формы заказа и статусов заказа, а также шаблоны писем/уведомлений.
```

**Ожидаемые артефакты**:
- `docs/design/voice-and-tone.md`
- `docs/design/ui-copy.md`
- `docs/design/microcopy.md`

### Закрытие фазы

```
/summary
/checkpoint
```

---

## Phase 3 — ARCHITECTURE (Architect + Data + Security)

### 1) Architect: system design + ADR + стек

```
/route architect Спроектируй архитектуру MVP (модульный монолит): роли (аноним/заказчик/админ), модули (portfolio, services, landing-sections, orders, customer-cabinet, admin), API, интеграции (email/telegram), деплой-опции. Зафиксируй ADR и предложи стек (например Next.js/React + API + Postgres).
```

**Ожидаемые артефакты**:
- `docs/architecture/overview.md`
- `docs/architecture/adrs/ADR-001-tech-stack.md`
- `docs/architecture/modules.md`

### 2) Data: доменная модель/схема/контракты

```
/route data Сформируй доменную модель и схему БД для: Projects/PortfolioItems, Services, LandingSections, Orders, OrderModuleSelections, OrderStatusHistory, Users/Roles. Опиши API contracts (DTO) для ключевых сценариев.
```

**Ожидаемые артефакты**:
- `docs/data/domain-model.md`
- `docs/data/schema.md`
- `docs/data/api-contracts.md`

### 3) Security: threat model + security requirements

```
/route security Сделай threat model и security requirements для сайта/админки/кабинета: auth/authz, защита формы (rate limit, captcha), хранение данных, аудит логов, защита админки, секреты, минимальные требования для продакшена.
```

**Ожидаемые артефакты**:
- `docs/security/threat-model.md`
- `docs/security/requirements.md`

### Закрытие фазы

```
/summary
/checkpoint
```

---

## Phase 4 — DEVELOPMENT (Dev → Cursor/Claude‑Coder → Review)

### 0) Dev: конвенции, план и техспеки фич

```
/route dev Определи структуру репозитория, code conventions, набор модулей и подготовь технические спеки для MVP-фич: (1) публичный лендинг+кейсы+услуги, (2) форма заказа с выбором модулей, (3) кабинет статуса заказа, (4) админка CRUD портфолио/услуг/секций/заказов, (5) уведомления (email/telegram).
```

**Ожидаемые артефакты**:
- `docs/development/code-conventions.md`
- `docs/development/specs/<feature>.md`

### 1) Реализация (выбор implementation‑агента)

- **`claude-coder`**: если нужны сложные архитектурные/сквозные изменения или большой объём генерации тестов.
- **`cursor`**: если нужна быстрая итерация, правки по месту, интеграция и отладка.

Пример:

```
/route cursor Реализуй фичу “форма заказа с выбором модулей” по техспеке из docs/development/specs/order-form.md: UI, API, сохранение в БД, валидации, тесты. После — подготовь список изменённых/созданных файлов.
```

### 2) Review: проверка на 100% по спекам

```
/route review Проверь реализацию “форма заказа с выбором модулей” на 100% соответствие docs/development/specs/order-form.md, включая тесты, edge cases и безопасность. Если <100% — выдай findings и шаги фикса.
```

Цикл “Cursor ↔ Review” повторять до **100%**.

### Закрытие фичи / фазы

```
/checkpoint
```

---

## Phase 5 — QA (QA + Security + Review)

```
/route qa Подготовь test strategy/plan/cases и минимальную тест-инфраструктуру для MVP: unit/integration/e2e для основных флоу (заявка, кабинет статуса, админка CRUD). Опиши набор прогонов и quality gates.
```

При необходимости:

```
/route security Проведи security review перед релизом MVP (по требованиям из docs/security/requirements.md).
```

Закрытие:

```
/summary
/checkpoint
```

---

## Phase 6 — DEPLOYMENT (DevOps + SRE)

```
/route devops Предложи CI/CD и деплой для MVP (staging/prod), секреты, миграции, окружения. Дай минимальный pipeline-as-code и инструкции развёртывания.
```

```
/route sre Сформируй SLO/SLI, мониторинг/алерты и runbooks для MVP: доступность сайта, ошибки формы заказа, задержки, алерты по email/telegram.
```

Закрытие:

```
/summary
/checkpoint
```

---

## Phase 7 — MARKETING (Marketing)

```
/route marketing Подготовь go-to-market для Hyper-Development: позиционирование, офферы/пакеты услуг, контент-план (кейсы/статьи), SEO-структуру, запуск и каналы привлечения (tg/seo/реферальные).
```

Финал:

```
/summary
/checkpoint
```

---

## Быстрые подсказки (как не “сломать” систему)

- **Всегда** закрывай фазу через `/summary` и `/checkpoint`.
- Держи “канон” в `docs/` и “оперативку” в `context/`.
- Для разработки держи правило: **нет спеки → нет реализации** (сначала `/route dev`).
- Любая реализация проходит через `/route review` до **100%**.

