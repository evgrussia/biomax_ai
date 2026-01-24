# Web Application Development Agentic System

## Обзор архитектуры

Система построена на принципах DDD (Domain-Driven Design) и Clean Architecture с использованием паттернов SOLID, DRY, KISS.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           ORCHESTRATOR AGENT                                 │
│                    (Главный агент-оркестратор)                              │
│  Ответственность: приём задач, декомпозиция, маршрутизация, мониторинг      │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
        ┌───────────────────────────┼───────────────────────────┐
        │                           │                           │
        ▼                           ▼                           ▼
┌───────────────────┐   ┌───────────────────┐   ┌───────────────────┐
│   DISCOVERY       │   │   DESIGN          │   │   ARCHITECTURE    │
│   DOMAIN          │   │   DOMAIN          │   │   DOMAIN          │
│                   │   │                   │   │                   │
│ • Product Agent   │   │ • UX Agent        │   │ • Architect Agent │
│ • Research Agent  │   │ • UI Agent        │   │ • Security Agent  │
│ • Analytics Agent │   │ • Content Agent   │   │ • Data Agent      │
└───────────────────┘   └───────────────────┘   └───────────────────┘
        │                           │                           │
        ▼                           ▼                           ▼
┌───────────────────┐   ┌───────────────────┐   ┌───────────────────┐
│   DEVELOPMENT     │   │   QUALITY         │   │   OPERATIONS      │
│   DOMAIN          │   │   DOMAIN          │   │   DOMAIN          │
│                   │   │                   │   │                   │
│ • Dev Agent       │   │ • QA Agent        │   │ • DevOps Agent    │
│ • Frontend Agent  │   │ • Review Agent    │   │ • SRE Agent       │
│ • Backend Agent   │   │ • Test Agent      │   │ • Marketing Agent │
└───────────────────┘   └───────────────────┘   └───────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                           SHARED KERNEL                                      │
│                    (Общие навыки и утилиты)                                 │
│  • Context Manager (экономия токенов)                                       │
│  • Document Generator                                                        │
│  • Image Generator                                                           │
│  • Web Research                                                              │
│  • Verification Engine                                                       │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Принципы экономии контекста

### 1. Hierarchical Context Compression
- Каждый агент работает с минимальным контекстом
- Передаётся только Summary предыдущих этапов
- Полные документы загружаются по требованию

### 2. Context Budget
- Оркестратор отслеживает бюджет токенов
- Приоритизация информации по релевантности
- Автоматическая архивация завершённых этапов

### 3. Lazy Loading
- Документы загружаются только при необходимости
- Используются ссылки вместо полного контента
- Прогрессивная детализация информации

## Процесс выполнения

```
1. INTAKE → Orchestrator получает сырую идею
2. DISCOVERY → Product + Research агенты создают документацию
3. DESIGN → UX/UI агенты создают дизайн-систему
4. ARCHITECTURE → Architect агент проектирует систему
5. DEVELOPMENT → Dev агенты реализуют через Cursor
6. VERIFICATION → Review агент проверяет реализацию
7. TESTING → QA агент запускает все тесты
8. DEPLOYMENT → DevOps агент готовит production
9. MARKETING → Marketing агент создаёт план продвижения
```

## Артефакты системы

### Context Store
```yaml
location: /project/context/
structure:
  - summaries/      # Краткие саммари документов
  - documents/      # Полные документы
  - decisions/      # Логи решений
  - checkpoints/    # Контрольные точки
```

### Document Registry
Единый реестр всех созданных документов с метаданными:
- Статус (draft/review/approved)
- Зависимости между документами
- История изменений
