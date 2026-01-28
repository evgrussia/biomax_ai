import { ArrowLeft, Check } from "lucide-react";
import { useState } from "react";
import { ProgressBar } from "@/app/components/ProgressBar";

interface OnboardingStep2Props {
  onNext: (goals: string[]) => void;
  onBack: () => void;
}

interface Goal {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

const goals: Goal[] = [
  {
    id: "energy",
    emoji: "💪",
    title: "Энергия и продуктивность",
    description: "Повысить уровень энергии",
  },
  {
    id: "sleep",
    emoji: "😴",
    title: "Качество сна",
    description: "Улучшить восстановление",
  },
  {
    id: "longevity",
    emoji: "⏳",
    title: "Долголетие и anti-aging",
    description: "Замедлить старение",
  },
  {
    id: "cognitive",
    emoji: "🧠",
    title: "Когнитивные функции",
    description: "Улучшить память и фокус",
  },
  {
    id: "fitness",
    emoji: "🏋️",
    title: "Фитнес и восстановление",
    description: "Оптимизировать тренировки",
  },
  {
    id: "mental",
    emoji: "🧘",
    title: "Ментальное здоровье",
    description: "Снизить стресс",
  },
  {
    id: "nutrition",
    emoji: "🥗",
    title: "Питание и нутрициология",
    description: "Персонализировать диету",
  },
  {
    id: "biohacking",
    emoji: "🔬",
    title: "Биохакинг и эксперименты",
    description: "Продвинутая оптимизация",
  },
];

export function OnboardingStep2({ onNext, onBack }: OnboardingStep2Props) {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const MAX_SELECTIONS = 3;

  const toggleGoal = (goalId: string) => {
    if (selectedGoals.includes(goalId)) {
      setSelectedGoals(selectedGoals.filter((id) => id !== goalId));
    } else {
      if (selectedGoals.length < MAX_SELECTIONS) {
        setSelectedGoals([...selectedGoals, goalId]);
      }
    }
  };

  const handleNext = () => {
    if (selectedGoals.length > 0) {
      onNext(selectedGoals);
    }
  };

  const isFormValid = selectedGoals.length > 0 && selectedGoals.length <= MAX_SELECTIONS;

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
      <div className="relative z-10 w-full max-w-4xl">
        <div className="glass-card border-2 border-white/10 p-8 shadow-[0_0_50px_rgba(0,212,255,0.1)] md:p-12">
          {/* Progress Bar */}
          <ProgressBar currentStep={2} totalSteps={4} />

          {/* Header */}
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="text-3xl">🎯</span>
            <h2 className="text-2xl font-bold text-white">
              Какие цели вас интересуют?
            </h2>
          </div>

          <p className="mb-8 text-center text-white/60">
            Выберите 1-3 направления, которые для вас важны. Это поможет показать
            релевантные AI-агенты.
          </p>

          {/* Goals Grid */}
          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
            {goals.map((goal) => {
              const isSelected = selectedGoals.includes(goal.id);
              const isDisabled =
                !isSelected && selectedGoals.length >= MAX_SELECTIONS;

              return (
                <button
                  key={goal.id}
                  type="button"
                  onClick={() => toggleGoal(goal.id)}
                  disabled={isDisabled}
                  className={`group relative overflow-hidden rounded-xl border-2 p-6 text-left transition-all ${
                    isSelected
                      ? "border-[#00D4FF] bg-[#00D4FF]/10 shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                      : isDisabled
                      ? "border-white/5 bg-white/5 opacity-40"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                  } ${!isDisabled && "hover:scale-[1.02]"}`}
                >
                  {/* Selected Checkmark */}
                  {isSelected && (
                    <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#00D4FF]">
                      <Check className="h-4 w-4 text-white" strokeWidth={3} />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/5 text-3xl">
                      {goal.emoji}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`mb-1 font-semibold ${
                          isSelected ? "text-[#00D4FF]" : "text-white"
                        }`}
                      >
                        {goal.title}
                      </h3>
                      <p className="text-sm text-white/50">{goal.description}</p>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  {!isDisabled && (
                    <div
                      className={`absolute inset-0 opacity-0 transition-opacity ${
                        isSelected
                          ? "bg-gradient-to-br from-[#00D4FF]/5 to-transparent"
                          : "group-hover:opacity-100 bg-gradient-to-br from-white/5 to-transparent"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Selection Counter */}
          <div className="mb-8 flex items-center justify-center">
            <div className="rounded-full border border-white/10 bg-white/5 px-6 py-2">
              <span className="text-sm text-white/60">
                Выбрано:{" "}
                <span
                  className={`font-semibold ${
                    selectedGoals.length > 0 ? "text-[#00D4FF]" : "text-white/40"
                  }`}
                >
                  {selectedGoals.length}
                </span>
                <span className="text-white/40">/{MAX_SELECTIONS}</span>
              </span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white/80 transition-all hover:bg-white/10"
            >
              <ArrowLeft className="h-5 w-5" />
              Назад
            </button>

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
