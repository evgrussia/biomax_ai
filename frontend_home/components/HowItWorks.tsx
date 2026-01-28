import { motion } from "motion/react";
import { Upload, Brain, FileText } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Загрузите PDF",
    description: "с результатами эпигенетического теста",
    color: "#00D4FF",
  },
  {
    icon: Brain,
    title: "Longevity Agent",
    description: "интерпретирует данные",
    color: "#8B5CF6",
  },
  {
    icon: FileText,
    title: "Персональный протокол",
    description: "для снижения биовозраста",
    color: "#00FF94",
  },
];

export function HowItWorks() {
  return (
    <motion.div
      className="rounded-3xl p-10"
      style={{
        background: "linear-gradient(135deg, rgba(26, 31, 46, 0.95), rgba(26, 31, 46, 0.85))",
        border: "2px solid rgba(0, 212, 255, 0.3)",
        backdropFilter: "blur(16px)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-2xl font-bold text-center mb-10 text-gray-200">
        Как это работает
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {/* Step number */}
            <div
              className="absolute -top-3 -left-3 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm z-10"
              style={{
                background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                color: "#0A0F1E",
                boxShadow: `0 0 15px ${step.color}60`,
              }}
            >
              {i + 1}
            </div>

            {/* Card */}
            <div
              className="rounded-2xl p-6 h-full"
              style={{
                background: `${step.color}10`,
                border: `2px solid ${step.color}30`,
              }}
            >
              <motion.div
                className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center"
                style={{
                  background: `${step.color}20`,
                  border: `1px solid ${step.color}60`,
                }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                <step.icon size={28} style={{ color: step.color }} />
              </motion.div>

              <h4 className="text-lg font-bold mb-2 text-gray-200">
                {step.title}
              </h4>
              <p className="text-sm text-gray-400">
                {step.description}
              </p>
            </div>

            {/* Arrow connector (desktop) */}
            {i < steps.length - 1 && (
              <motion.div
                className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-3 z-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 + 0.3 }}
              >
                <div className="text-3xl text-gray-700">→</div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
