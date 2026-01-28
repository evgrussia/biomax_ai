import { X, Mail, Send, Check } from "lucide-react";
import { useState } from "react";

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  variant?: "ai-chat" | "metrics" | "devices" | "biohacker" | "default";
}

const modalContent = {
  "ai-chat": {
    icon: "🤖",
    title: "AI-агенты скоро будут отвечать!",
    description:
      "В полной версии 15 AI-агентов будут анализировать ваши данные 24/7 и давать персонализированные рекомендации на основе вашей уникальной биологии.",
  },
  metrics: {
    icon: "📊",
    title: "Детальная аналитика уже скоро",
    description:
      "Вы сможете видеть тренды, корреляции и получать глубокие инсайты о взаимосвязях между метриками вашего здоровья.",
  },
  devices: {
    icon: "📱",
    title: "Интеграции появятся в апреле 2026",
    description:
      "100+ интеграций: Oura, Apple Watch, Garmin, CGM-устройства, лаборатории, генетические тесты и многое другое.",
  },
  biohacker: {
    icon: "🔬",
    title: "N=1 эксперименты — скоро!",
    description:
      "Вы сможете проводить научные эксперименты над собой с контролем переменных и статистическим анализом результатов.",
  },
  default: {
    icon: "🚧",
    title: "Полный функционал в разработке",
    description:
      "Вы сейчас находитесь в демо-режиме, который показывает, как будет выглядеть ваш персональный дашборд здоровья.",
  },
};

const features = [
  "Подключить реальные устройства",
  "Получать AI-рекомендации",
  "Загружать свои протоколы",
  "Проводить N=1 эксперименты",
  "Видеть реальный Health Score",
];

export function FeatureModal({
  isOpen,
  onClose,
  variant = "default",
}: FeatureModalProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  const content = modalContent[variant];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      // In real app, send to backend
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="glass-card relative z-10 w-full max-w-lg border-2 border-white/10 p-8 shadow-[0_0_50px_rgba(0,212,255,0.2)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-all hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Icon */}
        <div className="mb-4 flex justify-center">
          <div className="text-6xl">{content.icon}</div>
        </div>

        {/* Title */}
        <h2 className="mb-4 text-center text-2xl font-bold text-white">
          {content.title}
        </h2>

        {/* Divider */}
        <div className="mb-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Thank You Message */}
        <p className="mb-4 text-center text-white/80">
          Спасибо за интерес к BIOMAX AI! 💚
        </p>

        {/* Description */}
        <p className="mb-6 text-center text-sm text-white/70">
          {content.description}
        </p>

        {/* Features Box */}
        <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          {/* Launch Date */}
          <div className="mb-4 flex items-center gap-2 text-white/90">
            <span className="text-xl">📅</span>
            <span className="font-semibold">Старт проекта: Апрель 2026</span>
          </div>

          {/* Features List */}
          <p className="mb-3 text-sm font-medium text-white/70">
            В полной версии вы сможете:
          </p>
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00FF94]/20">
                  <Check className="h-3 w-3 text-[#00FF94]" strokeWidth={3} />
                </div>
                <span className="text-sm text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Email Subscription */}
        <div className="mb-6">
          <p className="mb-3 text-center text-sm font-medium text-white/80 break-words px-2">
            🔔 Хотите узнать о запуске первыми?
          </p>

          {subscribed ? (
            <div className="rounded-xl border border-[#00FF94]/30 bg-[#00FF94]/10 p-4">
              <div className="flex items-center justify-center gap-2 text-[#00FF94]">
                <Check className="h-5 w-5 shrink-0" strokeWidth={3} />
                <span className="font-medium break-words">Спасибо! Мы свяжемся с вами.</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1 min-w-0">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Введите ваш email..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/40 backdrop-blur-sm transition-all focus:border-[#00D4FF]/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/20"
                  required
                />
              </div>
              <button
                type="submit"
                className="shrink-0 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#00FF94] px-4 sm:px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] whitespace-nowrap"
              >
                <Send className="h-4 w-4" />
                <span className="hidden sm:inline">Подписаться</span>
                <span className="sm:hidden">Отправить</span>
              </button>
            </form>
          )}
        </div>

        {/* Telegram Channel */}
        <div className="mb-6 text-center">
          <p className="mb-2 text-sm text-white/70">
            Или подпишитесь на Telegram-канал:
          </p>
          <a
            href="https://t.me/biomax_ai_news"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#00D4FF]/30 bg-[#00D4FF]/10 px-4 py-2 text-sm font-medium text-[#00D4FF] transition-all hover:bg-[#00D4FF]/20"
          >
            <span className="text-lg">📱</span>
            <span>@biomax_ai_news</span>
          </a>
        </div>

        {/* Divider */}
        <div className="mb-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
          >
            Продолжить исследовать демо
          </button>
          <button
            onClick={() => window.location.reload()}
            className="flex-1 rounded-xl border border-white/20 bg-white/10 py-3 text-sm font-medium text-white transition-all hover:bg-white/20"
          >
            На главную
          </button>
        </div>
      </div>
    </div>
  );
}
