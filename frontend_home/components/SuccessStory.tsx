import { motion } from "motion/react";
import { Quote, TrendingDown } from "lucide-react";

export function SuccessStory() {
  return (
    <motion.div
      className="rounded-3xl p-10 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.15))",
        border: "2px solid rgba(139, 92, 246, 0.4)",
        backdropFilter: "blur(16px)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.2), transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{
            background: "rgba(139, 92, 246, 0.2)",
            border: "1px solid rgba(139, 92, 246, 0.5)",
          }}
        >
          <Quote size={16} className="text-[#8B5CF6]" />
          <span className="text-sm font-semibold text-[#8B5CF6]">Success Story</span>
        </div>

        {/* Story */}
        <div className="mb-6">
          <p className="text-xl text-gray-200 leading-relaxed italic mb-4">
            "Дмитрий, 56 лет, снизил биологический возраст на{" "}
            <span className="text-[#00FF94] font-bold not-italic">2 года</span>{" "}
            за 6 месяцев с протоколом BIOMAX"
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Хронологический возраст", value: "56 лет", color: "#6B7280" },
            { label: "Биовозраст (начало)", value: "58.2 года", color: "#F59E0B" },
            { label: "Биовозраст (сейчас)", value: "56.2 года", color: "#00FF94" },
          ].map((metric, i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-4 text-center"
              style={{
                background: `${metric.color}15`,
                border: `1px solid ${metric.color}40`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="text-xs text-gray-400 mb-2">{metric.label}</div>
              <div className="text-2xl font-bold" style={{ color: metric.color }}>
                {metric.value}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement */}
        <motion.div
          className="mt-6 flex items-center justify-center gap-3 p-4 rounded-2xl"
          style={{
            background: "rgba(0, 255, 148, 0.1)",
            border: "1px solid rgba(0, 255, 148, 0.3)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <TrendingDown size={24} className="text-[#00FF94]" />
          <span className="text-lg font-semibold text-[#00FF94]">
            -2 года за 6 месяцев
          </span>
          <span className="text-2xl">🎯</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
