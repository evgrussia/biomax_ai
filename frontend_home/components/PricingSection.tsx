import { motion } from "motion/react";
import { PricingCard } from "./PricingCard";
import { Shield, CreditCard } from "lucide-react";

const plans = [
  {
    name: "FREE",
    price: "0 ₽",
    description: "Попробуйте BIOMAX",
    features: [
      { text: "Health Score Dashboard", included: true },
      { text: "Coach Agent", included: true },
      { text: "1 источник данных", included: true },
      { text: "10 AI-запросов/день", included: true },
      { text: "Базовые отчёты", included: true },
      { text: "Custom RAG", included: false },
      { text: "Все агенты", included: false },
      { text: "N=1 эксперименты", included: false },
    ],
    ctaText: "Начать бесплатно",
    color: "#6B7280",
  },
  {
    name: "OPTIMIZE",
    price: "990 ₽/мес",
    yearlyPrice: "9,500 ₽/год — экономия 20%",
    description: "Для Health Optimizers",
    features: [
      { text: "Всё из Free", included: true },
      { text: "5 агентов на выбор", included: true },
      { text: "5 источников данных", included: true },
      { text: "100 AI-запросов/день", included: true },
      { text: "Custom RAG 1 GB", included: true },
      { text: "Полные отчёты", included: true },
      { text: "Source attribution", included: true },
      { text: "N=1 эксперименты", included: false },
      { text: "Эпигенетика", included: false },
    ],
    ctaText: "Выбрать Optimize",
    ctaSubtext: "7 дней бесплатно",
    isPopular: true,
    color: "#8B5CF6",
  },
  {
    name: "BIOHACKER PRO",
    price: "2,490 ₽/мес",
    yearlyPrice: "23,900 ₽/год — экономия 20%",
    description: "Для Advanced Biohackers",
    features: [
      { text: "Всё из Optimize", included: true },
      { text: "Все 15 AI-агентов", included: true },
      { text: "Безлимит источников", included: true },
      { text: "Безлимит AI-запросов", included: true },
      { text: "Custom RAG 5 GB", included: true },
      { text: "N=1 Biohacker Lab", included: true },
      { text: "Priority support", included: true },
    ],
    ctaText: "Выбрать Pro",
    ctaSubtext: "14 дней бесплатно",
    color: "#00D4FF",
  },
  {
    name: "LONGEVITY ELITE",
    price: "9,990 ₽/мес",
    yearlyPrice: "95,900 ₽/год — экономия 20%",
    description: "Для Longevity Focused",
    features: [
      { text: "Всё из Biohacker Pro", included: true },
      { text: "Custom RAG 50 GB", included: true },
      { text: "Эпигенетика (GrimAge)", included: true },
      { text: "Biological Age tracking", included: true },
      { text: "Quarterly expert consult", included: true },
      { text: "API доступ", included: true },
      { text: "White-glove onboarding", included: true },
      { text: "Personal Health Coach", included: true },
    ],
    ctaText: "Выбрать Elite",
    ctaSubtext: "Персональная консультация",
    isPremium: true,
    color: "#00FF94",
  },
];

const paymentMethods = [
  { name: "Visa", icon: "💳" },
  { name: "Mastercard", icon: "💳" },
  { name: "Mir", icon: "💳" },
  { name: "YooKassa", icon: "💰" },
  { name: "Apple Pay", icon: "" },
  { name: "Google Pay", icon: "📱" },
];

export function PricingSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(0, 212, 255, 0.3), transparent 70%)",
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
            <span className="text-sm text-[#00D4FF]">Pricing</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#00FF94] bg-clip-text text-transparent">
              Выберите план
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            От <span className="text-[#6B7280]">бесплатного старта</span> до{" "}
            <span className="text-[#00FF94]">premium longevity coaching</span>
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, i) => (
            <PricingCard key={i} {...plan} delay={i * 0.1} />
          ))}
        </div>

        {/* Enterprise Banner */}
        <motion.div
          className="rounded-3xl p-8 mb-12"
          style={{
            background: "linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(139, 92, 246, 0.15))",
            border: "1px solid rgba(0, 212, 255, 0.4)",
            backdropFilter: "blur(12px)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                style={{
                  background: "rgba(0, 212, 255, 0.2)",
                  border: "1px solid rgba(0, 212, 255, 0.5)",
                }}
              >
                🏢
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-200 mb-2">
                  Enterprise / Corporate Wellness
                </h3>
                <p className="text-sm text-gray-400">
                  White-label, SSO, Team Analytics, Custom integrations
                </p>
              </div>
            </div>
            <motion.a
              href="https://app.biomax-ai.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-bold whitespace-nowrap inline-block"
              style={{
                background: "linear-gradient(135deg, #00D4FF, #8B5CF6)",
                color: "#fff",
                boxShadow: "0 0 30px rgba(0, 212, 255, 0.4)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(0, 212, 255, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Связаться с нами
            </motion.a>
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <Shield size={24} className="text-[#00FF94]" />
            <span className="text-gray-300">30-дневная гарантия возврата</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-700" />
          <div className="flex items-center gap-3">
            <CreditCard size={24} className="text-[#00D4FF]" />
            <span className="text-gray-300">Отмена в любой момент</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-700" />
          <div className="flex items-center gap-3">
            <div className="text-xl">💰</div>
            <span className="text-gray-300">HSA/FSA eligible</span>
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-sm text-gray-400 mb-4">Принимаем к оплате:</div>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {paymentMethods.map((method, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-lg"
                style={{
                  background: "rgba(26, 31, 46, 0.6)",
                  border: "1px solid rgba(107, 114, 128, 0.3)",
                }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(0, 212, 255, 0.5)",
                }}
              >
                <span className="text-xl">{method.icon}</span>
                <span className="text-sm text-gray-400">{method.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-gray-400">
            Остались вопросы?{" "}
            <a
              href="#"
              className="text-[#00D4FF] hover:underline font-medium"
            >
              Посмотрите FAQ
            </a>{" "}
            или{" "}
            <a
              href="#"
              className="text-[#00D4FF] hover:underline font-medium"
            >
              свяжитесь с нами
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
