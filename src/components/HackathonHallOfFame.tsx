import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Github, ExternalLink, X } from 'lucide-react';

interface ProjectData {
  id: string;
  name: string;
  hackathon: string;
  year: number;
  placement: string;
  mission: string;
  architecture: string[];
  victory: string;
  description: string;
  techStack: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

const projectsData: ProjectData[] = [
  {
    id: '1',
    name: 'Worknix AI',
    hackathon: 'YourHack 2024',
    year: 2024,
    placement: '1st Place',
    mission: 'Intelligent employee scheduling with AI-powered predictive analytics',
    architecture: 'React, Node.js, ML Pipeline',
    victory: 'Won Best Innovation Award for real-time optimization algorithm',
    description: 'Revolutionary scheduling system that reduces employee conflicts by 94% using machine learning and constraint satisfaction.',
    techStack: ['React 19', 'Node.js', 'MongoDB', 'TensorFlow', 'AWS'],
    links: {
      github: 'https://github.com/Aashish-gif',
      demo: '#',
    },
  },
  {
    id: '2',
    name: 'Protocol Guardian',
    hackathon: 'SecureHack 2024',
    year: 2024,
    placement: '2nd Place',
    mission: 'Zero-trust network security framework with real-time threat detection',
    architecture: 'Go, Rust, Kubernetes',
    victory: 'Best Security Implementation award for advanced cryptography',
    description: 'Enterprise-grade security system detecting anomalies across distributed networks with <50ms latency.',
    techStack: ['Go', 'Rust', 'Kubernetes', 'Docker', 'gRPC'],
    links: {
      github: 'https://github.com/Aashish-gif',
    },
  },
  {
    id: '3',
    name: 'QuantumSync',
    hackathon: 'TechCrunch 2023',
    year: 2023,
    placement: '3rd Place',
    mission: 'Real-time data synchronization across edge devices',
    architecture: 'TypeScript, WebSocket, IndexedDB',
    victory: 'Best Performance award for sub-100ms sync latency',
    description: 'Distributed sync engine achieving eventual consistency without sacrificing performance.',
    techStack: ['TypeScript', 'WebSocket', 'WebRTC', 'CRDT'],
    links: {
      github: 'https://github.com/Aashish-gif',
    },
  },
];

interface ProjectCardProps {
  project: ProjectData;
  onExpand: (project: ProjectData) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onExpand }) => {
  return (
    <motion.button
      onClick={() => onExpand(project)}
      className="interactive relative group h-full text-left rounded-lg overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="glass-elevated p-8 h-full flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-2xl font-bold text-gold-accent mb-2">{project.name}</h3>
              <p className="text-sm text-text-muted">{project.hackathon}</p>
            </div>
            <Trophy className="text-gold-accent" size={24} />
          </div>
          <div className="h-1 w-16 bg-gradient-to-r from-gold-accent to-transparent rounded"></div>
        </div>

        {/* Placement Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-accent/10 border border-gold-accent/30 mb-6 w-fit"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Trophy size={16} className="text-gold-accent" />
          <span className="text-sm font-bold text-gold-accent">{project.placement}</span>
        </motion.div>

        {/* Mission */}
        <p className="text-base text-text-muted mb-6 leading-relaxed flex-grow">
          {project.mission}
        </p>

        {/* Tech Stack Preview */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-silver-electric/10 border border-silver-electric/20 text-silver-electric"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-xs px-3 py-1 rounded-full bg-gold-accent/10 border border-gold-accent/20 text-gold-accent">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Hover CTA */}
        <motion.div
          className="flex items-center gap-2 text-gold-accent font-semibold text-sm opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
        >
          Expand to View Details →
        </motion.div>
      </div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-br from-gold-accent/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

interface ExpandedViewProps {
  project: ProjectData;
  onClose: () => void;
}

const ExpandedView: React.FC<ExpandedViewProps> = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <motion.div
        className="relative z-10 glass-elevated rounded-lg max-w-2xl w-full p-8 max-h-[80vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-gold-accent/10 rounded-lg transition-colors"
        >
          <X size={24} className="text-text-muted hover:text-gold-accent" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Trophy size={32} className="text-gold-accent mt-1" />
            <div>
              <h2 className="text-4xl font-bold text-gold-accent mb-2">{project.name}</h2>
              <p className="text-lg text-text-muted">{project.hackathon} • {project.year}</p>
            </div>
          </div>

          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-accent/10 border border-gold-accent/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Trophy size={16} className="text-gold-accent" />
            <span className="font-bold text-gold-accent">{project.placement}</span>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="space-y-8">
          {/* Mission */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <h3 className="text-sm font-bold text-gold-accent uppercase tracking-wide mb-3">The Mission</h3>
            <p className="text-base text-text-muted leading-relaxed">{project.mission}</p>
          </motion.div>

          {/* Architecture */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h3 className="text-sm font-bold text-gold-accent uppercase tracking-wide mb-3">Architecture</h3>
            <p className="text-base text-text-muted mb-4">{project.architecture}</p>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-silver-electric/10 border border-silver-electric/20 text-silver-electric text-sm font-medium"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(212, 175, 55, 0.4)' }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Victory */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            <h3 className="text-sm font-bold text-gold-accent uppercase tracking-wide mb-3">The Victory</h3>
            <p className="text-base text-text-muted leading-relaxed">{project.victory}</p>
          </motion.div>

          {/* Description */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h3 className="text-sm font-bold text-gold-accent uppercase tracking-wide mb-3">Overview</h3>
            <p className="text-base text-text-muted leading-relaxed">{project.description}</p>
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex gap-4 pt-6 border-t border-gold-accent/10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            {project.links.github && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive flex items-center gap-2 px-6 py-3 rounded-lg bg-gold-accent/10 border border-gold-accent/30 text-gold-accent hover:bg-gold-accent/20 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Github size={20} />
                View Code
              </motion.a>
            )}
            {project.links.demo && (
              <motion.a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive flex items-center gap-2 px-6 py-3 rounded-lg bg-silver-electric/10 border border-silver-electric/30 text-silver-electric hover:bg-silver-electric/20 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <ExternalLink size={20} />
                View Demo
              </motion.a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const HackathonHallOfFame: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section className="py-20 bg-obsidian-200">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Trophy size={32} className="text-gold-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-text">
              Hackathon <span className="text-gold-accent">Hall of Fame</span>
            </h2>
          </div>
          <p className="text-lg text-text-muted max-w-2xl">
            Elite project identity cards showcasing problem-solving excellence, architectural mastery, and competitive victories.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} onExpand={setSelectedProject} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Project Modal */}
      <AnimatePresence>
        {selectedProject && <ExpandedView project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default HackathonHallOfFame;
