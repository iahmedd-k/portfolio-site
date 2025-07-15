
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Tech Stack Section */}
      <TechStack />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
