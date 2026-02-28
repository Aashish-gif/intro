import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    <section id="contact" className="section-padding bg-obsidian-200">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-text mb-8">
            Let's <span className="text-gold-accent">Connect</span>
          </h2>
          <p className="text-2xl text-text-muted max-w-3xl mx-auto">
            Ready to discuss your next breakthrough project? Let's architect something extraordinary together.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <motion.div
            className="glass-gold rounded-2xl p-10 hover:glow-gold-strong transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <h3 className="text-3xl font-bold text-gold-accent mb-8">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
                  <label className="block text-text font-semibold mb-3">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-text/5 border border-gold-accent/20 rounded-xl text-text placeholder-text/50 focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/20 focus:outline-none transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.15 }} viewport={{ once: true }}>
                  <label className="block text-text font-semibold mb-3">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-text/5 border border-silver-electric/20 rounded-xl text-text placeholder-text/50 focus:border-silver-electric focus:ring-2 focus:ring-silver-electric/20 focus:outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </motion.div>
              </div>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
                <label className="block text-text font-semibold mb-3">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-text/5 border border-gold-accent/20 rounded-xl text-text placeholder-text/50 focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/20 focus:outline-none transition-all duration-300"
                  placeholder="Project inquiry"
                  required
                />
              </motion.div>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.25 }} viewport={{ once: true }}>
                <label className="block text-text font-semibold mb-3">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-6 py-4 bg-text/5 border border-silver-electric/20 rounded-xl text-text placeholder-text/50 focus:border-silver-electric focus:ring-2 focus:ring-silver-electric/20 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="interactive group w-full flex items-center justify-center space-x-3 px-10 py-5 bg-gold-accent text-obsidian-200 rounded-full font-bold glow-gold-strong hover:glow-gold-strong transition-all duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                <span className="text-lg">Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="glass-gold rounded-2xl p-10 hover:glow-gold-strong transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              <h3 className="text-3xl font-bold text-gold-accent mb-8">Get in Touch</h3>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-6 group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-16 h-16 glass-gold rounded-2xl flex items-center justify-center group-hover:glow-gold transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <info.icon className="w-8 h-8 text-gold-accent group-hover:text-silver-electric transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <p className="text-text-muted text-sm font-medium">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-text font-semibold text-lg hover:text-gold-accent transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-text font-semibold text-lg">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass-gold rounded-2xl p-10 hover:glow-gold-strong transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <h3 className="text-2xl font-bold text-gold-accent mb-8">Connect on Social</h3>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="interactive group w-16 h-16 glass-gold rounded-2xl flex items-center justify-center transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className={`w-8 h-8 transition-colors duration-300 ${
                      social.color === 'gold' 
                        ? 'text-gold-accent group-hover:text-silver-electric' 
                        : 'text-silver-electric group-hover:text-gold-accent'
                    }`} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass-gold rounded-2xl p-10 hover:glow-gold-strong transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <h3 className="text-2xl font-bold text-gold-accent mb-6">Availability Status</h3>
              <div className="flex items-center space-x-4 mb-4">
                <motion.div
                  className="w-4 h-4 bg-silver-electric rounded-full glow-silver"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
                <span className="text-text font-semibold text-lg">
                  Available for Elite Opportunities
                </span>
              </div>
              <p className="text-text-muted text-lg">
                Open to high-impact positions and premium consulting projects
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
