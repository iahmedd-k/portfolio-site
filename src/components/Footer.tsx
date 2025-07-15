
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright and attribution */}
          <div className="text-center md:text-left">
            <p className="text-gray-300 mb-2">
              © {currentYear} John Doe. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start gap-1">
              Built with 
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              using Next.js & Tailwind CSS
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap gap-6 text-sm">
            <a 
              href="#about" 
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="glass glass-hover p-3 rounded-full transition-all duration-300 hover:scale-110 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" />
          </button>
        </div>

        {/* Additional footer content */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-400 text-sm">
            Designed and developed with passion for creating exceptional digital experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
