import { ArrowRight, Send } from "lucide-react";
import { DemoBanner } from "@/app/components/DemoBanner";
import { FooterCTA } from "@/app/components/FooterCTA";

interface AgentCardProps {
  emoji: string;
  name: string;
  description: string;
  statLabel: string;
  statValue: string;
  onAsk: () => void;
}

function AgentCard({
  emoji,
  name,
  description,
  statLabel,
  statValue,
  onAsk,
}: AgentCardProps) {
  return (
    <div className="glass-card group relative overflow-hidden border border-white/10 p-6 transition-all hover:border-white/20 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
      {/* Glow effect */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#00D4FF]/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />

      {/* Header */}
      <div className="relative mb-3 flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#8B5CF6]/20">
          <span className="text-2xl">{emoji}</span>
        </div>
        <h3 className="font-semibold uppercase tracking-wide text-white">
          {name}
        </h3>
      </div>

      {/* Description */}
      <p className="relative mb-4 text-sm leading-relaxed text-white/60">
        {description}
      </p>

      {/* Stats */}
      <div className="relative mb-4 rounded-lg border border-white/10 bg-white/5 p-3">
        <div className="mb-1 text-xs font-medium uppercase tracking-wide text-white/50">
          {statLabel}
        </div>
        <div className="text-base font-semibold text-white">{statValue}</div>
      </div>

      {/* Status & Button */}
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-white/60">
          <div className="h-2 w-2 rounded-full bg-[#00FF94]" />
          <span>Активен</span>
        </div>
        <button
          onClick={onAsk}
          className="flex items-center gap-1 rounded-lg border border-[#00D4FF]/30 bg-[#00D4FF]/10 px-3 py-1.5 text-sm font-medium text-[#00D4FF] transition-all hover:bg-[#00D4FF]/20"
        >
          <span>Спросить</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

interface AIAgentsViewProps {
  onOpenModal: () => void;
}

export function AIAgentsView({ onOpenModal }: AIAgentsViewProps) {
  return (
    <div className="ml-0 p-4 md:ml-52 md:p-6 lg:ml-60 lg:p-8">
      {/* Demo Banner */}
      <div className="mb-8">
        <DemoBanner />
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-4xl">🤖</span>
          <h1 className="text-3xl font-bold text-white">
            15 AI-агентов работают для вас
          </h1>
        </div>
        <p className="max-w-3xl text-white/60">
          Каждый агент — специалист в своей области. Вместе они видят полную
          картину вашего здоровья и дают персонализированные рекомендации.
        </p>
      </div>

      {/* ORCHESTRATOR */}
      <div className="mb-8">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/70">
          Координация
        </h2>
        <div className="glass-card group relative overflow-hidden border-2 border-[#00D4FF]/30 bg-gradient-to-br from-[#00D4FF]/10 to-[#8B5CF6]/10 p-8">
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#00D4FF]/20 blur-3xl" />

          <div className="relative">
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] shadow-lg shadow-[#00D4FF]/30">
                <span className="text-4xl">🎯</span>
              </div>
              <div>
                <h3 className="mb-1 text-2xl font-bold uppercase tracking-wide text-white">
                  Orchestrator Agent
                </h3>
                <p className="text-white/70">
                  "Мозг" системы — координирует всех агентов, маршрутизирует
                  запросы
                </p>
              </div>
            </div>

            <div className="mb-4 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 animate-pulse rounded-full bg-[#00FF94]" />
                <span className="font-medium text-white">Статус: Активен</span>
              </div>
            </div>

            <button
              onClick={onOpenModal}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] px-6 py-3 font-semibold text-white shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
            >
              <span>Подробнее</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* HEALTH & WELLNESS */}
      <div className="mb-8">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/70">
          Здоровье и Wellness
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AgentCard
            emoji="😴"
            name="Sleep Agent"
            description="Архитектура сна, циркадные ритмы, оптимизация качества сна"
            statLabel="📊 Ваш deep sleep"
            statValue="1h 28m (+12%)"
            onAsk={onOpenModal}
          />
          <AgentCard
            emoji="🥗"
            name="Nutrition Agent"
            description="Нутригеномика, персональные диеты, макронутриенты"
            statLabel="📊 Ваш рацион"
            statValue="2100 kcal/day"
            onAsk={onOpenModal}
          />
          <AgentCard
            emoji="🏋️"
            name="Fitness Agent"
            description="Тренировки, восстановление, оптимизация нагрузок"
            statLabel="📊 Strain/Recovery"
            statValue="Balanced"
            onAsk={onOpenModal}
          />
          <AgentCard
            emoji="🧘"
            name="Mental Health"
            description="Стресс, тревожность, mood tracking, психическое здоровье"
            statLabel="📊 Stress level"
            statValue="Low (Good!)"
            onAsk={onOpenModal}
          />
          <AgentCard
            emoji="🧠"
            name="Cognitive Agent"
            description="Ноотропы, когнитивные функции, C-Score, фокус и память"
            statLabel="📊 C-Score"
            statValue="85/100"
            onAsk={onOpenModal}
          />
          <AgentCard
            emoji="🏆"
            name="Coach Agent"
            description="Мотивация, привычки, daily plans, accountability"
            statLabel="📊 Compliance"
            statValue="87% this week"
            onAsk={onOpenModal}
          />
        </div>
      </div>

      {/* LONGEVITY & BIOHACKING */}
      <div className="mb-8">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/70">
          Longevity и Биохакинг
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AgentCard
            emoji="⏳"
            name="Longevity Agent"
            description="Биологический возраст, эпигенетика, anti-aging протоколы"
            statLabel="📊 Bio Age"
            statValue="-2.7 years! 🎉"
            onAsk={onOpenModal}
          />
          <AgentCard
            emoji="🧬"
            name="Genomics Agent"
            description="ДНК, SNP, MTHFR, APOE, генетическая персонализация"
            statLabel="📊 Key SNPs"
            statValue="MTHFR: C677T"
            onAsk={onOpenModal}
          />
          <AgentCard
            emoji="🔬"
            name="Lab Interpreter"
            description="Анализы крови простым языком, референсные значения"
            statLabel="📊 Last labs"
            statValue="3 flags"
            onAsk={onOpenModal}
          />
          <AgentCard
            emoji="📚"
            name="Research Agent"
            description="PubMed, systematic reviews, evidence-based recommendations"
            statLabel="📊 Sources"
            statValue="7,000+ studies"
            onAsk={onOpenModal}
          />
          <AgentCard
            emoji="��"
            name="Custom Protocol"
            description="Ваши протоколы в Custom RAG, персональные стратегии"
            statLabel="📊 Protocols"
            statValue="2 uploaded"
            onAsk={onOpenModal}
          />
          <AgentCard
            emoji="📊"
            name="Data Scientist"
            description="Паттерны, корреляции, N=1 анализ, статистика"
            statLabel="📊 Insights"
            statValue="3 new correlations"
            onAsk={onOpenModal}
          />
        </div>
      </div>

      {/* SAFETY & INTEGRATION */}
      <div className="mb-8">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/70">
          Безопасность и Интеграция
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AgentCard
            emoji="🛡️"
            name="Safety Agent"
            description="Контрпоказания, взаимодействия препаратов, безопасность"
            statLabel="📊 Checks"
            statValue="All clear ✓"
            onAsk={onOpenModal}
          />
          <AgentCard
            emoji="🔄"
            name="Integration Agent"
            description="Синтез данных из всех источников, unified view"
            statLabel="📊 Sources"
            statValue="5 connected"
            onAsk={onOpenModal}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="mb-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Chat Input */}
      <div className="mb-8">
        <h3 className="mb-4 text-lg font-semibold text-white">
          💬 Задайте вопрос любому агенту
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder='Например: "Какой протокол NMN подходит для моего возраста?"'
            onClick={onOpenModal}
            readOnly
            className="w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-6 py-4 pr-14 text-white placeholder-white/40 backdrop-blur-sm transition-all focus:border-[#00D4FF]/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/20"
          />
          <button
            onClick={onOpenModal}
            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#00FF94] text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-sm text-white/30">
        <p>AI Health Dashboard 2026 • Powered by Neural Analytics</p>
        <p className="mt-1">
          All agents are running in demo mode • Full launch: April 2026
        </p>
      </div>

      {/* Footer CTA */}
      <div className="mt-12">
        <FooterCTA />
      </div>
    </div>
  );
}