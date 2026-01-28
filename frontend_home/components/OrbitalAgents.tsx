import { motion } from "motion/react";
import { Brain, Utensils, Heart, FlaskConical, Dna, User, BookOpen, Shield, Dumbbell, Sparkles, Lightbulb, BarChart3, Workflow, Settings, Zap } from "lucide-react";

const agents = [
  { name: "Sleep", icon: Brain, color: "#8B5CF6" },
  { name: "Nutrition", icon: Utensils, color: "#00FF94" },
  { name: "Longevity", icon: Heart, color: "#00D4FF" },
  { name: "Lab", icon: FlaskConical, color: "#F59E0B" },
  { name: "Genomics", icon: Dna, color: "#EC4899" },
  { name: "Coach", icon: User, color: "#00D4FF" },
  { name: "Research", icon: BookOpen, color: "#8B5CF6" },
  { name: "Safety", icon: Shield, color: "#00FF94" },
  { name: "Fitness", icon: Dumbbell, color: "#00D4FF" },
  { name: "Mental Health", icon: Sparkles, color: "#EC4899" },
  { name: "Cognitive", icon: Lightbulb, color: "#F59E0B" },
  { name: "Data Scientist", icon: BarChart3, color: "#00D4FF" },
  { name: "Integration", icon: Workflow, color: "#8B5CF6" },
  { name: "Custom Protocol", icon: Settings, color: "#00FF94" },
  { name: "Orchestrator", icon: Zap, color: "#00D4FF" },
];

export function OrbitalAgents() {
  const radius = 380;
  const centerX = 0;
  const centerY = 0;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {agents.map((agent, index) => {
        const angle = (index / agents.length) * 2 * Math.PI - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        const Icon = agent.icon;

        return (
          <motion.div
            key={agent.name}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
            }}
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: x,
              y: y,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
              delay: 0.5 + index * 0.05,
              ease: "easeOut",
            }}
          >
            {/* Connection line to center */}
            <svg
              className="absolute pointer-events-none"
              style={{
                left: -x,
                top: -y,
                width: Math.abs(x) * 2,
                height: Math.abs(y) * 2,
                overflow: "visible",
              }}
            >
              <motion.line
                x1={x < 0 ? Math.abs(x) * 2 : 0}
                y1={y < 0 ? Math.abs(y) * 2 : 0}
                x2={x < 0 ? Math.abs(x) : Math.abs(x)}
                y2={y < 0 ? Math.abs(y) : Math.abs(y)}
                stroke={agent.color}
                strokeWidth="1"
                opacity="0.3"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 1, delay: 1 + index * 0.05 }}
              />
            </svg>

            {/* Data stream particles */}
            <motion.div
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: agent.color,
                boxShadow: `0 0 8px ${agent.color}`,
                left: -x / 2,
                top: -y / 2,
              }}
              animate={{
                x: [-x / 2, 0],
                y: [-y / 2, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "linear",
              }}
            />

            {/* Agent node */}
            <motion.div
              className="relative pointer-events-auto cursor-pointer group"
              whileHover={{ scale: 1.2, z: 50 }}
              transition={{ duration: 0.2 }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full blur-xl"
                style={{
                  background: `${agent.color}40`,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              />

              {/* Node container */}
              <div
                className="relative w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(26, 31, 46, 0.9)",
                  border: `2px solid ${agent.color}`,
                  boxShadow: `0 0 20px ${agent.color}60, inset 0 0 20px ${agent.color}20`,
                  backdropFilter: "blur(10px)",
                }}
              >
                <Icon size={20} style={{ color: agent.color }} />
              </div>

              {/* Tooltip on hover */}
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-10 px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{
                  background: "rgba(26, 31, 46, 0.95)",
                  border: `1px solid ${agent.color}60`,
                  color: agent.color,
                  boxShadow: `0 0 20px ${agent.color}40`,
                }}
              >
                {agent.name}
              </div>

              {/* Orbital rotation indicator */}
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed opacity-0 group-hover:opacity-30"
                style={{ borderColor: agent.color }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
