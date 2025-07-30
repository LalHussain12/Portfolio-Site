import { useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Services from "@/components/sections/services";
import Process from "@/components/sections/process";
import Portfolio from "@/components/sections/portfolio";
import Testimonials from "@/components/sections/testimonials";
import Pricing from "@/components/sections/pricing";
import Blog from "@/components/sections/blog";
import FAQ from "@/components/sections/faq";
import Contact from "@/components/sections/contact";
import { initAOS } from "@/lib/aos";

export default function Home() {
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
