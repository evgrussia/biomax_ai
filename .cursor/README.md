# 🤖 Web Application Development Agentic System

Комплексная агентская система для полного цикла разработки веб-приложений — от сырой бизнес-идеи до production и маркетинга.

## 🎯 Обзор

Система состоит из 17 специализированных агентов, координируемых центральным Orchestrator'ом. Каждый агент выполняет роль Senior/Lead специалиста в своей области.

### Ключевые особенности

- ✅ **Полный цикл разработки** — от идеи до маркетинга
- ✅ **DDD и Clean Architecture** — профессиональные архитектурные принципы
- ✅ **SOLID, DRY, KISS** — лучшие практики программирования
- ✅ **Экономия токенов** — hierarchical context compression
- ✅ **Quality Gates** — контроль качества на каждом этапе
- ✅ **Консистентность** — единая терминология и форматы между агентами
- ✅ **Гибкость реализации** — выбор между Cursor и Claude Coder

## 📦 Структура системы

```
agentic-system/
├── README.md                     # Описание системы
├── SYSTEM.md                     # Главная конфигурация
├── .cursor/                      # Интеграция с Cursor
│   ├── README.md                 # Описание интеграции
│   ├── ARCHITECTURE.md           # Архитектура системы
│   ├── agents/                   # Профили ролей
│   │   └── *.md
│   ├── rules/                    # Правила роутинга и форматов
│   │   └── *.mdc
│   ├── skills/                   # Навыки (SKILL.md)
│   │   └── */SKILL.md
│   └── commands/                 # Команды чата
│       └── *.md
└── docs/
    └── usage-scenarios/
        └── hyper-development-portfolio.md
```

## 🚀 Процесс разработки

```
1. INTAKE          → Получение идеи, создание Project Brief
2. DISCOVERY       → Vision, PRD, User Stories, Research, Metrics
3. DESIGN          → UX/UI, Design System, Content
4. ARCHITECTURE    → System Design, Data Model, Security
5. DEVELOPMENT     → Implementation, Review, Testing
6. QA              → Full Testing, Security Review
7. DEPLOYMENT      → CI/CD, IaC, Monitoring, Runbooks
8. MARKETING       → Strategy, Launch Plan, Content Plan
```

## 👥 Агенты

| Агент | Роль | Ответственность |
|-------|------|-----------------|
| **Orchestrator** | TPM/Lead | Координация, декомпозиция, Quality Gates |
| **Product** | Product Manager | Vision, PRD, User Stories, Roadmap |
| **Research** | Analyst | Competitive Analysis, Market Research |
| **Analytics** | Analytics Engineer | Metrics, Tracking Plan, A/B Testing |
| **UX** | UX Designer | User Flows, IA, Wireframes, A11y |
| **UI** | UI Designer | Design System, Components, Visual Specs |
| **Content** | UX Writer | Voice & Tone, UI Copy, Microcopy |
| **Architect** | System Architect | Architecture, ADRs, Tech Stack |
| **Data** | Data Engineer | Domain Model, DB Schema, API Contracts |
| **Security** | Security Engineer | Threat Model, Security Requirements |
| **Dev** | Tech Lead | Technical Specs, Code Conventions, Agent Selection |
| **Cursor** | Developer (IDE) | Итеративная реализация, багфиксы, отладка |
| **Claude Coder** | Developer (Claude) | Сложные фичи, архитектура, генерация тестов |
| **QA** | QA/SDET | Test Strategy, Test Cases, Automation |
| **Review** | Code Reviewer | Verification, Code Quality |
| **DevOps** | DevOps Engineer | CI/CD, IaC, Deployment |
| **SRE** | SRE | SLO/SLI, Monitoring, Runbooks |
| **Marketing** | Marketing Manager | Strategy, Launch, Content Plan |

## 🔄 Implementation Agents

Система поддерживает два агента для реализации кода:

### Cursor Agent (IDE-based)
- ✅ Быстрые итерации
- ✅ Real-time отладка
- ✅ Багфиксы
- ✅ Интеграционные правки

### Claude Coder Agent (Claude-based)
- ✅ Сложные новые фичи
- ✅ Архитектурные решения
- ✅ Комплексная генерация тестов
- ✅ Глубокий анализ спецификаций
- ✅ Крупный рефакторинг

### Типичный паттерн
```
Claude Coder → Initial implementation
     ↓
Review Agent → Verification
     ↓
Cursor Agent → Integration & fixes
     ↓
Review Agent → Final verification
```

## 💾 Экономия контекста

### Context Budget
```yaml
allocation:
  current_task: 40%       # Текущая задача
  summaries: 30%          # Саммари предыдущих фаз
  shared_context: 20%     # Общий контекст проекта
  history: 10%            # История решений
```

### Стратегия сжатия
1. **Hierarchical Compression** — 4 уровня детализации
2. **Lazy Loading** — полные документы по требованию
3. **Checkpoints** — сохранение состояния после каждой фазы
4. **Archival** — архивация завершённых фаз

## 🧪 Тестирование

### Testing Pyramid
- **70%** Unit Tests
- **20%** Integration Tests
- **10%** E2E Tests

### Инфраструктура
- Docker для тестовых сервисов
- Изолированные базы данных
- Тестовые пользователи через fixtures
- Sequential execution для integration тестов

## 📋 Quality Gates

Каждая фаза имеет критерии готовности:

- **Discovery → Design**: Vision approved, PRD complete, User Stories with AC
- **Design → Architecture**: Flows complete, Design System documented
- **Architecture → Development**: ADRs recorded, API contracts defined
- **Development → QA**: 100% implementation, tests pass, coverage ≥80%
- **QA → Deployment**: All tests green, security review passed
- **Deployment → Marketing**: Production ready, monitoring configured

## 📄 Генерируемая документация

```
/docs/
├── discovery/           # Vision, PRD, User Stories, Roadmap
├── research/           # Competitive Analysis, Market Research
├── design/             # User Flows, Design System, Components
├── architecture/       # Overview, ADRs, Tech Stack
├── data/               # Domain Model, Schema, API Contracts
├── security/           # Threat Model, Requirements
├── development/        # Code Conventions, Technical Specs
├── testing/            # Test Strategy, Test Cases
├── operations/         # Deployment, SLO, Runbooks
└── marketing/          # Strategy, Launch Plan, Content Plan
```

## 🛠️ Использование

### Инициализация проекта
```bash
./scripts/init-project.sh "my-project" ./my-project
```

### Запуск процесса
1. Передать бизнес-идею Orchestrator Agent
2. Orchestrator создаёт Project Brief
3. Orchestrator последовательно активирует агентов
4. Каждая фаза завершается Checkpoint'ом
5. Процесс продолжается до Marketing фазы

## 📐 Архитектурные принципы

### DDD (Domain-Driven Design)
- Ubiquitous Language
- Bounded Contexts
- Aggregates
- Domain Events

### Clean Architecture
- Независимость от фреймворков
- Тестируемость
- Независимость от UI/DB
- Dependency Inversion

### Паттерны кода
- SOLID principles
- DRY (Don't Repeat Yourself)
- KISS (Keep It Simple, Stupid)

## 📊 Версия

v1.1.0 — Added Claude Coder Agent as alternative implementation agent

---

*Система создана для профессиональной разработки веб-приложений с соблюдением лучших практик индустрии.*

# Интеграция Agentic System в Cursor

Этот каталог делает проект **самоописываемым для Cursor**: правила (`rules`), профили “субагентов” (`agents`), навыки (`skills`) и заготовки команд (`commands`).

## Источники истины

- **Система/архитектура**: `SYSTEM.md`, `ARCHITECTURE.md`
- **Агенты**: `.cursor/agents/*.md`
- **Навыки**: `.cursor/skills/*/SKILL.md`

Файлы в `.cursor/` — это **интеграционный слой для Cursor**: они содержат профили ролей/навыков, команды и правила роутинга.

## Быстрый старт в чате Cursor

Поддерживаемая конвенция команд (обрабатывается правилами из `.cursor/rules`):

- `/start-project <идея>` — старт нового проекта и создание `context/project-brief.yaml`
- `/status` — статус текущей фазы/чекпоинта и следующий шаг
- `/route <agent> <задача>` — выполнить задачу в роли выбранного агента
- `/checkpoint` — создать/обновить чекпоинт в `context/checkpoints/`
- `/summary` — короткое саммари состояния и решений (для экономии контекста)

## Где “субагенты”

В `.cursor/agents/` лежат **профили ролей** (Orchestrator/Dev/Review/QA/…) с полным текстом спецификаций и подсказками по использованию.