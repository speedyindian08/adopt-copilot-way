import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Do we need a specific license to use Copilot Academy?",
      answer: "Yes, employees must have an eligible Microsoft 365 license (E3/E5/Business Premium/Standard) and the Copilot add-on license to participate and benefit from the training."
    },
    {
      question: "How long does it take to see results (ROI)?",
      answer: "Our clients see results immediately. User adoption rates typically jump from 20% to over 85% within 30 days of completing the Academy, leading directly to the projected 353% ROI we help you track."
    },
    {
      question: "Does the training include prompt engineering?",
      answer: "Yes. The training is heavily focused on role-based prompt engineering playbooks, which is the key skill for maximizing Copilot's productivity features."
    },
    {
      question: "How does Copilot handle our company's sensitive data?",
      answer: "Copilot inherits all of your organization's existing security permissions and compliance settings within Microsoft 365. It will only access data that the user already has permission to view."
    },
    {
      question: "Is the Academy available for all departments?",
      answer: "Yes, the Academy includes specific role-based sessions tailored to address the unique use cases for departments like HR, Finance, Sales, and IT."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            Frequently Asked Questions about Copilot Adoption
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Get answers to common questions about the ESS Copilot Academy
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
