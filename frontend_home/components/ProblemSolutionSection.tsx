import { motion } from "motion/react";
import { ProblemCard } from "./ProblemCard";
import { SolutionCard } from "./SolutionCard";
import { DataFlowDiagram } from "./DataFlowDiagram";

export function ProblemSolutionSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 30% 50%, rgba(239, 68, 68, 0.1), transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 70% 50%, rgba(0, 212, 255, 0.1), transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE - PROBLEM */}
          <div className="relative">
            {/* Problem header */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                style={{
                  background: "rgba(239, 68, 68, 0.1)",
                  border: "1px solid rgba(239, 68, 68, 0.3)",
                }}
              >
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-sm text-gray-400">Проблема</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-3">
                Знакомо?
              </h2>
              <p className="text-gray-400">
                Большинство пользователей сталкиваются с этими проблемами
              </p>
            </motion.div>

            {/* Problem cards */}
            <div className="space-y-4">
              <ProblemCard
                title="Данные разбросаны по 7+ приложениям"
                icon={
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gray-600/30 flex items-center justify-center text-xs">
                      O
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-gray-600/30 flex items-center justify-center text-xs">
                      M
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-gray-600/30 flex items-center justify-center text-xs">
                      C
                    </div>
                    <span className="text-gray-500 text-lg">...</span>
                  </div>
                }
                statistic="5+ часов в неделю на ручной анализ"
                delay={0.1}
              />

              <ProblemCard
                title="Рекомендации не персонализированы"
                icon={
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">💊</div>
                    <div className="text-2xl">→</div>
                    <div className="text-3xl">😞</div>
                  </div>
                }
                statistic="83% добавок не работают для вашего генотипа"
                delay={0.2}
              />

              <ProblemCard
                title="Нет научной строгости"
                icon={
                  <div className="flex gap-2">
                    <div className="text-4xl text-red-400/40">❓</div>
                    <div className="text-4xl text-red-400/40">❓</div>
                    <div className="text-4xl text-red-400/40">❓</div>
                  </div>
                }
                statistic="0 ссылок на исследования в типичном приложении"
                delay={0.3}
              />

              <ProblemCard
                title="Невозможно загрузить свои протоколы"
                icon={
                  <div className="text-4xl text-red-400/50">🔒</div>
                }
                statistic="Bryan Johnson, Huberman — без интеграции"
                delay={0.4}
              />
            </div>
          </div>

          {/* GRADIENT DIVIDER (visible on desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <motion.div
              className="h-full w-full"
              style={{
                background: "linear-gradient(to bottom, transparent, #00D4FF 50%, transparent)",
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* RIGHT SIDE - SOLUTION */}
          <div className="relative">
            {/* Solution header */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
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
                <span className="text-sm text-[#00D4FF]">Решение</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#00FF94] bg-clip-text text-transparent mb-3">
                BIOMAX решает это
              </h2>
              <p className="text-gray-300">
                Единая платформа для всех ваших данных о здоровье
              </p>
            </motion.div>

            {/* Data flow visualization */}
            <DataFlowDiagram />

            {/* Solution cards */}
            <div className="space-y-4 mt-10">
              <SolutionCard
                title="100+ интеграций в одном месте"
                color="cyan"
                delay={0.2}
              />
              <SolutionCard
                title="15 AI-агентов персонализируют под вас"
                color="purple"
                delay={0.3}
              />
              <SolutionCard
                title="Каждая рекомендация со ссылкой на PubMed"
                color="green"
                delay={0.4}
              />
            </div>

            {/* Additional highlight */}
            <motion.div
              className="mt-8 p-6 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 255, 148, 0.1))",
                border: "1px solid rgba(0, 212, 255, 0.3)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">✨</div>
                <div>
                  <h4 className="font-semibold text-[#00D4FF] mb-2">
                    Автоматизация вместо ручной работы
                  </h4>
                  <p className="text-sm text-gray-300">
                    Экономьте 5+ часов в неделю. BIOMAX анализирует данные 24/7 и присылает только важные инсайты.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
