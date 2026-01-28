import { motion } from "motion/react";
import { OnboardingStep } from "./OnboardingStep";
import { UserCheck, Link2, BarChart3, Sparkles } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    title: "Регистрация",
    description: "Войдите через Telegram или email",
    time: "30 секунд",
    color: "#00D4FF",
  },
  {
    icon: Link2,
    title: "Подключите устройства",
    description: "Oura, Apple Watch, или загрузите анализы",
    time: "2 минуты",
    color: "#00FF94",
  },
  {
    icon: BarChart3,
    title: "Получите Health Score",
    description: "AI анализирует ваши данные",
    time: "1 минута",
    color: "#8B5CF6",
  },
  {
    icon: Sparkles,
    title: "Персональный план",
    description: "3-5 конкретных действий для улучшения",
    time: "Мгновенно",
    color: "#F59E0B",
  },
];

export function OnboardingSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.3), transparent 70%)",
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(0, 212, 255, 0.1)",
              border: "1px solid rgba(0, 212, 255, 0.5)",
            }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-[#00D4FF]"
              animate={{
                boxShadow: ["0 0 5px #00D4FF", "0 0 15px #00D4FF", "0 0 5px #00D4FF"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-[#00D4FF]">Quick Start</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-200">Начните за</span>{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#00FF94] to-[#8B5CF6] bg-clip-text text-transparent">
              5 минут
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            От регистрации до первых рекомендаций
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative mb-20">
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:flex items-start justify-center gap-4">
            {steps.map((step, i) => (
              <OnboardingStep
                key={i}
                number={i + 1}
                {...step}
                delay={i * 0.2}
                isLast={i === steps.length - 1}
              />
            ))}
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <OnboardingStep
                  number={i + 1}
                  {...step}
                  delay={i * 0.2}
                  isLast={true}
                />
                {i < steps.length - 1 && (
                  <motion.div
                    className="flex justify-center my-4"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 + 0.3 }}
                  >
                    <div className="w-0.5 h-12 bg-gradient-to-b from-[#00D4FF] to-[#00FF94]" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Progress Stats */}
        <motion.div
          className="max-w-3xl mx-auto rounded-3xl p-8 md:p-12"
          style={{
            background: "linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(0, 255, 148, 0.15))",
            border: "2px solid rgba(0, 212, 255, 0.4)",
            backdropFilter: "blur(16px)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Stat */}
          <div className="text-center mb-8">
            <motion.div
              className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#00D4FF] to-[#00FF94] bg-clip-text text-transparent"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              87%
            </motion.div>
            <p className="text-xl text-gray-300">
              пользователей завершают онбординг
            </p>
          </div>

          {/* Progress Bar */}
          <div className="relative h-4 rounded-full overflow-hidden mb-6"
            style={{
              background: "rgba(26, 31, 46, 0.8)",
              border: "1px solid rgba(107, 114, 128, 0.3)",
            }}
          >
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                background: "linear-gradient(90deg, #00D4FF, #00FF94)",
                boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
              }}
              initial={{ width: "0%" }}
              whileInView={{ width: "87%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "⚡", text: "Быстрая настройка", color: "#00D4FF" },
              { icon: "🔒", text: "Безопасное подключение", color: "#00FF94" },
              { icon: "🎯", text: "Мгновенный результат", color: "#8B5CF6" },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{
                  background: `${benefit.color}10`,
                  border: `1px solid ${benefit.color}30`,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: `${benefit.color}60`,
                }}
              >
                <span className="text-2xl">{benefit.icon}</span>
                <span className="text-sm font-semibold text-gray-300">
                  {benefit.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400 mb-6">
            Готовы начать? Первый шаг займёт всего 30 секунд
          </p>
          <motion.button
            className="px-10 py-5 rounded-2xl font-bold text-lg"
            style={{
              background: "linear-gradient(135deg, #00D4FF, #00FF94)",
              color: "#0A0F1E",
              boxShadow: "0 0 40px rgba(0, 212, 255, 0.4)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 60px rgba(0, 212, 255, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Начать сейчас
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
