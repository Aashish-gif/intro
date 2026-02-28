import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import TerminalCard from './TerminalCard';

// Lazy load for performance
const TerminalCardLazy = lazy(() =>
  Promise.resolve({ default: TerminalCard }).then((mod) => ({ default: mod.default }))
);

interface BentoCardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  isWide?: boolean;
  isTall?: boolean;
}

const BentoCard: React.FC<BentoCardProps> = ({
  title,
  description,
  children,
  className = '',
  isWide = false,
  isTall = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100, damping: 20 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)' }}
      className={`rounded-lg p-6 backdrop-blur-[20px] border border-[#D4AF37]/30 transition-all duration-300 ${
        isWide ? 'col-span-2' : ''
      } ${isTall ? 'row-span-2' : ''} ${className}`}
      style={{
        background: 'rgba(10, 10, 10, 0.6)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div className="h-full flex flex-col">
        {title && (
          <h3 className="text-sm font-bold mb-2 text-[#D4AF37] uppercase tracking-wide">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-xs text-[#C0C0C0] mb-4 opacity-70">{description}</p>
        )}
        <div className="flex-1">{children}</div>
      </div>
    </motion.div>
  );
};

const BentoGrid: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-gradient">Command Center</span>
          </h2>
          <p className="text-[#F5F5F5]/60 text-lg">
            0.0001% tier proof of work. Stats, tools, and live system metrics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Terminal Card - Proof of Work */}
          <BentoCard
            title="Proof of Work"
            description="Interactive Linux terminal with live commands"
            isWide
            isTall
          >
            <Suspense fallback={<div className="text-[#C0C0C0] text-xs">Loading...</div>}>
              <TerminalCard />
            </Suspense>
          </BentoCard>

          {/* Live Code Window */}
          <BentoCard title="Legacy Code">
            <div className="font-mono text-xs text-[#00FF00] space-y-2">
              <div>
                <span className="text-[#C0C0C0]">const</span>{' '}
                <span className="text-[#D4AF37]">legacy</span>{' '}
                <span className="text-[#C0C0C0]">=</span>{' '}
                <span className="text-[#00FFFF]">buildFuture</span>()
              </div>
              <div className="mt-4 text-[#C0C0C0]/60 text-xs leading-relaxed">
                Engineering excellence merged with cultural heritage. Building systems that matter.
              </div>
            </div>
          </BentoCard>

          {/* Global Impact Metrics */}
          <BentoCard title="Global Impact">
            <div className="space-y-3">
              {[
                { label: 'Hackathons', value: '12+' },
                { label: 'Projects', value: '20+' },
                { label: 'GitHub Stars', value: '156' },
                { label: 'Code Quality', value: '98/100' },
              ].map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center text-xs"
                >
                  <span className="text-[#C0C0C0]/70">{metric.label}</span>
                  <span className="text-[#D4AF37] font-bold">{metric.value}</span>
                </motion.div>
              ))}
            </div>
          </BentoCard>

          {/* Toolkit Snapshot */}
          <BentoCard title="Tech Arsenal" isWide>
            <div className="grid grid-cols-3 gap-3">
              {[
                'React',
                'TypeScript',
                'Node.js',
                'MongoDB',
                'PostgreSQL',
                'AWS',
                'Docker',
                'Git',
                'Python',
              ].map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="px-3 py-2 rounded-lg text-center text-xs font-mono text-[#00FF00]"
                  style={{
                    background: 'rgba(0, 255, 0, 0.05)',
                    border: '1px solid rgba(0, 255, 0, 0.2)',
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </BentoCard>

          {/* Status Badge */}
          <BentoCard title="Status">
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2 text-xs"
            >
              <div className="w-2 h-2 rounded-full bg-[#00FF00]" />
              <span className="text-[#00FF00]">Building the Future</span>
            </motion.div>
          </BentoCard>

          {/* Achievement Badge */}
          <BentoCard title="Latest Win">
            <div className="text-xs space-y-2">
              <div className="text-[#D4AF37] font-bold">🏆 YourHack 2024</div>
              <div className="text-[#C0C0C0]/70 leading-relaxed">
                1st Place • Worknix AI Trading Platform
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
