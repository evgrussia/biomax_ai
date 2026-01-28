import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function NativeAppScreen() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 30%, rgba(0, 212, 255, 0.2), rgba(139, 92, 246, 0.2), transparent 70%)",
        }}
      />

      {/* Animated particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#00D4FF]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Icon */}
        <motion.div
          className="w-24 h-24 rounded-3xl mx-auto mb-6 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(0, 255, 148, 0.3))",
            border: "2px solid rgba(0, 212, 255, 0.5)",
            boxShadow: "0 0 40px rgba(0, 212, 255, 0.4)",
          }}
          animate={{
            boxShadow: [
              "0 0 40px rgba(0, 212, 255, 0.4)",
              "0 0 60px rgba(0, 212, 255, 0.6)",
              "0 0 40px rgba(0, 212, 255, 0.4)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-5xl">📲</div>
        </motion.div>

        {/* Coming Soon Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
          style={{
            background: "rgba(139, 92, 246, 0.2)",
            border: "1px solid rgba(139, 92, 246, 0.5)",
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles size={14} className="text-[#8B5CF6]" />
          <span className="text-xs font-semibold text-[#8B5CF6]">Coming Q3 2026</span>
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] bg-clip-text text-transparent">
          Native iOS & Android
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
          Полноценное нативное приложение с offline режимом, push уведомлениями и глубокой интеграцией с Apple Health / Google Fit
        </p>

        {/* Features */}
        <div className="space-y-2 text-left">
          {[
            "⚡️ Offline-first architecture",
            "🔔 Smart push notifications",
            "🎨 Advanced data visualizations",
            "🔒 Биометрическая авторизация",
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 text-xs text-gray-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div className="w-1 h-1 rounded-full bg-[#00D4FF]" />
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Waitlist CTA */}
        <motion.button
          className="mt-8 w-full px-6 py-3 rounded-xl text-sm font-semibold"
          style={{
            background: "rgba(0, 212, 255, 0.2)",
            border: "1px solid rgba(0, 212, 255, 0.5)",
            color: "#00D4FF",
          }}
          whileHover={{
            scale: 1.05,
            borderColor: "rgba(0, 212, 255, 0.8)",
            boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Записаться в waitlist
        </motion.button>
      </div>
    </div>
  );
}
