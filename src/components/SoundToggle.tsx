import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useSoundscape } from '../context/HapticSoundscapeContext';

const SoundToggle: React.FC = () => {
  const { soundEnabled, toggleSound } = useSoundscape();
  const [mounted, setMounted] = useState(false);

  // Only render after hydration to prevent mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={toggleSound}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full transition-all duration-300 hover:scale-110"
      style={{
        background: soundEnabled 
          ? 'rgba(212, 175, 55, 0.1)' 
          : 'rgba(192, 192, 192, 0.05)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(212, 175, 55, 0.2)',
        boxShadow: soundEnabled
          ? '0 0 20px rgba(212, 175, 55, 0.2)'
          : '0 0 10px rgba(192, 192, 192, 0.1)',
      }}
      title={soundEnabled ? 'Disable sound' : 'Enable sound'}
      aria-label={soundEnabled ? 'Disable sound' : 'Enable sound'}
    >
      {soundEnabled ? (
        <Volume2 size={20} style={{ color: '#D4AF37' }} />
      ) : (
        <VolumeX size={20} style={{ color: '#C0C0C0' }} />
      )}
    </button>
  );
};

export default SoundToggle;
