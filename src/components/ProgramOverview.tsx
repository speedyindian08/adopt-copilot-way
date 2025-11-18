import { Calendar, Users, BookOpen, MessageSquare, HeadphonesIcon } from "lucide-react";

export const ProgramOverview = () => {
  const timeline = [
    {
      icon: Calendar,
      title: "Content Alignment Meeting",
      duration: "1 hour",
      description: "Understand your organization's specific needs and customize the training approach",
    },
    {
      icon: Users,
      title: "Kickoff Session",
      duration: "3 hours",
      description: "Comprehensive introduction to Copilot across all core Microsoft 365 applications",
    },
    {
      icon: BookOpen,
      title: "Role-Based Sessions",
      duration: "1 hour each",
      description: "Targeted training for specific departments with custom prompt playbooks",
    },
    {
      icon: MessageSquare,
      title: "Wrap-up Session",
      duration: "1 hour",
      description: "Review key learnings, address questions, and solidify adoption strategies",
    },
    {
      icon: HeadphonesIcon,
      title: "Adoption Support",
      duration: "2 weeks",
      description: "Dedicated coaching and 24/7 support to ensure successful implementation",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              The ESS Copilot Academy: Your Investment in Future Productivity
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured, flexible program designed to fit your organization's schedule and needs. Total investment: 4-7 hours, delivered virtually or in-person.
            </p>
          </div>

          <div className="relative">
            {/* Timeline connector */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={index}
                    className={`relative flex flex-col lg:flex-row gap-8 ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                      <div className="bg-card p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-shadow">
                        <div className={`flex items-center gap-3 mb-3 ${isEven ? "lg:justify-end" : "lg:justify-start"}`}>
                          <div className="lg:hidden flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                            <span className="text-sm font-medium text-primary">{item.duration}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>

                    {/* Icon - Desktop */}
                    <div className="hidden lg:flex flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full items-center justify-center z-10 border-4 border-background shadow-lg">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block flex-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
