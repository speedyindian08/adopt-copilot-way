import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingUp, DollarSign, Clock, ArrowRight } from "lucide-react";

export const ROICalculatorSection = () => {
  const [users, setUsers] = useState<number>(100);
  const [hoursSaved, setHoursSaved] = useState<number>(5);
  const [hourlyCost, setHourlyCost] = useState<number>(75);

  const weeksPerYear = 48;
  const annualSavings = users * hoursSaved * hourlyCost * weeksPerYear;
  const copilotCostPerUser = 30 * 12;
  const totalCost = users * copilotCostPerUser;
  const roi = totalCost > 0 ? Math.round(((annualSavings - totalCost) / totalCost) * 100) : 0;
  const paybackMonths = annualSavings > 0 ? Math.max(1, Math.round((totalCost / annualSavings) * 12)) : 0;

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

  const benefits = [
    "Quantify the upside of driving higher Copilot adoption across your org.",
    "Build a simple story leaders actually understand — hours saved, dollars saved.",
    "Set a measurable target you can revisit in 30, 60, and 90 days.",
  ];

  const inputStyle = {
    background: 'var(--color-surface-2)',
    borderColor: 'var(--color-border)',
    color: 'var(--color-text)',
  };

  return (
    <section className="py-20" style={{ background: 'var(--color-surface-2)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: '#60a5fa', letterSpacing: '0.1em' }}>ROI Calculator</span>
            <h2 className="text-3xl lg:text-4xl font-bold font-display mb-4" style={{ color: 'var(--color-text)' }}>
              Estimate Your Copilot ROI in Minutes
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
              Enter your user count, estimated time saved per person per week, and average hourly cost. The calculator shows your projected annual savings, payback period, and ROI — so you can see what real adoption is worth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Calculator inputs */}
            <div className="p-8 rounded-xl border" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)', boxShadow: 'var(--shadow-lg)' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-md flex items-center justify-center" style={{ background: 'rgba(37,99,235,0.1)' }}>
                  <Calculator className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold font-display" style={{ color: 'var(--color-text)' }}>Your Numbers</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <Label htmlFor="users" className="text-sm font-medium mb-1.5 block" style={{ color: 'var(--color-text)' }}>
                    Number of Copilot users
                  </Label>
                  <Input
                    id="users"
                    type="number"
                    min={1}
                    value={users}
                    onChange={(e) => setUsers(Math.max(1, parseInt(e.target.value) || 1))}
                    className="focus:border-primary focus:ring-2 focus:ring-[var(--color-primary-glow)]"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <Label htmlFor="hours" className="text-sm font-medium mb-1.5 block" style={{ color: 'var(--color-text)' }}>
                    Estimated hours saved per user per week
                  </Label>
                  <Input
                    id="hours"
                    type="number"
                    min={0.5}
                    step={0.5}
                    value={hoursSaved}
                    onChange={(e) => setHoursSaved(Math.max(0.5, parseFloat(e.target.value) || 0.5))}
                    className="focus:border-primary focus:ring-2 focus:ring-[var(--color-primary-glow)]"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <Label htmlFor="cost" className="text-sm font-medium mb-1.5 block" style={{ color: 'var(--color-text)' }}>
                    Average fully-loaded hourly cost ($)
                  </Label>
                  <Input
                    id="cost"
                    type="number"
                    min={1}
                    value={hourlyCost}
                    onChange={(e) => setHourlyCost(Math.max(1, parseInt(e.target.value) || 1))}
                    className="focus:border-primary focus:ring-2 focus:ring-[var(--color-primary-glow)]"
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl border text-center" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                  <DollarSign className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold font-display bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{formatCurrency(annualSavings)}</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>Annual Savings</p>
                </div>
                <div className="p-5 rounded-xl border text-center" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                  <Clock className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold font-display bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{paybackMonths} mo</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>Payback Period</p>
                </div>
                <div className="p-5 rounded-xl border text-center" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                  <TrendingUp className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold font-display bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{roi}%</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>Projected ROI</p>
                </div>
              </div>

              <div className="rounded-xl p-5 border" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                <p className="text-sm font-semibold mb-3" style={{ color: 'var(--color-text)' }}>Why this matters:</p>
                <ul className="space-y-2">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <p className="text-xs mt-3 italic" style={{ color: 'var(--color-text-faint)' }}>
                  Bring these numbers to your ESS Copilot Academy readiness session and we'll pressure‑test them against real-world adoption benchmarks.
                </p>
              </div>

              <div className="text-center">
                <p className="text-sm mb-3" style={{ color: 'var(--color-text-muted)' }}>
                  Like what you see? Let's build the plan to reach these numbers.
                </p>
                <Button variant="cta" size="lg" className="group" asChild>
                  <a href="https://outlook.office365.com/book/ESSCopilotAdoptionConsultation@yourorg.com" target="_blank" rel="noopener noreferrer">
                    Book a Copilot Readiness Session
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
