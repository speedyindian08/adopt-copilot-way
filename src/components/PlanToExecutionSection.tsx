import { Award, BookOpen, BarChart3 } from "lucide-react";

export const PlanToExecutionSection = () => {
  const capabilities = [
    {
      icon: Award,
      text: "Microsoft MVP-led workshops to train teams on real, role-specific Copilot workflows.",
    },
    {
      icon: BookOpen,
      text: "Custom prompt playbooks for departments like sales, operations, finance, HR, and IT.",
    },
    {
      icon: BarChart3,
      text: "Ongoing adoption check-ins and recommendations to keep usage and ROI growing.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              From Adoption Plan to Everyday Copilot Use
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The consultation is valuable on its own — you'll leave with clarity and a plan. If you want help executing, ESS has structured Copilot enablement programs that take you from plan to measurable, organization-wide adoption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-card p-6 rounded-lg border border-border shadow-md text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Want to go deeper?{" "}
            <a href="#contact" className="text-primary font-medium hover:underline">
              Ask about ESS Copilot Academy during your consultation
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
