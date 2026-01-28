import { Brain, Lightbulb, TrendingUp } from "lucide-react";

const insights = [
  {
    id: 1,
    icon: Brain,
    type: "AI Prediction",
    title: "Sleep Quality Improvement",
    description: "Based on your recent patterns, going to bed 30 minutes earlier could improve sleep quality by 18%.",
    confidence: 94,
    color: "purple",
  },
  {
    id: 2,
    icon: TrendingUp,
    type: "Trend Alert",
    title: "Heart Rate Variability Rising",
    description: "Your HRV has increased by 12% this week, indicating improved cardiovascular fitness.",
    confidence: 89,
    color: "cyan",
  },
  {
    id: 3,
    icon: Lightbulb,
    type: "Recommendation",
    title: "Hydration Reminder",
    description: "Your activity levels suggest increasing water intake to 2.8L per day for optimal performance.",
    confidence: 91,
    color: "green",
  },
];

export function AIInsights() {
  const colorMap = {
    cyan: {
      bg: "from-[#00D4FF]/10 to-[#0099CC]/10",
      border: "border-[#00D4FF]/30",
      icon: "bg-[#00D4FF]/20 text-[#00D4FF]",
    },
    green: {
      bg: "from-[#00FF94]/10 to-[#00CC75]/10",
      border: "border-[#00FF94]/30",
      icon: "bg-[#00FF94]/20 text-[#00FF94]",
    },
    purple: {
      bg: "from-[#8B5CF6]/10 to-[#6D28D9]/10",
      border: "border-[#8B5CF6]/30",
      icon: "bg-[#8B5CF6]/20 text-[#8B5CF6]",
    },
  };

  return (
    <div className="glass-card glass-card-hover p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">AI Health Insights</h3>
          <p className="text-sm text-white/50">Powered by neural analysis</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9]">
          <Brain className="h-5 w-5 text-white" />
        </div>
      </div>

      <div className="space-y-4">
        {insights.map((insight) => {
          const Icon = insight.icon;
          const colors = colorMap[insight.color as keyof typeof colorMap];

          return (
            <div
              key={insight.id}
              className={`group relative overflow-hidden rounded-xl border bg-gradient-to-r p-4 transition-all hover:scale-[1.02] ${colors.border} ${colors.bg}`}
            >
              <div className="flex gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${colors.icon}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-xs font-medium text-white/50">
                      {insight.type}
                    </span>
                    <span className="text-xs font-semibold text-white/70">
                      {insight.confidence}% confidence
                    </span>
                  </div>
                  <h4 className="mb-1 font-semibold text-white">{insight.title}</h4>
                  <p className="text-sm text-white/60">{insight.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
