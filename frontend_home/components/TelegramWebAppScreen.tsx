import { motion } from "motion/react";
import { Activity, Heart, TrendingUp, Zap } from "lucide-react";

export function TelegramWebAppScreen() {
  const metrics = [
    { icon: Heart, value: "62", label: "HRV", color: "#EC4899" },
    { icon: Activity, value: "7.2h", label: "Sleep", color: "#8B5CF6" },
    { icon: Zap, value: "1,847", label: "Steps", color: "#F59E0B" },
    { icon: TrendingUp, value: "98.2", label: "Temp", color: "#00FF94" },
  ];

  return (
    <div className="h-full overflow-y-auto">
      {/* Header */}
      <div className="px-4 py-6"
        style={{
          background: "linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(139, 92, 246, 0.2))",
        }}
      >
        <div className="text-xs text-gray-400 mb-1">Health Score</div>
        <div className="flex items-end gap-2">
          <motion.div
            className="text-5xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#00FF94] bg-clip-text text-transparent"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            87
          </motion.div>
          <div className="text-sm text-[#00FF94] mb-2">↑ +3</div>
        </div>
        <div className="text-xs text-gray-400 mt-1">Отличная форма!</div>
      </div>

      {/* Metrics Grid */}
      <div className="px-4 py-4 grid grid-cols-2 gap-3">
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            className="rounded-2xl p-3"
            style={{
              background: `${metric.color}15`,
              border: `1px solid ${metric.color}30`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <metric.icon size={16} style={{ color: metric.color }} />
            <div className="text-2xl font-bold text-white mt-2">
              {metric.value}
            </div>
            <div className="text-xs text-gray-400 mt-1">{metric.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Chart */}
      <div className="px-4 py-4">
        <div
          className="rounded-2xl p-4"
          style={{
            background: "rgba(26, 31, 46, 0.8)",
            border: "1px solid rgba(0, 212, 255, 0.2)",
          }}
        >
          <div className="text-sm font-semibold text-gray-300 mb-3">
            Sleep Quality — 7 days
          </div>
          <div className="flex items-end justify-between h-24 gap-1">
            {[65, 72, 68, 85, 78, 82, 87].map((value, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t"
                style={{
                  height: `${value}%`,
                  background: i === 6 
                    ? "linear-gradient(to top, #00D4FF, #00FF94)"
                    : "rgba(107, 114, 128, 0.4)",
                }}
                initial={{ height: 0 }}
                animate={{ height: `${value}%` }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Mo</span>
            <span>Tu</span>
            <span>We</span>
            <span>Th</span>
            <span>Fr</span>
            <span>Sa</span>
            <span className="text-[#00D4FF]">Su</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 pb-4">
        <div className="grid grid-cols-2 gap-2">
          <button
            className="px-4 py-3 rounded-xl text-sm font-semibold"
            style={{
              background: "linear-gradient(135deg, #00D4FF, #00FF94)",
              color: "#0A0F1E",
            }}
          >
            Ask AI
          </button>
          <button
            className="px-4 py-3 rounded-xl text-sm font-semibold text-gray-300"
            style={{
              background: "rgba(26, 31, 46, 0.8)",
              border: "1px solid rgba(107, 114, 128, 0.3)",
            }}
          >
            View Full Report
          </button>
        </div>
      </div>
    </div>
  );
}
