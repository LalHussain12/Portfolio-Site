import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { SiWordpress, SiPhp, SiJavascript, SiReact } from "react-icons/si";
import { ShoppingCart, Gauge } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional web experiences that drive business growth
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6" data-aos="fade-right">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
              alt="Professional headshot of Lal Hussain" 
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
            />
          </div>
          
          <div className="space-y-8" data-aos="fade-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Hi there! I'm Lal Hussain</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 5 years of experience in WordPress development, I specialize in creating 
                high-performance websites that not only look stunning but also deliver exceptional user experiences. 
                My approach combines technical expertise with creative problem-solving to build solutions that 
                drive real business results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about clean code, modern development practices, and staying up-to-date with 
                the latest web technologies. Whether you need a custom theme, e-commerce solution, or 
                performance optimization, I'm here to help bring your vision to life.
              </p>
            </div>
            
            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Core Expertise</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <SiWordpress className="text-primary text-xl" />
                  <span className="text-foreground">WordPress</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SiPhp className="text-primary text-xl" />
                  <span className="text-foreground">PHP</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SiJavascript className="text-primary text-xl" />
                  <span className="text-foreground">JavaScript</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SiReact className="text-primary text-xl" />
                  <span className="text-foreground">React</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ShoppingCart className="text-primary text-xl h-5 w-5" />
                  <span className="text-foreground">WooCommerce</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gauge className="text-primary text-xl h-5 w-5" />
                  <span className="text-foreground">Performance</span>
                </div>
              </div>
            </div>
            
            {/* Download CV Button */}
            <div className="pt-4">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
