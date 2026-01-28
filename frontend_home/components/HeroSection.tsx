import { motion } from "motion/react";
import { HealthScoreDashboard } from "./HealthScoreDashboard";
import { OrbitalAgents } from "./OrbitalAgents";
import { FloatingMetricCard } from "./FloatingMetricCard";
import { Play, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? "#00D4FF" : i % 3 === 1 ? "#00FF94" : "#8B5CF6",
              opacity: 0.2,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.05) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Logo and brand */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6"
            style={{
              background: "rgba(26, 31, 46, 0.8)",
              border: "1px solid rgba(0, 212, 255, 0.4)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 30px rgba(0, 212, 255, 0.2)",
            }}
          >
            <motion.div
              className="w-3 h-3 rounded-full bg-[#00FF94]"
              animate={{
                boxShadow: ["0 0 10px #00FF94", "0 0 20px #00FF94", "0 0 10px #00FF94"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-bold text-2xl bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#00FF94] bg-clip-text text-transparent">
              BIOMAX AI
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="text-center mb-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#00FF94] bg-clip-text text-transparent leading-tight">
            Операционная система
          </span>
          <span className="block text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#00FF94] via-[#00D4FF] to-[#8B5CF6] bg-clip-text text-transparent leading-tight mt-2">
            для вашего здоровья
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-[#00D4FF] font-semibold">15 AI-агентов</span> анализируют все ваши данные — от Oura Ring до анализов крови, от генетики до протоколов Bryan Johnson — и дают{" "}
          <span className="text-[#00FF94] font-semibold">персонализированные рекомендации</span> с научным обоснованием
        </motion.p>

        {/* Central dashboard with orbital agents */}
        <div className="relative flex items-center justify-center mb-20" style={{ height: "800px" }}>
          {/* Floating metric cards */}
          <FloatingMetricCard
            label="Sleep Quality"
            value="7.2h"
            trend="up"
            position={{ x: 10, y: 20 }}
            delay={1.2}
          />
          <FloatingMetricCard
            label="HRV"
            value="52ms"
            position={{ x: 85, y: 25 }}
            delay={1.4}
          />
          <FloatingMetricCard
            label="Bio Age"
            value="-2.7 years"
            trend="up"
            position={{ x: 15, y: 70 }}
            delay={1.6}
          />

          {/* Central dashboard */}
          <div className="absolute inset-0 flex items-center justify-center">
            <HealthScoreDashboard score={87} maxScore={100} />
          </div>

          {/* Orbital agents */}
          <OrbitalAgents />
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Primary button */}
          <motion.a
            href="https://app.biomax-ai.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-8 py-4 rounded-full font-semibold text-lg overflow-hidden group inline-block"
            style={{
              background: "linear-gradient(135deg, #00D4FF, #8B5CF6, #00FF94)",
              boxShadow: "0 0 40px rgba(0, 212, 255, 0.5)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #00FF94, #00D4FF, #8B5CF6)",
              }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative flex items-center gap-2 text-[#0A0F1E]">
              Начать бесплатно
              <ArrowRight size={20} />
            </span>
          </motion.a>

          {/* Secondary button */}
          <motion.a
            href="https://app.biomax-ai.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 inline-block"
            style={{
              background: "rgba(26, 31, 46, 0.8)",
              border: "2px solid rgba(0, 212, 255, 0.5)",
              color: "#00D4FF",
              backdropFilter: "blur(12px)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 212, 255, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Play size={20} fill="#00D4FF" />
            Смотреть демо
          </motion.a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { icon: "🇷🇺", text: "152-ФЗ Compliant" },
            { icon: "🔬", text: "100+ научных источников" },
            { icon: "📱", text: "Telegram + Mobile" },
            { icon: "🔒", text: "End-to-end шифрование" },
          ].map((badge, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
              style={{
                background: "rgba(26, 31, 46, 0.6)",
                border: "1px solid rgba(0, 212, 255, 0.3)",
                backdropFilter: "blur(8px)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
              }}
            >
              <span className="text-lg">{badge.icon}</span>
              <span className="text-muted-foreground">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
