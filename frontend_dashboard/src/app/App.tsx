import { useState, useEffect } from "react";
import {
  Activity,
  Brain,
  Droplets,
  Heart,
  Scale,
  TrendingDown,
  TrendingUp,
  Wind,
} from "lucide-react";
import { Sidebar } from "@/app/components/Sidebar";
import { DemoBanner } from "@/app/components/DemoBanner";
import { MetricCard } from "@/app/components/MetricCard";
import { ActivityChart } from "@/app/components/ActivityChart";
import { AIInsights } from "@/app/components/AIInsights";
import { QuickStats } from "@/app/components/QuickStats";
import { WelcomeScreen } from "@/app/components/WelcomeScreen";
import { OnboardingStep1 } from "@/app/components/OnboardingStep1";
import { OnboardingStep2 } from "@/app/components/OnboardingStep2";
import { OnboardingStep3 } from "@/app/components/OnboardingStep3";
import { OnboardingStep4 } from "@/app/components/OnboardingStep4";
import { HealthScoreCard } from "@/app/components/HealthScoreCard";
import { AIInsightCard } from "@/app/components/AIInsightCard";
import { DetailedMetricCard } from "@/app/components/DetailedMetricCard";
import { AgentsSection } from "@/app/components/AgentsSection";
import { RecommendationsSection } from "@/app/components/RecommendationsSection";
import { FeatureModal } from "@/app/components/FeatureModal";
import { AIAgentsView } from "@/app/components/AIAgentsView";
import { MetricDetailView } from "@/app/components/MetricDetailView";
import { BiohackerLabView } from "@/app/components/BiohackerLabView";
import { MobileDashboard } from "@/app/components/MobileDashboard";
import { FooterCTA } from "@/app/components/FooterCTA";
import { useIsMobile } from "@/app/components/ui/use-mobile";

export default function App() {
  const [currentView, setCurrentView] = useState("dashboard");
  const [showWelcome, setShowWelcome] = useState(true);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [userData, setUserData] = useState<{
    name: string;
    age: number;
    gender: string;
    goals?: string[];
    devices?: string[];
  } | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVariant, setModalVariant] = useState<
    "ai-chat" | "metrics" | "devices" | "biohacker" | "default"
  >("default");

  // Check if mobile device using hook
  const isMobile = useIsMobile();

  // Prevent auto-scroll on view changes and page load
  useEffect(() => {
    // Scroll to top when view changes
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentView, onboardingStep]);

  // Prevent auto-scroll when modal opens
  useEffect(() => {
    if (modalOpen) {
      // Save scroll position before opening modal
      const scrollY = window.scrollY;
      // Scroll to top to prevent mid-page focus
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [modalOpen]);

  const openModal = (variant: typeof modalVariant) => {
    setModalVariant(variant);
    setModalOpen(true);
  };

  const openMetricDetail = () => {
    setCurrentView("metric-detail");
  };

  if (showWelcome) {
    return (
      <WelcomeScreen
        onStart={() => {
          setShowWelcome(false);
          setOnboardingStep(1);
        }}
      />
    );
  }

  if (onboardingStep === 1) {
    return (
      <OnboardingStep1
        onNext={(data) => {
          setUserData(data);
          setOnboardingStep(2);
        }}
      />
    );
  }

  if (onboardingStep === 2) {
    return (
      <OnboardingStep2
        onNext={(goals) => {
          setUserData((prev) => ({ ...prev!, goals }));
          setOnboardingStep(3);
        }}
        onBack={() => setOnboardingStep(1)}
      />
    );
  }

  if (onboardingStep === 3) {
    return (
      <OnboardingStep3
        onNext={(devices) => {
          setUserData((prev) => ({ ...prev!, devices }));
          setOnboardingStep(4);
        }}
        onBack={() => setOnboardingStep(2)}
      />
    );
  }

  if (onboardingStep === 4 && userData) {
    return (
      <OnboardingStep4
        userData={userData}
        onComplete={() => setOnboardingStep(0)}
      />
    );
  }

  // Get greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Доброе утро";
    if (hour < 18) return "Добрый день";
    return "Добрый вечер";
  };

  // Render AI Agents view if selected
  if (currentView === "ai-agents") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0F1E] via-[#0F1425] to-[#1A1F2E]">
        <Sidebar
          currentView={currentView}
          onViewChange={setCurrentView}
          onOpenModal={openModal}
        />
        <AIAgentsView onOpenModal={() => openModal("ai-chat")} />
        <FeatureModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          variant={modalVariant}
        />
      </div>
    );
  }

  // Render Metric Detail view if selected
  if (currentView === "metric-detail") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0F1E] via-[#0F1425] to-[#1A1F2E]">
        <Sidebar
          currentView="dashboard"
          onViewChange={setCurrentView}
          onOpenModal={openModal}
        />
        <MetricDetailView
          onBack={() => setCurrentView("dashboard")}
          onOpenModal={() => openModal("metrics")}
        />
        <FeatureModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          variant={modalVariant}
        />
      </div>
    );
  }

  // Render Biohacker Lab view if selected
  if (currentView === "biohacker") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0F1E] via-[#0F1425] to-[#1A1F2E]">
        <Sidebar
          currentView={currentView}
          onViewChange={setCurrentView}
          onOpenModal={openModal}
        />
        <BiohackerLabView onOpenModal={() => openModal("biohacker")} />
        <FeatureModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          variant={modalVariant}
        />
      </div>
    );
  }

  // Render Mobile Dashboard if on mobile device
  if (isMobile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0F1E] via-[#0F1425] to-[#1A1F2E]">
        <MobileDashboard
          userData={userData}
          onOpenModal={openModal}
          onOpenMetricDetail={openMetricDetail}
        />
        <FeatureModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          variant={modalVariant}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F1E] via-[#0F1425] to-[#1A1F2E]">
      <Sidebar
        currentView={currentView}
        onViewChange={setCurrentView}
        onOpenModal={openModal}
      />
      
      <div className="ml-0 p-4 md:ml-52 md:p-6 lg:ml-60 lg:p-8">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <h2 className="text-3xl font-bold text-white">
                {getGreeting()}, {userData?.name || "Алексей"}!
              </h2>
              <span className="text-2xl">👋</span>
            </div>
            <p className="text-white/60">
              Вот ваш персональный Health Score сегодня
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-white/60">
              <span className="text-lg">📅</span>
              <span className="text-sm">
                {new Date().toLocaleDateString("ru-RU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Demo Banner */}
        <div className="mb-8">
          <DemoBanner />
        </div>

        {/* Health Score & AI Insight */}
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <HealthScoreCard onOpenModal={() => openModal("metrics")} />
          </div>
          <div>
            <AIInsightCard onOpenModal={() => openModal("ai-chat")} />
          </div>
        </div>

        {/* Key Metrics Section */}
        <div className="mb-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Ключевые метрики
          </h3>
        </div>

        {/* First Row of Metrics */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <DetailedMetricCard
            title="Сон"
            icon="😴"
            mainValue="7.2h"
            change="↑ +0.5h"
            changeType="positive"
            details={[
              { label: "Deep", value: "1h 28m" },
              { label: "REM", value: "2h 10m" },
            ]}
            accentColor="cyan"
            onOpenModal={openMetricDetail}
          />
          <DetailedMetricCard
            title="HRV"
            icon="❤️"
            mainValue="52ms"
            change="↑ +8ms"
            changeType="positive"
            details={[
              { label: "Trend", value: "↗️ Улучш." },
              { label: "Baseline", value: "44ms" },
            ]}
            accentColor="green"
            onOpenModal={() => openModal("metrics")}
          />
          <DetailedMetricCard
            title="Активность"
            icon="🔥"
            mainValue="8,450"
            change="↓ -1,200"
            changeType="negative"
            details={[
              { label: "Zone 2", value: "45 мин" },
              { label: "Kcal", value: "2,340" },
            ]}
            accentColor="cyan"
            onOpenModal={() => openModal("metrics")}
          />
          <DetailedMetricCard
            title="Bio Age"
            icon="🧬"
            mainValue="-2.7"
            change="лет"
            changeType="positive"
            details={[
              { label: "Хрон.", value: "35 лет" },
              { label: "Био.", value: "32.3 лет" },
            ]}
            accentColor="purple"
            onOpenModal={() => openModal("metrics")}
          />
        </div>

        {/* Second Row of Metrics */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <DetailedMetricCard
            title="Глюкоза"
            icon="📊"
            mainValue="89%"
            change="TIR"
            changeType="positive"
            details={[
              { label: "Avg", value: "95 mg/dL" },
              { label: "Spikes", value: "2" },
            ]}
            accentColor="cyan"
            onOpenModal={() => openModal("metrics")}
          />
          <DetailedMetricCard
            title="Cognitive"
            icon="🧠"
            mainValue="85"
            change="Score"
            changeType="positive"
            details={[
              { label: "Focus", value: "82" },
              { label: "Memory", value: "88" },
            ]}
            accentColor="purple"
            onOpenModal={() => openModal("metrics")}
          />
          <DetailedMetricCard
            title="Настроение"
            icon="😊"
            mainValue="7/10"
            change="Energy: 8"
            changeType="positive"
            details={[
              { label: "Стресс", value: "Low" },
              { label: "Мотивация", value: "High" },
            ]}
            accentColor="green"
            onOpenModal={() => openModal("metrics")}
          />
          <DetailedMetricCard
            title="Добавки"
            icon="💊"
            mainValue="8/10"
            change="принято"
            changeType="positive"
            details={[
              { label: "NMN", value: "⏰ Reminder" },
              { label: "Магний", value: "21:00" },
            ]}
            accentColor="cyan"
            onOpenModal={() => openModal("default")}
          />
        </div>

        {/* AI Agents Section */}
        <div className="mb-8">
          <AgentsSection onOpenModal={() => openModal("ai-chat")} />
        </div>

        {/* Recommendations */}
        <div className="mb-8">
          <RecommendationsSection onOpenModal={() => openModal("default")} />
        </div>

        {/* Footer CTA */}
        <FooterCTA onSubscribe={(email) => openModal("default")} />

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-white/30">
          <p>AI Health Dashboard 2026 • Powered by Neural Analytics</p>
          <p className="mt-1">
            Data is encrypted and stored securely • Last sync: Just now
          </p>
        </div>
      </div>

      {/* Feature Modal */}
      <FeatureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        variant={modalVariant}
      />
    </div>
  );
}