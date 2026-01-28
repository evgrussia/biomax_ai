import { motion } from "motion/react";
import { TrendingUp } from "lucide-react";

const metrics = [
  { label: "Sleep Quality", value: "+25%", color: "#00D4FF" },
  { label: "HRV", value: "+18%", color: "#8B5CF6" },
  { label: "Health Score", value: "+12", color: "#00FF94" },
  { label: "Biological Age", value: "-1.2 года", color: "#F59E0B", subtitle: "(6 мес)" },
];

export function MetricsShowcase() {
  return (
    <motion.div
      className="rounded-3xl p-10"
      style={{
        background: "linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(139, 92, 246, 0.15))",
        border: "2px solid rgba(0, 212, 255, 0.4)",
        backdropFilter: "blur(16px)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-10">
        <div className="text-3xl mb-3">📊</div>
        <h3 className="text-2xl font-bold text-gray-200 mb-2">
          Средние результаты наших пользователей
        </h3>
        <p className="text-sm text-gray-400">
          На основе данных 1,000+ активных пользователей за 6 месяцев
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            className="rounded-2xl p-6 text-center"
            style={{
              background: "rgba(26, 31, 46, 0.8)",
              border: `2px solid ${metric.color}40`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{
              scale: 1.05,
              borderColor: `${metric.color}80`,
              boxShadow: `0 0 30px ${metric.color}40`,
            }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4"
              style={{
                background: `${metric.color}20`,
                border: `1px solid ${metric.color}60`,
              }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            >
              <TrendingUp size={24} style={{ color: metric.color }} />
            </motion.div>

            <div className="text-3xl font-bold mb-2" style={{ color: metric.color }}>
              {metric.value}
            </div>
            <div className="text-sm text-gray-300 font-medium mb-1">
              {metric.label}
            </div>
            {metric.subtitle && (
              <div className="text-xs text-gray-500">{metric.subtitle}</div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="text-center mt-8 text-xs text-gray-500">
        * Индивидуальные результаты могут варьироваться в зависимости от baseline и compliance
      </div>
    </motion.div>
  );
}
