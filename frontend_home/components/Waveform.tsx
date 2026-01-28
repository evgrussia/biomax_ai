import { motion } from "motion/react";

interface WaveformProps {
  color?: "cyan" | "green" | "purple";
  bars?: number;
  height?: number;
}

export function Waveform({ color = "cyan", bars = 40, height = 60 }: WaveformProps) {
  const colorMap = {
    cyan: "#00D4FF",
    green: "#00FF94",
    purple: "#8B5CF6",
  };

  const strokeColor = colorMap[color];

  return (
    <div className="flex items-center justify-center gap-[2px]" style={{ height }}>
      {Array.from({ length: bars }).map((_, i) => {
        const barHeight = Math.sin(i * 0.3) * 0.5 + 0.5;
        return (
          <motion.div
            key={i}
            className="w-1 rounded-full"
            style={{
              background: strokeColor,
              boxShadow: `0 0 8px ${strokeColor}80`,
            }}
            animate={{
              height: [`${barHeight * 30}%`, `${barHeight * 80}%`, `${barHeight * 30}%`],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.05,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
