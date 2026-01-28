import { motion } from "motion/react";
import { PhoneMockup } from "./PhoneMockup";
import { TelegramBotScreen } from "./TelegramBotScreen";
import { TelegramWebAppScreen } from "./TelegramWebAppScreen";
import { NativeAppScreen } from "./NativeAppScreen";
import { CheckCircle, Clock } from "lucide-react";

const features = [
  {
    icon: "📱",
    title: "Telegram Bot",
    status: "available",
    label: "доступно сейчас",
    color: "#00D4FF",
  },
  {
    icon: "🌐",
    title: "Telegram WebApp",
    status: "available",
    label: "доступно сейчас",
    color: "#00FF94",
  },
  {
    icon: "📲",
    title: "iOS & Android App",
    status: "coming",
    label: "Q3 2026",
    color: "#8B5CF6",
  },
  {
    icon: "⌚",
    title: "Apple Watch Companion",
    status: "coming",
    label: "Q4 2026",
    color: "#F59E0B",
  },
];

export function MobileExperienceSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.3), rgba(139, 92, 246, 0.3), transparent 70%)",
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
          className="text-center mb-16"
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
            <span className="text-sm text-[#00D4FF]">Cross-Platform</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-200">BIOMAX</span>{" "}
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#00FF94] bg-clip-text text-transparent">
              везде, где вы
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <span className="text-[#00D4FF] font-semibold">Telegram Bot</span> сейчас,{" "}
            <span className="text-[#8B5CF6] font-semibold">Native App</span> скоро
          </p>
        </motion.div>

        {/* Phone Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mb-20">
          {/* Telegram Bot */}
          <PhoneMockup delay={0.2} rotateY={-5}>
            <TelegramBotScreen />
          </PhoneMockup>

          {/* Telegram WebApp */}
          <PhoneMockup delay={0.4} rotateY={0}>
            <TelegramWebAppScreen />
          </PhoneMockup>

          {/* Native App */}
          <PhoneMockup delay={0.6} rotateY={5}>
            <NativeAppScreen />
          </PhoneMockup>
        </div>

        {/* Features List */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="rounded-2xl p-6 flex items-center gap-4"
                style={{
                  background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}05)`,
                  border: `2px solid ${feature.color}40`,
                  backdropFilter: "blur(12px)",
                }}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  borderColor: `${feature.color}80`,
                  boxShadow: `0 0 30px ${feature.color}30`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: `${feature.color}20`,
                    border: `1px solid ${feature.color}60`,
                  }}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="font-bold text-gray-200 mb-1">
                    {feature.title}
                  </div>
                  <div className="flex items-center gap-2">
                    {feature.status === "available" ? (
                      <>
                        <CheckCircle size={14} style={{ color: feature.color }} />
                        <span className="text-sm" style={{ color: feature.color }}>
                          {feature.label}
                        </span>
                      </>
                    ) : (
                      <>
                        <Clock size={14} className="text-gray-500" />
                        <span className="text-sm text-gray-500">
                          {feature.label}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400 mb-6">
            Начните с Telegram Bot прямо сейчас — регистрация за 30 секунд
          </p>
          <motion.a
            href="https://app.biomax-ai.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-2xl font-bold text-lg inline-block"
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
            Открыть в Telegram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
