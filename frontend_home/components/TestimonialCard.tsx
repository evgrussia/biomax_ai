import { motion } from "motion/react";
import { Star, TrendingUp } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  age: number;
  occupation: string;
  location: string;
  plan: string;
  results: string[];
  avatar: string;
  color: string;
  delay?: number;
}

export function TestimonialCard({
  quote,
  name,
  age,
  occupation,
  location,
  plan,
  results,
  avatar,
  color,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="rounded-3xl p-8 h-full flex flex-col"
      style={{
        background: "linear-gradient(135deg, rgba(26, 31, 46, 0.95), rgba(26, 31, 46, 0.85))",
        border: `2px solid ${color}40`,
        backdropFilter: "blur(16px)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{
        scale: 1.02,
        borderColor: `${color}80`,
        boxShadow: `0 0 40px ${color}30`,
      }}
    >
      {/* Quote */}
      <div className="mb-6 flex-1">
        <div className="text-4xl text-gray-600 mb-2">"</div>
        <p className="text-gray-300 leading-relaxed italic">
          {quote}
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + i * 0.05 }}
          >
            <Star size={20} className="fill-[#F59E0B] text-[#F59E0B]" />
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div
        className="h-px mb-6"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}60, transparent)`,
        }}
      />

      {/* User Info */}
      <div className="flex items-start gap-4 mb-6">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
          style={{
            background: `${color}30`,
            border: `2px solid ${color}60`,
          }}
        >
          {avatar}
        </div>
        <div className="flex-1">
          <div className="font-bold text-gray-200 mb-1">
            {name}, {age} лет
          </div>
          <div className="text-sm text-gray-400 mb-2">{occupation}</div>
          <div className="text-xs text-gray-500">{location}</div>
        </div>
      </div>

      {/* Plan Badge */}
      <div className="mb-4">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold"
          style={{
            background: `${color}20`,
            border: `1px solid ${color}60`,
            color,
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
          Использует: {plan}
        </div>
      </div>

      {/* Results */}
      <div
        className="rounded-2xl p-4"
        style={{
          background: `${color}15`,
          border: `1px solid ${color}30`,
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp size={16} style={{ color }} />
          <span className="text-sm font-semibold text-gray-200">
            Результат:
          </span>
        </div>
        <div className="space-y-2">
          {results.map((result, i) => (
            <motion.div
              key={i}
              className="text-sm text-gray-300 flex items-start gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: delay + i * 0.1 }}
            >
              <span style={{ color }}>•</span>
              <span>{result}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
