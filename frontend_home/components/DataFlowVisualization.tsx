import { motion } from "motion/react";

export function DataFlowVisualization() {
  const dataPoints = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    delay: i * 0.3,
  }));

  return (
    <div className="relative h-20 w-full overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 400 80">
        {/* Flow path */}
        <path
          d="M 0 40 Q 100 10, 200 40 T 400 40"
          stroke="url(#flow-gradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />

        <defs>
          <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#00FF94" />
          </linearGradient>
        </defs>

        {/* Animated data points */}
        {dataPoints.map((point) => (
          <motion.circle
            key={point.id}
            r="4"
            fill="#00D4FF"
            style={{
              filter: "drop-shadow(0 0 4px #00D4FF)",
            }}
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: point.delay,
              ease: "linear",
            }}
          >
            <animateMotion dur="3s" repeatCount="indefinite" begin={`${point.delay}s`}>
              <mpath href="#flowPath" />
            </animateMotion>
          </motion.circle>
        ))}

        {/* Hidden path for animation */}
        <path id="flowPath" d="M 0 40 Q 100 10, 200 40 T 400 40" fill="none" />
      </svg>
    </div>
  );
}
