import { ArrowDown, Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-72 h-72 bg-violet-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="relative mx-auto w-40 h-40 mb-8">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-violet-600 p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <img
                  src="/pf.jpg"
                  alt="Ahmed Khan"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Name */}
          <h2 className="text-xl md:text-2xl text-gray-400 font-medium animate-fade-in">
            Hi, I'm <span className="text-white font-semibold">Ahmed Khan</span>
          </h2>

          {/* Headline */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Full-Stack</span>
              <br />
              <span className="text-white">Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with the MERN stack and Next.js. Passionate about clean code,
              innovative solutions, and bringing ideas to life.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-slide-in-right">
            {[
              { Icon: Linkedin, href: "https://www.linkedin.com/in/iahmedd-k/", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:ahmedkhanofficials@gmail.com", label: "Email" },
              { Icon: MessageCircle, href: "https://wa.me/+923199463096", label: "WhatsApp" },
              { Icon: Github, href: "https://github.com/iahmedd-k", label: "GitHub" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover p-3 rounded-full group transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-gray-300 group-hover:text-cyan-400 transition-colors" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {/* Resume Button */}
            <a
              href="/ahmed-khan-resume.pdf"
              download
              className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>

            {/* Scroll to Contact */}
            <Button
              variant="outline"
              size="lg"
              className="glass glass-hover border-white/20 text-white px-8 py-3 rounded-full font-semibold hover:scale-105"
              onClick={scrollToContact}
            >
              Let’s Talk
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={scrollToContact}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Scroll to Contact section"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
