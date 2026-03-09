import { Quote } from "lucide-react";

export const SocialProofSection = () => {
  const testimonials = [
    {
      quote: "We had 600 Copilot licenses sitting mostly unused. ESS gave us role-specific playbooks and a structured rollout — adoption went from 18% to 82% in 30 days. Our teams are actually using it daily now.",
      author: "Sarah Mitchell",
      title: "VP of Digital Transformation",
      company: "Regional Healthcare System",
    },
    {
      quote: "The consultation alone was worth it. Within 30 minutes, we had a clear adoption plan and five use cases we hadn't considered. Two months later, every department has workflows running through Copilot.",
      author: "James Richardson",
      title: "Director of IT Operations",
      company: "Mid-Market Financial Services Firm",
    },
    {
      quote: "I needed to show the board that our Copilot investment was paying off. ESS helped us set up tracking from day one — we reported a projected 340% ROI at our next board meeting. That changed the conversation entirely.",
      author: "Dr. Michael Chen",
      title: "Chief Information Officer",
      company: "Multi-Site Health System",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Copilot Leaders Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
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

          <p className="text-center text-sm text-muted-foreground">
            Trusted by forward-thinking organizations in healthcare, financial services, and SaaS.
          </p>
        </div>
      </div>
    </section>
  );
};
