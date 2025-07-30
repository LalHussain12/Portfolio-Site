import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to build a WordPress website?",
    answer: "Timeline depends on project complexity. A basic website typically takes 1-2 weeks, while complex e-commerce or custom functionality projects can take 3-4 weeks. I provide detailed timelines during our initial consultation based on your specific requirements."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes! I offer comprehensive maintenance packages including security updates, performance monitoring, backups, and technical support. Basic support is included for the first month after launch, with extended support plans available."
  },
  {
    question: "Can you help migrate my existing website to WordPress?",
    answer: "Absolutely! I specialize in seamless website migrations from various platforms including Wix, Squarespace, Shopify, and custom HTML sites. The process includes content migration, design recreation, and SEO preservation to ensure zero downtime."
  },
  {
    question: "What's included in your WordPress development service?",
    answer: "My service includes custom theme development, responsive design, SEO optimization, security setup, performance optimization, content management training, and initial support. Specific inclusions depend on your chosen package."
  },
  {
    question: "Do you work with existing WordPress sites or only new projects?",
    answer: "I work with both! Whether you need a completely new website, redesign of an existing site, or just specific improvements like speed optimization or new features, I can help enhance your current WordPress installation."
  },
  {
    question: "How much does WordPress development cost?",
    answer: "Costs vary based on complexity and requirements. Basic sites start at $2,500, professional sites at $4,500, and enterprise solutions at $8,500+. I provide detailed quotes after understanding your specific needs during our consultation."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! All websites I develop are fully responsive and mobile-optimized. I follow mobile-first design principles to ensure your site looks and performs perfectly on all devices and screen sizes."
  },
  {
    question: "Can you integrate third-party tools and services?",
    answer: "Yes! I can integrate various tools including payment gateways, CRM systems, email marketing platforms, analytics tools, social media feeds, booking systems, and more. Most integrations are possible with WordPress's flexibility."
  },
  {
    question: "Do you provide training on how to use WordPress?",
    answer: "Yes! I include basic WordPress training with every project, covering content management, adding pages/posts, media management, and basic customization. Extended training sessions are available if needed."
  },
  {
    question: "What happens if something breaks after launch?",
    answer: "I provide 1 month of free support after launch to fix any issues. For ongoing peace of mind, I offer maintenance plans that include regular backups, security monitoring, and priority support for any problems that arise."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-6">
            <HelpCircle className="text-white h-8 w-8" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about WordPress development and my services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border/50"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-border/30 pt-4">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't see your question answered here? I'm happy to discuss your specific needs and provide detailed answers about your project.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({ top: offsetTop, behavior: "smooth" });
              }
            }}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Ask Your Question
          </button>
        </div>
      </div>
    </section>
  );
}