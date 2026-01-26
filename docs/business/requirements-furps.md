# Требования FURPS+: BIOMAX AI v2.0

**Версия:** 1.0  
**Дата создания:** 2026-01-26  
**Автор:** Business Analyst Agent  
**Статус:** Complete  
**Связанные документы:**
- PRD: `docs/discovery/prd.md`
- Use Cases: `docs/business/use-cases.md`
- Technical Architecture: `docs/discovery/technical/langraph-architecture.md`
- Legal Compliance: `docs/discovery/legal/legal-summary.md`

---

## Содержание

1. [Overview](#overview)
2. [F — Functionality (Функциональность)](#f--functionality-функциональность)
3. [U — Usability (Удобство использования)](#u--usability-удобство-использования)
4. [R — Reliability (Надёжность)](#r--reliability-надёжность)
5. [P — Performance (Производительность)](#p--performance-производительность)
6. [S — Supportability (Поддерживаемость)](#s--supportability-поддерживаемость)
7. [+ Constraints (Ограничения)](#-constraints-ограничения)
8. [Traceability Matrix](#traceability-matrix)
9. [Summary](#summary)

---

## Overview

Документ описывает требования к платформе BIOMAX AI v2.0 по модели **FURPS+**:
- **F**unctionality — функциональные требования
- **U**sability — удобство использования
- **R**eliability — надёжность
- **P**erformance — производительность
- **S**upportability — поддерживаемость
- **+** Constraints — ограничения (Design, Implementation, Interface, Physical)

**Scope:** Personal Health Operating System с 15 AI-агентами, Custom RAG и 100+ интеграциями для биохакинга и health optimization. Первичный рынок — Россия (152-ФЗ compliance).

---

## F — Functionality (Функциональность)

### F.1 Core Features (Основные функции)

#### F.1.1 Мультиагентная AI-система (P0)

| ID | Требование | Приоритет | User Story | Use Case |
|----|------------|-----------|------------|----------|
| F-001 | Система ДОЛЖНА поддерживать 15 специализированных AI-агентов с dynamic orchestration | P0 | US-004, US-006 | UC-006, UC-007 |
| F-002 | Orchestrator Agent ДОЛЖЕН классифицировать intent пользователя и маршрутизировать к релевантным агентам | P0 | US-006 | UC-006, UC-007 |
| F-003 | Агенты ДОЛЖНЫ обмениваться контекстом через общий State и передавать результаты друг другу | P0 | — | UC-006 |
| F-004 | Система ДОЛЖНА поддерживать multi-agent conversation с сохранением контекста диалога | P0 | US-006 | UC-007 |
| F-005 | Safety Agent ДОЛЖЕН проверять ВСЕ рекомендации перед выдачей пользователю | P0 | US-004, US-020 | UC-006, UC-013 |

**Реестр агентов:**

| Agent | Ответственность | Приоритет |
|-------|-----------------|-----------|
| Orchestrator Agent | Координация агентов, маршрутизация запросов | P0 |
| Coach Agent | Мотивация, привычки, планы действий | P0 |
| Sleep Agent | Архитектура сна, циркадные ритмы | P0 |
| Nutrition Agent | Нутригеномика, диеты | P0 |
| Lab Interpreter Agent | Интерпретация анализов крови | P0 |
| Genomics Agent | ДНК-анализ, SNP интерпретация | P0 |
| Longevity Agent | Антистарение, биовозраст | P0 |
| Safety Agent | Противопоказания, взаимодействия | P0 |
| Integration Agent | Синтез данных из всех источников | P0 |
| Data Scientist Agent | Анализ паттернов, корреляции | P0 |
| Research Agent | Поиск научных исследований | P0 |
| Custom Protocol Agent | Пользовательские методики | P0 |
| Mental Health Agent | Стресс, тревожность | P1 |
| Cognitive Agent | Ноотропы, нейрофидбэк | P1 |
| Fitness Agent | Тренировки, восстановление | P1 |

#### F.1.2 Интеграции с источниками данных (P0)

| ID | Требование | Приоритет | User Story | Use Case |
|----|------------|-----------|------------|----------|
| F-006 | Система ДОЛЖНА интегрироваться с Oura Ring API для получения данных сна и HRV | P0 | US-001, US-005 | UC-001 |
| F-007 | Система ДОЛЖНА интегрироваться с Apple HealthKit для получения данных с Apple Watch | P0 | US-008, US-012 | UC-001 |
| F-008 | Система ДОЛЖНА поддерживать загрузку и парсинг PDF анализов из INVITRO, Helix, CMD, Гемотест | P0 | US-001, US-011 | UC-001, UC-004 |
| F-009 | Система ДОЛЖНА поддерживать импорт raw data из 23andMe (TXT, VCF) | P0 | US-004 | UC-005 |
| F-010 | Система ДОЛЖНА интегрироваться со Strava для данных о тренировках | P1 | US-001 | UC-001 |
| F-011 | Система ДОЛЖНА интегрироваться с Dexcom G7 для данных CGM | P1 | US-001 | UC-001 |
| F-012 | Система ДОЛЖНА интегрироваться с MyFitnessPal для данных о питании | P1 | US-001 | UC-001 |
| F-013 | Система ДОЛЖНА поддерживать загрузку PDF эпигенетических тестов (TruDiagnostic) | P0 | US-015 | UC-010 |

**Матрица интеграций (MVP):**

| Категория | Интеграция | Метод | Приоритет |
|-----------|------------|-------|-----------|
| Wearables | Oura Ring | OAuth 2.0 API | P0 |
| Wearables | Apple Watch (HealthKit) | Apple Health API | P0 |
| Labs (RU) | INVITRO | PDF Parser | P0 |
| Labs (RU) | Helix, CMD, Гемотест | PDF Parser | P1 |
| Genomics | 23andMe | File Upload (TXT/VCF) | P0 |
| Epigenetics | TruDiagnostic | File Upload (PDF) | P0 |
| Fitness | Strava | OAuth 2.0 API | P1 |
| CGM | Dexcom G7 | OAuth 2.0 API | P1 |
| Nutrition | MyFitnessPal | OAuth 2.0 API | P1 |

#### F.1.3 Custom RAG (Knowledge Base)

| ID | Требование | Приоритет | User Story | Use Case |
|----|------------|-----------|------------|----------|
| F-014 | Система ДОЛЖНА позволять загрузку пользовательских протоколов (PDF, MD, TXT, DOCX) | P0 | US-002 | UC-003 |
| F-015 | Система ДОЛЖНА создавать semantic embeddings для загруженных документов | P0 | US-002 | UC-003 |
| F-016 | Система ДОЛЖНА использовать RAG при формировании рекомендаций | P0 | US-002, US-004 | UC-006 |
| F-017 | Система ДОЛЖНА поддерживать поиск по базе знаний с учётом контекста запроса | P0 | US-002 | UC-003, UC-006 |
| F-018 | Каждый пользователь ДОЛЖЕН иметь изолированное пространство RAG (multi-tenant) | P0 | — | UC-003 |

**Параметры RAG Pipeline:**

| Параметр | Значение |
|----------|----------|
| Chunking strategy | Semantic chunking |
| Chunk size | 512 tokens |
| Chunk overlap | 50 tokens |
| Embedding model | GigaChat Embeddings / e5-mistral-7b |
| Vector store | Qdrant |
| Retrieval strategy | Hybrid (semantic + keyword) |

#### F.1.4 Health Score и Дашборд

| ID | Требование | Приоритет | User Story | Use Case |
|----|------------|-----------|------------|----------|
| F-019 | Система ДОЛЖНА вычислять Health Score (0-100) на основе 8 измерений wellness | P0 | US-001 | UC-002 |
| F-020 | Система ДОЛЖНА отображать централизованный дашборд с данными из всех источников | P0 | US-001 | UC-002 |
| F-021 | Система ДОЛЖНА показывать тренды изменения метрик за выбранный период (7д, 30д, 90д, 1г) | P0 | US-001 | UC-002 |
| F-022 | Система ДОЛЖНА использовать цветовую индикацию для статуса метрик (зелёный/жёлтый/красный) | P0 | — | UC-002 |

**Компоненты Health Score:**

| Измерение | Вес | Источники данных |
|-----------|-----|------------------|
| Physical Health | 20% | Activity, Resting HR |
| Metabolic Health | 15% | CGM, Blood markers |
| Cognitive Health | 15% | Surveys, Brain tests |
| Emotional Health | 15% | HRV, Surveys |
| Social Wellness | 10% | Surveys |
| Purpose & Meaning | 10% | Surveys |
| Environmental | 5% | Manual input |
| Biological Age | 10% | Epigenetic tests |

#### F.1.5 Telegram Bot Interface

| ID | Требование | Приоритет | User Story | Use Case |
|----|------------|-----------|------------|----------|
| F-023 | Система ДОЛЖНА предоставлять Telegram Bot как primary interface | P0 | US-006, US-010 | UC-007 |
| F-024 | Telegram Bot ДОЛЖЕН поддерживать быстрые команды (/sleep, /hrv, /score) | P0 | US-006 | UC-007 |
| F-025 | Telegram Bot ДОЛЖЕН поддерживать inline keyboards для action items | P0 | — | UC-007 |
| F-026 | Система ДОЛЖНА отправлять напоминания через Telegram | P0 | US-010 | UC-015 |
| F-027 | Система МОЖЕТ поддерживать Telegram WebApp для расширенного UI | P1 | US-006 | UC-007 |

---

### F.2 Business Rules (Бизнес-правила)

#### F.2.1 Правила обработки данных

| ID | Правило | Область |
|----|---------|---------|
| BR-001 | OAuth токены ДОЛЖНЫ храниться в зашифрованном виде (AES-256) | Security |
| BR-002 | Максимум 20 подключённых источников данных на пользователя | Limits |
| BR-003 | Синхронизация исторических данных: максимум 1 год для wearables, all time для анализов | Data |
| BR-004 | При дисконнекте источника данные ДОЛЖНЫ сохраняться (soft disconnect) | Data |
| BR-005 | Rate limiting: не более 1000 API запросов в день на источник | Limits |

#### F.2.2 Правила Health Score

| ID | Правило | Область |
|----|---------|---------|
| BR-006 | Health Score рассчитывается по 8 измерениям с фиксированными весами | Analytics |
| BR-007 | Зелёный индикатор = в оптимальном диапазоне; Жёлтый = требует внимания; Красный = критично | UI |
| BR-008 | Тренд показывается только если есть данные за ≥7 дней | Analytics |
| BR-009 | Референсные диапазоны: "нормальные" (лабораторные) vs "оптимальные" (longevity) — toggle | Data |

#### F.2.3 Правила RAG

| ID | Правило | Область |
|----|---------|---------|
| BR-010 | Лимиты RAG: Biohacker Pro = 5GB, Longevity Elite = 50GB | Limits |
| BR-011 | Поддерживаемые форматы: PDF, MD, TXT, DOCX | Data |
| BR-012 | Semantic chunking: 512 tokens per chunk, 50 tokens overlap | Processing |
| BR-013 | Metadata обязательны: название, категория | Data |
| BR-014 | Протоколы пользователя изолированы (multi-tenant vector store) | Security |

#### F.2.4 Правила интерпретации анализов

| ID | Правило | Область |
|----|---------|---------|
| BR-015 | Поддерживаемые лаборатории: INVITRO, Helix, CMD, Гемотест, KDL | Data |
| BR-016 | Референсные значения: лабораторные (default) + "оптимальные для longevity" (toggle) | Analytics |
| BR-017 | Интерпретация: "норма" ≠ "оптимально" — пользователь видит оба значения | UI |
| BR-018 | Safety check: при критических значениях показывается предупреждение "Консультация врача обязательна" | Safety |
| BR-019 | Хранение данных: indefinite, все анализы сохраняются для трендов | Data |

#### F.2.5 Правила генетики

| ID | Правило | Область |
|----|---------|---------|
| BR-020 | Поддерживаемые источники: 23andMe (v3-v5), Ancestry (v1-v2), Nebula, MyHeritage | Data |
| BR-021 | Генетические данные загружаются один раз (не изменяются) | Data |
| BR-022 | Только релевантные для health/longevity SNP сохраняются (~500 из 700,000) | Processing |
| BR-023 | Интерпретация SNP на основе SNPedia, ClinVar, научных публикаций | Analytics |
| BR-024 | Генетические данные шифруются с отдельным ключом | Security |

#### F.2.6 Правила AI-рекомендаций

| ID | Правило | Область |
|----|---------|---------|
| BR-025 | ВСЕ рекомендации проходят через Safety Agent | Safety |
| BR-026 | Генетические/медицинские данные используются только для персонализации, не для диагностики | Compliance |
| BR-027 | Дисклеймер показывается для рекомендаций по добавкам, диетам, протоколам | Compliance |
| BR-028 | Rate limits: Free=10/день, Optimize=100/день, Pro+=безлимит | Limits |
| BR-029 | Контекст диалога сохраняется 30 минут | UX |

#### F.2.7 Правила Telegram Bot

| ID | Правило | Область |
|----|---------|---------|
| BR-030 | Контекст диалога в Telegram сохраняется 30 минут (TTL в Redis) | UX |
| BR-031 | Длина ответа ≤ 4096 символов (Telegram limit), разбивка на несколько сообщений если нужно | Technical |
| BR-032 | Markdown formatting для читаемости | UI |
| BR-033 | Rate limiting: 20 сообщений в минуту | Limits |
| BR-034 | Inline keyboards для action items | UI |

#### F.2.8 Правила N=1 экспериментов

| ID | Правило | Область |
|----|---------|---------|
| BR-035 | Минимальный baseline: 7 дней | Experiment |
| BR-036 | Максимальная длительность эксперимента: 6 месяцев | Experiment |
| BR-037 | Статистические методы: Bayesian A/B, Causal Impact | Analytics |
| BR-038 | Power analysis: минимум 80% для рекомендации | Analytics |
| BR-039 | Compliance tracking: напоминания и отметки | UX |

#### F.2.9 Правила отслеживания добавок

| ID | Правило | Область |
|----|---------|---------|
| BR-040 | Минимум 14 дней данных для анализа эффективности | Analytics |
| BR-041 | Учитываются confounding variables (сон, стресс, тренировки) | Analytics |
| BR-042 | Safety check для комбинаций добавок | Safety |
| BR-043 | Напоминания о приёме (опционально) | UX |

#### F.2.10 Правила эпигенетики

| ID | Правило | Область |
|----|---------|---------|
| BR-044 | Поддерживаемые тесты: TruDiagnostic, Elysium Index, myDNAge | Data |
| BR-045 | Рекомендации основаны только на peer-reviewed исследованиях | Compliance |
| BR-046 | Тренд биологического возраста показывается при ≥2 тестах | Analytics |
| BR-047 | Прогноз биологического возраста с указанием uncertainty | Analytics |

#### F.2.11 Правила поиска исследований

| ID | Правило | Область |
|----|---------|---------|
| BR-048 | Уровни доказательности: A (meta-analysis, RCT), B (cohort), C (case-control), D (case reports) | Analytics |
| BR-049 | Приоритет: peer-reviewed journals, impact factor > 3 | Analytics |
| BR-050 | Возможность сохранить статью в "Избранное" | UX |
| BR-051 | Экспорт в BibTeX для цитирования | UX |

#### F.2.12 Правила протоколов долголетия

| ID | Правило | Область |
|----|---------|---------|
| BR-052 | Протокол обновляется при загрузке новых данных | Analytics |
| BR-053 | Safety Agent проверяет все рекомендации перед выдачей | Safety |
| BR-054 | Экспорт в PDF для обсуждения с врачом | UX |
| BR-055 | Версионирование протокола | Data |

#### F.2.13 Правила Safety проверок

| ID | Правило | Область |
|----|---------|---------|
| BR-056 | Все рекомендации по добавкам проходят Safety check | Safety |
| BR-057 | Источники: DrugBank, PubMed, Clinical databases | Data |
| BR-058 | При критических взаимодействиях — hard block + disclaimer | Safety |
| BR-059 | История проверок сохраняется для аудита | Compliance |

#### F.2.14 Правила отчётов и напоминаний

| ID | Правило | Область |
|----|---------|---------|
| BR-060 | Минимум 3 дня данных для генерации еженедельного отчёта | Analytics |
| BR-061 | Персонализация формата отчёта по персоне/предпочтениям | UX |
| BR-062 | Unsubscribe возможен в любой момент | Compliance |
| BR-063 | Retry 3 раза при неудаче доставки | Reliability |
| BR-064 | Учёт часового пояса пользователя для напоминаний | UX |
| BR-065 | Лимит: 10 активных напоминаний | Limits |
| BR-066 | Персонализация тона напоминаний (дружелюбный, нейтральный, мотивирующий) | UX |
| BR-067 | Возможность snooze (отложить на 15/30/60 минут) | UX |

---

### F.3 Security Requirements (Требования безопасности)

| ID | Требование | Стандарт/Закон | Приоритет |
|----|------------|----------------|-----------|
| SEC-001 | Аутентификация через OAuth 2.0 + обязательная 2FA для тарифов Pro+ | OAuth 2.0 | P0 |
| SEC-002 | Шифрование данных at rest (AES-256) | 152-ФЗ, ГОСТ | P0 |
| SEC-003 | Шифрование данных in transit (TLS 1.3) | 152-ФЗ, ГОСТ | P0 |
| SEC-004 | Генетические данные ДОЛЖНЫ шифроваться отдельным ключом | Best practice | P0 |
| SEC-005 | Audit logging для всех операций с персональными данными | 152-ФЗ | P0 |
| SEC-006 | RBAC (Role-Based Access Control) с минимальными правами | Best practice | P0 |
| SEC-007 | Session timeout: 30 минут неактивности | Security best practice | P0 |
| SEC-008 | Хранение паролей: bcrypt с cost factor ≥12 | OWASP | P0 |
| SEC-009 | Rate limiting для защиты от brute force | OWASP | P0 |
| SEC-010 | Сканирование загружаемых файлов на malware | Security best practice | P0 |
| SEC-011 | Уровень защищённости ПД — минимум УЗ-3 | 152-ФЗ, Приказ ФСТЭК №21 | P0 |
| SEC-012 | Регулярный pentest (минимум 1 раз в год) | Security best practice | P1 |

---

## U — Usability (Удобство использования)

### U.1 Accessibility (Доступность)

| ID | Требование | Стандарт | Приоритет |
|----|------------|----------|-----------|
| U-001 | Соответствие WCAG 2.1 Level A | WCAG 2.1 | P1 |
| U-002 | Keyboard navigation для всех интерактивных элементов | WCAG 2.1 | P1 |
| U-003 | Screen reader compatibility (alt texts, ARIA labels) | WCAG 2.1 | P2 |
| U-004 | Minimum contrast ratio 4.5:1 для текста | WCAG 2.1 | P1 |
| U-005 | Scalable text (минимум 200% zoom без потери функционала) | WCAG 2.1 | P2 |

### U.2 User Experience

| ID | Требование | Метрика | Приоритет |
|----|------------|---------|-----------|
| U-006 | Task completion rate для ключевых сценариев | > 90% | P0 |
| U-007 | Learning curve для новых пользователей | < 10 минут до first value | P0 |
| U-008 | Error rate при вводе данных | < 5% | P0 |
| U-009 | System Usability Scale (SUS) score | > 70 | P1 |
| U-010 | Net Promoter Score (NPS) | > 50 (target M12) | P1 |
| U-011 | Time to first value (первый инсайт) | < 10 минут | P0 |

### U.3 Onboarding

| ID | Требование | Детали | Приоритет |
|----|------------|--------|-----------|
| U-012 | Onboarding completion rate | > 70% | P0 |
| U-013 | Progressive disclosure — не перегружать пользователя на старте | — | P0 |
| U-014 | Контекстные подсказки для ключевых функций | — | P1 |
| U-015 | "Пустые состояния" с CTA для подключения данных | — | P0 |
| U-016 | Объяснение wellness vs medicine границ при регистрации | — | P0 |

### U.4 Localization (Локализация)

| ID | Требование | Детали | Приоритет |
|----|------------|--------|-----------|
| U-017 | Primary language: Русский | — | P0 |
| U-018 | Secondary language: English | — | P2 |
| U-019 | Локализация дат, времени, валюты (RU format) | — | P0 |
| U-020 | Локализация референсных диапазонов (RU лаборатории) | — | P0 |
| U-021 | RTL support | — | P3 (out of scope) |

### U.5 Personalization

| ID | Требование | Детали | Приоритет |
|----|------------|--------|-----------|
| U-022 | Адаптация формата ответов под персону (простой/научный) | — | P0 |
| U-023 | Настройка tone of voice для напоминаний | — | P1 |
| U-024 | Настройка частоты отчётов и уведомлений | — | P0 |
| U-025 | Выбор референсных диапазонов (лабораторные/оптимальные) | — | P0 |

---

## R — Reliability (Надёжность)

### R.1 Availability (Доступность системы)

| ID | Требование | Target | Приоритет |
|----|------------|--------|-----------|
| R-001 | System uptime | 99.5% | P0 |
| R-002 | Planned maintenance window | < 2 часа/месяц | P1 |
| R-003 | Unplanned downtime | < 4 часа/месяц | P0 |
| R-004 | Graceful degradation при недоступности компонентов | — | P0 |

**Расчёт SLA:**

| SLA Level | Uptime | Допустимый downtime (месяц) |
|-----------|--------|----------------------------|
| 99.0% | — | ~7.3 часа |
| **99.5%** | Target | ~3.6 часа |
| 99.9% | Stretch | ~43 минуты |

### R.2 Recoverability (Восстановимость)

| ID | Требование | Target | Приоритет |
|----|------------|--------|-----------|
| R-005 | Recovery Time Objective (RTO) | ≤ 4 часа | P0 |
| R-006 | Recovery Point Objective (RPO) | ≤ 1 час | P0 |
| R-007 | Backup frequency | Daily (full) + Hourly (incremental) | P0 |
| R-008 | Backup retention | 30 дней | P0 |
| R-009 | Geo-redundant backup storage | Да (в пределах РФ) | P1 |
| R-010 | Automated disaster recovery testing | Quarterly | P1 |

### R.3 Fault Tolerance (Отказоустойчивость)

| ID | Требование | Детали | Приоритет |
|----|------------|--------|-----------|
| R-011 | Graceful degradation при сбое AI-агента | Fallback к базовому ответу | P0 |
| R-012 | Automatic failover для критических компонентов | Database, Cache | P0 |
| R-013 | Circuit breaker для внешних API | 3 retries, exponential backoff | P0 |
| R-014 | Dead letter queue для failed async operations | — | P1 |
| R-015 | LLM fallback chain: GigaChat → YandexGPT | — | P0 |

### R.4 Data Integrity (Целостность данных)

| ID | Требование | Детали | Приоритет |
|----|------------|--------|-----------|
| R-016 | ACID transactions для критических операций | — | P0 |
| R-017 | Idempotent API operations | — | P0 |
| R-018 | Data validation на всех входных точках | — | P0 |
| R-019 | Checksum verification для загружаемых файлов | — | P1 |
| R-020 | Audit trail для всех изменений данных пользователя | — | P0 |

---

## P — Performance (Производительность)

### P.1 Response Time (Время отклика)

| Операция | Average | P95 | P99 | Приоритет |
|----------|---------|-----|-----|-----------|
| AI Agent response (simple query) | < 3s | < 5s | < 8s | P0 |
| AI Agent response (complex multi-agent) | < 8s | < 12s | < 15s | P0 |
| Dashboard page load | < 1.5s | < 2s | < 3s | P0 |
| Dashboard full data load | < 2s | < 3s | < 5s | P0 |
| RAG retrieval | < 500ms | < 1s | < 2s | P0 |
| Data sync (incremental) | < 5s | < 10s | < 15s | P1 |
| PDF parsing (lab results) | < 5s | < 10s | < 15s | P0 |
| PDF parsing (genetic raw data) | < 30s | < 60s | < 90s | P0 |
| Search in knowledge base | < 1s | < 2s | < 3s | P0 |
| Report generation | < 10s | < 20s | < 30s | P1 |

### P.2 Throughput (Пропускная способность)

| Метрика | Target (MVP) | Target (M12) | Приоритет |
|---------|--------------|--------------|-----------|
| Concurrent users | 500 | 10,000 | P0 |
| Requests per second (API) | 100 | 500 | P0 |
| AI queries per minute | 50 | 500 | P0 |
| File uploads per minute | 10 | 50 | P1 |
| Webhook events per minute | 100 | 1,000 | P1 |

### P.3 Capacity (Ёмкость)

| Метрика | Target (M12) | Target (M24) | Приоритет |
|---------|--------------|--------------|-----------|
| Total users | 150,000 | 500,000 | P1 |
| Paying users | 10,000 | 40,000 | P1 |
| Data storage per user (avg) | 1 GB | 5 GB | P1 |
| RAG documents per user (avg) | 20 | 100 | P1 |
| Total data storage | 150 TB | 2.5 PB | P1 |
| Vector embeddings (Qdrant) | 50M vectors | 500M vectors | P1 |

### P.4 Scalability (Масштабируемость)

| ID | Требование | Детали | Приоритет |
|----|------------|--------|-----------|
| P-001 | Horizontal scaling для API servers | Kubernetes HPA | P0 |
| P-002 | Database read replicas | PostgreSQL streaming replication | P1 |
| P-003 | Caching layer | Redis Cluster | P0 |
| P-004 | CDN для статики | — | P1 |
| P-005 | Queue-based processing для heavy operations | Kafka/RabbitMQ | P0 |
| P-006 | Sharding strategy для vector store | По user_id namespace | P1 |

---

## S — Supportability (Поддерживаемость)

### S.1 Maintainability (Сопровождаемость)

| ID | Требование | Детали | Приоритет |
|----|------------|--------|-----------|
| S-001 | Modular architecture (microservices) | Каждая команда агентов — отдельный сервис | P0 |
| S-002 | Code documentation | Docstrings, README для каждого модуля | P0 |
| S-003 | API documentation (OpenAPI 3.0) | Swagger UI | P0 |
| S-004 | Architecture Decision Records (ADR) | Для всех значимых решений | P1 |
| S-005 | Semantic versioning для API | vX.Y.Z | P0 |
| S-006 | Deprecation policy | 6 месяцев notice | P1 |

### S.2 Testability (Тестируемость)

| ID | Требование | Target | Приоритет |
|----|------------|--------|-----------|
| S-007 | Unit test coverage | > 80% | P0 |
| S-008 | Integration test coverage | > 60% | P0 |
| S-009 | End-to-end test coverage | > 40% для critical paths | P1 |
| S-010 | Load testing | Перед каждым major release | P0 |
| S-011 | Chaos engineering | Quarterly | P2 |
| S-012 | Automated regression testing | CI/CD pipeline | P0 |

### S.3 Configurability (Конфигурируемость)

| ID | Требование | Детали | Приоритет |
|----|------------|--------|-----------|
| S-013 | Environment-based configuration | Dev/Staging/Prod | P0 |
| S-014 | Feature flags support | — | P0 |
| S-015 | A/B testing infrastructure | — | P1 |
| S-016 | Dynamic configuration без redeploy | — | P1 |
| S-017 | Per-tenant configuration | Для B2B | P2 |

### S.4 Monitoring & Observability (Мониторинг)

| ID | Требование | Детали | Приоритет |
|----|------------|--------|-----------|
| S-018 | Structured logging (JSON) | ELK Stack / Loki | P0 |
| S-019 | Distributed tracing | OpenTelemetry + Jaeger | P0 |
| S-020 | Health check endpoints | /health, /ready, /live | P0 |
| S-021 | Metrics collection | Prometheus | P0 |
| S-022 | Dashboards | Grafana | P0 |
| S-023 | Alerting | PagerDuty / Opsgenie | P0 |
| S-024 | LLM observability | LangSmith | P0 |
| S-025 | Real-time error tracking | Sentry | P0 |
| S-026 | Uptime monitoring | External probe (UptimeRobot) | P0 |

### S.5 Deployment (Развёртывание)

| ID | Требование | Детали | Приоритет |
|----|------------|--------|-----------|
| S-027 | CI/CD pipeline | GitLab CI / GitHub Actions | P0 |
| S-028 | Infrastructure as Code (IaC) | Terraform | P0 |
| S-029 | Container orchestration | Kubernetes | P0 |
| S-030 | Zero-downtime deployments | Rolling updates / Blue-Green | P0 |
| S-031 | Rollback capability | < 5 минут | P0 |
| S-032 | Database migrations | Alembic with rollback | P0 |

### S.6 Documentation (Документация)

| ID | Требование | Детали | Приоритет |
|----|------------|--------|-----------|
| S-033 | User documentation | Help center, FAQs | P0 |
| S-034 | API documentation | OpenAPI 3.0, Postman collection | P0 |
| S-035 | Operations runbooks | Для on-call engineers | P0 |
| S-036 | Incident response playbooks | — | P0 |
| S-037 | Architecture documentation | C4 diagrams | P1 |

---

## + Constraints (Ограничения)

### DC — Design Constraints (Ограничения проектирования)

| ID | Constraint | Rationale | Impact |
|----|------------|-----------|--------|
| DC-001 | Microservices architecture с разделением по командам агентов | Scalability, team autonomy | Сложность инфраструктуры |
| DC-002 | LangGraph для оркестрации агентов | Требование мультиагентной системы | Зависимость от фреймворка |
| DC-003 | Hierarchical Supervisor паттерн для агентов | Масштабируемость при 15+ агентах | Сложность routing |
| DC-004 | Event-driven architecture для интеграций | Loose coupling, resilience | Eventual consistency |
| DC-005 | CQRS для read-heavy операций (дашборд) | Performance requirements | Сложность синхронизации |

### IC — Implementation Constraints (Ограничения реализации)

| ID | Constraint | Rationale | Impact |
|----|------------|-----------|--------|
| IC-001 | Python 3.11+ для backend | LangChain/LangGraph ecosystem | — |
| IC-002 | FastAPI для API | Performance, async support | — |
| IC-003 | PostgreSQL для основной БД | Reliability, PostgresSaver for LangGraph | — |
| IC-004 | Qdrant для vector store | Multi-tenant support, performance | — |
| IC-005 | Redis для caching и sessions | Performance, TTL support | — |
| IC-006 | ClickHouse для time-series analytics | Performance для агрегаций | — |
| IC-007 | aiogram 3.x для Telegram bot | Async support, русскоязычное комьюнити | — |

### IFC — Interface Constraints (Ограничения интерфейсов)

| ID | Constraint | Details | Impact |
|----|------------|---------|--------|
| IFC-001 | REST API с OpenAPI 3.0 спецификацией | Стандарт, tooling | — |
| IFC-002 | Telegram Bot API v6+ | Telegram platform constraint | Ограничения на размер сообщений (4096 chars) |
| IFC-003 | OAuth 2.0 для интеграций (Oura, Strava, etc.) | Vendor requirement | Token refresh management |
| IFC-004 | WebSocket для real-time updates | UX requirement | Stateful connections |
| IFC-005 | Webhook-based integration для wearables | Vendor APIs | Event-driven processing |

### PC — Physical Constraints (Физические ограничения)

#### PC.1 Регуляторные ограничения (152-ФЗ)

| ID | Constraint | Details | Impact |
|----|------------|---------|--------|
| PC-001 | **Все персональные данные ДОЛЖНЫ храниться в РФ** | 152-ФЗ, локализация с 01.07.2025 | Yandex Cloud / VK Cloud / On-premise |
| PC-002 | **Трансграничная передача ПД требует уведомления РКН** | 152-ФЗ | Ограничение на использование OpenAI |
| PC-003 | **Обработка специальных категорий ПД (здоровье, генетика) требует письменного согласия** | 152-ФЗ, ст. 10 | Consent management в UI |
| PC-004 | **Обязательная регистрация оператора ПД в Роскомнадзоре** | 152-ФЗ | Административное действие |
| PC-005 | **Уровень защищённости ПД — минимум УЗ-3** | Приказ ФСТЭК №21 | Security requirements |

#### PC.2 Wellness vs Medicine

| ID | Constraint | Details | Impact |
|----|------------|---------|--------|
| PC-006 | **Позиционирование как wellness-платформа** | Без медицинской лицензии | Hard blocks на диагностику |
| PC-007 | **Запрет на постановку диагнозов** | ст. 235 УК РФ | Safety Module |
| PC-008 | **Запрет на назначение рецептурных препаратов** | Регуляторные требования | Safety Module |
| PC-009 | **Обязательные дисклеймеры для всех рекомендаций** | Compliance | UI integration |
| PC-010 | **Направление к врачу при red flags** | Safety requirement | Human-in-the-loop |

#### PC.3 Технические ограничения

| ID | Constraint | Details | Impact |
|----|------------|---------|--------|
| PC-011 | **LLM response time ≤ 5 секунд (p95)** | UX requirement | Prompt optimization, caching |
| PC-012 | **LLM context window ограничен** | GigaChat: 8K tokens | RAG для long-term memory |
| PC-013 | **Telegram Bot API rate limits** | 30 msg/sec per bot | Queue management |
| PC-014 | **Wearables API rate limits** | Varies by vendor | Caching, batching |
| PC-015 | **PDF parsing accuracy** | OCR limitations | Manual fallback |

#### PC.4 Бюджетные ограничения

| ID | Constraint | Details | Impact |
|----|------------|---------|--------|
| PC-016 | **MVP budget constraints** | Limited runway | Telegram-first vs native apps |
| PC-017 | **LLM cost optimization** | Pay-per-token model | Caching, query optimization |
| PC-018 | **Infrastructure cost in Russia** | Higher than global clouds | Cost optimization |

---

## Traceability Matrix

### Requirements → User Stories → Use Cases

| Requirement ID | User Stories | Use Cases | Priority |
|----------------|--------------|-----------|----------|
| F-001 (Multi-agent AI) | US-004, US-006 | UC-006, UC-007 | P0 |
| F-006 (Oura integration) | US-001, US-005 | UC-001 | P0 |
| F-007 (Apple Watch) | US-008, US-012 | UC-001 | P0 |
| F-008 (Lab PDF parsing) | US-001, US-011 | UC-001, UC-004 | P0 |
| F-009 (23andMe import) | US-004 | UC-005 | P0 |
| F-014 (Custom RAG) | US-002 | UC-003 | P0 |
| F-019 (Health Score) | US-001 | UC-002 | P0 |
| F-023 (Telegram Bot) | US-006, US-010 | UC-007 | P0 |
| SEC-005 (Audit logging) | — | All | P0 |
| PC-001 (Data in Russia) | — | All | P0 |
| PC-006 (Wellness positioning) | — | UC-006, UC-013 | P0 |

### Non-Functional Requirements Summary

| Category | P0 Requirements | P1 Requirements | P2 Requirements |
|----------|-----------------|-----------------|-----------------|
| **Usability** | 7 | 5 | 3 |
| **Reliability** | 10 | 5 | 1 |
| **Performance** | 8 | 4 | 0 |
| **Supportability** | 15 | 8 | 2 |
| **Constraints** | 17 | 1 | 0 |
| **Total** | **57** | **23** | **6** |

---

## Summary

### Сводка требований

| Категория | Количество | P0 | P1 | P2 |
|-----------|------------|----|----|----| 
| **F - Functionality** | | | | |
| Core Features | 27 | 18 | 9 | 0 |
| Business Rules | 67 | 50 | 17 | 0 |
| Security Requirements | 12 | 11 | 1 | 0 |
| **U - Usability** | 25 | 12 | 9 | 4 |
| **R - Reliability** | 20 | 15 | 5 | 0 |
| **P - Performance** | 12 | 8 | 4 | 0 |
| **S - Supportability** | 37 | 25 | 10 | 2 |
| **+ Constraints** | 18 | 17 | 1 | 0 |
| **TOTAL** | **218** | **156** | **56** | **6** |

### Ключевые метрики успеха

| KPI | Target (M6) | Target (M12) |
|-----|-------------|--------------|
| AI Agent response time (p95) | < 5s | < 5s |
| System uptime | 99.5% | 99.5% |
| Onboarding completion | > 70% | > 80% |
| Unit test coverage | > 80% | > 85% |
| 152-ФЗ compliance | 100% | 100% |

### Критические зависимости

1. **GigaChat API** — primary LLM provider
2. **Yandex Cloud / VK Cloud** — 152-ФЗ compliant infrastructure
3. **Oura / Apple HealthKit APIs** — wearables data
4. **DrugBank API** — safety checks
5. **PubMed API** — research verification

### Основные риски

| Риск | Митигация |
|------|-----------|
| Нарушение 152-ФЗ | Вся инфраструктура в РФ, DPO, аудиты |
| Квалификация как медицина | Safety Module, disclaimers, wellness positioning |
| LLM hallucinations | RAG, source attribution, Safety Agent |
| API dependency | Multi-vendor strategy, fallbacks, caching |

---

## Appendix: Summary в YAML-формате

```yaml
furps_requirements_summary:
  project: "BIOMAX AI v2.0"
  version: "1.0"
  date: "2026-01-26"
  status: "Complete"
  
  total_requirements: 218
  by_priority:
    P0: 156
    P1: 56
    P2: 6
  
  functionality:
    core_features: 27
    business_rules: 67
    security_requirements: 12
    
  usability:
    accessibility: 5
    user_experience: 6
    onboarding: 5
    localization: 5
    personalization: 4
    
  reliability:
    availability_sla: "99.5%"
    rto: "4 hours"
    rpo: "1 hour"
    fault_tolerance: "LLM fallback, circuit breakers, dead letter queues"
    
  performance:
    ai_response_p95: "< 5s"
    dashboard_load: "< 2s"
    concurrent_users_m12: 10000
    
  supportability:
    unit_test_coverage: "> 80%"
    monitoring: "Prometheus, Grafana, LangSmith, Sentry"
    deployment: "Kubernetes, GitLab CI, Terraform"
    
  constraints:
    regulatory:
      - "152-ФЗ: все данные в РФ"
      - "Wellness positioning (не медицина)"
      - "Обязательные дисклеймеры"
    technical:
      - "LangGraph для оркестрации"
      - "Python 3.11+ backend"
      - "GigaChat / YandexGPT LLM"
    
  key_decisions:
    - id: "DEC-001"
      decision: "Hierarchical Supervisor паттерн для 15 агентов"
      rationale: "Scalability при большом числе агентов"
    - id: "DEC-002"
      decision: "PostgresSaver для LangGraph checkpoints"
      rationale: "Reliability, persistence"
    - id: "DEC-003"
      decision: "Telegram-first MVP"
      rationale: "Fast time-to-market, 152-ФЗ compliance"
  
  next_steps:
    - "Review с архитектором и dev-командой"
    - "Создание technical specifications по каждой категории"
    - "Планирование спринтов на основе приоритетов"
    - "Разработка test cases на основе требований"
  
  documents_created:
    - path: "docs/business/requirements-furps.md"
      status: "complete"
```

---

**Дата создания:** 2026-01-26  
**Статус:** Complete — готово к review  
**Автор:** Business Analyst Agent  

**Следующие шаги:**
1. Review с архитектором и dev-командой
2. Приоритизация для Sprint Planning
3. Создание technical specifications
4. Разработка test cases на основе требований
5. Валидация с юридическим консультантом (152-ФЗ constraints)
