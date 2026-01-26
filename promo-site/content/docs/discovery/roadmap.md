# Product Roadmap: BIOMAX AI v2.0

**Version:** 1.0  
**Last Updated:** 2026-01-26  
**Author:** Product Agent  
**Status:** Draft

---

## Overview

Данный roadmap определяет план развития BIOMAX AI v2.0 от MVP до полноценного продукта. Roadmap построен на основе:

- **Стратегия:** Telegram Bot → Telegram WebApp → Flutter Mobile
- **Рынок:** Россия (primary), 152-ФЗ compliance
- **MVP scope:** Максимум модулей с минимальной глубиной интеграций
- **North Star Metric:** Monthly Active Users using AI agents for health decisions

---

## Release Strategy

| Phase | Timeline | Goal | Primary Users |
|-------|----------|------|---------------|
| **Alpha** | M1-M3 | Technical validation, core infrastructure | Internal + 50 testers |
| **Beta (MVP)** | M4-M6 | Product-Market Fit validation | 1,000 beta users |
| **V1.0 (Launch)** | M6-M9 | Public launch, monetization | 10,000 users |
| **V1.5 (Growth)** | M9-M12 | Feature expansion, retention | 50,000 users |
| **V2.0 (Scale)** | M12-M18 | Mobile app, B2B, marketplace | 200,000 users |
| **V3.0 (International)** | M18-M24 | Multi-region, enterprise | 500,000 users |

---

## Phase 1: Alpha (Month 1-3)

### Goal
Создание технической основы и валидация core AI-архитектуры.

### Release: Alpha 0.1 (Month 1)

**Theme:** Core Infrastructure

| ID | Feature | Requirements | Dependencies | Owner |
|----|---------|--------------|--------------|-------|
| A1.1 | User Auth (Telegram OAuth) | FR-007 | Telegram Bot API | Backend |
| A1.2 | PostgreSQL Schema (users, profiles, metrics) | — | — | Backend |
| A1.3 | Basic Telegram Bot (commands, menu) | FR-007 | A1.1 | Backend |
| A1.4 | Qdrant vector DB setup | — | — | AI Team |
| A1.5 | LangGraph orchestration skeleton | — | — | AI Team |
| A1.6 | GigaChat API integration | — | GigaChat API | AI Team |
| A1.7 | CI/CD pipeline (GitLab) | — | — | DevOps |
| A1.8 | Logging & monitoring (Grafana) | — | — | DevOps |

**Success Criteria:**
- [ ] User can login via Telegram
- [ ] Bot responds to basic commands
- [ ] GigaChat generates responses
- [ ] CI/CD runs on every commit

### Release: Alpha 0.2 (Month 2)

**Theme:** First Integrations & Agents

| ID | Feature | Requirements | Dependencies | Owner |
|----|---------|--------------|--------------|-------|
| A2.1 | Oura Ring integration | FR-002 | Oura API | Backend |
| A2.2 | Apple HealthKit integration | FR-003 | HealthKit API | Backend |
| A2.3 | PDF Parser for lab results | FR-004 | — | AI Team |
| A2.4 | **Coach Agent** (prompts, tools) | FR-013, FR-014 | A1.6 | AI Team |
| A2.5 | **Sleep Agent** (prompts, tools) | FR-012 | A2.1 | AI Team |
| A2.6 | **Lab Interpreter Agent** (prompts) | FR-011 | A2.3 | AI Team |
| A2.7 | Basic dashboard (Health Score stub) | FR-001 | A2.1, A2.2 | Frontend |
| A2.8 | Data ingestion pipeline | — | A2.1, A2.2 | Backend |

**Success Criteria:**
- [ ] Oura data syncs automatically
- [ ] PDF lab results parsed successfully (>80% accuracy)
- [ ] Coach Agent gives personalized greeting
- [ ] Sleep Agent analyzes sleep data

### Release: Alpha 0.3 (Month 3)

**Theme:** Custom RAG & Safety Module

| ID | Feature | Requirements | Dependencies | Owner |
|----|---------|--------------|--------------|-------|
| A3.1 | **Custom RAG Pipeline** (LlamaIndex) | FR-005 | A1.4 | AI Team |
| A3.2 | Protocol upload (PDF/MD) | FR-005 | A3.1 | Backend |
| A3.3 | **Safety Agent** (hard blocks) | FR-008 | DrugBank API | AI Team |
| A3.4 | **Integration Agent** (data synthesis) | FR-001 | A2.8 | AI Team |
| A3.5 | **Orchestrator Agent** (routing) | FR-027 | All agents | AI Team |
| A3.6 | Health Score calculation v1 | FR-001 | A3.4 | AI Team |
| A3.7 | Weekly report generation | FR-010 | A3.4 | AI Team |
| A3.8 | Internal testing framework | — | — | QA |

**Success Criteria:**
- [ ] User can upload protocol PDF and ask questions about it
- [ ] Safety Agent blocks dangerous recommendations
- [ ] Health Score updates based on data
- [ ] Orchestrator routes questions to correct agents

### Alpha Phase Summary

| Metric | Target |
|--------|--------|
| Internal testers | 50 |
| Agents completed | 6 (Coach, Sleep, Lab, Safety, Integration, Orchestrator) |
| Integrations | 3 (Oura, HealthKit, PDF parser) |
| System uptime | >95% |
| Critical bugs | 0 |

---

## Phase 2: Beta / MVP (Month 4-6)

### Goal
Запуск для beta-пользователей, валидация Product-Market Fit.

### Release: Beta 0.5 (Month 4)

**Theme:** All P0 Agents + Genomics

| ID | Feature | Requirements | Dependencies | Owner |
|----|---------|--------------|--------------|-------|
| B1.1 | **Nutrition Agent** | FR-006 | MyFitnessPal API | AI Team |
| B1.2 | **Genomics Agent** | FR-009 | 23andMe parser | AI Team |
| B1.3 | **Longevity Agent** | FR-015, FR-016 | TruDiagnostic parser | AI Team |
| B1.4 | **Research Agent** (PubMed) | FR-017 | PubMed API | AI Team |
| B1.5 | **Data Scientist Agent** | FR-001 | A3.4 | AI Team |
| B1.6 | **Custom Protocol Agent** | FR-005 | A3.1 | AI Team |
| B1.7 | 23andMe raw data import | FR-009 | — | Backend |
| B1.8 | TruDiagnostic PDF parser | FR-015 | — | Backend |
| B1.9 | Personalized recommendations v1 | FR-006 | All agents | AI Team |
| B1.10 | Biomarker tracking dashboard | FR-016 | B1.3 | Frontend |

**Success Criteria:**
- [ ] 12 P0 agents operational
- [ ] User can import 23andMe data
- [ ] Longevity Agent calculates bio-age estimate
- [ ] Research Agent returns PubMed citations

### Release: Beta 0.7 (Month 5)

**Theme:** Onboarding & User Experience

| ID | Feature | Requirements | Dependencies | Owner |
|----|---------|--------------|--------------|-------|
| B2.1 | Onboarding flow (goals, devices) | — | — | Frontend |
| B2.2 | Telegram Mini App v1 | FR-026 | Telegram WebApp API | Frontend |
| B2.3 | Data connection wizard | — | All integrations | Frontend |
| B2.4 | Notification preferences | FR-014 | A1.3 | Backend |
| B2.5 | "What to do today" feature | FR-013 | Coach Agent | AI Team |
| B2.6 | INVITRO PDF parser | FR-004 | — | Backend |
| B2.7 | Multi-agent conversation UX | FR-027 | A3.5 | Frontend |
| B2.8 | Evidence levels display | — | B1.4 | Frontend |
| B2.9 | Source attribution UI | — | All agents | Frontend |
| B2.10 | Legal disclaimers integration | FR-008 | Safety Agent | Legal |

**Success Criteria:**
- [ ] Onboarding completion rate >60%
- [ ] Time to first insight <10 minutes
- [ ] Telegram Mini App loads in <2s
- [ ] All recommendations show sources

### Release: MVP 1.0 (Month 6)

**Theme:** Beta Launch & Payments

| ID | Feature | Requirements | Dependencies | Owner |
|----|---------|--------------|--------------|-------|
| M1.1 | Subscription tiers (Free/Optimize/Biohacker Pro) | — | — | Backend |
| M1.2 | Payment integration (YooKassa) | — | YooKassa API | Backend |
| M1.3 | Usage limits by tier | — | M1.1 | Backend |
| M1.4 | **Mental Health Agent** | FR-021 | PHQ-9/GAD-7 | AI Team |
| M1.5 | **Cognitive Agent** | — | — | AI Team |
| M1.6 | **Fitness Agent** | — | Strava API | AI Team |
| M1.7 | Beta user feedback system | — | — | Product |
| M1.8 | Referral system v1 | — | — | Growth |
| M1.9 | Performance optimization | — | — | Backend |
| M1.10 | Security audit | — | — | Security |

**Success Criteria:**
- [ ] 1,000 beta users registered
- [ ] 15 agents operational
- [ ] Free → Paid conversion >3%
- [ ] NPS >30
- [ ] No critical security issues

### MVP Phase Summary

| Metric | Target | Measurement |
|--------|--------|-------------|
| Total Users | 1,000 | Registration count |
| Activation (≥2 data sources, D7) | 30% | Analytics |
| Weekly AI queries per user | 3 | Analytics |
| M1 Retention | 40% | Cohort analysis |
| Paying Users | 50 | Subscription count |
| NPS | 30 | Survey |

### MVP Feature Matrix

| Feature | Free | Optimize (990₽) | Biohacker Pro (2,490₽) |
|---------|------|-----------------|------------------------|
| Health Score Dashboard | ✅ | ✅ | ✅ |
| Coach Agent | ✅ | ✅ | ✅ |
| Data Sources | 1 | 5 | Unlimited |
| AI Queries/day | 10 | 100 | Unlimited |
| All 15 Agents | ❌ | 5 agents | All agents |
| Custom RAG | ❌ | 1 GB | 5 GB |
| N=1 Experiments | ❌ | ❌ | ✅ |
| Weekly Reports | Basic | Full | Full + Insights |
| Source Attribution | ❌ | ✅ | ✅ |

---

## Phase 3: V1.0 Launch & Growth (Month 6-12)

### Goal
Публичный запуск, рост до 50,000 пользователей, оптимизация конверсии.

### Release: V1.1 (Month 7-8)

**Theme:** Retention & Engagement

| ID | Feature | Requirements | Dependencies | Owner |
|----|---------|--------------|--------------|-------|
| V1.1.1 | Telegram WebApp full version | FR-026 | — | Frontend |
| V1.1.2 | Gamification (streaks, achievements) | — | — | Product |
| V1.1.3 | Personalized notifications | FR-014 | ML model | AI Team |
| V1.1.4 | Dexcom CGM integration | FR-025 | Dexcom API | Backend |
| V1.1.5 | Libre CGM integration | FR-025 | LibreView API | Backend |
| V1.1.6 | MyFitnessPal deep integration | — | MFP API | Backend |
| V1.1.7 | Daily insights push | — | V1.1.3 | AI Team |
| V1.1.8 | Social proof (testimonials) | — | — | Marketing |
| V1.1.9 | A/B testing framework | — | — | Growth |
| V1.1.10 | Analytics dashboard (Amplitude) | — | Amplitude | Analytics |

**Success Criteria:**
- [ ] DAU/MAU ratio >25%
- [ ] Push notification CTR >15%
- [ ] 5,000 total users

### Release: V1.2 (Month 9-10)

**Theme:** N=1 Experiments & Advanced Analytics

| ID | Feature | Requirements | Dependencies | Owner |
|----|---------|--------------|--------------|-------|
| V1.2.1 | **Biohacker Lab** (N=1 experiments) | FR-020 | — | AI Team |
| V1.2.2 | Experiment design wizard | FR-020 | V1.2.1 | Frontend |
| V1.2.3 | Bayesian A/B analysis | FR-020 | V1.2.1 | AI Team |
| V1.2.4 | Causal impact analysis | FR-020 | V1.2.1 | AI Team |
| V1.2.5 | Biomarker trends visualization | FR-022 | — | Frontend |
| V1.2.6 | Bio-age tracking over time | FR-022 | V1.2.5 | AI Team |
| V1.2.7 | Protocol effectiveness scoring | — | V1.2.1 | AI Team |
| V1.2.8 | Correlation discovery | — | V1.2.1 | AI Team |
| V1.2.9 | Advanced filters (date, source) | — | — | Frontend |
| V1.2.10 | Data export (CSV, JSON) | — | — | Backend |

**Success Criteria:**
- [ ] 500 N=1 experiments started
- [ ] 40% experiment completion rate
- [ ] 10,000 total users

### Release: V1.5 (Month 11-12)

**Theme:** Monetization Optimization & Scale

| ID | Feature | Requirements | Dependencies | Owner |
|----|---------|--------------|--------------|-------|
| V1.5.1 | Longevity Elite tier (9,990₽) | — | — | Product |
| V1.5.2 | Quarterly health reports | FR-024 | — | AI Team |
| V1.5.3 | Expert consultation booking | — | — | Product |
| V1.5.4 | Supplement marketplace v1 | — | Partner APIs | Backend |
| V1.5.5 | Lab test ordering (INVITRO) | — | INVITRO Partner | Backend |
| V1.5.6 | Referral program 2.0 | — | — | Growth |
| V1.5.7 | Annual subscription discount | — | — | Product |
| V1.5.8 | Churn prediction model | — | ML | AI Team |
| V1.5.9 | Win-back campaigns | — | V1.5.8 | Growth |
| V1.5.10 | API for developers (beta) | — | — | Backend |

**Success Criteria:**
- [ ] 50,000 total users
- [ ] 5,000 paying users
- [ ] MRR: 10M ₽
- [ ] Free → Paid conversion: 5%
- [ ] NPS: 45

### V1.x Phase Summary

| Metric | M9 | M12 |
|--------|----|----|
| Total Users | 10,000 | 50,000 |
| Paying Users | 1,000 | 5,000 |
| MRR | 2M ₽ | 10M ₽ |
| Conversion Rate | 4% | 5% |
| M1 Retention | 45% | 55% |
| NPS | 40 | 45 |
| AI Queries/user/week | 4 | 5 |

---

## Phase 4: V2.0 Scale (Month 12-18)

### Goal
Запуск мобильного приложения, B2B сегмент, масштабирование до 200,000 пользователей.

### Release: V2.0 (Month 13-15)

**Theme:** Mobile App Launch

| ID | Feature | Requirements | Dependencies | Owner |
|----|---------|--------------|--------------|-------|
| V2.0.1 | **Flutter Mobile App** (iOS) | FR-030 | — | Mobile |
| V2.0.2 | **Flutter Mobile App** (Android) | FR-030 | — | Mobile |
| V2.0.3 | Background sync (wearables) | — | V2.0.1, V2.0.2 | Mobile |
| V2.0.4 | Push notifications (native) | — | V2.0.1, V2.0.2 | Mobile |
| V2.0.5 | Offline mode (cached data) | — | V2.0.1, V2.0.2 | Mobile |
| V2.0.6 | Biometric auth (Face ID, Touch ID) | — | V2.0.1, V2.0.2 | Mobile |
| V2.0.7 | Apple Watch companion app | — | V2.0.1 | Mobile |
| V2.0.8 | Widget support (iOS, Android) | — | V2.0.1, V2.0.2 | Mobile |
| V2.0.9 | Voice interface (Siri shortcuts) | FR-029 | V2.0.1 | Mobile |
| V2.0.10 | Cross-platform sync | — | — | Backend |

**Success Criteria:**
- [ ] App Store rating >4.5
- [ ] Play Store rating >4.5
- [ ] 50,000 mobile app installs
- [ ] Mobile DAU > Telegram DAU

### Release: V2.1 (Month 15-18)

**Theme:** B2B & Enterprise

| ID | Feature | Requirements | Dependencies | Owner |
|----|---------|--------------|--------------|-------|
| V2.1.1 | **Enterprise dashboard** | FR-032 | — | Frontend |
| V2.1.2 | Admin panel (user management) | FR-032 | V2.1.1 | Backend |
| V2.1.3 | Team analytics (aggregated) | FR-032 | V2.1.1 | AI Team |
| V2.1.4 | SSO integration (SAML) | — | — | Backend |
| V2.1.5 | Slack/Teams integration | — | — | Backend |
| V2.1.6 | Corporate wellness challenges | — | — | Product |
| V2.1.7 | Custom branding (white-label) | — | — | Frontend |
| V2.1.8 | SLA & dedicated support | — | — | SRE |
| V2.1.9 | Compliance reports (SOC2 prep) | — | — | Security |
| V2.1.10 | B2B sales pipeline (CRM) | — | — | Sales |

**Success Criteria:**
- [ ] 10 enterprise clients
- [ ] 5,000 B2B users
- [ ] B2B MRR: 3M ₽

### V2.x Phase Summary

| Metric | M15 | M18 |
|--------|-----|-----|
| Total Users | 100,000 | 200,000 |
| Mobile App Users | 30,000 | 80,000 |
| Paying Users | 10,000 | 20,000 |
| B2B Clients | 3 | 10 |
| MRR | 20M ₽ | 35M ₽ |

---

## Phase 5: V3.0 International (Month 18-24)

### Goal
Подготовка к международной экспансии, marketplace, 500,000 пользователей.

### Release: V3.0 (Month 19-21)

**Theme:** Digital Twin & Advanced AI

| ID | Feature | Requirements | Dependencies | Owner |
|----|---------|--------------|--------------|-------|
| V3.0.1 | **Digital Twin** v1 | FR-028 | ML models | AI Team |
| V3.0.2 | 5-year health projection | FR-028 | V3.0.1 | AI Team |
| V3.0.3 | Scenario modeling ("what if") | FR-028 | V3.0.1 | AI Team |
| V3.0.4 | Virtual protocol testing | FR-028 | V3.0.1 | AI Team |
| V3.0.5 | Multi-modal AI (voice + text) | FR-029 | Whisper + TTS | AI Team |
| V3.0.6 | Алиса integration | FR-029 | Yandex Dialogs | Backend |
| V3.0.7 | GPT-4o integration (intl) | — | OpenAI API | AI Team |
| V3.0.8 | Claude integration (intl) | — | Anthropic API | AI Team |
| V3.0.9 | Advanced safety (medical review) | — | — | AI Team |
| V3.0.10 | Personalized health timeline | — | V3.0.1 | Frontend |

**Success Criteria:**
- [ ] Digital Twin accuracy >75%
- [ ] Voice interface usage >10%
- [ ] 300,000 total users

### Release: V3.1 (Month 21-24)

**Theme:** Marketplace & International Prep

| ID | Feature | Requirements | Dependencies | Owner |
|----|---------|--------------|--------------|-------|
| V3.1.1 | **Protocol Marketplace** | FR-031 | — | Product |
| V3.1.2 | Creator tools (protocol builder) | FR-031 | V3.1.1 | Frontend |
| V3.1.3 | Revenue sharing for creators | FR-031 | V3.1.1 | Backend |
| V3.1.4 | Protocol ratings & reviews | FR-031 | V3.1.1 | Frontend |
| V3.1.5 | English localization | — | — | Content |
| V3.1.6 | GDPR compliance | — | — | Legal |
| V3.1.7 | Multi-region infrastructure | — | AWS/GCP | DevOps |
| V3.1.8 | International payment (Stripe) | — | Stripe API | Backend |
| V3.1.9 | US lab integrations (Quest, Labcorp) | — | — | Backend |
| V3.1.10 | UK wearables (NHS integration) | — | — | Backend |

**Success Criteria:**
- [ ] 500,000 total users
- [ ] 40,000 paying users
- [ ] MRR: 60M ₽
- [ ] Marketplace GMV: 5M ₽/мес
- [ ] Ready for US beta launch

### V3.x Phase Summary

| Metric | M21 | M24 |
|--------|-----|-----|
| Total Users | 300,000 | 500,000 |
| Paying Users | 30,000 | 40,000 |
| MRR | 45M ₽ | 60M ₽ |
| Marketplace Creators | 50 | 200 |
| Markets | RU | RU + EN (beta) |

---

## Dependency Map

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              INFRASTRUCTURE                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐    │
│  │ PostgreSQL  │   │   Qdrant    │   │  GigaChat   │   │   Yandex    │    │
│  │   (Users)   │   │  (Vectors)  │   │   (LLM)     │   │   Cloud     │    │
│  └──────┬──────┘   └──────┬──────┘   └──────┬──────┘   └──────┬──────┘    │
│         │                 │                 │                 │           │
│         └────────────┬────┴────────────────┬┘                 │           │
│                      │                      │                  │           │
│                      ▼                      ▼                  │           │
│              ┌───────────────┐      ┌───────────────┐         │           │
│              │   RAG Layer   │      │  Agent Layer  │         │           │
│              │  (LlamaIndex) │◄────►│  (LangGraph)  │         │           │
│              └───────┬───────┘      └───────┬───────┘         │           │
│                      │                      │                  │           │
└──────────────────────┼──────────────────────┼──────────────────┼───────────┘
                       │                      │                  │
                       ▼                      ▼                  │
┌─────────────────────────────────────────────────────────────────────────────┐
│                              AI AGENTS (15)                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────┐      │
│   │                      ORCHESTRATOR AGENT                          │      │
│   │              (Routes queries to specialized agents)              │      │
│   └────────────────────────────┬────────────────────────────────────┘      │
│                                │                                            │
│   ┌────────────────────────────┼────────────────────────────────────┐      │
│   │                            │                                     │      │
│   ▼                            ▼                                     ▼      │
│ ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐           │
│ │  Coach  │  │  Sleep  │  │Nutrition│  │  Lab    │  │Genomics │  ...      │
│ │  Agent  │  │  Agent  │  │  Agent  │  │  Agent  │  │  Agent  │           │
│ └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘           │
│      │            │            │            │            │                  │
│      └────────────┴────────────┴─────┬──────┴────────────┘                  │
│                                      │                                      │
│                                      ▼                                      │
│                            ┌─────────────────┐                              │
│                            │  SAFETY AGENT   │                              │
│                            │ (Final approval)│                              │
│                            └─────────────────┘                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                            INTEGRATIONS                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌───────────────┐    ┌───────────────┐    ┌───────────────┐               │
│  │   Wearables   │    │     Labs      │    │   Genomics    │               │
│  ├───────────────┤    ├───────────────┤    ├───────────────┤               │
│  │ • Oura        │    │ • INVITRO     │    │ • 23andMe     │               │
│  │ • HealthKit   │    │ • PDF Parser  │    │ • TruDiagnostic│              │
│  │ • Dexcom (P1) │    │ • Helix (P2)  │    │ • Atlas (P2)  │               │
│  │ • Strava (P1) │    │               │    │               │               │
│  └───────────────┘    └───────────────┘    └───────────────┘               │
│                                                                             │
│  Dependencies: Oura API, Apple HealthKit, INVITRO partner, 23andMe format  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                            USER INTERFACES                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  M1-M6 (MVP)           M6-M12 (Growth)         M12-M24 (Scale)             │
│  ┌──────────────┐      ┌──────────────┐        ┌──────────────┐            │
│  │ Telegram Bot │  →   │ Telegram     │   →    │ Flutter App  │            │
│  │              │      │ WebApp       │        │ (iOS/Android)│            │
│  └──────────────┘      └──────────────┘        └──────────────┘            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Feature Dependencies (Critical Path)

### MVP Critical Path

```
Authentication ──► Data Ingestion ──► Integration Agent ──► Health Score
      │                  │                    │                  │
      │                  │                    │                  │
      ▼                  ▼                    ▼                  ▼
Telegram Bot      Oura/HealthKit        All Agents         Dashboard
      │                  │                    │                  │
      │                  │                    │                  │
      └──────────────────┴──────────┬─────────┴──────────────────┘
                                    │
                                    ▼
                              MVP Launch
```

### Agent Dependencies

| Agent | Depends On | Provides To |
|-------|------------|-------------|
| Orchestrator | All agents registered | User queries |
| Integration | All data sources | Data Scientist, Coach |
| Coach | Integration Agent, User profile | End user |
| Sleep | Oura/HealthKit data | Coach, Integration |
| Lab Interpreter | PDF Parser / INVITRO API | Longevity, Safety |
| Genomics | 23andMe parser | Nutrition, Longevity |
| Nutrition | Genomics (SNPs), MFP data | Coach |
| Longevity | Lab Interpreter, Genomics | Coach |
| Safety | DrugBank API, All agents | Final output |
| Research | PubMed API | All agents (citations) |
| Custom Protocol | RAG Pipeline | User queries |
| Data Scientist | Integration Agent | Insights, Reports |
| Mental Health | User surveys | Coach, Safety |
| Cognitive | User data | Coach |
| Fitness | Strava data | Coach |

---

## Risk-Adjusted Timeline

### Optimistic Scenario

| Phase | Timeline | Key Risks Avoided |
|-------|----------|-------------------|
| Alpha | M1-M2 | Fast GigaChat integration |
| MVP | M3-M5 | INVITRO API available |
| V1.0 | M5-M8 | High conversion rate |
| V2.0 | M10-M14 | Fast App Store approval |

### Realistic Scenario (Current Plan)

| Phase | Timeline | Buffer |
|-------|----------|--------|
| Alpha | M1-M3 | +1 month |
| MVP | M4-M6 | +1 month |
| V1.0 | M7-M12 | +2 months |
| V2.0 | M13-M18 | +2 months |

### Pessimistic Scenario

| Phase | Timeline | Key Risks Materialized |
|-------|----------|------------------------|
| Alpha | M1-M4 | GigaChat quality issues |
| MVP | M5-M8 | INVITRO API unavailable |
| V1.0 | M9-M15 | Low conversion, pivot needed |
| V2.0 | M16-M24 | App Store delays |

---

## Success Metrics by Release

| Release | Users | Revenue | Retention | Key Milestone |
|---------|-------|---------|-----------|---------------|
| Alpha 0.3 | 50 | — | — | Technical validation |
| MVP 1.0 | 1,000 | — | 40% M1 | Beta launch |
| V1.1 | 5,000 | 500K ₽ | 45% M1 | Public launch |
| V1.2 | 10,000 | 2M ₽ | 50% M1 | N=1 experiments |
| V1.5 | 50,000 | 10M ₽ | 55% M1 | Full monetization |
| V2.0 | 100,000 | 20M ₽ | 55% M1 | Mobile app launch |
| V2.1 | 200,000 | 35M ₽ | 55% M1 | B2B launch |
| V3.0 | 300,000 | 45M ₽ | 55% M1 | Digital Twin |
| V3.1 | 500,000 | 60M ₽ | 55% M1 | Marketplace |

---

## Appendix A: Feature to User Story Mapping

| Feature | User Stories | Persona |
|---------|--------------|---------|
| Health Score Dashboard | US-001 | Алексей |
| Custom RAG | US-002 | Алексей |
| Genomics Integration | US-004, US-018 | Алексей, Дмитрий |
| N=1 Experiments | US-005 | Алексей |
| Telegram Interface | US-006, US-010 | All |
| Weekly Reports | US-007, US-014 | Алексей, Марина |
| Simple Recommendations | US-009 | Марина |
| Lab Interpretation | US-011 | Марина |
| Sleep Recommendations | US-012 | Марина |
| Stress Management | US-013 | Марина |
| Epigenetics | US-015 | Дмитрий |
| Biomarker Tracking | US-016 | Дмитрий |
| Research Citations | US-017 | Дмитрий |
| Supplement Interactions | US-020 | Дмитрий |

---

## Appendix B: Team Allocation by Phase

### Alpha (5-7 people)

| Role | Count | Focus |
|------|-------|-------|
| Backend | 2 | Infrastructure, integrations |
| AI/ML | 2 | Agents, RAG |
| Frontend | 1 | Telegram Bot, basic UI |
| DevOps | 0.5 | CI/CD, monitoring |
| Product | 0.5 | Specs, testing |

### MVP (8-10 people)

| Role | Count | Focus |
|------|-------|-------|
| Backend | 2 | APIs, payments |
| AI/ML | 3 | All agents, optimization |
| Frontend | 2 | Telegram WebApp |
| DevOps | 1 | Scale, security |
| Product | 1 | Analytics, roadmap |
| QA | 1 | Testing, automation |

### V1.x (12-15 people)

| Role | Count | Focus |
|------|-------|-------|
| Backend | 3 | Scale, new integrations |
| AI/ML | 3 | N=1, advanced analytics |
| Frontend | 2 | Full WebApp |
| Mobile | 2 | Flutter preparation |
| DevOps/SRE | 2 | Reliability, scale |
| Product | 1 | Growth, optimization |
| QA | 1 | Automation |
| Growth | 1 | Marketing, referrals |

### V2.x (20-25 people)

| Role | Count | Focus |
|------|-------|-------|
| Backend | 4 | B2B, marketplace |
| AI/ML | 4 | Digital Twin, advanced |
| Frontend | 2 | Web, admin |
| Mobile | 4 | iOS, Android, Watch |
| DevOps/SRE | 2 | Multi-region |
| Product | 2 | B2C + B2B |
| QA | 2 | Mobile testing |
| Growth/Sales | 3 | B2B sales, marketing |
| Support | 2 | Customer success |

---

## Appendix C: Key Decisions Log

| Date | Decision | Rationale | Impact |
|------|----------|-----------|--------|
| 2026-01-26 | Telegram-first (not mobile) | Faster time-to-market, lower risk | MVP in 6 months vs 12 |
| 2026-01-26 | GigaChat as primary LLM | 152-ФЗ compliance, RU market | Potential quality trade-off |
| 2026-01-26 | Max modules, min depth for MVP | Validate all directions | Risk of shallow features |
| 2026-01-26 | Self-hosted Kubernetes | Data control, 152-ФЗ | Higher ops complexity |
| TBD | Mobile platform priority | iOS-first vs Android-first | Depends on user data |
| TBD | B2B pricing model | Per-seat vs per-company | Depends on sales feedback |

---

*Документ создан: 2026-01-26*  
*Product Agent v1.0*
