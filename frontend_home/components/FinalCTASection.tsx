import { motion } from "motion/react";
import { Play, Sparkles } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.4), rgba(0, 255, 148, 0.4), transparent 70%)",
        }}
      />

      {/* Animated particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#00D4FF]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          className="rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(0, 255, 148, 0.2))",
            border: "3px solid rgba(0, 212, 255, 0.5)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 60px rgba(0, 212, 255, 0.3)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background glow */}
          <motion.div
            className="absolute inset-0 rounded-[3rem]"
            style={{
              background: "radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.3), transparent 70%)",
              filter: "blur(40px)",
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Emoji + Title */}
            <motion.div
              className="text-6xl mb-6"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🚀
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#00D4FF] via-[#00FF94] to-[#8B5CF6] bg-clip-text text-transparent">
                Начните управлять здоровьем
              </span>
              <br />
              <span className="text-gray-200">с AI сегодня</span>
            </h2>

            {/* Features */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              {[
                { text: "15 AI-агентов", color: "#00D4FF" },
                { text: "100+ интеграций", color: "#00FF94" },
                { text: "Custom RAG", color: "#8B5CF6" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl"
                  style={{
                    background: `${feature.color}20`,
                    border: `1px solid ${feature.color}60`,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 0 20px ${feature.color}40`,
                  }}
                >
                  <Sparkles size={16} style={{ color: feature.color }} />
                  <span className="text-sm font-semibold text-gray-200">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <motion.a
                href="https://app.biomax-ai.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 rounded-2xl font-bold text-xl inline-block"
                style={{
                  background: "linear-gradient(135deg, #00D4FF, #00FF94)",
                  color: "#0A0F1E",
                  boxShadow: "0 0 40px rgba(0, 212, 255, 0.5)",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 60px rgba(0, 212, 255, 0.7)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Начать бесплатно
              </motion.a>

              <motion.a
                href="https://app.biomax-ai.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 rounded-2xl font-bold text-xl flex items-center gap-2 inline-block"
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
                <Play size={20} />
                Смотреть демо
              </motion.a>
            </div>

            {/* Benefits */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm">
              {[
                "Бесплатный план навсегда",
                "14 дней Pro бесплатно",
                "Без кредитной карты для старта",
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="text-[#00FF94] text-lg">✓</div>
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
