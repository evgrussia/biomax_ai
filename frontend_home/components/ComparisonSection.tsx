import { motion } from "motion/react";
import { ComparisonTable } from "./ComparisonTable";
import { PositioningMap } from "./PositioningMap";
import { DifferentiatorCard } from "./DifferentiatorCard";
import { Sparkles } from "lucide-react";

const differentiators = [
  {
    title: "vs InsideTracker",
    description: "Они анализируют только кровь. Мы — всё: сон, активность, генетику, эпигенетику, питание. И ваши собственные протоколы.",
    color: "#00D4FF",
    gradient: "rgba(0, 212, 255, 0.15), rgba(26, 31, 46, 0.9)",
  },
  {
    title: "vs Oura/WHOOP",
    description: "Они показывают данные. Мы объясняем, что с ними делать — 15 AI-специалистов интерпретируют и рекомендуют.",
    color: "#8B5CF6",
    gradient: "rgba(139, 92, 246, 0.15), rgba(26, 31, 46, 0.9)",
  },
  {
    title: "vs Wild Health",
    description: "Они стоят $4,000+/год и зависят от human coaches. Мы — AI-first по цене в 10 раз меньше, доступно 24/7.",
    color: "#00FF94",
    gradient: "rgba(0, 255, 148, 0.15), rgba(26, 31, 46, 0.9)",
  },
];

export function ComparisonSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3), transparent 70%)",
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
            <span className="text-sm text-[#8B5CF6]">Сравнение</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#00D4FF] to-[#00FF94] bg-clip-text text-transparent">
              Почему BIOMAX,
            </span>
            <br />
            <span className="text-gray-200">а не...</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Сравнение с топовыми платформами биохакинга
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="mb-20">
          <motion.h3
            className="text-2xl font-bold text-center mb-8 text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Feature-by-feature сравнение
          </motion.h3>
          <ComparisonTable />
        </div>

        {/* Positioning Map */}
        <div className="mb-20">
          <motion.h3
            className="text-2xl font-bold text-center mb-8 text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Визуальное позиционирование
          </motion.h3>
          <PositioningMap />
        </div>

        {/* Key Differentiators */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-center mb-8 text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Ключевые отличия
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((diff, i) => (
              <DifferentiatorCard key={i} {...diff} delay={i * 0.1} />
            ))}
          </div>
        </div>

        {/* Quote */}
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
          {/* Decorative sparkles */}
          <motion.div
            className="absolute top-6 left-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={24} className="text-[#8B5CF6] opacity-40" />
          </motion.div>
          <motion.div
            className="absolute bottom-6 right-6"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={32} className="text-[#00D4FF] opacity-40" />
          </motion.div>

          <div className="relative z-10">
            <div className="text-6xl mb-6 opacity-30">"</div>
            <p className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#00D4FF] to-[#00FF94] bg-clip-text text-transparent">
                BIOMAX занимает уникальную нишу:
              </span>
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                <span className="text-[#8B5CF6] font-bold">Premium</span>
                <span className="text-gray-400">по охвату</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-gray-700" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                <span className="text-[#00D4FF] font-bold">Mid-range</span>
                <span className="text-gray-400">по цене</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-gray-700" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00FF94]" />
                <span className="text-[#00FF94] font-bold">AI-first</span>
                <span className="text-gray-400">по технологии</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional context */}
        <motion.div
          className="text-center mt-12 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p>
            Данные обновлены на январь 2026.{" "}
            <a href="#" className="text-[#8B5CF6] hover:underline">
              Посмотреть подробное сравнение
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
