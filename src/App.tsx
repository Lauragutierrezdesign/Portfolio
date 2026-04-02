/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import GradientText from './components/GradientText';
import SelectedWork from './components/SelectedWork';
import DesignPhilosophy from './components/DesignPhilosophy';
import Footer from './components/Footer';
import { CurvedLoop } from './components/CurvedLoop';
import { CONTAINER_CLASSES } from './constants';
import CaseStudy from './components/CaseStudy';
import About from './components/About';
import { PresentationCard } from './components/PresentationCard';

const FloatingShapes = () => {
  const particles = Array.from({ length: 25 }).map((_, i) => {
    const colors = ['#4FC3FF', '#FF4FA3', '#7ED957'];
    const color = colors[i % colors.length];
    const isStar = i % 2 === 0;
    const size = Math.random() * 24 + 8; // 8px to 32px
    const top = `${Math.random() * 100}%`;
    const left = `${Math.random() * 100}%`;
    const duration = Math.random() * 20 + 15;
    const delay = Math.random() * 10;

    return (
      <motion.div
        key={i}
        className="absolute blur-[1px]"
        style={{
          width: size,
          height: size,
          top,
          left,
          backgroundColor: color,
          opacity: 0.1, // Increased for dark background
          clipPath: isStar 
            ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' 
            : 'circle(50% at 50% 50%)'
        }}
        animate={{
          y: [0, Math.random() * 60 - 30, 0],
          x: [0, Math.random() * 60 - 30, 0],
          rotate: isStar ? [0, 180, 360] : 0,
          scale: [1, Math.random() * 0.5 + 1, 1],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay
        }}
      />
    );
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles}
    </div>
  );
};

const Navigation = ({ currentPage, onNavigate }: { currentPage: string, onNavigate: (page: string) => void }) => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-bg-cream/80 backdrop-blur-md border-b border-primary-blue/5"
    >
      <div className={`${CONTAINER_CLASSES} py-4 md:py-6 flex items-center justify-between`}>
        <div 
          className="font-display font-bold text-xl tracking-tight text-primary-blue cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          LAURA GUTIERREZ
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => onNavigate('home')}
            className={`group relative font-medium transition-colors duration-300 ease-in-out hover:text-[#FF4FA3] ${currentPage === 'home' ? 'text-[#FF4FA3]' : 'text-primary-blue'}`}
          >
            Work
            <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#FF4FA3] transition-all duration-300 ease-in-out ${currentPage === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </button>
          <button 
            onClick={() => onNavigate('about')}
            className={`group relative font-medium transition-colors duration-300 ease-in-out hover:text-[#FF4FA3] ${currentPage === 'about' ? 'text-[#FF4FA3]' : 'text-primary-blue'}`}
          >
            About
            <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#FF4FA3] transition-all duration-300 ease-in-out ${currentPage === 'about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </button>
        </div>

        <a 
          href="#resume" 
          className="bg-primary-blue text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 ease-in-out hover:bg-[#FF4FA3] hover:shadow-[0_4px_14px_0_rgba(255,79,163,0.39)] hover:scale-105"
        >
          Resume
        </a>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-bg-cream">
      <FloatingShapes />
      
      <div className={`${CONTAINER_CLASSES} relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-[2.25rem]`}>
        {/* Left Column: Text */}
        <div className="flex-1 text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white shadow-[0_4px_20px_rgba(0,92,153,0.08)] border border-primary-blue/20 mb-8"
          >
            <div className="relative flex items-center justify-center">
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2.5 h-2.5 rounded-full bg-accent-green z-10"
              />
              <motion.span 
                animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute w-2.5 h-2.5 rounded-full bg-accent-green"
              />
            </div>
            <span className="text-xs md:text-[13px] font-bold tracking-wide text-primary-blue font-raleway">
              Shipped before perfect. Iterating live ✨
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-raleway font-bold text-5xl md:text-[72px] text-primary-blue leading-[1.1] tracking-tight mb-8">
              Product designer turning complexity into{' '}
              <span className="relative inline-block text-primary-blue">
                <GradientText
                  colors={["#7ED957", "#FF6FB5", "#7ED957"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="relative z-10 inline-block"
                >
                  clarity
                </GradientText>
                <motion.span 
                  className="absolute -top-2 -right-6 text-[#FF4FA3] text-2xl md:text-3xl"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  ✦
                </motion.span>
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mb-12"
          >
            <p className="supporting-text">
              Welcome to my small corner of the web. Inspired by sugar, spice and everything nice — powered by UX/UI substance.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Presentation Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0"
        >
          <PresentationCard />
        </motion.div>
      </div>

      {/* Bottom Hero Area */}
      <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-20 pointer-events-none">
        <div className={`${CONTAINER_CLASSES} flex justify-between items-end`}>
          {/* Connect with me */}
          <motion.div 
            className="flex flex-col gap-4 pointer-events-auto"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs uppercase tracking-widest text-primary-blue/40 font-bold font-raleway">Connect with me</span>
            <div className="flex flex-row flex-wrap gap-4 md:gap-6">
              <a href="https://www.linkedin.com/in/laurauxui/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-primary-blue transition-colors duration-300 ease-in-out hover:text-[#FF4FA3] flex items-center gap-1 group w-fit font-raleway">
                LINKEDIN
                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 ease-in-out text-primary-blue group-hover:text-[#FF4FA3]">↗</span>
              </a>
              <a href="mailto:design.lauragutierrez@gmail.com" className="text-sm font-bold text-primary-blue transition-colors duration-300 ease-in-out hover:text-[#FF4FA3] flex items-center gap-1 group w-fit font-raleway">
                EMAIL
                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 ease-in-out text-primary-blue group-hover:text-[#FF4FA3]">↗</span>
              </a>
              <a href="https://wa.link/fukyq9" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-primary-blue transition-colors duration-300 ease-in-out hover:text-[#FF4FA3] flex items-center gap-1 group w-fit font-raleway">
                WHATSAPP
                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 ease-in-out text-primary-blue group-hover:text-[#FF4FA3]">↗</span>
              </a>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="flex flex-col items-center gap-4 pointer-events-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="flex flex-col items-center gap-4"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs uppercase tracking-widest text-primary-blue font-bold font-raleway" style={{ writingMode: 'vertical-rl' }}>SCROLL</span>
              <div className="w-px h-[60px] bg-primary-blue" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedProjectId]);

  const handleNavigate = (page: string) => {
    if (page === 'home' || page === 'about') {
      setCurrentPage(page);
      setSelectedProjectId(null);
    }
  };

  return (
    <div className="min-h-screen bg-bg-cream selection:bg-accent-blue/30 selection:text-primary-blue">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <AnimatePresence mode="wait">
        {selectedProjectId ? (
          <motion.div
            key="case-study"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CaseStudy 
              projectId={selectedProjectId} 
              onBack={() => setSelectedProjectId(null)} 
            />
          </motion.div>
        ) : currentPage === 'about' ? (
          <motion.div
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <About />
            <Footer />
          </motion.div>
        ) : (
        
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <main>
              <Hero />
              <div className="bg-primary-blue text-[#FFF8EC] py-4 border-y border-primary-blue/10">
                <CurvedLoop 
                  marqueeText="UX/UI DESIGN ✦ PRODUCT STRATEGY ✦ USER RESEARCH ✦ INTERACTION DESIGN ✦" 
                  speed={0.10} 
                  className="text-sm md:text-base font-medium tracking-widest uppercase"
                />
              </div>
              <SelectedWork onSelectProject={setSelectedProjectId} />
              <DesignPhilosophy />
              <Footer />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
