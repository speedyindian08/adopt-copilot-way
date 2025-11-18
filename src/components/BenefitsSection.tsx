import { Award, Lightbulb, TrendingUp, BookOpen, HeadphonesIcon, Zap } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Award,
      title: "Expert Trainers",
      description: "Microsoft MVP-led workshops with real-world expertise and deep product knowledge",
      color: "primary",
    },
    {
      icon: BookOpen,
      title: "Real-World Experiences",
      description: "Practical, hands-on training with custom prompt-writing playbooks for each role",
      color: "secondary",
    },
    {
      icon: TrendingUp,
      title: "Productivity Boost",
      description: "Achieve a 35% increase in productivity with effective Copilot usage",
      color: "accent",
    },
    {
      icon: Lightbulb,
      title: "Lightbulb Learning",
      description: "Flexible, engaging approach that combines relevance with memorable moments",
      color: "primary",
    },
    {
      icon: HeadphonesIcon,
      title: "2 Weeks Dedicated Coaching",
      description: "Post-deployment coaching and 24/7 support to ensure lasting adoption",
      color: "secondary",
    },
    {
      icon: Zap,
      title: "Fast ROI",
      description: "See measurable results in adoption and productivity within 30 days",
      color: "accent",
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Copilot Academy?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver more than training—we provide a complete transformation of how your teams work with AI.
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
