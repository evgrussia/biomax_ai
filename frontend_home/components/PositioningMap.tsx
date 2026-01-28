import { motion } from "motion/react";
import { Star } from "lucide-react";

const competitors = [
  { name: "InsideTracker", x: 25, y: 30, description: "labs only", color: "#6B7280" },
  { name: "Oura", x: 35, y: 50, description: "wearables", color: "#6B7280" },
  { name: "WHOOP", x: 40, y: 55, description: "wearables", color: "#6B7280" },
  { name: "Levels", x: 30, y: 70, description: "CGM only", color: "#6B7280" },
  { name: "Wild Health", x: 75, y: 65, description: "human coaches", color: "#6B7280" },
  { name: "BIOMAX", x: 70, y: 35, description: "all categories", color: "#00FF94", highlight: true },
];

export function PositioningMap() {
  return (
    <motion.div
      className="relative rounded-3xl p-8"
      style={{
        background: "linear-gradient(135deg, rgba(26, 31, 46, 0.9), rgba(26, 31, 46, 0.7))",
        border: "1px solid rgba(0, 212, 255, 0.3)",
        backdropFilter: "blur(12px)",
        height: 500,
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Axes */}
      <div className="absolute left-8 right-8 bottom-16 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
      <div className="absolute left-1/2 top-8 bottom-16 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent" />

      {/* X-axis labels */}
      <div className="absolute left-16 bottom-6 text-xs text-gray-500">
        Узкий фокус
      </div>
      <div className="absolute right-16 bottom-6 text-xs text-gray-500">
        Широкий охват
      </div>

      {/* Y-axis labels */}
      <div
        className="absolute left-2 top-16 text-xs text-gray-500"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        High Price
      </div>
      <div
        className="absolute left-2 bottom-20 text-xs text-gray-500"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        Low Price
      </div>

      {/* Grid lines */}
      {[0, 25, 50, 75, 100].map((pos) => (
        <div
          key={`h-${pos}`}
          className="absolute left-8 right-8 h-px bg-gray-800 opacity-30"
          style={{ top: `${16 + (pos / 100) * 68}%` }}
        />
      ))}
      {[0, 25, 50, 75, 100].map((pos) => (
        <div
          key={`v-${pos}`}
          className="absolute top-8 bottom-16 w-px bg-gray-800 opacity-30"
          style={{ left: `${8 + (pos / 100) * 84}%` }}
        />
      ))}

      {/* Competitors */}
      {competitors.map((comp, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${comp.x}%`,
            top: `${comp.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
        >
          {comp.highlight ? (
            // BIOMAX - highlighted with star
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="w-20 h-20 rounded-2xl flex items-center justify-center relative z-10"
                style={{
                  background: "linear-gradient(135deg, rgba(0, 255, 148, 0.3), rgba(0, 212, 255, 0.3))",
                  border: "2px solid rgba(0, 255, 148, 0.8)",
                  boxShadow: "0 0 40px rgba(0, 255, 148, 0.6)",
                }}
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(0, 255, 148, 0.6)",
                    "0 0 60px rgba(0, 255, 148, 0.8)",
                    "0 0 40px rgba(0, 255, 148, 0.6)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star size={32} className="text-[#00FF94] fill-[#00FF94]" />
              </motion.div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <div className="text-sm font-bold text-[#00FF94] text-center mb-1">
                  {comp.name}
                </div>
                <div className="text-xs text-gray-400 text-center">
                  {comp.description}
                </div>
              </div>
              {/* Pulsing glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl -z-10"
                style={{
                  background: "radial-gradient(circle, rgba(0, 255, 148, 0.4), transparent)",
                  filter: "blur(20px)",
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          ) : (
            // Other competitors
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(107, 114, 128, 0.3)",
                  border: "1px solid rgba(107, 114, 128, 0.5)",
                }}
              >
                <div className="w-3 h-3 rounded-full bg-gray-500" />
              </div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <div className="text-xs font-medium text-gray-400 text-center mb-1">
                  {comp.name}
                </div>
                <div className="text-xs text-gray-600 text-center">
                  {comp.description}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}

      {/* Legend */}
      <div className="absolute top-4 right-4">
        <div
          className="px-4 py-2 rounded-xl text-xs"
          style={{
            background: "rgba(26, 31, 46, 0.8)",
            border: "1px solid rgba(107, 114, 128, 0.3)",
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Star size={16} className="text-[#00FF94]" />
            <span className="text-gray-300">BIOMAX AI</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-500" />
            <span className="text-gray-500">Конкуренты</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
