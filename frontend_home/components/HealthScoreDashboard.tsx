import { motion } from "motion/react";

interface HealthScoreDashboardProps {
  score: number;
  maxScore?: number;
}

export function HealthScoreDashboard({ score, maxScore = 100 }: HealthScoreDashboardProps) {
  const percentage = (score / maxScore) * 100;
  
  return (
    <motion.div
      className="relative"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Outer glow rings */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.2), transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Main dashboard container */}
      <div
        className="relative w-[280px] h-[280px] rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, rgba(26, 31, 46, 0.95), rgba(10, 15, 30, 0.98))",
          border: "2px solid rgba(0, 212, 255, 0.5)",
          boxShadow: `
            0 0 60px rgba(0, 212, 255, 0.4),
            inset 0 0 60px rgba(0, 212, 255, 0.1),
            0 20px 60px rgba(0, 0, 0, 0.5)
          `,
          transform: "perspective(1000px) rotateX(5deg)",
        }}
      >
        {/* Inner rings */}
        <div className="absolute inset-8 rounded-full border border-[#00D4FF]/20" />
        <div className="absolute inset-12 rounded-full border border-[#00D4FF]/10" />

        {/* Score display */}
        <div className="relative z-10 text-center">
          <motion.div
            className="text-7xl font-bold bg-gradient-to-b from-[#00D4FF] to-[#00FF94] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {score}
          </motion.div>
          <div className="text-2xl text-[#00D4FF]/60 font-medium">/ {maxScore}</div>
          <motion.div
            className="mt-3 text-sm font-medium text-[#00FF94]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            HEALTH SCORE
          </motion.div>

          {/* Progress arc */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            style={{ filter: "drop-shadow(0 0 8px #00D4FF)" }}
          >
            <circle
              cx="140"
              cy="140"
              r="120"
              stroke="rgba(0, 212, 255, 0.1)"
              strokeWidth="3"
              fill="none"
            />
            <motion.circle
              cx="140"
              cy="140"
              r="120"
              stroke="url(#scoreGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 120}
              initial={{ strokeDashoffset: 2 * Math.PI * 120 }}
              animate={{ strokeDashoffset: 2 * Math.PI * 120 * (1 - percentage / 100) }}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#00FF94" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating data particles inside */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#00D4FF]"
            style={{
              left: "50%",
              top: "50%",
            }}
            animate={{
              x: [0, Math.cos(i * 45 * Math.PI / 180) * 80],
              y: [0, Math.sin(i * 45 * Math.PI / 180) * 80],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* 3D depth shadow */}
      <div
        className="absolute inset-0 rounded-full -z-10"
        style={{
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.3), transparent)",
          filter: "blur(30px)",
          transform: "translateY(20px) scale(0.9)",
        }}
      />
    </motion.div>
  );
}
