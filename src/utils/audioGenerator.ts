/**
 * Web Audio API Synth Engine
 * Generates mechanical sound effects for UI interactions
 */

let audioContext: AudioContext | null = null;

const getAudioContext = (): AudioContext => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioContext;
};

/**
 * Mechanical click sound - 20ms burst
 * Used for hover interactions
 */
export const playMechanicalClick = (volume: number = 0.15) => {
  const ctx = getAudioContext();
  const now = ctx.currentTime;
  
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  
  osc.connect(gain);
  gain.connect(ctx.destination);
  
  osc.type = 'sine';
  osc.frequency.setValueAtTime(400, now);
  osc.frequency.exponentialRampToValueAtTime(200, now + 0.02);
  
  gain.gain.setValueAtTime(volume, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.02);
  
  osc.start(now);
  osc.stop(now + 0.02);
};

/**
 * Shimmer chime sound - soft ascending harmonics
 * Used when Bento cards expand
 */
export const playShimmerChime = (volume: number = 0.12) => {
  const ctx = getAudioContext();
  const now = ctx.currentTime;
  
  // Base frequency
  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const gain = ctx.createGain();
  
  osc1.connect(gain);
  osc2.connect(gain);
  gain.connect(ctx.destination);
  
  osc1.type = 'sine';
  osc2.type = 'sine';
  
  // Ascending pattern: 800Hz → 1200Hz
  osc1.frequency.setValueAtTime(800, now);
  osc1.frequency.exponentialRampToValueAtTime(1200, now + 0.1);
  
  // Second harmonic
  osc2.frequency.setValueAtTime(1200, now);
  osc2.frequency.exponentialRampToValueAtTime(1600, now + 0.1);
  
  gain.gain.setValueAtTime(volume, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
  
  osc1.start(now);
  osc2.start(now);
  osc1.stop(now + 0.1);
  osc2.stop(now + 0.1);
};

/**
 * Deep hum sound - low-frequency data stream effect
 * Used when terminal is active
 * @param duration Duration in seconds
 */
export const playDeepHum = (duration: number = 0.5, volume: number = 0.1) => {
  const ctx = getAudioContext();
  const now = ctx.currentTime;
  
  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const gain = ctx.createGain();
  
  osc1.connect(gain);
  osc2.connect(gain);
  gain.connect(ctx.destination);
  
  osc1.type = 'sine';
  osc2.type = 'sine';
  
  // Deep fundamental frequency
  osc1.frequency.setValueAtTime(60, now);
  
  // Harmonic overtone
  osc2.frequency.setValueAtTime(200, now);
  
  // Smooth attack and release
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(volume, now + 0.1);
  gain.gain.linearRampToValueAtTime(0.01, now + duration - 0.05);
  
  osc1.start(now);
  osc2.start(now);
  osc1.stop(now + duration);
  osc2.stop(now + duration);
};

/**
 * Stop all currently playing sounds
 */
export const stopAllSounds = () => {
  if (audioContext) {
    audioContext.close();
    audioContext = null;
  }
};
