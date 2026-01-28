import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface StatCounterProps {
  target: number;
  suffix: string;
  label: string;
  color: string;
  delay?: number;
}

function StatCounter({ target, suffix, label, color, delay = 0 }: StatCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color }}>
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </motion.div>
  );
}

export function ResearchStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      <StatCounter
        target={7000}
        suffix="+"
        label="исследований в базе"
        color="#00D4FF"
        delay={0}
      />
      <StatCounter
        target={50000}
        suffix="+"
        label="citations используется"
        color="#8B5CF6"
        delay={0.1}
      />
      <StatCounter
        target={100}
        suffix="%"
        label="Daily PubMed sync"
        color="#00FF94"
        delay={0.2}
      />
    </div>
  );
}
