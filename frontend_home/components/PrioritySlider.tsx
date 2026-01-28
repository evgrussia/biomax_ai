import { motion } from "motion/react";
import { useState } from "react";

interface PrioritySliderProps {
  onPriorityChange: (value: number) => void;
}

export function PrioritySlider({ onPriorityChange }: PrioritySliderProps) {
  const [value, setValue] = useState(50);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue);
    onPriorityChange(newValue);
  };

  return (
    <motion.div
      className="rounded-2xl p-8"
      style={{
        background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(139, 92, 246, 0.1))",
        border: "1px solid rgba(0, 212, 255, 0.3)",
        backdropFilter: "blur(12px)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-200 mb-2">
          Настройте приоритеты
        </h3>
        <p className="text-sm text-gray-400">
          Система автоматически пересчитает веса измерений под ваши цели
        </p>
      </div>

      {/* Labels */}
      <div className="flex justify-between mb-4">
        <motion.div
          className="text-center"
          animate={{
            scale: value < 50 ? 1.1 : 1,
            opacity: value < 50 ? 1 : 0.6,
          }}
        >
          <div className="text-3xl mb-1">⏳</div>
          <div className="text-sm font-medium text-[#00FF94]">Longevity</div>
          <div className="text-xs text-gray-400 mt-1">Биологический возраст</div>
        </motion.div>

        <motion.div
          className="text-center"
          animate={{
            scale: value > 50 ? 1.1 : 1,
            opacity: value > 50 ? 1 : 0.6,
          }}
        >
          <div className="text-3xl mb-1">💪</div>
          <div className="text-sm font-medium text-[#00D4FF]">Performance</div>
          <div className="text-xs text-gray-400 mt-1">Физические показатели</div>
        </motion.div>
      </div>

      {/* Slider */}
      <div className="relative">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(90deg, 
              #00FF94 0%, 
              #00FF94 ${value}%, 
              rgba(0, 212, 255, 0.3) ${value}%, 
              #00D4FF 100%
            )`,
          }}
        />
        
        {/* Custom thumb */}
        <style>{`
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: linear-gradient(135deg, #00D4FF, #8B5CF6);
            cursor: pointer;
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
            border: 3px solid rgba(26, 31, 46, 0.9);
          }
          input[type="range"]::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: linear-gradient(135deg, #00D4FF, #8B5CF6);
            cursor: pointer;
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.8);
            border: 3px solid rgba(26, 31, 46, 0.9);
          }
        `}</style>
      </div>

      {/* Current value indicator */}
      <motion.div
        className="text-center mt-6 text-sm"
        style={{
          color: value < 50 ? "#00FF94" : "#00D4FF",
        }}
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {value < 40 && "Максимальный фокус на долголетие"}
        {value >= 40 && value < 60 && "Сбалансированный подход"}
        {value >= 60 && "Максимальный фокус на производительность"}
      </motion.div>

      {/* Animated weight indicators */}
      <div className="grid grid-cols-4 gap-3 mt-6">
        {[
          { name: "Bio Age", weight: Math.max(15, 35 - value * 0.4) },
          { name: "Physical", weight: Math.max(10, 10 + value * 0.3) },
          { name: "Metabolic", weight: 20 },
          { name: "Other", weight: 25 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="text-center p-3 rounded-lg"
            style={{
              background: "rgba(0, 212, 255, 0.1)",
              border: "1px solid rgba(0, 212, 255, 0.2)",
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            <div className="text-xs text-gray-400 mb-1">{item.name}</div>
            <motion.div
              className="text-lg font-bold text-[#00D4FF]"
              key={value}
              initial={{ scale: 1.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {Math.round(item.weight)}%
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
