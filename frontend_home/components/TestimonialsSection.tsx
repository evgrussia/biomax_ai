import { motion } from "motion/react";
import { TestimonialCard } from "./TestimonialCard";
import { MetricsShowcase } from "./MetricsShowcase";
import { AsSeenIn } from "./AsSeenIn";
import { MessageSquare } from "lucide-react";

const testimonials = [
  {
    quote: "Я потратил 5 лет на биохакинг вслепую. За 3 месяца с BIOMAX я наконец понял, что NMN мне не подходит (APOE e4), а магний — лучшая инвестиция. Сэкономил тысячи на ненужных добавках.",
    name: "Алексей К.",
    age: 38,
    occupation: "IT-предприниматель",
    location: "Москва",
    plan: "Biohacker Pro",
    results: ["HRV +23%", "Bio Age -1.5 года"],
    avatar: "👨‍💼",
    color: "#00D4FF",
  },
  {
    quote: "Наконец-то приложение, которое не требует PhD для использования! Просто сказало: ложись в 23:00, гуляй утром, добавь витамин D. Через месяц я сплю 7.5 часов вместо 6 и чувствую себя другим человеком.",
    name: "Мария В.",
    age: 41,
    occupation: "Финансовый директор",
    location: "СПб",
    plan: "Optimize",
    results: ["Sleep +1.5h", "Energy +40%"],
    avatar: "👩‍💼",
    color: "#8B5CF6",
  },
  {
    quote: "Как врач, я скептик. Но BIOMAX поразил меня ссылками на PubMed в каждой рекомендации. Загрузил свой эпигенетический тест — получил детальный протокол с научным обоснованием. Биовозраст снизился на 2 года за 6 месяцев.",
    name: "Дмитрий П.",
    age: 56,
    occupation: "Врач-терапевт, к.м.н.",
    location: "Казань",
    plan: "Longevity Elite",
    results: ["Bio Age 56→54", "hs-CRP -40%"],
    avatar: "👨‍⚕️",
    color: "#00FF94",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0, 255, 148, 0.3), transparent 70%)",
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
              background: "rgba(0, 255, 148, 0.1)",
              border: "1px solid rgba(0, 255, 148, 0.5)",
            }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-[#00FF94]"
              animate={{
                boxShadow: ["0 0 5px #00FF94", "0 0 15px #00FF94", "0 0 5px #00FF94"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-[#00FF94]">Отзывы</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00FF94] via-[#00D4FF] to-[#8B5CF6] bg-clip-text text-transparent">
              Что говорят
            </span>
            <br />
            <span className="text-gray-200">пользователи</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Реальные истории <span className="text-[#00FF94]">оптимизации здоровья</span>
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} delay={i * 0.1} />
          ))}
        </div>

        {/* Metrics Showcase */}
        <div className="mb-20">
          <MetricsShowcase />
        </div>

        {/* As Seen In */}
        <div className="mb-16">
          <AsSeenIn />
        </div>

        {/* CTA to share story */}
        <motion.div
          className="rounded-3xl p-10 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(0, 255, 148, 0.2), rgba(0, 212, 255, 0.2))",
            border: "2px solid rgba(0, 255, 148, 0.5)",
            backdropFilter: "blur(12px)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
            style={{
              background: "rgba(0, 255, 148, 0.2)",
              border: "2px solid rgba(0, 255, 148, 0.6)",
            }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(0, 255, 148, 0.4)",
                "0 0 40px rgba(0, 255, 148, 0.6)",
                "0 0 20px rgba(0, 255, 148, 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MessageSquare size={40} className="text-[#00FF94]" />
          </motion.div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-200">
            Есть чем поделиться?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Мы любим слышать истории наших пользователей. Расскажите о вашем опыте с BIOMAX
            и получите <span className="text-[#00FF94] font-semibold">1 месяц Pro бесплатно</span>!
          </p>

          <motion.button
            className="px-8 py-4 rounded-xl font-bold text-lg"
            style={{
              background: "linear-gradient(135deg, #00FF94, #00D4FF)",
              color: "#0A0F1E",
              boxShadow: "0 0 30px rgba(0, 255, 148, 0.4)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(0, 255, 148, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Поделиться историей
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00FF94]" />
            <span>Все отзывы проверены</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-gray-700" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            <span>4.9/5 средний рейтинг (200+ отзывов)</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-gray-700" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
            <span>92% рекомендуют друзьям</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
