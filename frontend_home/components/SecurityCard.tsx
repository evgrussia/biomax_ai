import { motion } from "motion/react";

interface SecurityCardProps {
  emoji: string;
  title: string;
  description: string;
  details?: string;
  color: string;
  delay?: number;
}

export function SecurityCard({ emoji, title, description, details, color, delay = 0 }: SecurityCardProps) {
  return (
    <motion.div
      className="rounded-2xl p-6 h-full"
      style={{
        background: "rgba(26, 31, 46, 0.8)",
        border: `1px solid ${color}40`,
        backdropFilter: "blur(12px)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        scale: 1.03,
        borderColor: `${color}80`,
        boxShadow: `0 0 30px ${color}40`,
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{
            background: `${color}20`,
            border: `1px solid ${color}60`,
            boxShadow: `0 0 15px ${color}30`,
          }}
        >
          {emoji}
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-200 mb-2" style={{ color }}>
            {title}
          </h4>
          <p className="text-sm text-gray-300 mb-2 leading-relaxed">
            {description}
          </p>
          {details && (
            <p className="text-xs text-gray-500 leading-relaxed">
              {details}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
