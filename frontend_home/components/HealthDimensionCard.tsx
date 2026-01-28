import { motion } from "motion/react";

interface HealthDimensionCardProps {
  emoji: string;
  name: string;
  score: number;
  description: string;
  dataSources: string;
  color: string;
  delay?: number;
}

export function HealthDimensionCard({
  emoji,
  name,
  score,
  description,
  dataSources,
  color,
  delay = 0,
}: HealthDimensionCardProps) {
  return (
    <motion.div
      className="rounded-2xl p-5 cursor-pointer"
      style={{
        background: "rgba(26, 31, 46, 0.7)",
        border: `1px solid ${color}40`,
        backdropFilter: "blur(12px)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        scale: 1.03,
        borderColor: `${color}80`,
        boxShadow: `0 0 30px ${color}40`,
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{emoji}</div>
          <div>
            <h4 className="font-semibold text-gray-200">{name}</h4>
            <p className="text-xs text-gray-400 mt-1">{description}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold" style={{ color }}>
            {score}
          </div>
          <div className="text-xs text-gray-400">/100</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative h-2 rounded-full bg-gray-800/50 mb-3 overflow-hidden">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            boxShadow: `0 0 10px ${color}60`,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${score}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.3 }}
        />
      </div>

      {/* Data sources */}
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <span className="opacity-50">📊</span>
        <span>{dataSources}</span>
      </div>
    </motion.div>
  );
}
