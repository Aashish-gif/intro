import React, { createContext, useContext, useCallback, useEffect, useRef, useState } from 'react';
import { 
  playMechanicalClick, 
  playShimmerChime, 
  playDeepHum 
} from '../utils/audioGenerator';

interface SoundscapeContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  playClick: () => void;
  playChime: () => void;
  playHum: (duration?: number) => void;
}

const SoundscapeContext = createContext<SoundscapeContextType | undefined>(undefined);

export const HapticSoundscapeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const lastClickTimeRef = useRef<number>(0);
  const humActiveRef = useRef<boolean>(false);

  // Load sound preference from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-sound-enabled');
    if (saved !== null) {
      setSoundEnabled(JSON.parse(saved));
    }
  }, []);

  // Save sound preference to localStorage
  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const newState = !prev;
      localStorage.setItem('portfolio-sound-enabled', JSON.stringify(newState));
      return newState;
    });
  }, []);

  // Debounced click sound (max 200ms intervals)
  const playClick = useCallback(() => {
    if (!soundEnabled) return;

    const now = Date.now();
    if (now - lastClickTimeRef.current > 200) {
      playMechanicalClick(0.15);
      lastClickTimeRef.current = now;
    }
  }, [soundEnabled]);

  // Shimmer chime for card expansions
  const playChime = useCallback(() => {
    if (!soundEnabled) return;
    playShimmerChime(0.12);
  }, [soundEnabled]);

  // Deep hum for terminal activity
  const playHum = useCallback((duration: number = 0.3) => {
    if (!soundEnabled) return;
    
    // Only play if not already playing to avoid overlapping hums
    if (!humActiveRef.current) {
      humActiveRef.current = true;
      playDeepHum(duration, 0.1);
      
      setTimeout(() => {
        humActiveRef.current = false;
      }, duration * 1000);
    }
  }, [soundEnabled]);

  const value: SoundscapeContextType = {
    soundEnabled,
    toggleSound,
    playClick,
    playChime,
    playHum,
  };

  return (
    <SoundscapeContext.Provider value={value}>
      {children}
    </SoundscapeContext.Provider>
  );
};

export const useSoundscape = (): SoundscapeContextType => {
  const context = useContext(SoundscapeContext);
  if (!context) {
    throw new Error('useSoundscape must be used within HapticSoundscapeProvider');
  }
  return context;
};
