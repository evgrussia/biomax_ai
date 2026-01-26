# LangGraph Architecture for BIOMAX AI Multi-Agent System

## Техническое исследование архитектуры мультиагентной системы

**Дата:** 2026-01-26  
**Версия:** 1.0  
**Статус:** Discovery Phase

---

## 1. Executive Summary

BIOMAX AI требует оркестрации 15 специализированных AI-агентов для управления различными аспектами здоровья пользователя. На основе исследования рекомендуется использовать **LangGraph** с паттерном **Hierarchical Supervisor** для оркестрации, **PostgresSaver** для персистентности состояния, и интеграцию с **GigaChat Pro** (primary) / **YandexGPT** (fallback) в качестве LLM провайдеров.

---

## 2. Архитектурные паттерны LangGraph

### 2.1 Рекомендуемый паттерн: Hierarchical Supervisor

```
                    ┌─────────────────────────────────────┐
                    │         ORCHESTRATOR AGENT          │
                    │   (Top-Level Supervisor)            │
                    │   - User intent classification      │
                    │   - Task decomposition              │
                    │   - Cross-agent synthesis           │
                    └─────────────────┬───────────────────┘
                                      │
          ┌───────────────────────────┼───────────────────────────┐
          │                           │                           │
          ▼                           ▼                           ▼
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│  HEALTH TEAM    │       │  DATA TEAM      │       │  SAFETY TEAM    │
│  (Sub-Supervisor)│      │  (Sub-Supervisor)│      │  (Sub-Supervisor)│
└────────┬────────┘       └────────┬────────┘       └────────┬────────┘
         │                         │                         │
    ┌────┼────┐               ┌────┼────┐               ┌────┼────┐
    ▼    ▼    ▼               ▼    ▼    ▼               ▼    ▼    ▼
┌──────┐┌──────┐┌──────┐ ┌──────┐┌──────┐┌──────┐ ┌──────┐┌──────┐
│Sleep ││Nutri-││Fitness││Data  ││Lab   ││Geno- │ │Safety││Rese- │
│Agent ││tion  ││Agent  ││Scien-││Inter-││mics  │ │Agent ││arch  │
│      ││Agent ││       ││tist  ││preter││Agent │ │      ││Agent │
└──────┘└──────┘└──────┘ └──────┘└──────┘└──────┘ └──────┘└──────┘
```

### 2.2 Обоснование выбора

| Паттерн | Pros | Cons | Применимость |
|---------|------|------|--------------|
| **Flat Supervisor** | Простота, минимум накладных расходов | Bottleneck при 15+ агентах | ❌ Не рекомендуется |
| **Hierarchical Supervisor** | Масштабируемость, изоляция команд, параллельная обработка | Сложнее реализация | ✅ **Рекомендуется** |
| **Agent Swarm** | Децентрализация | Сложность отладки, хаос | ❌ Слишком рано |
| **ReAct Loop** | Простота для одного агента | Не подходит для мультиагентов | ❌ Не применимо |

### 2.3 Группировка агентов по командам

```yaml
teams:
  health_optimization_team:
    supervisor: "HealthTeamSupervisor"
    agents:
      - nutrition_agent      # Питание, нутригеномика
      - sleep_agent          # Сон, циркадные ритмы
      - cognitive_agent      # Когнитивные функции, ноотропы
      - fitness_agent        # Тренировки, восстановление
      - mental_health_agent  # Стресс, тревожность
      - longevity_agent      # Антистарение, биовозраст
    focus: "Оптимизация здоровья и lifestyle recommendations"

  data_analysis_team:
    supervisor: "DataTeamSupervisor"  
    agents:
      - data_scientist_agent  # Паттерны, корреляции
      - lab_interpreter_agent # Анализы крови
      - genomics_agent        # ДНК, SNP
      - integration_agent     # Синтез данных
    focus: "Анализ и интерпретация данных"

  safety_research_team:
    supervisor: "SafetyTeamSupervisor"
    agents:
      - safety_agent          # Контрпоказания, взаимодействия
      - research_agent        # Научные исследования
      - custom_protocol_agent # Пользовательские протоколы
    focus: "Безопасность и научная верификация"

  user_facing_team:
    supervisor: "UserTeamSupervisor"
    agents:
      - coach_agent           # Мотивация, привычки
    focus: "Пользовательское взаимодействие"
```

---

## 3. State Management

### 3.1 Глобальная схема состояния

```python
from typing import TypedDict, Annotated, Literal, Optional
from langgraph.graph import MessagesState
from langgraph.graph.message import add_messages
from operator import add
from datetime import datetime
from pydantic import BaseModel

# ═══════════════════════════════════════════════════════════════════════════════
# CORE STATE SCHEMA
# ═══════════════════════════════════════════════════════════════════════════════

class UserProfile(BaseModel):
    """Профиль пользователя для персонализации."""
    user_id: str
    age: Optional[int] = None
    gender: Optional[str] = None
    health_goals: list[str] = []
    conditions: list[str] = []      # Текущие заболевания/состояния
    medications: list[str] = []     # Текущие препараты
    allergies: list[str] = []
    preferences: dict = {}          # Диетические предпочтения, etc.

class HealthMetrics(BaseModel):
    """Агрегированные метрики здоровья."""
    sleep_score: Optional[float] = None
    hrv: Optional[float] = None
    resting_hr: Optional[int] = None
    activity_score: Optional[float] = None
    readiness_score: Optional[float] = None
    stress_level: Optional[float] = None
    last_updated: Optional[datetime] = None

class SafetyContext(BaseModel):
    """Контекст безопасности для проверок."""
    contraindications: list[str] = []
    drug_interactions: list[dict] = []
    red_flags: list[str] = []
    warnings: list[str] = []
    approved: bool = True

class BiomaxAgentState(MessagesState):
    """
    Главная схема состояния для BIOMAX AI.
    Наследует MessagesState для управления историей сообщений.
    """
    # ─── User Context ─────────────────────────────────────────────────────
    user_profile: UserProfile
    health_metrics: HealthMetrics
    
    # ─── Routing & Orchestration ──────────────────────────────────────────
    current_agent: str = "orchestrator"
    next_agent: Optional[str] = None
    active_team: Optional[str] = None
    
    # ─── Task Management ──────────────────────────────────────────────────
    current_task: Optional[str] = None
    task_context: dict = {}
    
    # ─── Agent Outputs (Append semantics) ─────────────────────────────────
    agent_responses: Annotated[list[dict], add] = []
    recommendations: Annotated[list[dict], add] = []
    
    # ─── Data from Integrations ───────────────────────────────────────────
    oura_data: Optional[dict] = None
    strava_data: Optional[dict] = None
    nutrition_data: Optional[dict] = None
    lab_results: Optional[dict] = None
    genetic_data: Optional[dict] = None
    
    # ─── Safety Layer ─────────────────────────────────────────────────────
    safety_context: SafetyContext = SafetyContext()
    
    # ─── RAG Context ──────────────────────────────────────────────────────
    retrieved_documents: Annotated[list[dict], add] = []
    knowledge_base_refs: list[str] = []
    
    # ─── Session Metadata ─────────────────────────────────────────────────
    session_id: str
    thread_id: str
    created_at: datetime
    
    # ─── Error Handling ───────────────────────────────────────────────────
    errors: Annotated[list[str], add] = []
    fallback_triggered: bool = False
```

### 3.2 Custom Reducers

```python
from typing import Annotated

def merge_health_metrics(current: HealthMetrics, update: HealthMetrics) -> HealthMetrics:
    """Мержит метрики здоровья, сохраняя последние значения."""
    merged = current.model_copy()
    for field, value in update.model_dump(exclude_none=True).items():
        setattr(merged, field, value)
    merged.last_updated = datetime.utcnow()
    return merged

def priority_recommendations(current: list, new: list) -> list:
    """Сохраняет топ-10 рекомендаций по приоритету."""
    combined = current + new
    sorted_recs = sorted(combined, key=lambda x: x.get('priority', 0), reverse=True)
    return sorted_recs[:10]

class OptimizedState(BiomaxAgentState):
    """State с оптимизированными reducers."""
    health_metrics: Annotated[HealthMetrics, merge_health_metrics]
    recommendations: Annotated[list[dict], priority_recommendations]
```

---

## 4. Routing и Orchestration

### 4.1 Intent Classification

```python
from typing import Literal
from langchain_core.messages import HumanMessage

INTENT_CATEGORIES = Literal[
    "sleep_optimization",
    "nutrition_advice", 
    "fitness_planning",
    "cognitive_enhancement",
    "lab_interpretation",
    "supplement_safety",
    "protocol_creation",
    "general_health",
    "data_analysis",
    "longevity_planning"
]

INTENT_TO_TEAM = {
    "sleep_optimization": "health_optimization_team",
    "nutrition_advice": "health_optimization_team",
    "fitness_planning": "health_optimization_team",
    "cognitive_enhancement": "health_optimization_team",
    "longevity_planning": "health_optimization_team",
    "lab_interpretation": "data_analysis_team",
    "data_analysis": "data_analysis_team",
    "supplement_safety": "safety_research_team",
    "protocol_creation": "safety_research_team",
    "general_health": "user_facing_team",
}

INTENT_TO_PRIMARY_AGENT = {
    "sleep_optimization": "sleep_agent",
    "nutrition_advice": "nutrition_agent",
    "fitness_planning": "fitness_agent",
    "cognitive_enhancement": "cognitive_agent",
    "longevity_planning": "longevity_agent",
    "lab_interpretation": "lab_interpreter_agent",
    "data_analysis": "data_scientist_agent",
    "supplement_safety": "safety_agent",
    "protocol_creation": "custom_protocol_agent",
    "general_health": "coach_agent",
}
```

### 4.2 Orchestrator Node

```python
from langgraph.types import Command

async def orchestrator_node(state: BiomaxAgentState) -> Command:
    """
    Главный оркестратор BIOMAX AI.
    Классифицирует intent и направляет к нужной команде/агенту.
    """
    last_message = state["messages"][-1]
    
    # 1. Классификация intent через LLM
    intent = await classify_intent(last_message.content, state["user_profile"])
    
    # 2. Определение команды и агента
    team = INTENT_TO_TEAM.get(intent, "user_facing_team")
    primary_agent = INTENT_TO_PRIMARY_AGENT.get(intent, "coach_agent")
    
    # 3. Проверка необходимости Safety check
    needs_safety = intent in ["supplement_safety", "protocol_creation", "nutrition_advice"]
    
    # 4. Формирование task context
    task_context = {
        "intent": intent,
        "requires_safety_check": needs_safety,
        "user_query": last_message.content,
        "relevant_metrics": extract_relevant_metrics(state["health_metrics"], intent),
    }
    
    return Command(
        update={
            "current_agent": "orchestrator",
            "next_agent": primary_agent,
            "active_team": team,
            "current_task": intent,
            "task_context": task_context,
        },
        goto=team  # Переход к команде
    )

def route_by_team(state: BiomaxAgentState) -> str:
    """Роутинг на уровне команд."""
    team = state.get("active_team")
    if team == "health_optimization_team":
        return "health_team_supervisor"
    elif team == "data_analysis_team":
        return "data_team_supervisor"
    elif team == "safety_research_team":
        return "safety_team_supervisor"
    else:
        return "coach_agent"
```

### 4.3 Team Supervisor Pattern

```python
async def health_team_supervisor(state: BiomaxAgentState) -> Command:
    """
    Supervisor для Health Optimization Team.
    Координирует агентов внутри команды.
    """
    target_agent = state["next_agent"]
    task = state["current_task"]
    
    # Определяем нужна ли мультиагентная обработка
    if task == "sleep_optimization" and state["health_metrics"].stress_level > 7:
        # Привлекаем mental_health_agent для stress-связанных проблем сна
        return Command(
            update={"agent_sequence": ["sleep_agent", "mental_health_agent"]},
            goto="sleep_agent"
        )
    
    if task == "nutrition_advice" and state.get("genetic_data"):
        # Привлекаем genomics_agent для нутригеномики
        return Command(
            update={"agent_sequence": ["nutrition_agent", "genomics_agent"]},
            goto="nutrition_agent"
        )
    
    # Стандартный роутинг к одному агенту
    return Command(goto=target_agent)
```

---

## 5. Memory и Persistence

### 5.1 Checkpointing с PostgreSQL

```python
from psycopg_pool import ConnectionPool
from langgraph.checkpoint.postgres import PostgresSaver

# ═══════════════════════════════════════════════════════════════════════════════
# PRODUCTION CHECKPOINTER SETUP
# ═══════════════════════════════════════════════════════════════════════════════

def create_checkpointer(db_url: str) -> PostgresSaver:
    """
    Создаёт PostgresSaver с connection pooling для production.
    
    Важно:
    - autocommit=True для корректного создания таблиц
    - ConnectionPool для управления соединениями в long-running workflows
    """
    pool = ConnectionPool(
        conninfo=db_url,
        min_size=5,
        max_size=20,
        max_idle=300.0,  # 5 минут idle timeout
        kwargs={
            "autocommit": True,
            "row_factory": dict_row,
        }
    )
    
    checkpointer = PostgresSaver(pool)
    checkpointer.setup()  # Создаёт необходимые таблицы
    
    return checkpointer

# Usage
POSTGRES_URL = "postgresql://biomax:password@postgres:5432/biomax_ai"
checkpointer = create_checkpointer(POSTGRES_URL)

graph = builder.compile(checkpointer=checkpointer)
```

### 5.2 Thread Management

```python
from datetime import datetime, timedelta

class ThreadManager:
    """Управление потоками (threads) для пользователей."""
    
    def __init__(self, checkpointer: PostgresSaver):
        self.checkpointer = checkpointer
    
    def get_or_create_thread(self, user_id: str, session_type: str = "chat") -> str:
        """
        Возвращает существующий thread_id или создаёт новый.
        
        session_type:
        - "chat": обычный диалог (TTL: 24 часа)
        - "protocol": выполнение протокола (TTL: 30 дней)
        - "experiment": N=1 эксперимент (TTL: 90 дней)
        """
        thread_id = f"{user_id}-{session_type}-{datetime.utcnow().strftime('%Y%m%d')}"
        return thread_id
    
    def get_conversation_history(self, thread_id: str, limit: int = 20):
        """Получает историю разговора для thread."""
        config = {"configurable": {"thread_id": thread_id}}
        states = list(self.checkpointer.list(config, limit=limit))
        return states
    
    def cleanup_old_threads(self, max_age_days: int = 30):
        """Очистка старых threads для экономии хранилища."""
        # Реализация зависит от конкретной схемы БД
        pass
```

### 5.3 Long-term Memory с Qdrant

```python
from qdrant_client import QdrantClient
from langchain.embeddings import HuggingFaceEmbeddings

class LongTermMemory:
    """
    Долгосрочная память для важных инсайтов и персонализации.
    Использует Qdrant для семантического поиска.
    """
    
    def __init__(self, qdrant_url: str):
        self.client = QdrantClient(url=qdrant_url)
        self.embeddings = HuggingFaceEmbeddings(
            model_name="intfloat/multilingual-e5-large"  # Поддержка русского
        )
        self.collection_name = "user_memories"
    
    async def store_insight(
        self, 
        user_id: str, 
        insight: str, 
        insight_type: str,
        metadata: dict = None
    ):
        """
        Сохраняет важный инсайт в долгосрочную память.
        
        insight_type: "health_pattern", "preference", "contraindication", "goal"
        """
        embedding = await self.embeddings.aembed_query(insight)
        
        point = {
            "id": generate_uuid(),
            "vector": embedding,
            "payload": {
                "user_id": user_id,
                "insight": insight,
                "type": insight_type,
                "timestamp": datetime.utcnow().isoformat(),
                **(metadata or {})
            }
        }
        
        self.client.upsert(
            collection_name=self.collection_name,
            points=[point]
        )
    
    async def recall_relevant(
        self, 
        user_id: str, 
        query: str, 
        limit: int = 5
    ) -> list[str]:
        """Вспоминает релевантные инсайты из памяти."""
        embedding = await self.embeddings.aembed_query(query)
        
        results = self.client.search(
            collection_name=self.collection_name,
            query_vector=embedding,
            query_filter={
                "must": [{"key": "user_id", "match": {"value": user_id}}]
            },
            limit=limit
        )
        
        return [hit.payload["insight"] for hit in results]
```

---

## 6. Tool Development

### 6.1 Структура Tools для агентов

```python
from langchain.tools import tool
from pydantic import BaseModel, Field

# ═══════════════════════════════════════════════════════════════════════════════
# OURA RING TOOLS (Sleep Agent)
# ═══════════════════════════════════════════════════════════════════════════════

class OuraSleepInput(BaseModel):
    """Input для получения данных сна."""
    start_date: str = Field(description="Начальная дата в формате YYYY-MM-DD")
    end_date: str = Field(description="Конечная дата в формате YYYY-MM-DD")

@tool(args_schema=OuraSleepInput)
async def get_oura_sleep_data(start_date: str, end_date: str) -> dict:
    """
    Получает данные о сне из Oura Ring API.
    
    Включает: общее время сна, эффективность, фазы сна (REM, глубокий, лёгкий),
    HRV во сне, частоту дыхания, температуру тела.
    
    Используй этот инструмент когда пользователь спрашивает о качестве сна,
    паттернах сна, или когда нужны данные для анализа восстановления.
    """
    # Реализация вызова Oura API
    return await oura_client.get_sleep(start_date, end_date)

# ═══════════════════════════════════════════════════════════════════════════════
# PUBMED TOOLS (Research Agent)
# ═══════════════════════════════════════════════════════════════════════════════

class PubMedSearchInput(BaseModel):
    """Input для поиска в PubMed."""
    query: str = Field(description="Поисковый запрос (на английском)")
    max_results: int = Field(default=10, description="Максимальное количество результатов")

@tool(args_schema=PubMedSearchInput)
async def search_pubmed(query: str, max_results: int = 10) -> list[dict]:
    """
    Ищет научные статьи в PubMed по запросу.
    
    Возвращает: PMID, название, авторы, абстракт, дата публикации, DOI.
    
    Используй этот инструмент для:
    - Поиска научных доказательств для рекомендаций
    - Проверки эффективности добавок и интервенций
    - Получения последних исследований по теме
    """
    return await pubmed_client.search(query, max_results)

# ═══════════════════════════════════════════════════════════════════════════════
# DRUGBANK TOOLS (Safety Agent)
# ═══════════════════════════════════════════════════════════════════════════════

class DrugInteractionInput(BaseModel):
    """Input для проверки взаимодействий."""
    substances: list[str] = Field(description="Список веществ для проверки")

@tool(args_schema=DrugInteractionInput)
async def check_drug_interactions(substances: list[str]) -> dict:
    """
    Проверяет взаимодействия между веществами через DrugBank API.
    
    Возвращает:
    - interactions: список найденных взаимодействий
    - severity: уровень серьёзности (minor, moderate, major, contraindicated)
    - description: описание взаимодействия
    - recommendation: рекомендация
    
    КРИТИЧЕСКИ ВАЖНО: всегда вызывай этот инструмент перед рекомендацией
    любых добавок или препаратов пользователю.
    """
    return await drugbank_client.check_interactions(substances)
```

### 6.2 Tool Registry по агентам

```python
AGENT_TOOLS = {
    "sleep_agent": [
        get_oura_sleep_data,
        get_oura_readiness,
        analyze_sleep_patterns,
        get_circadian_recommendations,
    ],
    
    "nutrition_agent": [
        get_myfitnesspal_diary,
        search_food_database,
        calculate_macros,
        get_nutrient_recommendations,
    ],
    
    "fitness_agent": [
        get_strava_activities,
        get_strava_stats,
        analyze_training_load,
        get_recovery_recommendations,
    ],
    
    "research_agent": [
        search_pubmed,
        get_article_details,
        summarize_research,
        check_evidence_level,
    ],
    
    "safety_agent": [
        check_drug_interactions,
        get_contraindications,
        validate_supplement_safety,
        check_condition_compatibility,
    ],
    
    "lab_interpreter_agent": [
        parse_lab_results_pdf,
        interpret_biomarkers,
        compare_with_optimal_ranges,
        track_biomarker_trends,
    ],
    
    "genomics_agent": [
        parse_23andme_raw_data,
        get_snp_interpretations,
        get_nutrigenomic_recommendations,
    ],
    
    "orchestrator": [
        route_to_agent,
        synthesize_responses,
        create_action_plan,
    ],
}
```

---

## 7. Error Handling и Fallback

### 7.1 LLM Fallback Chain

```python
from langchain_gigachat import GigaChat
from langchain_community.chat_models import ChatYandexGPT
from langchain_core.runnables import RunnableLambda

def create_llm_with_fallback():
    """
    Создаёт LLM с автоматическим fallback.
    Primary: GigaChat Pro
    Fallback: YandexGPT
    """
    primary = GigaChat(
        credentials=os.getenv("GIGACHAT_CREDENTIALS"),
        model="GigaChat-Pro",
        verify_ssl_certs=False,
        timeout=30,
        max_tokens=4096,
    )
    
    fallback = ChatYandexGPT(
        api_key=os.getenv("YANDEX_API_KEY"),
        folder_id=os.getenv("YANDEX_FOLDER_ID"),
        model_uri="gpt://folder_id/yandexgpt/latest",
    )
    
    # Fallback chain
    llm = primary.with_fallbacks([fallback])
    
    return llm
```

### 7.2 Graceful Degradation

```python
from langgraph.managed import RemainingSteps
from tenacity import retry, stop_after_attempt, wait_exponential

class ErrorHandlingMixin:
    """Миксин для обработки ошибок в агентах."""
    
    @retry(
        stop=stop_after_attempt(3),
        wait=wait_exponential(multiplier=1, min=2, max=10),
    )
    async def call_with_retry(self, func, *args, **kwargs):
        """Вызов функции с retry и exponential backoff."""
        return await func(*args, **kwargs)
    
    def handle_api_error(self, error: Exception, agent_name: str) -> dict:
        """Graceful handling API ошибок."""
        error_msg = str(error)
        
        if "rate_limit" in error_msg.lower():
            return {
                "status": "rate_limited",
                "message": f"API {agent_name} временно недоступен. Попробуйте позже.",
                "retry_after": 60,
            }
        
        if "timeout" in error_msg.lower():
            return {
                "status": "timeout",
                "message": f"Превышено время ожидания ответа от {agent_name}.",
                "fallback_used": True,
            }
        
        return {
            "status": "error",
            "message": "Произошла непредвиденная ошибка. Наши специалисты уже работают над её устранением.",
            "error_logged": True,
        }

async def agent_with_graceful_degradation(state: BiomaxAgentState) -> dict:
    """Агент с graceful degradation при исчерпании лимитов."""
    remaining = state.get("remaining_steps", 10)
    
    if remaining <= 2:
        # Близки к лимиту — даём best effort ответ
        return {
            "messages": [AIMessage(
                content="Я собрал достаточно информации для предварительных рекомендаций. "
                        "Вот что я могу сказать на данный момент: ..."
            )],
            "fallback_triggered": True,
        }
    
    # Нормальная обработка
    return await normal_processing(state)
```

---

## 8. Пример конфигурации агентов

### 8.1 Sleep Agent

```python
from langgraph.graph import StateGraph, START, END
from langgraph.prebuilt import ToolNode

def build_sleep_agent() -> StateGraph:
    """
    Строит граф для Sleep Agent.
    
    Capabilities:
    - Анализ качества сна через Oura Ring
    - Рекомендации по улучшению сна
    - Оптимизация циркадных ритмов
    - Корреляция сна с другими метриками
    """
    
    builder = StateGraph(SleepAgentState)
    
    # Nodes
    builder.add_node("analyze_sleep", analyze_sleep_node)
    builder.add_node("fetch_oura_data", fetch_oura_data_node)
    builder.add_node("generate_recommendations", generate_recommendations_node)
    builder.add_node("tools", ToolNode(tools=AGENT_TOOLS["sleep_agent"]))
    
    # Edges
    builder.add_edge(START, "fetch_oura_data")
    builder.add_edge("fetch_oura_data", "analyze_sleep")
    builder.add_conditional_edges(
        "analyze_sleep",
        route_sleep_analysis,
        {
            "need_more_data": "tools",
            "ready_to_recommend": "generate_recommendations",
        }
    )
    builder.add_edge("tools", "analyze_sleep")
    builder.add_edge("generate_recommendations", END)
    
    return builder.compile()

# Sleep Agent State
class SleepAgentState(TypedDict):
    messages: Annotated[list, add_messages]
    oura_sleep_data: Optional[dict]
    sleep_analysis: Optional[dict]
    recommendations: list[str]
    user_profile: UserProfile
```

### 8.2 Nutrition Agent

```python
def build_nutrition_agent() -> StateGraph:
    """
    Строит граф для Nutrition Agent.
    
    Capabilities:
    - Анализ питания через MyFitnessPal
    - Нутригеномические рекомендации
    - Оптимизация макро/микронутриентов
    - Meal planning
    """
    
    builder = StateGraph(NutritionAgentState)
    
    # Nodes
    builder.add_node("fetch_nutrition_data", fetch_nutrition_data_node)
    builder.add_node("analyze_diet", analyze_diet_node)
    builder.add_node("check_genetic_factors", check_genetic_factors_node)
    builder.add_node("generate_recommendations", generate_nutrition_recommendations_node)
    builder.add_node("safety_check", safety_check_node)  # Проверка через Safety Agent
    builder.add_node("tools", ToolNode(tools=AGENT_TOOLS["nutrition_agent"]))
    
    # Flow: data → analysis → genetics → safety → recommendations
    builder.add_edge(START, "fetch_nutrition_data")
    builder.add_edge("fetch_nutrition_data", "analyze_diet")
    builder.add_conditional_edges(
        "analyze_diet",
        should_check_genetics,
        {
            "yes": "check_genetic_factors",
            "no": "safety_check",
        }
    )
    builder.add_edge("check_genetic_factors", "safety_check")
    builder.add_edge("safety_check", "generate_recommendations")
    builder.add_edge("generate_recommendations", END)
    
    return builder.compile()
```

### 8.3 Orchestrator Agent

```python
def build_orchestrator() -> StateGraph:
    """
    Главный Orchestrator Agent.
    Координирует все команды и агентов.
    """
    
    builder = StateGraph(BiomaxAgentState)
    
    # ─── Core Nodes ───────────────────────────────────────────────────────
    builder.add_node("intake", intake_node)
    builder.add_node("classify_intent", classify_intent_node)
    builder.add_node("route_to_team", route_to_team_node)
    builder.add_node("synthesize", synthesize_node)
    builder.add_node("safety_review", safety_review_node)
    builder.add_node("respond", respond_node)
    
    # ─── Team Subgraphs ───────────────────────────────────────────────────
    builder.add_node("health_team", build_health_team())
    builder.add_node("data_team", build_data_team())
    builder.add_node("safety_team", build_safety_team())
    builder.add_node("user_team", build_user_team())
    
    # ─── Flow ─────────────────────────────────────────────────────────────
    builder.add_edge(START, "intake")
    builder.add_edge("intake", "classify_intent")
    builder.add_conditional_edges(
        "classify_intent",
        route_by_intent,
        {
            "health_optimization_team": "health_team",
            "data_analysis_team": "data_team",
            "safety_research_team": "safety_team",
            "user_facing_team": "user_team",
        }
    )
    
    # Все команды возвращаются к синтезу
    builder.add_edge("health_team", "synthesize")
    builder.add_edge("data_team", "synthesize")
    builder.add_edge("safety_team", "synthesize")
    builder.add_edge("user_team", "synthesize")
    
    # После синтеза — safety review для рекомендаций
    builder.add_conditional_edges(
        "synthesize",
        needs_safety_review,
        {
            "yes": "safety_review",
            "no": "respond",
        }
    )
    builder.add_edge("safety_review", "respond")
    builder.add_edge("respond", END)
    
    return builder.compile(checkpointer=checkpointer)
```

---

## 9. Интеграция с GigaChat / YandexGPT

### 9.1 GigaChat Configuration

```python
from langchain_gigachat import GigaChat

def create_gigachat_llm(
    model: str = "GigaChat-Pro",
    temperature: float = 0.7,
    max_tokens: int = 4096,
) -> GigaChat:
    """
    Создаёт инстанс GigaChat для использования в агентах.
    
    Модели:
    - GigaChat: базовая модель
    - GigaChat-Plus: улучшенная
    - GigaChat-Pro: максимальное качество (рекомендуется для BIOMAX)
    """
    return GigaChat(
        credentials=os.getenv("GIGACHAT_CREDENTIALS"),
        model=model,
        temperature=temperature,
        max_tokens=max_tokens,
        verify_ssl_certs=False,  # Для self-signed сертификатов
        timeout=30,
        profanity_check=True,    # Фильтр контента
    )
```

### 9.2 YandexGPT Configuration

```python
from langchain_community.chat_models import ChatYandexGPT

def create_yandexgpt_llm(
    model: str = "yandexgpt/latest",
    temperature: float = 0.7,
) -> ChatYandexGPT:
    """
    Создаёт инстанс YandexGPT для fallback.
    
    Модели:
    - yandexgpt-lite: быстрая, дешёвая
    - yandexgpt/latest: актуальная версия
    """
    folder_id = os.getenv("YANDEX_FOLDER_ID")
    
    return ChatYandexGPT(
        api_key=os.getenv("YANDEX_API_KEY"),
        folder_id=folder_id,
        model_uri=f"gpt://{folder_id}/{model}",
        temperature=temperature,
    )
```

---

## 10. Рекомендации по реализации

### 10.1 Приоритеты разработки

| Приоритет | Компонент | Обоснование |
|-----------|-----------|-------------|
| P0 | Orchestrator Agent | Ядро системы, без него ничего не работает |
| P0 | State Schema + PostgresSaver | Persistence критична для UX |
| P0 | GigaChat интеграция | Primary LLM |
| P1 | Sleep Agent + Oura | Самый востребованный use case |
| P1 | Safety Agent + DrugBank | Критично для безопасности |
| P1 | Nutrition Agent + MFP | Высокий user engagement |
| P2 | Research Agent + PubMed | Научная верификация |
| P2 | Lab Interpreter (PDF parser) | INVITRO не имеет API |
| P3 | Остальные агенты | После валидации core flow |

### 10.2 Технические рекомендации

1. **State Management:**
   - Использовать отдельные Input/Output schemas для чистого API
   - Применять custom reducers для контроля размера state
   - Имплементировать TTL для checkpoints (30 дней default)

2. **Scalability:**
   - Каждая команда агентов — отдельный subgraph (можно масштабировать независимо)
   - Connection pooling для PostgreSQL (min: 5, max: 20)
   - Кэширование RAG embeddings в Redis

3. **Observability:**
   - Интеграция с LangSmith для трейсинга
   - Custom metadata для каждого агента
   - Метрики latency и token usage

4. **Security:**
   - Sanitization всех user inputs
   - Rate limiting на уровне агентов
   - Audit log для Safety Agent решений

---

## 11. Архитектурная диаграмма

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              BIOMAX AI MULTI-AGENT SYSTEM                        │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐              │
│  │  Telegram Bot   │    │  Telegram WebApp│    │  Flutter Mobile │              │
│  └────────┬────────┘    └────────┬────────┘    └────────┬────────┘              │
│           │                      │                      │                        │
│           └──────────────────────┼──────────────────────┘                        │
│                                  ▼                                               │
│  ┌───────────────────────────────────────────────────────────────────────────┐  │
│  │                           API Gateway (FastAPI + Kong)                     │  │
│  └───────────────────────────────────────────────────────────────────────────┘  │
│                                  │                                               │
│                                  ▼                                               │
│  ┌───────────────────────────────────────────────────────────────────────────┐  │
│  │                        ORCHESTRATOR AGENT (LangGraph)                      │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │  │
│  │  │   Intake    │→ │  Classify   │→ │   Route     │→ │  Synthesize │       │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘       │  │
│  └───────────────────────────────────────────────────────────────────────────┘  │
│                    │                │                │                │          │
│         ┌──────────┘       ┌────────┘       ┌────────┘       ┌────────┘          │
│         ▼                  ▼                ▼                ▼                   │
│  ┌─────────────┐    ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           │
│  │ Health Team │    │ Data Team   │  │ Safety Team │  │ User Team   │           │
│  │ ┌─────────┐ │    │ ┌─────────┐ │  │ ┌─────────┐ │  │ ┌─────────┐ │           │
│  │ │ Sleep   │ │    │ │DataSci  │ │  │ │ Safety  │ │  │ │ Coach   │ │           │
│  │ │Nutrition│ │    │ │Lab Intr │ │  │ │Research │ │  │ └─────────┘ │           │
│  │ │Fitness  │ │    │ │Genomics │ │  │ │Protocol │ │  └─────────────┘           │
│  │ │Cognitive│ │    │ │Integr.  │ │  │ └─────────┘ │                            │
│  │ │Longevity│ │    │ └─────────┘ │  └─────────────┘                            │
│  │ │Mental H │ │    └─────────────┘                                             │
│  │ └─────────┘ │                                                                 │
│  └─────────────┘                                                                 │
│         │                  │                │                                    │
│         └──────────────────┼────────────────┘                                    │
│                            ▼                                                     │
│  ┌───────────────────────────────────────────────────────────────────────────┐  │
│  │                              TOOL LAYER                                    │  │
│  │  ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐   │  │
│  │  │ Oura  │ │Strava │ │  MFP  │ │PubMed │ │DrugBnk│ │ 23&Me │ │ RAG   │   │  │
│  │  └───────┘ └───────┘ └───────┘ └───────┘ └───────┘ └───────┘ └───────┘   │  │
│  └───────────────────────────────────────────────────────────────────────────┘  │
│                                                                                  │
│  ┌───────────────────────────────────────────────────────────────────────────┐  │
│  │                           DATA LAYER                                       │  │
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐      │  │
│  │  │ PostgreSQL   │ │  ClickHouse  │ │   Qdrant     │ │    Redis     │      │  │
│  │  │ (Checkpoints)│ │ (TimeSeries) │ │  (Vectors)   │ │   (Cache)    │      │  │
│  │  └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘      │  │
│  └───────────────────────────────────────────────────────────────────────────┘  │
│                                                                                  │
│  ┌───────────────────────────────────────────────────────────────────────────┐  │
│  │                           LLM LAYER                                        │  │
│  │  ┌─────────────────────────┐    ┌─────────────────────────┐               │  │
│  │  │   GigaChat Pro (Primary)│    │   YandexGPT (Fallback)  │               │  │
│  │  └─────────────────────────┘    └─────────────────────────┘               │  │
│  └───────────────────────────────────────────────────────────────────────────┘  │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 12. Ссылки и ресурсы

- [LangGraph Documentation](https://docs.langchain.com/oss/python/langgraph/overview)
- [LangGraph Supervisor](https://github.com/langchain-ai/langgraph-supervisor)
- [LangChain GigaChat](https://github.com/ai-forever/langchain-gigachat)
- [PostgresSaver](https://pypi.org/project/langgraph-checkpoint-postgres/)
- [Hierarchical Agent Teams Tutorial](https://langchain-ai.github.io/langgraph/tutorials/multi_agent/hierarchical_agent_teams/)
