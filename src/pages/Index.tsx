import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import { ProgramOverview } from "@/components/ProgramOverview";
import { BenefitsSection } from "@/components/BenefitsSection";
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
        <PartnersCarousel />
        <section id="overview">
          <ProgramOverview />
        </section>
        <section id="benefits">
          <BenefitsSection />
        </section>
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
