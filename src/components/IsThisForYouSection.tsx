import { CheckCircle } from "lucide-react";

export const IsThisForYouSection = () => {
  const qualifiers = [
    "You have — or are about to roll out — Microsoft 365 Copilot licenses.",
    "You're the one accountable for adoption, usage, and proving ROI.",
    "Adoption has stalled, is uneven across teams, or hasn't really started yet.",
  ];

  return (
    <section className="py-12 bg-primary/5 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 text-center">
            Sound familiar?
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {qualifiers.map((item, index) => (
              <div key={index} className="flex items-start gap-3 flex-1">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
