import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  color: string;
  delay?: number;
}

export function FAQItem({ question, answer, color, delay = 0 }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(26, 31, 46, 0.8)",
        border: isOpen ? `2px solid ${color}60` : "1px solid rgba(107, 114, 128, 0.3)",
        backdropFilter: "blur(12px)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        borderColor: `${color}40`,
        boxShadow: isOpen ? `0 0 30px ${color}30` : "none",
      }}
    >
      {/* Question */}
      <button
        className="w-full p-6 flex items-center justify-between gap-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-start gap-4 flex-1">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
            style={{
              background: `${color}20`,
              border: `1px solid ${color}60`,
            }}
          >
            <span className="text-lg font-bold" style={{ color }}>
              Q
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-200 flex-1">
            {question}
          </h3>
        </div>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={24} className="text-gray-400" />
        </motion.div>
      </button>

      {/* Answer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div
              className="h-px mx-6"
              style={{
                background: `linear-gradient(90deg, transparent, ${color}60, transparent)`,
              }}
            />
            <div className="p-6 pt-4">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}40`,
                  }}
                >
                  <span className="text-lg font-bold" style={{ color }}>
                    A
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed flex-1">
                  {answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
