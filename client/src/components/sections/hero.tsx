import { Button } from "@/components/ui/button";
import { Eye, Handshake, Linkedin, Github, Twitter } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center hero-pattern pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8" data-aos="fade-right">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Hi, I'm <span className="gradient-text">Lal Hussain</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                WordPress Developer
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                I build fast, SEO-friendly WordPress sites that convert visitors into customers. 
                Let's bring your digital vision to life with clean code and stunning design.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("portfolio")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
              >
                <Eye className="mr-2 h-5 w-5" />
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
              >
                <Handshake className="mr-2 h-5 w-5" />
                Hire Me
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6 pt-8">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-2xl">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-2xl">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-2xl">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="relative" data-aos="fade-left">
            <img 
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern developer workspace with multiple monitors" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-card p-4 rounded-xl shadow-lg animate-pulse">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-card-foreground">Available for projects</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
