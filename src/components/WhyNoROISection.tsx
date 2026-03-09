import { AlertTriangle } from "lucide-react";

export const WhyNoROISection = () => {
  const reasons = [
    {
      title: "No role-based use cases",
      description: "People open Copilot, type a vague prompt, get a mediocre answer, and stop trying. Without clear, department-specific workflows, the tool sits idle.",
    },
    {
      title: "No structured enablement",
      description: "Day-one curiosity fades fast. Without a real training plan, adoption peaks in the first week — then flatlines.",
    },
    {
      title: "No visibility into usage",
      description: "You can't tell who's using Copilot, how often, or whether it's actually changing the way work gets done.",
    },
    {
      title: "No ROI story for leadership",
      description: "Without before-and-after metrics, there's no way to prove the investment is paying off — or justify expanding it.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Copilot Isn't Delivering ROI Yet
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Buying licenses is the easy part. Turning them into daily productivity gains? That's where most organizations get stuck.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
