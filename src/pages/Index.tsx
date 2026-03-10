import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ConsultationValueSection } from "@/components/ConsultationValueSection";
import { ROICalculatorSection } from "@/components/ROICalculatorSection";
import { AcademyOverviewSection } from "@/components/AcademyOverviewSection";
import { TrustSection } from "@/components/TrustSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ConsultationValueSection />
        <ROICalculatorSection />
        <AcademyOverviewSection />
        <TrustSection />
        <SocialProofSection />
        <FinalCTASection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
