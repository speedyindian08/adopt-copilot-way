import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Copilot Foundations",
      target: "Small Teams & Departments",
      duration: "3-hour core workshop",
      features: [
        "Microsoft MVP-led training",
        "Core App Copilot playbooks",
        "Foundational prompt engineering",
        "Security & governance overview",
        "Q&A session included",
      ],
      cta: "Request a Readiness Session",
      highlighted: false,
    },
    {
      name: "Governed Activation",
      target: "Mid-Size Organizations",
      duration: "3–5 hours over 1 week",
      features: [
        "Everything in Foundations",
        "Permissions & access review",
        "Role-specific prompt playbooks",
        "Department-level training sessions",
        "Compliance alignment documentation",
        "1 week post-launch support",
      ],
      cta: "Request a Readiness Session",
      highlighted: false,
    },
    {
      name: "Full Blueprint™",
      target: "Enterprise & Regulated Industries",
      duration: "Complete 4-phase engagement",
      badge: "RECOMMENDED",
      features: [
        "Everything in Governed Activation",
        "Full security & governance audit",
        "HIPAA / SOC 2 / HITRUST alignment",
        "Dedicated coaching (2 weeks)",
        "Real-time adoption dashboards",
        "Executive ROI reporting",
        "Priority 24/7 support",
      ],
      cta: "Get Your Copilot Blueprint",
      highlighted: true,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Engagement Models
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured programs designed for your organization's size, compliance requirements, and adoption goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-xl border-2 p-8 flex flex-col ${
                  plan.highlighted
                    ? "border-primary shadow-2xl scale-105 lg:scale-110"
                    : "border-border shadow-md hover:shadow-lg"
                } transition-all duration-300`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4" />
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{plan.target}</p>
                  <p className="text-muted-foreground text-sm">{plan.duration}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? "cta" : "default"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href="#contact">
                    {plan.cta}
                  </a>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Designed specifically for healthcare, financial services, and other regulated industries.{" "}
              <a href="#contact" className="text-primary font-medium hover:underline">
                Contact us for a custom engagement
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
