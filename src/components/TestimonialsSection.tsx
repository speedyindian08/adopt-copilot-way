import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "We deployed Copilot across 2,500 users in just 30 days with ESS Academy. Their structured approach and role-based training eliminated the typical adoption friction we've experienced with other enterprise tools. The combination of MVP-led expertise and dedicated coaching made this our smoothest enterprise software rollout to date.",
      author: "Sarah Mitchell",
      title: "VP of Digital Transformation",
      company: "Fortune 500 Healthcare Provider",
      metric: "Deployment Success",
      metricValue: "2,500 users in 30 days"
    },
    {
      quote: "Our teams were productive with Copilot within the first week—not months. The hands-on prompt-writing workshops and custom playbooks meant our staff could immediately apply what they learned. We saw measurable productivity gains in week two, which is unprecedented for enterprise software of this complexity.",
      author: "James Richardson",
      title: "Director of IT Operations",
      company: "Global Manufacturing Firm",
      metric: "Time-to-Value",
      metricValue: "Productive in 1 week"
    },
    {
      quote: "The numbers speak for themselves: 35% productivity increase across teams using Copilot, with a projected 353% ROI over three years. ESS Academy didn't just train our people—they transformed how we work. The dedicated coaching and adoption tracking gave us the visibility we needed to justify the investment to our board.",
      author: "Dr. Michael Chen",
      title: "Chief Information Officer",
      company: "Regional Financial Services",
      metric: "ROI & Productivity",
      metricValue: "353% projected ROI"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Trusted by Leaders Who Demand Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how enterprise leaders achieved rapid adoption, measurable productivity gains, and exceptional ROI with ESS Copilot Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3 mb-6">
                  <Quote className="w-8 h-8 text-brand-green flex-shrink-0" />
                  <div className="bg-brand-green/10 px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-brand-green">
                      {testimonial.metric}
                    </span>
                  </div>
                </div>

                <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="border-t border-border pt-6">
                  <div className="font-semibold text-foreground mb-1">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </div>
                  <div className="mt-3 inline-flex items-center px-3 py-1 bg-brand-blue/10 rounded-full">
                    <span className="text-sm font-bold text-brand-blue">
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
