import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface PartnershipCardProps {
  emoji: string;
  title: string;
  description: string;
  benefits: string;
  examples?: string;
  color: string;
  delay?: number;
}

export function PartnershipCard({
  emoji,
  title,
  description,
  benefits,
  examples,
  color,
  delay = 0,
}: PartnershipCardProps) {
  return (
    <motion.div
      className="rounded-3xl p-8 h-full flex flex-col"
      style={{
        background: "linear-gradient(135deg, rgba(26, 31, 46, 0.95), rgba(26, 31, 46, 0.85))",
        border: `2px solid ${color}40`,
        backdropFilter: "blur(16px)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{
        scale: 1.03,
        borderColor: `${color}80`,
        boxShadow: `0 0 40px ${color}30`,
      }}
    >
      {/* Icon */}
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6"
        style={{
          background: `${color}20`,
          border: `2px solid ${color}60`,
          boxShadow: `0 0 20px ${color}30`,
        }}
      >
        {emoji}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-4" style={{ color }}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 mb-6 leading-relaxed flex-1">
        {description}
      </p>

      {/* Divider */}
      <div
        className="h-px mb-6"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}60, transparent)`,
        }}
      />

      {/* Benefits */}
      <div className="mb-4">
        <div className="text-sm font-semibold text-gray-400 mb-2">
          Преимущества:
        </div>
        <div
          className="rounded-xl p-4"
          style={{
            background: `${color}15`,
            border: `1px solid ${color}30`,
          }}
        >
          <p className="text-sm text-gray-300">{benefits}</p>
        </div>
      </div>

      {/* Examples */}
      {examples && (
        <div className="mt-auto">
          <div className="text-xs text-gray-500 mb-2">Примеры партнёров:</div>
          <div className="text-sm text-gray-400 italic">{examples}</div>
        </div>
      )}

      {/* Arrow indicator */}
      <motion.div
        className="mt-6 flex items-center gap-2 text-sm font-semibold"
        style={{ color }}
        whileHover={{ x: 5 }}
      >
        <span>Узнать больше</span>
        <ArrowRight size={16} />
      </motion.div>
    </motion.div>
  );
}
