import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const MagneticCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Detect hover on interactive elements
    document.addEventListener('mouseover', (e: Event) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.classList.contains('interactive') ||
        target.classList.contains('hoverable');
      setIsHovering(isInteractive);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <>
          {/* Outer glow circle */}
          <motion.div
            ref={outerRef}
            className="fixed pointer-events-none z-50 mix-blend-screen"
            style={{
              width: isHovering ? '40px' : '30px',
              height: isHovering ? '40px' : '30px',
              border: `2px solid rgba(212, 175, 55, ${isHovering ? '0.6' : '0.4'})`,
              borderRadius: '50%',
              left: mousePosition.x,
              top: mousePosition.y,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              boxShadow: isHovering
                ? '0 0 20px rgba(212, 175, 55, 0.8)'
                : '0 0 15px rgba(212, 175, 55, 0.4)',
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          />

          {/* Inner dot */}
          <motion.div
            ref={cursorRef}
            className="fixed pointer-events-none z-50"
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'rgba(212, 175, 55, 0.8)',
              borderRadius: '50%',
              left: mousePosition.x,
              top: mousePosition.y,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: isHovering ? 1.5 : 1,
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          />
        </>
      )}
    </>
  );
};

export default MagneticCursor;
