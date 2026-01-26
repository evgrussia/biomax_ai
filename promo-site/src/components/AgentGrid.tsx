'use client';

import { motion } from 'framer-motion';
import { AGENTS } from '@/lib/constants';
import { Cpu, Activity, Moon, Utensils, Zap, Microscope, ShieldCheck, Database, Dna, Search, Smile, Dumbbell, Merge, FileText, Brain } from 'lucide-react';

const icons: Record<string, any> = {
  Orchestrator: Cpu,
  Coach: Activity,
  Sleep: Moon,
  Nutrition: Utensils,
  Longevity: Zap,
  'Lab Interpreter': Microscope,
  Safety: ShieldCheck,
  'Data Scientist': Database,
  Genomics: Dna,
  Research: Search,
  'Mental Health': Smile,
  Fitness: Dumbbell,
  Integration: Merge,
  'Custom Protocol': FileText,
  Cognitive: Brain,
};

export default function AgentGrid() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          15 Specialized AI Agents
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A multi-agent ecosystem designed to analyze every aspect of your health and provide actionable insights.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {AGENTS.map((agent, index) => {
          const Icon = icons[agent.name] || Cpu;
          return (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-glass p-6 rounded-2xl hover:border-cyan-500/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon className="text-cyan-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-white">{agent.name}</h3>
              <p className="text-xs font-medium text-cyan-400 mb-2 uppercase tracking-wider">{agent.role}</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                {agent.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
