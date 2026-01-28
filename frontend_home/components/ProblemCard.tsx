import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface ProblemCardProps {
  title: string;
  icon: React.ReactNode;
  statistic: string;
  delay?: number;
}

export function ProblemCard({ title, icon, statistic, delay = 0 }: ProblemCardProps) {
  return (
    <motion.div
      className="relative rounded-2xl p-6 overflow-hidden group"
      style={{
        background: "rgba(75, 85, 99, 0.2)",
        border: "1px solid rgba(107, 114, 128, 0.3)",
      }}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        scale: 1.02,
        borderColor: "rgba(239, 68, 68, 0.5)",
      }}
    >
      {/* Subtle red glow on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle at top left, rgba(239, 68, 68, 0.3), transparent)",
        }}
      />

      <div className="relative">
        {/* Icon */}
        <div className="mb-4 text-red-400/60">
          {icon}
        </div>

        {/* Title */}
        <h4 className="font-semibold text-gray-300 mb-3 leading-snug">
          {title}
        </h4>

        {/* Statistic */}
        <div className="flex items-start gap-2">
          <div className="w-1 h-1 rounded-full bg-red-500 mt-2 flex-shrink-0" />
          <p className="text-sm text-gray-400 leading-relaxed">
            {statistic}
          </p>
        </div>
      </div>

      {/* Problem indicator */}
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-red-500/50" />
    </motion.div>
  );
}
