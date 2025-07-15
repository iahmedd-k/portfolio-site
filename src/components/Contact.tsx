import { useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_dnejzo5",
        "template_s2hw2h2j",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        "your_public_key"
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Something went wrong!",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ahmedkhanofficials@gmail.com",
      href: "mailto:ahmedkhanofficials@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 (319) 9463-096",
      href: "tel:+923199463096"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "i8, Islamabad, Pakistan",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/iahmedd-k",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/iahmedd-k/",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/iahmedd_k",
      color: "hover:text-cyan-400"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm always open to discussing new opportunities,
            creative projects, or just having a friendly chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you're looking to build a new application, need help with an existing project, 
                or want to discuss potential collaboration opportunities, I'd love to hear from you.
              </p>
            </div>

            { contactInfo.map((info, index) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-center gap-4 glass glass-hover p-4 rounded-xl hover:scale-105 transition"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-lg flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{info.label}</p>
                  <p className="text-white font-semibold">{info.value}</p>
                </div>
              </a>
            )) }

            {/* Social */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass p-3 rounded-xl text-gray-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white text-sm font-medium">Name *</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                    className="glass border-white/20 bg-white/5 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white text-sm font-medium">Email *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="you@example.com"
                    className="glass border-white/20 bg-white/5 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-white text-sm font-medium">Subject *</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                  className="glass border-white/20 bg-white/5 text-white placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-white text-sm font-medium">Message *</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or just say hi!"
                  className="glass border-white/20 bg-white/5 text-white placeholder:text-gray-400 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white py-3 hover:scale-105 transition"
              >
                {isSubmitting ? "Sending..." : (<><Send className="w-4 h-4 mr-2" /> Send Message</>)}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
