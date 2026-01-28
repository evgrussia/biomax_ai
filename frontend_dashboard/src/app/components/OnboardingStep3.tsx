import { ArrowLeft, Check, Smartphone, Sparkles } from "lucide-react";
import { useState } from "react";
import { ProgressBar } from "@/app/components/ProgressBar";

interface OnboardingStep3Props {
  onNext: (devices: string[]) => void;
  onBack: () => void;
}

interface Device {
  id: string;
  name: string;
  icon: string;
  category: string;
}

const devices: Device[] = [
  // Wearables
  { id: "oura", name: "Oura Ring", icon: "💍", category: "wearable" },
  { id: "apple-watch", name: "Apple Watch", icon: "", category: "wearable" },
  { id: "whoop", name: "WHOOP", icon: "⌚", category: "wearable" },
  { id: "garmin", name: "Garmin", icon: "🏃", category: "wearable" },
  { id: "fitbit", name: "Fitbit", icon: "📊", category: "wearable" },
  { id: "xiaomi", name: "Xiaomi Mi Band", icon: "📱", category: "wearable" },
  
  // CGM
  { id: "dexcom", name: "Dexcom G7", icon: "🔬", category: "cgm" },
  { id: "libre", name: "FreeStyle Libre", icon: "🩸", category: "cgm" },
  { id: "no-cgm", name: "Нет CGM", icon: "📊", category: "cgm" },
  
  // Labs & Genetics
  { id: "invitro", name: "INVITRO", icon: "🧪", category: "lab" },
  { id: "23andme", name: "23andMe", icon: "🧬", category: "lab" },
  { id: "atlas", name: "Atlas Biomed", icon: "🔍", category: "lab" },
];

export function OnboardingStep3({ onNext, onBack }: OnboardingStep3Props) {
  const [selectedDevices, setSelectedDevices] = useState<string[]>([]);

  const toggleDevice = (deviceId: string) => {
    // If selecting "no-cgm", deselect other CGM devices
    if (deviceId === "no-cgm") {
      const cgmDevices = devices
        .filter((d) => d.category === "cgm" && d.id !== "no-cgm")
        .map((d) => d.id);
      const withoutCgm = selectedDevices.filter((id) => !cgmDevices.includes(id));
      
      if (selectedDevices.includes(deviceId)) {
        setSelectedDevices(withoutCgm.filter((id) => id !== deviceId));
      } else {
        setSelectedDevices([...withoutCgm, deviceId]);
      }
    } else if (devices.find((d) => d.id === deviceId)?.category === "cgm") {
      // If selecting a CGM device, deselect "no-cgm"
      const withoutNoCgm = selectedDevices.filter((id) => id !== "no-cgm");
      
      if (selectedDevices.includes(deviceId)) {
        setSelectedDevices(withoutNoCgm.filter((id) => id !== deviceId));
      } else {
        setSelectedDevices([...withoutNoCgm, deviceId]);
      }
    } else {
      // Regular toggle
      if (selectedDevices.includes(deviceId)) {
        setSelectedDevices(selectedDevices.filter((id) => id !== deviceId));
      } else {
        setSelectedDevices([...selectedDevices, deviceId]);
      }
    }
  };

  const handleNext = () => {
    onNext(selectedDevices);
  };

  const getCategoryDevices = (category: string) => {
    return devices.filter((d) => d.category === category);
  };

  const DeviceCard = ({ device }: { device: Device }) => {
    const isSelected = selectedDevices.includes(device.id);

    return (
      <button
        type="button"
        onClick={() => toggleDevice(device.id)}
        className={`group relative overflow-hidden rounded-xl border-2 p-4 text-center transition-all hover:scale-[1.02] ${
          isSelected
            ? "border-[#00D4FF] bg-[#00D4FF]/10 shadow-[0_0_20px_rgba(0,212,255,0.2)]"
            : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
        }`}
      >
        {/* Selected Checkmark */}
        {isSelected && (
          <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#00D4FF]">
            <Check className="h-4 w-4 text-white" strokeWidth={3} />
          </div>
        )}

        {/* Icon */}
        <div className="mb-3 flex justify-center text-4xl">
          {device.icon}
        </div>

        {/* Name */}
        <p
          className={`text-sm font-medium ${
            isSelected ? "text-[#00D4FF]" : "text-white/80"
          }`}
        >
          {device.name}
        </p>

        {/* Hover effect */}
        <div
          className={`absolute inset-0 opacity-0 transition-opacity ${
            isSelected
              ? "bg-gradient-to-br from-[#00D4FF]/5 to-transparent"
              : "group-hover:opacity-100 bg-gradient-to-br from-white/5 to-transparent"
          }`}
        />
      </button>
    );
  };

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
        <div className="glass-card max-h-[90vh] overflow-y-auto border-2 border-white/10 p-8 shadow-[0_0_50px_rgba(0,212,255,0.1)] md:p-12">
          {/* Progress Bar */}
          <ProgressBar currentStep={3} totalSteps={4} />

          {/* Header */}
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="text-3xl">📱</span>
            <h2 className="text-2xl font-bold text-white">
              Какие устройства вы используете?
            </h2>
          </div>

          <p className="mb-8 text-center text-white/60">
            Отметьте устройства, которые у вас есть или планируете использовать.
            Это поможет показать релевантные интеграции в демо.
          </p>

          {/* Wearables Section */}
          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#00FF94]">
              <Smartphone className="h-4 w-4" />
              Носимые устройства
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {getCategoryDevices("wearable").map((device) => (
                <DeviceCard key={device.id} device={device} />
              ))}
            </div>
          </div>

          {/* CGM Section */}
          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#8B5CF6]">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Мониторинг глюкозы (CGM)
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {getCategoryDevices("cgm").map((device) => (
                <DeviceCard key={device.id} device={device} />
              ))}
            </div>
          </div>

          {/* Labs & Genetics Section */}
          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#00D4FF]">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
              Лаборатории и генетика
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {getCategoryDevices("lab").map((device) => (
                <DeviceCard key={device.id} device={device} />
              ))}
            </div>
          </div>

          {/* Info Message */}
          <div className="mb-8 rounded-xl border border-[#00FF94]/20 bg-gradient-to-r from-[#00FF94]/10 to-[#00D4FF]/10 p-4">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#00FF94]" />
              <div className="text-sm text-white/70">
                <p className="font-medium text-white">
                  Не используете устройства? Не проблема!
                </p>
                <p className="mt-1">
                  BIOMAX работает и с ручным вводом данных.
                </p>
              </div>
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
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#00FF94] px-8 py-3 font-semibold text-white shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
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
