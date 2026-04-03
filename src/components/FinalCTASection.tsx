import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Blue radial glow */}
      <div className="absolute inset-0 -z-10" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 50%, hsl(224 76% 48% / 0.12), transparent)"
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 font-display">
            Ready to Unlock Copilot Adoption and ROI with ESS Copilot Academy?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            In 30 minutes, we'll map your adoption gaps, highlight quick-win use cases, and outline a 30‑day Copilot adoption plan tailored to your regulated organization.
          </p>
          <Button variant="cta" size="xl" className="group" asChild>
            <a href="https://outlook.office365.com/book/ESSCopilotAdoptionConsultation@yourorg.com" target="_blank" rel="noopener noreferrer">
              Book a Copilot Readiness Session
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
