import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect } from "react";

export const PartnersCarousel = () => {
  const partners = [
    {
      name: "Adobe",
      logo: "https://www.enterprise-software-solutions.com/cdn/shop/files/Adobe_Corporate_logo_svg.png?v=1758566117",
    },
    {
      name: "Microsoft Azure",
      logo: "https://www.enterprise-software-solutions.com/cdn/shop/files/Microsoft_Azure_Logo_svg.png?v=1758566159",
    },
    {
      name: "Cisco",
      logo: "https://www.enterprise-software-solutions.com/cdn/shop/files/Cisco_logo_blue_2016_svg.png?v=1758566215",
    },
    {
      name: "Microsoft Dynamics 365",
      logo: "https://www.enterprise-software-solutions.com/cdn/shop/files/Microsoft_Dynamics_365_Logo__2021_present__svg.png?v=1758566259",
    },
    {
      name: "Microsoft 365",
      logo: "https://www.enterprise-software-solutions.com/cdn/shop/files/logo_microsoft365_1_4ae05ae7-0667-47e8-aabd-3bfa3cf6a5e8.png?v=1751156260",
    },
    {
      name: "Power Platform",
      logo: "https://www.enterprise-software-solutions.com/cdn/shop/files/PowerPlatform-logo.png?v=1758566433",
    },
    {
      name: "N8n",
      logo: "https://www.enterprise-software-solutions.com/cdn/shop/files/N8n-logo.png?v=1758566476",
    },
    {
      name: "Make",
      logo: "https://www.enterprise-software-solutions.com/cdn/shop/files/Make-Logo-RGB_2x_dc892394-e92a-4263-b459-c873ac2aaedc.png?v=1758566525",
    },
    {
      name: "Zapier",
      logo: "https://www.enterprise-software-solutions.com/cdn/shop/files/zapier-Logo-PNG-SVG-Vector-1_1.png?v=1758566572",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: true,
      align: "start",
    },
    [
      AutoScroll({ 
        playOnInit: true, 
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      })
    ]
  );

  useEffect(() => {
    if (emblaApi) {
      console.log("Embla carousel initialized");
    }
  }, [emblaApi]);

  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-center text-foreground mb-8">
          Technology Partners We Work With
        </h3>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-12">
            {/* Duplicate the partners array to create seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-[0_0_200px] min-w-0 flex items-center justify-center"
              >
                <div className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-shadow h-24 w-full flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
