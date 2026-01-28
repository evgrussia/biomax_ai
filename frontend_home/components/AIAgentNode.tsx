import { motion } from "motion/react";
import { Brain, Cpu, Activity, Zap } from "lucide-react";

interface AIAgentNodeProps {
  name: string;
  status: "active" | "idle" | "processing";
  metric?: string;
  icon?: "brain" | "cpu" | "activity" | "zap";
  color?: "cyan" | "green" | "purple";
}

export function AIAgentNode({
  name,
  status,
  metric,
  icon = "brain",
  color = "cyan",
}: AIAgentNodeProps) {
  const colorMap = {
    cyan: { primary: "#00D4FF", glow: "rgba(0, 212, 255, 0.3)" },
    green: { primary: "#00FF94", glow: "rgba(0, 255, 148, 0.3)" },
    purple: { primary: "#8B5CF6", glow: "rgba(139, 92, 246, 0.3)" },
  };

  const statusColors = {
    active: colorMap[color].primary,
    idle: "#6B7280",
    processing: "#F59E0B",
  };

  const IconComponent = {
    brain: Brain,
    cpu: Cpu,
    activity: Activity,
    zap: Zap,
  }[icon];

  return (
    <motion.div
      className="glass-card rounded-2xl p-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{
        borderColor: statusColors[status],
        boxShadow: `0 0 20px ${colorMap[color].glow}`,
      }}
    >
      {/* Background glow effect */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at top right, ${colorMap[color].primary}, transparent)`,
        }}
      />

      <div className="relative flex items-start justify-between">
        <div className="flex items-start gap-3">
          <motion.div
            className="p-2 rounded-xl"
            style={{
              background: `${colorMap[color].glow}`,
              border: `1px solid ${colorMap[color].primary}60`,
            }}
            animate={
              status === "processing"
                ? {
                    rotate: [0, 360],
                  }
                : {}
            }
            transition={
              status === "processing"
                ? {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }
                : {}
            }
          >
            <IconComponent size={20} style={{ color: colorMap[color].primary }} />
          </motion.div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            {metric && <p className="text-sm text-muted-foreground mt-1">{metric}</p>}
          </div>
        </div>

        <motion.div
          className="w-2 h-2 rounded-full"
          style={{
            background: statusColors[status],
            boxShadow: `0 0 10px ${statusColors[status]}`,
          }}
          animate={{
            opacity: status === "active" ? [0.5, 1, 0.5] : 1,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>
  );
}
