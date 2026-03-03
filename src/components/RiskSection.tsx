import { AlertTriangle, Eye, ShieldOff, Lock } from "lucide-react";

export const RiskSection = () => {
  const risks = [
    {
      icon: ShieldOff,
      title: "Data Oversharing & Compliance Exposure",
      description: "Without proper governance, Copilot can surface sensitive data across your organization — creating HIPAA, SOC 2, and regulatory violations before anyone notices.",
    },
    {
      icon: Eye,
      title: "Shadow AI & Ungoverned Usage",
      description: "When employees adopt Copilot without structure, you lose visibility into what data is being processed, shared, and stored — creating audit nightmares.",
    },
    {
      icon: AlertTriangle,
      title: "Failed Adoption & Wasted Licenses",
      description: "Most organizations see less than 20% effective Copilot adoption. Without role-based enablement, your seven-figure investment sits idle.",
    },
    {
      icon: Lock,
      title: "Misaligned Permissions & Access Controls",
      description: "Copilot inherits your Microsoft 365 permissions. If those aren't locked down first, Copilot becomes a data access amplifier — not a productivity tool.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              The Risk Is Real — And Most Organizations Aren't Ready
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deploying Copilot without a governance-first approach exposes your organization to compliance risk, data leakage, and wasted investment. Here's what's at stake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {risks.map((risk, index) => {
              const Icon = risk.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg border border-destructive/20 shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{risk.title}</h3>
                      <p className="text-muted-foreground">{risk.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-foreground font-medium">
              That's why we built{" "}
              <span className="text-primary font-bold">The ESS Secure Copilot Blueprint™</span>{" "}
              — a governance-first methodology that eliminates these risks before they become incidents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
