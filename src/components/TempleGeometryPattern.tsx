import React from 'react';
import { motion } from 'framer-motion';

interface TempleGeometryPatternProps {
  opacity?: number;
  animated?: boolean;
}

const TempleGeometryPattern: React.FC<TempleGeometryPatternProps> = ({ 
  opacity = 0.08, 
  animated = true 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: opacity,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.svg
      viewBox="0 0 1200 800"
      className="absolute inset-0 w-full h-full"
      initial="hidden"
      animate={animated ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <defs>
        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="silver-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C0C0C0" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#C0C0C0" stopOpacity="0.05" />
        </linearGradient>
        <filter id="blur-effect">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
        </filter>
      </defs>

      {/* Central Mandala */}
      <motion.g variants={itemVariants} filter="url(#blur-effect)">
        <circle cx="600" cy="400" r="250" fill="url(#gold-gradient)" />
        <circle cx="600" cy="400" r="240" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.15" />
        <circle cx="600" cy="400" r="200" fill="none" stroke="#C0C0C0" strokeWidth="1" opacity="0.1" />
        <circle cx="600" cy="400" r="150" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.12" />
      </motion.g>

      {/* Temple Geometry - Jali Pattern */}
      <motion.g variants={itemVariants} stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.15">
        {/* Outer octagon */}
        <polygon points="600,100 850,200 900,450 850,700 600,800 350,700 300,450 350,200" />
        
        {/* Inner geometric lines */}
        <line x1="600" y1="100" x2="600" y2="800" />
        <line x1="300" y1="450" x2="900" y2="450" />
        
        {/* Diagonal lines */}
        <line x1="350" y1="200" x2="850" y2="700" />
        <line x1="850" y1="200" x2="350" y2="700" />
      </motion.g>

      {/* Hexagonal lattice array */}
      <motion.g variants={itemVariants} opacity="0.1">
        {[0, 1, 2, 3, 4].map((i) =>
          [0, 1, 2, 3, 4, 5].map((j) => (
            <g key={`hex-${i}-${j}`}>
              <circle
                cx={200 + i * 200}
                cy={150 + j * 130}
                r="2"
                fill="#C0C0C0"
              />
              <line
                x1={200 + i * 200}
                y1={150 + j * 130}
                x2={200 + (i + 1) * 200}
                y2={150 + j * 130}
                stroke="#C0C0C0"
                strokeWidth="0.5"
              />
            </g>
          ))
        )}
      </motion.g>

      {/* Decorative corner elements */}
      <motion.g variants={itemVariants} stroke="#D4AF37" fill="url(#gold-gradient)" opacity="0.15">
        {/* Top-left corner */}
        <path d="M 50 50 L 150 50 L 150 150 L 100 100 L 50 150 Z" />
        
        {/* Top-right corner */}
        <path d="M 1150 50 L 1050 50 L 1050 150 L 1100 100 L 1150 150 Z" />
        
        {/* Bottom-left corner */}
        <path d="M 50 750 L 150 750 L 150 650 L 100 700 L 50 650 Z" />
        
        {/* Bottom-right corner */}
        <path d="M 1150 750 L 1050 750 L 1050 650 L 1100 700 L 1150 650 Z" />
      </motion.g>

      {/* Spiral elements */}
      <motion.g variants={itemVariants} stroke="url(#silver-gradient)" fill="none" opacity="0.08">
        <path d="M 600 300 Q 700 250 750 350 T 650 500" strokeWidth="2" />
        <path d="M 600 500 Q 500 550 450 450 T 550 300" strokeWidth="2" />
      </motion.g>
    </motion.svg>
  );
};

export default TempleGeometryPattern;
