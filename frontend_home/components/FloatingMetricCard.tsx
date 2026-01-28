import { motion } from "motion/react";

interface FloatingMetricCardProps {
  label: string;
  value: string;
  trend?: "up" | "down";
  position: { x: number; y: number };
  delay?: number;
}

export function FloatingMetricCard({ label, value, trend, position, delay = 0 }: FloatingMetricCardProps) {
  return (
    <motion.div
      className="absolute glass-card rounded-xl px-4 py-3 backdrop-blur-xl"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        background: "rgba(26, 31, 46, 0.8)",
        border: "1px solid rgba(0, 212, 255, 0.3)",
        boxShadow: "0 8px 32px rgba(0, 212, 255, 0.15)",
      }}
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        delay: delay,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 12px 48px rgba(0, 212, 255, 0.25)",
      }}
    >
      <div className="flex items-center gap-3">
        <div>
          <div className="text-xs text-muted-foreground mb-1">{label}</div>
          <div className="font-semibold text-[#00D4FF] flex items-center gap-2">
            {value}
            {trend && (
              <span className={trend === "up" ? "text-[#00FF94]" : "text-[#EF4444]"}>
                {trend === "up" ? "↑" : "↓"}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
