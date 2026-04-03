import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Pilot Academy",
      target: "Up to 250 users / Single Business Unit",
      duration: "4–6 weeks",
      features: [
        "Readiness assessment & adoption baseline",
        "Workflow alignment for 1–2 departments",
        "Role-based workshops",
        "Pilot prompt playbook",
        "Adoption & ROI starter dashboard",
      ],
      pricing: "Starting at $X,XXX — request quote in your readiness session.",
      cta: "Book a Copilot Readiness Session",
      highlighted: false,
    },
    {
      name: "Organization-Wide Academy",
      target: "250–2,500 users",
      duration: "6–10 weeks",
      badge: "MOST POPULAR",
      features: [
        "Executive alignment & sponsorship workshop",
        "Multi-BU workflow alignment",
        "Role-based workshops for key functions",
        "Expanded prompt playbooks & internal champions",
        "60–90 day adoption reviews",
      ],
      pricing: "Custom pricing based on scope — scoped during readiness session.",
      cta: "Book a Copilot Readiness Session",
      highlighted: true,
    },
    {
      name: "Enterprise Academy Plus",
      target: "Large, Highly Regulated Enterprises",
      duration: "Custom multi-phase engagement",
      features: [
        "Governance & responsible AI advisory",
        "Policy, risk & compliance workshops",
        "Enterprise-wide prompt playbooks",
        "Quarterly adoption & ROI reviews",
        "Optional ongoing advisory retainer",
      ],
      pricing: "Enterprise engagement — contact us for a tailored proposal.",
      cta: "Book a Copilot Readiness Session",
      highlighted: false,
    },
  ];

  const bookingUrl = "https://outlook.office365.com/book/ESSCopilotAdoptionConsultation@enterprise-software-solutions.com";

  return (
    <section id="pricing" className="bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary mb-4">
              Programs &amp; Pricing
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-display">
              ESS Secure Copilot Academy Engagement Models
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured programs designed for your organization's size, compliance requirements, and adoption goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-xl border-2 p-8 flex flex-col transition-all duration-300 ${
                  plan.highlighted
                    ? "border-primary shadow-glow lg:scale-[1.03]"
                    : "border-border card-glow"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg whitespace-nowrap">
                    <Star className="w-4 h-4" />
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2 font-display">{plan.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{plan.target}</p>
                  <p className="text-muted-foreground text-sm">{plan.duration}</p>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-muted-foreground mb-6 italic">
                  {plan.pricing}
                </p>

                <Button
                  variant={plan.highlighted ? "cta" : "default"}
                  size="lg"
                  className="w-full group"
                  asChild
                >
                  <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              All programs are delivered through ESS Secure Copilot Academy and can be tailored for healthcare, financial services, and other regulated industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
