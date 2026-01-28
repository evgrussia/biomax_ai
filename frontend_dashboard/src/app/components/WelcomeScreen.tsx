import { Activity, Check, Mail, Sparkles } from "lucide-react";
import { useState } from "react";

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEmailSubmitted(true);
      // In real app, would send to backend
      setTimeout(() => setEmailSubmitted(false), 3000);
    }
  };

  const checklist = [
    { text: "Заполните профиль — 2 минуты", icon: "profile" },
    { text: "Посмотрите персонализированный дашборд", icon: "dashboard" },
    { text: "Познакомьтесь с 15 AI-агентами", icon: "ai" },
    { text: "Исследуйте функционал системы", icon: "explore" },
  ];

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A0F1E] via-[#0F1425] to-[#1A1F2E] px-4">
      {/* Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="neural-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="1.5" fill="#00D4FF" opacity="0.3">
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="50" cy="30" r="1.5" fill="#00FF94" opacity="0.3">
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="80" cy="60" r="1.5" fill="#8B5CF6" opacity="0.3">
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <line
                x1="10"
                y1="10"
                x2="50"
                y2="30"
                stroke="#00D4FF"
                strokeWidth="0.5"
                opacity="0.2"
              />
              <line
                x1="50"
                y1="30"
                x2="80"
                y2="60"
                stroke="#00FF94"
                strokeWidth="0.5"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-pattern)" />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
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

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-2xl">
        <div className="glass-card overflow-hidden border-2 border-white/10 p-12 shadow-[0_0_50px_rgba(0,212,255,0.1)]">
          {/* Animated Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] opacity-30 blur-xl" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00D4FF] via-[#00FF94] to-[#8B5CF6] shadow-lg">
                <Activity className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>

          {/* Logo Text */}
          <div className="mb-2 text-center">
            <h1 className="bg-gradient-to-r from-[#00D4FF] via-[#00FF94] to-[#8B5CF6] bg-clip-text text-2xl font-bold text-transparent">
              BIOMAX AI
            </h1>
          </div>

          {/* Main Heading */}
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="text-2xl">🎯</span>
            <h2 className="text-2xl font-bold text-white">
              Добро пожаловать в демо-режим
            </h2>
          </div>

          {/* Description */}
          <p className="mb-8 text-center text-white/70 leading-relaxed">
            Познакомьтесь с вашей будущей операционной системой здоровья.
            Пройдите короткий онбординг, и мы покажем, как BIOMAX AI будет
            работать именно для вас.
          </p>

          {/* Checklist */}
          <div className="mb-8 rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
            <div className="space-y-4">
              {checklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 transition-all hover:translate-x-1"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#00D4FF] to-[#00FF94]">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onStart}
            className="group relative mb-8 w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#00D4FF] via-[#00FF94] to-[#8B5CF6] p-4 font-semibold text-white shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,212,255,0.5)]"
          >
            <div className="absolute inset-0 bg-white/0 transition-all group-hover:bg-white/10" />
            <div className="relative flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5" />
              <span>🚀 Начать знакомство</span>
            </div>
          </button>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
          </div>

          {/* Demo Warning */}
          <div className="mb-6 rounded-xl border border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">⚠️</span>
              <span className="font-semibold text-yellow-400">ДЕМО-РЕЖИМ</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Данные не сохраняются. Полный функционал будет доступен после
              запуска в апреле 2026.
            </p>
          </div>

          {/* Email Subscription */}
          <div className="rounded-xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm">
            <div className="mb-3 flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#00D4FF]" />
              <span className="text-sm text-white/80">
                📩 Хотите узнать о запуске первыми?
              </span>
            </div>
            <form onSubmit={handleEmailSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#00D4FF]/50 focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/20"
              />
              <button
                type="submit"
                disabled={!email || emailSubmitted}
                className="rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#00FF94] px-6 py-2 text-sm font-semibold text-white transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              >
                {emailSubmitted ? "✓ Готово" : "Отправить"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
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
      `}</style>
    </div>
  );
}
