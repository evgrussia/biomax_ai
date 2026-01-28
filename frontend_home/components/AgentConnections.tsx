import { motion } from "motion/react";

interface Connection {
  from: number;
  to: number;
  color: string;
}

interface AgentConnectionsProps {
  connections: Connection[];
  gridPositions: { [key: number]: { x: number; y: number } };
}

export function AgentConnections({ connections, gridPositions }: AgentConnectionsProps) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      <defs>
        {connections.map((conn, i) => (
          <linearGradient
            key={`gradient-${i}`}
            id={`connection-gradient-${i}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor={conn.color} stopOpacity="0.6" />
            <stop offset="100%" stopColor={conn.color} stopOpacity="0.2" />
          </linearGradient>
        ))}
      </defs>

      {connections.map((conn, i) => {
        const from = gridPositions[conn.from];
        const to = gridPositions[conn.to];

        if (!from || !to) return null;

        return (
          <motion.line
            key={i}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke={`url(#connection-gradient-${i})`}
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            exit={{ pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        );
      })}

      {/* Animated data flow particles */}
      {connections.map((conn, i) => {
        const from = gridPositions[conn.from];
        const to = gridPositions[conn.to];

        if (!from || !to) return null;

        return (
          <motion.circle
            key={`particle-${i}`}
            r="3"
            fill={conn.color}
            style={{ filter: `drop-shadow(0 0 4px ${conn.color})` }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            <animateMotion
              dur="2s"
              repeatCount="indefinite"
              begin={`${i * 0.2}s`}
            >
              <mpath href={`#path-${i}`} />
            </animateMotion>
          </motion.circle>
        );
      })}

      {/* Hidden paths for animation */}
      {connections.map((conn, i) => {
        const from = gridPositions[conn.from];
        const to = gridPositions[conn.to];

        if (!from || !to) return null;

        return (
          <path
            key={`path-${i}`}
            id={`path-${i}`}
            d={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
            fill="none"
          />
        );
      })}
    </svg>
  );
}
