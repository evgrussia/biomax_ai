interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        {[...Array(totalSteps)].map((_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const isUpcoming = stepNumber > currentStep;

          return (
            <div key={stepNumber} className="flex flex-1 items-center">
              {/* Circle */}
              <div className="relative flex items-center justify-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${
                    isCompleted
                      ? "border-[#00D4FF] bg-[#00D4FF]"
                      : isCurrent
                      ? "border-[#00D4FF] bg-[#00D4FF]/20"
                      : "border-white/20 bg-transparent"
                  }`}
                >
                  {isCompleted ? (
                    <svg
                      className="h-5 w-5 text-white"
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
                  ) : (
                    <span
                      className={`text-sm font-semibold ${
                        isCurrent ? "text-[#00D4FF]" : "text-white/40"
                      }`}
                    >
                      {stepNumber}
                    </span>
                  )}
                </div>
              </div>

              {/* Line */}
              {index < totalSteps - 1 && (
                <div className="flex-1 px-2">
                  <div
                    className={`h-1 rounded-full transition-all ${
                      isCompleted
                        ? "bg-[#00D4FF]"
                        : "bg-white/10"
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="text-center">
        <p className="text-sm text-white/50">
          Шаг {currentStep} из {totalSteps}
        </p>
      </div>
    </div>
  );
}
