import { motion } from "motion/react";

export function RAGPipeline() {
  const stages = [
    { name: "Chunking", icon: "📄", color: "#00D4FF" },
    { name: "Embedding", icon: "🧬", color: "#8B5CF6" },
    { name: "Vector DB", icon: "💾", color: "#00FF94", label: "Qdrant" },
  ];

  return (
    <div className="relative">
      <motion.div
        className="rounded-2xl p-8"
        style={{
          background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(139, 92, 246, 0.1))",
          border: "1px solid rgba(0, 212, 255, 0.3)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 0 40px rgba(0, 212, 255, 0.2)",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-6">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              <div className="flex items-center gap-4">
                {/* Stage icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl"
                  style={{
                    background: `${stage.color}20`,
                    border: `2px solid ${stage.color}`,
                    boxShadow: `0 0 20px ${stage.color}40`,
                  }}
                >
                  {stage.icon}
                </div>

                {/* Stage info */}
                <div className="flex-1">
                  <div className="font-semibold" style={{ color: stage.color }}>
                    {stage.name}
                  </div>
                  {stage.label && (
                    <div className="text-xs text-gray-400 mt-1">
                      {stage.label}
                    </div>
                  )}
                </div>

                {/* Processing indicator */}
                <motion.div
                  className="flex gap-1"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: stage.color }}
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2 + index * 0.3,
                      }}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Arrow to next stage */}
              {index < stages.length - 1 && (
                <motion.div
                  className="ml-8 mt-3 mb-3"
                  animate={{
                    y: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  <div className="w-px h-8" style={{ background: `linear-gradient(to bottom, ${stage.color}, ${stages[index + 1].color})` }} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Flowing particles through pipeline */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-8 w-3 h-3 rounded-full"
            style={{
              background: stages[i % stages.length].color,
              boxShadow: `0 0 10px ${stages[i % stages.length].color}`,
            }}
            animate={{
              top: ["10%", "90%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* 3D depth effect */}
      <div
        className="absolute inset-0 rounded-2xl -z-10"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent)",
          filter: "blur(30px)",
          transform: "translateY(10px) scale(0.95)",
        }}
      />
    </div>
  );
}
