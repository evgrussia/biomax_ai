'use client';

import { motion } from 'framer-motion';
import { Database, Layout, MessageSquare, Mic, Zap, Cpu, Server, Shield } from 'lucide-react';

const techStack = [
  { category: 'Backend', items: ['FastAPI', 'Kong', 'LangGraph', 'CrewAI', 'LlamaIndex', 'Qdrant'], icon: Server },
  { category: 'Frontend', items: ['Flutter', 'Next.js', 'Tailwind', 'aiogram', 'Whisper'], icon: Layout },
  { category: 'Databases', items: ['PostgreSQL', 'ClickHouse', 'Qdrant', 'Neo4j', 'Redis'], icon: Database },
  { category: 'LLMs', items: ['GPT-4o', 'Claude 3.5', 'GigaChat', 'YandexGPT', 'BioMistral'], icon: Cpu },
];

export default function TechStack() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
          Cutting-Edge Tech Stack
        </h2>
        <p className="text-gray-400 text-lg">
          Built with the latest in AI orchestration, vector databases, and secure infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-glass p-8 rounded-3xl border border-white/5"
            >
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6">
                <Icon className="text-indigo-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{tech.category}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.items.map(item => (
                  <span key={item} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
