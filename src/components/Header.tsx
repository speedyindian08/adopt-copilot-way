import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import essLogo from "@/assets/ess-logo.png";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center">
            <img src={essLogo} alt="ESS" className="h-10 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#overview" className="text-sm font-medium font-body text-muted-foreground hover:text-primary transition-colors">
              The Blueprint™
            </a>
            <a href="#benefits" className="text-sm font-medium font-body text-muted-foreground hover:text-primary transition-colors">
              Why ESS
            </a>
            <a href="#pricing" className="text-sm font-medium font-body text-muted-foreground hover:text-primary transition-colors">
              Programs
            </a>
            <Button variant="cta" size="default" asChild>
              <a href="#contact">Book a Readiness Session</a>
            </Button>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <a href="#overview" onClick={() => setMobileOpen(false)} className="text-sm font-medium font-body text-muted-foreground hover:text-primary transition-colors py-2">
              The Blueprint™
            </a>
            <a href="#benefits" onClick={() => setMobileOpen(false)} className="text-sm font-medium font-body text-muted-foreground hover:text-primary transition-colors py-2">
              Why ESS
            </a>
            <a href="#pricing" onClick={() => setMobileOpen(false)} className="text-sm font-medium font-body text-muted-foreground hover:text-primary transition-colors py-2">
              Programs
            </a>
            <Button variant="cta" size="lg" className="w-full" asChild>
              <a href="#contact" onClick={() => setMobileOpen(false)}>Book a Readiness Session</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
