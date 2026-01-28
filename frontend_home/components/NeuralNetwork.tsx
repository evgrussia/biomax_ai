import { motion } from "motion/react";

interface NeuralNetworkProps {
  nodes?: number;
  size?: number;
}

export function NeuralNetwork({ nodes = 8, size = 300 }: NeuralNetworkProps) {
  const positions = Array.from({ length: nodes }, (_, i) => ({
    x: (Math.cos((i * 2 * Math.PI) / nodes) * size) / 2.5 + size / 2,
    y: (Math.sin((i * 2 * Math.PI) / nodes) * size) / 2.5 + size / 2,
    id: i,
  }));

  return (
    <svg width={size} height={size} className="overflow-visible">
      {/* Connections */}
      {positions.map((pos, i) =>
        positions.slice(i + 1).map((target, j) => (
          <motion.line
            key={`${i}-${j}`}
            x1={pos.x}
            y1={pos.y}
            x2={target.x}
            y2={target.y}
            stroke="url(#line-gradient)"
            strokeWidth="1"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: (i + j) * 0.1 }}
          />
        ))
      )}

      {/* Gradient definition */}
      <defs>
        <linearGradient id="line-gradient">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#00FF94" />
        </linearGradient>
        <radialGradient id="node-gradient">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.2" />
        </radialGradient>
      </defs>

      {/* Nodes */}
      {positions.map((pos, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={pos.x}
            cy={pos.y}
            r="12"
            fill="url(#node-gradient)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          />
          <motion.circle
            cx={pos.x}
            cy={pos.y}
            r="6"
            fill="#00D4FF"
            animate={{
              r: [6, 8, 6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              filter: "drop-shadow(0 0 4px #00D4FF)",
            }}
          />
        </motion.g>
      ))}
    </svg>
  );
}
