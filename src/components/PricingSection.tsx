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

  const bookingUrl = "https://outlook.office365.com/book/ESSCopilotAdoptionConsultation@yourorg.com";

  return (
    <section id="pricing" className="py-20" style={{ background: 'var(--color-bg)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: '#60a5fa', letterSpacing: '0.1em' }}>Programs &amp; Pricing</span>
            <h2 className="text-3xl lg:text-4xl font-bold font-display mb-4" style={{ color: 'var(--color-text)' }}>
              ESS Secure Copilot Academy Engagement Models
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
              Structured programs designed for your organization's size, compliance requirements, and adoption goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="relative rounded-xl p-8 flex flex-col transition-all duration-300"
                style={{
                  background: plan.highlighted
                    ? 'linear-gradient(160deg, rgba(37,99,235,0.08) 0%, var(--color-surface) 50%)'
                    : 'var(--color-surface)',
                  border: plan.highlighted
                    ? '2px solid rgba(37,99,235,0.5)'
                    : '1px solid var(--color-border)',
                  boxShadow: plan.highlighted ? '0 0 48px rgba(37,99,235,0.18)' : 'none',
                  transform: plan.highlighted ? 'scale(1.03)' : 'none',
                  zIndex: plan.highlighted ? 2 : 1,
                }}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wide flex items-center gap-1.5 whitespace-nowrap" style={{ background: 'linear-gradient(135deg, #2563eb, #06b6d4)', letterSpacing: '0.06em', fontSize: '0.7rem' }}>
                    <Star className="w-3.5 h-3.5" />
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-display mb-2" style={{ color: 'var(--color-text)' }}>{plan.name}</h3>
                  <p className="text-sm font-medium mb-2 text-blue-400">{plan.target}</p>
                  <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{plan.duration}</p>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm" style={{ color: 'var(--color-text)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs mb-6 italic" style={{ color: 'var(--color-text-muted)' }}>
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
            <p style={{ color: 'var(--color-text-muted)' }}>
              All programs are delivered through ESS Secure Copilot Academy and can be tailored for healthcare, financial services, and other regulated industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
