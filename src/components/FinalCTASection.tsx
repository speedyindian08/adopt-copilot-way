import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section id="contact" className="py-20 bg-primary/5 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Unlock Copilot Adoption and ROI?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get clarity on where your Copilot adoption stands, where it can go, and how to get there in the next 30 days. The consultation is focused, practical, and completely no-obligation.
          </p>
          <Button variant="cta" size="xl" className="group" asChild>
            <a href="https://outlook.office365.com/book/ESSCopilotAdoptionConsultation@yourorg.com" target="_blank" rel="noopener noreferrer">
              Book Your Copilot Adoption Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-6 max-w-xl mx-auto">
            In 30 minutes, we'll map your adoption gaps, identify quick-win use cases, and outline a 30-day Copilot adoption plan tailored to your organization.
          </p>
        </div>
      </div>
    </section>
  );
};
