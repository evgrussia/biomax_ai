import { motion } from "motion/react";

interface CircularProgressProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  color?: "cyan" | "green" | "purple";
  label?: string;
  subLabel?: string;
}

export function CircularProgress({
  value,
  max = 100,
  size = 120,
  strokeWidth = 8,
  color = "cyan",
  label,
  subLabel,
}: CircularProgressProps) {
  const percentage = (value / max) * 100;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  const colorMap = {
    cyan: "#00D4FF",
    green: "#00FF94",
    purple: "#8B5CF6",
  };

  const strokeColor = colorMap[color];

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(75, 85, 99, 0.3)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            filter: `drop-shadow(0 0 8px ${strokeColor}80)`,
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="font-semibold" style={{ color: strokeColor, fontSize: size / 4.5 }}>
          {Math.round(percentage)}%
        </div>
        {label && <div className="text-xs text-muted-foreground mt-1">{label}</div>}
        {subLabel && <div className="text-[10px] text-muted-foreground">{subLabel}</div>}
      </div>
    </div>
  );
}
