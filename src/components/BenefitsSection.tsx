import { Award, Shield, TrendingUp, BookOpen, HeadphonesIcon, Zap } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Compliance-First Deployment",
      description: "Every engagement starts with a security and governance review — aligning Copilot with HIPAA, SOC 2, HITRUST, and your internal compliance policies.",
      color: "primary",
    },
    {
      icon: Award,
      title: "Microsoft MVP-Led Advisory",
      description: "Not generic consultants. Our team includes recognized Microsoft MVPs with deep expertise in Copilot, security, and enterprise architecture.",
      color: "secondary",
    },
    {
      icon: BookOpen,
      title: "Role-Based Prompt Playbooks",
      description: "Custom prompt engineering playbooks for each department — clinical ops, finance, HR, IT — so every team gets relevant, actionable training.",
      color: "accent",
    },
    {
      icon: TrendingUp,
      title: "Measurable Productivity Gains",
      description: "We don't just train — we measure. Real-time adoption dashboards and productivity KPIs prove your investment is paying off.",
      color: "primary",
    },
    {
      icon: HeadphonesIcon,
      title: "Post-Deployment Coaching",
      description: "Two weeks of dedicated coaching and 24/7 support after go-live to cement adoption and resolve real-world usage challenges.",
      color: "secondary",
    },
    {
      icon: Zap,
      title: "Executive-Ready ROI Data",
      description: "Board-ready reporting with 353% projected ROI documentation — so you can justify investment with data, not promises.",
      color: "accent",
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Regulated Organizations Choose ESS
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just deploy Copilot — we make it safe, governed, and measurably productive for organizations where compliance isn't optional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-${benefit.color}/10 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-6 h-6 text-${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
