import { motion } from "motion/react";
import { PersonaCard } from "./PersonaCard";

const personas = [
  {
    emoji: "🧬",
    name: "Алексей",
    age: 35,
    occupation: "IT-предприниматель",
    city: "Москва",
    stack: "Oura Ring + CGM + 23andMe + 15 добавок",
    goals: [
      "Когнитивная оптимизация",
      "Longevity (цель: 120+ лет)",
      "Понять, что РЕАЛЬНО работает",
    ],
    pain: "Данные в 7 приложениях, 5ч/нед на Excel",
    solutions: [
      "Custom RAG с протоколами",
      "N=1 эксперименты с ML",
      "15 AI-агентов для deep analysis",
    ],
    pricing: "5,000-10,000 ₽/мес",
    color: "#00D4FF",
    dayInLife: "7:00 - Проверка HRV и deep sleep данных, AI рекомендует изменить дозировку магния. 12:00 - Уведомление: CGM показывает spike после обеда. 21:00 - Просмотр недельных трендов, запуск нового эксперимента с NMN.",
  },
  {
    emoji: "💼",
    name: "Марина",
    age: 42,
    occupation: "Финансовый директор",
    city: "СПб",
    stack: "Apple Watch + базовые приложения",
    goals: [
      "Больше энергии для работы",
      "Лучший сон",
      "Снижение стресса",
    ],
    pain: "Нет времени разбираться в биохакинге",
    solutions: [
      "Простые рекомендации \"что делать\"",
      "Напоминания в Telegram",
      "Объяснение анализов простым языком",
    ],
    pricing: "990-2,490 ₽/мес",
    color: "#8B5CF6",
    dayInLife: "8:00 - Telegram: 'Ваш сон сегодня на 15% лучше! Попробуйте повторить вчерашний вечерний ритуал'. 14:00 - Напоминание выпить воды. 20:00 - Рекомендация: ложитесь на 30 минут раньше для оптимального восстановления.",
  },
  {
    emoji: "🔬",
    name: "Дмитрий",
    age: 55,
    occupation: "Врач-терапевт, к.м.н.",
    city: "Казань",
    stack: "Эпигенетические тесты + Blood panels",
    goals: [
      "Замедлить старение",
      "Оптимизировать биомаркеры",
      "Evidence-based решения",
    ],
    pain: "Нет научной строгости в приложениях",
    solutions: [
      "Ссылки на PubMed в каждой рекомендации",
      "Биологический возраст (GrimAge, DunedinPACE)",
      "Персонализация по генетике",
    ],
    pricing: "2,490-9,990 ₽/мес",
    color: "#00FF94",
    dayInLife: "9:00 - Анализ новых результатов крови с референсами на последние исследования. 15:00 - AI находит корреляцию между CRP и качеством сна. 22:00 - Изучение персонализированных рекомендаций на основе генотипа APOE.",
  },
];

export function PersonasSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-10 left-10 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, #00D4FF, transparent)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-10 right-10 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, #00FF94, transparent)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, #8B5CF6, transparent)",
            filter: "blur(60px)",
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
            <span className="text-sm text-[#00D4FF]">Для кого?</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#00FF94] bg-clip-text text-transparent">
              BIOMAX для вас,
            </span>
            <br />
            <span className="text-gray-200">если вы...</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Платформа адаптируется под ваши цели — от{" "}
            <span className="text-[#8B5CF6]">простых рекомендаций</span> до{" "}
            <span className="text-[#00D4FF]">продвинутых экспериментов</span>
          </p>
        </motion.div>

        {/* Persona Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {personas.map((persona, i) => (
            <PersonaCard
              key={i}
              {...persona}
              delay={i * 0.2}
            />
          ))}
        </div>

        {/* Additional info callout */}
        <motion.div
          className="rounded-3xl p-8 text-center"
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{
                  background: "rgba(0, 212, 255, 0.2)",
                  border: "1px solid rgba(0, 212, 255, 0.5)",
                }}
              >
                👥
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-200">3 тарифа</div>
                <div className="text-sm text-gray-400">От базового до Elite</div>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-[#00D4FF] to-transparent" />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{
                  background: "rgba(139, 92, 246, 0.2)",
                  border: "1px solid rgba(139, 92, 246, 0.5)",
                }}
              >
                🎯
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-200">100% персонализация</div>
                <div className="text-sm text-gray-400">Под ваши цели и данные</div>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-[#00FF94] to-transparent" />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                style={{
                  background: "rgba(0, 255, 148, 0.2)",
                  border: "1px solid rgba(0, 255, 148, 0.5)",
                }}
              >
                🚀
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-200">7 дней free trial</div>
                <div className="text-sm text-gray-400">Без привязки карты</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hover hint */}
        <motion.div
          className="text-center mt-8 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="inline-flex items-center gap-2">
            💡 Наведите на карточку, чтобы увидеть день из жизни с BIOMAX
          </span>
        </motion.div>
      </div>
    </section>
  );
}
