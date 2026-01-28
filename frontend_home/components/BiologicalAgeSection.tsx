import { motion } from "motion/react";
import { BiologicalAgeComparison } from "./BiologicalAgeComparison";
import { EpigeneticClocks } from "./EpigeneticClocks";
import { HowItWorks } from "./HowItWorks";
import { SuccessStory } from "./SuccessStory";
import { Clock, TrendingDown } from "lucide-react";

export function BiologicalAgeSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0, 255, 148, 0.4), rgba(0, 212, 255, 0.3), transparent 70%)",
        }}
      />

      {/* Animated DNA helix pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(0, 255, 148, 0.3) 1px, transparent 1px)
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
              background: "rgba(0, 255, 148, 0.1)",
              border: "1px solid rgba(0, 255, 148, 0.5)",
            }}
          >
            <motion.div
              className="flex items-center gap-2"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Clock size={16} className="text-[#00FF94]" />
              <TrendingDown size={16} className="text-[#00FF94]" />
            </motion.div>
            <span className="text-sm text-[#00FF94]">Epigenetic Age Analysis</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-200">Управляйте своим</span>
            <br />
            <span className="bg-gradient-to-r from-[#00FF94] via-[#00D4FF] to-[#8B5CF6] bg-clip-text text-transparent">
              биологическим возрастом
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Эпигенетические часы показывают, насколько быстро вы стареете —{" "}
            <span className="text-[#00FF94] font-semibold">и как это замедлить</span>
          </p>
        </motion.div>

        {/* Main Comparison Visualization */}
        <div className="max-w-4xl mx-auto mb-20">
          <BiologicalAgeComparison />
        </div>

        {/* Epigenetic Clocks & Tests */}
        <div className="mb-20">
          <EpigeneticClocks />
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <HowItWorks />
        </div>

        {/* Success Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <SuccessStory />
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400 mb-6">
            Узнайте свой биологический возраст и получите персонализированный протокол
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              className="px-10 py-5 rounded-2xl font-bold text-lg"
              style={{
                background: "linear-gradient(135deg, #00FF94, #00D4FF)",
                color: "#0A0F1E",
                boxShadow: "0 0 40px rgba(0, 255, 148, 0.4)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 60px rgba(0, 255, 148, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Загрузить эпигенетический тест
            </motion.button>

            <motion.button
              className="px-10 py-5 rounded-2xl font-bold text-lg"
              style={{
                background: "rgba(26, 31, 46, 0.8)",
                border: "2px solid rgba(0, 255, 148, 0.5)",
                color: "#00FF94",
              }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(0, 255, 148, 0.8)",
                boxShadow: "0 0 30px rgba(0, 255, 148, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Узнать больше о тестах
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
