import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does it take to design a website?",
      answer: "The timeline depends on the complexity and scope of the project. Typically, a standard website takes 2–4 weeks, while more complex projects may take 6–8 weeks.",
    },
    {
      question: "Do you offer revisions during the design process?",
      answer: "Yes! We provide multiple revision rounds to ensure the final design meets your expectations and aligns with your vision.",
    },
    {
      question: "What platforms do you use to build websites?",
      answer: "We work with industry-leading platforms such as WordPress, Webflow, Shopify, and other custom solutions tailored to your needs.",
    },
    {
      question: "Can you help improve my existing website?",
      answer: "Absolutely! We can redesign and optimize your current website to enhance its functionality, user experience, and overall performance.",
    },
    {
      question: "Do you provide SEO services?",
      answer: "Yes, SEO is a core part of our services. We optimize websites for search engines with on-page SEO, keyword strategies, and technical fixes to improve your visibility.",
    },
    {
      question: "What is the cost of your services?",
      answer: "Pricing depends on the project's scope and requirements. Contact us for a custom quote, and we'll provide a detailed breakdown.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes, we provide maintenance packages to keep your website updated, secure, and running smoothly after launch.",
    },
    {
      question: "What industries do you work with?",
      answer: "We work with businesses across various industries, including e-commerce, professional services, startups, and more. No matter your niche, we can create a solution tailored to you.",
    },
  ];

  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-foreground font-heading font-semibold py-5 hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
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

export default FAQSection;
