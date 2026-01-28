import { motion } from "motion/react";
import { IntegrationLogo } from "./IntegrationLogo";

interface Integration {
  name: string;
  icon: string;
  isGolden?: boolean;
}

interface IntegrationCategoryProps {
  title: string;
  emoji: string;
  badge?: string;
  integrations: Integration[];
  categoryKey: string;
  onHover: (categoryKey: string | null) => void;
  isActive: boolean;
  delay?: number;
}

export function IntegrationCategory({
  title,
  emoji,
  badge,
  integrations,
  categoryKey,
  onHover,
  isActive,
  delay = 0,
}: IntegrationCategoryProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onHoverStart={() => onHover(categoryKey)}
      onHoverEnd={() => onHover(null)}
    >
      <div
        className="rounded-2xl p-6"
        style={{
          background: isActive
            ? "rgba(26, 31, 46, 0.9)"
            : "rgba(26, 31, 46, 0.6)",
          border: isActive
            ? "2px solid rgba(0, 212, 255, 0.6)"
            : "1px solid rgba(0, 212, 255, 0.2)",
          backdropFilter: "blur(12px)",
          boxShadow: isActive
            ? "0 0 40px rgba(0, 212, 255, 0.3)"
            : "0 0 20px rgba(0, 212, 255, 0.1)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Category header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{emoji}</span>
            <h3 className="font-semibold text-lg text-gray-200">{title}</h3>
          </div>
          {badge && (
            <div
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: "rgba(0, 255, 148, 0.2)",
                border: "1px solid rgba(0, 255, 148, 0.5)",
                color: "#00FF94",
              }}
            >
              {badge}
            </div>
          )}
        </div>

        {/* Integration logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {integrations.map((integration, i) => (
            <IntegrationLogo
              key={i}
              name={integration.name}
              icon={integration.icon}
              category={title}
              isGolden={integration.isGolden}
              delay={delay + i * 0.05}
            />
          ))}
        </div>

        {/* Active indicator */}
        {isActive && (
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#00D4FF]"
            animate={{
              boxShadow: [
                "0 0 10px #00D4FF",
                "0 0 20px #00D4FF",
                "0 0 10px #00D4FF",
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </div>
    </motion.div>
  );
}
