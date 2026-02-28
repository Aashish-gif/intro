import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import TempleGeometryPattern from './TempleGeometryPattern';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian-200">
      {/* Temple Geometry Background */}
      <div className="absolute inset-0">
        <TempleGeometryPattern opacity={0.06} animated={true} />
      </div>

      {/* Gradient overlay circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-gold-accent/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-silver-electric/5 to-transparent rounded-full blur-3xl"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container-custom text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative line above headline */}
        <motion.div className="flex items-center justify-center mb-8" variants={itemVariants}>
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-gold-accent to-transparent w-32"
            variants={lineVariants}
          ></motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.div className="mb-8" variants={itemVariants}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-text mb-4 leading-tight tracking-tight">
            ENGINEERING LEGACY
          </h1>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-accent via-silver-electric to-gold-accent leading-tight tracking-tight">
            DESIGNING FUTURE
          </h2>
        </motion.div>

        {/* Subheadline */}
        <motion.p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed mb-12" variants={itemVariants}>
          Full-Stack Engineer merging structural logic with cultural soul. Architecting next-generation systems through efficient algorithms, high-precision solutions, and relentless attention to detail.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16" variants={itemVariants}>
          <motion.a
            href="#projects"
            className="interactive group inline-flex items-center px-12 py-4 bg-gold-accent text-obsidian-200 rounded-full font-bold relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gold-light"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
              style={{ zIndex: -1 }}
            />
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/1CjHN8IxQO9W3t0TDMxyDhhUEpoIqrzj7/view?usp=sharing"
            className="interactive group inline-flex items-center px-12 py-4 glass-gold rounded-full font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-3">
              Download Resume
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div className="flex items-center justify-center gap-6" variants={itemVariants}>
          <motion.a
            href="https://github.com/Aashish-gif"
            className="interactive p-4 glass rounded-full text-text hover:text-gold-accent transition-colors group"
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} className="group-hover:glow-gold" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/aashish-tejwani/"
            className="interactive p-4 glass rounded-full text-text hover:text-silver-electric transition-colors group"
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={24} className="group-hover:glow-silver" />
          </motion.a>
          <motion.a
            href="mailto:tajcg29082024@gmail.com"
            className="interactive p-4 glass rounded-full text-text hover:text-gold-accent transition-colors group"
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={24} className="group-hover:glow-gold" />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gold-accent rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-gold-accent rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
