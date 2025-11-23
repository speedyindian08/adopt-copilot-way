import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";

import { ProgramOverview } from "@/components/ProgramOverview";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { ContactForm } from "@/components/ContactForm";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
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
        <FAQSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
