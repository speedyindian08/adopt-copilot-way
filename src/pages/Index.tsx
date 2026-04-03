import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ConsultationValueSection } from "@/components/ConsultationValueSection";
import { ROICalculatorSection } from "@/components/ROICalculatorSection";
import { AcademyOverviewSection } from "@/components/AcademyOverviewSection";
import { PricingSection } from "@/components/PricingSection";
import { TrustSection } from "@/components/TrustSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { ScrollReveal } from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0d12]">
      <Header />
      <main>
        <HeroSection />
        <ScrollReveal>
          <ProblemSection />
        </ScrollReveal>
        <ScrollReveal>
          <ConsultationValueSection />
        </ScrollReveal>
        <ScrollReveal>
          <ROICalculatorSection />
        </ScrollReveal>
        <ScrollReveal>
          <AcademyOverviewSection />
        </ScrollReveal>
        <ScrollReveal>
          <PricingSection />
        </ScrollReveal>
        <ScrollReveal>
          <TrustSection />
        </ScrollReveal>
        <ScrollReveal>
          <SocialProofSection />
        </ScrollReveal>
        <ScrollReveal>
          <FinalCTASection />
        </ScrollReveal>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
