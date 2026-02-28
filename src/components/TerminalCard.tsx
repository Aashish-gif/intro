import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useSoundscape } from '../context/HapticSoundscapeContext';

interface TerminalLine {
  type: 'input' | 'output';
  content: string;
}

const TerminalCard: React.FC = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState('');
  const [initialized, setInitialized] = useState(false);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { playClick, playHum } = useSoundscape();

  // Initialization sequence with typewriter effect
  useEffect(() => {
    if (initialized) return;

    const initSequence = [
      { type: 'output' as const, content: '$ Initializing...' },
      { type: 'output' as const, content: '> System: 0.0001% Persona Active' },
      { type: 'output' as const, content: '> Ready for commands. Type \'help\'' },
    ];

    let currentIndex = 0;
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex < initSequence.length) {
        const line = initSequence[currentIndex];
        charIndex++;

        setLines((prev) => {
          const updated = [...prev];
          if (updated.length === currentIndex) {
            updated.push({ ...line, content: line.content.slice(0, charIndex) });
          } else {
            updated[currentIndex] = {
              ...line,
              content: line.content.slice(0, charIndex),
            };
          }
          return updated;
        });

        if (charIndex >= line.content.length) {
          currentIndex++;
          charIndex = 0;
          playHum(0.2);
        }
      } else {
        setInitialized(true);
        clearInterval(typeInterval);
        setLines(initSequence);
        inputRef.current?.focus();
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [initialized, playHum]);

  // Auto-scroll to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  // Execute commands
  const executeCommand = useCallback(
    (command: string) => {
      playClick();
      playHum(0.15);

      const trimmed = command.trim().toLowerCase();
      setLines((prev) => [
        ...prev,
        { type: 'input', content: `$ ${command}` },
      ]);

      if (trimmed === 'help') {
        const helpText = [
          'Available commands:',
          '  git        - GitHub activity & repositories',
          '  projects   - List all major projects',
          '  skills     - Technical skill stack',
          '  clear      - Clear terminal',
          '  help       - Show this help menu',
        ];
        setLines((prev) => [
          ...prev,
          ...helpText.map((text) => ({ type: 'output' as const, content: text })),
        ]);
      } else if (trimmed === 'git') {
        const gitOutput = {
          repositories: [
            { name: 'intro (portfolio)', stars: 12, language: 'React/TypeScript' },
            { name: 'AI-Trading-Bot', stars: 45, language: 'Python' },
            { name: 'Worknix-Fintech', stars: 38, language: 'React/Node.js' },
          ],
          stats: {
            contributions_2024: 287,
            followers: 52,
            repositories: 18,
            total_stars: 156,
          },
        };
        setLines((prev) => [
          ...prev,
          { type: 'output', content: JSON.stringify(gitOutput, null, 2) },
        ]);
      } else if (trimmed === 'projects') {
        const projects = [
          '🏆 Worknix - YourHack 2024 (1st Place)',
          '🚀 AI Trading Bot - HackNova 2024 (Top 5)',
          '💰 Fintech Analytics Platform - InnovateTech 2024',
          '🤖 ML Model Optimization - DataHack 2024',
        ];
        setLines((prev) => [
          ...prev,
          ...projects.map((p) => ({ type: 'output' as const, content: p })),
        ]);
      } else if (trimmed === 'skills') {
        const skills = [
          'Languages: JavaScript, TypeScript, Python, Java, SQL',
          'Frontend: React, Next.js, Tailwind CSS, Framer Motion',
          'Backend: Node.js, Express, MongoDB, PostgreSQL',
          'Tools: Git, Docker, AWS, CI/CD, Vite',
          'Specialties: Full-Stack, System Design, Performance Optimization',
        ];
        setLines((prev) => [
          ...prev,
          ...skills.map((s) => ({ type: 'output' as const, content: s })),
        ]);
      } else if (trimmed === 'clear') {
        setLines([]);
        setInput('');
      } else if (trimmed === '') {
        // Empty command, just show prompt
      } else {
        setLines((prev) => [
          ...prev,
          { type: 'output', content: `command not found: ${command}` },
        ]);
      }

      setInput('');
    },
    [playClick, playHum]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100, damping: 20 }}
      viewport={{ once: true }}
      className="relative h-80 rounded-lg overflow-hidden border border-[#D4AF37]/30"
      style={{
        background: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 0 30px rgba(212, 175, 55, 0.15)',
      }}
    >
      {/* Terminal Background */}
      <div className="absolute inset-0 bg-[#0a0a0a] opacity-90"></div>

      {/* Terminal Content */}
      <div className="relative h-full flex flex-col p-4">
        {/* Header */}
        <div className="mb-3 pb-3 border-b border-[#D4AF37]/20">
          <div className="text-xs font-mono text-[#D4AF37]">
            0.0001% Proof of Work Terminal
          </div>
        </div>

        {/* Terminal Output */}
        <div className="flex-1 overflow-y-auto mb-3 space-y-1">
          {lines.map((line, idx) => (
            <div
              key={idx}
              className={`font-mono text-xs ${
                line.type === 'input'
                  ? 'text-[#C0C0C0]'
                  : 'text-[#00FF00]'
              }`}
            >
              {line.type === 'output' ? '  ' : ''}
              <span>{line.content}</span>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Input Line */}
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="text-[#00FF00]">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-[#00FF00] outline-none placeholder-[#00FF00]/40 text-xs"
            placeholder="Type command..."
            autoComplete="off"
          />
          <span
            className="text-[#00FF00] animate-pulse"
            style={{
              animation: 'blink 1s infinite',
            }}
          >
            ▌
          </span>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </motion.div>
  );
};

export default TerminalCard;
