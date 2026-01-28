import { MessageSquare } from "lucide-react";

const agents = [
  { id: 1, emoji: "🎯", name: "Orchestrator" },
  { id: 2, emoji: "😴", name: "Sleep" },
  { id: 3, emoji: "🥗", name: "Nutrition" },
  { id: 4, emoji: "🧬", name: "Genomics" },
  { id: 5, emoji: "🔬", name: "Lab" },
  { id: 6, emoji: "⏳", name: "Longevity" },
  { id: 7, emoji: "🛡️", name: "Safety" },
  { id: 8, emoji: "📊", name: "Data" },
  { id: 9, emoji: "📚", name: "Research" },
  { id: 10, emoji: "🏋️", name: "Fitness" },
  { id: 11, emoji: "🧘", name: "Mental" },
  { id: 12, emoji: "🧠", name: "Cognitive" },
  { id: 13, emoji: "📝", name: "Protocol" },
  { id: 14, emoji: "🔄", name: "Integration" },
  { id: 15, emoji: "🏆", name: "Coach" },
];

interface AgentsSectionProps {
  onOpenModal?: () => void;
}

export function AgentsSection({ onOpenModal }: AgentsSectionProps) {
  return (
    <div className="glass-card border border-white/10 p-6">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          15 AI-агентов работают на вас
        </h3>
        <div className="flex h-2 w-2 items-center justify-center">
          <span className="absolute h-2 w-2 animate-ping rounded-full bg-[#00FF94] opacity-75" />
          <span className="h-2 w-2 rounded-full bg-[#00FF94]" />
        </div>
      </div>

      {/* Agents Grid */}
      <div className="mb-4 flex flex-wrap gap-2">
        {agents.map((agent) => (
          <button
            key={agent.id}
            onClick={onOpenModal}
            className="group/agent flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/80 transition-all hover:border-[#00D4FF]/50 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]"
          >
            <span className="text-base">{agent.emoji}</span>
            <span className="group-hover/agent:text-white">{agent.name}</span>
          </button>
        ))}
      </div>

      {/* AI Chat Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="💬 Спросить AI-агента..."
          onClick={onOpenModal}
          readOnly
          className="w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-3 pl-10 text-sm text-white placeholder-white/40 backdrop-blur-sm transition-all focus:border-[#00D4FF]/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/20"
        />
        <MessageSquare className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
      </div>
    </div>
  );
}