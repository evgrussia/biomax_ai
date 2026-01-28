import { motion } from "motion/react";
import { User, Sparkles } from "lucide-react";

export function AIChatBubble() {
  return (
    <div className="space-y-4">
      {/* User message */}
      <motion.div
        className="flex items-start gap-3"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            background: "rgba(107, 114, 128, 0.3)",
            border: "1px solid rgba(156, 163, 175, 0.5)",
          }}
        >
          <User size={20} className="text-gray-400" />
        </div>
        <div
          className="rounded-2xl rounded-tl-sm px-4 py-3 max-w-md"
          style={{
            background: "rgba(75, 85, 99, 0.4)",
            border: "1px solid rgba(107, 114, 128, 0.4)",
          }}
        >
          <p className="text-gray-200">
            Какой протокол NMN подходит для моего генотипа?
          </p>
        </div>
      </motion.div>

      {/* AI response */}
      <motion.div
        className="flex items-start gap-3"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, #00D4FF, #8B5CF6)",
            boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
          }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(0, 212, 255, 0.5)",
              "0 0 30px rgba(0, 212, 255, 0.7)",
              "0 0 20px rgba(0, 212, 255, 0.5)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles size={20} className="text-white" />
        </motion.div>
        <div
          className="rounded-2xl rounded-tl-sm px-5 py-4 max-w-md"
          style={{
            background: "rgba(26, 31, 46, 0.9)",
            border: "1px solid rgba(0, 212, 255, 0.5)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 0 30px rgba(0, 212, 255, 0.2)",
          }}
        >
          <p className="text-gray-200 leading-relaxed mb-3">
            Согласно Blueprint и вашим данным{" "}
            <span className="text-[#EC4899] font-semibold">(APOE e3/e4)</span>, рекомендую{" "}
            <span className="text-[#00FF94] font-semibold">NMN 500mg утром</span>.
          </p>
          
          {/* Source citation */}
          <div
            className="mt-3 pt-3 border-t flex items-start gap-2"
            style={{ borderColor: "rgba(0, 212, 255, 0.2)" }}
          >
            <div className="text-xs text-[#00D4FF]">📎</div>
            <div className="text-xs text-gray-400 leading-relaxed">
              Источник:{" "}
              <span className="text-[#00D4FF]">
                Bryan Johnson Protocol v2.0, параграф 4.2
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Typing indicator for next message */}
      <motion.div
        className="flex items-center gap-3 ml-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-[#00D4FF]"
              animate={{
                y: [0, -5, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        <span className="text-xs text-gray-500">AI анализирует...</span>
      </motion.div>
    </div>
  );
}
