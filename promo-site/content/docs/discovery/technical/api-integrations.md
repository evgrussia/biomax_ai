# API Integrations Technical Specification

## Спецификации интеграций для BIOMAX AI

**Дата:** 2026-01-26  
**Версия:** 1.0  
**Статус:** Discovery Phase

---

## 1. Executive Summary

В данном документе представлены технические спецификации всех API интеграций для MVP модулей BIOMAX AI. На основе исследования выявлены:

- **6 API с полной документацией** (Oura, Strava, PubMed, DrugBank, MyFitnessPal, 23andMe)
- **2 интеграции через PDF parser** (INVITRO, TruDiagnostic — нет публичного API)
- **1 API с ограниченным доступом** (Cambridge Brain Sciences — требует B2B контракт)

---

## 2. Сводная таблица API интеграций

| API | Агент | Auth | Rate Limits | Доступность | Приоритет |
|-----|-------|------|-------------|-------------|-----------|
| **Oura Ring** | Sleep Agent | OAuth 2.0 | Не указаны | ✅ Публичный | P0 |
| **Strava** | Fitness Agent | OAuth 2.0 | 200/15min, 2000/day | ✅ Публичный | P0 |
| **MyFitnessPal** | Nutrition Agent | OAuth 2.0 | 25K/day | ⚠️ Approval required | P0 |
| **PubMed** | Research Agent | API Key (optional) | 3 req/sec (без ключа) | ✅ Публичный | P1 |
| **DrugBank** | Safety Agent | API Key | По тарифу | 💰 Платный | P0 |
| **23andMe** | Genomics Agent | OAuth 2.0 | По договору | ⚠️ Approval required | P2 |
| **INVITRO** | Lab Interpreter | — | — | ❌ Нет API | P1 |
| **TruDiagnostic** | Longevity Agent | — | — | ❌ Нет API | P2 |
| **Cambridge Brain** | Cognitive Agent | OAuth 2.0 | По договору | ⚠️ B2B only | P2 |

---

## 3. Oura Ring API

### 3.1 Обзор

**Назначение:** Получение данных о сне, активности, HRV, readiness  
**Документация:** https://developer.ouraring.com/docs  
**API Base URL:** `https://api.ouraring.com/v2`

### 3.2 Аутентификация

```yaml
type: OAuth 2.0 Authorization Code
authorization_url: https://cloud.ouraring.com/oauth/authorize
token_url: https://api.ouraring.com/oauth/token
revoke_url: https://api.ouraring.com/oauth/revoke
```

### 3.3 OAuth Scopes

| Scope | Описание | Необходимость |
|-------|----------|---------------|
| `daily` | Daily summaries (сон, активность, readiness) | ✅ Required |
| `heartrate` | Time series HR (Gen 3+) | ✅ Required |
| `personal` | Возраст, пол, рост, вес | ✅ Required |
| `session` | Guided/unguided sessions | Optional |
| `workout` | Auto-detected workouts | Optional |
| `spo2Daily` | SpO2 во сне | Optional |
| `tag` | User tags | Optional |
| `email` | Email пользователя | Optional |

### 3.4 Ключевые Endpoints

```yaml
# Sleep Data
GET /v2/usercollection/sleep
  params:
    start_date: YYYY-MM-DD
    end_date: YYYY-MM-DD
  returns:
    - bedtime_start, bedtime_end
    - total_sleep_duration
    - rem_sleep_duration
    - deep_sleep_duration
    - light_sleep_duration
    - efficiency
    - latency
    - hr_lowest
    - hrv (average, max)
    - breath_average

# Daily Readiness
GET /v2/usercollection/daily_readiness
  returns:
    - score (0-100)
    - contributors (sleep, activity, HRV)
    - temperature_deviation

# Heart Rate
GET /v2/usercollection/heartrate
  params:
    start_datetime: ISO8601
    end_datetime: ISO8601
  returns:
    - bpm (time series)
    - source (awake, sleep, workout)

# Personal Info
GET /v2/usercollection/personal_info
  returns:
    - age, weight, height, biological_sex
```

### 3.5 Пример запроса

```python
import httpx
from datetime import date, timedelta

class OuraClient:
    BASE_URL = "https://api.ouraring.com/v2"
    
    def __init__(self, access_token: str):
        self.headers = {"Authorization": f"Bearer {access_token}"}
    
    async def get_sleep_data(
        self, 
        start_date: date, 
        end_date: date
    ) -> dict:
        """Получает данные сна за период."""
        async with httpx.AsyncClient() as client:
            response = await client.get(
                f"{self.BASE_URL}/usercollection/sleep",
                headers=self.headers,
                params={
                    "start_date": start_date.isoformat(),
                    "end_date": end_date.isoformat(),
                }
            )
            response.raise_for_status()
            return response.json()
    
    async def get_readiness(self, date: date) -> dict:
        """Получает readiness score за день."""
        async with httpx.AsyncClient() as client:
            response = await client.get(
                f"{self.BASE_URL}/usercollection/daily_readiness",
                headers=self.headers,
                params={"start_date": date.isoformat()}
            )
            response.raise_for_status()
            return response.json()
```

### 3.6 Пример ответа (Sleep)

```json
{
  "data": [
    {
      "id": "8f9a5221-639e-4a85-81cb-4065ef23f979",
      "day": "2026-01-25",
      "bedtime_start": "2026-01-25T23:30:00+03:00",
      "bedtime_end": "2026-01-26T07:15:00+03:00",
      "total_sleep_duration": 25200,
      "deep_sleep_duration": 5400,
      "rem_sleep_duration": 6300,
      "light_sleep_duration": 13500,
      "efficiency": 92,
      "latency": 540,
      "hr_lowest": 52,
      "average_hrv": 45,
      "average_breath": 14.5,
      "readiness_score_delta": 3
    }
  ],
  "next_token": null
}
```

### 3.7 Особенности для России

- ✅ API работает без ограничений для российских IP
- ✅ Данные могут храниться локально после загрузки
- ⚠️ Требуется VPN для покупки кольца (официально не продаётся в РФ)

---

## 4. Strava API

### 4.1 Обзор

**Назначение:** Данные о тренировках, активности, маршрутах  
**Документация:** https://developers.strava.com/docs/  
**API Base URL:** `https://www.strava.com/api/v3`

### 4.2 Аутентификация

```yaml
type: OAuth 2.0 Authorization Code
authorization_url: https://www.strava.com/oauth/authorize
token_url: https://www.strava.com/oauth/token
deauthorize_url: https://www.strava.com/oauth/deauthorize
```

### 4.3 Rate Limits

| Лимит | Значение | Reset |
|-------|----------|-------|
| Overall (15 min) | 200 requests | 0, 15, 30, 45 min |
| Overall (daily) | 2,000 requests | Midnight UTC |
| Non-upload (15 min) | 100 requests | 0, 15, 30, 45 min |
| Non-upload (daily) | 1,000 requests | Midnight UTC |

**Headers для мониторинга:**
- `X-RateLimit-Limit`
- `X-RateLimit-Usage`
- `X-ReadRateLimit-Limit`
- `X-ReadRateLimit-Usage`

### 4.4 Ключевые Endpoints

```yaml
# List Athlete Activities
GET /athlete/activities
  params:
    before: Unix timestamp
    after: Unix timestamp
    page: int
    per_page: int (max 200)
  returns: list of SummaryActivity

# Get Activity
GET /activities/{id}
  returns:
    - name, type, sport_type
    - distance, moving_time, elapsed_time
    - total_elevation_gain
    - average_speed, max_speed
    - average_heartrate, max_heartrate
    - calories
    - suffer_score (relative effort)
    - workout_type

# Athlete Stats
GET /athletes/{id}/stats
  returns:
    - ytd_run_totals
    - ytd_ride_totals
    - all_run_totals
    - all_ride_totals

# Activity Streams (detailed data)
GET /activities/{id}/streams
  params:
    keys: heartrate, cadence, watts, velocity_smooth, altitude
  returns: time series data
```

### 4.5 Пример запроса

```python
import httpx
from datetime import datetime

class StravaClient:
    BASE_URL = "https://www.strava.com/api/v3"
    
    def __init__(self, access_token: str):
        self.headers = {"Authorization": f"Bearer {access_token}"}
    
    async def get_activities(
        self,
        after: datetime = None,
        before: datetime = None,
        per_page: int = 30
    ) -> list[dict]:
        """Получает список активностей."""
        params = {"per_page": per_page}
        if after:
            params["after"] = int(after.timestamp())
        if before:
            params["before"] = int(before.timestamp())
        
        async with httpx.AsyncClient() as client:
            response = await client.get(
                f"{self.BASE_URL}/athlete/activities",
                headers=self.headers,
                params=params
            )
            response.raise_for_status()
            return response.json()
    
    async def get_activity_streams(
        self,
        activity_id: int,
        keys: list[str] = ["heartrate", "cadence", "watts"]
    ) -> dict:
        """Получает детальные данные активности."""
        async with httpx.AsyncClient() as client:
            response = await client.get(
                f"{self.BASE_URL}/activities/{activity_id}/streams",
                headers=self.headers,
                params={"keys": ",".join(keys), "key_by_type": True}
            )
            response.raise_for_status()
            return response.json()
```

### 4.6 Пример ответа (Activity)

```json
{
  "id": 12345678901,
  "name": "Morning Run",
  "type": "Run",
  "sport_type": "Run",
  "start_date": "2026-01-26T07:30:00Z",
  "start_date_local": "2026-01-26T10:30:00",
  "timezone": "(GMT+03:00) Europe/Moscow",
  "distance": 5123.4,
  "moving_time": 1560,
  "elapsed_time": 1620,
  "total_elevation_gain": 45.0,
  "average_speed": 3.28,
  "max_speed": 4.12,
  "average_heartrate": 152.3,
  "max_heartrate": 178,
  "calories": 412,
  "suffer_score": 67,
  "average_cadence": 85.2
}
```

### 4.7 Webhooks (рекомендуется)

```yaml
# Subscription для real-time updates
POST /push_subscriptions
  body:
    client_id: string
    client_secret: string
    callback_url: https://your-domain.com/strava/webhook
    verify_token: string

# Events:
- activity.create
- activity.update
- activity.delete
- athlete.update
- athlete.deauthorize
```

### 4.8 Особенности для России

- ✅ API работает без ограничений
- ✅ Популярно среди российских атлетов
- ⚠️ Premium функции (Beacon, Routes) могут быть ограничены

---

## 5. MyFitnessPal API

### 5.1 Обзор

**Назначение:** Данные о питании, дневник еды, макронутриенты  
**Документация:** https://myfitnesspalapi.com/docs  
**Статус:** Private API (требуется approval)

### 5.2 Получение доступа

```yaml
contact: API@myfitnesspal.com
required_info:
  - Company name and description
  - Use case description
  - Expected API usage volume
  - Data handling practices
```

### 5.3 Аутентификация

```yaml
type: OAuth 2.0
note: |
  Требуется header "Api-Key" с client_id
  Access tokens expire every 60 days
```

### 5.4 Rate Limits

| Тип | Лимит |
|-----|-------|
| Standard | 25,000 requests/day |
| Standard | 60 requests/second |
| Enterprise | Custom (по запросу) |

### 5.5 Ключевые Endpoints

```yaml
# Food Diary (GET)
GET /v2/diary/{date}
  returns:
    - meals (breakfast, lunch, dinner, snacks)
    - foods (name, quantity, calories, macros)
    - totals (calories, protein, carbs, fat, fiber)

# Food Diary (POST)
POST /v2/diary
  body:
    date: YYYY-MM-DD
    meal: breakfast|lunch|dinner|snacks
    food_id: string
    quantity: float
    unit: string

# Food Search
GET /v2/foods/search
  params:
    query: string
    page: int
  returns:
    - food_id, name, brand
    - serving_size
    - calories, protein, carbs, fat

# User Goals
GET /v2/user/goals
  returns:
    - calorie_goal
    - macro_goals (protein, carbs, fat)
    - weight_goal
```

### 5.6 Пример запроса

```python
import httpx
from datetime import date

class MyFitnessPalClient:
    BASE_URL = "https://api.myfitnesspal.com"
    
    def __init__(self, access_token: str, api_key: str):
        self.headers = {
            "Authorization": f"Bearer {access_token}",
            "Api-Key": api_key,
        }
    
    async def get_diary(self, diary_date: date) -> dict:
        """Получает дневник питания за день."""
        async with httpx.AsyncClient() as client:
            response = await client.get(
                f"{self.BASE_URL}/v2/diary/{diary_date.isoformat()}",
                headers=self.headers
            )
            response.raise_for_status()
            return response.json()
    
    async def search_food(self, query: str) -> list[dict]:
        """Поиск продуктов в базе."""
        async with httpx.AsyncClient() as client:
            response = await client.get(
                f"{self.BASE_URL}/v2/foods/search",
                headers=self.headers,
                params={"query": query}
            )
            response.raise_for_status()
            return response.json()
```

### 5.7 Альтернативы (если не получим approval)

1. **Open Food Facts API** — бесплатная база продуктов
2. **USDA FoodData Central API** — официальная база США
3. **Edamam Nutrition API** — платная, но с free tier
4. **Manual input** — пользователь вводит данные сам

---

## 6. PubMed API (E-utilities)

### 6.1 Обзор

**Назначение:** Поиск научных статей, получение abstracts  
**Документация:** https://www.ncbi.nlm.nih.gov/books/NBK25497/  
**API Base URL:** `https://eutils.ncbi.nlm.nih.gov/entrez/eutils`

### 6.2 Аутентификация

```yaml
type: API Key (optional, recommended)
register: https://www.ncbi.nlm.nih.gov/account/
header: api_key={your_key}
```

### 6.3 Rate Limits

| Условие | Лимит |
|---------|-------|
| Без API key | 3 requests/second |
| С API key | 10 requests/second |
| Daily | ~500,000 requests (soft limit) |

### 6.4 Ключевые Endpoints

```yaml
# ESearch - поиск
GET /esearch.fcgi
  params:
    db: pubmed
    term: search query
    retmax: max results (default 20)
    retmode: json
    sort: relevance|pub_date
  returns:
    - idlist (PMIDs)
    - count (total results)

# EFetch - получение записей
GET /efetch.fcgi
  params:
    db: pubmed
    id: comma-separated PMIDs
    rettype: abstract|full
    retmode: xml|text
  returns:
    - title, abstract, authors
    - publication date, journal
    - DOI, PMID

# ESummary - краткая информация
GET /esummary.fcgi
  params:
    db: pubmed
    id: comma-separated PMIDs
    retmode: json
  returns:
    - title, source (journal)
    - pubdate, authors
    - doi
```

### 6.5 Пример запроса (Python eutils)

```python
from eutils import Client

class PubMedClient:
    def __init__(self, api_key: str = None):
        self.client = Client(api_key=api_key)
    
    def search(self, query: str, max_results: int = 10) -> list[dict]:
        """
        Ищет статьи в PubMed.
        
        Args:
            query: Поисковый запрос (на английском)
            max_results: Максимум результатов
        
        Returns:
            Список статей с PMID, title, abstract
        """
        # Поиск
        esr = self.client.esearch(db='pubmed', term=query)
        pmids = esr.ids[:max_results]
        
        if not pmids:
            return []
        
        # Получение деталей
        results = []
        for pmid in pmids:
            summary = self.client.efetch(db='pubmed', id=pmid)
            results.append({
                "pmid": pmid,
                "title": summary.title,
                "abstract": summary.abstract,
                "authors": summary.authors,
                "journal": summary.journal,
                "pub_date": summary.pub_date,
                "doi": summary.doi,
            })
        
        return results
    
    def get_article(self, pmid: str) -> dict:
        """Получает полную информацию о статье."""
        summary = self.client.efetch(db='pubmed', id=pmid)
        return {
            "pmid": pmid,
            "title": summary.title,
            "abstract": summary.abstract,
            "authors": summary.authors,
            "journal": summary.journal,
            "pub_date": summary.pub_date,
            "doi": summary.doi,
            "mesh_terms": summary.mesh_terms,
        }
```

### 6.6 Построение эффективных запросов

```python
# Примеры поисковых запросов для BIOMAX

SEARCH_TEMPLATES = {
    "supplement_efficacy": "{supplement}[Title/Abstract] AND efficacy[Title/Abstract] AND randomized controlled trial[Publication Type]",
    
    "sleep_intervention": "({intervention}[Title/Abstract]) AND (sleep quality[Title/Abstract] OR sleep duration[Title/Abstract]) AND humans[MeSH Terms]",
    
    "longevity": "({compound}[Title/Abstract]) AND (longevity[Title/Abstract] OR lifespan[Title/Abstract] OR aging[Title/Abstract])",
    
    "cognitive_enhancement": "({nootropic}[Title/Abstract]) AND (cognition[Title/Abstract] OR memory[Title/Abstract] OR attention[Title/Abstract]) AND clinical trial[Publication Type]",
    
    "nutrition_health": "({nutrient}[Title/Abstract]) AND ({health_outcome}[Title/Abstract]) AND meta-analysis[Publication Type]",
}

# Evidence level фильтры
EVIDENCE_FILTERS = {
    "high": "systematic review[Publication Type] OR meta-analysis[Publication Type]",
    "medium": "randomized controlled trial[Publication Type] OR clinical trial[Publication Type]",
    "low": "observational study[Publication Type] OR cohort study[Publication Type]",
}
```

### 6.7 Особенности для России

- ✅ Полный доступ без ограничений
- ✅ Бесплатный API
- ⚠️ Статьи на английском — требуется перевод для пользователей

---

## 7. DrugBank API

### 7.1 Обзор

**Назначение:** Проверка взаимодействий лекарств, контрпоказания  
**Документация:** https://docs.drugbank.com/v1/  
**Статус:** Платный (Commercial license required)

### 7.2 Тарифы

| План | Стоимость | Включено |
|------|-----------|----------|
| Clinical API | От $500/месяц | Drug interactions, indications |
| Scientific API | От $1000/месяц | Full molecular data |
| Enterprise | Custom | Dedicated support, SLA |

### 7.3 Аутентификация

```yaml
type: API Key
header: Authorization: Bearer {api_key}
```

### 7.4 Ключевые Endpoints

```yaml
# Drug Search
GET /v1/drugs
  params:
    q: search query
    region: us|ca|eu
  returns:
    - drugbank_id, name
    - description, indication
    - pharmacodynamics

# Drug Interactions
GET /v1/drugs/{id}/drug-interactions
  returns:
    - affected_drug
    - description
    - severity (minor|moderate|major|contraindicated)
    - evidence_level

# Contraindications
GET /v1/drugs/{id}/contraindications
  returns:
    - condition
    - description
    - severity

# Drug-Drug Interaction Checker
POST /v1/drug-interactions/check
  body:
    drugs: [drugbank_id_1, drugbank_id_2, ...]
  returns:
    - interactions between all provided drugs
```

### 7.5 Пример запроса

```python
import httpx

class DrugBankClient:
    BASE_URL = "https://api.drugbank.com/v1"
    
    def __init__(self, api_key: str):
        self.headers = {"Authorization": f"Bearer {api_key}"}
    
    async def search_drug(self, query: str) -> list[dict]:
        """Поиск лекарства/вещества."""
        async with httpx.AsyncClient() as client:
            response = await client.get(
                f"{self.BASE_URL}/drugs",
                headers=self.headers,
                params={"q": query}
            )
            response.raise_for_status()
            return response.json()
    
    async def check_interactions(
        self, 
        drug_ids: list[str]
    ) -> list[dict]:
        """Проверка взаимодействий между веществами."""
        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"{self.BASE_URL}/drug-interactions/check",
                headers=self.headers,
                json={"drugs": drug_ids}
            )
            response.raise_for_status()
            return response.json()
    
    async def get_contraindications(
        self, 
        drug_id: str
    ) -> list[dict]:
        """Получение контрпоказаний."""
        async with httpx.AsyncClient() as client:
            response = await client.get(
                f"{self.BASE_URL}/drugs/{drug_id}/contraindications",
                headers=self.headers
            )
            response.raise_for_status()
            return response.json()
```

### 7.6 Пример ответа (Interaction)

```json
{
  "interactions": [
    {
      "drug_1": {
        "drugbank_id": "DB00945",
        "name": "Aspirin"
      },
      "drug_2": {
        "drugbank_id": "DB00563",
        "name": "Methotrexate"
      },
      "description": "Aspirin may increase the serum concentration of Methotrexate. This may increase the risk of Methotrexate toxicity.",
      "severity": "major",
      "evidence_level": "established",
      "management": "Monitor for signs of methotrexate toxicity. Consider dose reduction or alternative therapy."
    }
  ]
}
```

### 7.7 Альтернативы (бесплатные)

1. **OpenFDA Drug API** — FDA данные о лекарствах
2. **RxNorm API** — терминология лекарств
3. **HL7 FHIR Drug Resources** — стандарт обмена медданными

---

## 8. 23andMe API

### 8.1 Обзор

**Назначение:** Импорт генетических данных, SNP анализ  
**Документация:** https://api.23andme.com/docs/reference  
**Статус:** Требует approval от 23andMe

### 8.2 Получение доступа

```yaml
contact: bd@23andme.com
process:
  1. Submit application with use case
  2. Accept Terms of Service
  3. Maintain developer account
  4. Receive approval and API credentials
```

### 8.3 Аутентификация

```yaml
type: OAuth 2.0
authorization_url: https://api.23andme.com/authorize
token_url: https://api.23andme.com/token
scopes:
  - basic: Basic profile info
  - names: User's name
  - email: User's email
  - genomes: Genetic data access
```

### 8.4 Ключевые Endpoints

```yaml
# User Profile
GET /1/user
  returns:
    - id, profiles
    - email (if scope granted)

# Genotype Data
GET /1/genotypes/{profile_id}
  params:
    locations: rs-numbers (comma-separated)
  returns:
    - genotype calls for requested SNPs

# Ancestry Composition
GET /1/ancestry/{profile_id}
  returns:
    - sub_populations
    - ancestry_proportions
```

### 8.5 Альтернатива: Raw Data Import

Поскольку API доступ ограничен, рекомендуется использовать **raw data export**:

```python
import pandas as pd
from typing import Dict, List

class TwentyThreeMeParser:
    """
    Парсер raw data файла 23andMe.
    
    Формат файла:
    # rsid   chromosome   position   genotype
    rs123   1            12345      AG
    """
    
    # SNPs релевантные для биохакинга
    RELEVANT_SNPS = {
        # Метаболизм кофеина
        "rs762551": {"gene": "CYP1A2", "effect": "caffeine_metabolism"},
        
        # MTHFR (фолат)
        "rs1801133": {"gene": "MTHFR", "effect": "folate_metabolism"},
        "rs1801131": {"gene": "MTHFR", "effect": "folate_metabolism"},
        
        # COMT (дофамин)
        "rs4680": {"gene": "COMT", "effect": "dopamine_metabolism"},
        
        # APOE (липиды, когнитивность)
        "rs429358": {"gene": "APOE", "effect": "lipid_metabolism"},
        "rs7412": {"gene": "APOE", "effect": "lipid_metabolism"},
        
        # VDR (витамин D)
        "rs1544410": {"gene": "VDR", "effect": "vitamin_d_metabolism"},
        
        # FTO (ожирение)
        "rs9939609": {"gene": "FTO", "effect": "obesity_risk"},
        
        # BDNF (нейропластичность)
        "rs6265": {"gene": "BDNF", "effect": "neuroplasticity"},
        
        # Clock genes (циркадные ритмы)
        "rs1801260": {"gene": "CLOCK", "effect": "circadian_rhythm"},
    }
    
    def parse_raw_file(self, file_path: str) -> Dict[str, str]:
        """Парсит raw data файл 23andMe."""
        genotypes = {}
        
        with open(file_path, 'r') as f:
            for line in f:
                if line.startswith('#'):
                    continue
                
                parts = line.strip().split('\t')
                if len(parts) >= 4:
                    rsid = parts[0]
                    genotype = parts[3]
                    
                    if rsid in self.RELEVANT_SNPS:
                        genotypes[rsid] = genotype
        
        return genotypes
    
    def interpret_snps(
        self, 
        genotypes: Dict[str, str]
    ) -> List[Dict]:
        """Интерпретирует SNPs для рекомендаций."""
        interpretations = []
        
        for rsid, genotype in genotypes.items():
            if rsid not in self.RELEVANT_SNPS:
                continue
            
            snp_info = self.RELEVANT_SNPS[rsid]
            interpretation = self._get_interpretation(rsid, genotype)
            
            interpretations.append({
                "rsid": rsid,
                "gene": snp_info["gene"],
                "genotype": genotype,
                "effect": snp_info["effect"],
                "interpretation": interpretation,
            })
        
        return interpretations
    
    def _get_interpretation(self, rsid: str, genotype: str) -> dict:
        """Возвращает интерпретацию для конкретного SNP."""
        # Здесь база интерпретаций
        interpretations_db = {
            "rs762551": {
                "AA": {"metabolism": "fast", "recommendation": "Умеренное потребление кофеина безопасно"},
                "AC": {"metabolism": "intermediate", "recommendation": "Ограничьте кофеин после обеда"},
                "CC": {"metabolism": "slow", "recommendation": "Избегайте кофеина, особенно вечером"},
            },
            # ... другие SNPs
        }
        
        return interpretations_db.get(rsid, {}).get(genotype, {"interpretation": "unknown"})
```

### 8.6 Особенности для России

- ⚠️ 23andMe не отправляет наборы в Россию
- ✅ Можно использовать данные от пользователей, которые уже прошли тест
- 🔄 Альтернативы: Genotek (Россия), Atlas Biomed (EU но работает с РФ)

---

## 9. INVITRO (PDF Parser)

### 9.1 Обзор

**Назначение:** Интерпретация результатов анализов крови  
**Статус:** Нет публичного API — используем PDF парсер

### 9.2 Архитектура решения

```yaml
flow:
  1. Пользователь загружает PDF с результатами
  2. PDF парсер извлекает данные
  3. OCR при необходимости (для отсканированных документов)
  4. Нормализация в структурированный формат
  5. Интерпретация через Lab Interpreter Agent
```

### 9.3 Реализация PDF Parser

```python
import fitz  # PyMuPDF
import re
from typing import Dict, List, Optional
from pydantic import BaseModel

class LabResult(BaseModel):
    """Результат одного анализа."""
    name: str                    # Название показателя
    value: float                 # Значение
    unit: str                    # Единица измерения
    reference_min: Optional[float]  # Нижняя граница нормы
    reference_max: Optional[float]  # Верхняя граница нормы
    status: str                  # normal, low, high

class InvitroParser:
    """
    Парсер PDF результатов INVITRO.
    
    Поддерживает:
    - Общий анализ крови
    - Биохимия крови
    - Гормоны
    - Витамины и микроэлементы
    """
    
    # Паттерны для извлечения данных
    PATTERNS = {
        "value_with_ref": r"(.+?)\s+([\d.,]+)\s*(\S+)\s+([\d.,]+)\s*-\s*([\d.,]+)",
        "value_only": r"(.+?)\s+([\d.,]+)\s*(\S+)",
    }
    
    # Маппинг названий (INVITRO → стандартные)
    NAME_MAPPING = {
        "Гемоглобин": "hemoglobin",
        "Эритроциты": "rbc",
        "Лейкоциты": "wbc",
        "Тромбоциты": "platelets",
        "Глюкоза": "glucose",
        "Креатинин": "creatinine",
        "Общий холестерин": "total_cholesterol",
        "ЛПНП": "ldl",
        "ЛПВП": "hdl",
        "Триглицериды": "triglycerides",
        "АЛТ": "alt",
        "АСТ": "ast",
        "ТТГ": "tsh",
        "Т4 свободный": "free_t4",
        "Витамин D": "vitamin_d",
        "Ферритин": "ferritin",
        "B12": "vitamin_b12",
    }
    
    # Оптимальные диапазоны (не просто референсные!)
    OPTIMAL_RANGES = {
        "hemoglobin": {"min": 14.0, "max": 16.0, "unit": "g/dL"},
        "glucose": {"min": 4.0, "max": 5.0, "unit": "mmol/L"},
        "total_cholesterol": {"min": 3.5, "max": 5.0, "unit": "mmol/L"},
        "vitamin_d": {"min": 50, "max": 80, "unit": "ng/mL"},
        "ferritin": {"min": 50, "max": 150, "unit": "ng/mL"},
        "tsh": {"min": 0.5, "max": 2.0, "unit": "mIU/L"},
    }
    
    def parse_pdf(self, pdf_path: str) -> List[LabResult]:
        """Парсит PDF и извлекает результаты."""
        doc = fitz.open(pdf_path)
        results = []
        
        for page in doc:
            text = page.get_text()
            page_results = self._extract_results(text)
            results.extend(page_results)
        
        doc.close()
        return results
    
    def _extract_results(self, text: str) -> List[LabResult]:
        """Извлекает результаты из текста страницы."""
        results = []
        lines = text.split('\n')
        
        for line in lines:
            # Попробовать разные паттерны
            match = re.match(self.PATTERNS["value_with_ref"], line)
            if match:
                name, value, unit, ref_min, ref_max = match.groups()
                
                # Нормализация названия
                normalized_name = self.NAME_MAPPING.get(
                    name.strip(), 
                    name.strip().lower().replace(' ', '_')
                )
                
                # Парсинг значений
                value_float = float(value.replace(',', '.'))
                ref_min_float = float(ref_min.replace(',', '.'))
                ref_max_float = float(ref_max.replace(',', '.'))
                
                # Определение статуса
                if value_float < ref_min_float:
                    status = "low"
                elif value_float > ref_max_float:
                    status = "high"
                else:
                    status = "normal"
                
                results.append(LabResult(
                    name=normalized_name,
                    value=value_float,
                    unit=unit,
                    reference_min=ref_min_float,
                    reference_max=ref_max_float,
                    status=status,
                ))
        
        return results
    
    def compare_with_optimal(
        self, 
        results: List[LabResult]
    ) -> List[Dict]:
        """Сравнивает результаты с оптимальными диапазонами."""
        comparisons = []
        
        for result in results:
            if result.name in self.OPTIMAL_RANGES:
                optimal = self.OPTIMAL_RANGES[result.name]
                
                if result.value < optimal["min"]:
                    optimal_status = "below_optimal"
                elif result.value > optimal["max"]:
                    optimal_status = "above_optimal"
                else:
                    optimal_status = "optimal"
                
                comparisons.append({
                    "name": result.name,
                    "value": result.value,
                    "unit": result.unit,
                    "reference_status": result.status,
                    "optimal_status": optimal_status,
                    "optimal_range": f"{optimal['min']}-{optimal['max']}",
                })
        
        return comparisons
```

### 9.4 Будущее: Партнёрство с INVITRO

```yaml
partnership_opportunity:
  contact: Menedzhery_DKP-lidy@invitro.ru
  services:
    - API доступ к результатам (под NDA)
    - White-label интеграция
    - Реферальная программа (5-8%)
  requirements:
    - Медицинская лицензия или партнёрство с клиникой
    - Соблюдение 152-ФЗ
    - Договор о неразглашении
```

---

## 10. TruDiagnostic (PDF Upload)

### 10.1 Обзор

**Назначение:** Эпигенетический возраст, биологический возраст  
**Статус:** Нет публичного API — ручной upload PDF

### 10.2 Данные TruAge Report

```yaml
available_metrics:
  - OMICm Age (биологический возраст)
  - TruAge Pace (скорость старения)
  - Immune Age
  - Telomere Length estimate
  - Smoking/Alcohol signatures
  - Fitness indicators
  
data_format:
  - PDF report (основной)
  - Raw methylation data (IDAT files, по запросу)
```

### 10.3 Реализация

```python
from typing import Dict
import fitz

class TruDiagnosticParser:
    """Парсер TruDiagnostic PDF отчётов."""
    
    def parse_truage_report(self, pdf_path: str) -> Dict:
        """Извлекает ключевые метрики из TruAge отчёта."""
        doc = fitz.open(pdf_path)
        text = ""
        
        for page in doc:
            text += page.get_text()
        
        doc.close()
        
        return {
            "omic_age": self._extract_omic_age(text),
            "truage_pace": self._extract_pace(text),
            "chronological_age": self._extract_chrono_age(text),
            "biological_age_delta": self._calculate_delta(text),
        }
    
    def _extract_omic_age(self, text: str) -> float:
        """Извлекает OMICm Age."""
        # Паттерн поиска в PDF
        import re
        match = re.search(r"OMICm Age[:\s]+(\d+\.?\d*)", text)
        if match:
            return float(match.group(1))
        return None
    
    def _extract_pace(self, text: str) -> float:
        """Извлекает TruAge Pace (скорость старения)."""
        import re
        match = re.search(r"Pace of Aging[:\s]+(\d+\.?\d*)", text)
        if match:
            return float(match.group(1))
        return None
```

---

## 11. Cambridge Brain Sciences

### 11.1 Обзор

**Назначение:** Когнитивные тесты, C-Score  
**Статус:** B2B API, требует контракт

### 11.2 Доступные инструменты

```yaml
cognitive_domains:
  - Reasoning (проблемное мышление)
  - Short-term Memory (рабочая память)
  - Verbal Ability (вербальные способности)

tests:
  - Spatial Span (memory)
  - Token Search (memory)
  - Paired Associates (memory)
  - Grammatical Reasoning (reasoning)
  - Odd One Out (reasoning)
  - Spatial Rotations (reasoning)
  - Feature Match (verbal)
  - Digit Span (verbal)
```

### 11.3 Альтернатива: CBS Toolkit (Open Source)

```yaml
repository: https://github.com/TheOwenLab/cbs-toolkit
purpose: Research data processing
features:
  - Python scripts for CBS data
  - Docker container
  - Data normalization
```

### 11.4 План интеграции

```yaml
phase_1_mvp:
  approach: Manual data entry
  flow:
    1. Пользователь проходит тесты на cambridgebrainsciences.com
    2. Вводит результаты (C-Score, domain scores) в BIOMAX
    3. Cognitive Agent анализирует и даёт рекомендации

phase_2_partnership:
  approach: API интеграция
  contact: Cambridge Brain Sciences sales team
  requirements:
    - B2B contract
    - Volume commitment
    - Data processing agreement
```

---

## 12. Рекомендации по приоритизации

### 12.1 MVP Phase (Month 1-2)

| Интеграция | Подход | Сложность | Блокеры |
|------------|--------|-----------|---------|
| **Oura Ring** | Full API | Low | Нет |
| **Strava** | Full API | Low | Нет |
| **PubMed** | Full API | Low | Нет |
| **DrugBank** | Full API | Medium | 💰 Бюджет |
| **INVITRO** | PDF Parser | Medium | OCR quality |

### 12.2 Phase 2 (Month 3-4)

| Интеграция | Подход | Сложность | Блокеры |
|------------|--------|-----------|---------|
| **MyFitnessPal** | API (if approved) / Alt | Medium | ⚠️ Approval |
| **23andMe** | Raw data parser | Medium | User adoption |
| **TruDiagnostic** | PDF Parser | Low | User adoption |

### 12.3 Phase 3 (Month 5+)

| Интеграция | Подход | Сложность | Блокеры |
|------------|--------|-----------|---------|
| **Cambridge Brain** | Manual → API | High | 💰 B2B contract |
| **INVITRO API** | Partnership | High | 🤝 Negotiations |

---

## 13. Риски и митигации

| Риск | Вероятность | Влияние | Митигация |
|------|-------------|---------|-----------|
| MyFitnessPal не одобрит API | Medium | Medium | Open Food Facts fallback |
| DrugBank дорого | Low | High | Начать с OpenFDA |
| INVITRO PDF нечитаемый | Medium | Medium | OCR + manual fallback |
| 23andMe API откажут | High | Medium | Raw data parser готов |
| Oura/Strava изменят API | Low | High | Версионирование, мониторинг |
| Rate limits | Medium | Medium | Caching, webhooks |

---

## 14. Заключение

Для MVP BIOMAX AI рекомендуется:

1. **Немедленно интегрировать:** Oura, Strava, PubMed (бесплатные, документированные)
2. **Приобрести лицензию:** DrugBank (критично для Safety Agent)
3. **Реализовать парсеры:** INVITRO PDF, 23andMe raw data
4. **Отложить:** Cambridge Brain Sciences (начать с manual input)
5. **Вести переговоры:** INVITRO partnership, MyFitnessPal approval

Общий бюджет на API (месяц): **~$500-1000** (DrugBank) + potential MyFitnessPal enterprise
