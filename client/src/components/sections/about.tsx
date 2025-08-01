import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { SiWordpress, SiPhp, SiJavascript, SiReact, SiCss3 } from "react-icons/si";
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
              src="https://scontent.fkhi21-1.fna.fbcdn.net/v/t39.30808-6/481675307_3994814360840005_2738850512555203850_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=9tVQOmv4vTwQ7kNvwHOGtXQ&_nc_oc=Adm_S_TyYGzke4lsM2uumVWCHDmShfUKxvHDU191-xsji0IEsWJcCA4SjY24YBNjaRwOU6RcYoKnf-2Dllkqv2n7&_nc_zt=23&_nc_ht=scontent.fkhi21-1.fna&_nc_gid=BN4-ZtsJsoiUxwhuGdg_Qg&oh=00_AfQS9IwuyMJD4YIAurDSloaGc_gKpYMXIPAcxWJk7l_DZQ&oe=68927D25" 
              alt="Professional headshot of Lal Hussain" 
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
            />
          </div>
          
          <div className="space-y-8" data-aos="fade-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Hi there! I'm Lal Hussain</h3>
              <p className="text-muted-foreground leading-relaxed">
               With 3+ years of experience in WordPress development, I build high-performance, visually compelling websites that deliver real business results. I focus 
               on clean code, modern practices, and user-centered design to ensure fast, scalable, and future-ready solutions.

              </p>
              <p className="text-muted-foreground leading-relaxed">
                From custom themes to e-commerce and speed optimization, I bring technical expertise and creative problem-solving to every project. My goal is to empower
                businesses with reliable WordPress solutions and long-term support that grow with their success.
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
                  <SiCss3 className="text-primary text-xl" />
                  <span className="text-foreground">CSS</span>
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
            {/* <div className="pt-4">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
