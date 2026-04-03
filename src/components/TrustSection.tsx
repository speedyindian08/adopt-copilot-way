import { GraduationCap, Award, TrendingUp } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import bpLogo from "@/assets/logos/bp.avif";
import yellowCabLogo from "@/assets/logos/yellow-cab.avif";
import siemensLogo from "@/assets/logos/siemens-energy.webp";
import prezentLogo from "@/assets/logos/prezent.avif";
import sotcLogo from "@/assets/logos/sotc.avif";
import jiffyLubeLogo from "@/assets/logos/jiffy-lube.avif";
import emblemLogo from "@/assets/logos/emblem.avif";
import purakalLogo from "@/assets/logos/purakal.webp";

export const TrustSection = () => {
  const clients = [
    { name: "JIFFY LUBE", id: "jiffy-lube", logo: jiffyLubeLogo },
    { name: "PURAKAL", id: "purakal", logo: purakalLogo },
    { name: "PREZENT", id: "prezent", logo: prezentLogo },
    { name: "SOTC", id: "sotc", logo: sotcLogo },
    { name: "BP", id: "bp", logo: bpLogo },
    { name: "YELLOW CAB", id: "yellow", logo: yellowCabLogo },
    { name: "SIEMENS ENERGY", id: "siemens-energy", logo: siemensLogo },
    { name: "EMBLEM", id: "emblem", logo: emblemLogo },
  ];

  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [AutoScroll({ playOnInit: true, speed: 1 })]
  );

  return (
    <section id="benefits" className="border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-display">
              Trusted by Industry Leaders Across Key Sectors
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The ESS Copilot Academy methodology is trusted by leaders at Fortune 500 companies, healthcare systems, financial services firms, and enterprise SaaS organizations — with Microsoft themselves as a client.
            </p>
          </div>

          {/* Logo carousel */}
          <div className="mb-12">
            <p className="text-sm text-muted-foreground text-center mb-6">
              Selected organizations our experts have worked with:
            </p>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-8">
                {[...clients, ...clients].map((client, index) => (
                  <div
                    key={`${client.id}-${index}`}
                    className="flex-[0_0_200px] flex items-center justify-center h-24 bg-card rounded-lg border border-border p-6"
                  >
                    {client.logo ? (
                      <img src={client.logo} alt={client.name} className="max-h-14 max-w-[160px] object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                    ) : (
                      <span className="text-xl font-bold text-muted-foreground uppercase tracking-wider">
                        {client.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 font-display">Enterprise-Grade Training</h3>
                <p className="text-sm text-muted-foreground">
                  Designed for organizations of all sizes, with a proven framework for turning Copilot licenses into everyday usage and measurable impact.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary/15 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 font-display">Microsoft MVP-Led</h3>
                <p className="text-sm text-muted-foreground">
                  Training and advisory delivered by recognized Microsoft experts and MVPs who work in the Microsoft 365 and Copilot ecosystem every day.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary/15 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 font-display">Proven Results</h3>
                <p className="text-sm text-muted-foreground">
                  Real-world adoption gains and ROI stories, from healthcare to enterprise tech — including jumps from under 20% to 80%+ active Copilot usage in 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
