import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Is Microsoft Copilot safe and compliant for healthcare and regulated environments?",
      answer: "Yes — when deployed correctly. Copilot operates within your existing Microsoft 365 security perimeter and inherits your tenant's permissions, encryption, and compliance configurations. Our ESS Secure Copilot Blueprint™ ensures your deployment is aligned with HIPAA, SOC 2, HITRUST, and other regulatory frameworks before a single user goes live."
    },
    {
      question: "How do you prevent data oversharing and shadow AI usage?",
      answer: "We start with a comprehensive permissions and access audit to identify overshared data, misconfigured groups, and unprotected resources. We then configure data loss prevention (DLP) policies, tighten access controls, and establish governance guardrails — so Copilot only surfaces data each user is authorized to see. We also address shadow AI risk by giving employees a governed, productive path to use AI within policy."
    },
    {
      question: "What data does Copilot actually access in our tenant?",
      answer: "Copilot accesses the same data the individual user already has permission to view within Microsoft 365 — emails, files, chats, and calendar items. It does not access data outside the user's existing permissions. That's exactly why the permissions audit in Phase 1 of our Blueprint is critical: if permissions are misconfigured, Copilot will expose that gap."
    },
    {
      question: "How do you align Copilot with HIPAA, SOC 2, and internal policies?",
      answer: "During the Secure phase of our Blueprint, we review your compliance requirements, validate DLP and sensitivity label configurations, document governance controls, and ensure Copilot usage aligns with your existing compliance posture. The result is an auditor-ready governance plan your CISO and compliance team can stand behind."
    },
    {
      question: "How long does it take to see adoption and measurable productivity gains?",
      answer: "Our clients see measurable results within the first 30 days. Adoption rates typically jump from under 20% to over 85% within one month of completing the Academy. Productivity gains of 35% are typical among effective Copilot users. We provide real-time adoption dashboards so you can track progress from day one."
    },
    {
      question: "What licenses and prerequisites do we need?",
      answer: "Employees need an eligible Microsoft 365 license (E3, E5, Business Premium, or Business Standard) plus the Microsoft 365 Copilot add-on license. Before training begins, we conduct a readiness assessment to ensure your environment, permissions, and governance are properly configured — that's the Assess phase of our Blueprint."
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Answers to the questions compliance leaders and executives ask most about governed Copilot deployment.
          </p>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
