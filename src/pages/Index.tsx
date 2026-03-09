import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { IsThisForYouSection } from "@/components/IsThisForYouSection";
import { WhyNoROISection } from "@/components/WhyNoROISection";
import { ConsultationValueSection } from "@/components/ConsultationValueSection";
import { ROICalculatorSection } from "@/components/ROICalculatorSection";
import { PlanToExecutionSection } from "@/components/PlanToExecutionSection";
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
        <IsThisForYouSection />
        <WhyNoROISection />
        <ConsultationValueSection />
        <ROICalculatorSection />
        <PlanToExecutionSection />
        <SocialProofSection />
        <FinalCTASection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
