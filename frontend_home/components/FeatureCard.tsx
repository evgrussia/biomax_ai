import { motion } from "motion/react";

interface FeatureCardProps {
  icon: string;
  title: string;
  delay?: number;
}

export function FeatureCard({ icon, title, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      className="rounded-2xl p-6"
      style={{
        background: "rgba(26, 31, 46, 0.7)",
        border: "1px solid rgba(0, 212, 255, 0.3)",
        backdropFilter: "blur(12px)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        scale: 1.03,
        borderColor: "rgba(0, 212, 255, 0.6)",
        boxShadow: "0 0 30px rgba(0, 212, 255, 0.3)",
      }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <p className="text-gray-200 leading-relaxed">{title}</p>
    </motion.div>
  );
}
