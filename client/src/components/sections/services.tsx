import { SiWordpress } from "react-icons/si";
import { ShoppingCart, Gauge, Puzzle, Cloud, Settings } from "lucide-react";

const services = [
  {
    icon: SiWordpress,
    title: "WordPress Theme Development",
    description: "Custom WordPress themes built from scratch with pixel-perfect designs, responsive layouts, and optimized performance for any business need.",
    gradient: "from-primary to-accent",
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce Setup",
    description: "Complete e-commerce solutions with WooCommerce, including payment gateways, inventory management, and conversion optimization.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Gauge,
    title: "Speed Optimization",
    description: "Boost your website performance with advanced caching, image optimization, and code minification to achieve lightning-fast load times.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Puzzle,
    title: "Plugin Development",
    description: "Custom WordPress plugins tailored to your specific requirements, extending functionality while maintaining security and performance.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Cloud,
    title: "Site Migration & Backup",
    description: "Seamless website migrations and reliable backup solutions to ensure your data is always safe and accessible when you need it.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description: "Ongoing website maintenance, security updates, and technical support to keep your site running smoothly and securely.",
    gradient: "from-primary to-accent",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive WordPress solutions to power your digital presence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.title}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5" 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="text-white text-2xl h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
