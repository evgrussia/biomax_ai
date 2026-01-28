import { motion } from "motion/react";

interface IntegrationLogoProps {
  name: string;
  icon: string;
  category: string;
  isGolden?: boolean;
  delay?: number;
}

export function IntegrationLogo({ name, icon, category, isGolden = false, delay = 0 }: IntegrationLogoProps) {
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.1, y: -5 }}
    >
      <div
        className="rounded-xl p-4 flex flex-col items-center justify-center gap-2 min-h-[100px]"
        style={{
          background: isGolden
            ? "linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(251, 191, 36, 0.2))"
            : "rgba(26, 31, 46, 0.7)",
          border: isGolden
            ? "2px solid rgba(245, 158, 11, 0.6)"
            : "1px solid rgba(0, 212, 255, 0.3)",
          backdropFilter: "blur(12px)",
          boxShadow: isGolden
            ? "0 0 30px rgba(245, 158, 11, 0.3)"
            : "0 0 20px rgba(0, 212, 255, 0.15)",
        }}
      >
        {/* Golden badge */}
        {isGolden && (
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-xs shadow-lg">
            ⭐
          </div>
        )}

        {/* Icon/Logo */}
        <div className="text-3xl mb-1">{icon}</div>

        {/* Name */}
        <div className="text-xs font-medium text-center text-gray-200">
          {name}
        </div>

        {/* Category tag (visible on hover) */}
        <div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: "rgba(0, 212, 255, 0.9)",
            color: "#0A0F1E",
          }}
        >
          {category}
        </div>
      </div>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          background: isGolden
            ? "radial-gradient(circle, rgba(245, 158, 11, 0.3), transparent)"
            : "radial-gradient(circle, rgba(0, 212, 255, 0.2), transparent)",
          filter: "blur(10px)",
        }}
      />
    </motion.div>
  );
}
