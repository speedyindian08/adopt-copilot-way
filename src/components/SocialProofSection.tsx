import { Quote, Award, Users, TrendingUp } from "lucide-react";

export const SocialProofSection = () => {
  const blurbs = [
    {
      icon: Award,
      title: "Enterprise-Grade Training",
      description: "Structured programs built for complex, multi-department organizations with strict compliance requirements.",
    },
    {
      icon: Users,
      title: "Microsoft MVP-Led",
      description: "Every session is delivered by recognized Microsoft MVPs with deep Copilot and Microsoft 365 expertise.",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Our methodology consistently drives 80%+ active adoption and measurable ROI within 30–90 days.",
    },
  ];

  const testimonials = [
    {
      quote: "We had 600 Copilot licenses and maybe 18% real usage. ESS gave us role-specific playbooks and a structured rollout plan — adoption hit 82% within 30 days.",
      author: "Sarah Mitchell",
      title: "VP of Digital Transformation",
      company: "Regional Healthcare System",
    },
    {
      quote: "Within 30 minutes, we had a clear adoption plan and five use cases we hadn't considered. Two months later, every department has live Copilot workflows.",
      author: "James Richardson",
      title: "Director of IT Operations",
      company: "Mid-Market Financial Services Firm",
    },
    {
      quote: "ESS Copilot Academy helped us set up tracking from day one — we reported a projected 340% ROI at the next board meeting. That changed the conversation entirely.",
      author: "Dr. Michael Chen",
      title: "Chief Information Officer",
      company: "Multi-Site Health System",
    },
  ];

  return (
    <section className="bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-display">
              Trusted by Industry Leaders Across Key Sectors
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The ESS Copilot Academy methodology is trusted by leaders at Fortune 500 companies, healthcare systems, financial services firms, and enterprise SaaS organizations — with Microsoft themselves as a client.
            </p>
          </div>

          {/* Benefit blurbs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {blurbs.map((blurb, index) => {
              const Icon = blurb.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-lg p-6 text-center card-glow transition-all duration-200">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2 font-display">{blurb.title}</h3>
                  <p className="text-sm text-muted-foreground">{blurb.description}</p>
                </div>
              );
            })}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 card-glow transition-all duration-200"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <blockquote className="text-foreground mb-6 leading-relaxed text-sm">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.title}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
