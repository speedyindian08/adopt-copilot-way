import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Solo",
      target: "Individual Users / Small Teams",
      duration: "3-hour core workshop",
      features: [
        "MVP-led training",
        "Core App Playbooks",
        "Foundational Copilot skills",
        "Q&A session included",
      ],
      cta: "ENROLL NOW",
      highlighted: false,
    },
    {
      name: "First Flight",
      target: "Mid-size Teams / Department",
      duration: "3-5 hours over 1 week",
      features: [
        "Everything in Solo",
        "Excel/PowerPoint Deep Dive",
        "Custom Prompt Playbooks",
        "Role-specific training",
        "Extended support",
      ],
      cta: "ENROLL NOW",
      highlighted: false,
    },
    {
      name: "Full Adoption",
      target: "Entire Organization",
      duration: "3-7 hours over 1-2 weeks",
      badge: "RECOMMENDED",
      features: [
        "Everything in First Flight",
        "Dedicated Coaching (2 weeks)",
        "Real-time Adoption Tracking",
        "Self-service License Management Portal",
        "Priority 24/7 support",
        "Executive reporting dashboard",
      ],
      cta: "ENROLL NOW",
      highlighted: true,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Choose Your Path to Copilot Mastery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the plan that best fits your organization's size and adoption goals
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
              Need a custom solution for your enterprise?{" "}
              <a href="#contact" className="text-primary font-medium hover:underline">
                Contact us for pricing
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
