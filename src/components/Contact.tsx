import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tajcg29082024@gmail.com",
      href: "mailto:tajcg29082024@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6355423302",
      href: "tel:6355423302"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad,India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Aashish-gif",
      color: "cyan"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aashish-tejwani/",
      color: "gold"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "cyan"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-[#0b0c10]">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-[#F5F5F5] mb-8">
            Let's Connect
          </h2>
          <p className="text-2xl text-[#F5F5F5]/70 max-w-3xl mx-auto">
            Ready to discuss your next breakthrough project? Let's architect something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-10 hover:glow-gradient transition-all duration-300">
            <h3 className="text-3xl font-bold text-[#F5F5F5] mb-8">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#F5F5F5] font-semibold mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-[#F5F5F5]/5 border border-[#F5F5F5]/20 rounded-xl text-[#F5F5F5] placeholder-[#F5F5F5]/50 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 focus:outline-none transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#F5F5F5] font-semibold mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-[#F5F5F5]/5 border border-[#F5F5F5]/20 rounded-xl text-[#F5F5F5] placeholder-[#F5F5F5]/50 focus:border-[#00FFFF] focus:ring-2 focus:ring-[#00FFFF]/20 focus:outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#F5F5F5] font-semibold mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-[#F5F5F5]/5 border border-[#F5F5F5]/20 rounded-xl text-[#F5F5F5] placeholder-[#F5F5F5]/50 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 focus:outline-none transition-all duration-300"
                  placeholder="Project inquiry"
                  required
                />
              </div>

              <div>
                <label className="block text-[#F5F5F5] font-semibold mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-6 py-4 bg-[#F5F5F5]/5 border border-[#F5F5F5]/20 rounded-xl text-[#F5F5F5] placeholder-[#F5F5F5]/50 focus:border-[#00FFFF] focus:ring-2 focus:ring-[#00FFFF]/20 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center space-x-3 px-10 py-5 bg-gradient-to-r from-[#FFD700] to-[#00FFFF] text-[#0b0c10] rounded-full font-bold hover:glow-gradient hover:scale-105 transition-all duration-300"
              >
                <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                <span className="text-lg">Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-10">
            <div className="glass rounded-2xl p-10 hover:glow-gradient transition-all duration-300">
              <h3 className="text-3xl font-bold text-[#F5F5F5] mb-8">
                Get in Touch
              </h3>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-6 group">
                    <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center group-hover:glow-gold transition-all duration-300">
                      <info.icon className="w-8 h-8 text-[#FFD700] group-hover:text-[#00FFFF] transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-[#F5F5F5]/60 text-sm font-medium">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-[#F5F5F5] font-semibold text-lg hover:text-gradient transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[#F5F5F5] font-semibold text-lg">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-10 hover:glow-gradient transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-8">
                Connect on Social
              </h3>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`group w-16 h-16 glass rounded-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-2 ${
                      social.color === 'gold' ? 'hover:glow-gold' : 'hover:glow-cyan'
                    }`}
                  >
                    <social.icon className={`w-8 h-8 transition-colors duration-300 ${
                      social.color === 'gold' 
                        ? 'text-[#FFD700] group-hover:text-[#00FFFF]' 
                        : 'text-[#00FFFF] group-hover:text-[#FFD700]'
                    }`} />
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-10 hover:glow-gradient transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-6">
                Availability Status
              </h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-4 h-4 bg-[#00FFFF] rounded-full animate-pulse glow-cyan"></div>
                <span className="text-[#F5F5F5] font-semibold text-lg">
                  Available for Elite Opportunities
                </span>
              </div>
              <p className="text-[#F5F5F5]/60 text-lg">
                Open to high-impact positions and premium consulting projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;