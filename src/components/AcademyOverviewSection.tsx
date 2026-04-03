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
    <section className="py-20" style={{ background: 'var(--color-bg)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: '#60a5fa', letterSpacing: '0.1em' }}>The Program</span>
            <h2 className="text-3xl lg:text-4xl font-bold font-display mb-4" style={{ color: 'var(--color-text)' }}>
              Inside ESS Secure Copilot Academy
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
              ESS Copilot Academy is a structured, flexible program that fits your organization's schedule — typically 4–7 total hours. Led by Microsoft MVPs with deep Copilot and Microsoft 365 expertise, the Academy is focused on role-based workflows, governed deployments, and measurable adoption.
            </p>
          </div>

          {/* Key highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Clock, title: "Flexible Format", desc: "4–7 hours total, structured to fit your team's schedule", color: "text-blue-400" },
              { icon: Award, title: "Microsoft MVP-Led", desc: "Delivered by recognized experts in Copilot and M365", color: "text-cyan-400" },
              { icon: Target, title: "Outcome-Focused", desc: "Role-based workflows, governed deployments, measurable ROI", color: "text-emerald-400" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl border text-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-hover)';
                    e.currentTarget.style.boxShadow = '0 0 28px var(--color-primary-glow)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="w-11 h-11 rounded-md flex items-center justify-center mx-auto mb-3" style={{ background: 'rgba(37,99,235,0.1)' }}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="font-semibold font-display mb-1" style={{ color: 'var(--color-text)' }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Key components */}
          <h3 className="text-xl font-semibold font-display text-center mb-6" style={{ color: 'var(--color-text)' }}>
            Key Components of the Academy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {components.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border-hover)';
                    e.currentTarget.style.boxShadow = '0 0 28px var(--color-primary-glow)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-md flex items-center justify-center" style={{ background: 'rgba(37,99,235,0.1)' }}>
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-display mb-1" style={{ color: 'var(--color-text)' }}>{item.title}</h4>
                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{item.description}</p>
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
