import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center geometric-bg overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00FFFF] rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#FFD700] rounded-full animate-pulse-slow opacity-80"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#00FFFF] rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-[#FFD700] rounded-full animate-pulse-slow opacity-70" style={{ animationDelay: '1s' }}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-[#00FFFF]/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-[#FFD700]/20 rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#00FFFF]/10 rounded-full animate-pulse-slow"></div>
        
        {/* Hexagonal Grid */}
        <div className="absolute top-10 right-10 hexagon opacity-20" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 left-10 hexagon opacity-15" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-20 hexagon opacity-25" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-[#F5F5F5] mb-6 leading-tight">
           Aashish Tejwani
            </h1>
            <div className="text-2xl md:text-3xl text-gradient font-semibold mb-4">
              Elite Innovator
            </div>
            <p className="text-xl text-[#F5F5F5]/80 max-w-4xl mx-auto leading-relaxed">
Architecting next-generation systems with efficient algorithms and high-precision solutions.              <br />
              <span className="text-gradient font-medium">Transforming complexity into elegance, data into intelligence.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="#projects"
              className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-[#FFD700] to-[#00FFFF] text-[#0b0c10] rounded-full font-bold hover:glow-gradient hover:scale-105 transition-all duration-300"
            >
              View Projects
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </a>
            <a
              href="https://drive.google.com/file/d/1CjHN8IxQO9W3t0TDMxyDhhUEpoIqrzj7/view?usp=sharing"
              className="group inline-flex items-center px-10 py-4 glass text-[#F5F5F5] rounded-full font-bold hover:glow-gradient hover:scale-105 transition-all duration-300"
            >
              Download Resume
              <Download className="ml-3 group-hover:translate-y-1 transition-transform duration-300" size={20} />
            </a>
          </div>

          <div className="flex items-center justify-center space-x-8">
            <a
              href="https://github.com/Aashish-gif"
              className="p-4 glass rounded-full text-[#F5F5F5] hover:text-[#FFD700] hover:glow-gold transition-all duration-300 hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/aashish-tejwani/"
              className="p-4 glass rounded-full text-[#F5F5F5] hover:text-[#00FFFF] hover:glow-cyan transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="tajcg29082024@gmail.com"
              className="p-4 glass rounded-full text-[#F5F5F5] hover:text-gradient hover:glow-gradient transition-all duration-300 hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;