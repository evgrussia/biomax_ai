import { motion } from "motion/react";
import { ExperimentCard } from "./ExperimentCard";
import { WorkflowStep } from "./WorkflowStep";
import { CompletedExperiment } from "./CompletedExperiment";
import { MethodologyCard } from "./MethodologyCard";

const workflowSteps = [
  {
    icon: "📝",
    title: "Design",
    description: "Сформулируйте гипотезу и выберите метрики",
  },
  {
    icon: "📊",
    title: "Baseline",
    description: "2 недели сбора данных до интервенции",
  },
  {
    icon: "⚡",
    title: "Intervention",
    description: "4+ недели тестирования с tracking compliance",
  },
  {
    icon: "📈",
    title: "Analysis",
    description: "Bayesian A/B, Causal Impact, статистическая значимость",
  },
];

const methodologies = [
  {
    title: "Bayesian Analysis",
    description: "Учитываем prior knowledge из научных исследований и предыдущих экспериментов",
    icon: "🎲",
    color: "#00D4FF",
  },
  {
    title: "Causal Impact",
    description: "Отделяем реальный эффект от временных трендов и внешних факторов",
    icon: "🎯",
    color: "#8B5CF6",
  },
  {
    title: "Confounding Detection",
    description: "Автоматически находим скрытые корреляции и потенциальные искажения",
    icon: "🔍",
    color: "#00FF94",
  },
];

export function BiohackerLabSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background test tubes pattern */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${(i % 4) * 25 + 10}%`,
              top: `${Math.floor(i / 4) * 33}%`,
              fontSize: "60px",
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            🧪
          </motion.div>
        ))}
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
            <span className="text-sm text-[#00D4FF]">Biohacker Lab</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#00FF94] bg-clip-text text-transparent">
              Научный подход
            </span>
            <br />
            <span className="text-gray-200">к N=1</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Проводите <span className="text-[#00D4FF]">статистически корректные</span> эксперименты над собой.{" "}
            <span className="text-[#00FF94]">ML анализирует результаты</span> и определяет, что реально работает
          </p>
        </motion.div>

        {/* Active Experiment Example */}
        <div className="mb-20">
          <motion.h3
            className="text-2xl font-bold text-center mb-8 text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Активный эксперимент
          </motion.h3>
          <ExperimentCard />
        </div>

        {/* Workflow Steps */}
        <div className="mb-20">
          <motion.h3
            className="text-2xl font-bold text-center mb-12 text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Workflow экспериментов
          </motion.h3>
          
          <div className="relative">
            {/* Connecting lines */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-px"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.5), transparent)",
              }}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {workflowSteps.map((step, i) => (
                <WorkflowStep
                  key={i}
                  step={i + 1}
                  {...step}
                  delay={i * 0.15}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Completed Experiment Example */}
        <div className="mb-20">
          <motion.h3
            className="text-2xl font-bold text-center mb-8 text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Пример завершённого эксперимента
          </motion.h3>
          <CompletedExperiment />
        </div>

        {/* Methodology Cards */}
        <div className="mb-20">
          <motion.h3
            className="text-2xl font-bold text-center mb-12 text-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Статистическая методология
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methodologies.map((method, i) => (
              <MethodologyCard
                key={i}
                {...method}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Social Proof Stats */}
        <motion.div
          className="rounded-3xl p-10"
          style={{
            background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(139, 92, 246, 0.1))",
            border: "1px solid rgba(0, 212, 255, 0.3)",
            backdropFilter: "blur(12px)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <motion.div
                className="text-5xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                2,500+
              </motion.div>
              <div className="text-sm text-gray-400">экспериментов проведено</div>
            </div>

            <div>
              <motion.div
                className="text-5xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#00FF94] bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                67%
              </motion.div>
              <div className="text-sm text-gray-400">показали значимый эффект</div>
            </div>

            <div>
              <motion.div
                className="text-5xl font-bold bg-gradient-to-r from-[#00FF94] to-[#00D4FF] bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                6
              </motion.div>
              <div className="text-sm text-gray-400">недель средняя длительность</div>
            </div>
          </div>

          {/* Decorative particles */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#00D4FF]"
              style={{
                left: `${20 + i * 15}%`,
                boxShadow: "0 0 10px #00D4FF",
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
