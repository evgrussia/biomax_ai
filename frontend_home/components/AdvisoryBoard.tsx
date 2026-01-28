import { motion } from "motion/react";

const advisors = [
  {
    name: "Dr. Elena Sokolova",
    title: "PhD in Molecular Biology",
    specialty: "Epigenetics & Longevity",
    avatar: "👩‍🔬",
    color: "#00D4FF",
  },
  {
    name: "Dr. Alexey Petrov",
    title: "MD, Endocrinologist",
    specialty: "Metabolic Health",
    avatar: "👨‍⚕️",
    color: "#8B5CF6",
  },
  {
    name: "Dr. Maria Ivanova",
    title: "PhD in Bioinformatics",
    specialty: "AI in Healthcare",
    avatar: "👩‍💻",
    color: "#00FF94",
  },
  {
    name: "Dr. Igor Volkov",
    title: "Sports Medicine",
    specialty: "Performance Optimization",
    avatar: "⚕️",
    color: "#F59E0B",
  },
];

export function AdvisoryBoard() {
  return (
    <div>
      <motion.h3
        className="text-2xl font-bold text-center mb-8 text-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Научный совет
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {advisors.map((advisor, i) => (
          <motion.div
            key={i}
            className="rounded-2xl p-6 text-center"
            style={{
              background: `linear-gradient(135deg, ${advisor.color}15, rgba(26, 31, 46, 0.8))`,
              border: `1px solid ${advisor.color}40`,
              backdropFilter: "blur(12px)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{
              scale: 1.03,
              borderColor: `${advisor.color}80`,
              boxShadow: `0 0 30px ${advisor.color}30`,
            }}
          >
            {/* Avatar */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4"
              style={{
                background: `${advisor.color}30`,
                border: `2px solid ${advisor.color}60`,
              }}
            >
              {advisor.avatar}
            </div>

            {/* Info */}
            <h4 className="font-bold text-gray-200 mb-1">{advisor.name}</h4>
            <p className="text-xs text-gray-400 mb-2">{advisor.title}</p>
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: `${advisor.color}20`,
                color: advisor.color,
              }}
            >
              {advisor.specialty}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
