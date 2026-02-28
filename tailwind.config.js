/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Luxury Dark Palette
        obsidian: {
          50: '#0f0f14',
          100: '#0b0c10',
          200: '#050505',
          950: '#000000',
        },
        gold: {
          accent: '#D4AF37',
          light: '#E8C547',
          dark: '#A68A2E',
        },
        silver: {
          electric: '#C0C0C0',
          light: '#E0E0E0',
          dark: '#808080',
        },
        terminal: {
          bg: '#0a0a0a',
          text: '#00FF00',
          cursor: '#00FF00',
        },
      },
      spacing: {
        'gutter': '2rem',
        'section': '6rem',
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      backdropBlur: {
        'glass': '20px',
      },
      boxShadow: {
        'glow-gold': '0 0 30px rgba(212, 175, 55, 0.4), 0 0 60px rgba(212, 175, 55, 0.2)',
        'glow-silver': '0 0 30px rgba(192, 192, 192, 0.3), 0 0 60px rgba(192, 192, 192, 0.15)',
        'glow-gold-strong': '0 0 40px rgba(212, 175, 55, 0.6), 0 0 80px rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate': 'rotate 20s linear infinite',
        'rotate-reverse': 'rotate-reverse 15s linear infinite',
      },
    },
  },
  plugins: [],
};
