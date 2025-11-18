import { Shield, Award, CheckCircle } from "lucide-react";

export const TrustSection = () => {
  const clients = [
    { name: "Microsoft", color: "text-[#00A4EF]" },
    { name: "Jiffy Lube", color: "text-[#E51837]" },
    { name: "Ingram Micro", color: "text-[#0066CC]" },
    { name: "D&H", color: "text-[#0066CC]" },
    { name: "TD Synnex", color: "text-[#0066CC]" },
  ];

  return (
    <section className="py-16 bg-muted/50 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">
                Trusted by Experts and Fortune 500 Companies
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The Copilot Academy methodology is trusted by experts from Fortune 500 companies, with Microsoft themselves as a client.
            </p>
          </div>

          {/* Client Logos - Using text-based logos for licensing safety */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow group"
              >
                <div className={`text-2xl font-bold ${client.color} group-hover:scale-110 transition-transform`}>
                  {client.name}
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Enterprise-Grade Training</h3>
                <p className="text-sm text-muted-foreground">Designed for organizations of all sizes with proven methodologies</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Microsoft MVP-Led</h3>
                <p className="text-sm text-muted-foreground">Training delivered by recognized Microsoft experts and MVPs</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Proven Results</h3>
                <p className="text-sm text-muted-foreground">Real-world success stories from healthcare to enterprise tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
