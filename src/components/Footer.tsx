import { Button } from "@/components/ui/button";
import essLogo from "@/assets/ess-logo.png";
import microsoftBadge from "@/assets/microsoft-partner-badge.png";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Deploy Copilot the Right Way?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join healthcare systems, financial services firms, and regulated enterprises who trust ESS to make Copilot safe, governed, and measurably productive.
            </p>
            <Button variant="default" size="xl" className="bg-background text-foreground hover:bg-background/90" asChild>
              <a href="#contact">
                Book a Copilot Readiness Session
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <img src={essLogo} alt="ESS" className="h-12 w-auto mb-4" />
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              Enterprise Software Solutions — Copilot Governance & Responsible AI Transformation Specialists for Regulated Industries. Microsoft MVP-led advisory, training, and adoption strategies.
            </p>
            <img src={microsoftBadge} alt="Microsoft Solutions Partner" className="h-24 w-auto" />
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#overview" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  The Blueprint™
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Why ESS
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Engagement Models
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: copilotacademy@software-dudes.ai</li>
              <li>Phone: (888)-732-6521</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Enterprise Software Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
