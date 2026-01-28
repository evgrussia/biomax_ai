import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface StatItemProps {
  value: string;
  label: string;
  delay?: number;
}

function StatItem({ value, label, delay = 0 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    if (isNaN(numericValue)) return;

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#00FF94] bg-clip-text text-transparent mb-2">
        {value.includes("+") ? `${count}+` : count}
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </motion.div>
  );
}

export function StatsCounter() {
  return (
    <motion.div
      className="rounded-3xl p-8"
      style={{
        background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 255, 148, 0.1))",
        border: "1px solid rgba(0, 212, 255, 0.3)",
        backdropFilter: "blur(12px)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#00D4FF]/20">
        <StatItem value="100+" label="интеграций" delay={0.2} />
        <StatItem value="50" label="млн точек данных" delay={0.4} />
        <StatItem value="24" label="real-time updates (часов)" delay={0.6} />
      </div>

      {/* Decorative animated line */}
      <motion.div
        className="mt-6 h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent, #00D4FF, transparent)",
        }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
}
