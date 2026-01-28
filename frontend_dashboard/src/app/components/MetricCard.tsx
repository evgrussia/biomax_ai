import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  iconColor: "cyan" | "green" | "purple";
  trend?: ReactNode;
}

export function MetricCard({
  title,
  value,
  unit,
  change,
  changeType = "neutral",
  icon: Icon,
  iconColor,
  trend,
}: MetricCardProps) {
  const iconColorMap = {
    cyan: "from-[#00D4FF] to-[#0099CC]",
    green: "from-[#00FF94] to-[#00CC75]",
    purple: "from-[#8B5CF6] to-[#6D28D9]",
  };

  const glowColorMap = {
    cyan: "shadow-[0_0_20px_rgba(0,212,255,0.15)]",
    green: "shadow-[0_0_20px_rgba(0,255,148,0.15)]",
    purple: "shadow-[0_0_20px_rgba(139,92,246,0.15)]",
  };

  const changeColorMap = {
    positive: "text-[#00FF94]",
    negative: "text-[#EF4444]",
    neutral: "text-white/50",
  };

  return (
    <div
      className={`glass-card glass-card-hover group relative overflow-hidden p-6 transition-all ${glowColorMap[iconColor]}`}
    >
      {/* Background gradient effect */}
      <div
        className={`absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br ${iconColorMap[iconColor]} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`}
      />

      <div className="relative">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${iconColorMap[iconColor]} shadow-lg`}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>
          {change && (
            <div className={`text-sm font-semibold ${changeColorMap[changeType]}`}>
              {change}
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-sm font-medium text-white/60">{title}</h3>

        {/* Value */}
        <div className="mb-3 flex items-baseline gap-2">
          <span className="text-3xl font-bold text-white">{value}</span>
          {unit && <span className="text-lg text-white/40">{unit}</span>}
        </div>

        {/* Trend */}
        {trend && <div className="mt-4">{trend}</div>}
      </div>
    </div>
  );
}
