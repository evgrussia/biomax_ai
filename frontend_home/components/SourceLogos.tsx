import { motion } from "motion/react";

const sources = [
  { name: "PubMed", subtitle: "NCBI", icon: "🔬" },
  { name: "Semantic Scholar", subtitle: "AI-powered", icon: "🧠" },
  { name: "DrugBank", subtitle: "Drug interactions", icon: "💊" },
  { name: "Cochrane Library", subtitle: "Meta-analyses", icon: "📊" },
  { name: "Nature", subtitle: "High-impact", icon: "🧬" },
  { name: "Science", subtitle: "Peer-reviewed", icon: "⚗️" },
];

export function SourceLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {sources.map((source, i) => (
        <motion.div
          key={i}
          className="rounded-2xl p-4 flex flex-col items-center justify-center text-center h-32"
          style={{
            background: "rgba(26, 31, 46, 0.6)",
            border: "1px solid rgba(107, 114, 128, 0.3)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          whileHover={{
            scale: 1.05,
            borderColor: "rgba(0, 212, 255, 0.5)",
            boxShadow: "0 0 20px rgba(0, 212, 255, 0.2)",
          }}
        >
          <div className="text-3xl mb-2">{source.icon}</div>
          <div className="text-sm font-semibold text-gray-200">
            {source.name}
          </div>
          <div className="text-xs text-gray-500 mt-1">{source.subtitle}</div>
        </motion.div>
      ))}
    </div>
  );
}
