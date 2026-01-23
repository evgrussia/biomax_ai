# Web Application Development Agentic System

## Обзор системы

Это комплексная агентская система для полного цикла разработки веб-приложений: от сырой бизнес-идеи до production и маркетинга.

## Структура системы

```
agentic-system/
├── ARCHITECTURE.md          # Архитектура системы
├── SYSTEM.md               # Этот файл - главная конфигурация
│
├── agents/                      # Субагенты системы
│   ├── orchestrator-agent/      # Главный координатор
│   ├── product-agent/           # Product Manager
│   ├── research-agent/          # Market Research
│   ├── analytics-agent/         # Analytics & Metrics
│   ├── ux-agent/               # UX Designer
│   ├── ui-agent/               # UI Designer
│   ├── content-agent/           # Content & UX Writing
│   ├── architect-agent/         # System Architect
│   ├── data-agent/             # Data Modeling
│   ├── security-agent/          # Security
│   ├── dev-agent/              # Tech Lead
│   ├── cursor-agent/           # Code Implementation (IDE-based)
│   ├── claude-coder-agent/     # Code Implementation (Claude-based)
│   ├── qa-agent/               # QA Engineer
│   ├── review-agent/           # Code Reviewer
│   ├── devops-agent/           # DevOps
│   ├── sre-agent/              # SRE
│   └── marketing-agent/         # Marketing
│
├── skills/                  # Переиспользуемые навыки
│   ├── image-generator/     # Генерация изображений
│   ├── document-generator/  # Генерация документации
│   └── web-research/        # Исследования в интернете
│
└── shared/                  # Общие компоненты
    ├── context-manager/     # Управление контекстом
    └── verification-engine/ # Движок верификации
```

## Процесс выполнения

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        1. INTAKE (Orchestrator)                              │
│  Получение сырой идеи → Project Brief → Инициализация Context Store          │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        2. DISCOVERY                                          │
│  Product Agent → Vision, PRD, User Stories                                   │
│  Research Agent → Competitive Analysis, Market Research                      │
│  Analytics Agent → Tracking Plan, Metrics Framework                          │
│  ══════════════════════════════════════════════════════════════════════════ │
│  OUTPUT: Discovery Summary + Checkpoint #1                                   │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        3. DESIGN                                             │
│  UX Agent → User Flows, IA, Wireframes, Accessibility                        │
│  UI Agent → Design System, Component Library, Visual Specs                   │
│  Content Agent → Voice & Tone, UI Copy, Microcopy Guide                      │
│  Image Generator → Illustrations, Icons, Assets                              │
│  ══════════════════════════════════════════════════════════════════════════ │
│  OUTPUT: Design Summary + Checkpoint #2                                      │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        4. ARCHITECTURE                                       │
│  Architect Agent → System Design, ADRs, Tech Stack                           │
│  Data Agent → Domain Model, DB Schema, API Contracts                         │
│  Security Agent → Threat Model, Security Requirements                        │
│  ══════════════════════════════════════════════════════════════════════════ │
│  OUTPUT: Architecture Summary + Checkpoint #3                                │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        5. DEVELOPMENT                                        │
│  Dev Agent → Technical Specs, Project Setup, Code Conventions                │
│  QA Agent → Test Strategy, Test Infrastructure                               │
│                                                                              │
│  FOR EACH FEATURE:                                                           │
│    Dev Agent → Technical Spec                                                │
│    Dev Agent → Select Implementation Agent:                                  │
│      ├─ Claude Coder Agent (complex features, architecture)                  │
│      └─ Cursor Agent (iterations, bug fixes, integration)                    │
│    Implementation Agent → Code + Tests                                       │
│    Review Agent → Verification (100%?)                                       │
│      IF < 100% → Return to Implementation Agent                              │
│      IF = 100% → Run Tests                                                   │
│        IF Tests Fail → Implementation Agent fixes                            │
│        IF Tests Pass → Feature DONE                                          │
│  ══════════════════════════════════════════════════════════════════════════ │
│  OUTPUT: Implemented Features + Checkpoint #4                                │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        6. QUALITY ASSURANCE                                  │
│  QA Agent → Full Regression, All Test Types                                  │
│  Security Agent → Security Review                                            │
│  ══════════════════════════════════════════════════════════════════════════ │
│  OUTPUT: QA Report + Checkpoint #5                                           │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        7. DEPLOYMENT PREPARATION                             │
│  DevOps Agent → CI/CD, IaC, Deployment Docs                                  │
│  SRE Agent → Monitoring, Alerting, Runbooks, SLOs                            │
│  Document Generator → User Docs, Help Center                                 │
│  ══════════════════════════════════════════════════════════════════════════ │
│  OUTPUT: Production Ready + Checkpoint #6                                    │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        8. MARKETING                                          │
│  Marketing Agent → Strategy, Launch Plan, Content Plan, Channel Strategy     │
│  ══════════════════════════════════════════════════════════════════════════ │
│  OUTPUT: Marketing Plan + Final Report                                       │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Агенты и их роли

| Агент | Роль | Уровень | Фаза |
|-------|------|---------|------|
| Orchestrator | Координатор всей системы | Lead | Все |
| Product | Product Manager | Senior | Discovery |
| Research | Market Research Analyst | Senior | Discovery |
| Analytics | Analytics Engineer | Senior | Discovery |
| UX | UX Designer | Senior | Design |
| UI | UI Designer | Senior | Design |
| Content | UX Writer | Senior | Design |
| Architect | System Architect | Lead | Architecture |
| Data | Data Engineer | Senior | Architecture |
| Security | Security Engineer | Senior | Architecture, QA |
| Dev | Tech Lead | Lead | Development |
| Cursor | Full-Stack Developer (IDE) | Senior | Development |
| Claude Coder | Full-Stack Developer (Claude) | Senior | Development |
| QA | QA Engineer / SDET | Senior | Development, QA |
| Review | Code Reviewer | Senior | Development |
| DevOps | DevOps Engineer | Senior | Deployment |
| SRE | Site Reliability Engineer | Senior | Deployment |
| Marketing | Marketing Manager | Senior | Marketing |

## Implementation Agent Selection

### Cursor Agent vs Claude Coder Agent

| Критерий | Claude Coder | Cursor Agent |
|----------|--------------|--------------|
| Новая сложная фича | ✅ Рекомендуется | ⚪ Возможно |
| Новая простая фича | ⚪ Возможно | ✅ Рекомендуется |
| Исправление багов | ⚪ Возможно | ✅ Рекомендуется |
| Крупный рефакторинг | ✅ Рекомендуется | ⚪ Возможно |
| Мелкий рефакторинг | ⚪ Возможно | ✅ Рекомендуется |
| Архитектурные решения | ✅ Рекомендуется | ❌ Не подходит |
| Быстрые итерации | ❌ Не подходит | ✅ Рекомендуется |
| Большой контекст | ✅ Рекомендуется | ⚪ Возможно |
| Генерация тестов | ✅ Рекомендуется | ⚪ Возможно |
| Real-time отладка | ❌ Не поддерживается | ✅ Рекомендуется |

### Типичный паттерн использования

```
1. Claude Coder: Начальная реализация + архитектура
   ↓
2. Review Agent: Первичная верификация
   ↓
3. Cursor Agent: Интеграция, правки, отладка
   ↓
4. Review Agent: Финальная верификация
   ↓
5. QA Agent: Полное тестирование
```

## Механизм экономии токенов

### Context Budget
```yaml
max_tokens: 100000

allocation:
  current_task: 40%      # Текущая задача и её контекст
  summaries: 30%         # Саммари предыдущих фаз
  shared_context: 20%    # Общий контекст проекта
  history: 10%           # История решений
```

### Compression Strategy
1. После каждой фазы создаётся Summary (max 500 tokens)
2. Полные документы архивируются
3. Между агентами передаются только summaries + ссылки
4. Полные документы загружаются по запросу

### Checkpoint System
- Checkpoint после каждой фазы
- Содержит: summaries, decisions, artifacts, next_actions
- Позволяет продолжить с любой точки

## Принципы архитектуры

### DDD (Domain-Driven Design)
- Ubiquitous Language
- Bounded Contexts
- Aggregates
- Domain Events

### Clean Architecture
- Independence of frameworks
- Testability
- Independence of UI/DB
- Dependency Inversion

### SOLID
- Single Responsibility
- Open/Closed
- Liskov Substitution
- Interface Segregation
- Dependency Inversion

### DRY, KISS
- Don't Repeat Yourself
- Keep It Simple, Stupid

## Тестирование

### Testing Pyramid
```
        /\
       /  \     E2E (10%)
      /----\    
     /      \   Integration (20%)
    /--------\  
   /          \ Unit (70%)
  /__________\
```

### Test Infrastructure
- Docker для всех тестовых сервисов
- Тестовые пользователи и данные через fixtures
- Изолированные базы данных для разных типов тестов
- Sequential execution для integration тестов

## Quality Gates

### Discovery → Design
- [ ] Vision Document approved
- [ ] PRD complete
- [ ] User Stories with AC
- [ ] Research completed

### Design → Architecture
- [ ] User Flows complete
- [ ] Wireframes complete
- [ ] Design System documented
- [ ] Accessibility defined

### Architecture → Development
- [ ] System architecture documented
- [ ] ADRs recorded
- [ ] Data model complete
- [ ] API contracts defined

### Development → QA
- [ ] All features implemented (100%)
- [ ] All tests pass
- [ ] Code review passed
- [ ] Coverage >= 80%

### QA → Deployment
- [ ] All tests green
- [ ] Security review passed
- [ ] Performance acceptable

### Deployment → Marketing
- [ ] Production ready
- [ ] Monitoring configured
- [ ] Runbooks ready
- [ ] Documentation complete

## Использование

### Запуск нового проекта
```
1. Передать идею Orchestrator Agent
2. Orchestrator создаёт Project Brief
3. Orchestrator направляет задачи субагентам
4. Субагенты выполняют задачи и отчитываются
5. Orchestrator отслеживает прогресс и Quality Gates
6. По завершении фазы создаётся Checkpoint
7. Процесс продолжается до Marketing фазы
```

### Получение статуса
```
Orchestrator предоставляет:
- Текущую фазу
- Процент завершения
- Текущие задачи
- Блокеры (если есть)
```

## Документация проекта

Все документы создаются в структуре:
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

## Версия
v1.1.0 - Added Claude Coder Agent as alternative implementation agent
