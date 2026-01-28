import { ArrowRight, BarChart3, FileText, Upload, RotateCw } from "lucide-react";
import { DemoBanner } from "@/app/components/DemoBanner";
import { FooterCTA } from "@/app/components/FooterCTA";

interface ExperimentCardProps {
  emoji: string;
  title: string;
  experimentsCount: number;
  avgEffect: string;
  onTry: () => void;
}

function ExperimentCard({
  emoji,
  title,
  experimentsCount,
  avgEffect,
  onTry,
}: ExperimentCardProps) {
  return (
    <div className="glass-card group relative overflow-hidden border border-white/10 p-6 transition-all hover:border-[#00D4FF]/30 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
      {/* Glow effect */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#00D4FF]/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-3 text-4xl">{emoji}</div>
        <h3 className="mb-2 font-semibold text-white">{title}</h3>
        <div className="mb-4 space-y-1 text-sm text-white/60">
          <p>{experimentsCount} экспериментов</p>
          <p className="text-[#00FF94]">{avgEffect}</p>
        </div>
        <button
          onClick={onTry}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#00D4FF]/30 bg-[#00D4FF]/10 px-4 py-2 text-sm font-medium text-[#00D4FF] transition-all hover:bg-[#00D4FF]/20"
        >
          <span>Попробовать</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

interface BiohackerLabViewProps {
  onOpenModal: () => void;
}

export function BiohackerLabView({ onOpenModal }: BiohackerLabViewProps) {
  return (
    <div className="ml-60 p-8">
      {/* Demo Banner */}
      <div className="mb-8">
        <DemoBanner />
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-4xl">🧪</span>
          <h1 className="text-3xl font-bold text-white">
            Biohacker Lab — ваша научная лаборатория
          </h1>
        </div>
        <p className="max-w-3xl text-lg text-white/70">
          Проводите статистически корректные эксперименты над собой. ML
          анализирует результаты и определяет, что реально работает.
        </p>
      </div>

      {/* How it works */}
      <div className="mb-8">
        <div className="glass-card border border-white/10 p-8">
          <h2 className="mb-6 text-center text-xl font-semibold text-white">
            КАК ЭТО РАБОТАЕТ
          </h2>

          {/* Steps */}
          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-4">
            {/* Arrows between steps */}
            <div className="absolute left-1/4 top-12 hidden h-px w-1/2 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] md:block" />

            {/* Step 1 */}
            <div className="relative text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] text-xl font-bold text-white shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                1
              </div>
              <h3 className="mb-2 font-semibold text-white">Design</h3>
              <p className="text-sm text-white/60">
                📝 Сформулируйте гипотезу
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] text-xl font-bold text-white shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                2
              </div>
              <h3 className="mb-2 font-semibold text-white">Baseline</h3>
              <p className="text-sm text-white/60">
                📊 2 недели baseline данных
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] text-xl font-bold text-white shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                3
              </div>
              <h3 className="mb-2 font-semibold text-white">Intervention</h3>
              <p className="text-sm text-white/60">
                ⚡ 4+ недели тестирования
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] text-xl font-bold text-white shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                4
              </div>
              <h3 className="mb-2 font-semibold text-white">Analysis</h3>
              <p className="text-sm text-white/60">
                📈 ML-анализ p-value, effect size
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Experiment */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-white">
          ДЕМО-ЭКСПЕРИМЕНТ (пример завершённого)
        </h2>
        <div className="glass-card border-2 border-[#00FF94]/30 bg-gradient-to-br from-[#00FF94]/5 to-[#00D4FF]/5 p-8">
          {/* Header */}
          <div className="mb-6 flex items-start justify-between">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="text-3xl">🧪</span>
                <h3 className="text-2xl font-bold text-white">
                  Магний глицинат для улучшения deep sleep
                </h3>
              </div>
              <p className="mb-2 text-white/70">
                Гипотеза: "Магний 400mg увеличит deep sleep на 15%"
              </p>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="font-semibold text-[#00FF94]">Завершён</span>
              </div>
            </div>
          </div>

          {/* Before/After Comparison */}
          <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="mb-6 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Baseline */}
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/70">
                  Baseline (14 дней)
                </h4>
                <div className="mb-3 text-3xl font-bold text-white">
                  Deep Sleep: 68 min
                </div>
                <div className="h-12 overflow-hidden rounded-lg bg-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#00D4FF]"
                    style={{ width: "68%" }}
                  />
                </div>
              </div>

              {/* Intervention */}
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/70">
                  Intervention (28 дней)
                </h4>
                <div className="mb-3 text-3xl font-bold text-[#00FF94]">
                  Deep Sleep: 80 min (+18%)
                </div>
                <div className="h-12 overflow-hidden rounded-lg bg-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-[#00FF94] to-[#00D4FF] shadow-[0_0_20px_rgba(0,255,148,0.3)]"
                    style={{ width: "80%" }}
                  />
                </div>
              </div>
            </div>

            {/* Visual Chart */}
            <div className="flex items-end justify-center gap-12 rounded-lg bg-white/5 p-8">
              <div className="text-center">
                <div className="mb-2 h-32 w-24 rounded-t-lg bg-gradient-to-t from-[#8B5CF6] to-[#00D4FF]" />
                <div className="text-2xl font-bold text-white">68 min</div>
                <div className="text-sm text-white/60">Before</div>
              </div>
              <div className="text-4xl text-[#00FF94]">→</div>
              <div className="text-center">
                <div className="mb-2 h-40 w-24 rounded-t-lg bg-gradient-to-t from-[#00FF94] to-[#00D4FF] shadow-[0_0_30px_rgba(0,255,148,0.4)]" />
                <div className="text-2xl font-bold text-[#00FF94]">
                  80 min (+18%)
                </div>
                <div className="text-sm text-white/60">After</div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-6 space-y-3">
            <h4 className="text-lg font-semibold text-white">РЕЗУЛЬТАТЫ:</h4>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                <span className="text-xl">✅</span>
                <div>
                  <div className="text-sm text-white/60">Изменение</div>
                  <div className="font-semibold text-[#00FF94]">
                    +18% (превысило гипотезу!)
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                <span className="text-xl">📊</span>
                <div>
                  <div className="text-sm text-white/60">p-value</div>
                  <div className="font-semibold text-white">
                    0.03 (статистически значимо)
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                <span className="text-xl">📈</span>
                <div>
                  <div className="text-sm text-white/60">Effect size</div>
                  <div className="font-semibold text-white">0.65 (средний)</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                <span className="text-xl">🎯</span>
                <div>
                  <div className="text-sm text-white/60">Confidence</div>
                  <div className="font-semibold text-white">
                    95% CI [8%, 28%]
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mb-6 rounded-xl border border-[#00FF94]/30 bg-[#00FF94]/10 p-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <div className="font-semibold text-white">ВЫВОД:</div>
                <p className="text-white/90">
                  Эффект подтверждён! Рекомендуем добавить в базовый протокол.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={onOpenModal}
              className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-medium text-white transition-all hover:bg-white/20"
            >
              <BarChart3 className="h-5 w-5" />
              <span>Подробный отчёт</span>
            </button>
            <button
              onClick={onOpenModal}
              className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-medium text-white transition-all hover:bg-white/20"
            >
              <Upload className="h-5 w-5" />
              <span>Экспорт данных</span>
            </button>
            <button
              onClick={onOpenModal}
              className="flex items-center gap-2 rounded-lg border border-[#00D4FF]/30 bg-[#00D4FF]/10 px-6 py-3 font-medium text-[#00D4FF] transition-all hover:bg-[#00D4FF]/20"
            >
              <RotateCw className="h-5 w-5" />
              <span>Повторить</span>
            </button>
          </div>
        </div>
      </div>

      {/* Popular Experiments */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-white">
          ПОПУЛЯРНЫЕ ЭКСПЕРИМЕНТЫ В СООБЩЕСТВЕ
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <ExperimentCard
            emoji="💊"
            title="NMN и энергия"
            experimentsCount={234}
            avgEffect="Avg effect: +12%"
            onTry={onOpenModal}
          />
          <ExperimentCard
            emoji="🧊"
            title="Cold exposure"
            experimentsCount={156}
            avgEffect="Avg effect: HRV+15%"
            onTry={onOpenModal}
          />
          <ExperimentCard
            emoji="☀️"
            title="Morning sunlight"
            experimentsCount={189}
            avgEffect="Avg effect: Sleep+"
            onTry={onOpenModal}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="mb-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* CTA */}
      <div className="mb-8 text-center">
        <button
          onClick={onOpenModal}
          className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] px-12 py-5 text-lg font-bold text-white shadow-[0_0_40px_rgba(0,212,255,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(0,212,255,0.6)]"
        >
          <span>🚀</span>
          <span>Создать свой эксперимент</span>
        </button>
        <p className="mt-4 text-sm text-white/50">
          Coming in April 2026 • Join waitlist to get early access
        </p>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-sm text-white/30">
        <p>AI Health Dashboard 2026 • Powered by Neural Analytics</p>
        <p className="mt-1">
          Biohacker Lab uses ML to analyze your N=1 experiments • Science-backed
          protocols
        </p>
      </div>

      {/* Footer CTA */}
      <div className="mt-12">
        <FooterCTA />
      </div>
    </div>
  );
}