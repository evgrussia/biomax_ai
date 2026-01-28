import { motion } from "motion/react";
import { CheckCircle, TrendingUp, Lightbulb } from "lucide-react";

export function CompletedExperiment() {
  return (
    <motion.div
      className="rounded-3xl p-8"
      style={{
        background: "linear-gradient(135deg, rgba(0, 255, 148, 0.15), rgba(0, 212, 255, 0.15))",
        border: "2px solid rgba(0, 255, 148, 0.4)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 0 40px rgba(0, 255, 148, 0.2)",
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Success badge */}
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          🎉
        </motion.div>
        <div>
          <h3 className="text-2xl font-bold text-[#00FF94]">
            Эксперимент завершён!
          </h3>
        </div>
      </div>

      {/* Title */}
      <div className="mb-6">
        <h4 className="text-xl font-bold text-gray-200 mb-2">
          Магний глицинат 400mg
        </h4>
        <div
          className="h-px"
          style={{
            background: "linear-gradient(90deg, #00FF94, transparent)",
          }}
        />
      </div>

      {/* Results comparison */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div
          className="rounded-xl p-4"
          style={{
            background: "rgba(107, 114, 128, 0.2)",
            border: "1px solid rgba(107, 114, 128, 0.3)",
          }}
        >
          <div className="text-xs text-gray-400 mb-1">Baseline</div>
          <div className="text-2xl font-bold text-gray-300">68 мин</div>
          <div className="text-xs text-gray-500 mt-1">deep sleep</div>
        </div>

        <div
          className="rounded-xl p-4"
          style={{
            background: "rgba(0, 255, 148, 0.2)",
            border: "1px solid rgba(0, 255, 148, 0.4)",
          }}
        >
          <div className="text-xs text-gray-400 mb-1">Intervention</div>
          <div className="text-2xl font-bold text-[#00FF94]">80 мин</div>
          <div className="text-xs text-[#00FF94] mt-1">deep sleep</div>
        </div>

        <div
          className="rounded-xl p-4 flex flex-col items-center justify-center"
          style={{
            background: "rgba(0, 212, 255, 0.2)",
            border: "1px solid rgba(0, 212, 255, 0.4)",
          }}
        >
          <div className="flex items-center gap-2">
            <TrendingUp size={24} className="text-[#00D4FF]" />
            <div className="text-3xl font-bold text-[#00D4FF]">+18%</div>
          </div>
          <CheckCircle size={20} className="text-[#00FF94] mt-2" />
        </div>
      </div>

      {/* Statistical metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div
          className="rounded-xl p-4"
          style={{
            background: "rgba(26, 31, 46, 0.6)",
            border: "1px solid rgba(139, 92, 246, 0.3)",
          }}
        >
          <div className="text-xs text-gray-400 mb-1">p-value</div>
          <div className="text-xl font-bold text-[#8B5CF6]">0.03</div>
          <div className="text-xs text-[#00FF94] mt-1">✅ значимо</div>
        </div>

        <div
          className="rounded-xl p-4"
          style={{
            background: "rgba(26, 31, 46, 0.6)",
            border: "1px solid rgba(0, 212, 255, 0.3)",
          }}
        >
          <div className="text-xs text-gray-400 mb-1">Effect size</div>
          <div className="text-xl font-bold text-[#00D4FF]">0.65</div>
          <div className="text-xs text-gray-400 mt-1">средний</div>
        </div>

        <div
          className="rounded-xl p-4"
          style={{
            background: "rgba(26, 31, 46, 0.6)",
            border: "1px solid rgba(0, 255, 148, 0.3)",
          }}
        >
          <div className="text-xs text-gray-400 mb-1">Confidence</div>
          <div className="text-xl font-bold text-[#00FF94]">95% CI</div>
          <div className="text-xs text-gray-400 mt-1">[8%, 28%]</div>
        </div>
      </div>

      {/* Conclusion */}
      <div
        className="rounded-xl p-5 mb-4"
        style={{
          background: "rgba(0, 255, 148, 0.1)",
          border: "1px solid rgba(0, 255, 148, 0.3)",
        }}
      >
        <div className="flex items-start gap-3">
          <CheckCircle size={24} className="text-[#00FF94] flex-shrink-0 mt-1" />
          <div>
            <div className="font-semibold text-[#00FF94] mb-1">
              Вывод: Эффект подтверждён
            </div>
            <p className="text-sm text-gray-300">
              Магний глицинат 400mg показал статистически значимое увеличение deep sleep фазы.
              Результат воспроизводим и может быть интегрирован в базовый протокол.
            </p>
          </div>
        </div>
      </div>

      {/* Recommendation */}
      <div
        className="rounded-xl p-5"
        style={{
          background: "rgba(0, 212, 255, 0.1)",
          border: "1px solid rgba(0, 212, 255, 0.3)",
        }}
      >
        <div className="flex items-start gap-3">
          <Lightbulb size={24} className="text-[#00D4FF] flex-shrink-0 mt-1" />
          <div>
            <div className="font-semibold text-[#00D4FF] mb-1">
              Рекомендация: Интегрировать в базовый протокол
            </div>
            <p className="text-sm text-gray-300">
              Добавьте 400mg магния глицината за 1-2 часа до сна для максимизации deep sleep.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
