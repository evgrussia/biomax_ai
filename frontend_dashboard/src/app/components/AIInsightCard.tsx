import { ArrowRight, Sparkles } from "lucide-react";

interface AIInsightCardProps {
  onOpenModal?: () => void;
}

export function AIInsightCard({ onOpenModal }: AIInsightCardProps) {
  return (
    <div className="glass-card group relative overflow-hidden border border-[#8B5CF6]/30 bg-gradient-to-br from-[#8B5CF6]/10 to-[#00D4FF]/10 p-6">
      {/* Glow effect */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#8B5CF6]/20 blur-3xl" />

      {/* Header */}
      <div className="relative mb-4 flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#00D4FF] shadow-lg">
          <span className="text-xl">🤖</span>
        </div>
        <h3 className="text-lg font-semibold text-white">AI-инсайт дня</h3>
      </div>

      {/* Insight Content */}
      <div className="relative">
        <div className="mb-4 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
          <p className="text-sm leading-relaxed text-white/80">
            "На основе данных Oura, ваш HRV улучшился на{" "}
            <span className="font-semibold text-[#00FF94]">12% за неделю</span>.
            Продолжайте текущий режим сна — он работает!"
          </p>
        </div>

        {/* Source */}
        <div className="mb-4 flex items-center gap-2 text-sm text-white/60">
          <span className="text-base">📖</span>
          <span>Источник: Sleep Agent</span>
        </div>

        {/* Action Button */}
        <button 
          onClick={onOpenModal}
          className="group/btn flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#8B5CF6]/20 to-[#00D4FF]/20 py-2.5 text-sm font-medium text-white transition-all hover:from-[#8B5CF6]/30 hover:to-[#00D4FF]/30">
          <span>Подробнее</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>

      {/* Sparkle decoration */}
      <Sparkles className="absolute right-4 top-4 h-5 w-5 text-[#00FF94]/30" />
    </div>
  );
}