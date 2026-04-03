import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-32">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20"
        src="/videos/hero-bg.mp4"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-background/80" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 60% 50% at 50% 40%, hsl(224 76% 48% / 0.15), transparent),
            linear-gradient(hsl(var(--color-border)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--color-border)) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 48px 48px, 48px 48px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-foreground mb-6 animate-fade-in">
            <Shield className="w-4 h-4 text-primary" />
            ESS Secure Copilot Academy
          </div>

          <h1
            className="font-extrabold tracking-tight text-foreground mb-4 animate-fade-in font-display"
            style={{ fontSize: "clamp(2rem, 7vw, 3.5rem)", animationDelay: "0.1s" }}
          >
            Copilot Governance &amp; Responsible AI{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">for Regulated Industries</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/80 mb-6 animate-fade-in font-display" style={{ animationDelay: "0.15s" }}>
            Buying Copilot is easy. Getting ROI isn't.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            The ESS Secure Copilot Academy is a structured, Microsoft MVP‑led advisory and training program for healthcare, financial services, and other regulated enterprises — so you can deploy Copilot with governance, drive adoption, and prove ROI to your board.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="cta" size="xl" className="group w-full sm:w-auto" asChild>
              <a href="https://outlook.office365.com/book/ESSCopilotAdoptionConsultation@enterprise-software-solutions.com" target="_blank" rel="noopener noreferrer">
                Book a Copilot Readiness Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#pricing">
                View Programs & Pricing
              </a>
            </Button>
          </div>

          {/* AI Video Avatar */}
          <div className="max-w-2xl mx-auto mb-12 animate-fade-in rounded-xl overflow-hidden shadow-lg border border-border" style={{ animationDelay: "0.35s" }}>
            <video
              className="w-full"
              controls
              preload="metadata"
              poster=""
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="text-sm text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.37s" }}>
            No obligation · 30-minute strategic session focused on your Copilot risks and opportunities
          </p>

          {/* Outcome Stats Bar — stacks on mobile */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 font-display">
              What ESS Copilot Academy clients are seeing in 30–90 days
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="bg-card p-5 sm:p-6 rounded-lg border border-border card-glow transition-all duration-200">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-2xl sm:text-3xl font-bold text-primary font-display">20→85%</span>
                </div>
                <div className="text-sm text-muted-foreground">Active Copilot users in 30 days</div>
              </div>
              <div className="bg-card p-5 sm:p-6 rounded-lg border border-border card-glow transition-all duration-200">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                  <span className="text-2xl sm:text-3xl font-bold text-secondary font-display">35%</span>
                </div>
                <div className="text-sm text-muted-foreground">Average productivity lift among effective Copilot users</div>
              </div>
              <div className="bg-card p-5 sm:p-6 rounded-lg border border-border card-glow transition-all duration-200">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-secondary" />
                  <span className="text-2xl sm:text-3xl font-bold text-secondary font-display">353%</span>
                </div>
                <div className="text-sm text-muted-foreground">Projected 3‑year ROI on Copilot investment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
