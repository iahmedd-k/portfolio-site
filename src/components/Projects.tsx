import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Anonymous Feedback Platform",
      description: "A secure anonymous feedback system allowing users to submit feedback without revealing their identity. Features real-time notifications and admin moderation.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Project Management Tool",
      description: "A comprehensive project management tool with team collaboration, task tracking, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "An interactive weather dashboard with location-based forecasts, maps integration, and historical data analysis.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Node.js", "OpenWeather API", "Chart.js", "Mapbox"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Cryptocurrency Tracker",
      description: "A real-time cryptocurrency tracking application with portfolio management and price alerts.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "CoinGecko API", "Chart.js", "LocalStorage"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, commenting system, and SEO optimization.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent freelance projects that showcase my skills in full-stack development,
            UI/UX design, and modern web technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2 group">
                <div className="relative overflow-hidden rounded-2xl glass border border-white/10 transition-all duration-300 hover:scale-105 tech-glow">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
                        <Play className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="glass border border-white/20 text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <Button 
                    className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="glass border-white/20 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            Other <span className="gradient-text">Projects</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div 
                key={project.id}
                className="glass glass-hover rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-105 tech-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 flex-1">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10 flex-1">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs glass border border-white/10 text-gray-400"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs glass border border-white/10 text-gray-400">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Want to see more of my work?</p>
          <Button 
            variant="outline" 
            size="lg"
            className="glass border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
