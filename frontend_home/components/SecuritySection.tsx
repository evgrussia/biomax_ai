import { motion } from "motion/react";
import { SecurityShield } from "./SecurityShield";
import { SecurityCard } from "./SecurityCard";
import { WellnessDisclaimer } from "./WellnessDisclaimer";

const securityFeatures = [
  {
    emoji: "🇷🇺",
    title: "152-ФЗ Compliance",
    description: "Персональные данные хранятся исключительно на серверах в России",
    details: "Yandex Cloud certified infrastructure",
    color: "#00D4FF",
  },
  {
    emoji: "🔐",
    title: "End-to-End Encryption",
    description: "AES-256 шифрование at rest",
    details: "TLS 1.3 in transit",
    color: "#8B5CF6",
  },
  {
    emoji: "🔒",
    title: "Zero-Knowledge Architecture",
    description: "Даже мы не видим ваши расшифрованные данные",
    details: "Ключи шифрования хранятся только на вашем устройстве",
    color: "#00FF94",
  },
  {
    emoji: "📋",
    title: "Аудит доступа",
    description: "Полный лог всех обращений к данным",
    details: "Прозрачность и контроль",
    color: "#F59E0B",
  },
  {
    emoji: "🗑️",
    title: "Право на удаление",
    description: "Экспорт и удаление всех данных в любой момент",
    details: "GDPR-style rights",
    color: "#EC4899",
  },
  {
    emoji: "🛡️",
    title: "SOC 2 Prep",
    description: "Подготовка к SOC 2 Type II сертификации",
    details: "Аудит безопасности и compliance процессов",
    color: "#14B8A6",
  },
];

const partners = [
  { name: "Yandex Cloud", icon: "☁️" },
  { name: "SSL/TLS", icon: "🔒" },
  { name: "ISO 27001", icon: "📜" },
];

export function SecuritySection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background security grid */}
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

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at 50% 20%, rgba(0, 212, 255, 0.3), transparent 70%)",
        }}
      />

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
            <span className="text-sm text-[#00D4FF]">Безопасность</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#00FF94] bg-clip-text text-transparent">
              Ваши данные
            </span>
            <br />
            <span className="text-gray-200">под защитой</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Полное соответствие <span className="text-[#00D4FF]">152-ФЗ</span>,{" "}
            <span className="text-[#8B5CF6]">end-to-end шифрование</span>,{" "}
            хранение в <span className="text-[#00FF94]">России</span>
          </p>
        </motion.div>

        {/* Central Security Shield Visualization */}
        <div className="mb-20">
          <SecurityShield />
        </div>

        {/* Security Feature Cards */}
        <div className="mb-20">
          <motion.h3
            className="text-2xl font-bold text-center mb-12 text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Многоуровневая защита
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, i) => (
              <SecurityCard
                key={i}
                {...feature}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Wellness Disclaimer */}
        <div className="mb-20">
          <WellnessDisclaimer />
        </div>

        {/* Security Partners */}
        <motion.div
          className="rounded-3xl p-10"
          style={{
            background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(139, 92, 246, 0.1))",
            border: "1px solid rgba(0, 212, 255, 0.3)",
            backdropFilter: "blur(12px)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-200 mb-2">
              Наши партнёры по безопасности
            </h3>
            <p className="text-sm text-gray-400">
              Мы работаем с ведущими провайдерами инфраструктуры и безопасности
            </p>
          </div>

          <div className="flex items-center justify-center gap-8 flex-wrap">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 px-6 py-4 rounded-xl"
                style={{
                  background: "rgba(26, 31, 46, 0.6)",
                  border: "1px solid rgba(0, 212, 255, 0.3)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(0, 212, 255, 0.6)",
                  boxShadow: "0 0 30px rgba(0, 212, 255, 0.3)",
                }}
              >
                <div className="text-3xl">{partner.icon}</div>
                <div className="text-gray-200 font-semibold">{partner.name}</div>
              </motion.div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-10 pt-8 border-t border-gray-700/50">
            <div className="flex items-center justify-center gap-6 flex-wrap text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00FF94]" />
                <span>Регулярный security audit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span>24/7 мониторинг</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                <span>Bug bounty программа</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional security info */}
        <motion.div
          className="text-center mt-12 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p>
            Подробнее о нашей политике безопасности:{" "}
            <a href="#" className="text-[#00D4FF] hover:underline">
              Security Whitepaper
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
