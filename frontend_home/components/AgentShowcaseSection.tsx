import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { AgentCard } from "./AgentCard";
import { AgentConnections } from "./AgentConnections";

const agents = [
  {
    id: 1,
    emoji: "🎯",
    name: "Orchestrator Agent",
    description: "Координирует всех агентов, маршрутизирует запросы",
    color: "#8B5CF6",
  },
  {
    id: 2,
    emoji: "🏆",
    name: "Coach Agent",
    description: "Мотивация, привычки, ежедневные планы действий. Что делать сегодня?",
    color: "#00D4FF",
  },
  {
    id: 3,
    emoji: "😴",
    name: "Sleep Agent",
    description: "Архитектура сна, циркадные ритмы, HRV во сне",
    integration: "Oura Ring",
    color: "#6366F1",
  },
  {
    id: 4,
    emoji: "🥗",
    name: "Nutrition Agent",
    description: "Нутригеномика, макро/микронутриенты, персональные диеты",
    integration: "MyFitnessPal",
    color: "#00FF94",
  },
  {
    id: 5,
    emoji: "🧬",
    name: "Genomics Agent",
    description: "ДНК-анализ, SNP интерпретация, MTHFR/APOE/COMT",
    integration: "23andMe",
    color: "#EC4899",
  },
  {
    id: 6,
    emoji: "🔬",
    name: "Lab Interpreter Agent",
    description: "Анализы крови простым языком, оптимальные vs референсные значения",
    integration: "INVITRO",
    color: "#EF4444",
  },
  {
    id: 7,
    emoji: "⏳",
    name: "Longevity Agent",
    description: "Биологический возраст, эпигенетика, протоколы долголетия. GrimAge, DunedinPACE",
    color: "#F59E0B",
  },
  {
    id: 8,
    emoji: "🛡️",
    name: "Safety Agent",
    description: "Контрпоказания, взаимодействия лекарств, red flags",
    integration: "DrugBank integration",
    color: "#F97316",
  },
  {
    id: 9,
    emoji: "📊",
    name: "Data Scientist Agent",
    description: "Паттерны, корреляции, N=1 эксперименты. Bayesian analysis",
    color: "#3B82F6",
  },
  {
    id: 10,
    emoji: "📚",
    name: "Research Agent",
    description: "Поиск в PubMed, systematic reviews, evidence levels. Ссылки на исследования",
    color: "#14B8A6",
  },
  {
    id: 11,
    emoji: "🏋️",
    name: "Fitness Agent",
    description: "Тренировки, восстановление, strain/recovery",
    integration: "Strava",
    color: "#84CC16",
  },
  {
    id: 12,
    emoji: "🧘",
    name: "Mental Health Agent",
    description: "Стресс, тревожность, mood tracking, CBT. PHQ-9, GAD-7 surveys",
    color: "#FB7185",
  },
  {
    id: 13,
    emoji: "🧠",
    name: "Cognitive Agent",
    description: "Ноотропы, нейрофидбэк, когнитивные функции. C-Score tracking",
    color: "#A78BFA",
  },
  {
    id: 14,
    emoji: "📝",
    name: "Custom Protocol Agent",
    description: "Ваши протоколы в Custom RAG. Bryan Johnson, Huberman, Attia",
    color: "#34D399",
  },
  {
    id: 15,
    emoji: "🔄",
    name: "Integration Agent",
    description: "Синтез данных из всех источников. Health Score calculation",
    color: "#38BDF8",
  },
];

export function AgentShowcaseSection() {
  const [hoveredAgent, setHoveredAgent] = useState<number | null>(null);
  const [gridPositions, setGridPositions] = useState<{ [key: number]: { x: number; y: number } }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate grid positions for connection lines
  useEffect(() => {
    if (!containerRef.current) return;

    const updatePositions = () => {
      const container = containerRef.current;
      if (!container) return;

      const cards = container.querySelectorAll('[data-agent-id]');
      const positions: { [key: number]: { x: number; y: number } } = {};

      cards.forEach((card) => {
        const id = parseInt(card.getAttribute('data-agent-id') || '0');
        const rect = card.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        positions[id] = {
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        };
      });

      setGridPositions(positions);
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);
    
    // Update after animation completes
    setTimeout(updatePositions, 1000);

    return () => window.removeEventListener('resize', updatePositions);
  }, []);

  // Define connections (Orchestrator to all, and some cross-connections)
  const getConnections = () => {
    if (hoveredAgent === null) return [];

    const connections = [];
    const orchestratorId = 1;

    if (hoveredAgent === orchestratorId) {
      // Show all connections from Orchestrator
      for (let i = 2; i <= 15; i++) {
        connections.push({
          from: orchestratorId,
          to: i,
          color: agents[i - 1].color,
        });
      }
    } else {
      // Show connection to Orchestrator
      connections.push({
        from: orchestratorId,
        to: hoveredAgent,
        color: agents[hoveredAgent - 1].color,
      });

      // Show some logical cross-connections based on agent type
      const crossConnections: { [key: number]: number[] } = {
        3: [2, 7, 12], // Sleep -> Coach, Longevity, Mental Health
        4: [5, 9, 11], // Nutrition -> Genomics, Data Scientist, Fitness
        5: [4, 6, 7], // Genomics -> Nutrition, Lab, Longevity
        6: [7, 8, 9], // Lab -> Longevity, Safety, Data Scientist
        7: [3, 5, 6], // Longevity -> Sleep, Genomics, Lab
        11: [4, 9, 12], // Fitness -> Nutrition, Data Scientist, Mental Health
        12: [3, 11, 13], // Mental Health -> Sleep, Fitness, Cognitive
        13: [3, 9, 12], // Cognitive -> Sleep, Data Scientist, Mental Health
      };

      if (crossConnections[hoveredAgent]) {
        crossConnections[hoveredAgent].forEach((targetId) => {
          connections.push({
            from: hoveredAgent,
            to: targetId,
            color: agents[hoveredAgent - 1].color,
          });
        });
      }
    }

    return connections;
  };

  const connections = getConnections();
  const connectedAgentIds = new Set([
    hoveredAgent,
    ...connections.map(c => c.from),
    ...connections.map(c => c.to),
  ]);

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: agents[Math.floor(Math.random() * agents.length)].color,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
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
              background: "rgba(139, 92, 246, 0.1)",
              border: "1px solid rgba(139, 92, 246, 0.5)",
            }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-[#8B5CF6]"
              animate={{
                boxShadow: ["0 0 5px #8B5CF6", "0 0 15px #8B5CF6", "0 0 5px #8B5CF6"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-[#8B5CF6]">Мультиагентная система</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#00D4FF] to-[#00FF94] bg-clip-text text-transparent">
              15 AI-экспертов
            </span>
            <br />
            <span className="text-gray-200">работают на вас</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Каждый агент — специалист в своей области.{" "}
            <span className="text-[#00D4FF]">Вместе они видят полную картину</span> вашего здоровья
          </p>

          {/* Interaction hint */}
          <motion.div
            className="mt-6 text-sm text-gray-400"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✨ Наведите на агента, чтобы увидеть его связи
          </motion.div>
        </motion.div>

        {/* Agents Grid with Connections */}
        <div ref={containerRef} className="relative">
          {/* Connection lines layer */}
          <AgentConnections connections={connections} gridPositions={gridPositions} />

          {/* Agents grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4" style={{ zIndex: 1 }}>
            {agents.map((agent) => (
              <div key={agent.id} data-agent-id={agent.id}>
                <AgentCard
                  {...agent}
                  onHover={setHoveredAgent}
                  isConnected={connectedAgentIds.has(agent.id)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Quote section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="max-w-4xl mx-auto rounded-3xl p-10"
            style={{
              background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(0, 212, 255, 0.1))",
              border: "1px solid rgba(139, 92, 246, 0.3)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="text-6xl mb-6 opacity-50">"</div>
            <p className="text-2xl md:text-3xl font-semibold text-gray-200 leading-relaxed mb-4">
              Как команда из{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#00D4FF] bg-clip-text text-transparent">
                15 врачей-специалистов
              </span>
              , которая знает всю вашу историю и работает{" "}
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#00FF94] bg-clip-text text-transparent">
                24/7
              </span>
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
              <span className="text-sm">BIOMAX AI Philosophy</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
