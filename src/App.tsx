import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BentoGrid from './components/BentoGrid';
import HackathonHallOfFame from './components/HackathonHallOfFame';
import HorizontalProjectScroll from './components/HorizontalProjectScroll';
import HeritageBackground from './components/HeritageBackground';
import SoundToggle from './components/SoundToggle';
import SystemStatusBar from './components/SystemStatusBar';
import MagneticCursor from './components/MagneticCursor';
import { HapticSoundscapeProvider } from './context/HapticSoundscapeContext';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Enable smooth scroll
  useSmoothScroll();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Prevent scroll during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  if (isLoading) {
    return <Loader onComplete={handleLoadingComplete} />;
  }

  return (
    <HapticSoundscapeProvider>
      <div className="bg-obsidian-200 text-[#F5F5F5] overflow-x-hidden relative cursor-none">
        {/* Magnetic Cursor */}
        <MagneticCursor />
        
        {/* Heritage Background Layer */}
        <HeritageBackground />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <BentoGrid />
          <HackathonHallOfFame />
          <HorizontalProjectScroll />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
          <Footer />
        </div>

        {/* UI Overlays */}
        <SoundToggle />
        <SystemStatusBar />
      </div>
    </HapticSoundscapeProvider>
  );
}

export default App;
