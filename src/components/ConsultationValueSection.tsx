import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Lightbulb, CalendarCheck, BookOpen, BarChart3, Handshake } from "lucide-react";

export const ConsultationValueSection = () => {
  const deliverables = [
    {
      icon: Target,
      text: "A snapshot of where Copilot adoption stands today — or where it's most likely to stall.",
    },
    {
      icon: Lightbulb,
      text: "3–5 high-impact Copilot use cases tailored to your key roles and workflows.",
    },
    {
      icon: CalendarCheck,
      text: "A 30-day adoption and enablement plan with clear milestones.",
    },
    {
      icon: BookOpen,
      text: "Recommendations for trainings, playbooks, and internal champions to drive usage.",
    },
    {
      icon: BarChart3,
      text: "Simple adoption and outcome metrics you can start tracking from day one.",
    },
    {
      icon: Handshake,
      text: "Clarity on whether partnering with ESS Copilot Academy makes sense, and in what format.",
    },
  ];

  return (
    <section id="consultation" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What You'll Get from Your Copilot Adoption Consultation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This is a focused, 30-minute working session — not a generic sales call. You'll leave with a clear picture of your adoption gaps and a concrete plan to close them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-4 bg-card p-5 rounded-lg border border-border">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-muted/50 rounded-lg p-6 border border-border text-center">
            <p className="text-sm text-muted-foreground mb-4">
              <span className="font-semibold text-foreground">Who should join this call?</span>{" "}
              Your CIO or IT lead, a digital transformation or business operations lead, and one line-of-business stakeholder who'll champion adoption.
            </p>
            <Button variant="cta" size="lg" className="group" asChild>
              <a href="#contact">
                Book Your Copilot Adoption Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
