import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { SiWordpress, SiPhp, SiJavascript, SiReact, SiMysql, SiHtml5, SiCss3, SiNodedotjs } from "react-icons/si";
import { Database, Server, Paintbrush, ShoppingCart, Gauge, Shield } from "lucide-react";

const technicalSkills = [
  { name: "WordPress", level: 95, icon: SiWordpress, color: "text-blue-600" },
  { name: "PHP", level: 90, icon: SiPhp, color: "text-purple-600" },
  { name: "JavaScript", level: 88, icon: SiJavascript, color: "text-yellow-500" },
  { name: "MySQL", level: 82, icon: SiMysql, color: "text-orange-600" },
  { name: "HTML5", level: 95, icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", level: 95, icon: SiCss3, color: "text-blue-500" },
];

const specializations = [
  {
    category: "WordPress Development",
    skills: ["Custom Theme Development", "Plugin Development", "WooCommerce", "ACF Integration", "Gutenberg Blocks", "REST API"],
    icon: SiWordpress,
    color: "from-blue-500 to-blue-600"
  },
  {
    category: "Frontend Technologies",
    skills: ["React.js", "Vue.js", "Tailwind CSS", "SASS/SCSS", "Bootstrap", "jQuery"],
    icon: Paintbrush,
    color: "from-pink-500 to-rose-500"
  },
  {
    category: "Backend & Database",
    skills: ["PHP", "Node.js", "MySQL", "PostgreSQL", "MongoDB", "Redis"],
    icon: Database,
    color: "from-green-500 to-emerald-600"
  },
  {
    category: "Performance & SEO",
    skills: ["Speed Optimization", "Core Web Vitals", "Technical SEO", "Caching", "CDN Setup", "Image Optimization"],
    icon: Gauge,
    color: "from-orange-500 to-amber-600"
  },
  {
    category: "E-commerce Solutions",
    skills: ["WooCommerce", "Shopify", "Payment Gateways", "Inventory Management", "Order Processing", "Analytics"],
    icon: ShoppingCart,
    color: "from-purple-500 to-violet-600"
  },
  {
    category: "Security & Maintenance",
    skills: ["Security Hardening", "Backup Solutions", "SSL Setup", "Malware Removal", "Updates & Maintenance", "Monitoring"],
    icon: Shield,
    color: "from-red-500 to-rose-600"
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical proficiency and specialized knowledge across the WordPress ecosystem
          </p>
        </div>

        {/* Technical Skills Progress Bars */}
        <div className="mb-20" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Technical Proficiency</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {technicalSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={skill.name} className="space-y-3" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <IconComponent className={`text-xl ${skill.color}`} />
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground font-semibold">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Specializations Grid */}
        <div data-aos="fade-up">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Areas of Specialization</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((spec, index) => {
              const IconComponent = spec.icon;
              return (
                <div 
                  key={spec.category}
                  className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${spec.color} rounded-xl flex items-center justify-center mb-4`}>
                    <IconComponent className="text-white text-xl h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-4">{spec.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {spec.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs bg-muted hover:bg-muted/80">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications & Experience Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8" data-aos="fade-up">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}