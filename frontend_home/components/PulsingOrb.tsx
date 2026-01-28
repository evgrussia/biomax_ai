import { motion } from "motion/react";

interface PulsingOrbProps {
  color: "cyan" | "green" | "purple";
  size?: number;
  className?: string;
}

export function PulsingOrb({ color, size = 100, className = "" }: PulsingOrbProps) {
  const colorMap = {
    cyan: "rgba(0, 212, 255, 0.3)",
    green: "rgba(0, 255, 148, 0.3)",
    purple: "rgba(139, 92, 246, 0.3)",
  };

  const glowColor = {
    cyan: "#00D4FF",
    green: "#00FF94",
    purple: "#8B5CF6",
  };

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="absolute inset-0 rounded-full blur-xl"
        style={{
          background: `radial-gradient(circle, ${colorMap[color]}, transparent)`,
          boxShadow: `0 0 60px ${glowColor[color]}`,
        }}
      />
      <div
        className="absolute inset-4 rounded-full"
        style={{
          background: `radial-gradient(circle, ${glowColor[color]}40, transparent)`,
          border: `1px solid ${glowColor[color]}60`,
        }}
      />
    </motion.div>
  );
}
