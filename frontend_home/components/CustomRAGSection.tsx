import { motion } from "motion/react";
import { DocumentIcon } from "./DocumentIcon";
import { RAGPipeline } from "./RAGPipeline";
import { AIChatBubble } from "./AIChatBubble";
import { FeatureCard } from "./FeatureCard";
import { ProtocolCard } from "./ProtocolCard";
import { Quote } from "lucide-react";

const protocols = [
  { name: "Blueprint by Bryan Johnson", position: { x: 5, y: 15 } },
  { name: "Huberman Lab Protocols", position: { x: 75, y: 20 } },
  { name: "Dr. Attia Longevity Playbook", position: { x: 10, y: 65 } },
  { name: "David Sinclair Research", position: { x: 70, y: 70 } },
  { name: "Rhonda Patrick Supplements", position: { x: 40, y: 10 } },
  { name: "+ Ваши собственные", position: { x: 45, y: 80 } },
];

export function CustomRAGSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background neural network effect */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => {
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            const x2 = Math.random() * 100;
            const y2 = Math.random() * 100;
            return (
              <motion.line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="#00D4FF"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2, delay: i * 0.1 }}
              />
            );
          })}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
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
            <span className="text-sm text-[#00D4FF]">Custom RAG</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#00FF94] bg-clip-text text-transparent">
              Ваши протоколы —
            </span>
            <br />
            <span className="text-gray-200">ваш AI</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Загрузите любые протоколы, исследования, методики —{" "}
            <span className="text-[#00D4FF]">AI будет использовать их</span> для персонализированных рекомендаций
          </p>
        </motion.div>

        {/* Main 3D Flow Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Left: Document Upload */}
          <div className="space-y-4">
            <motion.h3
              className="text-xl font-semibold text-gray-200 mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Загрузите документы
            </motion.h3>
            <DocumentIcon type="pdf" title="Bryan Johnson Blueprint" delay={0.1} />
            <DocumentIcon type="pdf" title="Peter Attia - Longevity" delay={0.2} />
            <DocumentIcon type="md" title="My Morning Protocol" delay={0.3} />
            <DocumentIcon type="research" title="PubMed research" delay={0.4} />
          </div>

          {/* Center: RAG Pipeline */}
          <div className="flex items-center">
            <RAGPipeline />
          </div>

          {/* Right: AI Chat Output */}
          <div className="flex items-center">
            <div className="w-full">
              <motion.h3
                className="text-xl font-semibold text-gray-200 mb-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Персонализированный ответ
              </motion.h3>
              <AIChatBubble />
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <FeatureCard
            icon="✨📄"
            title="Загружайте PDF, MD, TXT — до 50GB на Longevity Elite"
            delay={0.1}
          />
          <FeatureCard
            icon="🤖💬"
            title="AI отвечает на основе ВАШИХ документов"
            delay={0.2}
          />
          <FeatureCard
            icon="🔗📖"
            title="Источник каждого ответа прозрачен"
            delay={0.3}
          />
        </div>

        {/* Floating Protocol Cards */}
        <div className="relative h-96 mb-20">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div
              className="text-6xl font-bold text-center opacity-5"
              style={{
                background: "linear-gradient(135deg, #00D4FF, #8B5CF6, #00FF94)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PROTOCOLS
            </div>
          </motion.div>

          {protocols.map((protocol, i) => (
            <ProtocolCard
              key={i}
              name={protocol.name}
              position={protocol.position}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="rounded-3xl p-10 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(139, 92, 246, 0.1))",
              border: "1px solid rgba(0, 212, 255, 0.3)",
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Quote icon */}
            <div className="absolute top-8 left-8 opacity-20">
              <Quote size={60} className="text-[#00D4FF]" />
            </div>

            <div className="relative">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6 italic">
                "Я загрузил протокол Bryan Johnson, и теперь AI даёт мне рекомендации именно под мою генетику и биомаркеры.{" "}
                <span className="text-[#00D4FF] font-semibold">
                  Это как иметь персонального Bryan Johnson в кармане.
                </span>
                "
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                  style={{
                    background: "linear-gradient(135deg, #00D4FF, #8B5CF6)",
                  }}
                >
                  👨‍💼
                </div>
                <div>
                  <div className="font-semibold text-gray-200">Алексей</div>
                  <div className="text-sm text-gray-400">38 лет, IT-предприниматель</div>
                </div>
              </div>
            </div>

            {/* Decorative gradient orbs */}
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-30"
              style={{
                background: "radial-gradient(circle, #00D4FF, transparent)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-3xl opacity-30"
              style={{
                background: "radial-gradient(circle, #8B5CF6, transparent)",
              }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.2, 0.3],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
