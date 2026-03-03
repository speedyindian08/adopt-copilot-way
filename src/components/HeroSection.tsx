import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background pt-20 pb-24 lg:pt-32 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-foreground mb-6 animate-fade-in">
            <Shield className="w-4 h-4 text-primary" />
            Copilot Governance & Responsible AI for Regulated Industries
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Deploy Microsoft Copilot the Right Way —{" "}
            <span className="text-primary">Secure, Governed, and Measurable</span>{" "}
            in 30 Days
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            The structured, Microsoft MVP-led advisory and training program built for healthcare, financial services, and regulated enterprises — so you can activate Copilot with confidence, compliance, and measurable ROI.
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
                View Programs & Pricing
              </a>
            </Button>
          </div>

          {/* Stat Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-3xl font-bold text-primary">20→85%</span>
              </div>
              <div className="text-sm text-muted-foreground">Copilot adoption within 30 days</div>
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
              <div className="text-sm text-muted-foreground">Projected 3-year ROI on Copilot investment</div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            No obligation · 30-minute strategic session focused on your Copilot risks and opportunities
          </p>
        </div>
      </div>

      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};
