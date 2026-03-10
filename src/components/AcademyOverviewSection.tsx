import { Clock, Award, Target, BookOpen, Users, BarChart3 } from "lucide-react";

export const AcademyOverviewSection = () => {
  const components = [
    {
      icon: Target,
      title: "Content & Workflow Alignment",
      description: "We map Copilot capabilities to your actual roles, departments, and daily workflows — so adoption sticks.",
    },
    {
      icon: Users,
      title: "Role-Based Workshops",
      description: "Hands-on, department-specific training sessions that teach your teams how to use Copilot for real work, not demos.",
    },
    {
      icon: BookOpen,
      title: "Custom Prompt Playbooks",
      description: "Ready-to-use prompt libraries for sales, operations, finance, HR, IT, and more — tailored to your organization.",
    },
    {
      icon: BarChart3,
      title: "Adoption & ROI Tracking",
      description: "Built-in metrics and dashboards so you can measure usage, productivity gains, and ROI from day one.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary mb-4">
              The Program
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Inside ESS Secure Copilot Academy
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ESS Copilot Academy is a structured, flexible program that fits your organization's schedule — typically 4–7 total hours. Led by Microsoft MVPs with deep Copilot and Microsoft 365 expertise, the Academy is focused on role-based workflows, governed deployments, and measurable adoption.
            </p>
          </div>

          {/* Key highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card p-6 rounded-lg border border-border shadow-md text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Flexible Format</h3>
              <p className="text-sm text-muted-foreground">4–7 hours total, structured to fit your team's schedule</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow-md text-center">
              <Award className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Microsoft MVP-Led</h3>
              <p className="text-sm text-muted-foreground">Delivered by recognized experts in Copilot and M365</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border shadow-md text-center">
              <Target className="w-8 h-8 text-accent-foreground mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Outcome-Focused</h3>
              <p className="text-sm text-muted-foreground">Role-based workflows, governed deployments, measurable ROI</p>
            </div>
          </div>

          {/* Key components */}
          <h3 className="text-xl font-semibold text-foreground text-center mb-6">
            Key Components of the Academy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {components.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-4 bg-card p-5 rounded-lg border border-border">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
