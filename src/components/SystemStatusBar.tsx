import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DevModeOverlay from './DevModeOverlay';

const SystemStatusBar: React.FC = () => {
  const [devModeActive, setDevModeActive] = useState(false);

  const toggleDevMode = useCallback(() => {
    setDevModeActive((prev) => !prev);
  }, []);

  // Handle ESC key to close dev mode
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDevModeActive(false);
      }
    };

    if (devModeActive) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [devModeActive]);

  return (
    <>
      {/* Status Bar Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed bottom-0 left-0 right-0 z-30 py-3 px-6 cursor-pointer"
        style={{
          background: 'rgba(5, 5, 5, 0.9)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(212, 175, 55, 0.1)',
        }}
        onClick={toggleDevMode}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          {/* Left - Metrics */}
          <div className="flex items-center gap-8">
            <div className="text-xs font-mono text-[#C0C0C0]">
              <span className="opacity-70">LATENCY:</span>
              <span className="text-[#00FF00] ml-2">14ms</span>
            </div>
            <div className="text-xs font-mono text-[#C0C0C0]">
              <span className="opacity-70">LIGHTHOUSE:</span>
              <span className="text-[#D4AF37] ml-2">100</span>
            </div>
            <div className="text-xs font-mono text-[#C0C0C0]">
              <span className="opacity-70">FRAMEWORK:</span>
              <span className="text-[#00FFFF] ml-2">React 19</span>
            </div>
          </div>

          {/* Right - Status Indicator */}
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full"
              style={{
                background: devModeActive
                  ? 'rgba(212, 175, 55, 0.8)'
                  : 'rgba(0, 255, 0, 0.6)',
              }}
            />
            <span className="text-xs font-mono text-[#C0C0C0] opacity-70">
              {devModeActive ? 'DEV MODE' : 'LIVE'} • CLICK TO TOGGLE
            </span>
          </div>
        </div>
      </motion.footer>

      {/* Dev Mode Overlay */}
      <AnimatePresence>
        {devModeActive && <DevModeOverlay onClose={toggleDevMode} />}
      </AnimatePresence>
    </>
  );
};

export default SystemStatusBar;
