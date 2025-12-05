import { Button } from "@/components/ui/button";
import essLogo from "@/assets/ess-logo.png";
import microsoftBadge from "@/assets/microsoft-partner-badge.png";
export const Footer = () => {
  return <footer className="bg-muted/50 border-t border-border">
      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Copilot Adoption?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join Fortune 500 companies and start seeing results in 30 days
            </p>
            <Button variant="default" size="xl" className="bg-background text-foreground hover:bg-background/90" asChild>
              <a href="#contact">
                Enroll in Copilot Academy Today
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
              Enterprises Software Solutions - Empowering organizations with expert &amp; MVP-led implementation, training and adoption strategies for Microsoft technologies.               
            </p>
            <img src={microsoftBadge} alt="Microsoft Solutions Partner" className="h-24 w-auto" />
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#overview" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Program Overview
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@ess.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Support: 24/7 Available</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Enterprise Software Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};