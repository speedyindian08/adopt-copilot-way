import { Button } from "@/components/ui/button";
import essLogo from "@/assets/ess-logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center">
              <img src={essLogo} alt="ESS" className="h-10 w-auto" />
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#overview" className="text-sm font-medium font-body text-muted-foreground hover:text-primary transition-colors">
                The Blueprint™
              </a>
              <a href="#benefits" className="text-sm font-medium font-body text-muted-foreground hover:text-primary transition-colors">
                Why ESS
              </a>
              <a href="#pricing" className="text-sm font-medium font-body text-muted-foreground hover:text-primary transition-colors">
                Programs
              </a>
            </nav>
          </div>
          <Button variant="cta" size="default" asChild>
            <a href="#contact">
              Book a Readiness Session
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};
