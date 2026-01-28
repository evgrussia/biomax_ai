import { motion } from "motion/react";

interface SolutionCardProps {
  title: string;
  color?: "cyan" | "green" | "purple";
  delay?: number;
}

export function SolutionCard({ title, color = "cyan", delay = 0 }: SolutionCardProps) {
  const colorMap = {
    cyan: {
      primary: "#00D4FF",
      glow: "rgba(0, 212, 255, 0.3)",
      border: "rgba(0, 212, 255, 0.5)",
    },
    green: {
      primary: "#00FF94",
      glow: "rgba(0, 255, 148, 0.3)",
      border: "rgba(0, 255, 148, 0.5)",
    },
    purple: {
      primary: "#8B5CF6",
      glow: "rgba(139, 92, 246, 0.3)",
      border: "rgba(139, 92, 246, 0.5)",
    },
  };

  return (
    <motion.div
      className="relative rounded-2xl p-6 overflow-hidden group cursor-pointer"
      style={{
        background: "rgba(26, 31, 46, 0.7)",
        border: `1px solid ${colorMap[color].border}`,
        backdropFilter: "blur(12px)",
        boxShadow: `0 0 20px ${colorMap[color].glow}`,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 0 40px ${colorMap[color].glow}`,
      }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            `radial-gradient(circle at 0% 0%, ${colorMap[color].primary}, transparent)`,
            `radial-gradient(circle at 100% 100%, ${colorMap[color].primary}, transparent)`,
            `radial-gradient(circle at 0% 0%, ${colorMap[color].primary}, transparent)`,
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative flex items-center gap-3">
        {/* Checkmark */}
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold"
          style={{
            background: colorMap[color].glow,
            color: colorMap[color].primary,
            boxShadow: `0 0 15px ${colorMap[color].glow}`,
          }}
        >
          ✓
        </div>

        {/* Title */}
        <p
          className="font-semibold leading-snug"
          style={{ color: colorMap[color].primary }}
        >
          {title}
        </p>
      </div>

      {/* Glow indicator */}
      <motion.div
        className="absolute top-4 right-4 w-2 h-2 rounded-full"
        style={{
          background: colorMap[color].primary,
          boxShadow: `0 0 10px ${colorMap[color].primary}`,
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
}
