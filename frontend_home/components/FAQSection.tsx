import { motion } from "motion/react";
import { FAQItem } from "./FAQItem";
import { HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Это медицинское приложение?",
    answer: "Нет, BIOMAX — это wellness платформа. Мы НЕ ставим диагнозы и НЕ заменяем врача. Все рекомендации носят информационный характер. Safety Agent проверяет каждую рекомендацию на контрпоказания и при необходимости направляет к врачу.",
    color: "#00D4FF",
  },
  {
    question: "Где хранятся мои данные?",
    answer: "Все данные хранятся на серверах в России (Yandex Cloud) в соответствии с 152-ФЗ. Используется end-to-end шифрование AES-256. Вы можете экспортировать или удалить свои данные в любой момент.",
    color: "#8B5CF6",
  },
  {
    question: "Какие устройства поддерживаются?",
    answer: "100+ интеграций: Oura Ring, Apple Watch, Garmin, WHOOP, Fitbit, Dexcom CGM, Freestyle Libre. Лаборатории: INVITRO, Helix, CMD, Гемотест. Генетика: 23andMe, Atlas Biomed. Полный список на странице интеграций.",
    color: "#00FF94",
  },
  {
    question: "Чем отличается от конкурентов?",
    answer: "Три ключевых отличия: 1) 15 специализированных AI-агентов вместо одного алгоритма, 2) Custom RAG для загрузки ваших протоколов, 3) Полная локализация для России с 152-ФЗ compliance.",
    color: "#F59E0B",
  },
  {
    question: "Могу ли я загрузить свои протоколы?",
    answer: "Да! Custom RAG позволяет загружать PDF, MD, TXT файлы. Загрузите протоколы Bryan Johnson, Huberman, Attia — AI будет использовать их для персонализированных рекомендаций. До 50 GB на Longevity Elite.",
    color: "#00D4FF",
  },
  {
    question: "Как работают N=1 эксперименты?",
    answer: "Biohacker Lab позволяет проводить статистически корректные персональные эксперименты: 2 недели baseline, 4+ недели интервенции. ML анализирует данные, рассчитывает p-value и effect size, определяет значимость эффекта.",
    color: "#8B5CF6",
  },
  {
    question: "Что если я уже использую другие приложения?",
    answer: "BIOMAX интегрируется с ними! Подключите существующие аккаунты (Oura, Strava, MyFitnessPal) — мы агрегируем данные. Не нужно отказываться от любимых приложений.",
    color: "#00FF94",
  },
  {
    question: "Есть ли бесплатная версия?",
    answer: "Да, Free plan включает Health Score Dashboard, Coach Agent, 1 источник данных и 10 AI-запросов в день. Достаточно чтобы попробовать платформу.",
    color: "#F59E0B",
  },
  {
    question: "Как отменить подписку?",
    answer: "В любой момент в настройках аккаунта. 30-дневная гарантия возврата на все платные планы. Ваши данные останутся доступны для экспорта.",
    color: "#00D4FF",
  },
  {
    question: "Работает ли за пределами России?",
    answer: "Да, платформа работает глобально. Однако интеграции с российскими лабораториями (INVITRO) доступны только в РФ. Международная версия с локальными лабораториями — в roadmap на 2027.",
    color: "#8B5CF6",
  },
];

export function FAQSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3), transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto">
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
              background: "rgba(139, 92, 246, 0.1)",
              border: "1px solid rgba(139, 92, 246, 0.5)",
            }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-[#8B5CF6]"
              animate={{
                boxShadow: ["0 0 5px #8B5CF6", "0 0 15px #8B5CF6", "0 0 5px #8B5CF6"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-[#8B5CF6]">FAQ</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#00D4FF] to-[#00FF94] bg-clip-text text-transparent">
              Частые вопросы
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ответы на популярные вопросы о платформе
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              color={faq.color}
              delay={i * 0.05}
            />
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          className="rounded-3xl p-10 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(0, 212, 255, 0.2))",
            border: "2px solid rgba(139, 92, 246, 0.5)",
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
              background: "rgba(139, 92, 246, 0.2)",
              border: "2px solid rgba(139, 92, 246, 0.6)",
            }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(139, 92, 246, 0.4)",
                "0 0 40px rgba(139, 92, 246, 0.6)",
                "0 0 20px rgba(139, 92, 246, 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HelpCircle size={40} className="text-[#8B5CF6]" />
          </motion.div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-200">
            Не нашли ответ на свой вопрос?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Наша команда поддержки готова помочь. Средний ответ — менее 2 часов.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              className="px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2"
              style={{
                background: "linear-gradient(135deg, #8B5CF6, #00D4FF)",
                color: "#fff",
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={20} />
              Написать в поддержку
            </motion.button>

            <motion.a
              href="#"
              className="px-8 py-4 rounded-xl font-bold text-lg"
              style={{
                background: "rgba(139, 92, 246, 0.2)",
                border: "2px solid rgba(139, 92, 246, 0.5)",
                color: "#8B5CF6",
              }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(139, 92, 246, 0.8)",
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Открыть Help Center
            </motion.a>
          </div>

          {/* Contact methods */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10 pt-8 border-t border-gray-700/50 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="text-lg">📧</div>
              <a href="mailto:evgrussia@gmail.com" className="hover:text-gray-200 transition-colors">
                evgrussia@gmail.com
              </a>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-700" />
            <div className="flex items-center gap-2">
              <div className="text-lg">💬</div>
              <a href="https://t.me/evgrussia" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200 transition-colors">
                Telegram: @evgrussia
              </a>
            </div>
          </div>
        </motion.div>

        {/* Additional resources */}
        <motion.div
          className="text-center mt-12 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p>
            Полезные ресурсы:{" "}
            <a href="#" className="text-[#8B5CF6] hover:underline">
              Документация
            </a>
            {" · "}
            <a href="#" className="text-[#8B5CF6] hover:underline">
              Видео-туториалы
            </a>
            {" · "}
            <a href="#" className="text-[#8B5CF6] hover:underline">
              Community Forum
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
