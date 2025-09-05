import React from 'react';
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
    <section id="certifications" className="section-padding bg-gradient-to-b from-[#0d1015] to-[#0b0c10]">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-[#F5F5F5] mb-8">
            Elite Certifications
          </h2>
          <p className="text-2xl text-[#F5F5F5]/70 max-w-3xl mx-auto">
            Industry-recognized credentials demonstrating mastery across multiple domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group glass rounded-2xl p-8 hover:glow-gradient transition-all duration-500 hover:-translate-y-3"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 glass rounded-2xl p-3 glow-gold group-hover:glow-cyan transition-all duration-300">
                  <img
                    src={cert.image}
                    alt={cert.issuer}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-6 h-6 text-[#FFD700]" />
                    <span className="text-[#FFD700] font-semibold">{cert.level}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#F5F5F5] group-hover:text-gradient transition-colors duration-300">
                    {cert.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-[#F5F5F5]/90 font-semibold text-lg">{cert.issuer}</p>
                <div className="flex items-center space-x-3 text-[#F5F5F5]/60">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#00FFFF]" />
                  <span className="text-[#00FFFF] font-semibold">Verified</span>
                </div>
                <button className="p-3 glass rounded-xl hover:glow-gradient transition-all duration-300 group">
                  <ExternalLink className="w-5 h-5 text-[#F5F5F5] group-hover:text-[#FFD700] transition-colors duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;