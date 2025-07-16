
import { 
  Code2, 
  Database, 
  Globe, 
  Layers, 
  Server, 
  Smartphone,
  Palette,
  Shield,
  Zap
} from "lucide-react";

const TechStack = () => {
  const techCategories = [
    {
      title: "Frontend",
      icon: Globe,
      color: "from-cyan-500 to-blue-600",
      technologies: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-500 to-emerald-600",
      technologies: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "REST APIs", level: 92 },
        { name: "GraphQL", level: 78 }
      ]
    },
    {
      title: "Database",
      icon: Database,
      color: "from-purple-500 to-violet-600",
      technologies: [
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 82 },
        { name: "Prisma", level: 85 },
        { name: "Redis", level: 75 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: Zap,
      color: "from-orange-500 to-red-600",
      technologies: [
        { name: "Git & GitHub", level: 95 },
        { name: "Docker", level: 80 },
        { name: "Vercel", level: 88 },
        { name: "AWS", level: 72 }
      ]
    }
  ];

  const specialties = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive, accessible, and performant user interfaces"
    },
    {
      icon: Layers,
      title: "Full-Stack Architecture",
      description: "End-to-end application development with scalable solutions"
    },
    {
      icon: Palette,
      title: "UI/UX Implementation",
      description: "Pixel-perfect designs with smooth animations and interactions"
    },
    {
      icon: Shield,
      title: "Security & Performance",
      description: "Optimized applications with robust security practices"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I work with cutting-edge technologies to build modern, scalable, and performant applications
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {specialties.map((specialty, index) => (
            <div 
              key={specialty.title}
              className="glass glass-hover p-6 rounded-2xl text-center group transition-all duration-300 hover:scale-105 tech-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <specialty.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{specialty.title}</h3>
              <p className="text-gray-400 text-sm">{specialty.description}</p>
            </div>
          ))}
        </div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="glass glass-hover p-6 rounded-2xl group transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div key={tech.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{tech.name}</span>
                      <span className="text-cyan-400 text-sm font-mono">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${tech.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (techIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        
          </div>
          
    
    </section>
  );
};

export default TechStack;
