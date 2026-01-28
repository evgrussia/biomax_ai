import { motion } from "motion/react";
import { AlertTriangle, Shield } from "lucide-react";

export function WellnessDisclaimer() {
  return (
    <motion.div
      className="rounded-3xl p-8"
      style={{
        background: "linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(239, 68, 68, 0.1))",
        border: "2px solid rgba(245, 158, 11, 0.4)",
        backdropFilter: "blur(12px)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-start gap-4 mb-6">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <AlertTriangle size={32} className="text-[#F59E0B] flex-shrink-0" />
        </motion.div>
        <div>
          <h3 className="text-2xl font-bold text-[#F59E0B] mb-2">
            Важно понимать
          </h3>
          <p className="text-sm text-gray-400">
            BIOMAX — это wellness платформа, <span className="font-bold text-gray-300">НЕ медицинское устройство</span>
          </p>
        </div>
      </div>

      <div
        className="rounded-2xl p-6 mb-6"
        style={{
          background: "rgba(26, 31, 46, 0.6)",
          border: "1px solid rgba(245, 158, 11, 0.3)",
        }}
      >
        <ul className="space-y-3">
          {[
            "Мы НЕ ставим диагнозы",
            "Мы НЕ заменяем врача",
            "Все рекомендации носят информационный характер",
            "При симптомах заболеваний — обратитесь к врачу",
          ].map((item, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3 text-gray-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className="text-[#F59E0B] font-bold">•</span>
              <span className="text-sm">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div
        className="rounded-2xl p-5 flex items-start gap-3"
        style={{
          background: "rgba(0, 255, 148, 0.1)",
          border: "1px solid rgba(0, 255, 148, 0.3)",
        }}
      >
        <Shield size={24} className="text-[#00FF94] flex-shrink-0 mt-0.5" />
        <div>
          <div className="font-semibold text-[#00FF94] mb-1 text-sm">
            Safety Agent
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Проверяет все рекомендации на контрпоказания и взаимодействия препаратов
          </p>
        </div>
      </div>
    </motion.div>
  );
}
