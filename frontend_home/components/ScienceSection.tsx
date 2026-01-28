import { motion } from "motion/react";
import { EvidencePyramid } from "./EvidencePyramid";
import { CitationExample } from "./CitationExample";
import { ResearchStats } from "./ResearchStats";
import { SourceLogos } from "./SourceLogos";
import { AdvisoryBoard } from "./AdvisoryBoard";
import { BookOpen } from "lucide-react";

export function ScienceSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(circle at 50% 30%, rgba(0, 212, 255, 0.3), transparent 70%)",
        }}
      />

      {/* Academic grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(0, 212, 255, 0.1)",
              border: "1px solid rgba(0, 212, 255, 0.5)",
            }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-[#00D4FF]"
              animate={{
                boxShadow: ["0 0 5px #00D4FF", "0 0 15px #00D4FF", "0 0 5px #00D4FF"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-[#00D4FF]">Научная база</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#00FF94] bg-clip-text text-transparent">
              Наука в основе
            </span>
            <br />
            <span className="text-gray-200">каждой рекомендации</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            <span className="text-[#00D4FF]">Research Agent</span> ищет в{" "}
            <span className="text-[#8B5CF6]">PubMed</span>, каждый совет со ссылкой на{" "}
            <span className="text-[#00FF94]">исследование</span>
          </p>
        </motion.div>

        {/* Evidence Pyramid */}
        <div className="mb-20">
          <motion.h3
            className="text-2xl font-bold text-center mb-12 text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Уровни доказательности
          </motion.h3>
          <EvidencePyramid />
        </div>

        {/* Citation Example */}
        <div className="mb-20">
          <motion.h3
            className="text-2xl font-bold text-center mb-12 text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Пример цитирования
          </motion.h3>
          <CitationExample />
        </div>

        {/* Research Stats */}
        <div className="mb-20">
          <ResearchStats />
        </div>

        {/* Source Logos */}
        <div className="mb-20">
          <motion.h3
            className="text-2xl font-bold text-center mb-12 text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Источники данных
          </motion.h3>
          <SourceLogos />
        </div>

        {/* Advisory Board */}
        <div className="mb-16">
          <AdvisoryBoard />
        </div>

        {/* Research Commitment */}
        <motion.div
          className="rounded-3xl p-10 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(139, 92, 246, 0.15))",
            border: "2px solid rgba(0, 212, 255, 0.4)",
            backdropFilter: "blur(12px)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
            style={{
              background: "rgba(0, 212, 255, 0.2)",
              border: "2px solid rgba(0, 212, 255, 0.6)",
            }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(0, 212, 255, 0.4)",
                "0 0 40px rgba(0, 212, 255, 0.6)",
                "0 0 20px rgba(0, 212, 255, 0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <BookOpen size={40} className="text-[#00D4FF]" />
          </motion.div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-200">
            Наше обязательство перед наукой
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
            Каждая рекомендация BIOMAX основана на опубликованных исследованиях.
            Мы не используем псевдонауку, не преувеличиваем эффекты и всегда указываем
            уровень доказательности. Если данных недостаточно — мы говорим об этом честно.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00FF94]" />
              <span className="text-gray-400">Evidence-based recommendations</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-700" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              <span className="text-gray-400">Transparent limitations</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-700" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
              <span className="text-gray-400">Continuous updates</span>
            </div>
          </div>
        </motion.div>

        {/* Additional link */}
        <motion.div
          className="text-center mt-12 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p>
            Хотите узнать больше о нашей методологии?{" "}
            <a href="#" className="text-[#00D4FF] hover:underline">
              Читать Research Methodology Whitepaper
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
