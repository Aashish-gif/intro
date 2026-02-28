import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-obsidian-100 border-t border-gold-accent/20 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container-custom">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6 flex-wrap gap-2">
            <Code className="w-6 h-6 text-gold-accent" />
            <span className="text-text font-bold text-xl">
              © 2025 Aashish Tejwani
            </span>
            <span className="text-text-muted text-xl">—</span>
            <span className="text-text-muted font-medium">
              Designed with precision & innovation
            </span>
            <Heart className="w-5 h-5 text-silver-electric" />
          </div>
          <p className="text-text-muted">
            Built with React 19, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
