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
  const copilotCostPerUser = 30 * 12; // $30/month per user
  const totalCost = users * copilotCostPerUser;
  const roi = totalCost > 0 ? Math.round(((annualSavings - totalCost) / totalCost) * 100) : 0;
  const paybackMonths = annualSavings > 0 ? Math.max(1, Math.round((totalCost / annualSavings) * 12)) : 0;

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

  const benefits = [
    "Quantify the upside of higher Copilot adoption across your organization.",
    "Create a simple story leaders can understand — time saved and dollars saved.",
    "Set a measurable target you can use as a goal for the next 30–90 days.",
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Estimate Your Copilot ROI in Minutes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plug in your numbers to see what higher Copilot adoption could mean for your organization. Enter your user count, estimated time saved per person per week, and average hourly cost — the calculator shows your projected annual savings, payback period, and ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Calculator inputs */}
            <div className="bg-card p-8 rounded-xl border border-border shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Your Numbers</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <Label htmlFor="users" className="text-sm font-medium text-foreground mb-1.5 block">
                    Number of Copilot users
                  </Label>
                  <Input
                    id="users"
                    type="number"
                    min={1}
                    value={users}
                    onChange={(e) => setUsers(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                </div>
                <div>
                  <Label htmlFor="hours" className="text-sm font-medium text-foreground mb-1.5 block">
                    Estimated hours saved per user per week
                  </Label>
                  <Input
                    id="hours"
                    type="number"
                    min={0.5}
                    step={0.5}
                    value={hoursSaved}
                    onChange={(e) => setHoursSaved(Math.max(0.5, parseFloat(e.target.value) || 0.5))}
                  />
                </div>
                <div>
                  <Label htmlFor="cost" className="text-sm font-medium text-foreground mb-1.5 block">
                    Average fully-loaded hourly cost ($)
                  </Label>
                  <Input
                    id="cost"
                    type="number"
                    min={1}
                    value={hourlyCost}
                    onChange={(e) => setHourlyCost(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-card p-5 rounded-xl border border-border shadow-md text-center">
                  <DollarSign className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-primary">{formatCurrency(annualSavings)}</p>
                  <p className="text-xs text-muted-foreground mt-1">Annual Savings</p>
                </div>
                <div className="bg-card p-5 rounded-xl border border-border shadow-md text-center">
                  <Clock className="w-6 h-6 text-secondary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-secondary">{paybackMonths} mo</p>
                  <p className="text-xs text-muted-foreground mt-1">Payback Period</p>
                </div>
                <div className="bg-card p-5 rounded-xl border border-border shadow-md text-center">
                  <TrendingUp className="w-6 h-6 text-brand-green mx-auto mb-2" />
                  <p className="text-2xl font-bold text-brand-green">{roi}%</p>
                  <p className="text-xs text-muted-foreground mt-1">Projected ROI</p>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-5 border border-border">
                <p className="text-sm font-semibold text-foreground mb-3">Why this matters:</p>
                <ul className="space-y-2">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Like what you see? Let's build the plan to reach these numbers.
                </p>
                <Button variant="cta" size="lg" className="group" asChild>
                  <a href="#contact">
                    Book a Copilot Adoption Consultation
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
