import { motion } from "motion/react";
import { TrendingDown, Sparkles } from "lucide-react";

export function BiologicalAgeComparison() {
  const chronologicalAge = 55;
  const biologicalAge = 52.3;
  const difference = chronologicalAge - biologicalAge;
  const dunedinPace = 0.95;

  return (
    <motion.div
      className="rounded-3xl p-10 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(0, 255, 148, 0.15))",
        border: "3px solid rgba(0, 212, 255, 0.5)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 0 60px rgba(0, 212, 255, 0.3)",
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(0, 255, 148, 0.2), transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="relative z-10">
        {/* Chronological Age */}
        <div className="mb-8">
          <div className="flex items-baseline justify-between mb-3">
            <span className="text-gray-300 text-lg">Хронологический возраст</span>
            <span className="text-3xl font-bold text-gray-200">{chronologicalAge} лет</span>
          </div>
          <div className="relative h-4 rounded-full overflow-hidden"
            style={{
              background: "rgba(107, 114, 128, 0.3)",
              border: "1px solid rgba(107, 114, 128, 0.5)",
            }}
          >
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                background: "linear-gradient(90deg, rgba(107, 114, 128, 0.6), rgba(107, 114, 128, 0.8))",
              }}
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
        </div>

        {/* Biological Age */}
        <div className="mb-8">
          <div className="flex items-baseline justify-between mb-3">
            <span className="text-[#00FF94] text-lg font-semibold">Биологический возраст</span>
            <span className="text-3xl font-bold text-[#00FF94]">{biologicalAge} года</span>
          </div>
          <div className="relative h-4 rounded-full overflow-hidden"
            style={{
              background: "rgba(0, 255, 148, 0.2)",
              border: "1px solid rgba(0, 255, 148, 0.4)",
            }}
          >
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full relative"
              style={{
                background: "linear-gradient(90deg, #00D4FF, #00FF94)",
                boxShadow: "0 0 20px rgba(0, 255, 148, 0.5)",
              }}
              initial={{ width: "0%" }}
              whileInView={{ width: `${(biologicalAge / chronologicalAge) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              {/* Sparkle effect */}
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles size={16} className="text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Celebration */}
        <motion.div
          className="rounded-2xl p-6 mb-8 text-center"
          style={{
            background: "rgba(0, 255, 148, 0.15)",
            border: "2px solid rgba(0, 255, 148, 0.4)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-4xl mb-2">🎉</div>
          <div className="text-2xl font-bold text-[#00FF94] mb-1">
            Вы на {difference.toFixed(1)} года моложе!
          </div>
          <div className="text-sm text-gray-400">
            Ваш биологический возраст меньше хронологического
          </div>
        </motion.div>

        {/* DunedinPACE Score */}
        <motion.div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(0, 212, 255, 0.1)",
            border: "1px solid rgba(0, 212, 255, 0.3)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <TrendingDown size={20} className="text-[#00D4FF]" />
              <span className="text-gray-300 font-semibold">DunedinPACE</span>
            </div>
            <span className="text-3xl font-bold text-[#00D4FF]">{dunedinPace}</span>
          </div>
          <div className="text-sm text-gray-400 italic">
            "Вы стареете на {((1 - dunedinPace) * 100).toFixed(0)}% медленнее среднего"
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
