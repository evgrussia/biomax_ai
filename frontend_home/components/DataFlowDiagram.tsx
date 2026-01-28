import { motion } from "motion/react";
import { Smartphone, Activity, Brain, TrendingUp, ArrowRight } from "lucide-react";

export function DataFlowDiagram() {
  const devices = [
    { icon: "⌚", label: "Oura Ring" },
    { icon: "📱", label: "Apple Health" },
    { icon: "🩺", label: "CGM" },
    { icon: "💉", label: "Lab Tests" },
  ];

  return (
    <div className="relative py-12">
      {/* Devices */}
      <div className="flex justify-center gap-4 mb-8">
        {devices.map((device, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
              style={{
                background: "rgba(75, 85, 99, 0.3)",
                border: "1px solid rgba(107, 114, 128, 0.4)",
              }}
            >
              {device.icon}
            </div>
            <span className="text-xs text-gray-400">{device.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Arrows flowing down */}
      <div className="flex justify-center gap-4 mb-6">
        {devices.map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <ArrowRight
                size={24}
                className="rotate-90"
                style={{ color: "#00D4FF" }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Central BIOMAX Hub */}
      <motion.div
        className="relative mx-auto mb-6"
        style={{ width: "280px" }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div
          className="relative rounded-3xl p-8 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(139, 92, 246, 0.2))",
            border: "2px solid rgba(0, 212, 255, 0.6)",
            boxShadow: "0 0 60px rgba(0, 212, 255, 0.4)",
          }}
        >
          {/* Animated particles inside */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#00D4FF]"
              style={{
                left: "50%",
                top: "50%",
              }}
              animate={{
                x: [0, Math.cos(i * 30 * Math.PI / 180) * 50, 0],
                y: [0, Math.sin(i * 30 * Math.PI / 180) * 50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}

          <div className="relative text-center">
            <div className="text-4xl mb-2">🧠</div>
            <div className="font-bold text-xl bg-gradient-to-r from-[#00D4FF] to-[#00FF94] bg-clip-text text-transparent">
              BIOMAX
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              15 AI Agents
            </div>
          </div>
        </div>

        {/* Orbital rings */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-dashed border-[#00D4FF]/30"
          style={{ padding: "20px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Arrows flowing down */}
      <div className="flex justify-center gap-4 mb-8">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 + i * 0.1 }}
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              <ArrowRight
                size={24}
                className="rotate-90"
                style={{ color: "#00FF94" }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Insights output */}
      <div className="flex justify-center gap-4">
        {[
          { icon: "📊", label: "Insights" },
          { icon: "💡", label: "Actions" },
          { icon: "🎯", label: "Goals" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 + i * 0.1 }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
              style={{
                background: "rgba(0, 255, 148, 0.2)",
                border: "1px solid rgba(0, 255, 148, 0.5)",
                boxShadow: "0 0 20px rgba(0, 255, 148, 0.2)",
              }}
            >
              {item.icon}
            </div>
            <span className="text-xs font-medium" style={{ color: "#00FF94" }}>
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
