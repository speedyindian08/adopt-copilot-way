import { Search, ShieldCheck, Rocket, BarChart3 } from "lucide-react";

export const ProgramOverview = () => {
  const steps = [
    {
      icon: Search,
      step: "01",
      title: "Assess",
      subtitle: "Security, Readiness & Data Risk Review",
      description: "We audit your Microsoft 365 environment, permissions structure, and data governance posture. You'll get a clear picture of what's ready, what's risky, and what needs to change before Copilot goes live.",
      outcomes: ["Permissions & access audit", "Data classification review", "Shadow IT / shadow AI risk assessment", "Copilot readiness scorecard"],
    },
    {
      icon: ShieldCheck,
      step: "02",
      title: "Secure",
      subtitle: "Governance, Permissions & Compliance Configuration",
      description: "We configure the guardrails — aligning Copilot with your HIPAA, SOC 2, HITRUST, or internal compliance requirements. Permissions are tightened, DLP policies are validated, and governance is documented.",
      outcomes: ["Compliance-aligned configuration", "Data loss prevention validation", "Access control lockdown", "Governance documentation"],
    },
    {
      icon: Rocket,
      step: "03",
      title: "Activate",
      subtitle: "Role-Based Training, Prompt Playbooks & Deployment",
      description: "Microsoft MVP-led, role-specific training equips every department — from clinical ops to finance — with practical Copilot skills and custom prompt playbooks they'll actually use.",
      outcomes: ["Department-specific workshops", "Custom prompt engineering playbooks", "Hands-on exercises with real workflows", "Change management support"],
    },
    {
      icon: BarChart3,
      step: "04",
      title: "Measure",
      subtitle: "Adoption Metrics, Productivity KPIs & ROI Reporting",
      description: "We track what matters: adoption rates, productivity gains, and license utilization. You get the executive-ready data to prove ROI and justify continued investment to your board.",
      outcomes: ["Real-time adoption dashboards", "Productivity KPI tracking", "License utilization reporting", "Board-ready ROI documentation"],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary mb-4">
              Our Proven Methodology
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              The ESS Secure Copilot Blueprint™
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A battle-tested, four-phase methodology that de-risks Copilot deployment for regulated organizations. Every phase is designed for security, governance, and measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-8 rounded-xl border border-border shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">Phase {item.step}</span>
                      <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm font-medium text-secondary">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
