import { motion } from "motion/react";
import { TrendingUp, CheckCircle } from "lucide-react";

export function ExperimentCard() {
  return (
    <motion.div
      className="rounded-3xl p-8"
      style={{
        background: "linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(139, 92, 246, 0.15))",
        border: "2px solid rgba(0, 212, 255, 0.4)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 0 40px rgba(0, 212, 255, 0.2)",
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="text-3xl">🧪</div>
          <div>
            <h3 className="text-xl font-bold text-gray-200">
              Магний глицинат для deep sleep
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Гипотеза: "Магний увеличит deep sleep на 15%"
            </p>
          </div>
        </div>
        <div
          className="px-4 py-2 rounded-full text-sm font-medium"
          style={{
            background: "rgba(0, 255, 148, 0.2)",
            border: "1px solid rgba(0, 255, 148, 0.5)",
            color: "#00FF94",
          }}
        >
          Активен
        </div>
      </div>

      {/* Phase indicator */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <motion.div
            className="w-3 h-3 rounded-full bg-[#00D4FF]"
            animate={{
              boxShadow: [
                "0 0 10px #00D4FF",
                "0 0 20px #00D4FF",
                "0 0 10px #00D4FF",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm text-gray-300">
            Фаза: <span className="text-[#00D4FF] font-semibold">Интервенция</span>
          </span>
          <span className="text-gray-400">●</span>
          <span className="text-sm text-gray-400">день 18 из 28</span>
        </div>
        
        {/* Progress bar */}
        <div className="h-2 rounded-full bg-gray-800/50 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #00D4FF, #8B5CF6)",
              boxShadow: "0 0 15px rgba(0, 212, 255, 0.6)",
            }}
            initial={{ width: 0 }}
            whileInView={{ width: "64%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
      </div>

      {/* Mini graph placeholder */}
      <div
        className="rounded-xl p-6 mb-6"
        style={{
          background: "rgba(10, 15, 30, 0.6)",
          border: "1px solid rgba(0, 212, 255, 0.2)",
        }}
      >
        <div className="flex items-end justify-between h-32 gap-2">
          {/* Baseline bars */}
          {Array.from({ length: 7 }).map((_, i) => (
            <motion.div
              key={`baseline-${i}`}
              className="flex-1 rounded-t-md"
              style={{
                background: "rgba(107, 114, 128, 0.5)",
                height: `${60 + Math.random() * 20}%`,
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            />
          ))}
          
          {/* Intervention bars */}
          {Array.from({ length: 7 }).map((_, i) => (
            <motion.div
              key={`intervention-${i}`}
              className="flex-1 rounded-t-md"
              style={{
                background: "linear-gradient(to top, #00D4FF, #00FF94)",
                height: `${75 + Math.random() * 20}%`,
                boxShadow: "0 0 10px rgba(0, 212, 255, 0.4)",
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.05 }}
            />
          ))}
        </div>
        
        <div className="flex justify-between text-xs text-gray-500 mt-4">
          <span>Baseline</span>
          <span>→</span>
          <span className="text-[#00D4FF]">Intervention</span>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4 mb-6">
        <h4 className="text-sm font-semibold text-gray-300">
          Промежуточные результаты:
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="rounded-xl p-4"
            style={{
              background: "rgba(0, 255, 148, 0.1)",
              border: "1px solid rgba(0, 255, 148, 0.3)",
            }}
          >
            <div className="text-xs text-gray-400 mb-1">Deep Sleep</div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">68 мин</span>
              <span className="text-gray-500">→</span>
              <span className="text-[#00FF94] font-bold">80 мин</span>
              <span className="text-[#00FF94] font-semibold">(+18%)</span>
              <TrendingUp size={16} className="text-[#00FF94]" />
            </div>
          </div>

          <div
            className="rounded-xl p-4"
            style={{
              background: "rgba(0, 212, 255, 0.1)",
              border: "1px solid rgba(0, 212, 255, 0.3)",
            }}
          >
            <div className="text-xs text-gray-400 mb-1">Вероятность эффекта</div>
            <div className="flex items-center gap-2">
              <span className="text-[#00D4FF] font-bold text-xl">87%</span>
              <CheckCircle size={20} className="text-[#00FF94]" />
            </div>
          </div>
        </div>

        <div
          className="rounded-xl p-4"
          style={{
            background: "rgba(139, 92, 246, 0.1)",
            border: "1px solid rgba(139, 92, 246, 0.3)",
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">
              p-value: <span className="text-[#8B5CF6] font-semibold">0.03</span>
            </span>
            <span
              className="text-xs px-3 py-1 rounded-full"
              style={{
                background: "rgba(139, 92, 246, 0.3)",
                color: "#8B5CF6",
              }}
            >
              статистически значим
            </span>
          </div>
        </div>
      </div>

      {/* Compliance */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Compliance</span>
          <span className="text-sm font-semibold text-[#00FF94]">85%</span>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="flex-1 h-2 rounded-full"
              style={{
                background: i < 8.5 ? "#00FF94" : "rgba(107, 114, 128, 0.3)",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            />
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          className="flex-1 py-3 rounded-xl font-medium transition-all"
          style={{
            background: "linear-gradient(135deg, #00D4FF, #8B5CF6)",
            color: "#fff",
            boxShadow: "0 0 20px rgba(0, 212, 255, 0.4)",
          }}
        >
          Детали
        </button>
        <button
          className="px-6 py-3 rounded-xl font-medium transition-all"
          style={{
            background: "rgba(107, 114, 128, 0.2)",
            border: "1px solid rgba(107, 114, 128, 0.4)",
            color: "#9CA3AF",
          }}
        >
          Остановить
        </button>
      </div>
    </motion.div>
  );
}
