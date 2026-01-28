import { motion } from "motion/react";

interface ProtocolCardProps {
  name: string;
  position: { x: number; y: number };
  delay?: number;
}

export function ProtocolCard({ name, position, delay = 0 }: ProtocolCardProps) {
  return (
    <motion.div
      className="absolute rounded-xl px-4 py-2 cursor-pointer"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        background: "rgba(26, 31, 46, 0.85)",
        border: "1px solid rgba(0, 212, 255, 0.4)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 20px rgba(0, 212, 255, 0.2)",
      }}
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        scale: 1.1,
        rotate: 2,
        boxShadow: "0 8px 30px rgba(0, 212, 255, 0.4)",
        zIndex: 10,
      }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        y: {
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#00FF94]" />
        <span className="text-sm text-gray-200 font-medium whitespace-nowrap">
          {name}
        </span>
      </div>
    </motion.div>
  );
}
