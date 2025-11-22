import { Shield, Award, CheckCircle } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export const TrustSection = () => {
  const clients = [
    { name: "JIFFY LUBE", id: "jiffy-lube" },
    { name: "ARC", id: "arc" },
    { name: "PURAKAL", id: "purakal" },
    { name: "PREZENT", id: "prezent" },
    { name: "SOTC", id: "sotc" },
    { name: "BP", id: "bp" },
    { name: "YELLOW", id: "yellow" },
    { name: "EMBLEM", id: "emblem" },
  ];

  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [AutoScroll({ playOnInit: true, speed: 1 })]
  );

  return (
    <section className="py-16 bg-muted/50 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Trusted by Industry Leaders Across Key Sectors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The ESS Copilot Academy methodology is trusted by experts from Fortune 500 companies, with Microsoft themselves as a client.
            </p>
          </div>

          {/* Auto-scrolling Client Logos Carousel */}
          <div className="overflow-hidden mb-12" ref={emblaRef}>
            <div className="flex gap-8">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex-[0_0_200px] flex items-center justify-center h-24 bg-card rounded-lg border border-border p-6"
                >
                  <span className="text-xl font-bold text-muted-foreground uppercase tracking-wider">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
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
