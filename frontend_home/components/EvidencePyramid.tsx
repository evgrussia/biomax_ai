import { motion } from "motion/react";

const evidenceLevels = [
  {
    level: "A",
    emoji: "🅰️",
    title: "Meta-analyses & Systematic Reviews",
    subtitle: "Highest",
    color: "#00FF94",
    width: "80%",
  },
  {
    level: "B",
    emoji: "🅱️",
    title: "Randomized Controlled Trials (RCT)",
    subtitle: "",
    color: "#00D4FF",
    width: "65%",
  },
  {
    level: "C",
    emoji: "🅲️",
    title: "Cohort Studies & Observational",
    subtitle: "",
    color: "#8B5CF6",
    width: "50%",
  },
  {
    level: "D",
    emoji: "🅳️",
    title: "Expert Opinion & Mechanistic Studies",
    subtitle: "Lowest",
    color: "#F59E0B",
    width: "35%",
  },
];

export function EvidencePyramid() {
  return (
    <div className="relative max-w-2xl mx-auto">
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {evidenceLevels.map((level, i) => (
          <motion.div
            key={i}
            className="mx-auto"
            style={{ width: level.width }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <motion.div
              className="rounded-2xl p-4 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${level.color}30, ${level.color}15)`,
                border: `2px solid ${level.color}60`,
                backdropFilter: "blur(12px)",
              }}
              whileHover={{
                scale: 1.02,
                borderColor: level.color,
                boxShadow: `0 0 30px ${level.color}40`,
              }}
            >
              <div className="flex items-center gap-3 relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{
                    background: `${level.color}40`,
                    border: `1px solid ${level.color}80`,
                  }}
                >
                  {level.emoji}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-200 text-sm md:text-base">
                    {level.title}
                  </div>
                  {level.subtitle && (
                    <div className="text-xs text-gray-400 mt-1">
                      {level.subtitle}
                    </div>
                  )}
                </div>
              </div>

              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(circle at left, ${level.color}, transparent)`,
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Arrow indicators */}
      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex flex-col items-center justify-around -z-10">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="text-gray-600"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
          >
            ↓
          </motion.div>
        ))}
      </div>

      {/* Bottom note */}
      <motion.div
        className="text-center mt-6 text-sm text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Мы указываем уровень доказательности для каждой рекомендации
      </motion.div>
    </div>
  );
}
