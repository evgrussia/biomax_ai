import { ArrowLeft, ChevronDown, Send, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { DemoBanner } from "@/app/components/DemoBanner";

interface MetricStatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  target: string;
}

function MetricStatCard({ title, value, change, changeType, target }: MetricStatCardProps) {
  const getIcon = () => {
    if (changeType === "positive") return <TrendingUp className="h-4 w-4" />;
    if (changeType === "negative") return <TrendingDown className="h-4 w-4" />;
    return <Minus className="h-4 w-4" />;
  };

  const getColor = () => {
    if (changeType === "positive") return "text-[#00FF94]";
    if (changeType === "negative") return "text-red-400";
    return "text-white/60";
  };

  return (
    <div className="glass-card group relative overflow-hidden border border-white/10 p-5 transition-all hover:border-white/20">
      <div className="relative">
        <h4 className="mb-2 text-sm font-medium text-white/60">{title}</h4>
        <div className="mb-2 text-2xl font-bold text-white">{value}</div>
        <div className={`mb-2 flex items-center gap-1 text-sm font-medium ${getColor()}`}>
          {getIcon()}
          <span>{change}</span>
        </div>
        <div className="text-xs text-white/50">{target}</div>
      </div>
    </div>
  );
}

interface MetricDetailViewProps {
  onBack: () => void;
  onOpenModal: () => void;
}

export function MetricDetailView({ onBack, onOpenModal }: MetricDetailViewProps) {
  return (
    <div className="ml-60 p-8">
      {/* Demo Banner */}
      <div className="mb-8">
        <DemoBanner />
      </div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-white/60 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="font-medium">Назад к дашборду</span>
      </button>

      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <span className="text-4xl">😴</span>
        <h1 className="text-3xl font-bold text-white">Сон — детальный анализ</h1>
      </div>

      {/* Current Metrics */}
      <div className="mb-8 glass-card border border-white/10 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Текущие показатели</h2>
          <button
            onClick={onOpenModal}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10"
          >
            <span>Период: 7 дней</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <MetricStatCard
            title="Total Sleep"
            value="7h 12m"
            change="↑ +32min"
            changeType="positive"
            target="Target: 7-8h"
          />
          <MetricStatCard
            title="Deep Sleep"
            value="1h 28m"
            change="↑ +12min"
            changeType="positive"
            target="Target: 1.5h+"
          />
          <MetricStatCard
            title="REM Sleep"
            value="1h 45m"
            change="→ stable"
            changeType="neutral"
            target="Target: 1.5h+"
          />
          <MetricStatCard
            title="Sleep Latency"
            value="12 min"
            change="↓ -5min ✓"
            changeType="positive"
            target="Target: <15m"
          />
          <MetricStatCard
            title="Efficiency"
            value="91%"
            change="↑ +3% ✓"
            changeType="positive"
            target="Target: 90%+"
          />
          <MetricStatCard
            title="Avg Wake Time"
            value="06:42"
            change="consistent"
            changeType="neutral"
            target=""
          />
        </div>
      </div>

      {/* Trend Chart */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-white">
          Тренд за последние 7 дней
        </h2>
        <div className="glass-card border border-white/10 p-6">
          {/* Chart Placeholder */}
          <div className="mb-4 h-64 rounded-lg bg-white/5">
            <div className="flex h-full items-end justify-around px-8 pb-8">
              {/* Mock bar chart data for 7 days */}
              {[
                { deep: 70, light: 180, rem: 90, awake: 20 },
                { deep: 75, light: 190, rem: 95, awake: 15 },
                { deep: 80, light: 185, rem: 100, awake: 18 },
                { deep: 85, light: 195, rem: 105, awake: 12 },
                { deep: 88, light: 200, rem: 108, awake: 10 },
                { deep: 90, light: 205, rem: 110, awake: 8 },
                { deep: 88, light: 210, rem: 105, awake: 10 },
              ].map((day, index) => {
                const total = day.deep + day.light + day.rem + day.awake;
                const maxHeight = 200;
                const scale = maxHeight / total;

                return (
                  <div
                    key={index}
                    className="flex w-12 flex-col items-center"
                  >
                    <div className="mb-2 flex w-full flex-col overflow-hidden rounded-t-lg">
                      <div
                        className="w-full bg-red-400/60"
                        style={{ height: `${day.awake * scale}px` }}
                      />
                      <div
                        className="w-full bg-[#8B5CF6]"
                        style={{ height: `${day.rem * scale}px` }}
                      />
                      <div
                        className="w-full bg-[#00D4FF]/60"
                        style={{ height: `${day.light * scale}px` }}
                      />
                      <div
                        className="w-full bg-[#00FF94]"
                        style={{ height: `${day.deep * scale}px` }}
                      />
                    </div>
                    <span className="text-xs text-white/60">
                      {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"][index]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-sm bg-[#00FF94]" />
              <span className="text-white/70">Deep</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-sm bg-[#00D4FF]/60" />
              <span className="text-white/70">Light</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-sm bg-[#8B5CF6]" />
              <span className="text-white/70">REM</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-sm bg-red-400/60" />
              <span className="text-white/70">Awake</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-white">
          AI-инсайты от Sleep Agent
        </h2>
        <div className="glass-card border border-[#8B5CF6]/30 bg-gradient-to-br from-[#8B5CF6]/10 to-[#00D4FF]/10 p-6">
          <div className="mb-4 flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#00D4FF]">
              <span className="text-xl">💡</span>
            </div>
            <div className="flex-1">
              <p className="mb-3 leading-relaxed text-white/90">
                "Ваш deep sleep улучшился на 12% за последнюю неделю. Это
                коррелирует с более ранним временем отхода ко сну (в среднем на
                45 минут раньше)."
              </p>
              <div className="mb-4 flex items-center gap-2 text-sm text-white/60">
                <span className="text-base">📚</span>
                <span>Источник: Walker, M. "Why We Sleep" + Oura data analysis</span>
              </div>
              <button
                onClick={onOpenModal}
                className="flex items-center gap-2 rounded-lg border border-[#00D4FF]/30 bg-[#00D4FF]/10 px-4 py-2 text-sm font-medium text-[#00D4FF] transition-all hover:bg-[#00D4FF]/20"
              >
                <span>Подробнее об этом инсайте</span>
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-white">
          Рекомендации по улучшению
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Recommendation 1 */}
          <div className="glass-card border border-white/10 p-5">
            <div className="mb-3 text-2xl">1️⃣</div>
            <h4 className="mb-2 font-semibold text-white">
              Температура 18-19°C
            </h4>
            <p className="mb-4 text-sm text-white/60">
              Улучшает deep sleep
            </p>
            <button className="w-full rounded-lg bg-[#00FF94]/20 py-2 text-sm font-medium text-[#00FF94]">
              Я уже делаю ✓
            </button>
          </div>

          {/* Recommendation 2 */}
          <div className="glass-card border border-white/10 p-5">
            <div className="mb-3 text-2xl">2️⃣</div>
            <h4 className="mb-2 font-semibold text-white">
              Магний за 2ч до сна
            </h4>
            <p className="mb-4 text-sm text-white/60">
              400mg глицинат
            </p>
            <button
              onClick={onOpenModal}
              className="w-full rounded-lg bg-white/10 py-2 text-sm font-medium text-white transition-all hover:bg-white/20"
            >
              Добавить напоминание
            </button>
          </div>

          {/* Recommendation 3 */}
          <div className="glass-card border border-white/10 p-5">
            <div className="mb-3 text-2xl">3️⃣</div>
            <h4 className="mb-2 font-semibold text-white">
              No screens after 22:00
            </h4>
            <p className="mb-4 text-sm text-white/60">
              Blue light = меньше мелатонина
            </p>
            <button
              onClick={onOpenModal}
              className="w-full rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#00FF94] py-2 text-sm font-medium text-white transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
            >
              Начать challenge
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mb-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Ask Agent */}
      <div className="mb-8">
        <h3 className="mb-4 text-lg font-semibold text-white">
          💬 Спросить Sleep Agent
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Как улучшить REM сон?"
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
          Sleep data synced from Oura Ring • Last sync: 2 hours ago
        </p>
      </div>
    </div>
  );
}
