import { motion } from "motion/react";
import { useState } from "react";

interface AgentCardProps {
  id: number;
  emoji: string;
  name: string;
  description: string;
  integration?: string;
  color: string;
  onHover: (id: number | null) => void;
  isConnected: boolean;
}

export function AgentCard({
  id,
  emoji,
  name,
  description,
  integration,
  color,
  onHover,
  isConnected,
}: AgentCardProps) {
  return (
    <motion.div
      className="relative rounded-2xl p-6 cursor-pointer overflow-hidden h-full"
      style={{
        background: "rgba(26, 31, 46, 0.7)",
        border: `2px solid ${isConnected ? color : `${color}40`}`,
        backdropFilter: "blur(12px)",
        boxShadow: isConnected
          ? `0 0 40px ${color}80`
          : `0 0 20px ${color}30`,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: id * 0.03 }}
      onHoverStart={() => onHover(id)}
      onHoverEnd={() => onHover(null)}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            `radial-gradient(circle at 0% 0%, ${color}, transparent)`,
            `radial-gradient(circle at 100% 100%, ${color}, transparent)`,
            `radial-gradient(circle at 0% 0%, ${color}, transparent)`,
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative">
        {/* Emoji icon */}
        <div className="text-4xl mb-4">{emoji}</div>

        {/* Agent name */}
        <h3
          className="font-bold mb-2 uppercase text-sm tracking-wide"
          style={{ color }}
        >
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-300 leading-relaxed mb-3">
          {description}
        </p>

        {/* Integration tag */}
        {integration && (
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs"
            style={{
              background: `${color}20`,
              border: `1px solid ${color}40`,
              color: color,
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
            {integration}
          </div>
        )}

        {/* Status indicator */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 rounded-full"
          style={{ background: color }}
          animate={{
            boxShadow: [
              `0 0 0px ${color}`,
              `0 0 10px ${color}`,
              `0 0 0px ${color}`,
            ],
            opacity: isConnected ? [0.5, 1, 0.5] : 0.5,
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Glow effect on connection */}
      {isConnected && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            background: `radial-gradient(circle at center, ${color}20, transparent)`,
          }}
        />
      )}
    </motion.div>
  );
}
