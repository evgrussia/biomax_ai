import { motion } from "motion/react";

const stats = [
  { value: "100+", label: "интеграций", color: "#00D4FF" },
  { value: "50K", label: "пользователей (projected Y1)", color: "#00FF94" },
  { value: "5-8%", label: "referral commission", color: "#8B5CF6" },
];

export function PartnershipStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          className="rounded-2xl p-6 text-center"
          style={{
            background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}10)`,
            border: `2px solid ${stat.color}40`,
            backdropFilter: "blur(12px)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          whileHover={{
            scale: 1.05,
            borderColor: `${stat.color}80`,
            boxShadow: `0 0 30px ${stat.color}40`,
          }}
        >
          <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
            {stat.value}
          </div>
          <div className="text-sm text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
