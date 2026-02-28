import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ScrollProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

const scrollProjects: ScrollProject[] = [
  {
    id: '1',
    title: 'Worknix AI',
    tagline: 'Employee Scheduling Revolution',
    description: 'AI-powered scheduling system reducing conflicts by 94% with ML-driven predictive analytics',
    image: 'linear-gradient(135deg, #D4AF37 0%, #050505 100%)',
    technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow'],
    links: {
      github: 'https://github.com',
      demo: '#',
    },
  },
  {
    id: '2',
    title: 'Protocol Guardian',
    tagline: 'Enterprise Security Framework',
    description: 'Zero-trust network security with real-time threat detection and advanced cryptography',
    image: 'linear-gradient(135deg, #C0C0C0 0%, #050505 100%)',
    technologies: ['Go', 'Rust', 'Kubernetes', 'Docker'],
    links: {
      github: 'https://github.com',
    },
  },
  {
    id: '3',
    title: 'QuantumSync',
    tagline: 'Real-Time Data Synchronization',
    description: 'Distributed sync engine with sub-100ms latency and eventual consistency',
    image: 'linear-gradient(135deg, #D4AF37 0%, #C0C0C0 50%, #050505 100%)',
    technologies: ['TypeScript', 'WebSocket', 'CRDT', 'WebRTC'],
    links: {
      github: 'https://github.com',
      demo: '#',
    },
  },
  {
    id: '4',
    title: 'Neural Canvas',
    tagline: 'Generative AI Platform',
    description: 'Advanced image generation and manipulation using state-of-the-art diffusion models',
    image: 'linear-gradient(135deg, #A68A2E 0%, #050505 100%)',
    technologies: ['Python', 'PyTorch', 'FastAPI', 'React'],
    links: {
      github: 'https://github.com',
    },
  },
];

interface ProjectScrollCardProps {
  project: ScrollProject;
  isActive: boolean;
}

const ProjectScrollCard: React.FC<ProjectScrollCardProps> = ({ project, isActive }) => {
  return (
    <motion.div
      className="relative flex-shrink-0 w-screen md:w-[600px] h-[500px] rounded-lg overflow-hidden group"
      animate={{
        scale: isActive ? 1.05 : 0.95,
        opacity: isActive ? 1 : 0.7,
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      {/* Background Image/Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: project.image,
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-200 via-obsidian-200/50 to-transparent" />

      {/* Content */}
      <motion.div
        className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isActive ? 1 : 0.6, y: isActive ? 0 : 20 }}
        transition={{ duration: 0.4 }}
      >
        <div>
          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-gold-accent mb-2 leading-tight">
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-lg text-silver-electric mb-4">{project.tagline}</p>

          {/* Description */}
          <p className="text-base text-text-muted mb-6 leading-relaxed max-w-md">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tech) => (
              <motion.span
                key={tech}
                className="px-3 py-1 rounded-full text-sm font-mono text-[#00FF00] bg-[#00FF00]/10 border border-[#00FF00]/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isActive ? 1 : 0.6, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.links.github && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold-accent text-obsidian-200 font-bold hover:bg-gold-light transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                Code
              </motion.a>
            )}
            {project.links.demo && (
              <motion.a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive inline-flex items-center gap-2 px-6 py-3 rounded-lg glass-gold font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} />
                Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gold-accent/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none rounded-lg transition-opacity duration-300"
      />
    </motion.div>
  );
};

const HorizontalProjectScroll: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScroll, setCanScroll] = useState(true);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!scrollContainerRef.current || !canScroll) return;

      e.preventDefault();

      const isScrollingRight = e.deltaY > 0 || e.deltaX > 0;
      const newIndex = isScrollingRight
        ? Math.min(activeIndex + 1, scrollProjects.length - 1)
        : Math.max(activeIndex - 1, 0);

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
        setCanScroll(false);
        setTimeout(() => setCanScroll(true), 800);
      }
    };

    const container = scrollContainerRef.current;
    container?.addEventListener('wheel', handleWheel, { passive: false });

    return () => container?.removeEventListener('wheel', handleWheel);
  }, [activeIndex, canScroll]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative py-20 bg-obsidian-200 overflow-hidden">
      <div className="container-custom mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-text">Featured </span>
            <span className="text-gold-accent">Projects</span>
          </h2>
          <p className="text-lg text-text-muted">
            Cinematic journey through elite engineering solutions. Scroll or click to explore.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="relative h-[500px] overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollBehavior: 'smooth',
        }}
      >
        <div className="flex gap-6 px-4 md:px-8">
          {scrollProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              animate={{
                opacity: idx === activeIndex ? 1 : 0.5,
              }}
              transition={{ duration: 0.4 }}
            >
              <ProjectScrollCard project={project} isActive={idx === activeIndex} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex items-center justify-center gap-4 mt-12">
        {scrollProjects.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`interactive w-3 h-3 rounded-full transition-all duration-300 ${
              idx === activeIndex
                ? 'bg-gold-accent w-8'
                : 'bg-gold-accent/30 hover:bg-gold-accent/60'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          />
        ))}
      </div>

      {/* Scroll Instructions */}
      <motion.div
        className="text-center mt-8 text-text-muted text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        💡 Scroll or use navigation dots to explore projects
      </motion.div>
    </section>
  );
};

export default HorizontalProjectScroll;
