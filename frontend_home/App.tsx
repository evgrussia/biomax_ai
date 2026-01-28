import { HeroSection } from "./components/HeroSection";
import { ProblemSolutionSection } from "./components/ProblemSolutionSection";
import { AgentShowcaseSection } from "./components/AgentShowcaseSection";
import { CustomRAGSection } from "./components/CustomRAGSection";
import { EcosystemSection } from "./components/EcosystemSection";
import { MobileExperienceSection } from "./components/MobileExperienceSection";
import { OnboardingSection } from "./components/OnboardingSection";
import { BiologicalAgeSection } from "./components/BiologicalAgeSection";
import { HealthScoreSection } from "./components/HealthScoreSection";
import { BiohackerLabSection } from "./components/BiohackerLabSection";
import { PersonasSection } from "./components/PersonasSection";
import { ScienceSection } from "./components/ScienceSection";
import { ComparisonSection } from "./components/ComparisonSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { PricingSection } from "./components/PricingSection";
import { SecuritySection } from "./components/SecuritySection";
import { FAQSection } from "./components/FAQSection";
import { PartnersSection } from "./components/PartnersSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSolutionSection />
      <AgentShowcaseSection />
      <CustomRAGSection />
      <EcosystemSection />
      <MobileExperienceSection />
      <OnboardingSection />
      <BiologicalAgeSection />
      <HealthScoreSection />
      <BiohackerLabSection />
      <PersonasSection />
      <ScienceSection />
      <ComparisonSection />
      <TestimonialsSection />
      <PricingSection />
      <SecuritySection />
      <FAQSection />
      <PartnersSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}