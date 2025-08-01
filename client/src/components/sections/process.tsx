import { MessageSquare, Lightbulb, Code, Rocket, CheckCircle, RefreshCw } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description: "We start with a detailed discussion about your goals, target audience, and project requirements. I'll analyze your current situation and provide expert recommendations.",
    icon: MessageSquare,
    duration: "1-2 Days",
    deliverables: ["Project brief", "Technical analysis", "Timeline & budget"]
  },
  {
    number: "02", 
    title: "Strategy & Planning",
    description: "Based on our consultation, I create a comprehensive project plan including wireframes, technical architecture, and content strategy tailored to your needs.",
    icon: Lightbulb,
    duration: "2-3 Days",
    deliverables: ["Wireframes", "Technical specs", "Content strategy"]
  },
  {
    number: "03",
    title: "Design & Development", 
    description: "The core development phase where I build your custom WordPress solution with clean code, responsive design, and optimal performance in mind.",
    icon: Code,
    duration: "1-3 Weeks",
    deliverables: ["Custom theme/plugin", "Responsive design", "Core functionality"]
  },
  {
    number: "04",
    title: "Testing & Optimization",
    description: "Comprehensive testing across devices and browsers, performance optimization, SEO setup, and security hardening to ensure everything works perfectly.",
    icon: CheckCircle,
    duration: "2-3 Days", 
    deliverables: ["Quality assurance", "Performance optimization", "SEO setup"]
  },
  {
    number: "05",
    title: "Launch & Deployment",
    description: "Smooth deployment to your hosting environment, domain setup, SSL configuration, and final checks to ensure your site is ready for visitors.",
    icon: Rocket,
    duration: "1 Day",
    deliverables: ["Live deployment", "SSL setup", "Final testing"]
  },
  {
    number: "06",
    title: "Support & Maintenance",
    description: "Ongoing support, regular updates, security monitoring, and performance maintenance to keep your website running smoothly and securely.",
    icon: RefreshCw,
    duration: "Ongoing",
    deliverables: ["24/7 monitoring", "Regular updates", "Technical support"]
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">My Development Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery every time
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden lg:block"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={step.number}
                  className="relative flex flex-col lg:flex-row items-start lg:items-center gap-8"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  {/* Step Number & Icon */}
                  <div className="flex items-center gap-6 lg:w-80 flex-shrink-0">
                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                    <div className="hidden lg:block w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                      <IconComponent className="text-primary h-6 w-6" />
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 bg-muted/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                      <div className="flex items-center gap-4">
                        <div className="lg:hidden w-8 h-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="text-primary h-4 w-4" />
                        </div>
                        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {step.duration}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Deliverables:</h4>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable) => (
                          <span 
                            key={deliverable}
                            className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your requirements and create a custom development plan that brings your vision to life.
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
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}