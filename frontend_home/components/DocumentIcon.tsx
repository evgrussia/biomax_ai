import { motion } from "motion/react";
import { FileText, BookOpen, File } from "lucide-react";

interface DocumentIconProps {
  type: "pdf" | "md" | "research";
  title: string;
  delay?: number;
}

export function DocumentIcon({ type, title, delay = 0 }: DocumentIconProps) {
  const icons = {
    pdf: FileText,
    md: File,
    research: BookOpen,
  };

  const colors = {
    pdf: "#EF4444",
    md: "#00D4FF",
    research: "#8B5CF6",
  };

  const Icon = icons[type];
  const color = colors[type];

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
    >
      <div
        className="rounded-xl p-4 flex items-center gap-3"
        style={{
          background: "rgba(26, 31, 46, 0.7)",
          border: `1px solid ${color}40`,
          backdropFilter: "blur(12px)",
          boxShadow: `0 0 20px ${color}20`,
        }}
      >
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{
            background: `${color}20`,
            border: `1px solid ${color}60`,
          }}
        >
          <Icon size={24} style={{ color }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-gray-200 truncate">
            {title}
          </div>
          <div className="text-xs text-gray-400 uppercase">
            {type === "research" ? "Research Paper" : type.toUpperCase()}
          </div>
        </div>
      </div>

      {/* Upload animation particles */}
      <motion.div
        className="absolute -right-2 top-1/2 w-2 h-2 rounded-full"
        style={{
          background: color,
          boxShadow: `0 0 10px ${color}`,
        }}
        animate={{
          x: [0, 20, 40],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: delay + 0.5,
        }}
      />
    </motion.div>
  );
}
