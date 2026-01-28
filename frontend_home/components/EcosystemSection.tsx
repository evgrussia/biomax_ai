import { useState } from "react";
import { motion } from "motion/react";
import { IntegrationCategory } from "./IntegrationCategory";
import { EcosystemHub } from "./EcosystemHub";
import { StatsCounter } from "./StatsCounter";

const categories = [
  {
    key: "wearables",
    title: "Носимые устройства",
    emoji: "📱",
    integrations: [
      { name: "Oura Ring", icon: "💍", isGolden: true },
      { name: "Apple Watch", icon: "⌚" },
      { name: "WHOOP", icon: "🔴" },
      { name: "Garmin", icon: "🟦" },
      { name: "Fitbit", icon: "💚" },
      { name: "Xiaomi Mi Band", icon: "🟠" },
    ],
  },
  {
    key: "cgm",
    title: "Мониторинг глюкозы",
    emoji: "📊",
    integrations: [
      { name: "Dexcom G7", icon: "📈" },
      { name: "Freestyle Libre", icon: "🔵" },
      { name: "Levels", icon: "📉" },
    ],
  },
  {
    key: "labs-ru",
    title: "Российские лаборатории",
    emoji: "🧪",
    badge: "🇷🇺 152-ФЗ Compliant",
    integrations: [
      { name: "INVITRO", icon: "🔬", isGolden: true },
      { name: "Helix", icon: "🧬" },
      { name: "CMD", icon: "⚕️" },
      { name: "Гемотест", icon: "💉" },
    ],
  },
  {
    key: "genomics",
    title: "Генетика",
    emoji: "🧬",
    integrations: [
      { name: "23andMe", icon: "🧪" },
      { name: "Ancestry", icon: "🌳" },
      { name: "Nebula", icon: "🌌" },
      { name: "Atlas Biomed", icon: "🗺️" },
    ],
  },
  {
    key: "epigenetics",
    title: "Эпигенетика",
    emoji: "⏳",
    integrations: [
      { name: "TruDiagnostic", icon: "📅" },
      { name: "GlycanAge", icon: "🔬" },
      { name: "Elysium Index", icon: "⚗️" },
    ],
  },
  {
    key: "nutrition",
    title: "Питание",
    emoji: "🍽️",
    integrations: [
      { name: "MyFitnessPal", icon: "🥗" },
      { name: "Cronometer", icon: "📊" },
      { name: "FatSecret", icon: "🍎" },
    ],
  },
  {
    key: "fitness",
    title: "Фитнес",
    emoji: "🏃",
    integrations: [
      { name: "Strava", icon: "🚴" },
      { name: "Nike Run Club", icon: "👟" },
      { name: "Peloton", icon: "🚴‍♀️" },
    ],
  },
  {
    key: "databases",
    title: "Научные базы",
    emoji: "📚",
    integrations: [
      { name: "PubMed", icon: "📖" },
      { name: "DrugBank", icon: "💊" },
      { name: "Open Food Facts", icon: "🥫" },
    ],
  },
];

export function EcosystemSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
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
            <span className="text-sm text-[#00D4FF]">Экосистема</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#00FF94] bg-clip-text text-transparent">
              Все ваши данные
            </span>
            <br />
            <span className="text-gray-200">в одном месте</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <span className="text-[#00D4FF] font-semibold">100+ интеграций</span> с устройствами, лабораториями, генетическими сервисами
          </p>
        </motion.div>

        {/* Central Hub Visualization */}
        <div className="mb-20 flex justify-center">
          <motion.div
            className="relative"
            style={{ width: 500, height: 500 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <EcosystemHub activeCategory={activeCategory} />
          </motion.div>
        </div>

        {/* Integration Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {categories.map((category, i) => (
            <IntegrationCategory
              key={category.key}
              {...category}
              categoryKey={category.key}
              onHover={setActiveCategory}
              isActive={activeCategory === category.key}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Stats Counter */}
        <StatsCounter />

        {/* Coming Soon Badge */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full"
            style={{
              background: "rgba(139, 92, 246, 0.2)",
              border: "1px solid rgba(139, 92, 246, 0.5)",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              ⚡
            </motion.div>
            <span className="text-sm text-gray-300">
              Новые интеграции добавляются каждый месяц
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
