import { ChevronDown, Info, User } from "lucide-react";
import { useState } from "react";
import { ProgressBar } from "@/app/components/ProgressBar";

interface OnboardingStep1Props {
  onNext: (data: { name: string; age: number; gender: string }) => void;
}

export function OnboardingStep1({ onNext }: OnboardingStep1Props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | null>(null);
  const [gender, setGender] = useState<string>("");
  const [showAgeDropdown, setShowAgeDropdown] = useState(false);

  const ages = Array.from({ length: 63 }, (_, i) => i + 18); // 18-80

  const handleNext = () => {
    if (name && age && gender) {
      onNext({ name, age, gender });
    }
  };

  const isFormValid = name.trim() !== "" && age !== null && gender !== "";

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

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-2xl">
        <div className="glass-card border-2 border-white/10 p-8 shadow-[0_0_50px_rgba(0,212,255,0.1)] md:p-12">
          {/* Progress Bar */}
          <ProgressBar currentStep={1} totalSteps={4} />

          {/* Header */}
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="text-3xl">👤</span>
            <h2 className="text-2xl font-bold text-white">
              Давайте познакомимся
            </h2>
          </div>

          <p className="mb-8 text-center text-white/60">
            Чтобы показать персонализированный дашборд, расскажите немного о себе.
          </p>

          {/* Form */}
          <div className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                Как вас зовут?
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Введите имя..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 backdrop-blur-sm transition-all focus:border-[#00D4FF]/50 focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/20"
                />
                <User className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/30" />
              </div>
            </div>

            {/* Age Dropdown */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                Сколько вам лет?
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowAgeDropdown(!showAgeDropdown)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-white backdrop-blur-sm transition-all hover:border-white/20 focus:border-[#00D4FF]/50 focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/20"
                >
                  {age ? `${age} лет` : "Выберите возраст..."}
                  <ChevronDown
                    className={`absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60 transition-transform ${
                      showAgeDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {showAgeDropdown && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowAgeDropdown(false)}
                    />
                    <div className="absolute z-20 mt-2 max-h-60 w-full overflow-y-auto rounded-xl border border-white/10 bg-[#1A1F2E]/95 shadow-xl backdrop-blur-xl">
                      {ages.map((ageOption) => (
                        <button
                          key={ageOption}
                          type="button"
                          onClick={() => {
                            setAge(ageOption);
                            setShowAgeDropdown(false);
                          }}
                          className={`w-full px-4 py-2 text-left transition-colors ${
                            age === ageOption
                              ? "bg-[#00D4FF]/20 text-[#00D4FF]"
                              : "text-white/80 hover:bg-white/5"
                          }`}
                        >
                          {ageOption} лет
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Gender Selection */}
            <div>
              <label className="mb-3 block text-sm font-medium text-white/80">
                Ваш пол:
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setGender("male")}
                  className={`group relative overflow-hidden rounded-xl border-2 p-6 transition-all hover:scale-[1.02] ${
                    gender === "male"
                      ? "border-[#00D4FF] bg-[#00D4FF]/10"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                >
                  {gender === "male" && (
                    <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#00D4FF]">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                  <div className="mb-2 flex justify-center text-4xl">🙍‍♂️</div>
                  <p
                    className={`text-center font-medium ${
                      gender === "male" ? "text-[#00D4FF]" : "text-white/80"
                    }`}
                  >
                    Мужской
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setGender("female")}
                  className={`group relative overflow-hidden rounded-xl border-2 p-6 transition-all hover:scale-[1.02] ${
                    gender === "female"
                      ? "border-[#00D4FF] bg-[#00D4FF]/10"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                >
                  {gender === "female" && (
                    <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#00D4FF]">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                  <div className="mb-2 flex justify-center text-4xl">🙍‍♀️</div>
                  <p
                    className={`text-center font-medium ${
                      gender === "female" ? "text-[#00D4FF]" : "text-white/80"
                    }`}
                  >
                    Женский
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* Info Notice */}
          <div className="mt-8 rounded-xl border border-[#00D4FF]/20 bg-[#00D4FF]/5 p-4">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#00D4FF]" />
              <div className="text-sm text-white/70">
                <p>Эти данные нужны для персонализации демо.</p>
                <p className="mt-1">В демо-режиме данные не сохраняются.</p>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleNext}
              disabled={!isFormValid}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#00FF94] px-8 py-3 font-semibold text-white shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] disabled:opacity-50 disabled:hover:scale-100"
            >
              <div className="absolute inset-0 bg-white/0 transition-all group-hover:bg-white/10" />
              <span className="relative flex items-center gap-2">
                Далее
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
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
