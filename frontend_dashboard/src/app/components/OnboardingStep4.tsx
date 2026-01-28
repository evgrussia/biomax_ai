import { Check, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { ProgressBar } from "@/app/components/ProgressBar";

interface OnboardingStep4Props {
  userData: {
    name: string;
    age: number;
    gender: string;
    goals?: string[];
    devices?: string[];
  };
  onComplete: () => void;
}

// Map goal IDs to display names
const goalNames: Record<string, string> = {
  energy: "Энергия и продуктивность",
  sleep: "Качество сна",
  longevity: "Долголетие и anti-aging",
  cognitive: "Когнитивные функции",
  fitness: "Фитнес и восстановление",
  mental: "Ментальное здоровье",
  nutrition: "Питание и нутрициология",
  biohacking: "Биохакинг и эксперименты",
};

// Map device IDs to display names
const deviceNames: Record<string, string> = {
  oura: "Oura Ring",
  "apple-watch": "Apple Watch",
  whoop: "WHOOP",
  garmin: "Garmin",
  fitbit: "Fitbit",
  xiaomi: "Xiaomi Mi Band",
  dexcom: "Dexcom G7",
  libre: "FreeStyle Libre",
  "no-cgm": "Без CGM",
  invitro: "INVITRO",
  "23andme": "23andMe",
  atlas: "Atlas Biomed",
};

// AI Agents based on goals
const aiAgents = [
  { id: "sleep", emoji: "😴", name: "Sleep Agent", goals: ["sleep"] },
  { id: "energy", emoji: "⚡", name: "Energy Coach", goals: ["energy", "fitness"] },
  { id: "longevity", emoji: "⏳", name: "Longevity Agent", goals: ["longevity"] },
  { id: "cognitive", emoji: "🧠", name: "Cognitive Agent", goals: ["cognitive"] },
  { id: "safety", emoji: "🛡️", name: "Safety Agent", goals: [] },
  { id: "data", emoji: "📊", name: "Data Analyst", goals: [] },
  { id: "nutrition", emoji: "🥗", name: "Nutrition Agent", goals: ["nutrition"] },
  { id: "mental", emoji: "🧘", name: "Mental Coach", goals: ["mental"] },
  { id: "biohack", emoji: "🔬", name: "Biohack Agent", goals: ["biohacking"] },
];

export function OnboardingStep4({ userData, onComplete }: OnboardingStep4Props) {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Hide confetti after 3 seconds
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Get active agents based on user goals
  const getActiveAgents = () => {
    const userGoals = userData.goals || [];
    const activeAgents = aiAgents.filter((agent) => {
      if (agent.goals.length === 0) return true; // Always active agents
      return agent.goals.some((goal) => userGoals.includes(goal));
    });
    return activeAgents.slice(0, 6); // Limit to 6 agents
  };

  const activeAgents = getActiveAgents();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0F1E] via-[#0F1425] to-[#1A1F2E] px-4 py-12">
      {/* Background particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-cyan-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Confetti Animation */}
      {showConfetti && (
        <div className="pointer-events-none absolute inset-0 z-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: "-10px",
                animation: `confetti ${2 + Math.random() * 2}s ease-out forwards`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            >
              <div
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: [
                    "#00D4FF",
                    "#00FF94",
                    "#8B5CF6",
                    "#F59E0B",
                  ][Math.floor(Math.random() * 4)],
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-2xl">
        <div className="glass-card border-2 border-white/10 p-8 shadow-[0_0_50px_rgba(0,212,255,0.1)] md:p-12">
          {/* Progress Bar */}
          <ProgressBar currentStep={4} totalSteps={4} />

          {/* Celebration Icon */}
          <div className="mb-6 flex justify-center">
            <div className="animate-bounce text-6xl">🎉</div>
          </div>

          {/* Header */}
          <h2 className="mb-2 text-center text-2xl font-bold text-white">
            Отлично, {userData.name}! Всё готово
          </h2>

          <p className="mb-8 text-center text-white/60">
            Мы подготовили персонализированный дашборд специально для вас.
          </p>

          {/* Profile Summary */}
          <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-xl">📊</span>
              <h3 className="font-semibold text-white">Ваш профиль демо:</h3>
            </div>

            <div className="space-y-4">
              {/* Name & Age */}
              <div className="flex items-center gap-2">
                <span className="text-lg">👤</span>
                <span className="text-white/80">
                  Имя: <span className="font-medium text-white">{userData.name}</span>,{" "}
                  {userData.age} лет
                </span>
              </div>

              {/* Goals */}
              {userData.goals && userData.goals.length > 0 && (
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-lg">🎯</span>
                    <span className="font-medium text-white/80">Фокус:</span>
                  </div>
                  <div className="ml-7 space-y-1">
                    {userData.goals.map((goalId) => (
                      <div key={goalId} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
                        <span className="text-sm text-white/70">
                          {goalNames[goalId] || goalId}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Devices */}
              {userData.devices && userData.devices.length > 0 && (
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-lg">📱</span>
                    <span className="font-medium text-white/80">Устройства:</span>
                  </div>
                  <div className="ml-7 space-y-1">
                    {userData.devices.map((deviceId) => (
                      <div key={deviceId} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#00FF94]" />
                        <span className="text-sm text-white/70">
                          {deviceNames[deviceId] || deviceId}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* AI Agents */}
          <div className="mb-8 rounded-xl border border-[#8B5CF6]/20 bg-gradient-to-r from-[#8B5CF6]/10 to-[#00D4FF]/10 p-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-xl">🤖</span>
              <h3 className="font-semibold text-white">
                Для вас активированы AI-агенты:
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {activeAgents.map((agent) => (
                <div
                  key={agent.id}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-sm"
                >
                  <span className="text-lg">{agent.emoji}</span>
                  <span className="text-sm font-medium text-white/80">
                    {agent.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onComplete}
            className="group relative mb-6 w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#00D4FF] via-[#00FF94] to-[#8B5CF6] p-4 font-semibold text-white shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)]"
          >
            <div className="absolute inset-0 bg-white/0 transition-all group-hover:bg-white/10" />
            <div className="relative flex items-center justify-center gap-2">
              <span className="text-lg">🚀</span>
              <span>Перейти в личный кабинет</span>
            </div>
          </button>

          {/* Demo Reminder */}
          <div className="rounded-xl border border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-4">
            <div className="flex items-start gap-3">
              <span className="text-xl">⚠️</span>
              <div className="text-sm text-white/70">
                <p className="font-medium text-yellow-400">
                  Напоминание: это демо-режим с моковыми данными.
                </p>
                <p className="mt-1">Полный функционал — с апреля 2026!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
