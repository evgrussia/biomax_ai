import { TrendingUp, TrendingDown, Activity } from "lucide-react";

interface DetailedMetricCardProps {
  title: string;
  icon: string;
  mainValue: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  details: { label: string; value: string }[];
  accentColor: string;
  onOpenModal?: () => void;
}

export function DetailedMetricCard({
  title,
  icon,
  mainValue,
  change,
  changeType,
  details,
  accentColor,
  onOpenModal,
}: DetailedMetricCardProps) {
  const getChangeIcon = () => {
    if (changeType === "positive") return <TrendingUp className="h-4 w-4" />;
    if (changeType === "negative") return <TrendingDown className="h-4 w-4" />;
    return <Activity className="h-4 w-4" />;
  };

  const getChangeColor = () => {
    if (changeType === "positive") return "text-[#00FF94]";
    if (changeType === "negative") return "text-red-400";
    return "text-white/60";
  };

  const getBorderGlow = () => {
    if (accentColor === "cyan") return "group-hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]";
    if (accentColor === "green") return "group-hover:shadow-[0_0_20px_rgba(0,255,148,0.2)]";
    if (accentColor === "purple") return "group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]";
    return "";
  };

  return (
    <div
      onClick={onOpenModal}
      className={`glass-card group relative cursor-pointer overflow-hidden border border-white/10 p-5 transition-all hover:border-white/20 ${getBorderGlow()}`}
    >
      {/* Icon & Title */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{icon}</span>
          <h4 className="font-semibold text-white/80">{title}</h4>
        </div>
      </div>

      {/* Main Value */}
      <div className="mb-2">
        <span className="text-3xl font-bold text-white">{mainValue}</span>
      </div>

      {/* Change */}
      <div className={`mb-3 flex items-center gap-1 text-sm font-medium ${getChangeColor()}`}>
        {getChangeIcon()}
        <span>{change}</span>
      </div>

      {/* Details */}
      <div className="space-y-1 border-t border-white/10 pt-3">
        {details.map((detail, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <span className="text-white/60">{detail.label}:</span>
            <span className="font-medium text-white/80">{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}