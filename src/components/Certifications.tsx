import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
{
  "id": 1,
  "title": "AWS Certified Solutions Architect – Professional",
  "issuer": "Amazon Web Services",
  "date": "2024",
  "level": "Professional",
  "image": "https://aws.amazon.com/certification/certified-solutions-architect-professional/",
  "verified": true
}
,
    {
      id: 2,
      title: "Google Cloud Professional",
      issuer: "Google Cloud Platform",
      date: "2024",
      level: "Professional",
      image: "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=100",
      verified: true
    },
    {
      id: 3,
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2023",
      level: "Professional",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=100",
      verified: true
    },
    {
      id: 4,
      title: "Financial Risk Manager",
      issuer: "Global Association of Risk Professionals",
      date: "2023",
      level: "Professional",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=100",
      verified: true
    },
    {
      id: 5,
      title: "MongoDB Developer",
      issuer: "MongoDB University",
      date: "2023",
      level: "Associate",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100",
      verified: true
    },
    {
      id: 6,
      title: "React Developer",
      issuer: "Meta",
      date: "2022",
      level: "Professional",
      image: "https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=100",
      verified: true
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-gradient-to-b from-obsidian-100 to-obsidian-200">
      <div className="container-custom">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-text mb-8">
            Elite <span className="text-gold-accent">Certifications</span>
          </h2>
          <p className="text-2xl text-text-muted max-w-3xl mx-auto">
            Industry-recognized credentials demonstrating mastery across multiple domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="interactive group glass-gold rounded-2xl p-8 hover:glow-gold-strong transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <motion.div
                  className="w-20 h-20 glass-gold rounded-2xl p-3 glow-gold group-hover:glow-gold-strong transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <img
                    src={cert.image}
                    alt={cert.issuer}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-6 h-6 text-gold-accent" />
                    <span className="text-gold-accent font-semibold text-sm uppercase tracking-wide">{cert.level}</span>
                  </div>
                  <h3 className="text-xl font-bold text-text group-hover:text-gold-accent transition-colors duration-300">
                    {cert.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-text/90 font-semibold text-lg">{cert.issuer}</p>
                <div className="flex items-center space-x-3 text-text-muted">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gold-accent/20">
                <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
                  <CheckCircle className="w-5 h-5 text-silver-electric" />
                  <span className="text-silver-electric font-semibold text-sm">Verified</span>
                </motion.div>
                <motion.button
                  className="interactive p-3 glass-gold rounded-xl hover:glow-gold transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5 text-text group-hover:text-gold-accent transition-colors duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
