import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface HealthMetricCardProps {
  title: string;
  value: string;
  change?: string;
  icon: LucideIcon;
  color?: "cyan" | "green" | "purple";
  trend?: "up" | "down" | "neutral";
}

export function HealthMetricCard({
  title,
  value,
  change,
  icon: Icon,
  color = "cyan",
  trend = "neutral",
}: HealthMetricCardProps) {
  const colorMap = {
    cyan: { primary: "#00D4FF", glow: "rgba(0, 212, 255, 0.3)" },
    green: { primary: "#00FF94", glow: "rgba(0, 255, 148, 0.3)" },
    purple: { primary: "#8B5CF6", glow: "rgba(139, 92, 246, 0.3)" },
  };

  const trendColors = {
    up: "#00FF94",
    down: "#EF4444",
    neutral: "#9CA3AF",
  };

  return (
    <motion.div
      className="glass-card rounded-2xl p-6 relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            `radial-gradient(circle at 0% 0%, ${colorMap[color].primary}, transparent)`,
            `radial-gradient(circle at 100% 100%, ${colorMap[color].primary}, transparent)`,
            `radial-gradient(circle at 0% 0%, ${colorMap[color].primary}, transparent)`,
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div
            className="p-3 rounded-xl"
            style={{
              background: colorMap[color].glow,
              border: `1px solid ${colorMap[color].primary}60`,
            }}
          >
            <Icon size={24} style={{ color: colorMap[color].primary }} />
          </div>
          {change && (
            <div
              className="text-sm font-medium px-2 py-1 rounded-lg"
              style={{
                color: trendColors[trend],
                background: `${trendColors[trend]}20`,
              }}
            >
              {trend === "up" ? "↑" : trend === "down" ? "↓" : "→"} {change}
            </div>
          )}
        </div>

        <h3 className="text-muted-foreground text-sm mb-2">{title}</h3>
        <div className="font-semibold" style={{ fontSize: "2rem", color: colorMap[color].primary }}>
          {value}
        </div>
      </div>
    </motion.div>
  );
}
