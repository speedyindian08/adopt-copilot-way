import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Lightbulb, CalendarCheck, BookOpen, BarChart3, Handshake } from "lucide-react";

export const ConsultationValueSection = () => {
  const deliverables = [
    {
      icon: Target,
      text: "<strong>A clear-eyed adoption snapshot</strong> — where your Copilot adoption stands today and where it's most likely to stall.",
    },
    {
      icon: Lightbulb,
      text: "<strong>3–5 high-impact use cases</strong> mapped to your specific roles and workflows — not generic demos.",
    },
    {
      icon: CalendarCheck,
      text: "<strong>A 30-day adoption roadmap</strong> with concrete milestones your team can actually hit.",
    },
    {
      icon: BookOpen,
      text: "<strong>Training and enablement recommendations</strong> — formats, prompt playbooks, and internal champions to sustain momentum.",
    },
    {
      icon: BarChart3,
      text: "<strong>Simple metrics from day one</strong> to track adoption and outcomes — so you can show progress, not just activity.",
    },
    {
      icon: Handshake,
      text: "<strong>An honest assessment</strong> of whether partnering with ESS Copilot Academy makes sense — and in what format.",
    },
  ];

  return (
    <section id="consultation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-display">
              What You'll Walk Away With in Your ESS Copilot Academy Readiness Session
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This is a focused, 30-minute working session — not a generic sales call. You'll leave with a clear diagnosis of your adoption gaps and a concrete plan to close them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-4 bg-card p-5 rounded-lg border border-border card-glow transition-all duration-200">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/15 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p
                    className="text-foreground text-sm leading-relaxed [&_strong]:text-foreground"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              );
            })}
          </div>

          <div className="bg-card rounded-lg p-6 border border-border text-center">
            <p className="text-sm text-muted-foreground mb-4">
              <span className="font-semibold text-foreground">Best when attended by:</span>{" "}
              Your CIO or IT lead, a digital transformation or operations lead, and one line-of-business stakeholder who'll champion day-to-day adoption.
            </p>
            <Button variant="cta" size="lg" className="group" asChild>
              <a href="https://outlook.office365.com/book/ESSCopilotAdoptionConsultation@enterprise-software-solutions.com" target="_blank" rel="noopener noreferrer">
                Book a Copilot Readiness Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              No obligation · 30 minutes · Tailored to your organization
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
