import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section
      id="contact"
      className="py-20 relative"
      style={{
        background: 'linear-gradient(135deg, rgba(37,99,235,0.14) 0%, rgba(6,182,212,0.08) 100%)',
        borderTop: '1px solid rgba(37,99,235,0.15)',
        borderBottom: '1px solid rgba(37,99,235,0.15)',
      }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          repeating-linear-gradient(rgba(255,255,255,0.025) 0 1px, transparent 1px 48px),
          repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 48px)
        `,
      }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-display mb-6" style={{ color: 'var(--color-text)' }}>
            Ready to Unlock Copilot Adoption and ROI with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              ESS Copilot Academy
            </span>
            ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
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
