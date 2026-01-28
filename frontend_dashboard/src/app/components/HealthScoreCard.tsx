import { TrendingUp, ArrowRight } from "lucide-react";

interface HealthScoreCardProps {
  onOpenModal?: () => void;
}

export function HealthScoreCard({ onOpenModal }: HealthScoreCardProps) {
  return (
    <div className="glass-card group relative overflow-hidden border border-white/10 p-8">
      {/* Glow effect */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#00D4FF]/20 blur-3xl" />

      {/* Score Circle */}
      <div className="relative mb-6 flex justify-center">
        <div className="relative">
          {/* Background circle */}
          <svg className="h-48 w-48 -rotate-90 transform">
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="12"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="url(#scoreGradient)"
              strokeWidth="12"
              fill="none"
              strokeDasharray={`${(87 / 100) * 553} 553`}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="50%" stopColor="#00FF94" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Score text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-bold text-white">87</span>
            <span className="text-lg text-white/60">/100</span>
          </div>
        </div>
      </div>

      {/* Title & Change */}
      <div className="relative text-center">
        <h3 className="mb-1 text-xl font-semibold text-white">Health Score</h3>
        <div className="flex items-center justify-center gap-2 text-[#00FF94]">
          <TrendingUp className="h-4 w-4" />
          <span className="text-sm font-medium">+5 за месяц</span>
        </div>
      </div>

      {/* Mini Radar Chart Preview */}
      <div className="relative mt-6 opacity-60">
        <svg viewBox="0 0 200 120" className="h-24 w-full">
          {/* Radar chart simplified */}
          <polygon
            points="100,10 150,35 160,80 100,100 40,80 50,35"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />
          <polygon
            points="100,20 140,40 145,75 100,90 55,75 60,40"
            fill="rgba(0, 212, 255, 0.2)"
            stroke="#00D4FF"
            strokeWidth="2"
          />
          {/* Dimension labels */}
          <text x="100" y="8" fill="white" fontSize="8" textAnchor="middle">
            Сон
          </text>
          <text x="165" y="85" fill="white" fontSize="8" textAnchor="start">
            HRV
          </text>
          <text x="100" y="115" fill="white" fontSize="8" textAnchor="middle">
            Метаб.
          </text>
          <text x="30" y="85" fill="white" fontSize="8" textAnchor="end">
            Stress
          </text>
        </svg>
      </div>

      {/* View Details Link */}
      <button
        onClick={onOpenModal}
        className="group/btn mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-2 text-sm font-medium text-white/80 transition-all hover:bg-white/10"
      >
        <span>Подробный анализ</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
      </button>
    </div>
  );
}