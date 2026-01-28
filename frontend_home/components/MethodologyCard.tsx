import { motion } from "motion/react";

interface MethodologyCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  delay?: number;
}

export function MethodologyCard({ title, description, icon, color, delay = 0 }: MethodologyCardProps) {
  return (
    <motion.div
      className="rounded-2xl p-6"
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
        scale: 1.05,
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
          {icon}
        </div>
        <div>
          <h4 className="font-bold text-gray-200 mb-2" style={{ color }}>
            {title}
          </h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
