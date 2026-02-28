import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ComponentInfo {
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  padding: string;
  zIndex: number;
}

interface DevModeOverlayProps {
  onClose: () => void;
}

const DevModeOverlay: React.FC<DevModeOverlayProps> = ({ onClose }) => {
  const [hoveredElement, setHoveredElement] = useState<ComponentInfo | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-dev-component]');
      
      if (target) {
        const rect = target.getBoundingClientRect();
        const styles = window.getComputedStyle(target);
        
        setHoveredElement({
          name: target.getAttribute('data-dev-component') || 'Element',
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height,
          padding: styles.padding,
          zIndex: parseInt(styles.zIndex) || 0,
        });
      } else {
        setHoveredElement(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Grid overlay canvas
  const GridOverlay = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;

      // Draw grid
      const gridSize = 16;
      ctx.strokeStyle = 'rgba(0, 255, 0, 0.1)';
      ctx.lineWidth = 0.5;

      // Vertical lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Handle resize
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 100 }}
      />
    );
  };

  const content = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50"
    >
      {/* Grid Overlay */}
      <GridOverlay />

      {/* Close Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={onClose}
        className="fixed top-4 right-4 z-50 p-2 rounded-full"
        style={{
          background: 'rgba(212, 175, 55, 0.2)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
        }}
      >
        <X size={20} style={{ color: '#D4AF37' }} />
      </motion.button>

      {/* Info Box */}
      {hoveredElement && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed z-50 p-4 rounded-lg text-xs font-mono"
          style={{
            left: hoveredElement.x + hoveredElement.width + 10,
            top: hoveredElement.y,
            background: 'rgba(5, 5, 5, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 255, 0, 0.5)',
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.2)',
            maxWidth: '300px',
          }}
        >
          <div className="text-[#00FF00] font-bold mb-2">{hoveredElement.name}</div>
          <div className="text-[#C0C0C0] space-y-1">
            <div>
              <span className="opacity-60">POSITION:</span>
              <span className="text-[#D4AF37] ml-2">
                {Math.round(hoveredElement.x)}, {Math.round(hoveredElement.y)}
              </span>
            </div>
            <div>
              <span className="opacity-60">SIZE:</span>
              <span className="text-[#D4AF37] ml-2">
                {Math.round(hoveredElement.width)} × {Math.round(hoveredElement.height)}
              </span>
            </div>
            <div>
              <span className="opacity-60">PADDING:</span>
              <span className="text-[#D4AF37] ml-2">{hoveredElement.padding}</span>
            </div>
            <div>
              <span className="opacity-60">Z-INDEX:</span>
              <span className="text-[#D4AF37] ml-2">{hoveredElement.zIndex}</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Highlight Box */}
      {hoveredElement && (
        <motion.div
          key={`${hoveredElement.x}-${hoveredElement.y}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed pointer-events-none"
          style={{
            left: hoveredElement.x,
            top: hoveredElement.y,
            width: hoveredElement.width,
            height: hoveredElement.height,
            border: '2px solid rgba(0, 255, 0, 0.6)',
            boxShadow: 'inset 0 0 10px rgba(0, 255, 0, 0.2)',
            zIndex: 99,
          }}
        />
      )}
    </motion.div>
  );

  return createPortal(content, document.body);
};

export default DevModeOverlay;
