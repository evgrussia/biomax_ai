import { motion } from "motion/react";

interface DifferentiatorCardProps {
  title: string;
  description: string;
  color: string;
  gradient: string;
  delay?: number;
}

export function DifferentiatorCard({
  title,
  description,
  color,
  gradient,
  delay = 0,
}: DifferentiatorCardProps) {
  return (
    <motion.div
      className="rounded-3xl p-8 h-full relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${gradient})`,
        border: `2px solid ${color}60`,
        backdropFilter: "blur(12px)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{
        scale: 1.02,
        borderColor: `${color}`,
        boxShadow: `0 0 40px ${color}40`,
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4" style={{ color }}>
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: `linear-gradient(to top, ${color}20, transparent)`,
          filter: "blur(20px)",
        }}
      />
    </motion.div>
  );
}
