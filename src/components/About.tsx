
import { Code2, Heart, Lightbulb, Rocket, Users, Building, Stethoscope, ShoppingCart, Globe } from "lucide-react";

const About = () => {
  const capabilities = [
    {
      icon: Building,
      title: "SaaS MVP Development",
      description: "Build scalable Software-as-a-Service platforms with user authentication, subscription management, and real-time features",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Stethoscope,
      title: "Healthcare Solutions",
      description: "Create secure healthcare applications with patient management, appointment booking, and HIPAA-compliant data handling",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Platforms",
      description: "Develop full-featured online stores with payment integration, inventory management, and customer analytics",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Globe,
      title: "Business Websites",
      description: "Design professional corporate websites with CMS integration, SEO optimization, and lead generation forms",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const specialties = [
    {
      title: "Full-Stack Web Applications",
      description: "Building complete web solutions from database design to user interface with modern technologies",
      icon: Code2,
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Modern Frontend Development",
      description: "Creating responsive, interactive user interfaces with the latest React patterns and styling frameworks",
      icon: Lightbulb,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend & API Development",
      description: "Designing scalable server architectures, RESTful APIs, and database management systems",
      icon: Rocket,
      technologies: ["Express.js", "MongoDB", "JWT", "Socket.io"]
    },
    {
      title: "User-Centered Design",
      description: "Focusing on creating intuitive, accessible experiences that users love to interact with",
      icon: Heart,
      technologies: ["UI/UX Design", "Responsive Design", "Accessibility", "Performance"]
    }
  ];

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that stands the test of time."
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Prioritizing user experience and accessibility in every project I build."
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Constantly learning new technologies and implementing cutting-edge solutions."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer who specializes in creating modern web applications 
            that solve real-world problems. I focus on building scalable, user-friendly solutions 
            using the latest technologies.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="glass glass-hover p-6 sm:p-8 rounded-2xl text-center group transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">{value.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* What I Can Build Section */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12 sm:mb-16">
            What I Can <span className="gradient-text">Build</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {capabilities.map((capability, index) => (
              <div 
                key={capability.title}
                className="glass glass-hover p-6 sm:p-8 rounded-2xl group transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${capability.color} rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <capability.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">{capability.title}</h4>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specialties Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12 sm:mb-16">
            Technical <span className="gradient-text">Specialties</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {specialties.map((item, index) => (
              <div 
                key={item.title}
                className="glass glass-hover p-6 sm:p-8 rounded-2xl group transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">{item.title}</h4>
                <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 sm:px-3 sm:py-1 bg-white/10 rounded-full text-xs sm:text-sm text-cyan-400 border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
