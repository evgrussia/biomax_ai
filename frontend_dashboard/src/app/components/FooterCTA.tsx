import { useState } from "react";
import { Send, Mail, Check } from "lucide-react";

interface FooterCTAProps {
  onSubscribe?: (email: string) => void;
}

export function FooterCTA({ onSubscribe }: FooterCTAProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      if (onSubscribe) {
        onSubscribe(email);
      }
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 5000);
    }
  };

  return (
    <div className="mt-16">
      {/* Divider */}
      <div className="mb-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* CTA Section */}
      <div className="mb-12 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="text-4xl">🚀</span>
          <h2 className="text-3xl font-bold text-white">
            Хотите использовать BIOMAX AI первыми?
          </h2>
        </div>
        <p className="text-lg text-white/70">
          Запуск платформы: <span className="font-semibold text-[#00D4FF]">Апрель 2026</span>
        </p>
      </div>

      {/* Email Capture Card */}
      <div className="mx-auto mb-12 max-w-3xl">
        <div className="glass-card border-2 border-[#00D4FF]/30 bg-gradient-to-br from-[#00D4FF]/10 to-[#8B5CF6]/10 p-8">
          {/* Benefits */}
          <div className="mb-6 flex items-start gap-2">
            <Mail className="mt-1 h-6 w-6 shrink-0 text-[#00D4FF]" />
            <div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                Оставьте email и получите:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#00FF94]" />
                  <span className="text-white/90">
                    Ранний доступ к бета-версии (март 2026)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#00FF94]" />
                  <span className="text-white/90">
                    50% скидку на первые 3 месяца
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#00FF94]" />
                  <span className="text-white/90">
                    Эксклюзивные материалы по биохакингу
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Email Form */}
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ваш email..."
                  required
                  className="flex-1 rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-white placeholder-white/40 backdrop-blur-sm transition-all focus:border-[#00D4FF]/50 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/20"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,212,255,0.5)]"
                >
                  <span className="text-lg">🚀</span>
                  <span>Хочу в списке!</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="mb-4 rounded-xl border border-[#00FF94]/30 bg-[#00FF94]/10 p-4">
              <div className="flex items-center justify-center gap-3 text-[#00FF94]">
                <Check className="h-6 w-6" />
                <span className="font-semibold">
                  Спасибо! Проверьте вашу почту для подтверждения.
                </span>
              </div>
            </div>
          )}

          {/* Telegram Link */}
          <div className="text-center">
            <p className="text-sm text-white/60">
              Или подпишитесь на Telegram:{" "}
              <a
                href="https://t.me/biomax_ai_news"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#00D4FF] transition-colors hover:text-[#00FF94]"
              >
                @biomax_ai_news
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mb-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Footer */}
      <div className="text-center">
        {/* Copyright & Compliance */}
        <div className="mb-4 flex flex-wrap items-center justify-center gap-3 text-sm text-white/50">
          <span>© 2026 BIOMAX AI</span>
          <span className="text-white/30">•</span>
          <span className="flex items-center gap-1">
            <span className="text-base">🇷🇺</span>
            <span>Сделано в России</span>
          </span>
          <span className="text-white/30">•</span>
          <span className="rounded bg-white/10 px-2 py-0.5 text-xs font-medium">
            152-ФЗ Compliant
          </span>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-white/60 transition-colors hover:text-[#00D4FF]"
          >
            Политика конфиденциальности
          </a>
          <span className="text-white/30">•</span>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-white/60 transition-colors hover:text-[#00D4FF]"
          >
            Условия использования
          </a>
          <span className="text-white/30">•</span>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-white/60 transition-colors hover:text-[#00D4FF]"
          >
            Контакты
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-xs text-white/40">
          <p>
            BIOMAX AI не заменяет медицинскую консультацию. Проконсультируйтесь
            с врачом перед началом любых протоколов.
          </p>
          <p className="mt-1">
            Персональные данные обрабатываются в соответствии с 152-ФЗ "О
            персональных данных"
          </p>
        </div>
      </div>
    </div>
  );
}
