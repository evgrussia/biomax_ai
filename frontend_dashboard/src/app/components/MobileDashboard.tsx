import { useState } from "react";
import { Menu, X, Send, User, TrendingUp } from "lucide-react";

interface MobileDashboardProps {
  userData: {
    name: string;
    age: number;
    gender: string;
    goals?: string[];
    devices?: string[];
  } | null;
  onOpenModal: (variant: string) => void;
  onOpenMetricDetail: () => void;
}

export function MobileDashboard({ userData, onOpenModal, onOpenMetricDetail }: MobileDashboardProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Доброе утро";
    if (hour < 18) return "Добрый день";
    return "Добрый вечер";
  };

  const userName = userData?.name || "Алексей";

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0A0F1E] via-[#0F1425] to-[#1A1F2E] pb-32">
      {/* Mobile Header */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-[#0A0F1E]/95 px-4 py-3 backdrop-blur-lg">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
          >
            {showMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          <div className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] bg-clip-text text-lg font-bold text-transparent">
              BIOMAX AI
            </span>
          </div>

          <button
            onClick={() => onOpenModal("default")}
            className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] text-white"
          >
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Burger Menu Overlay */}
      {showMenu && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={() => setShowMenu(false)}>
          <div
            className="h-full w-4/5 max-w-sm bg-gradient-to-br from-[#0A0F1E] via-[#0F1425] to-[#1A1F2E] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Меню</h2>
            <button 
              onClick={() => setShowMenu(false)} 
              className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center text-white/60 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            </div>

            <nav className="space-y-1">
              {[
                { id: "dashboard", icon: "📊", label: "Дашборд" },
                { id: "ai-agents", icon: "🤖", label: "AI-агенты" },
                { id: "metrics", icon: "📈", label: "Метрики" },
                { id: "biohacker", icon: "🧪", label: "Biohacker Lab" },
                { id: "settings", icon: "⚙️", label: "Настройки" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onOpenModal("default");
                    setShowMenu(false);
                  }}
                  className="flex w-full min-h-[44px] items-center gap-3 rounded-lg px-4 py-3 text-white/70 transition-all hover:bg-white/10 hover:text-white"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Demo Banner */}
      {showBanner && (
        <div className="mx-4 mt-4 overflow-hidden rounded-xl border border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">⚠️</span>
              <div>
                <div className="text-sm font-semibold text-white">ДЕМО</div>
                <div className="text-xs text-white/70">Апрель 2026</div>
              </div>
            </div>
            <button
              onClick={() => setShowBanner(false)}
              className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-white/60 hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="px-4 pt-6 overflow-x-hidden">
        {/* Greeting */}
        <div className="mb-6">
          <div className="mb-1 flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white break-words">{getGreeting()}, {userName}!</h1>
            <span className="text-2xl shrink-0">👋</span>
          </div>
          <p className="text-sm text-white/60 break-words">Ваш персональный Health Score</p>
        </div>

        {/* Health Score Card */}
        <div
          onClick={() => onOpenMetricDetail()}
          className="mb-6 glass-card cursor-pointer overflow-hidden border-2 border-[#00FF94]/30 bg-gradient-to-br from-[#00FF94]/10 to-[#00D4FF]/10 p-6 transition-all active:scale-95"
        >
          <div className="text-center">
            <div className="mb-2 text-6xl font-bold text-white">87</div>
            <div className="mb-1 text-2xl text-white/60">/100</div>
            <div className="mb-3 text-lg font-semibold text-white">Health Score</div>
            <div className="mb-4 flex items-center justify-center gap-2 text-[#00FF94]">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">↑ +5 за месяц</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg border border-[#00D4FF]/30 bg-[#00D4FF]/10 px-4 py-2 text-sm font-medium text-[#00D4FF]">
              <span>Подробнее</span>
              <span>→</span>
            </div>
          </div>
        </div>

        {/* AI Insight */}
        <div className="mb-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/70">
            AI-инсайт
          </h2>
          <div
            onClick={() => onOpenModal("ai-chat")}
            className="glass-card cursor-pointer border border-white/10 bg-gradient-to-br from-[#8B5CF6]/10 to-[#00D4FF]/10 p-4 transition-all active:scale-95"
          >
            <p className="mb-3 leading-relaxed text-white/90">
              "HRV улучшился на 12% за неделю. Продолжайте текущий режим сна!"
            </p>
            <div className="text-sm text-white/60">— Sleep Agent</div>
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/70">
            Метрики
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div
              onClick={() => onOpenMetricDetail()}
              className="glass-card cursor-pointer border border-white/10 p-4 transition-all active:scale-95"
            >
              <div className="mb-2 text-2xl">😴</div>
              <div className="mb-1 text-xs text-white/60">Сон</div>
              <div className="flex items-baseline gap-1">
                <div className="text-lg font-bold text-white">7.2h</div>
                <div className="text-xs text-[#00FF94]">↑</div>
              </div>
            </div>

            <div
              onClick={() => onOpenMetricDetail()}
              className="glass-card cursor-pointer border border-white/10 p-4 transition-all active:scale-95"
            >
              <div className="mb-2 text-2xl">❤️</div>
              <div className="mb-1 text-xs text-white/60">HRV</div>
              <div className="flex items-baseline gap-1">
                <div className="text-lg font-bold text-white">52ms</div>
                <div className="text-xs text-[#00FF94]">↑</div>
              </div>
            </div>

            <div
              onClick={() => onOpenMetricDetail()}
              className="glass-card cursor-pointer border border-white/10 p-4 transition-all active:scale-95"
            >
              <div className="mb-2 text-2xl">🔥</div>
              <div className="mb-1 text-xs text-white/60">Активность</div>
              <div className="flex items-baseline gap-1">
                <div className="text-lg font-bold text-white">8,450</div>
              </div>
            </div>

            <div
              onClick={() => onOpenMetricDetail()}
              className="glass-card cursor-pointer border border-white/10 p-4 transition-all active:scale-95"
            >
              <div className="mb-2 text-2xl">🧬</div>
              <div className="mb-1 text-xs text-white/60">Bio Age</div>
              <div className="flex items-baseline gap-1">
                <div className="text-lg font-bold text-[#00FF94]">-2.7</div>
                <div className="text-xs text-white/60">лет</div>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Tasks */}
        <div className="mb-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/70">
            Сегодня
          </h2>
          <div className="space-y-2">
            <div
              onClick={() => onOpenModal("default")}
              className="glass-card flex cursor-pointer items-center justify-between border border-white/10 p-3 transition-all active:scale-95"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">1️⃣</span>
                <div>
                  <div className="text-sm font-medium text-white">Прогулка 15м</div>
                </div>
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded bg-[#00FF94]/20 text-[#00FF94]">
                ✓
              </div>
            </div>

            <div
              onClick={() => onOpenModal("default")}
              className="glass-card flex cursor-pointer items-center justify-between border border-white/10 p-3 transition-all active:scale-95"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">2️⃣</span>
                <div>
                  <div className="text-sm font-medium text-white">Магний 21:00</div>
                </div>
              </div>
              <div className="text-lg">⏰</div>
            </div>

            <div
              onClick={() => onOpenModal("default")}
              className="glass-card flex cursor-pointer items-center justify-between border border-white/10 p-3 transition-all active:scale-95"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">3️⃣</span>
                <div>
                  <div className="text-sm font-medium text-white">Zone 2 кардио</div>
                </div>
              </div>
              <div className="text-white/60">→</div>
            </div>
          </div>
        </div>

        {/* AI Input */}
        <div className="mb-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/70">
            💬 Спросить AI
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Введите вопрос..."
              onClick={() => onOpenModal("ai-chat")}
              readOnly
              className="w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-12 text-white placeholder-white/40 backdrop-blur-sm"
            />
            <button
              onClick={() => onOpenModal("ai-chat")}
              className="absolute right-2 top-1/2 flex h-11 w-11 min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#00FF94]"
            >
              <Send className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-[#0A0F1E]/95 backdrop-blur-lg safe-area-inset-bottom">
        <div className="grid grid-cols-5">
          <button
            onClick={() => {
              setActiveTab("dashboard");
              onOpenModal("default");
            }}
            className={`flex flex-col items-center gap-1 min-h-[44px] justify-center py-2 px-1 transition-colors ${
              activeTab === "dashboard" ? "text-[#00D4FF]" : "text-white/60"
            }`}
          >
            <span className="text-xl">📊</span>
            <span className="text-[10px] sm:text-xs font-medium truncate w-full text-center">Dashboard</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("agents");
              onOpenModal("ai-chat");
            }}
            className={`flex flex-col items-center gap-1 min-h-[44px] justify-center py-2 px-1 transition-colors ${
              activeTab === "agents" ? "text-[#00D4FF]" : "text-white/60"
            }`}
          >
            <span className="text-xl">🤖</span>
            <span className="text-[10px] sm:text-xs font-medium truncate w-full text-center">Agents</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("supplements");
              onOpenModal("default");
            }}
            className={`flex flex-col items-center gap-1 min-h-[44px] justify-center py-2 px-1 transition-colors ${
              activeTab === "supplements" ? "text-[#00D4FF]" : "text-white/60"
            }`}
          >
            <span className="text-xl">💊</span>
            <span className="text-[10px] sm:text-xs font-medium truncate w-full text-center">Suppl</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("lab");
              onOpenModal("biohacker");
            }}
            className={`flex flex-col items-center gap-1 min-h-[44px] justify-center py-2 px-1 transition-colors ${
              activeTab === "lab" ? "text-[#00D4FF]" : "text-white/60"
            }`}
          >
            <span className="text-xl">🧪</span>
            <span className="text-[10px] sm:text-xs font-medium truncate w-full text-center">Lab</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("settings");
              onOpenModal("default");
            }}
            className={`flex flex-col items-center gap-1 min-h-[44px] justify-center py-2 px-1 transition-colors ${
              activeTab === "settings" ? "text-[#00D4FF]" : "text-white/60"
            }`}
          >
            <span className="text-xl">⚙️</span>
            <span className="text-[10px] sm:text-xs font-medium truncate w-full text-center">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}