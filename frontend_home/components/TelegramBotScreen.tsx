import { motion } from "motion/react";

export function TelegramBotScreen() {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div
        className="px-4 py-3 flex items-center gap-3"
        style={{
          background: "rgba(0, 132, 255, 0.95)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-2xl">
          🤖
        </div>
        <div>
          <div className="text-white font-semibold text-sm">BIOMAX AI</div>
          <div className="text-white/70 text-xs">online</div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto">
        {/* User message */}
        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div
            className="max-w-[80%] px-4 py-2 rounded-2xl rounded-tr-md text-sm"
            style={{
              background: "rgba(0, 132, 255, 0.9)",
              color: "white",
            }}
          >
            Как мне улучшить сон?
          </div>
        </motion.div>

        {/* Bot typing indicator */}
        <motion.div
          className="flex gap-1 px-4 py-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: 2 }}
        >
          <div className="w-2 h-2 rounded-full bg-gray-500" />
          <div className="w-2 h-2 rounded-full bg-gray-500" />
          <div className="w-2 h-2 rounded-full bg-gray-500" />
        </motion.div>

        {/* Bot response */}
        <motion.div
          className="flex justify-start"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div
            className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tl-md"
            style={{
              background: "rgba(26, 31, 46, 0.95)",
              border: "1px solid rgba(0, 212, 255, 0.3)",
              color: "#E5E7EB",
            }}
          >
            <div className="text-sm leading-relaxed">
              На основе ваших данных Oura (HRV 45, deep sleep 58 мин), рекомендую:
            </div>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex gap-2">
                <span>1️⃣</span>
                <span>Температура в спальне 18-19°C</span>
              </div>
              <div className="flex gap-2">
                <span>2️⃣</span>
                <span>Магний глицинат 400mg за 2ч до сна</span>
              </div>
              <div className="flex gap-2">
                <span>3️⃣</span>
                <span>Выключить экраны за час до сна</span>
              </div>
            </div>
            <div
              className="mt-3 pt-3 text-xs"
              style={{
                borderTop: "1px solid rgba(0, 212, 255, 0.2)",
                color: "#00D4FF",
              }}
            >
              📚 Источник: Walker et al., 2017
            </div>
          </div>
        </motion.div>
      </div>

      {/* Input area */}
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{
          background: "rgba(26, 31, 46, 0.95)",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <div className="flex-1 px-3 py-2 rounded-full text-xs text-gray-500"
          style={{
            background: "rgba(10, 15, 30, 0.8)",
            border: "1px solid rgba(107, 114, 128, 0.2)",
          }}
        >
          Задайте вопрос AI...
        </div>
        <div className="text-xl">🎤</div>
      </div>
    </div>
  );
}
