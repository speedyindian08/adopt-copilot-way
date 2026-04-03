import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "We were skeptical — another enterprise tool, another failed rollout. But ESS cut through the noise with their governance-first approach. They locked down our permissions, aligned everything with HIPAA, and then trained 2,500 users in 30 days. That's not a typo. Our smoothest and safest rollout ever.",
      author: "Sarah Mitchell",
      title: "VP of Digital Transformation",
      company: "Fortune 500 Healthcare Provider",
      metric: "Governed Deployment",
      metricValue: "2,500 users in 30 days"
    },
    {
      quote: "Our initial Copilot deployment stalled — people weren't getting it, and compliance was nervous. ESS Copilot Academy changed both problems in week one. The security review calmed our CISO, and the role-based prompt workshops meant our teams were productive by week two. Adoption hit 85% in a month.",
      author: "James Richardson",
      title: "Director of IT Operations",
      company: "Regional Financial Services Firm",
      metric: "Adoption Rate",
      metricValue: "20% → 85% in 30 days"
    },
    {
      quote: "I needed to justify a seven-figure Copilot investment to our board — with proof, not promises. ESS gave me the governance plan and the data: 353% projected ROI over three years, with compliance documentation our auditors actually accepted. The board approved in one meeting.",
      author: "Dr. Michael Chen",
      title: "Chief Information Officer",
      company: "Multi-Hospital Health System",
      metric: "Board-Ready ROI",
      metricValue: "353% projected ROI"
    }
  ];

  return (
    <section className="py-20" style={{ background: 'var(--color-bg)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: '#60a5fa', letterSpacing: '0.1em' }}>Outcomes</span>
            <h2 className="text-4xl font-bold font-display mb-4" style={{ color: 'var(--color-text)' }}>
              Outcomes & Case Examples
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
              See how enterprise and healthcare leaders achieved governed Copilot deployment, rapid adoption, and measurable ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-xl p-8 border transition-all duration-200 hover:-translate-y-0.5"
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
                <div className="flex items-start gap-3 mb-6">
                  <Quote className="w-8 h-8 text-blue-400/40 flex-shrink-0" />
                  <div className="px-3 py-1 rounded-full" style={{ background: 'rgba(37,99,235,0.1)' }}>
                    <span className="text-sm font-semibold text-blue-400">
                      {testimonial.metric}
                    </span>
                  </div>
                </div>

                <blockquote className="mb-6 italic leading-relaxed text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  "{testimonial.quote}"
                </blockquote>

                <div className="pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="font-semibold mb-1" style={{ color: 'var(--color-text)' }}>
                    {testimonial.author}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--color-text-faint)' }}>
                    {testimonial.title}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--color-text-faint)' }}>
                    {testimonial.company}
                  </div>
                  <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full" style={{ background: 'rgba(37,99,235,0.1)' }}>
                    <span className="text-sm font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {testimonial.metricValue}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
