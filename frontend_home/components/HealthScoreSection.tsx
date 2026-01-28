import { useState } from "react";
import { motion } from "motion/react";
import { CircularProgress } from "./CircularProgress";
import { HealthScoreRadar } from "./HealthScoreRadar";
import { HealthDimensionCard } from "./HealthDimensionCard";
import { PrioritySlider } from "./PrioritySlider";
import { TrendingUp } from "lucide-react";

const dimensions = [
  {
    emoji: "💪",
    name: "PHYSICAL",
    score: 82,
    description: "Сила, выносливость, физическая активность",
    dataSources: "Strava, Apple Watch",
    color: "#00D4FF",
  },
  {
    emoji: "🔥",
    name: "METABOLIC",
    score: 78,
    description: "Глюкоза, инсулин, метаболическая гибкость",
    dataSources: "CGM, Labs",
    color: "#F59E0B",
  },
  {
    emoji: "🧠",
    name: "COGNITIVE",
    score: 85,
    description: "Память, фокус, когнитивные функции",
    dataSources: "Cambridge Brain Sciences",
    color: "#8B5CF6",
  },
  {
    emoji: "😊",
    name: "EMOTIONAL",
    score: 76,
    description: "Стресс, настроение, ментальное здоровье",
    dataSources: "HRV, Surveys",
    color: "#EC4899",
  },
  {
    emoji: "👥",
    name: "SOCIAL",
    score: 90,
    description: "Социальные связи, community",
    dataSources: "Activity patterns",
    color: "#14B8A6",
  },
  {
    emoji: "🎯",
    name: "PURPOSE",
    score: 88,
    description: "Цели, мотивация, осмысленность",
    dataSources: "Goal tracking",
    color: "#00FF94",
  },
  {
    emoji: "🌿",
    name: "ENVIRONMENTAL",
    score: 72,
    description: "Качество воздуха, света, сна",
    dataSources: "Smart home, Sleep data",
    color: "#84CC16",
  },
  {
    emoji: "⏳",
    name: "BIOLOGICAL AGE",
    score: 92,
    description: "Эпигенетический возраст vs хронологический",
    dataSources: "TruDiagnostic, Biomarkers",
    color: "#3B82F6",
  },
];

const benefitCards = [
  {
    title: "Персонализированные веса",
    description: "Фокус на longevity? Biological Age важнее. Атлет? Physical в приоритете",
    icon: "⚖️",
  },
  {
    title: "Weekly Trends",
    description: "Отслеживайте динамику каждого измерения",
    icon: "📈",
  },
  {
    title: "Actionable Insights",
    description: "AI подсказывает, как улучшить отстающие метрики",
    icon: "💡",
  },
];

export function HealthScoreSection() {
  const [priority, setPriority] = useState(50);

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.2), transparent 70%)",
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
            <span className="text-sm text-[#00D4FF]">Health Score</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#00FF94] bg-clip-text text-transparent">
              Ваше здоровье
            </span>
            <br />
            <span className="text-gray-200">одним числом</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Комплексная оценка <span className="text-[#00D4FF]">0-100</span> на основе{" "}
            <span className="text-[#00FF94]">8 ключевых измерений</span>.{" "}
            Персонализированные веса под ваши цели
          </p>
        </motion.div>

        {/* Main visualization area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          {/* Left: Central Health Score */}
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <CircularProgress
                value={87}
                max={100}
                size={280}
                strokeWidth={12}
                color="cyan"
                label="Health Score"
              />
            </motion.div>

            {/* Trend indicator */}
            <motion.div
              className="mt-6 flex items-center gap-3 px-6 py-3 rounded-full"
              style={{
                background: "rgba(0, 255, 148, 0.2)",
                border: "1px solid rgba(0, 255, 148, 0.5)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <TrendingUp size={20} className="text-[#00FF94]" />
              <span className="text-[#00FF94] font-semibold">+5 за месяц</span>
            </motion.div>

            {/* Score breakdown */}
            <motion.div
              className="mt-8 grid grid-cols-3 gap-4 w-full max-w-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="text-center p-3 rounded-xl" style={{ background: "rgba(0, 212, 255, 0.1)" }}>
                <div className="text-2xl font-bold text-[#00D4FF]">92</div>
                <div className="text-xs text-gray-400 mt-1">Высший</div>
              </div>
              <div className="text-center p-3 rounded-xl" style={{ background: "rgba(139, 92, 246, 0.1)" }}>
                <div className="text-2xl font-bold text-[#8B5CF6]">87</div>
                <div className="text-xs text-gray-400 mt-1">Текущий</div>
              </div>
              <div className="text-center p-3 rounded-xl" style={{ background: "rgba(0, 255, 148, 0.1)" }}>
                <div className="text-2xl font-bold text-[#00FF94]">72</div>
                <div className="text-xs text-gray-400 mt-1">Начальный</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Radar Chart */}
          <div className="flex justify-center">
            <HealthScoreRadar 
              dimensions={dimensions.map(d => ({ 
                name: d.name, 
                value: d.score, 
                color: d.color 
              }))} 
              size={450} 
            />
          </div>
        </div>

        {/* 8 Dimensions Grid */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-center mb-8 text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            8 ключевых измерений
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dimensions.map((dim, i) => (
              <HealthDimensionCard
                key={i}
                {...dim}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>

        {/* Priority Slider */}
        <div className="mb-16">
          <PrioritySlider onPriorityChange={setPriority} />
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefitCards.map((card, i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(26, 31, 46, 0.7)",
                border: "1px solid rgba(0, 212, 255, 0.3)",
                backdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 30px rgba(0, 212, 255, 0.3)",
              }}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h4 className="font-semibold text-gray-200 mb-2">{card.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}