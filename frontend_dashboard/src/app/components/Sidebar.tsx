import {
  Activity,
  Brain,
  Heart,
  Home,
  Pill,
  Settings,
  TrendingUp,
  Users,
  Beaker,
  FileText,
  BookOpen,
  BarChart3,
} from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
  onOpenModal?: (variant: "ai-chat" | "metrics" | "devices" | "biohacker" | "default") => void;
}

const menuItems = [
  { id: "dashboard", icon: Home, label: "Дашборд", emoji: "📊" },
  { id: "ai-agents", icon: Brain, label: "AI-агенты", emoji: "🤖" },
  { id: "metrics", icon: BarChart3, label: "Метрики", emoji: "📈" },
  { id: "supplements", icon: Pill, label: "Добавки", emoji: "💊" },
  { id: "biohacker", icon: Beaker, label: "Biohacker Lab", emoji: "🧪" },
  { id: "protocols", icon: FileText, label: "Мои протоколы", emoji: "📚" },
  { id: "research", icon: BookOpen, label: "Исследования", emoji: "🔬" },
  { id: "reports", icon: TrendingUp, label: "Отчёты", emoji: "📋" },
];

export function Sidebar({ currentView, onViewChange, onOpenModal }: SidebarProps) {
  const handleMenuClick = (itemId: string) => {
    if (itemId === "dashboard" || itemId === "ai-agents" || itemId === "biohacker") {
      onViewChange(itemId);
    } else if (itemId === "metrics" && onOpenModal) {
      onOpenModal("metrics");
    } else if (onOpenModal) {
      onOpenModal("default");
    }
  };

  return (
    <div className="fixed left-0 top-0 hidden h-screen w-60 border-r border-white/5 bg-[#0A0F1E] p-6 md:block md:w-52 lg:w-60">
      {/* Logo */}
      <div className="mb-12">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] shadow-lg shadow-[#00D4FF]/20">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">BIOMAX AI</h1>
            <p className="text-xs text-white/50">Health Dashboard</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mb-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Navigation */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className={`group relative flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                isActive
                  ? "bg-gradient-to-r from-[#00D4FF]/20 to-[#8B5CF6]/20 text-white"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-0 h-full w-1 rounded-r-full bg-gradient-to-b from-[#00D4FF] to-[#8B5CF6]" />
              )}
              <span className="text-lg">{item.emoji}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Divider */}
      <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* User Profile */}
      <div className="absolute bottom-20 left-6 right-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#00D4FF] to-[#00FF94]">
              <span className="text-lg">👤</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">Алексей</p>
              <p className="text-xs text-white/50">Демо-профиль</p>
            </div>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="absolute bottom-6 left-6 right-6">
        <button 
          onClick={() => onOpenModal?.("default")}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-white/60 transition-all hover:bg-white/5 hover:text-white">
          <Settings className="h-5 w-5" />
          <span className="text-sm font-medium">Настройки</span>
        </button>
      </div>
    </div>
  );
}