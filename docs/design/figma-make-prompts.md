# Figma Make Prompts: BIOMAX AI Landing Page

**Версия:** 1.0  
**Дата:** 2026-01-28  
**Автор:** Orchestrator Agent  
**Цель:** Создание современного landing page для BIOMAX AI v2.0

---

## Общие указания для всех промптов

### Стиль дизайна 2026
- **Цветовая палитра:** Deep purple (#6366F1) + Electric blue (#3B82F6) + Cyan accent (#06B6D4) + Dark backgrounds (#0F172A, #1E293B)
- **Типографика:** Bold headlines (Geist, Inter, или SF Pro Display), легко читаемый body text
- **Визуальный стиль:** Glassmorphism с blur-эффектами, gradient meshes, 3D elements, organic shapes
- **Layout:** Bento grid layouts, asymmetric compositions, generous white space
- **Анимации:** Micro-interactions, scroll-driven animations (описывать в промптах)
- **Accessibility:** Dark mode first, высокий контраст, четкая иерархия

### Технические требования
- Desktop-first (1440px width), responsive hints
- Modular sections для reusability
- Consistent spacing system (8px grid)

---

## 🎯 ПРОМПТ 1: Hero Section

```
Create a stunning hero section for a health-tech AI platform called "BIOMAX AI".

HEADLINE: "Операционная система для вашего здоровья"
SUBHEADLINE: "15 AI-агентов анализируют все ваши данные — от Oura Ring до анализов крови. Персонализированные рекомендации с научной строгостью."

DESIGN REQUIREMENTS:
- Dark gradient background from deep purple (#6366F1) to dark blue (#1E293B)
- Large, bold headline with gradient text effect (purple to cyan)
- Glassmorphic card on the right side showing a mockup of the health dashboard with Health Score "78" prominently displayed
- Floating 3D elements: abstract DNA helix, brain neurons, heart rate wave — all with soft glow effects
- Animated gradient mesh blob in background (describe as subtle moving gradient)
- Two CTA buttons: "Начать бесплатно" (primary, gradient fill) and "Смотреть демо" (secondary, glass outline)
- Trust badges below CTAs: "15 AI-агентов", "100+ интеграций", "152-ФЗ Compliant"
- Navigation bar at top: Logo, Features, Pricing, About, Login, "Попробовать" button

VISUAL STYLE:
- Futuristic but clean, Apple-like minimalism meets cyberpunk aesthetics
- Soft shadows, subtle depth layers
- Health Score visualization should show 8 colored segments in a circular graph
- Include small icons representing different health metrics floating around the dashboard mockup

DIMENSIONS: 1440x900px hero section
```

---

## 🎯 ПРОМПТ 2: Problem Section

```
Design a "Problem" section for BIOMAX AI landing page showing pain points that users experience.

HEADLINE: "Знакомо?"

CREATE 4 PROBLEM CARDS in a horizontal layout:

CARD 1 - "Данные разбросаны":
- Icon: Multiple app windows/scattered data visualization
- Text: "7+ приложений: Oura, MyFitnessPal, Cronometer... Данные не связаны между собой"
- Color accent: Red/Orange gradient

CARD 2 - "Нет персонализации":
- Icon: Generic person silhouette with question marks
- Text: "Рекомендации не учитывают вашу генетику, биомаркеры и индивидуальные цели"
- Color accent: Yellow/Orange gradient

CARD 3 - "Информационный перегруз":
- Icon: Brain with explosion/overwhelm visual
- Text: "Противоречивые советы, непонятные анализы, 5+ часов в неделю на ручной анализ"
- Color accent: Purple gradient

CARD 4 - "Нет научной строгости":
- Icon: Document without sources/citations
- Text: "Рекомендации без ссылок на исследования. Невозможно оценить надёжность"
- Color accent: Gray/Blue gradient

DESIGN STYLE:
- Dark background (#0F172A)
- Cards with glassmorphic effect (semi-transparent, blur)
- Each card has subtle glow in its accent color
- Icons should be modern line-art style with gradient fills
- Cards arranged in 2x2 grid or horizontal scroll on mobile
- Subtle animated pulse on hover (describe in design)

DIMENSIONS: 1440x600px section
```

---

## 🎯 ПРОМПТ 3: Solution Section (15 AI Agents)

```
Design a spectacular "Solution" section showcasing 15 AI Agents for BIOMAX AI.

HEADLINE: "15 AI-экспертов для одного вас"
SUBHEADLINE: "Мультиагентная архитектура с динамической оркестрацией. Каждый агент — специалист в своей области."

CENTRAL VISUALIZATION:
- Large circular diagram in the center showing the Orchestrator Agent as the hub
- 14 specialized agents arranged in a circular pattern around it, connected with glowing lines
- The visualization should look like a neural network or constellation

AGENT CARDS (create a bento grid layout showing key agents):

ROW 1 (larger cards):
1. Orchestrator Agent (center, largest)
   - Icon: Command center/conductor
   - "Координирует работу всех агентов"
   
2. Nutrition Agent
   - Icon: DNA + food
   - "Нутригеномика, персонализированные диеты"

3. Sleep Agent  
   - Icon: Moon + brain waves
   - "Архитектура сна, циркадные ритмы"

ROW 2 (medium cards):
4. Cognitive Agent
   - Icon: Brain with lightning
   - "Ноотропы, нейрофидбэк, когнитивная оптимизация"

5. Fitness Agent
   - Icon: Heart rate + muscles
   - "Тренировки, восстановление, HRV-анализ"

6. Longevity Agent
   - Icon: Infinity + clock
   - "Антистарение, биологический возраст"

7. Lab Interpreter Agent
   - Icon: Blood drop + chart
   - "Интерпретация анализов простым языком"

ROW 3 (smaller cards):
8. Genomics Agent - "ДНК-анализ, SNP"
9. Mental Health Agent - "Стресс, тревожность, PHQ-9"
10. Coach Agent - "Мотивация, привычки"
11. Research Agent - "Поиск исследований PubMed"
12. Safety Agent - "Контрпоказания, взаимодействия"
13. Custom Protocol Agent - "Ваши протоколы и методики"
14. Integration Agent - "Синтез данных из всех источников"
15. Data Scientist Agent - "Анализ паттернов, корреляции"

DESIGN STYLE:
- Bento grid layout with varying card sizes
- Each card has unique gradient icon matching its function
- Dark glassmorphic cards with colored glow accents
- Central network visualization with animated connection lines (describe as pulsing)
- Background: dark with subtle gradient mesh
- Hover effect: card lifts up, glow intensifies

DIMENSIONS: 1440x1000px section
```

---

## 🎯 ПРОМПТ 4: Health Score Section

```
Design a "Health Score" section explaining the 8 dimensions of wellness measurement.

HEADLINE: "Ваш Health Score: 8 измерений здоровья"
SUBHEADLINE: "Комплексная оценка 0-100 с персонализируемыми весами под ваши цели"

MAIN VISUALIZATION:
- Large circular Health Score gauge showing score "78" in the center
- 8 colored segments around the circle, each representing a dimension
- Each segment has a mini-progress bar showing its individual score
- The visualization should look premium, like a high-end car dashboard or smartwatch face

8 DIMENSIONS (arrange around the circle or as cards below):

1. Physical Health (20%) - Score: 82
   - Color: Green (#10B981)
   - Icon: Body/vitals
   - "Физическая форма, выносливость, сила"

2. Metabolic Health (15%) - Score: 71
   - Color: Orange (#F59E0B)
   - Icon: Glucose/metabolism
   - "Глюкоза, инсулин, липиды"

3. Cognitive Health (15%) - Score: 85
   - Color: Purple (#8B5CF6)
   - Icon: Brain
   - "Память, фокус, обработка информации"

4. Emotional Health (15%) - Score: 74
   - Color: Pink (#EC4899)
   - Icon: Heart
   - "Настроение, стресс, тревожность"

5. Social Wellness (10%) - Score: 68
   - Color: Blue (#3B82F6)
   - Icon: People
   - "Социальные связи, отношения"

6. Purpose & Meaning (10%) - Score: 79
   - Color: Cyan (#06B6D4)
   - Icon: Star/compass
   - "Цели, смысл, самореализация"

7. Environmental (5%) - Score: 72
   - Color: Teal (#14B8A6)
   - Icon: Leaf/air
   - "Качество воздуха, света, среды"

8. Biological Age (10%) - Score: 88
   - Color: Gold (#EAB308)
   - Icon: DNA clock
   - "Эпигенетический возраст vs хронологический"

DESIGN ELEMENTS:
- Central gauge with smooth animations (describe as rotating/filling)
- Each dimension card has its own mini-gauge or progress bar
- Glassmorphic dimension cards arranged in a circle or 4x2 grid
- Show "Ваш биологический возраст: 32 года" highlight (for someone who is 35)
- Include small trend arrows (↑ +3 за неделю)
- Dark background with colored glow emanating from the central gauge

ADDITIONAL TEXT:
"Персонализируйте веса под свои цели: фокус на Longevity увеличит вес Biological Age до 25%"

DIMENSIONS: 1440x800px section
```

---

## 🎯 ПРОМПТ 5: Custom RAG Section

```
Design a "Custom RAG" section showcasing the unique knowledge base feature.

HEADLINE: "Ваша персональная база знаний"
SUBHEADLINE: "Загружайте протоколы, исследования и свои эксперименты. AI использует их для персонализации."

MAIN VISUAL:
- Split screen layout
- LEFT SIDE: File upload interface showing drag-and-drop zone
- RIGHT SIDE: AI conversation using the uploaded knowledge

LEFT SIDE ELEMENTS:
- "Загруженные протоколы" section
- Protocol cards:
  1. "Blueprint by Bryan Johnson" - PDF icon - "147 фрагментов"
  2. "Huberman Sleep Protocol" - PDF icon - "63 фрагмента"
  3. "Мои эксперименты с NMN" - MD icon - "28 фрагментов"
- Drag-and-drop zone with dashed border
- Supported formats: PDF, MD, TXT, URL
- Progress visualization showing "RAG Pipeline": Extraction → Chunking → Embedding → Index

RIGHT SIDE ELEMENTS:
- Chat interface mockup
- User message: "Какую дозу NMN рекомендуешь учитывая мой возраст и протокол Bryan Johnson?"
- AI response with citation:
  "Учитывая ваш возраст (35 лет) и загруженный протокол Blueprint:
  
  📊 Рекомендую: NMN 500mg утром натощак
  
  Обоснование:
  • Согласно вашему протоколу Blueprint (стр. 24)
  • Исследование Yi et al., 2023 подтверждает безопасность
  
  ⚠️ Проверьте NAD+ через 3 месяца"
  
- Source attribution badge: "Источник: Blueprint.pdf, стр. 24"

DESIGN STYLE:
- Dark glassmorphic cards
- File icons with colored gradients (PDF: red, MD: blue, TXT: gray)
- Chat bubbles with AI having purple gradient, user having blue
- Animated pipeline visualization (describe as flowing data particles)
- Glow effects on active elements

UNIQUE SELLING POINT BADGE:
"🏆 Уникальная функция: ни один конкурент не предлагает Custom RAG"

DIMENSIONS: 1440x700px section
```

---

## 🎯 ПРОМПТ 6: Integrations Section

```
Design an "Integrations" section showing 100+ data source connections.

HEADLINE: "100+ интеграций с вашими устройствами и сервисами"
SUBHEADLINE: "Все данные в одном месте. Автоматическая синхронизация без ручного ввода."

CREATE A VISUAL GRID OF INTEGRATION LOGOS organized by category:

CATEGORY 1: "Wearables" (highlight row)
- Oura Ring (logo)
- Apple Watch (logo)
- WHOOP (logo)
- Garmin (logo)
- Fitbit (logo)
- Mi Band (logo)

CATEGORY 2: "CGM (Глюкоза)"
- Dexcom G7 (logo)
- FreeStyle Libre (logo)
- Levels/Stelo (logo)

CATEGORY 3: "Лаборатории РФ" (highlighted as unique feature)
- INVITRO (logo)
- Helix (logo)
- CMD (logo)
- Гемотест (logo)
🏆 Badge: "Первая платформа с интеграцией российских лабораторий"

CATEGORY 4: "Геномика"
- 23andMe (logo)
- Ancestry (logo)
- Atlas Biomed (logo)
- Nebula Genomics (logo)

CATEGORY 5: "Микробиом"
- Viome (logo)
- ZOE (logo)
- Atlas (logo)

CATEGORY 6: "Питание"
- MyFitnessPal (logo)
- Cronometer (logo)
- MacroFactor (logo)

CATEGORY 7: "Фитнес"
- Strava (logo)
- Apple Fitness+ (logo)
- Peloton (logo)

CATEGORY 8: "Медитация"
- Headspace (logo)
- Calm (logo)
- Waking Up (logo)

DESIGN STYLE:
- Logo cloud with varying sizes (key integrations larger)
- Glassmorphic category cards
- Animated connection lines from logos to central BIOMAX AI hub
- Each logo should have subtle glow on hover
- Dark background with gradient mesh
- "Coming Soon" badges on some integrations
- Large counter: "107 интеграций и растём"

SPECIAL ELEMENT:
- Animated API connection visualization showing data flowing from devices to BIOMAX
- Real-time sync indicator with green pulse

DIMENSIONS: 1440x800px section
```

---

## 🎯 ПРОМПТ 7: Personas/Use Cases Section

```
Design a "Use Cases" section showing 3 target personas and how they use BIOMAX AI.

HEADLINE: "Для кого BIOMAX AI?"

CREATE 3 PERSONA CARDS:

PERSONA 1 - "Алексей, 35" (Advanced Biohacker)
- Avatar: Professional man, tech-savvy appearance
- Quote: "Все данные + протоколы + эксперименты в одном месте"
- Stats: 
  • 5+ устройств (Oura, CGM, WHOOP)
  • 10+ добавок ежедневно
  • Blueprint Protocol follower
- Use case highlight: "Custom RAG для протокола Bryan Johnson"
- Key agents: Longevity, Genomics, Data Scientist, Custom Protocol
- Tier recommendation: "Biohacker Pro — 2,490₽/мес"
- Background color: Purple gradient
- Icon badges: DNA, Brain, Heart rate

PERSONA 2 - "Марина, 42" (Health Optimizer)
- Avatar: Professional woman, busy executive
- Quote: "AI-коуч, который даёт понятные рекомендации без PhD"
- Stats:
  • Apple Watch
  • Ищет баланс работы и здоровья
  • Хочет лучший сон и энергию
- Use case highlight: "План из 3 действий + объяснение анализов"
- Key agents: Coach, Sleep, Mental Health, Lab Interpreter
- Tier recommendation: "Optimize — 990₽/мес"
- Background color: Blue gradient
- Icon badges: Moon, Coffee, Heart

PERSONA 3 - "Дмитрий, 55" (Longevity Seeker)
- Avatar: Distinguished professional, doctor/scientist
- Quote: "Научный подход к долголетию. Каждая рекомендация со ссылкой на PubMed"
- Stats:
  • Врач-терапевт, к.м.н.
  • Следит за биологическим возрастом
  • Критически оценивает рекомендации
- Use case highlight: "Эпигенетические часы + Research Agent"
- Key agents: Longevity, Research, Lab Interpreter, Safety
- Tier recommendation: "Longevity Elite — 9,990₽/мес"
- Background color: Gold/Orange gradient
- Icon badges: Infinity, Science flask, Chart

DESIGN STYLE:
- Large cards with persona photo/avatar on left
- Glassmorphic card backgrounds
- Key stats in pill badges
- Agent icons shown at bottom of each card
- "Моя история" CTA button on each card
- Hover effect: card expands slightly, shows more details
- Dark background with colored glow matching each persona

DIMENSIONS: 1440x700px section
```

---

## 🎯 ПРОМПТ 8: N=1 Experiments Section (Biohacker Lab)

```
Design a "Biohacker Lab" section showcasing N=1 experiment functionality.

HEADLINE: "Biohacker Lab: ваши эксперименты с научным подходом"
SUBHEADLINE: "Проверьте, работает ли ваш протокол. Байесовский анализ и статистическая значимость."

MAIN VISUALIZATION - Experiment Dashboard:
- Show an active experiment example:
  "Эксперимент: Магний глицинат для deep sleep"
  
EXPERIMENT FLOW (show as horizontal timeline):
1. DESIGN → 2. BASELINE → 3. INTERVENTION → 4. ANALYSIS → 5. DECISION

EXPERIMENT CARD showing results:
- Metric: Deep Sleep
- Baseline: 68 мин (2 недели данных)
- Intervention: 80 мин (4 недели)
- Change: +18% ✅
- p-value: 0.03 (статистически значимо)
- Effect size: 0.65 (средний)
- Confidence: 95%

GRAPH VISUALIZATION:
- Before/After comparison chart
- Confidence interval bands
- Clear visual showing the improvement
- Bayesian posterior distribution (advanced view)

VERDICT BADGE: 
"🎉 Эксперимент успешен! Магний значимо улучшил deep sleep"

RECOMMENDATION:
"💡 Рекомендация: Интегрируйте в базовый протокол"

BUTTONS:
- [Добавить в протокол]
- [Повторить эксперимент]
- [Экспорт данных]

DESIGN STYLE:
- Scientific/medical aesthetic but modern
- Data visualization with smooth curves
- Green/success colors for positive results
- Glassmorphic cards with white/light text
- Timeline should have glowing dots for completed stages
- Charts should look like high-end analytics dashboards

ADDITIONAL ELEMENTS:
- Small examples of other experiments users can run:
  • "NMN и энергия"
  • "Кето диета и фокус"
  • "Cold exposure и HRV"
  • "Интервальное голодание и глюкоза"

DIMENSIONS: 1440x750px section
```

---

## 🎯 ПРОМПТ 9: Safety Module Section

```
Design a "Safety Module" section emphasizing medical safety features.

HEADLINE: "Безопасность — наш приоритет"
SUBHEADLINE: "Safety Agent проверяет каждую рекомендацию на противопоказания и взаимодействия."

MAIN VISUAL - Safety Layers Diagram:
Show 4 concentric circles/shields:

LAYER 1 (outer): "Hard Blocks"
- Color: Red (#EF4444)
- Icon: Stop sign
- "Абсолютные запреты для опасных комбинаций"

LAYER 2: "Condition Checks"
- Color: Orange (#F59E0B)
- Icon: Warning triangle
- "Проверка ваших состояний и истории"

LAYER 3: "Red Flags Detection"
- Color: Yellow (#EAB308)
- Icon: Flag
- "Обнаружение опасных сигналов в данных"

LAYER 4 (center): "Disclaimer Injection"
- Color: Blue (#3B82F6)
- Icon: Info
- "Автоматические предупреждения в рекомендациях"

EXAMPLE INTERACTION:
User query: "Можно ли мне принимать метформин?"

Safety Agent response:
"⚠️ Обнаружено потенциальное взаимодействие!

Ваш профиль показывает:
• Текущий приём: Омега-3, Витамин D
• Состояние: Функциональная гипотония

Проверка DrugBank API:
• Метформин + алкоголь = риск лактоацидоза
• Требуется контроль функции почек

💡 Рекомендация:
Проконсультируйтесь с врачом перед началом приёма.
Это лекарственный препарат, не добавка.

📋 Источники: DrugBank, PubMed PMID:12345678"

TRUST BADGES:
- "152-ФЗ Compliant"
- "DrugBank Integration"
- "Medical Advisory Board"
- "Wellness ≠ Medicine"

DISCLAIMER TEXT at bottom:
"BIOMAX AI — wellness платформа, не медицинское устройство. 
Мы НЕ ставим диагнозы и НЕ заменяем врача."

DESIGN STYLE:
- Medical/professional but friendly
- Shield/protection visual metaphor
- Red, orange, yellow, blue gradient for severity levels
- Clean, trustworthy appearance
- Icons should be medical-style but modern

DIMENSIONS: 1440x700px section
```

---

## 🎯 ПРОМПТ 10: Pricing Section

```
Design a modern pricing section for BIOMAX AI with 4 tiers.

HEADLINE: "Выберите свой план"
SUBHEADLINE: "От бесплатного старта до премиум-функций для серьёзного биохакинга"

CREATE 4 PRICING CARDS:

TIER 1 - FREE (Starter):
- Price: "0₽"
- Target: "Попробовать"
- Badge: "Бесплатно навсегда"
- Features:
  ✓ Базовый Health Score
  ✓ 1 интеграция устройства
  ✓ Coach Agent (базовый)
  ✓ 10 AI-запросов в день
  ✓ Telegram Bot
- CTA: "Начать бесплатно"
- Style: Simple, gray border

TIER 2 - OPTIMIZE (Popular):
- Price: "990₽" /мес
- Target: "Health Optimizers"
- Badge: "🔥 Популярный"
- Features:
  ✓ Все бесплатные функции +
  ✓ Все wearables интеграции
  ✓ 5 AI-агентов (Sleep, Coach, Nutrition, Fitness, Lab Interpreter)
  ✓ 100 AI-запросов в день
  ✓ Базовый RAG (1GB)
  ✓ Weekly Reports
  ✓ Email поддержка
- CTA: "Выбрать Optimize"
- Style: Blue highlight border, most prominent

TIER 3 - BIOHACKER PRO:
- Price: "2,490₽" /мес
- Target: "Advanced Biohackers"
- Badge: "Для профи"
- Features:
  ✓ Все Optimize функции +
  ✓ Все 15 AI-агентов
  ✓ Custom RAG (5GB)
  ✓ Genomics & Microbiome агенты
  ✓ N=1 Biohacker Lab
  ✓ Безлимитные AI-запросы
  ✓ API доступ
  ✓ Приоритетная поддержка
- CTA: "Выбрать Biohacker Pro"
- Style: Purple gradient border

TIER 4 - LONGEVITY ELITE:
- Price: "9,990₽" /мес
- Target: "Longevity Seekers"
- Badge: "👑 Премиум"
- Features:
  ✓ Все Biohacker Pro функции +
  ✓ Эпигенетические часы интеграция
  ✓ Custom RAG (50GB)
  ✓ Quarterly консультации с экспертами
  ✓ White-glove onboarding
  ✓ Персональный менеджер
  ✓ Ранний доступ к новым фичам
- CTA: "Связаться"
- Style: Gold gradient border, premium feel

ADDITIONAL ELEMENTS:
- Toggle: "Ежемесячно / Ежегодно (-20%)"
- "Все цены включают НДС"
- "14 дней бесплатного пробного периода для платных планов"
- "Возврат в течение 30 дней"
- Compare plans link at bottom

ENTERPRISE BANNER below:
"🏢 Enterprise / Corporate Wellness
Для компаний от 50 сотрудников: White-label, On-premise, SLA
[Запросить демо]"

DESIGN STYLE:
- Cards with glassmorphic effect
- Popular tier should be elevated/highlighted
- Price in large bold text
- Feature checkmarks with green color
- Smooth hover effects
- Dark background, cards with subtle glow matching tier level
- Annual pricing toggle with animated switch

DIMENSIONS: 1440x900px section
```

---

## 🎯 ПРОМПТ 11: Social Proof / Testimonials Section

```
Design a testimonials section with user quotes and metrics.

HEADLINE: "Что говорят пользователи"

METRICS BAR (top):
- "1,000+ beta-пользователей"
- "NPS 52"
- "4.8★ средняя оценка"
- "72% улучшили Health Score за 3 месяца"

CREATE 3 TESTIMONIAL CARDS:

TESTIMONIAL 1:
- Avatar: Professional man photo
- Name: "Михаил К."
- Role: "IT-предприниматель, 37 лет"
- Tier badge: "Biohacker Pro"
- Quote: "Наконец все мои данные в одном месте. Загрузил протокол Blueprint, и AI теперь учитывает его в каждой рекомендации. Custom RAG — это game changer."
- Result badge: "Биологический возраст -2.3 года за 6 месяцев"
- Rating: ★★★★★

TESTIMONIAL 2:
- Avatar: Professional woman photo
- Name: "Анна С."
- Role: "Финансовый директор, 45 лет"
- Tier badge: "Optimize"
- Quote: "Я не эксперт в биохакинге, но Coach Agent объясняет всё простым языком. План из 3 действий каждую неделю — это именно то, что мне нужно. Энергии стало больше уже через месяц."
- Result badge: "Качество сна +23%"
- Rating: ★★★★★

TESTIMONIAL 3:
- Avatar: Distinguished man photo
- Name: "Сергей П."
- Role: "Врач, к.м.н., 52 года"
- Tier badge: "Longevity Elite"
- Quote: "Как врач, я ценю научную строгость. Каждая рекомендация со ссылкой на исследование — это то, чего не хватало в других приложениях. Research Agent экономит мне часы работы."
- Result badge: "DunedinPACE улучшился с 1.02 до 0.94"
- Rating: ★★★★★

DESIGN STYLE:
- Large quote cards with photo on left
- Glassmorphic card backgrounds
- Quote marks in accent color
- Result badges with green highlight
- Star ratings in gold
- Subtle gradient backgrounds matching tier colors
- Carousel/slider with arrows or auto-scroll

ADDITIONAL ELEMENTS:
- Logos of companies where beta users work (anonymized): "Используют сотрудники из: Yandex, Sber, VK, Ozon, Тинькофф"
- "Присоединяйтесь к 1,000+ биохакеров" CTA button

DIMENSIONS: 1440x600px section
```

---

## 🎯 ПРОМПТ 12: Competitive Advantage Section

```
Design a "Why BIOMAX?" comparison section showing competitive advantages.

HEADLINE: "Почему BIOMAX AI?"
SUBHEADLINE: "Единственная платформа, объединяющая ВСЁ"

CREATE A COMPARISON TABLE:

| Feature | BIOMAX AI | InsideTracker | Oura | Levels | Gyroscope |
|---------|-----------|---------------|------|--------|-----------|
| Blood Biomarkers | ✅ | ✅ | ❌ | ✅ | ❌ |
| Sleep Tracking | ✅ | ❌ | ✅ | ❌ | ✅ |
| CGM Integration | ✅ | ❌ | ❌ | ✅ | ❌ |
| Longevity/Bioage | ✅ | ✅ | ❌ | ❌ | ✅ |
| Genomics | ✅ | ✅ | ❌ | ❌ | ❌ |
| Multi-Agent AI | ✅ 15 агентов | ❌ | ❌ | ❌ | ❌ |
| Custom RAG | ✅ | ❌ | ❌ | ❌ | ❌ |
| Россия/152-ФЗ | ✅ | ❌ | ⚠️ | ❌ | ⚠️ |

KEY DIFFERENTIATORS (below table):

1. "🤖 Мультиагентная AI-архитектура"
   "15 специализированных агентов vs один алгоритм"
   Competitor status: "Ни один конкурент"

2. "📚 Custom RAG"
   "Загружайте свои протоколы и исследования"
   Competitor status: "Уникальная функция"

3. "🇷🇺 Первая платформа для России"
   "152-ФЗ, INVITRO, GigaChat, русский язык"
   Competitor status: "Рынок не охвачен"

4. "🔬 Научная строгость"
   "Source attribution + evidence levels в каждой рекомендации"
   Competitor status: "Редко у конкурентов"

DESIGN STYLE:
- Clean comparison table with alternating row colors
- BIOMAX column highlighted with gradient background
- ✅ in green, ❌ in red, ⚠️ in yellow
- Key differentiators as cards below table
- Dark background, table with glassmorphic effect
- Competitor logos (small) in header row

POSITIONING QUOTE:
"InsideTracker смотрит только на кровь. Oura только на сон. Levels только на глюкозу.
BIOMAX AI — единая платформа для ВСЕГО биохакинга."

DIMENSIONS: 1440x700px section
```

---

## 🎯 ПРОМПТ 13: Telegram Bot Section

```
Design a "Telegram Bot" section showcasing the Telegram-first approach.

HEADLINE: "Telegram-first: AI в вашем кармане"
SUBHEADLINE: "Спрашивайте что угодно о здоровье. Ответ за 5 секунд с учётом всех ваших данных."

MAIN VISUAL:
- Large iPhone mockup showing Telegram chat with @biomax_ai_bot
- Chat conversation example:

User: "Какой у меня сон вчера?"

Bot response:
"🌙 Анализ сна за 27.01.2026:

Общее время: 7ч 32мин
Deep sleep: 1ч 18мин (17%) ↑
REM: 1ч 45мин (23%)
Awakenings: 2

📊 Sleep Score: 82/100

💡 Insight от Sleep Agent:
Deep sleep улучшился на 12% по сравнению с прошлой неделей. Похоже, магний глицинат работает!

[Подробнее в приложении →]"

User: "Что сегодня сделать для здоровья?"

Bot response:
"📋 Ваш план на сегодня (Coach Agent):

1. ☀️ Утренний свет 10 мин (циркадные ритмы)
2. 💧 2.5л воды (по вашей массе)
3. 🏃 Zone 2 кардио 30 мин (recovery day)
4. 😴 В кровать до 22:30 (оптимально для вас)

✅ Отметить выполненное"

QUICK COMMANDS shown:
- /sleep — сводка сна
- /hrv — HRV за неделю
- /plan — план на сегодня
- /labs — последние анализы
- /ask [вопрос] — спросить AI

DESIGN STYLE:
- Realistic iPhone mockup with Telegram interface
- Chat bubbles with proper Telegram styling
- Bot avatar with BIOMAX logo
- Emojis and formatting as in real Telegram
- Dark mode Telegram theme
- Floating glow around phone mockup
- Background: subtle gradient mesh

SIDE ELEMENTS:
- "5 сек" badge — "Среднее время ответа"
- "24/7" badge — "Доступен всегда"
- "Голос" badge — "Поддержка голосовых сообщений (скоро)"

CTA: "Попробовать бота" → t.me/biomax_ai_bot

DIMENSIONS: 1440x700px section
```

---

## 🎯 ПРОМПТ 14: CTA Section

```
Design a final Call-to-Action section before the footer.

HEADLINE: "Начните управлять здоровьем уже сегодня"
SUBHEADLINE: "Бесплатный старт. Без карты. Без обязательств."

VISUAL ELEMENTS:
- Large gradient background (purple to blue to cyan, animated mesh)
- Central CTA block with glassmorphic card
- Floating 3D elements: health metrics, DNA, heart rate waves

CTA CARD CONTENT:

"🚀 Начать бесплатно"
- Email input field
- "или продолжить с Telegram"
- [Создать аккаунт] button (gradient, large)

TRUST ELEMENTS below button:
- "✓ 14 дней premium бесплатно"
- "✓ Отмена в любой момент"
- "✓ Данные защищены по 152-ФЗ"
- "✓ Без кредитной карты"

SOCIAL PROOF:
- "1,000+ пользователей уже начали"
- Small avatars of recent signups (anonymized)

SECONDARY CTA:
"Хотите демо? [Запланировать звонок]"

ANIMATION IDEAS (describe for designers):
- Gradient background slowly shifts colors
- Floating 3D elements gently rotate
- Subtle particle effect
- Input field has focus glow animation
- Button has hover state with glow intensification

DESIGN STYLE:
- Bold, confident, action-oriented
- Centered layout
- Generous padding
- High contrast for accessibility
- The section should feel like a natural conclusion and invitation

DIMENSIONS: 1440x500px section
```

---

## 🎯 ПРОМПТ 15: Footer Section

```
Design a comprehensive footer for BIOMAX AI website.

FOOTER LAYOUT (4 columns + bottom bar):

COLUMN 1 - Brand:
- BIOMAX AI logo (with tagline "Personal Health OS")
- Short description: "Мультиагентная AI-платформа для биохакинга и управления здоровьем"
- Social icons: Telegram, VK, YouTube, Twitter/X

COLUMN 2 - Product:
- Features
- Pricing
- Integrations
- AI Agents
- Security
- API Documentation

COLUMN 3 - Resources:
- Blog
- Research Hub
- Protocols Library
- N=1 Experiments Guide
- Help Center
- FAQ

COLUMN 4 - Company:
- About Us
- Careers (badge: "Hiring!")
- Press Kit
- Partners
- Contact

BOTTOM BAR:
- © 2026 BIOMAX AI. Все права защищены.
- Privacy Policy | Terms of Service | Cookie Policy
- "Данные хранятся в РФ в соответствии с 152-ФЗ"
- Language selector: RU | EN

COMPLIANCE BADGES:
- 152-ФЗ Compliant badge
- "Wellness Platform" disclaimer badge
- SSL Secured badge

NEWSLETTER SIGNUP (optional, small):
- "Подпишитесь на рассылку о биохакинге"
- Email input + Subscribe button

DESIGN STYLE:
- Dark background (#0F172A)
- Subtle top border or gradient separator from main content
- Links in light gray, hover in white
- Social icons with hover color effects
- Clean, organized columns
- Mobile: stack columns vertically

DIMENSIONS: 1440x400px footer
```

---

## 🎯 ПРОМПТ 16: Mobile Hero Adaptation

```
Create a mobile-optimized version of the hero section for BIOMAX AI.

REQUIREMENTS:
- Width: 375px (iPhone standard)
- Vertical layout
- Touch-friendly CTAs (min 44px tap targets)

LAYOUT:
1. Navigation (hamburger menu)
2. Headline (stacked, 2-3 lines)
3. Subheadline (shorter version)
4. Hero image/dashboard mockup (scaled down)
5. CTA buttons (full width, stacked)
6. Trust badges (horizontal scroll)

ADAPTATIONS:
- Headline: "Операционная система для здоровья"
- Subheadline: "15 AI-агентов. 100+ интеграций. Персонализация под вас."
- Dashboard mockup: simplified, showing only Health Score
- Floating elements: reduced or removed
- Background: simplified gradient

MOBILE-SPECIFIC:
- Sticky header on scroll
- Bottom navigation hint
- "Попробовать в Telegram" as primary CTA (mobile-native)
- Touch gestures for dashboard preview

DIMENSIONS: 375x800px (above fold)
```

---

## 🎯 ПРОМПТ 17: Partnership Page Hero

```
Design a hero section for the BIOMAX AI Partnership Page targeting potential partners.

HEADLINE: "Станьте партнёром BIOMAX AI"
SUBHEADLINE: "Вместе мы изменим подход к здоровью в России"

TARGET AUDIENCES (show as cards/tabs):

1. LABORATORIES
- Icon: Test tubes
- "INVITRO, Helix, CMD, Гемотест"
- Value: "API интеграция для автоматической загрузки результатов"

2. WEARABLE MANUFACTURERS
- Icon: Smartwatch
- "Oura, Garmin, WHOOP, Apple"
- Value: "Глубокая интеграция данных + co-marketing"

3. SUPPLEMENT BRANDS
- Icon: Pills/bottles
- "Маркетплейс добавок с персонализацией"
- Value: "10-15% комиссия, таргетированная аудитория"

4. CORPORATE WELLNESS
- Icon: Building/people
- "HR-программы здоровья для компаний"
- Value: "White-label решения, ROI analytics"

5. INSURANCE (DMZ)
- Icon: Shield
- "Интеграция с ДМС программами"
- Value: "Снижение выплат через превентивное здоровье"

6. CLINICS
- Icon: Hospital
- "Интегративная медицина, wellness-центры"
- Value: "Рефералы, совместные протоколы"

BENEFITS SECTION:
- "100K+ целевая аудитория биохакеров"
- "Готовая технологическая платформа"
- "152-ФЗ compliance из коробки"
- "Dedicated partner manager"

CTA:
"[Заполнить заявку на партнёрство]"
"[Скачать партнёрскую презентацию]"

DESIGN STYLE:
- Professional, B2B-oriented
- Less flashy than consumer landing
- Trust and credibility focused
- Clean cards with partner category icons
- Blue/purple gradient accents

DIMENSIONS: 1440x700px section
```

---

## Рекомендации по использованию промптов

### Порядок генерации:
1. Начните с Hero Section (#1)
2. Problem + Solution (#2, #3)
3. Ключевые фичи (#4, #5, #6)
4. Social proof (#7, #11)
5. Pricing (#10)
6. CTA + Footer (#14, #15)

### Советы для Figma Make:
- Генерируйте каждую секцию отдельно
- Используйте consistent color tokens
- После генерации проверьте spacing и alignment
- Адаптируйте под реальные фото/скриншоты
- Добавьте реальные метрики когда будут доступны

### Итерации:
- Если результат слишком "перегружен" — попросите упростить
- Если слишком простой — добавьте "more visual depth and details"
- Для конкретных стилей добавляйте референсы: "like Apple.com", "like Linear.app", "like Stripe.com"

---

*Документ создан: 2026-01-28*  
*Orchestrator Agent v1.0*
