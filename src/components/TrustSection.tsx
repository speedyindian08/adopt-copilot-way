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

  const trustBadges = [
    { icon: GraduationCap, title: "Enterprise-Grade Training", desc: "Designed for organizations of all sizes, with a proven framework for turning Copilot licenses into everyday usage and measurable impact.", color: "text-blue-400" },
    { icon: Award, title: "Microsoft MVP-Led", desc: "Training and advisory delivered by recognized Microsoft experts and MVPs who work in the Microsoft 365 and Copilot ecosystem every day.", color: "text-cyan-400" },
    { icon: TrendingUp, title: "Proven Results", desc: "Real-world adoption gains and ROI stories, from healthcare to enterprise tech — including jumps from under 20% to 80%+ active Copilot usage in 30 days.", color: "text-emerald-400" },
  ];

  return (
    <section className="py-16" style={{ background: 'var(--color-surface-2)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: '#60a5fa', letterSpacing: '0.1em' }}>Trusted</span>
            <h2 className="text-3xl font-bold font-display mb-4" style={{ color: 'var(--color-text)' }}>
              Trusted by Industry Leaders Across Key Sectors
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
              The ESS Copilot Academy methodology is trusted by leaders at Fortune 500 companies, healthcare systems, financial services firms, and enterprise SaaS organizations — with Microsoft themselves as a client.
            </p>
          </div>

          {/* Logo carousel */}
          <div className="mb-12">
            <p className="text-sm text-center mb-6" style={{ color: 'var(--color-text-muted)' }}>
              Selected organizations our experts have worked with:
            </p>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-8">
                {[...clients, ...clients].map((client, index) => (
                  <div
                    key={`${client.id}-${index}`}
                    className="flex-[0_0_200px] flex items-center justify-center h-24 rounded-xl border p-6"
                    style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
                  >
                    {client.logo ? (
                      <img src={client.logo} alt={client.name} className="max-h-14 max-w-[160px] object-contain" />
                    ) : (
                      <span className="text-xl font-bold uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
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
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-md flex items-center justify-center" style={{ background: 'rgba(37,99,235,0.1)' }}>
                    <Icon className={`w-6 h-6 ${badge.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold font-display mb-1" style={{ color: 'var(--color-text)' }}>{badge.title}</h3>
                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{badge.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
