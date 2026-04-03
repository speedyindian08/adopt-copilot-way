import { Button } from "@/components/ui/button";
import essLogo from "@/assets/ess-logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full" style={{ background: 'rgba(10,13,18,0.85)', backdropFilter: 'blur(20px) saturate(180%)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center">
              <img src={essLogo} alt="ESS" className="h-10 w-auto" />
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#overview" className="text-sm font-medium text-[var(--color-text-muted)] hover:text-white transition-all duration-200">
                The Blueprint™
              </a>
              <a href="#benefits" className="text-sm font-medium text-[var(--color-text-muted)] hover:text-white transition-all duration-200">
                Why ESS
              </a>
              <a href="#pricing" className="text-sm font-medium text-[var(--color-text-muted)] hover:text-white transition-all duration-200">
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
