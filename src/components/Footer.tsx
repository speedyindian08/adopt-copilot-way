import { Button } from "@/components/ui/button";
import essLogo from "@/assets/ess-logo.png";
import microsoftBadge from "@/assets/microsoft-partner-badge.png";

export const Footer = () => {
  return (
    <footer style={{ background: '#060810', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Final CTA Section */}
      <div className="py-16" style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.14), rgba(6,182,212,0.08))' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold font-display mb-4" style={{ color: 'var(--color-text)' }}>
              Ready to Deploy Copilot the Right Way?
            </h2>
            <p className="text-xl mb-8" style={{ color: 'var(--color-text-muted)' }}>
              Join healthcare systems, financial services firms, and regulated enterprises who trust ESS to make Copilot safe, governed, and measurably productive.
            </p>
            <Button variant="cta" size="xl" asChild>
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
            <p className="text-sm mb-4 max-w-md" style={{ color: 'var(--color-text-muted)' }}>
              Enterprise Software Solutions — Copilot Governance & Responsible AI Transformation Specialists for Regulated Industries. Microsoft MVP-led advisory, training, and adoption strategies.
            </p>
            <img src={microsoftBadge} alt="Microsoft Solutions Partner" className="h-24 w-auto" />
          </div>

          <div>
            <h3 className="font-semibold font-display mb-4" style={{ color: 'var(--color-text)' }}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#overview" className="text-sm transition-all duration-200 hover:text-white" style={{ color: 'var(--color-text-muted)' }}>
                  The Blueprint™
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-sm transition-all duration-200 hover:text-white" style={{ color: 'var(--color-text-muted)' }}>
                  Why ESS
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm transition-all duration-200 hover:text-white" style={{ color: 'var(--color-text-muted)' }}>
                  Engagement Models
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-display mb-4" style={{ color: 'var(--color-text)' }}>Contact</h3>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
              <li>Email: copilotacademy@software-dudes.ai</li>
              <li>Phone: (888)-732-6521</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-sm" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'var(--color-text-faint)' }}>
          <p>&copy; {new Date().getFullYear()} Enterprise Software Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
