import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background pt-20 pb-24 lg:pt-32 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-foreground mb-6 animate-fade-in">
            <Shield className="w-4 h-4 text-primary" />
            ESS Secure Copilot Academy
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Copilot Governance &amp; Responsible AI{" "}
            <span className="text-primary">for Regulated Industries</span>
          </h1>

          <p className="text-2xl sm:text-3xl font-semibold text-foreground/80 mb-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            Buying Copilot is easy. Getting ROI isn't.
          </p>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            The ESS Secure Copilot Academy is a structured, Microsoft MVP‑led advisory and training program for healthcare, financial services, and other regulated enterprises — so you can deploy Copilot with governance, drive adoption, and prove ROI to your board.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="cta" size="xl" className="group" asChild>
              <a href="#contact">
                Book a Copilot Readiness Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#pricing">
                View Copilot Academy Programs & Pricing
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

          {/* Outcome Stats Bar */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              What ESS Copilot Academy clients are seeing in 30–90 days
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-card p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-3xl font-bold text-primary">20→85%</span>
                </div>
                <div className="text-sm text-muted-foreground">Active Copilot users in 30 days</div>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                  <span className="text-3xl font-bold text-secondary">35%</span>
                </div>
                <div className="text-sm text-muted-foreground">Average productivity lift among effective Copilot users</div>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-accent-foreground" />
                  <span className="text-3xl font-bold text-accent-foreground">353%</span>
                </div>
                <div className="text-sm text-muted-foreground">Projected 3‑year ROI on Copilot investment</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};
