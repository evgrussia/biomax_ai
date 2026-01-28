import { motion } from "motion/react";

interface HolographicBadgeProps {
  title: string;
  subtitle?: string;
  icon?: string;
}

export function HolographicBadge({ title, subtitle, icon }: HolographicBadgeProps) {
  return (
    <motion.div
      className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full overflow-hidden"
      style={{
        background: "rgba(26, 31, 46, 0.7)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(0, 212, 255, 0.5)",
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {/* Animated holographic effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(0, 212, 255, 0.2), rgba(139, 92, 246, 0.2), rgba(0, 255, 148, 0.2))",
            "linear-gradient(90deg, rgba(139, 92, 246, 0.2), rgba(0, 255, 148, 0.2), rgba(0, 212, 255, 0.2))",
            "linear-gradient(135deg, rgba(0, 255, 148, 0.2), rgba(0, 212, 255, 0.2), rgba(139, 92, 246, 0.2))",
            "linear-gradient(45deg, rgba(0, 212, 255, 0.2), rgba(139, 92, 246, 0.2), rgba(0, 255, 148, 0.2))",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="relative flex items-center gap-3">
        {icon && (
          <div className="text-2xl" style={{ filter: "drop-shadow(0 0 8px #00D4FF)" }}>
            {icon}
          </div>
        )}
        <div>
          <div className="font-semibold text-[#00D4FF]">{title}</div>
          {subtitle && <div className="text-xs text-muted-foreground">{subtitle}</div>}
        </div>
      </div>
    </motion.div>
  );
}
