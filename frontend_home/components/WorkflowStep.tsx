import { motion } from "motion/react";

interface WorkflowStepProps {
  step: number;
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export function WorkflowStep({ step, icon, title, description, delay = 0 }: WorkflowStepProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div
        className="rounded-2xl p-6 h-full"
        style={{
          background: "rgba(26, 31, 46, 0.7)",
          border: "1px solid rgba(0, 212, 255, 0.3)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Step number badge */}
        <div
          className="absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center font-bold"
          style={{
            background: "linear-gradient(135deg, #00D4FF, #8B5CF6)",
            boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
          }}
        >
          {step}
        </div>

        {/* Icon */}
        <div className="text-4xl mb-4 mt-2">{icon}</div>

        {/* Title */}
        <h4 className="text-lg font-bold text-gray-200 mb-2">{title}</h4>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>

        {/* Animated glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0"
          whileHover={{ opacity: 1 }}
          style={{
            background: "radial-gradient(circle, rgba(0, 212, 255, 0.2), transparent)",
            filter: "blur(20px)",
          }}
        />
      </div>
    </motion.div>
  );
}
