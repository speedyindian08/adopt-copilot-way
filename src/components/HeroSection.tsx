import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Clock } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background pt-20 pb-24 lg:pt-32 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent-foreground mb-6 animate-fade-in">
            <TrendingUp className="w-4 h-4" />
            Proven Results with Fortune 500 Companies
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Maximize Your Copilot ROI:{" "}
            <span className="text-primary">Go From 20% to 85%</span>{" "}
            User Adoption in 30 Days
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            The dynamic, Microsoft MVP-led training designed to equip your entire workforce with the skills to confidently and effectively leverage Microsoft 365 Copilot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="cta" size="xl" className="group" asChild>
              <a href="#contact">
                Enroll in Copilot Academy Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#pricing">
                View Plans & Pricing
              </a>
            </Button>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">353%</div>
              <div className="text-sm text-muted-foreground">Projected ROI over three years (M365 Copilot)</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-secondary mb-2">35%</div>
              <div className="text-sm text-muted-foreground">Increase in productivity for effective Copilot users</div>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-accent mb-2">20% → 85%</div>
              <div className="text-sm text-muted-foreground">Healthcare client adoption boost in 30 days</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};
