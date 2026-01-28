import { Check, Clock, Play } from "lucide-react";

interface Recommendation {
  id: number;
  title: string;
  description: string;
  icon: string;
  status: "completed" | "pending" | "ready";
  buttonText: string;
}

const recommendations: Recommendation[] = [
  {
    id: 1,
    title: "Утренняя прогулка 15м",
    description: "☀️ Свет для ритмов",
    icon: "1️⃣",
    status: "completed",
    buttonText: "Выполнено ✓",
  },
  {
    id: 2,
    title: "Магний в 21:00",
    description: "💤 Улучшение сна",
    icon: "2️⃣",
    status: "pending",
    buttonText: "Напомнить",
  },
  {
    id: 3,
    title: "Zone 2 кардио 30м",
    description: "🏃 Сегодня по плану",
    icon: "3️⃣",
    status: "ready",
    buttonText: "Начать",
  },
];

interface RecommendationsSectionProps {
  onOpenModal?: () => void;
}

export function RecommendationsSection({ onOpenModal }: RecommendationsSectionProps) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-white">
        Рекомендации на сегодня
      </h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className={`glass-card group relative overflow-hidden border p-5 transition-all ${
              rec.status === "completed"
                ? "border-[#00FF94]/30 bg-[#00FF94]/5"
                : "border-white/10 hover:border-white/20"
            }`}
          >
            {/* Status indicator */}
            {rec.status === "completed" && (
              <div className="absolute right-3 top-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00FF94]">
                  <Check className="h-4 w-4 text-white" strokeWidth={3} />
                </div>
              </div>
            )}

            {/* Number Badge */}
            <div className="mb-3 text-2xl">{rec.icon}</div>

            {/* Content */}
            <h4 className="mb-1 font-semibold text-white">{rec.title}</h4>
            <p className="mb-4 text-sm text-white/60">{rec.description}</p>

            {/* Action Button */}
            <button
              onClick={rec.status !== "completed" ? onOpenModal : undefined}
              disabled={rec.status === "completed"}
              className={`flex w-full items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium transition-all ${
                rec.status === "completed"
                  ? "bg-[#00FF94]/20 text-[#00FF94] cursor-not-allowed"
                  : rec.status === "pending"
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-gradient-to-r from-[#00D4FF] to-[#00FF94] text-white hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
              }`}
            >
              {rec.status === "pending" && <Clock className="h-4 w-4" />}
              {rec.status === "ready" && <Play className="h-4 w-4" />}
              <span>{rec.buttonText}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}