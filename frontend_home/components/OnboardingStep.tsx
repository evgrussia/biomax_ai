import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface OnboardingStepProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
  time: string;
  color: string;
  delay?: number;
  isLast?: boolean;
}

export function OnboardingStep({
  number,
  icon: Icon,
  title,
  description,
  time,
  color,
  delay = 0,
  isLast = false,
}: OnboardingStepProps) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Step Card */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
      >
        <motion.div
          className="rounded-3xl p-8 text-center w-72"
          style={{
            background: "linear-gradient(135deg, rgba(26, 31, 46, 0.95), rgba(26, 31, 46, 0.85))",
            border: `2px solid ${color}40`,
            backdropFilter: "blur(16px)",
          }}
          whileHover={{
            scale: 1.05,
            borderColor: `${color}80`,
            boxShadow: `0 0 40px ${color}30`,
          }}
        >
          {/* Number Badge */}
          <motion.div
            className="absolute -top-4 -left-4 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg"
            style={{
              background: `linear-gradient(135deg, ${color}, ${color}dd)`,
              color: "#0A0F1E",
              boxShadow: `0 0 20px ${color}60`,
            }}
            animate={{
              boxShadow: [
                `0 0 20px ${color}60`,
                `0 0 30px ${color}80`,
                `0 0 20px ${color}60`,
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {number}
          </motion.div>

          {/* Icon */}
          <motion.div
            className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
            style={{
              background: `${color}20`,
              border: `2px solid ${color}60`,
            }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: delay + 0.5 }}
          >
            <Icon size={36} style={{ color }} />
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3" style={{ color }}>
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Time Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
            style={{
              background: `${color}15`,
              border: `1px solid ${color}40`,
              color,
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
            {time}
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Arrow (if not last) */}
      {!isLast && (
        <motion.div
          className="hidden md:block absolute top-1/2 -translate-y-1/2 left-full w-16 z-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
        >
          <svg
            width="64"
            height="40"
            viewBox="0 0 64 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M0 20 L50 20"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: delay + 0.5 }}
            />
            <motion.path
              d="M45 15 L55 20 L45 25"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: delay + 1 }}
            />
          </svg>
        </motion.div>
      )}
    </div>
  );
}
