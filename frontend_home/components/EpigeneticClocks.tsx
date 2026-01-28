import { motion } from "motion/react";

const clocks = [
  { name: "GrimAge", color: "#00D4FF" },
  { name: "DunedinPACE", color: "#00FF94" },
  { name: "PhenoAge", color: "#8B5CF6" },
  { name: "TruAge", color: "#F59E0B" },
  { name: "Horvath Clock", color: "#EC4899" },
];

const tests = [
  { name: "TruDiagnostic", logo: "🧬" },
  { name: "GlycanAge", logo: "🔬" },
  { name: "Elysium Index", logo: "⚗️" },
];

export function EpigeneticClocks() {
  return (
    <div className="space-y-8">
      {/* Supported Clocks */}
      <div>
        <h3 className="text-xl font-bold text-gray-200 mb-4 text-center">
          Поддерживаемые эпигенетические часы
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {clocks.map((clock, i) => (
            <motion.div
              key={i}
              className="rounded-xl p-4 text-center"
              style={{
                background: `${clock.color}15`,
                border: `1px solid ${clock.color}40`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                scale: 1.05,
                borderColor: `${clock.color}80`,
                boxShadow: `0 0 20px ${clock.color}30`,
              }}
            >
              <div className="text-sm font-semibold" style={{ color: clock.color }}>
                {clock.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Integrated Tests */}
      <div>
        <h3 className="text-xl font-bold text-gray-200 mb-4 text-center">
          Интегрированные тесты
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tests.map((test, i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-6 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(26, 31, 46, 0.9), rgba(26, 31, 46, 0.7))",
                border: "2px solid rgba(0, 212, 255, 0.3)",
                backdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(0, 212, 255, 0.6)",
                boxShadow: "0 0 30px rgba(0, 212, 255, 0.3)",
              }}
            >
              <div className="text-4xl mb-3">{test.logo}</div>
              <div className="text-lg font-semibold text-gray-200">{test.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
