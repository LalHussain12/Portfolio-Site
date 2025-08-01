import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and personal websites",
    price: "$2,500",
    duration: "Starting from",
    icon: Zap,
    gradient: "from-blue-500 to-cyan-500",
    popular: false,
    features: [
      "Custom WordPress theme",
      "Responsive design",
      "Up to 5 pages",
      "Basic SEO setup",
      "Contact form integration",
      "Social media integration",
      "1 month support",
      "Mobile optimization"
    ],
    deliveryTime: "1-2 weeks",
    revisions: "3 revisions included"
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses with advanced needs",
    price: "$4,500",
    duration: "Starting from", 
    icon: Star,
    gradient: "from-purple-500 to-pink-500",
    popular: true,
    features: [
      "Custom WordPress theme & plugins",
      "Advanced responsive design", 
      "Up to 15 pages",
      "Advanced SEO optimization",
      "E-commerce integration (WooCommerce)",
      "Blog functionality",
      "Performance optimization",
      "Security hardening",
      "3 months support",
      "Google Analytics setup",
      "Social media integration",
      "Newsletter integration"
    ],
    deliveryTime: "2-3 weeks",
    revisions: "5 revisions included"
  },
  {
    name: "Enterprise",
    description: "Complete solution for large businesses and agencies",
    price: "$8,500",
    duration: "Starting from",
    icon: Crown,
    gradient: "from-orange-500 to-red-500", 
    popular: false,
    features: [
      "Fully custom WordPress solution",
      "Multi-site management",
      "Advanced e-commerce features",
      "Custom plugin development",
      "API integrations",
      "Advanced security measures",
      "Performance optimization",
      "SEO & conversion optimization",
      "6 months support",
      "Priority support",
      "Training & documentation",
      "Ongoing maintenance plan",
      "Third-party integrations",
      "Custom admin dashboard"
    ],
    deliveryTime: "3-4 weeks",
    revisions: "Unlimited revisions"
  }
];

const additionalServices = [
  { name: "Speed Optimization", price: "$500", description: "Boost your site speed by 50-70%" },
  { name: "SEO Audit & Setup", price: "$400", description: "Comprehensive SEO analysis and implementation" },
  { name: "Security Hardening", price: "$300", description: "Advanced security measures and monitoring" },
  { name: "Content Migration", price: "$250", description: "Safe migration of existing content" },
  { name: "Maintenance (Monthly)", price: "$150", description: "Updates, backups, and monitoring" },
  { name: "Custom Plugin Development", price: "$800", description: "Tailored functionality for your needs" }
];

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your project. All prices include design, development, and initial support.
          </p>
        </div>

        {/* Main Pricing Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div 
                key={plan.name}
                className={`relative bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-primary scale-105' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="text-white text-2xl h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.duration}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start space-x-3">
                      <Check className="text-accent h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-6 mb-6">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Delivery Time:</span>
                    <span className="font-medium">{plan.deliveryTime}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Revisions:</span>
                    <span className="font-medium">{plan.revisions}</span>
                  </div>
                </div>

                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div data-aos="fade-up">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Additional Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={service.name}
                className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-foreground">{service.name}</h4>
                  <span className="font-bold text-primary">{service.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Note */}
        <div className="mt-16 text-center bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl" data-aos="fade-up">
          <h3 className="text-xl font-bold text-foreground mb-4">Need a Custom Quote?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every project is unique. Contact me for a personalized quote based on your specific requirements and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToContact} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Request Custom Quote
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}