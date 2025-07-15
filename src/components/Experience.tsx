
import { Building2, Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2023 - Present",
      type: "Full-time",
      description: "Led development of enterprise-level web applications using Next.js and Node.js. Managed a team of 5 developers and improved application performance by 40%.",
      achievements: [
        "Architected and developed 3 major client applications",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      company: "StartupHub Inc.",
      location: "Remote",
      period: "2022 - 2023",
      type: "Full-time",
      description: "Developed and maintained multiple client projects using MERN stack. Collaborated with design teams to create pixel-perfect user interfaces.",
      achievements: [
        "Built 5+ full-stack applications from scratch",
        "Reduced page load times by 50% through optimization",
        "Integrated third-party APIs and payment systems"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe"]
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "DesignStudio Pro",
      location: "New York, NY",
      period: "2021 - 2022",
      type: "Full-time",
      description: "Specialized in creating responsive and interactive user interfaces. Worked closely with UX designers to implement modern design systems.",
      achievements: [
        "Converted 20+ Figma designs to responsive web pages",
        "Improved accessibility scores to AA compliance",
        "Established component library used across 10+ projects"
      ],
      technologies: ["React", "JavaScript", "Sass", "Figma", "Storybook"]
    },
    {
      id: 4,
      title: "Junior Web Developer",
      company: "WebAgency Plus",
      location: "Los Angeles, CA",
      period: "2020 - 2021",
      type: "Full-time",
      description: "Started my professional journey building websites and learning modern web development practices. Gained experience in various technologies and frameworks.",
      achievements: [
        "Developed 15+ client websites",
        "Learned and implemented responsive design principles",
        "Collaborated with senior developers on large projects"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: "🏆"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      year: "2022",
      icon: "⚛️"
    },
    {
      name: "Node.js Application Developer",
      issuer: "OpenJS Foundation",
      year: "2022",
      icon: "🟢"
    },
    {
      name: "Google Analytics Certified",
      issuer: "Google",
      year: "2021",
      icon: "📊"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey through various roles has shaped me into a versatile developer 
            with experience across different industries and team sizes.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-violet-600"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className="relative pl-20 pb-12 last:pb-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline node */}
                <div className="absolute left-6 w-5 h-5 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-full border-4 border-background"></div>
                
                {/* Experience card */}
                <div className="glass glass-hover p-8 rounded-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-cyan-400 mb-2">
                        <Building2 className="w-4 h-4" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <span className="px-2 py-1 bg-violet-500/20 text-violet-400 rounded-full text-xs">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-cyan-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-gray-300 flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 glass border border-white/20 rounded-full text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-12">
            Certifications & <span className="gradient-text">Achievements</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.name}
                className="glass glass-hover p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 tech-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 className="text-white font-semibold mb-2">{cert.name}</h4>
                <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                <span className="text-cyan-400 text-sm font-mono">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
