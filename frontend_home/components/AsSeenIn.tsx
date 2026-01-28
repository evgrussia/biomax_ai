import { motion } from "motion/react";

const media = [
  { name: "TechCrunch", icon: "💻" },
  { name: "Forbes Russia", icon: "📰" },
  { name: "VC.ru", icon: "🚀" },
  { name: "Биохакинг Конференция", icon: "🎤" },
  { name: "Health Tech Podcast", icon: "🎙️" },
  { name: "Longevity Summit", icon: "🧬" },
];

export function AsSeenIn() {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-sm text-gray-500 mb-6">
        О нас пишут и говорят
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        {media.map((outlet, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2 px-5 py-3 rounded-xl"
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
            <div className="text-2xl">{outlet.icon}</div>
            <div className="text-sm text-gray-400 font-medium">
              {outlet.name}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
