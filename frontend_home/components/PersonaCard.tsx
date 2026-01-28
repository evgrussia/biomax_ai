import { motion } from "motion/react";
import { Check } from "lucide-react";

interface PersonaCardProps {
  emoji: string;
  name: string;
  age: number;
  occupation: string;
  city: string;
  stack: string;
  goals: string[];
  pain: string;
  solutions: string[];
  pricing: string;
  color: string;
  dayInLife?: string;
  delay?: number;
}

export function PersonaCard({
  emoji,
  name,
  age,
  occupation,
  city,
  stack,
  goals,
  pain,
  solutions,
  pricing,
  color,
  dayInLife,
  delay = 0,
}: PersonaCardProps) {
  return (
    <motion.div
      className="relative group cursor-pointer h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -10 }}
    >
      <div
        className="rounded-3xl p-8 h-full flex flex-col"
        style={{
          background: "rgba(26, 31, 46, 0.8)",
          border: `2px solid ${color}60`,
          backdropFilter: "blur(12px)",
          boxShadow: `0 0 30px ${color}20`,
          transition: "all 0.3s ease",
        }}
      >
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-3">
            <div className="text-5xl">{emoji}</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-200">
                {name}, {age} лет
              </h3>
              <p className="text-sm text-gray-400 mt-1">{occupation}</p>
              <p className="text-xs text-gray-500">{city}</p>
            </div>
          </div>
          
          {/* Stack badge */}
          <div
            className="rounded-xl px-4 py-3 text-sm"
            style={{
              background: `${color}15`,
              border: `1px solid ${color}40`,
            }}
          >
            <span className="text-gray-400">СТЕК: </span>
            <span className="text-gray-200">{stack}</span>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}60, transparent)`,
          }}
        />

        {/* Goals */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
            Цели:
          </h4>
          <div className="space-y-2">
            {goals.map((goal, i) => (
              <div key={i} className="flex items-start gap-2">
                <Check size={16} className="flex-shrink-0 mt-0.5" style={{ color }} />
                <span className="text-sm text-gray-300">{goal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pain point */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
            Боль:
          </h4>
          <div
            className="rounded-xl px-4 py-3"
            style={{
              background: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
            }}
          >
            <p className="text-sm text-gray-300 italic">"{pain}"</p>
          </div>
        </div>

        {/* Solutions */}
        <div className="mb-6 flex-1">
          <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color }}>
            BIOMAX даёт:
          </h4>
          <div className="space-y-2">
            {solutions.map((solution, i) => (
              <div key={i} className="flex items-start gap-2">
                <span style={{ color }}>★</span>
                <span className="text-sm text-gray-300">{solution}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div
          className="rounded-xl px-4 py-3 text-center"
          style={{
            background: `${color}20`,
            border: `1px solid ${color}60`,
          }}
        >
          <div className="text-xs text-gray-400 mb-1">Готов платить</div>
          <div className="text-lg font-bold" style={{ color }}>
            {pricing}
          </div>
        </div>

        {/* Hover overlay - "День из жизни" */}
        {dayInLife && (
          <motion.div
            className="absolute inset-0 rounded-3xl p-8 flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${color}20, ${color}40)`,
              backdropFilter: "blur(20px)",
            }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">📅</div>
              <h4 className="text-xl font-bold mb-3" style={{ color }}>
                День из жизни с BIOMAX
              </h4>
              <p className="text-sm text-gray-200 leading-relaxed max-w-md">
                {dayInLife}
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle, ${color}40, transparent)`,
          filter: "blur(30px)",
        }}
      />
    </motion.div>
  );
}
