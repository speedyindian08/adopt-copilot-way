import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";
import { TrustedByIndustryLeaders } from "@/components/TrustedByIndustryLeaders";
import { ProgramOverview } from "@/components/ProgramOverview";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <TrustedByIndustryLeaders />
        <section id="overview">
          <ProgramOverview />
        </section>
        <section id="benefits">
          <BenefitsSection />
        </section>
        <TestimonialsSection />
        <section id="pricing">
          <PricingSection />
        </section>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
