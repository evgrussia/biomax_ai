import { motion } from "motion/react";

interface EcosystemHubProps {
  activeCategory: string | null;
}

export function EcosystemHub({ activeCategory }: EcosystemHubProps) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Orbital rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border border-dashed"
          style={{
            width: ring * 120,
            height: ring * 120,
            borderColor: `rgba(0, 212, 255, ${0.2 - ring * 0.05})`,
          }}
          animate={{
            rotate: ring % 2 === 0 ? 360 : -360,
          }}
          transition={{
            duration: 20 + ring * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Central hub */}
      <motion.div
        className="relative z-10"
        animate={{
          scale: activeCategory ? [1, 1.1, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: activeCategory ? Infinity : 0,
        }}
      >
        <div
          className="w-40 h-40 rounded-full flex flex-col items-center justify-center"
          style={{
            background: "linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(139, 92, 246, 0.3))",
            border: "3px solid rgba(0, 212, 255, 0.6)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 0 60px rgba(0, 212, 255, 0.5), inset 0 0 40px rgba(0, 212, 255, 0.2)",
          }}
        >
          <div className="text-4xl mb-2">🧠</div>
          <div className="font-bold text-xl bg-gradient-to-r from-[#00D4FF] to-[#00FF94] bg-clip-text text-transparent">
            BIOMAX
          </div>
          <div className="text-xs text-gray-300 mt-1">Central Hub</div>
        </div>

        {/* Pulsing glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0, 212, 255, 0.4), transparent)",
            filter: "blur(20px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Data flow particles */}
      {activeCategory &&
        Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * 2 * Math.PI;
          const radius = 200;
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#00D4FF]"
              style={{
                boxShadow: "0 0 10px #00D4FF",
              }}
              animate={{
                x: [
                  Math.cos(angle) * radius,
                  Math.cos(angle) * 100,
                  Math.cos(angle) * radius,
                ],
                y: [
                  Math.sin(angle) * radius,
                  Math.sin(angle) * 100,
                  Math.sin(angle) * radius,
                ],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          );
        })}
    </div>
  );
}
