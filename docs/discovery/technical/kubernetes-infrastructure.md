# Kubernetes Infrastructure for BIOMAX AI

## Архитектура self-hosted Kubernetes инфраструктуры

**Дата:** 2026-01-26  
**Версия:** 1.0  
**Статус:** Discovery Phase

---

## 1. Executive Summary

BIOMAX AI требует self-hosted Kubernetes инфраструктуру для:
- **152-ФЗ compliance** — хранение персональных данных на территории РФ
- **Контроль над данными** — чувствительные медицинские данные
- **Гибкость** — кастомные ML workloads, интеграция с российскими LLM
- **Масштабируемость** — от MVP до 100K+ пользователей

---

## 2. Высокоуровневая архитектура

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                              BIOMAX AI KUBERNETES CLUSTER                             │
├──────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                       │
│  ┌─────────────────────────────────────────────────────────────────────────────────┐ │
│  │                           INGRESS LAYER                                          │ │
│  │  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐              │ │
│  │  │  Nginx Ingress  │    │   Cert Manager  │    │   CloudFlare    │              │ │
│  │  │   Controller    │    │   (Let's Encrypt)│   │   (DDoS/WAF)    │              │ │
│  │  └─────────────────┘    └─────────────────┘    └─────────────────┘              │ │
│  └─────────────────────────────────────────────────────────────────────────────────┘ │
│                                        │                                              │
│  ┌─────────────────────────────────────────────────────────────────────────────────┐ │
│  │                           API GATEWAY LAYER                                      │ │
│  │  ┌─────────────────────────────────────────────────────────────────────────┐    │ │
│  │  │                    Kong API Gateway                                      │    │ │
│  │  │  • Rate Limiting  • Auth (JWT/OAuth)  • Request Routing  • Analytics    │    │ │
│  │  └─────────────────────────────────────────────────────────────────────────┘    │ │
│  └─────────────────────────────────────────────────────────────────────────────────┘ │
│                                        │                                              │
│  ┌─────────────────────────────────────────────────────────────────────────────────┐ │
│  │                         APPLICATION LAYER                                        │ │
│  │                                                                                   │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │ │
│  │  │  FastAPI    │  │  Telegram   │  │  LangGraph  │  │  RAG        │             │ │
│  │  │  Backend    │  │  Bot        │  │  Agents     │  │  Pipeline   │             │ │
│  │  │  (REST API) │  │  (aiogram)  │  │  (15 agents)│  │  (LlamaIdx) │             │ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘             │ │
│  │                                                                                   │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │ │
│  │  │  WebApp     │  │  Worker     │  │  Scheduler  │  │  Webhooks   │             │ │
│  │  │  (Next.js)  │  │  (Celery)   │  │  (APSchedul)│  │  Handler    │             │ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘             │ │
│  └─────────────────────────────────────────────────────────────────────────────────┘ │
│                                        │                                              │
│  ┌─────────────────────────────────────────────────────────────────────────────────┐ │
│  │                         MESSAGE QUEUE LAYER                                      │ │
│  │  ┌─────────────────────────────────────────────────────────────────────────┐    │ │
│  │  │                    Apache Kafka (KRaft)                                  │    │ │
│  │  │  Topics: agent-tasks, user-events, integrations, notifications          │    │ │
│  │  └─────────────────────────────────────────────────────────────────────────┘    │ │
│  └─────────────────────────────────────────────────────────────────────────────────┘ │
│                                        │                                              │
│  ┌─────────────────────────────────────────────────────────────────────────────────┐ │
│  │                           DATA LAYER                                             │ │
│  │                                                                                   │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │ │
│  │  │ PostgreSQL  │  │ ClickHouse  │  │   Qdrant    │  │   Redis     │             │ │
│  │  │ (Primary DB)│  │ (TimeSeries)│  │  (Vectors)  │  │  (Cache)    │             │ │
│  │  │ HA Cluster  │  │  Cluster    │  │  Cluster    │  │  Sentinel   │             │ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘             │ │
│  │                                                                                   │ │
│  │  ┌─────────────┐  ┌─────────────┐                                               │ │
│  │  │    Neo4j    │  │    MinIO    │                                               │ │
│  │  │   (Graph)   │  │  (S3 Store) │                                               │ │
│  │  └─────────────┘  └─────────────┘                                               │ │
│  └─────────────────────────────────────────────────────────────────────────────────┘ │
│                                        │                                              │
│  ┌─────────────────────────────────────────────────────────────────────────────────┐ │
│  │                       OBSERVABILITY LAYER                                        │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │ │
│  │  │ Prometheus  │  │   Grafana   │  │    Loki     │  │   Jaeger    │             │ │
│  │  │  (Metrics)  │  │ (Dashboard) │  │   (Logs)    │  │  (Tracing)  │             │ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘             │ │
│  └─────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                       │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Компоненты инфраструктуры

### 3.1 Kubernetes Cluster Configuration

```yaml
# cluster-config.yaml
apiVersion: v1
kind: Cluster
metadata:
  name: biomax-ai-production
spec:
  kubernetes_version: "1.29"
  
  control_plane:
    replicas: 3
    instance_type: "4 vCPU, 8GB RAM"
    
  node_pools:
    - name: application
      replicas: 3-10  # Autoscaling
      instance_type: "8 vCPU, 32GB RAM"
      labels:
        workload: application
      taints: []
      
    - name: database
      replicas: 3
      instance_type: "8 vCPU, 64GB RAM, NVMe SSD"
      labels:
        workload: database
      taints:
        - key: dedicated
          value: database
          effect: NoSchedule
          
    - name: ml-inference
      replicas: 2-5  # Autoscaling
      instance_type: "16 vCPU, 64GB RAM"  # Или GPU если нужно
      labels:
        workload: ml-inference
      taints:
        - key: dedicated
          value: ml
          effect: NoSchedule
          
  networking:
    cni: calico
    pod_cidr: "10.244.0.0/16"
    service_cidr: "10.96.0.0/12"
    
  storage:
    default_storage_class: "ceph-rbd"  # или local-path для MVP
```

### 3.2 Namespace Structure

```yaml
namespaces:
  - name: biomax-core
    description: "Core application services"
    services:
      - fastapi-backend
      - telegram-bot
      - webapp-frontend
      - webhook-handler
      
  - name: biomax-agents
    description: "LangGraph agent services"
    services:
      - orchestrator-agent
      - health-team-agents
      - data-team-agents
      - safety-team-agents
      
  - name: biomax-data
    description: "Data processing and storage"
    services:
      - postgresql
      - clickhouse
      - qdrant
      - redis
      - neo4j
      - minio
      
  - name: biomax-messaging
    description: "Message queue infrastructure"
    services:
      - kafka
      - kafka-connect
      
  - name: biomax-observability
    description: "Monitoring and logging"
    services:
      - prometheus
      - grafana
      - loki
      - jaeger
      
  - name: biomax-ingress
    description: "Ingress and API gateway"
    services:
      - nginx-ingress
      - kong
      - cert-manager
```

---

## 4. Базы данных

### 4.1 PostgreSQL (Primary Database)

**Назначение:** User profiles, checkpoints, credentials, integrations

```yaml
# postgresql-values.yaml (Helm)
architecture: replication
auth:
  postgresPassword: "${POSTGRES_PASSWORD}"
  database: biomax_ai
  
primary:
  resources:
    requests:
      cpu: 2
      memory: 8Gi
    limits:
      cpu: 4
      memory: 16Gi
  persistence:
    size: 100Gi
    storageClass: fast-ssd
    
readReplicas:
  replicaCount: 2
  resources:
    requests:
      cpu: 1
      memory: 4Gi
      
metrics:
  enabled: true
  serviceMonitor:
    enabled: true

# Важные extensions
postgresql:
  extraEnv:
    - name: POSTGRES_INITDB_ARGS
      value: "--data-checksums"
  postgresqlExtensions:
    - pgcrypto      # Шифрование
    - pg_trgm       # Полнотекстовый поиск
    - uuid-ossp     # UUID генерация
```

**Схема для LangGraph checkpoints:**

```sql
-- Автоматически создаётся PostgresSaver
CREATE TABLE checkpoints (
    thread_id TEXT NOT NULL,
    checkpoint_ns TEXT NOT NULL DEFAULT '',
    checkpoint_id TEXT NOT NULL,
    parent_checkpoint_id TEXT,
    type TEXT,
    checkpoint JSONB NOT NULL,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    PRIMARY KEY (thread_id, checkpoint_ns, checkpoint_id)
);

CREATE INDEX idx_checkpoints_thread ON checkpoints(thread_id);
CREATE INDEX idx_checkpoints_created ON checkpoints(created_at);

-- User profiles
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    telegram_id BIGINT UNIQUE,
    email TEXT UNIQUE,
    profile JSONB NOT NULL DEFAULT '{}',
    health_metrics JSONB NOT NULL DEFAULT '{}',
    preferences JSONB NOT NULL DEFAULT '{}',
    integrations JSONB NOT NULL DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Encrypted credentials (OAuth tokens)
CREATE TABLE user_credentials (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    provider TEXT NOT NULL,  -- oura, strava, myfitnesspal
    access_token_encrypted BYTEA NOT NULL,
    refresh_token_encrypted BYTEA,
    expires_at TIMESTAMP WITH TIME ZONE,
    scopes TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, provider)
);
```

### 4.2 ClickHouse (Time Series)

**Назначение:** Health metrics, activity data, analytics

```yaml
# clickhouse-values.yaml
replicaCount: 3
shards: 1
keeper:
  enabled: true  # Встроенный ZooKeeper replacement

resources:
  requests:
    cpu: 2
    memory: 8Gi
  limits:
    cpu: 4
    memory: 16Gi

persistence:
  size: 200Gi
  storageClass: fast-ssd
```

**Схема для time series данных:**

```sql
-- Sleep data from Oura
CREATE TABLE sleep_data (
    user_id UUID,
    date Date,
    bedtime_start DateTime64(3),
    bedtime_end DateTime64(3),
    total_sleep_duration UInt32,
    deep_sleep_duration UInt32,
    rem_sleep_duration UInt32,
    light_sleep_duration UInt32,
    efficiency UInt8,
    latency UInt16,
    hr_lowest UInt8,
    avg_hrv Float32,
    avg_breath Float32,
    temperature_delta Float32,
    created_at DateTime64(3) DEFAULT now64()
)
ENGINE = MergeTree()
PARTITION BY toYYYYMM(date)
ORDER BY (user_id, date)
TTL date + INTERVAL 2 YEAR;

-- Activity data from Strava
CREATE TABLE activity_data (
    user_id UUID,
    activity_id UInt64,
    activity_type LowCardinality(String),
    start_time DateTime64(3),
    duration_seconds UInt32,
    distance_meters Float32,
    elevation_gain Float32,
    avg_heartrate UInt8,
    max_heartrate UInt8,
    calories UInt16,
    suffer_score UInt8,
    created_at DateTime64(3) DEFAULT now64()
)
ENGINE = MergeTree()
PARTITION BY toYYYYMM(start_time)
ORDER BY (user_id, start_time)
TTL start_time + INTERVAL 2 YEAR;

-- Nutrition data
CREATE TABLE nutrition_data (
    user_id UUID,
    date Date,
    meal LowCardinality(String),
    calories UInt16,
    protein Float32,
    carbs Float32,
    fat Float32,
    fiber Float32,
    foods Array(String),
    created_at DateTime64(3) DEFAULT now64()
)
ENGINE = MergeTree()
PARTITION BY toYYYYMM(date)
ORDER BY (user_id, date)
TTL date + INTERVAL 2 YEAR;

-- Materialized view для агрегаций
CREATE MATERIALIZED VIEW daily_health_summary
ENGINE = SummingMergeTree()
PARTITION BY toYYYYMM(date)
ORDER BY (user_id, date)
AS SELECT
    user_id,
    date,
    avg(s.efficiency) as avg_sleep_efficiency,
    avg(s.avg_hrv) as avg_hrv,
    sum(a.duration_seconds) / 60 as total_activity_minutes,
    sum(n.calories) as total_calories
FROM sleep_data s
LEFT JOIN activity_data a ON s.user_id = a.user_id AND s.date = toDate(a.start_time)
LEFT JOIN nutrition_data n ON s.user_id = n.user_id AND s.date = n.date
GROUP BY user_id, date;
```

### 4.3 Qdrant (Vector Database)

**Назначение:** RAG embeddings, semantic search, long-term memory

```yaml
# qdrant-values.yaml
replicaCount: 3
resources:
  requests:
    cpu: 2
    memory: 8Gi
  limits:
    cpu: 4
    memory: 16Gi

persistence:
  size: 100Gi
  storageClass: fast-ssd

config:
  cluster:
    enabled: true
  service:
    grpc_port: 6334
    http_port: 6333
```

**Коллекции:**

```python
from qdrant_client import QdrantClient
from qdrant_client.models import VectorParams, Distance

client = QdrantClient(url="http://qdrant:6333")

# Knowledge base documents
client.create_collection(
    collection_name="knowledge_base",
    vectors_config=VectorParams(
        size=1024,  # e5-mistral-7b dimensions
        distance=Distance.COSINE
    ),
    shard_number=3,
    replication_factor=2,
)

# User memories
client.create_collection(
    collection_name="user_memories",
    vectors_config=VectorParams(
        size=1024,
        distance=Distance.COSINE
    ),
    shard_number=2,
    replication_factor=2,
)

# Research papers
client.create_collection(
    collection_name="pubmed_papers",
    vectors_config=VectorParams(
        size=1024,
        distance=Distance.COSINE
    ),
    shard_number=2,
    replication_factor=2,
)
```

### 4.4 Redis (Cache & Sessions)

```yaml
# redis-values.yaml
architecture: replication
auth:
  enabled: true
  password: "${REDIS_PASSWORD}"

master:
  resources:
    requests:
      cpu: 500m
      memory: 2Gi

replica:
  replicaCount: 2
  resources:
    requests:
      cpu: 250m
      memory: 1Gi

sentinel:
  enabled: true
  
metrics:
  enabled: true
```

**Use cases:**
- Session storage
- Rate limiting counters
- API response caching
- Pub/Sub for real-time updates
- LLM response caching

### 4.5 Neo4j (Graph Database)

**Назначение:** Knowledge graph, user relationships, recommendation engine

```yaml
# neo4j-values.yaml
neo4j:
  edition: community
  
core:
  standalone: true  # MVP: single instance
  resources:
    requests:
      cpu: 2
      memory: 4Gi

volumes:
  data:
    size: 50Gi
```

**Схема графа:**

```cypher
// User health knowledge graph
CREATE (u:User {id: 'uuid'})
CREATE (c:Condition {name: 'hypertension'})
CREATE (s:Supplement {name: 'magnesium'})
CREATE (r:Research {pmid: '12345678'})

// Relationships
CREATE (u)-[:HAS_CONDITION {since: date('2024-01-01')}]->(c)
CREATE (s)-[:MAY_HELP {evidence_level: 'moderate'}]->(c)
CREATE (s)-[:SUPPORTED_BY]->(r)
CREATE (u)-[:TAKES {dose: '400mg', frequency: 'daily'}]->(s)

// Contraindications
CREATE (s1:Supplement {name: 'vitamin_k'})
CREATE (m:Medication {name: 'warfarin'})
CREATE (s1)-[:INTERACTS_WITH {severity: 'major'}]->(m)
```

### 4.6 MinIO (Object Storage)

**Назначение:** PDFs, images, raw data files, backups

```yaml
# minio-values.yaml
mode: distributed
replicas: 4

resources:
  requests:
    cpu: 1
    memory: 4Gi

persistence:
  size: 500Gi
  storageClass: standard

buckets:
  - name: user-uploads
    policy: none
    purge: false
  - name: lab-results
    policy: none
    purge: false
  - name: genetic-data
    policy: none
    purge: false
  - name: backups
    policy: none
    purge: false
```

---

## 5. Message Queue (Apache Kafka)

### 5.1 Конфигурация

```yaml
# kafka-values.yaml (Strimzi operator)
apiVersion: kafka.strimzi.io/v1beta2
kind: Kafka
metadata:
  name: biomax-kafka
spec:
  kafka:
    version: 3.7.0
    replicas: 3
    listeners:
      - name: plain
        port: 9092
        type: internal
        tls: false
      - name: tls
        port: 9093
        type: internal
        tls: true
        
    config:
      offsets.topic.replication.factor: 3
      transaction.state.log.replication.factor: 3
      transaction.state.log.min.isr: 2
      default.replication.factor: 3
      min.insync.replicas: 2
      
    storage:
      type: jbod
      volumes:
        - id: 0
          type: persistent-claim
          size: 100Gi
          deleteClaim: false
          
    resources:
      requests:
        cpu: 2
        memory: 8Gi
      limits:
        cpu: 4
        memory: 16Gi
        
  # KRaft (no ZooKeeper)
  kraft:
    enabled: true
```

### 5.2 Topics

```yaml
topics:
  # Agent orchestration
  - name: agent-tasks
    partitions: 10
    replication: 3
    config:
      retention.ms: 86400000  # 1 day
      
  # User events
  - name: user-events
    partitions: 20
    replication: 3
    config:
      retention.ms: 604800000  # 7 days
      
  # Integration data
  - name: integration-data
    partitions: 15
    replication: 3
    config:
      retention.ms: 86400000
      
  # Notifications
  - name: notifications
    partitions: 5
    replication: 3
    config:
      retention.ms: 3600000  # 1 hour
      
  # Dead letter queue
  - name: dlq
    partitions: 5
    replication: 3
    config:
      retention.ms: 604800000  # 7 days
```

### 5.3 Kafka vs RabbitMQ — обоснование выбора

| Критерий | Kafka | RabbitMQ | Выбор |
|----------|-------|----------|-------|
| Throughput | 1.2M msg/sec | 38K msg/sec | Kafka ✅ |
| Replay capability | ✅ Native | ❌ Нет | Kafka ✅ |
| ML workloads | Оптимизирован | Не оптимизирован | Kafka ✅ |
| Complexity | Выше | Ниже | RabbitMQ |
| Operations (2025) | KRaft (no ZK) | Quorum Queues | Оба улучшились |

**Вывод:** Kafka для BIOMAX AI из-за высоких throughput требований и необходимости replay для ML pipelines.

---

## 6. API Gateway (Kong)

```yaml
# kong-values.yaml
deployment:
  kong:
    enabled: true
    
env:
  database: postgres
  pg_host: postgresql
  pg_user: kong
  pg_password: "${KONG_PG_PASSWORD}"
  
proxy:
  enabled: true
  type: LoadBalancer
  http:
    enabled: true
    containerPort: 8000
  tls:
    enabled: true
    containerPort: 8443
    
admin:
  enabled: true
  type: ClusterIP
  http:
    enabled: true
    containerPort: 8001

ingressController:
  enabled: true
  installCRDs: false
  
resources:
  requests:
    cpu: 500m
    memory: 1Gi
```

**Kong Plugins:**

```yaml
# Rate limiting
- name: rate-limiting
  config:
    minute: 60
    policy: redis
    redis_host: redis-master
    
# JWT Authentication
- name: jwt
  config:
    claims_to_verify:
      - exp
      
# Request transformer
- name: request-transformer
  config:
    add:
      headers:
        - "X-Request-ID:$(request_id)"
        
# Prometheus metrics
- name: prometheus
  
# CORS
- name: cors
  config:
    origins:
      - "https://biomax.ai"
      - "https://app.biomax.ai"
```

---

## 7. Observability

### 7.1 Prometheus + Grafana

```yaml
# kube-prometheus-stack values
prometheus:
  prometheusSpec:
    retention: 30d
    resources:
      requests:
        cpu: 1
        memory: 4Gi
    storageSpec:
      volumeClaimTemplate:
        spec:
          storageClassName: fast-ssd
          resources:
            requests:
              storage: 100Gi

grafana:
  adminPassword: "${GRAFANA_PASSWORD}"
  persistence:
    enabled: true
    size: 10Gi
    
  dashboardProviders:
    dashboardproviders.yaml:
      apiVersion: 1
      providers:
        - name: biomax
          folder: BIOMAX
          type: file
          options:
            path: /var/lib/grafana/dashboards/biomax
```

### 7.2 Loki (Logs)

```yaml
# loki-values.yaml
loki:
  auth_enabled: false
  
  storage:
    type: s3
    bucketNames:
      chunks: loki-chunks
      ruler: loki-ruler
    s3:
      endpoint: minio:9000
      accessKeyId: "${MINIO_ACCESS_KEY}"
      secretAccessKey: "${MINIO_SECRET_KEY}"
      
  schemaConfig:
    configs:
      - from: 2024-01-01
        store: boltdb-shipper
        object_store: s3
        schema: v11
        index:
          prefix: index_
          period: 24h
```

### 7.3 Jaeger (Distributed Tracing)

```yaml
# jaeger-values.yaml
provisionDataStore:
  cassandra: false

storage:
  type: elasticsearch
  elasticsearch:
    host: elasticsearch
    
agent:
  enabled: true
  
collector:
  enabled: true
  replicaCount: 2
  
query:
  enabled: true
  replicaCount: 2
```

### 7.4 Key Metrics to Monitor

```yaml
biomax_metrics:
  # Application
  - name: agent_response_latency_seconds
    type: histogram
    labels: [agent_name, status]
    
  - name: llm_tokens_used_total
    type: counter
    labels: [provider, model, agent]
    
  - name: api_integration_latency_seconds
    type: histogram
    labels: [integration, endpoint]
    
  - name: user_active_sessions_total
    type: gauge
    
  # Business
  - name: user_queries_total
    type: counter
    labels: [intent, agent]
    
  - name: recommendations_generated_total
    type: counter
    labels: [agent, category]
    
  - name: safety_checks_triggered_total
    type: counter
    labels: [check_type, result]
    
  # Infrastructure
  - name: kafka_consumer_lag
    type: gauge
    labels: [topic, consumer_group]
    
  - name: database_connections_active
    type: gauge
    labels: [database]
```

---

## 8. CI/CD Pipeline

### 8.1 GitOps с ArgoCD

```yaml
# argocd-application.yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: biomax-ai
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/biomax-ai/infrastructure
    targetRevision: main
    path: kubernetes/overlays/production
  destination:
    server: https://kubernetes.default.svc
    namespace: biomax-core
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
    syncOptions:
      - CreateNamespace=true
```

### 8.2 GitHub Actions Pipeline

```yaml
# .github/workflows/deploy.yaml
name: Deploy to Production

on:
  push:
    branches: [main]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: biomax-ai

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Build and push Docker image
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}
          
  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Run tests
        run: |
          docker run --rm \
            ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }} \
            pytest tests/ -v
            
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Update Kubernetes manifests
        run: |
          yq e ".spec.template.spec.containers[0].image = \"${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ github.sha }}\"" \
            -i kubernetes/overlays/production/deployment.yaml
            
      - name: Commit and push
        run: |
          git config user.name "GitHub Actions"
          git add .
          git commit -m "Deploy ${{ github.sha }}"
          git push
```

---

## 9. Security и 152-ФЗ Compliance

### 9.1 Требования 152-ФЗ

```yaml
152_fz_requirements:
  data_localization:
    - Все персональные данные хранятся на серверах в РФ
    - Запрет на трансграничную передачу без согласия
    
  encryption:
    - Шифрование данных at rest (PostgreSQL, MinIO)
    - TLS для всех соединений
    - Шифрование бэкапов
    
  access_control:
    - Двухфакторная аутентификация для админов
    - Ролевая модель доступа (RBAC)
    - Аудит всех операций с ПДн
    
  documentation:
    - Политика конфиденциальности
    - Согласие на обработку ПДн
    - Журналы обработки
    
  notifications:
    - Уведомление Роскомнадзора
    - Ответственное лицо за ПДн
```

### 9.2 Kubernetes Security

```yaml
# pod-security-policy.yaml
apiVersion: policy/v1beta1
kind: PodSecurityPolicy
metadata:
  name: biomax-restricted
spec:
  privileged: false
  allowPrivilegeEscalation: false
  requiredDropCapabilities:
    - ALL
  volumes:
    - configMap
    - emptyDir
    - projected
    - secret
    - persistentVolumeClaim
  hostNetwork: false
  hostIPC: false
  hostPID: false
  runAsUser:
    rule: MustRunAsNonRoot
  seLinux:
    rule: RunAsAny
  fsGroup:
    rule: RunAsAny
  readOnlyRootFilesystem: true
```

### 9.3 Network Policies

```yaml
# network-policy.yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: biomax-core-policy
  namespace: biomax-core
spec:
  podSelector: {}
  policyTypes:
    - Ingress
    - Egress
  ingress:
    - from:
        - namespaceSelector:
            matchLabels:
              name: biomax-ingress
        - namespaceSelector:
            matchLabels:
              name: biomax-agents
  egress:
    - to:
        - namespaceSelector:
            matchLabels:
              name: biomax-data
        - namespaceSelector:
            matchLabels:
              name: biomax-messaging
    - to:
        - ipBlock:
            cidr: 0.0.0.0/0
      ports:
        - port: 443  # External APIs (Oura, Strava, etc.)
```

### 9.4 Secrets Management

```yaml
# External Secrets Operator
apiVersion: external-secrets.io/v1beta1
kind: SecretStore
metadata:
  name: vault-backend
spec:
  provider:
    vault:
      server: "https://vault.biomax.local"
      path: "secret"
      auth:
        kubernetes:
          mountPath: "kubernetes"
          role: "biomax-ai"

---
apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
metadata:
  name: database-credentials
spec:
  refreshInterval: 1h
  secretStoreRef:
    name: vault-backend
    kind: SecretStore
  target:
    name: database-credentials
  data:
    - secretKey: POSTGRES_PASSWORD
      remoteRef:
        key: biomax/database
        property: postgres_password
    - secretKey: REDIS_PASSWORD
      remoteRef:
        key: biomax/database
        property: redis_password
```

---

## 10. Resource Estimates

### 10.1 MVP (1K users)

| Компонент | Replicas | CPU (request) | Memory (request) | Storage |
|-----------|----------|---------------|------------------|---------|
| **Control Plane** | 3 | 2 | 4Gi | — |
| **FastAPI Backend** | 2 | 500m | 1Gi | — |
| **Telegram Bot** | 2 | 250m | 512Mi | — |
| **LangGraph Agents** | 2 | 1 | 2Gi | — |
| **PostgreSQL** | 1+2 | 2+1 | 8Gi+4Gi | 100Gi |
| **ClickHouse** | 1 | 2 | 8Gi | 100Gi |
| **Qdrant** | 1 | 1 | 4Gi | 50Gi |
| **Redis** | 1+2 | 500m | 2Gi | — |
| **Kafka** | 3 | 1 | 4Gi | 50Gi |
| **Kong** | 2 | 500m | 1Gi | — |
| **Monitoring Stack** | — | 2 | 8Gi | 100Gi |
| **Total MVP** | — | ~25 vCPU | ~60 Gi | ~500Gi |

### 10.2 Scale (100K users)

| Компонент | Replicas | CPU (request) | Memory (request) | Storage |
|-----------|----------|---------------|------------------|---------|
| **Control Plane** | 3 | 4 | 8Gi | — |
| **FastAPI Backend** | 5-10 | 2 | 4Gi | — |
| **Telegram Bot** | 3-5 | 500m | 1Gi | — |
| **LangGraph Agents** | 10-20 | 2 | 4Gi | — |
| **PostgreSQL** | 1+3 | 4+2 | 16Gi+8Gi | 500Gi |
| **ClickHouse** | 3 | 4 | 16Gi | 1Ti |
| **Qdrant** | 3 | 2 | 8Gi | 200Gi |
| **Redis** | 1+3 | 1 | 4Gi | — |
| **Kafka** | 5 | 2 | 8Gi | 200Gi |
| **Kong** | 3-5 | 1 | 2Gi | — |
| **Total Scale** | — | ~100 vCPU | ~250 Gi | ~2Ti |

### 10.3 Оценка стоимости (российские провайдеры)

| Провайдер | MVP/месяц | Scale/месяц | Комментарий |
|-----------|-----------|-------------|-------------|
| **Yandex Cloud** | ~150K ₽ | ~600K ₽ | Managed K8s, 152-ФЗ |
| **VK Cloud** | ~130K ₽ | ~550K ₽ | Managed K8s, 152-ФЗ |
| **Selectel** | ~100K ₽ | ~450K ₽ | Dedicated, 152-ФЗ |
| **Bare Metal (колокация)** | ~80K ₽ | ~300K ₽ | Требует DevOps |

---

## 11. Helm Charts Structure

```
biomax-ai-charts/
├── Chart.yaml
├── values.yaml
├── values-production.yaml
├── values-staging.yaml
│
├── charts/
│   ├── biomax-core/
│   │   ├── Chart.yaml
│   │   ├── values.yaml
│   │   └── templates/
│   │       ├── deployment-backend.yaml
│   │       ├── deployment-bot.yaml
│   │       ├── service.yaml
│   │       ├── ingress.yaml
│   │       ├── configmap.yaml
│   │       └── secret.yaml
│   │
│   ├── biomax-agents/
│   │   ├── Chart.yaml
│   │   ├── values.yaml
│   │   └── templates/
│   │       ├── deployment-orchestrator.yaml
│   │       ├── deployment-health-team.yaml
│   │       ├── deployment-data-team.yaml
│   │       └── deployment-safety-team.yaml
│   │
│   └── biomax-data/
│       ├── Chart.yaml
│       ├── values.yaml
│       └── templates/
│           └── ... (database deployments)
│
└── templates/
    ├── namespace.yaml
    ├── network-policies.yaml
    ├── pod-disruption-budget.yaml
    └── _helpers.tpl
```

---

## 12. Deployment Diagram

```
                                   ┌─────────────────┐
                                   │   CloudFlare    │
                                   │   (DDoS/WAF)    │
                                   └────────┬────────┘
                                            │
                              ┌─────────────┴─────────────┐
                              │                           │
                    ┌─────────┴─────────┐       ┌────────┴────────┐
                    │ biomax.ai (Web)   │       │ t.me/biomax_bot │
                    └─────────┬─────────┘       └────────┬────────┘
                              │                          │
┌─────────────────────────────┴──────────────────────────┴─────────────────────────────┐
│                              KUBERNETES CLUSTER (РФ)                                  │
│  ┌───────────────────────────────────────────────────────────────────────────────┐   │
│  │                          Nginx Ingress Controller                              │   │
│  └────────────────────────────────────┬──────────────────────────────────────────┘   │
│                                       │                                               │
│  ┌────────────────────────────────────┴──────────────────────────────────────────┐   │
│  │                              Kong API Gateway                                  │   │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐            │   │
│  │  │Rate Limit│ │   JWT    │ │   CORS   │ │ Logging  │ │ Metrics  │            │   │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘            │   │
│  └────────────────────────────────────┬──────────────────────────────────────────┘   │
│                                       │                                               │
│           ┌───────────────────────────┼───────────────────────────┐                  │
│           │                           │                           │                  │
│           ▼                           ▼                           ▼                  │
│  ┌─────────────────┐        ┌─────────────────┐        ┌─────────────────┐          │
│  │   FastAPI       │        │  Telegram Bot   │        │    WebApp       │          │
│  │   Backend       │        │   (aiogram)     │        │   (Next.js)     │          │
│  │   (Pods: 2-5)   │        │   (Pods: 2)     │        │   (Pods: 2)     │          │
│  └────────┬────────┘        └────────┬────────┘        └─────────────────┘          │
│           │                          │                                               │
│           └──────────────────────────┼───────────────────────────────────────────┐  │
│                                      │                                            │  │
│  ┌───────────────────────────────────┴────────────────────────────────────────┐  │  │
│  │                         LangGraph Agents Service                            │  │  │
│  │  ┌─────────────────────────────────────────────────────────────────────┐   │  │  │
│  │  │                      Orchestrator Agent                              │   │  │  │
│  │  └─────────────────────────────────┬───────────────────────────────────┘   │  │  │
│  │                    ┌───────────────┼───────────────┐                       │  │  │
│  │                    ▼               ▼               ▼                       │  │  │
│  │  ┌─────────────────────┐ ┌─────────────────────┐ ┌─────────────────────┐  │  │  │
│  │  │    Health Team      │ │     Data Team       │ │    Safety Team      │  │  │  │
│  │  │ Sleep, Nutrition,   │ │ DataSci, Lab,       │ │ Safety, Research,   │  │  │  │
│  │  │ Fitness, Cognitive, │ │ Genomics, Integr.   │ │ Protocol            │  │  │  │
│  │  │ Longevity, Mental   │ │                     │ │                     │  │  │  │
│  │  └─────────────────────┘ └─────────────────────┘ └─────────────────────┘  │  │  │
│  └───────────────────────────────────┬────────────────────────────────────────┘  │  │
│                                      │                                            │  │
│  ┌───────────────────────────────────┼────────────────────────────────────────┐  │  │
│  │                         Apache Kafka                                        │  │  │
│  │  Topics: agent-tasks | user-events | integrations | notifications           │  │  │
│  └───────────────────────────────────┬────────────────────────────────────────┘  │  │
│                                      │                                            │  │
│  ┌───────────────────────────────────┴────────────────────────────────────────┐  │  │
│  │                           DATA LAYER                                        │  │  │
│  │                                                                              │  │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │  │  │
│  │  │ PostgreSQL  │  │ ClickHouse  │  │   Qdrant    │  │   Redis     │         │  │  │
│  │  │  Primary +  │  │  TimeSeries │  │  Vectors    │  │   Cache     │         │  │  │
│  │  │  Replicas   │  │             │  │             │  │             │         │  │  │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘         │  │  │
│  │                                                                              │  │  │
│  │  ┌─────────────┐  ┌─────────────┐                                           │  │  │
│  │  │    Neo4j    │  │    MinIO    │                                           │  │  │
│  │  │   Graph     │  │   S3 Store  │                                           │  │  │
│  │  └─────────────┘  └─────────────┘                                           │  │  │
│  └────────────────────────────────────────────────────────────────────────────┘  │  │
│                                                                                   │  │
│  ┌───────────────────────────────────────────────────────────────────────────┐   │  │
│  │                      EXTERNAL LLM PROVIDERS                                │   │  │
│  │  ┌─────────────────────────┐    ┌─────────────────────────┐               │   │  │
│  │  │   GigaChat Pro (Sber)   │    │   YandexGPT (Yandex)    │               │   │  │
│  │  │   (Primary)             │    │   (Fallback)            │               │   │  │
│  │  └─────────────────────────┘    └─────────────────────────┘               │   │  │
│  └───────────────────────────────────────────────────────────────────────────┘   │  │
│                                                                                   │  │
│  ┌───────────────────────────────────────────────────────────────────────────┐   │  │
│  │                         OBSERVABILITY                                      │   │  │
│  │  Prometheus → Grafana   |   Loki → Logs   |   Jaeger → Tracing            │   │  │
│  └───────────────────────────────────────────────────────────────────────────┘   │  │
│                                                                                   │  │
└───────────────────────────────────────────────────────────────────────────────────┘  │
                                                                                       │
┌──────────────────────────────────────────────────────────────────────────────────────┘
│                           EXTERNAL INTEGRATIONS
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│  │  Oura   │ │ Strava  │ │   MFP   │ │ PubMed  │ │DrugBank │ │ 23andMe │
│  │  Ring   │ │         │ │         │ │         │ │         │ │         │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘
└──────────────────────────────────────────────────────────────────────────────────────
```

---

## 13. Заключение

### Ключевые решения

1. **Kubernetes** — основа инфраструктуры для масштабируемости и 152-ФЗ compliance
2. **Kafka (KRaft)** — message queue для высоких нагрузок и ML workloads
3. **PostgreSQL** — primary DB с LangGraph checkpointing
4. **ClickHouse** — time series для health metrics
5. **Qdrant** — vector store для RAG и long-term memory
6. **Kong** — API Gateway с rate limiting и auth
7. **GitOps (ArgoCD)** — автоматизация deployments

### Риски

| Риск | Вероятность | Митигация |
|------|-------------|-----------|
| Сложность K8s operations | High | Managed K8s (Yandex/VK Cloud) |
| Высокая стоимость инфраструктуры | Medium | Начать с MVP конфигурации |
| 152-ФЗ compliance gaps | Medium | Аудит безопасности |
| Vendor lock-in (облако) | Low | Kubernetes абстрагирует |

### Next Steps

1. Выбрать провайдера (Yandex Cloud / VK Cloud / Selectel)
2. Настроить базовый K8s кластер
3. Развернуть PostgreSQL и Redis
4. Развернуть Kong API Gateway
5. Развернуть Kafka
6. Настроить CI/CD с ArgoCD
7. Настроить мониторинг
8. Провести security аудит
