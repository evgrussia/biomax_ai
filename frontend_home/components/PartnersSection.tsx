import { motion } from "motion/react";
import { PartnershipCard } from "./PartnershipCard";
import { PartnershipStats } from "./PartnershipStats";
import { Handshake, Download } from "lucide-react";

const partnerships = [
  {
    emoji: "🧪",
    title: "Лаборатории",
    description: "Интеграция API для автоматической загрузки результатов анализов в профили пользователей",
    benefits: "Трафик новых клиентов, конверсии через платформу, data insights",
    examples: "INVITRO, Helix, CMD, Гемотест",
    color: "#00D4FF",
  },
  {
    emoji: "📱",
    title: "Wearable-производители",
    description: "Глубокая интеграция для расширенной аналитики и персонализированных инсайтов",
    benefits: "User engagement, product differentiation, health insights layer",
    examples: "Oura, Garmin, локальные бренды",
    color: "#8B5CF6",
  },
  {
    emoji: "💊",
    title: "Бренды добавок",
    description: "Marketplace размещение, персонализированные рекомендации на основе AI-анализа",
    benefits: "Targeted audience, purchase attribution, trust from science-based recommendations",
    examples: "",
    color: "#00FF94",
  },
  {
    emoji: "🏢",
    title: "Corporate Wellness",
    description: "White-label решение для HR-программ с аналитикой и engagement инструментами",
    benefits: "ROI analytics, employee engagement tools, health metrics dashboard",
    examples: "",
    color: "#F59E0B",
  },
  {
    emoji: "🏥",
    title: "Клиники",
    description: "Интеграция для пациентов, remote monitoring между визитами",
    benefits: "Patient engagement, continuous data collection, outcome tracking",
    examples: "",
    color: "#EC4899",
  },
];

export function PartnersSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.3), transparent 70%)",
        }}
      />

      {/* Professional grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
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
            <span className="text-sm text-[#00D4FF]">B2B Partnerships</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#00FF94] bg-clip-text text-transparent">
              Станьте партнёром
            </span>
            <br />
            <span className="text-gray-200">BIOMAX</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Лаборатории, wearable-производители, wellness-бренды —{" "}
            <span className="text-[#00D4FF]">давайте строить будущее здоровья вместе</span>
          </p>
        </motion.div>

        {/* Partnership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {partnerships.map((partnership, i) => (
            <PartnershipCard key={i} {...partnership} delay={i * 0.1} />
          ))}
        </div>

        {/* Partnership Stats */}
        <div className="mb-20">
          <PartnershipStats />
        </div>

        {/* CTA Block */}
        <motion.div
          className="rounded-3xl p-12 text-center relative overflow-hidden"
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
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 rounded-2xl mb-8"
            style={{
              background: "rgba(0, 212, 255, 0.2)",
              border: "2px solid rgba(0, 212, 255, 0.6)",
            }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(0, 212, 255, 0.4)",
                "0 0 40px rgba(0, 212, 255, 0.6)",
                "0 0 20px rgba(0, 212, 255, 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Handshake size={48} className="text-[#00D4FF]" />
          </motion.div>

          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-200">
            Готовы к партнёрству?
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Заполните заявку, и наша B2B команда свяжется с вами в течение 48 часов.
            Мы открыты к различным форматам сотрудничества и готовы обсудить индивидуальные условия.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <motion.button
              className="px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3"
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
              <Handshake size={20} />
              Стать партнёром
            </motion.button>

            <motion.button
              className="px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3"
              style={{
                background: "rgba(26, 31, 46, 0.8)",
                border: "2px solid rgba(0, 212, 255, 0.5)",
                color: "#00D4FF",
              }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(0, 212, 255, 0.8)",
                boxShadow: "0 0 30px rgba(0, 212, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Partnership Deck PDF
            </motion.button>
          </div>

          {/* Contact info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <a href="mailto:evgrussia@gmail.com" className="hover:text-gray-200 transition-colors">
                evgrussia@gmail.com
              </a>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-700" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00FF94]" />
              <a href="https://t.me/evgrussia" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
                Telegram: @evgrussia
              </a>
            </div>
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          className="text-center mt-12 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p>
            Уже работаем с: INVITRO, Helix, Oura Ring, Garmin, и другими{" "}
            <a href="#" className="text-[#00D4FF] hover:underline">
              См. полный список партнёров
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
