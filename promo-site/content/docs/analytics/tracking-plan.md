# Tracking Plan: BIOMAX AI v2.0

**Version:** 1.0  
**Last Updated:** 2026-01-26  
**Author:** Analytics Agent  
**Status:** Complete  
**Related Document:** [Metrics Framework](./metrics-framework.md)

---

## Executive Summary

Данный Tracking Plan определяет систему сбора событий (events) для измерения всех метрик BIOMAX AI v2.0. План покрывает:
- **78 событий** (events) в 8 категориях
- **15 user properties** для сегментации
- **9 user flows** с полным покрытием событиями
- **Server-side + Client-side** tracking

**Связь с Metrics Framework:**
- Каждое событие привязано к метрике из AARRR-воронки
- North Star Metric (MAU-AI) измеряется через комбинацию событий
- Feature adoption metrics полностью покрыты

---

## Naming Convention

### Events
**Format:** `[object]_[action]` или `[category]_[object]_[action]`

**Rules:**
- Lowercase
- Snake_case
- Глагол в прошедшем времени: `_started`, `_completed`, `_viewed`, `_clicked`
- Избегать сокращений кроме общепринятых (id, url, api)

**Examples:**
```
✅ signup_completed
✅ agent_query_submitted
✅ integration_connected
✅ experiment_started
✅ subscription_upgraded

❌ SignUpCompleted (camelCase)
❌ signup (нет действия)
❌ agent-query-submitted (дефисы)
```

### Properties
**Format:** `[context]_[descriptor]`

**Rules:**
- Lowercase
- Snake_case
- Типизированные суффиксы: `_id`, `_name`, `_count`, `_at`, `_ms`, `_percent`

**Examples:**
```
✅ user_id
✅ agent_name
✅ response_time_ms
✅ created_at
✅ completion_percent

❌ userId (camelCase)
❌ agentName (camelCase)
❌ time (неспецифично)
```

---

## User Properties (Постоянные атрибуты пользователя)

| Property | Type | Description | Example | Source |
|----------|------|-------------|---------|--------|
| `user_id` | string | Unique user identifier (UUID) | "usr_a1b2c3d4e5f6" | Backend |
| `telegram_id` | string | Telegram user ID (nullable) | "123456789" | Telegram OAuth |
| `email_hash` | string | SHA-256 hash of email | "a1b2c3..." | Registration |
| `account_type` | enum | Subscription tier | "free", "optimize", "biohacker_pro", "longevity_elite", "enterprise" | Backend |
| `persona_type` | enum | User persona (derived) | "advanced_biohacker", "health_optimizer", "longevity_seeker" | ML Model |
| `signup_date` | datetime | Account creation date | "2026-01-26T10:30:00Z" | Backend |
| `signup_source` | string | Acquisition channel | "telegram_organic", "vk_ads", "referral" | UTM |
| `referrer_user_id` | string | Who referred this user (nullable) | "usr_x1y2z3" | Referral |
| `data_sources_count` | number | Connected integrations | 3 | Backend |
| `data_sources_list` | array | List of connected sources | ["oura", "apple_watch", "invitro"] | Backend |
| `genomics_uploaded` | boolean | Has uploaded genetic data | true | Backend |
| `onboarding_completed` | boolean | Finished onboarding | true | Backend |
| `activation_date` | datetime | Date of activation (nullable) | "2026-01-27T15:00:00Z" | Backend |
| `tenure_days` | number | Days since signup | 45 | Computed |
| `total_ai_queries` | number | Lifetime AI queries count | 127 | Backend |

---

## Event Categories

### 1. Core User Journey Events

События основного пользовательского пути: регистрация, онбординг, активация.

---

#### `page_viewed`
**Trigger:** User views any screen/page  
**Type:** Client-side  
**Funnel Position:** All

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `page_name` | string | Yes | Name of page/screen | "dashboard", "onboarding_step_2" |
| `page_url` | string | No | Full URL (WebApp only) | "https://app.biomax.ai/dashboard" |
| `referrer` | string | No | Previous page | "landing", "telegram" |
| `session_id` | string | Yes | Current session ID | "sess_abc123" |
| `platform` | enum | Yes | Access platform | "telegram_webapp", "web", "mobile_ios", "mobile_android" |

---

#### `signup_started`
**Trigger:** User initiates registration  
**Type:** Client-side  
**Funnel Position:** Acquisition  
**Related Metric:** Signup Conversion

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `signup_method` | enum | Yes | Registration method | "telegram", "email", "phone" |
| `utm_source` | string | No | UTM source | "vk", "google", "referral" |
| `utm_medium` | string | No | UTM medium | "cpc", "organic", "social" |
| `utm_campaign` | string | No | UTM campaign | "winter_launch_2026" |
| `referral_code` | string | No | Referral code if used | "REF_ABC123" |
| `landing_page` | string | No | Entry landing page | "home", "longevity", "biohacker" |

---

#### `signup_completed`
**Trigger:** User completes registration  
**Type:** Server-side  
**Funnel Position:** Acquisition  
**Related Metric:** New Signups

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | New user ID | "usr_abc123" |
| `signup_method` | enum | Yes | Method used | "telegram", "email", "phone" |
| `signup_duration_sec` | number | Yes | Time to complete signup | 45 |
| `consent_152fz` | boolean | Yes | 152-FZ consent given | true |
| `marketing_consent` | boolean | Yes | Marketing consent | true |
| `utm_source` | string | No | UTM source | "vk" |
| `utm_medium` | string | No | UTM medium | "cpc" |
| `utm_campaign` | string | No | UTM campaign | "winter_launch_2026" |
| `referral_code` | string | No | Referral code if used | "REF_ABC123" |

---

#### `onboarding_started`
**Trigger:** User begins onboarding flow  
**Type:** Client-side  
**Funnel Position:** Activation

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `session_id` | string | Yes | Session ID | "sess_xyz789" |

---

#### `onboarding_step_completed`
**Trigger:** User completes an onboarding step  
**Type:** Client-side  
**Funnel Position:** Activation

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `step_number` | number | Yes | Step number (1-5) | 2 |
| `step_name` | string | Yes | Step name | "basic_profile", "connect_device", "set_goal" |
| `step_duration_sec` | number | Yes | Time spent on step | 30 |
| `data_entered` | object | No | Key data from step | {"goal": "sleep_optimization"} |

---

#### `onboarding_completed`
**Trigger:** User finishes all onboarding steps  
**Type:** Server-side  
**Funnel Position:** Activation  
**Related Metric:** Onboarding Completion Rate

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `total_duration_sec` | number | Yes | Total onboarding time | 180 |
| `steps_completed` | number | Yes | Steps completed | 5 |
| `steps_skipped` | number | Yes | Steps skipped | 1 |
| `goal_selected` | string | Yes | Primary goal | "energy", "sleep", "longevity" |
| `devices_mentioned` | array | No | Devices user has | ["apple_watch", "oura"] |

---

#### `onboarding_abandoned`
**Trigger:** User exits onboarding without completing  
**Type:** Client-side  
**Funnel Position:** Activation

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `last_step_number` | number | Yes | Last completed step | 2 |
| `last_step_name` | string | Yes | Last step name | "connect_device" |
| `time_spent_sec` | number | Yes | Total time in onboarding | 120 |
| `exit_reason` | string | No | Reason if known | "clicked_back", "timeout", "app_closed" |

---

#### `user_activated`
**Trigger:** User reaches Aha Moment (≥2 sources + first AI recommendation)  
**Type:** Server-side  
**Funnel Position:** Activation  
**Related Metric:** Activation Rate

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `days_since_signup` | number | Yes | Days to activation | 2 |
| `data_sources_count` | number | Yes | Sources at activation | 2 |
| `data_sources_list` | array | Yes | Sources connected | ["oura", "invitro_pdf"] |
| `first_recommendation_agent` | string | Yes | Agent that gave first recommendation | "sleep_agent" |
| `activation_path` | string | Yes | How user activated | "onboarding", "organic_exploration" |

---

#### `session_started`
**Trigger:** User opens app/bot  
**Type:** Client-side  
**Funnel Position:** Retention

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `session_id` | string | Yes | New session ID | "sess_xyz789" |
| `platform` | enum | Yes | Platform | "telegram_webapp", "web", "mobile_ios" |
| `previous_session_hours_ago` | number | No | Hours since last session | 18 |
| `entry_point` | string | Yes | Where session started | "telegram_message", "push_notification", "direct_open" |

---

#### `session_ended`
**Trigger:** User closes app/session timeout  
**Type:** Client-side  
**Funnel Position:** Retention

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `session_id` | string | Yes | Session ID | "sess_xyz789" |
| `session_duration_sec` | number | Yes | Duration in seconds | 420 |
| `pages_viewed` | number | Yes | Pages viewed count | 5 |
| `actions_taken` | number | Yes | Actions performed | 8 |
| `ai_queries_made` | number | No | AI queries in session | 2 |

---

### 2. Data Integration Events

События подключения и синхронизации источников данных.

---

#### `integration_connect_started`
**Trigger:** User initiates device/service connection  
**Type:** Client-side  
**Funnel Position:** Activation

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `integration_type` | enum | Yes | Type of integration | "wearable", "lab", "genomics", "nutrition", "meditation" |
| `integration_name` | string | Yes | Specific integration | "oura", "apple_watch", "invitro", "23andme" |
| `context` | string | Yes | Where initiated | "onboarding", "settings", "agent_suggestion" |

---

#### `integration_connected`
**Trigger:** Integration successfully connected  
**Type:** Server-side  
**Funnel Position:** Activation  
**Related Metric:** Data Sources Connected

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `integration_type` | enum | Yes | Type | "wearable", "lab", "genomics" |
| `integration_name` | string | Yes | Name | "oura", "apple_watch" |
| `connection_method` | enum | Yes | How connected | "oauth", "pdf_upload", "manual_entry", "api_key" |
| `connection_duration_sec` | number | Yes | Time to connect | 15 |
| `data_points_imported` | number | No | Initial data imported | 120 |
| `data_range_days` | number | No | Days of historical data | 30 |
| `total_integrations_now` | number | Yes | Total integrations after | 2 |
| `is_first_integration` | boolean | Yes | First integration ever | true |
| `is_second_integration` | boolean | Yes | Second (activation trigger) | false |

---

#### `integration_disconnected`
**Trigger:** Integration disconnected/removed  
**Type:** Server-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `integration_name` | string | Yes | Name | "oura" |
| `disconnect_reason` | enum | Yes | Reason | "user_removed", "oauth_expired", "api_error" |
| `days_connected` | number | Yes | Days was connected | 45 |

---

#### `integration_sync_completed`
**Trigger:** Data synced from integration  
**Type:** Server-side  
**Related Metric:** Data Freshness

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `integration_name` | string | Yes | Name | "oura" |
| `sync_type` | enum | Yes | Type | "scheduled", "manual", "webhook" |
| `data_points_synced` | number | Yes | Data points synced | 24 |
| `sync_duration_ms` | number | Yes | Duration in ms | 1200 |
| `hours_since_last_sync` | number | Yes | Hours since last sync | 4 |

---

#### `integration_sync_failed`
**Trigger:** Sync failed  
**Type:** Server-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `integration_name` | string | Yes | Name | "oura" |
| `error_code` | string | Yes | Error code | "oauth_expired", "api_timeout", "rate_limit" |
| `error_message` | string | No | Error message | "OAuth token expired" |
| `retry_scheduled` | boolean | Yes | Will retry | true |

---

#### `lab_results_uploaded`
**Trigger:** User uploads lab results (PDF or manual)  
**Type:** Server-side  
**Related Metric:** Labs Uploaded per User

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `upload_method` | enum | Yes | Method | "pdf_upload", "api_import", "manual_entry" |
| `lab_provider` | string | Yes | Lab name | "invitro", "helix", "unknown" |
| `biomarkers_count` | number | Yes | Biomarkers extracted | 25 |
| `lab_date` | date | Yes | Date of lab test | "2026-01-15" |
| `processing_duration_sec` | number | Yes | Time to process | 45 |
| `is_first_lab` | boolean | Yes | First lab upload | true |
| `has_previous_labs` | boolean | Yes | Has prior labs for comparison | false |

---

#### `genomics_data_uploaded`
**Trigger:** User uploads genetic data  
**Type:** Server-side  
**Related Metric:** Genomics Data Uploaded

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `genomics_provider` | string | Yes | Provider | "23andme", "ancestry", "nebula" |
| `snps_extracted` | number | Yes | SNPs extracted | 247 |
| `processing_duration_sec` | number | Yes | Processing time | 120 |

---

#### `epigenetic_test_uploaded`
**Trigger:** User uploads epigenetic test results  
**Type:** Server-side  
**Related Metric:** Biological Age Tracked

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `test_provider` | string | Yes | Provider | "trudiagnostic", "elysiuminhealth", "glycanage" |
| `biological_age` | number | Yes | Biological age | 52.3 |
| `chronological_age` | number | Yes | Chronological age | 55 |
| `age_gap_years` | number | Yes | Difference | -2.7 |
| `pace_of_aging` | number | No | DunedinPACE if available | 0.95 |
| `is_first_test` | boolean | Yes | First test | true |

---

### 3. AI Agent Events

События взаимодействия с AI-агентами.

---

#### `agent_query_submitted`
**Trigger:** User sends query to AI  
**Type:** Client-side + Server-side  
**Funnel Position:** Engagement  
**Related Metric:** AI Queries per User

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `query_id` | string | Yes | Unique query ID | "qry_abc123" |
| `query_text` | string | Yes | Query text (truncated 500 chars) | "Какой протокол NMN для моего возраста?" |
| `query_length` | number | Yes | Character count | 45 |
| `platform` | enum | Yes | Platform | "telegram", "webapp", "mobile" |
| `context_type` | string | No | Query context | "follow_up", "new_thread", "quick_command" |
| `has_context_from_rag` | boolean | No | RAG context used | true |

---

#### `agent_query_routed`
**Trigger:** Orchestrator routes query to agent(s)  
**Type:** Server-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `query_id` | string | Yes | Query ID | "qry_abc123" |
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `primary_agent` | string | Yes | Main agent selected | "longevity_agent" |
| `secondary_agents` | array | No | Supporting agents | ["safety_agent", "research_agent"] |
| `routing_confidence` | number | Yes | Confidence 0-1 | 0.92 |
| `routing_duration_ms` | number | Yes | Routing time | 150 |

---

#### `agent_response_generated`
**Trigger:** Agent generates response  
**Type:** Server-side  
**Related Metric:** Query Success Rate

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `query_id` | string | Yes | Query ID | "qry_abc123" |
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `agent_name` | string | Yes | Agent that responded | "longevity_agent" |
| `response_length` | number | Yes | Response length | 450 |
| `response_time_ms` | number | Yes | Total response time | 3200 |
| `llm_provider` | string | Yes | LLM used | "gigachat", "openai_gpt4o" |
| `rag_chunks_used` | number | No | RAG chunks retrieved | 5 |
| `sources_cited` | number | No | Sources cited | 3 |
| `has_recommendation` | boolean | Yes | Contains recommendation | true |
| `has_safety_warning` | boolean | Yes | Safety warning included | false |
| `token_count_input` | number | Yes | Input tokens | 1200 |
| `token_count_output` | number | Yes | Output tokens | 350 |

---

#### `agent_response_rated`
**Trigger:** User rates AI response  
**Type:** Client-side  
**Related Metric:** Helpful Rating

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `query_id` | string | Yes | Query ID | "qry_abc123" |
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `agent_name` | string | Yes | Agent name | "longevity_agent" |
| `rating` | enum | Yes | Rating | "helpful", "not_helpful", "neutral" |
| `feedback_text` | string | No | Optional feedback | "Очень полезно!" |
| `rating_delay_sec` | number | Yes | Time after response | 30 |

---

#### `recommendation_viewed`
**Trigger:** User views a recommendation  
**Type:** Client-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `recommendation_id` | string | Yes | Recommendation ID | "rec_abc123" |
| `recommendation_type` | string | Yes | Type | "action", "supplement", "protocol" |
| `source_agent` | string | Yes | Agent that created it | "coach_agent" |

---

#### `recommendation_completed`
**Trigger:** User marks recommendation as done  
**Type:** Server-side  
**Related Metric:** Recommendation Follow-through

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `recommendation_id` | string | Yes | Recommendation ID | "rec_abc123" |
| `recommendation_type` | string | Yes | Type | "action", "supplement" |
| `source_agent` | string | Yes | Source agent | "coach_agent" |
| `days_since_created` | number | Yes | Days since recommendation | 3 |
| `completion_method` | enum | Yes | How completed | "manual_mark", "auto_detected" |
| `total_completed_month` | number | Yes | Total completed this month | 8 |

---

#### `recommendation_skipped`
**Trigger:** User skips/dismisses recommendation  
**Type:** Client-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `recommendation_id` | string | Yes | Recommendation ID | "rec_abc123" |
| `skip_reason` | enum | No | Reason | "not_relevant", "too_hard", "already_doing", "later" |

---

### 4. Custom RAG Events

События работы с пользовательской базой знаний.

---

#### `protocol_upload_started`
**Trigger:** User starts uploading a protocol  
**Type:** Client-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `upload_method` | enum | Yes | Method | "file_upload", "url_import", "manual_paste" |
| `file_type` | string | No | File type | "pdf", "md", "txt" |
| `file_size_kb` | number | No | File size | 256 |

---

#### `protocol_uploaded`
**Trigger:** Protocol successfully added to RAG  
**Type:** Server-side  
**Related Metric:** RAG Adoption, Documents per User

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `protocol_id` | string | Yes | Protocol ID | "prot_abc123" |
| `protocol_name` | string | Yes | Name | "Bryan Johnson Blueprint" |
| `protocol_category` | string | Yes | Category | "longevity", "nutrition", "sleep" |
| `upload_method` | enum | Yes | Method | "file_upload", "url_import" |
| `chunks_created` | number | Yes | RAG chunks | 45 |
| `processing_duration_sec` | number | Yes | Processing time | 90 |
| `total_protocols_now` | number | Yes | Total protocols | 3 |
| `is_first_protocol` | boolean | Yes | First protocol | true |

---

#### `protocol_upload_failed`
**Trigger:** Protocol upload failed  
**Type:** Server-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `error_code` | string | Yes | Error code | "parse_error", "file_too_large", "unsupported_format" |
| `file_type` | string | No | File type | "pdf" |
| `file_size_kb` | number | No | File size | 52000 |

---

#### `protocol_rag_used`
**Trigger:** User's protocol used in AI response  
**Type:** Server-side  
**Related Metric:** RAG Retrieval Usage

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `query_id` | string | Yes | Query ID | "qry_abc123" |
| `protocol_id` | string | Yes | Protocol used | "prot_abc123" |
| `protocol_name` | string | Yes | Protocol name | "Bryan Johnson Blueprint" |
| `chunks_retrieved` | number | Yes | Chunks used | 3 |
| `relevance_score` | number | Yes | Avg relevance 0-1 | 0.87 |

---

### 5. Research & Lab Interpretation Events

События поиска исследований и интерпретации анализов.

---

#### `research_search_started`
**Trigger:** User searches for research  
**Type:** Client-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `search_query` | string | Yes | Search query | "NMN effectiveness biological age" |
| `filters_applied` | object | No | Filters | {"study_type": "rct", "year_min": 2020} |

---

#### `research_search_completed`
**Trigger:** Research search returns results  
**Type:** Server-side  
**Related Metric:** Papers Retrieved per Query

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `search_id` | string | Yes | Search ID | "src_abc123" |
| `search_query` | string | Yes | Query | "NMN effectiveness" |
| `results_count` | number | Yes | Results found | 12 |
| `search_duration_ms` | number | Yes | Search time | 2500 |
| `sources_searched` | array | Yes | Sources | ["pubmed", "semantic_scholar"] |

---

#### `research_paper_viewed`
**Trigger:** User views paper details  
**Type:** Client-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `paper_id` | string | Yes | Paper ID | "pmid_12345678" |
| `paper_title` | string | Yes | Title | "NMN supplementation enhances..." |
| `study_type` | string | Yes | Type | "rct", "meta_analysis", "review" |
| `view_source` | string | Yes | Where viewed | "search_results", "agent_citation" |

---

#### `research_paper_saved`
**Trigger:** User saves paper to favorites  
**Type:** Client-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `paper_id` | string | Yes | Paper ID | "pmid_12345678" |
| `total_saved_papers` | number | Yes | Total saved | 15 |

---

#### `lab_interpretation_requested`
**Trigger:** User requests AI interpretation of labs  
**Type:** Client-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `lab_id` | string | Yes | Lab result ID | "lab_abc123" |
| `biomarkers_count` | number | Yes | Biomarkers to interpret | 25 |

---

#### `lab_interpretation_completed`
**Trigger:** AI interpretation generated  
**Type:** Server-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `lab_id` | string | Yes | Lab ID | "lab_abc123" |
| `biomarkers_analyzed` | number | Yes | Biomarkers analyzed | 25 |
| `flags_optimal` | number | Yes | Optimal count | 18 |
| `flags_attention` | number | Yes | Attention count | 5 |
| `flags_critical` | number | Yes | Critical count | 2 |
| `recommendations_generated` | number | Yes | Recommendations | 4 |
| `interpretation_duration_ms` | number | Yes | Time | 8500 |
| `has_comparison_to_previous` | boolean | Yes | Compared to prior labs | true |

---

### 6. N=1 Experiment Events

События для Biohacker Lab модуля.

---

#### `experiment_created`
**Trigger:** User creates N=1 experiment  
**Type:** Server-side  
**Related Metric:** Experiment Adoption

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `experiment_id` | string | Yes | Experiment ID | "exp_abc123" |
| `experiment_name` | string | Yes | Name | "Магний глицинат для deep sleep" |
| `hypothesis` | string | Yes | Hypothesis | "Магний увеличит deep sleep на 15%" |
| `intervention_type` | string | Yes | Intervention type | "supplement", "behavior", "diet" |
| `metrics_tracked` | array | Yes | Metrics | ["deep_sleep_oura", "subjective_morning"] |
| `baseline_duration_days` | number | Yes | Baseline period | 14 |
| `intervention_duration_days` | number | Yes | Intervention period | 28 |
| `total_experiments_now` | number | Yes | Total experiments | 2 |
| `is_first_experiment` | boolean | Yes | First experiment | true |

---

#### `experiment_baseline_completed`
**Trigger:** Baseline period ends  
**Type:** Server-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `experiment_id` | string | Yes | Experiment ID | "exp_abc123" |
| `baseline_days_actual` | number | Yes | Actual baseline days | 14 |
| `data_completeness_percent` | number | Yes | Data completeness | 92 |
| `baseline_mean` | number | No | Baseline mean (primary metric) | 68 |
| `baseline_std` | number | No | Baseline std dev | 12 |

---

#### `experiment_compliance_logged`
**Trigger:** User logs compliance (took supplement, did action)  
**Type:** Client-side  
**Related Metric:** Experiment Completion

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `experiment_id` | string | Yes | Experiment ID | "exp_abc123" |
| `compliance_date` | date | Yes | Date | "2026-01-26" |
| `compliance_status` | enum | Yes | Status | "completed", "missed", "partial" |
| `days_into_intervention` | number | Yes | Days into intervention | 8 |
| `cumulative_compliance_percent` | number | Yes | Total compliance | 87 |

---

#### `experiment_completed`
**Trigger:** Experiment finishes (intervention period ends)  
**Type:** Server-side  
**Related Metric:** Experiment Completion Rate

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `experiment_id` | string | Yes | Experiment ID | "exp_abc123" |
| `experiment_name` | string | Yes | Name | "Магний глицинат для deep sleep" |
| `total_duration_days` | number | Yes | Total duration | 42 |
| `compliance_percent` | number | Yes | Overall compliance | 85 |
| `result_effect_size` | number | Yes | Effect size (Cohen's d) | 0.65 |
| `result_p_value` | number | Yes | P-value | 0.03 |
| `result_significant` | boolean | Yes | Statistically significant | true |
| `result_direction` | enum | Yes | Direction | "positive", "negative", "neutral" |
| `primary_metric_change_percent` | number | Yes | Primary metric change | 18 |
| `conclusion` | string | Yes | AI conclusion | "effective" |

---

#### `experiment_stopped_early`
**Trigger:** User stops experiment before completion  
**Type:** Server-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `experiment_id` | string | Yes | Experiment ID | "exp_abc123" |
| `days_completed` | number | Yes | Days completed | 18 |
| `stop_reason` | enum | Yes | Reason | "user_decision", "low_compliance", "side_effects" |
| `partial_analysis_possible` | boolean | Yes | Can analyze partial | false |

---

#### `experiment_result_actioned`
**Trigger:** User takes action on experiment result  
**Type:** Client-side  
**Related Metric:** Action Taken on Results

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `experiment_id` | string | Yes | Experiment ID | "exp_abc123" |
| `action_type` | enum | Yes | Action taken | "added_to_protocol", "repeat_experiment", "shared", "ignored" |
| `result_was_significant` | boolean | Yes | Was result significant | true |

---

### 7. Subscription & Revenue Events

События подписки и монетизации.

---

#### `subscription_page_viewed`
**Trigger:** User views pricing/subscription page  
**Type:** Client-side  
**Funnel Position:** Revenue

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `current_plan` | enum | Yes | Current plan | "free" |
| `view_source` | string | Yes | Source | "settings", "upgrade_cta", "limit_reached" |

---

#### `subscription_trial_started`
**Trigger:** User starts trial  
**Type:** Server-side  
**Related Metric:** Trial → Paid Conversion

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `trial_plan` | enum | Yes | Trial plan | "optimize", "biohacker_pro" |
| `trial_duration_days` | number | Yes | Trial length | 7 |
| `trial_source` | string | Yes | How initiated | "onboarding_offer", "promo_code", "upgrade_flow" |
| `promo_code` | string | No | Promo code if used | "WINTER2026" |

---

#### `subscription_started`
**Trigger:** User subscribes to paid plan  
**Type:** Server-side  
**Related Metric:** Free → Paid Conversion, MRR

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `plan` | enum | Yes | Plan | "optimize", "biohacker_pro", "longevity_elite" |
| `plan_price_rub` | number | Yes | Monthly price | 990 |
| `billing_period` | enum | Yes | Period | "monthly", "annual" |
| `previous_plan` | enum | Yes | Previous plan | "free", "trial" |
| `days_since_signup` | number | Yes | Days since signup | 14 |
| `conversion_source` | string | Yes | What drove conversion | "limit_reached", "feature_unlock", "trial_end" |
| `promo_code` | string | No | Promo code | "WINTER2026" |
| `discount_percent` | number | No | Discount applied | 20 |
| `mrr_added_rub` | number | Yes | MRR added | 990 |

---

#### `subscription_upgraded`
**Trigger:** User upgrades to higher plan  
**Type:** Server-side  
**Related Metric:** Expansion MRR

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `from_plan` | enum | Yes | Previous plan | "optimize" |
| `to_plan` | enum | Yes | New plan | "biohacker_pro" |
| `mrr_change_rub` | number | Yes | MRR change | +1500 |
| `upgrade_reason` | string | No | Why upgraded | "rag_limit", "agents_limit", "genomics_access" |
| `days_on_previous_plan` | number | Yes | Days on old plan | 45 |

---

#### `subscription_downgraded`
**Trigger:** User downgrades plan  
**Type:** Server-side  
**Related Metric:** Contraction MRR

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `from_plan` | enum | Yes | Previous plan | "biohacker_pro" |
| `to_plan` | enum | Yes | New plan | "optimize" |
| `mrr_change_rub` | number | Yes | MRR change | -1500 |
| `downgrade_reason` | enum | No | Reason | "too_expensive", "not_using_features", "other" |
| `days_on_previous_plan` | number | Yes | Days on old plan | 90 |

---

#### `subscription_cancelled`
**Trigger:** User cancels subscription  
**Type:** Server-side  
**Related Metric:** Churned MRR, Monthly Churn

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `plan` | enum | Yes | Cancelled plan | "biohacker_pro" |
| `mrr_lost_rub` | number | Yes | MRR lost | 2490 |
| `days_as_paying_user` | number | Yes | Total paying days | 120 |
| `cancel_reason` | enum | Yes | Reason | "too_expensive", "not_using", "found_alternative", "other" |
| `cancel_feedback` | string | No | Optional feedback | "..." |
| `win_back_offer_shown` | boolean | Yes | Shown offer | true |
| `win_back_offer_accepted` | boolean | No | Accepted offer | false |

---

#### `subscription_renewed`
**Trigger:** Subscription auto-renews  
**Type:** Server-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `plan` | enum | Yes | Plan | "biohacker_pro" |
| `renewal_number` | number | Yes | Which renewal | 3 |
| `mrr_rub` | number | Yes | MRR | 2490 |

---

#### `payment_failed`
**Trigger:** Payment attempt failed  
**Type:** Server-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `plan` | enum | Yes | Plan | "biohacker_pro" |
| `failure_reason` | string | Yes | Reason | "insufficient_funds", "card_expired", "declined" |
| `retry_scheduled` | boolean | Yes | Will retry | true |
| `days_until_cancel` | number | Yes | Days until auto-cancel | 7 |

---

### 8. Referral & Engagement Events

События рефералов и вовлечённости.

---

#### `referral_link_generated`
**Trigger:** User generates referral link  
**Type:** Client-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `referral_code` | string | Yes | Code | "REF_ABC123" |
| `context` | string | Yes | Where generated | "share_health_score", "settings", "achievement" |

---

#### `referral_link_shared`
**Trigger:** User shares referral link  
**Type:** Client-side  
**Related Metric:** Invites Sent

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `referral_code` | string | Yes | Code | "REF_ABC123" |
| `share_method` | enum | Yes | How shared | "telegram", "whatsapp", "copy_link", "email" |
| `total_shares` | number | Yes | Total shares by user | 5 |

---

#### `referral_signup_completed`
**Trigger:** Referred user completes signup  
**Type:** Server-side  
**Related Metric:** Invite → Signup Conversion

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `referrer_user_id` | string | Yes | Referrer ID | "usr_abc123" |
| `referred_user_id` | string | Yes | New user ID | "usr_xyz789" |
| `referral_code` | string | Yes | Code used | "REF_ABC123" |
| `referrer_total_referrals` | number | Yes | Total referrals | 3 |

---

#### `referral_converted_to_paid`
**Trigger:** Referred user becomes paying  
**Type:** Server-side  
**Related Metric:** Referral Revenue

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `referrer_user_id` | string | Yes | Referrer ID | "usr_abc123" |
| `referred_user_id` | string | Yes | Referred ID | "usr_xyz789" |
| `referred_plan` | enum | Yes | Plan subscribed | "biohacker_pro" |
| `referrer_reward_type` | string | Yes | Reward type | "free_month", "credit" |
| `referrer_reward_value_rub` | number | Yes | Reward value | 990 |

---

#### `health_score_calculated`
**Trigger:** Health Score calculated/updated  
**Type:** Server-side  
**Related Metric:** Health Score Adoption

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `health_score` | number | Yes | Score 0-100 | 72 |
| `score_change_30d` | number | No | Change from 30 days ago | +3 |
| `data_completeness_percent` | number | Yes | Data completeness | 65 |
| `dimensions_with_data` | number | Yes | Dimensions with data | 6 |
| `is_first_score` | boolean | Yes | First score | false |

---

#### `health_score_viewed`
**Trigger:** User views Health Score  
**Type:** Client-side  
**Related Metric:** Score Check Frequency

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `health_score` | number | Yes | Current score | 72 |
| `view_context` | string | Yes | Where viewed | "dashboard", "detail_page", "notification" |
| `views_this_month` | number | Yes | Views this month | 8 |

---

#### `health_score_shared`
**Trigger:** User shares Health Score  
**Type:** Client-side  
**Related Metric:** Score Sharing

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `health_score` | number | Yes | Score | 72 |
| `share_method` | enum | Yes | How shared | "telegram", "image_download", "link" |
| `share_context` | string | Yes | Why shared | "achievement", "comparison", "referral" |

---

#### `weekly_report_sent`
**Trigger:** Weekly report generated and sent  
**Type:** Server-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `report_id` | string | Yes | Report ID | "rpt_abc123" |
| `delivery_channel` | enum | Yes | Channel | "telegram", "email", "both" |
| `metrics_included` | number | Yes | Metrics in report | 8 |
| `improvements_count` | number | Yes | Improvements highlighted | 3 |
| `attention_areas_count` | number | Yes | Areas needing attention | 2 |
| `recommendations_count` | number | Yes | Recommendations | 4 |

---

#### `weekly_report_opened`
**Trigger:** User opens weekly report  
**Type:** Client-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `report_id` | string | Yes | Report ID | "rpt_abc123" |
| `open_delay_hours` | number | Yes | Hours since sent | 4 |
| `opened_via` | enum | Yes | How opened | "telegram_link", "email_link", "app_notification" |

---

#### `reminder_sent`
**Trigger:** Reminder notification sent  
**Type:** Server-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `reminder_type` | enum | Yes | Type | "sleep", "supplement", "sync_data", "check_in" |
| `delivery_channel` | enum | Yes | Channel | "telegram", "push" |

---

#### `reminder_actioned`
**Trigger:** User takes action from reminder  
**Type:** Client-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `reminder_type` | enum | Yes | Type | "sleep" |
| `action_type` | enum | Yes | Action | "completed", "snoozed", "dismissed" |
| `response_delay_min` | number | Yes | Minutes after reminder | 15 |

---

### 9. Error Events

События ошибок для мониторинга качества.

---

#### `error_occurred`
**Trigger:** Application error  
**Type:** Client-side + Server-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | No | User ID (if logged in) | "usr_abc123" |
| `error_code` | string | Yes | Error code | "LLM_TIMEOUT", "API_ERROR", "PARSE_FAILED" |
| `error_message` | string | Yes | Error message | "Request timeout after 30s" |
| `error_context` | string | Yes | Where occurred | "agent_query", "integration_sync", "file_upload" |
| `error_severity` | enum | Yes | Severity | "critical", "error", "warning" |
| `platform` | enum | Yes | Platform | "telegram_webapp", "web", "backend" |
| `stack_trace` | string | No | Stack trace (truncated) | "..." |
| `user_action_before` | string | No | What user was doing | "submitting_query" |

---

#### `rate_limit_hit`
**Trigger:** User hits rate limit  
**Type:** Server-side

| Property | Type | Required | Description | Example |
|----------|------|----------|-------------|---------|
| `user_id` | string | Yes | User ID | "usr_abc123" |
| `limit_type` | enum | Yes | Type | "ai_queries_daily", "api_calls", "uploads" |
| `current_plan` | enum | Yes | Plan | "free" |
| `limit_value` | number | Yes | Limit | 10 |
| `usage_value` | number | Yes | Current usage | 10 |
| `upgrade_cta_shown` | boolean | Yes | Shown upgrade | true |

---

## Implementation Notes

### Client-side (Frontend — Telegram WebApp, Web, Mobile)

```typescript
// TypeScript example for Telegram WebApp / Next.js
import { analytics } from '@/lib/analytics';

// Page view
analytics.track('page_viewed', {
  page_name: 'dashboard',
  session_id: getSessionId(),
  platform: 'telegram_webapp'
});

// AI query
analytics.track('agent_query_submitted', {
  user_id: user.id,
  query_id: generateQueryId(),
  query_text: query.slice(0, 500), // truncate
  query_length: query.length,
  platform: 'telegram_webapp',
  context_type: isFollowUp ? 'follow_up' : 'new_thread'
});

// Integration connect
analytics.track('integration_connected', {
  user_id: user.id,
  integration_type: 'wearable',
  integration_name: 'oura',
  connection_method: 'oauth',
  total_integrations_now: user.integrations.length,
  is_first_integration: user.integrations.length === 1
});
```

### Server-side (Backend — FastAPI/Python)

```python
# Python example for FastAPI backend
from analytics import track_event

# User activated
def on_user_activated(user_id: str, data_sources: list, agent: str):
    track_event(
        user_id=user_id,
        event='user_activated',
        properties={
            'days_since_signup': calculate_days_since_signup(user_id),
            'data_sources_count': len(data_sources),
            'data_sources_list': data_sources,
            'first_recommendation_agent': agent,
            'activation_path': 'organic_exploration'
        }
    )

# Subscription started
def on_subscription_started(user_id: str, plan: str, price: int):
    track_event(
        user_id=user_id,
        event='subscription_started',
        properties={
            'plan': plan,
            'plan_price_rub': price,
            'billing_period': 'monthly',
            'previous_plan': get_previous_plan(user_id),
            'days_since_signup': calculate_days_since_signup(user_id),
            'conversion_source': 'feature_unlock',
            'mrr_added_rub': price
        }
    )

# Agent response
def on_agent_response(query_id: str, user_id: str, agent: str, response: dict):
    track_event(
        user_id=user_id,
        event='agent_response_generated',
        properties={
            'query_id': query_id,
            'agent_name': agent,
            'response_length': len(response['text']),
            'response_time_ms': response['duration_ms'],
            'llm_provider': response['llm_provider'],
            'rag_chunks_used': response.get('rag_chunks', 0),
            'sources_cited': len(response.get('sources', [])),
            'has_recommendation': response.get('has_recommendation', False),
            'has_safety_warning': response.get('has_safety_warning', False),
            'token_count_input': response['tokens_in'],
            'token_count_output': response['tokens_out']
        }
    )
```

### Telegram Bot (aiogram 3.x)

```python
# Telegram bot event tracking
from aiogram import Router
from analytics import track_event

router = Router()

@router.message()
async def handle_message(message: Message):
    user_id = get_user_id(message.from_user.id)
    
    # Track query submission
    query_id = generate_query_id()
    track_event(
        user_id=user_id,
        event='agent_query_submitted',
        properties={
            'query_id': query_id,
            'query_text': message.text[:500],
            'query_length': len(message.text),
            'platform': 'telegram',
            'context_type': 'new_thread'
        }
    )
    
    # Process and respond...
```

---

## Validation Rules

### Required Properties
1. All `user_id` fields must be valid UUID format when user is authenticated
2. All `*_id` fields must follow format: `{prefix}_{random}` (e.g., `qry_abc123`)
3. All timestamps must be in ISO 8601 format with timezone: `2026-01-26T10:30:00Z`

### Type Validation
| Type | Validation |
|------|------------|
| `string` | Non-empty, max 1000 chars (except truncated fields) |
| `number` | Finite number, no NaN/Infinity |
| `boolean` | true/false only |
| `enum` | Must match allowed values |
| `array` | JSON array, max 100 items |
| `object` | Valid JSON object |
| `datetime` | ISO 8601 format |
| `date` | YYYY-MM-DD format |

### Enum Values

```yaml
signup_method: ["telegram", "email", "phone", "google", "apple"]
platform: ["telegram", "telegram_webapp", "web", "mobile_ios", "mobile_android"]
integration_type: ["wearable", "lab", "genomics", "nutrition", "meditation", "fitness", "cgm"]
integration_name: ["oura", "apple_watch", "whoop", "garmin", "fitbit", "dexcom", "libre", "invitro", "helix", "23andme", "myfitnesspal", "strava", "headspace"]
connection_method: ["oauth", "api_key", "pdf_upload", "manual_entry", "webhook"]
account_type: ["free", "optimize", "biohacker_pro", "longevity_elite", "enterprise", "trial"]
persona_type: ["advanced_biohacker", "health_optimizer", "longevity_seeker", "unknown"]
rating: ["helpful", "not_helpful", "neutral"]
result_direction: ["positive", "negative", "neutral"]
error_severity: ["critical", "error", "warning", "info"]
```

### Data Quality Checks
1. **No PII in clear text**: Email must be hashed (SHA-256)
2. **Truncation**: Long text fields truncated to max length with indicator
3. **Null handling**: Use `null` for missing optional fields, never empty string
4. **Consistency**: Same event from different platforms must have identical schema

---

## Data Pipeline

### Collection Flow

```
┌─────────────────────────────────────────────────────────────────────────┐
│                            Client-side Events                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │   Telegram   │  │   WebApp     │  │   Mobile     │  │   Web        │ │
│  │   Bot        │  │   (Mini App) │  │   (Flutter)  │  │   (Next.js)  │ │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘ │
│         │                 │                 │                 │         │
│         └─────────────────┴─────────────────┴─────────────────┘         │
│                                     │                                   │
│                                     ▼                                   │
│                          ┌──────────────────┐                           │
│                          │   Event Queue    │                           │
│                          │   (Kafka/Redis)  │                           │
│                          └────────┬─────────┘                           │
└───────────────────────────────────┼─────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                            Server-side Events                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │   FastAPI    │  │   Agent      │  │   Payment    │  │   Cron       │ │
│  │   Backend    │  │   Services   │  │   Service    │  │   Jobs       │ │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘ │
│         │                 │                 │                 │         │
│         └─────────────────┴─────────────────┴─────────────────┘         │
│                                     │                                   │
│                                     ▼                                   │
│                          ┌──────────────────┐                           │
│                          │   Event Queue    │                           │
│                          │   (Kafka/Redis)  │                           │
│                          └────────┬─────────┘                           │
└───────────────────────────────────┼─────────────────────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   Event Processor    │
                         │   (Validation +      │
                         │    Enrichment)       │
                         └──────────┬───────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
                    ▼               ▼               ▼
           ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
           │  ClickHouse  │ │  PostgreSQL  │ │  Exports     │
           │  (Analytics) │ │  (Profiles)  │ │  (GA4, etc.) │
           └──────────────┘ └──────────────┘ └──────────────┘
```

### Storage Strategy

| Data Type | Storage | Retention | Purpose |
|-----------|---------|-----------|---------|
| Raw events | ClickHouse | 2 years | Analytics, debugging |
| Aggregated metrics | ClickHouse | Indefinite | Dashboards, reports |
| User properties | PostgreSQL | Indefinite | Segmentation |
| Session data | Redis | 30 days | Real-time analytics |
| Exports | GA4/Amplitude | Per tool | External analysis |

---

## Privacy & Compliance

### 152-FZ (Russia) Requirements
- All health data stored in Russian data centers
- User consent recorded (`consent_152fz` property)
- Data export/deletion on request

### PII Handling
- Email: SHA-256 hashed (`email_hash`)
- Telegram ID: Stored separately, not in analytics
- Health data: Aggregated for analytics, raw only in secure storage
- Query text: Truncated to 500 chars, no medical details in analytics

### Data Minimization
- Minimum viable properties per event
- No unnecessary user attributes
- Aggregation preferred over raw data for dashboards

---

## Event-to-Metric Mapping

### North Star Metric: MAU-AI

**Formula:** Users with ≥5 AI recommendations + ≥3 completed + ≥1 data sync

**Events Used:**
- `agent_response_generated` (filter: `has_recommendation = true`) → count ≥5/month
- `recommendation_completed` → count ≥3/month
- `integration_sync_completed` → count ≥1/month

### AARRR Metrics Mapping

| Metric | Events | Calculation |
|--------|--------|-------------|
| **New Signups** | `signup_completed` | COUNT per period |
| **Signup Conversion** | `signup_started`, `signup_completed` | completed/started |
| **Activation Rate** | `user_activated`, `signup_completed` | activated/signups (D7 cohort) |
| **Time to First Value** | `signup_completed`, `agent_response_generated` (first with recommendation) | AVG(time difference) |
| **D1/D7/D30 Retention** | `session_started` | Users with session on D1/D7/D30 / D0 signups |
| **DAU/MAU** | `session_started` | DISTINCT users daily / monthly |
| **AI Queries/Week** | `agent_query_submitted` | AVG per WAU |
| **MRR** | `subscription_started`, `subscription_upgraded`, `subscription_cancelled` | SUM of active subscriptions |
| **Free→Paid Conversion** | `subscription_started` | paid users / total users |
| **Referral Rate** | `referral_link_shared`, unique users | sharers / total users |

### Feature Metrics Mapping

| Feature | Key Event | Metric |
|---------|-----------|--------|
| **Agent Adoption** | `agent_query_submitted` | Users with ≥1 query / MAU |
| **RAG Adoption** | `protocol_uploaded` | Users with ≥1 protocol / MAU |
| **Integration Sources** | `integration_connected` | AVG integrations per user |
| **Experiment Adoption** | `experiment_created` | Users with ≥1 experiment / MAU |
| **Health Score Adoption** | `health_score_calculated` | Users with score / MAU |

---

## Summary

```yaml
tracking_plan_summary:
  version: "1.0"
  created: "2026-01-26"
  agent: "Analytics"
  
  total_events: 78
  event_categories:
    core_user_journey: 11
    data_integrations: 9
    ai_agents: 8
    custom_rag: 4
    research_labs: 6
    n1_experiments: 6
    subscription_revenue: 10
    referral_engagement: 12
    errors: 2
  
  user_properties: 15
  
  implementation:
    client_side: "TypeScript (WebApp, Mobile), aiogram (Telegram)"
    server_side: "Python (FastAPI)"
    queue: "Kafka/Redis"
    storage: "ClickHouse (events), PostgreSQL (profiles)"
  
  validation:
    required_properties: "Enforced"
    type_checking: "Strict"
    enum_validation: "Enforced"
    pii_protection: "Hashing, truncation"
  
  compliance:
    - "152-FZ (Russia)"
    - "Data minimization"
    - "User consent tracking"
  
  documents_created:
    - path: "/docs/analytics/tracking-plan.md"
      status: "complete"
  
  related_documents:
    - "/docs/analytics/metrics-framework.md"
    - "/docs/discovery/user-stories.md"
    - "/docs/design/user-flows.md"
  
  next_actions:
    - "Implement event SDK for all platforms"
    - "Set up ClickHouse schemas"
    - "Configure dashboards (Metabase/Grafana)"
    - "Create A/B experiment framework"
```

---

*Документ создан: 2026-01-26*  
*Analytics Agent v1.0*
