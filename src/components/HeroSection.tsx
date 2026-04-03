import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{
        background: `
          var(--color-bg)
        `,
      }}
    >
      {/* Spotlight overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.16) 0%, transparent 68%)',
      }} />
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          repeating-linear-gradient(rgba(255,255,255,0.025) 0 1px, transparent 1px 48px),
          repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 48px)
        `,
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow pill */}
          <div
            className="inline-flex items-center gap-2 mb-6 animate-fade-in"
            style={{
              background: 'rgba(37,99,235,0.12)',
              border: '1px solid rgba(37,99,235,0.28)',
              borderRadius: 'var(--radius-full)',
              padding: '6px 16px',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              color: '#93c5fd',
            }}
          >
            <Shield className="w-4 h-4" />
            ESS Secure Copilot Academy
          </div>

          <h1 className="font-display font-extrabold tracking-tight mb-4 animate-fade-in" style={{ animationDelay: "0.1s", fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'var(--color-text)' }}>
            Copilot Governance &amp; Responsible AI{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              for Regulated Industries
            </span>
          </h1>

          <p className="text-2xl sm:text-3xl font-semibold mb-6 animate-fade-in" style={{ animationDelay: "0.15s", color: 'var(--color-text-muted)' }}>
            Buying Copilot is easy. Getting ROI isn't.
          </p>

          <p className="text-lg mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s", color: 'var(--color-text-muted)', fontSize: '1.125rem', maxWidth: '580px' }}>
            The ESS Secure Copilot Academy is a structured, Microsoft MVP‑led advisory and training program for healthcare, financial services, and other regulated enterprises — so you can deploy Copilot with governance, drive adoption, and prove ROI to your board.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="cta" size="xl" className="group" asChild>
              <a href="https://outlook.office365.com/book/ESSCopilotAdoptionConsultation@yourorg.com" target="_blank" rel="noopener noreferrer">
                Book a Copilot Readiness Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#pricing">
                View Copilot Academy Programs & Pricing
              </a>
            </Button>
          </div>

          {/* AI Video Avatar */}
          <div className="max-w-2xl mx-auto mb-12 animate-fade-in rounded-xl overflow-hidden border border-white/10" style={{ animationDelay: "0.35s", boxShadow: 'var(--shadow-lg)' }}>
            <video
              className="w-full"
              controls
              preload="metadata"
              poster=""
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="text-sm mb-4 animate-fade-in" style={{ animationDelay: "0.37s", color: 'var(--color-text-muted)' }}>
            No obligation · 30-minute strategic session focused on your Copilot risks and opportunities
          </p>

          {/* Outcome Stats Bar */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: '#60a5fa' }}>
              What ESS Copilot Academy clients are seeing in 30–90 days
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-xl border border-white/[0.07] transition-all duration-200 hover:border-[var(--color-border-hover)] hover:shadow-glow hover:-translate-y-0.5" style={{ background: 'var(--color-surface)' }}>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-3xl font-bold font-display bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">20→85%</span>
                </div>
                <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Active Copilot users in 30 days</div>
              </div>
              <div className="p-6 rounded-xl border border-white/[0.07] transition-all duration-200 hover:border-[var(--color-border-hover)] hover:shadow-glow hover:-translate-y-0.5" style={{ background: 'var(--color-surface)' }}>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  <span className="text-3xl font-bold font-display bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">35%</span>
                </div>
                <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Average productivity lift among effective Copilot users</div>
              </div>
              <div className="p-6 rounded-xl border border-white/[0.07] transition-all duration-200 hover:border-[var(--color-border-hover)] hover:shadow-glow hover:-translate-y-0.5" style={{ background: 'var(--color-surface)' }}>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <span className="text-3xl font-bold font-display bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">353%</span>
                </div>
                <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Projected 3‑year ROI on Copilot investment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
