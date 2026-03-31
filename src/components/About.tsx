import { useState } from 'react';
import { motion } from 'motion/react';
import { Beaker, Sparkles, Brain, Lightbulb, Zap } from 'lucide-react';
import GradientText from './GradientText';
import { CONTAINER_CLASSES } from '../constants';
import ProfessionalJourney from './ProfessionalJourney';

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 bg-bg-cream min-h-screen"
    >
      <div className={CONTAINER_CLASSES}>
        {/* Section 1: About Me (Editorial & Polaroids) */}
        <section className="mb-8">
          <div className="mb-8 md:mb-10 flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-[800px]">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[32px] md:text-[36px] font-display font-bold text-primary-blue mb-2"
              >
                About Me
              </motion.h2>
            </div>
            
            <div className="flex-shrink-0">
              <div className="px-4 py-2 rounded-full border border-[#4FC3FF]/20 bg-[#4FC3FF]/5">
                <span className="text-xs md:text-sm font-raleway font-bold text-primary-blue tracking-wider uppercase">
                  About
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: The Narrative */}
            <div className="lg:col-span-7 space-y-8">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg md:text-xl text-primary-blue leading-relaxed font-raleway font-medium"
              >
                My passion for design started early while watching my mother study Interior Design. Seeing how she translated client needs into thoughtful spaces sparked my curiosity for design long before I discovered UX/UI.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[24px] font-display font-bold text-primary-blue leading-tight "
              >
                Today, I focus on transforming complex ideas into simple, intuitive experiences. My work blends UX strategy, interface design, and product thinking to create digital products that are both functional and visually engaging.
              </motion.p>
            </div>

            {/* Right Column: The Polaroid Stack */}
            <div 
              className="lg:col-span-5 relative h-[450px] flex items-start justify-center pt-4"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Photo 2 (Underneath) */}
              <motion.div
                initial={{ opacity: 0, rotate: 0, x: 0, y: 0 }}
                animate={{ 
                  opacity: 1, 
                  rotate: -8, 
                  x: -20, 
                  y: 20,
                  zIndex: isHovered ? 30 : 10,
                  scale: isHovered ? 1.05 : 1
                }}
                transition={{ 
                  duration: 1, 
                  delay: isHovered ? 0 : 0.5, 
                  ease: [0.16, 1, 0.3, 1],
                  zIndex: { duration: 0 }
                }}
                className="absolute bg-white p-4 pb-12 shadow-xl w-76"
              >
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img 
                    src="https://picsum.photos/seed/creative/400/400" 
                    alt="Creative detail" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="absolute bottom-3 left-4 right-4 text-center font-serif italic text-[#FF4FA3] text-sm tracking-wide">
                  Product Thinking
                </p>
              </motion.div>

              {/* Photo 1 (Above) */}
              <motion.div
                initial={{ opacity: 0, rotate: 0, x: 0, y: 0 }}
                animate={{ 
                  opacity: 1, 
                  rotate: 4, 
                  x: 20, 
                  y: -20,
                  zIndex: isHovered ? 10 : 20,
                  scale: isHovered ? 0.95 : 1
                }}
                transition={{ 
                  duration: 1, 
                  delay: isHovered ? 0 : 0.3, 
                  ease: [0.16, 1, 0.3, 1],
                  zIndex: { duration: 0 }
                }}
                className="absolute bg-white p-4 pb-12 shadow-2xl w-76"
              >
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img 
                    src="https://picsum.photos/seed/professional/400/400" 
                    alt="Professional shot" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="absolute bottom-3 left-4 right-4 text-center font-serif italic text-[#FF4FA3] text-sm tracking-wide">
                  Santo Domingo, DR
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: My Design Formula (Editorial Typography) */}
        <section className="relative mb-20 py-20 px-8 md:px-16 bg-primary-blue rounded-[40px] -mx-4 md:-mx-8 overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Blurred Blobs (Stains) */}
            <motion.div 
              animate={{ 
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-[#4FC3FF]/10 rounded-full blur-[100px]" 
            />
            <motion.div 
              animate={{ 
                x: [0, -30, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-[#FF4FA3]/10 rounded-full blur-[100px]" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] right-[10%] w-[30%] h-[40%] bg-[#66FF66]/5 rounded-full blur-[80px]" 
            />
            
            {/* Floating Icons */}
            <motion.div 
              animate={{ rotate: [-15, -10, -15], y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-10 text-bg-cream/15"
            >
              <Beaker size={120} strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              animate={{ rotate: [12, 18, 12], x: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 right-20 text-bg-cream/15"
            >
              <Sparkles size={100} strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/4 text-bg-cream/15 -translate-y-1/2"
            >
              <Brain size={80} strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 right-1/4 text-bg-cream/15"
            >
              <Lightbulb size={90} strokeWidth={1.5} />
            </motion.div>
            <motion.div 
              animate={{ rotate: [20, 25, 20], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 left-1/3 text-bg-cream/15"
            >
              <Zap size={70} strokeWidth={1.5} />
            </motion.div>
          </div>

          <div className="relative z-10">
            <div className="max-w-5xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[32px] md:text-[28px] font-display font-bold text-bg-cream leading-[1.2] tracking-tight"
            >
              My design process blends{" "}
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="inline-block px-3 py-1 mx-1 bg-[#FF4FA3] text-white rounded-xl rotate-[-1deg] shadow-sm"
              >
                Sugar
              </motion.span>{" "}
              <span className="text-bg-cream/60 font-normal">(creativity)</span>,{" "}
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="inline-block px-3 py-1 mx-1 bg-[#4FC3FF] text-white rounded-xl rotate-[1deg] shadow-sm"
              >
                Spice
              </motion.span>{" "}
              <span className="text-bg-cream/60 font-normal">(strategy)</span>, and{" "}
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="inline-block px-3 py-1 mx-1 bg-[#66FF66] text-primary-blue rounded-xl rotate-[-1deg] shadow-sm"
              >
                Everything Nice
              </motion.span>{" "}
              <span className="text-bg-cream/60 font-normal">(user empathy)</span> — the essential ingredients for building meaningful digital products, powered by my{" "}
              <span className="relative inline-block">
                <GradientText
                  colors={["#7ED957", "#FF6FB5", "#6BCBFF", "#7ED957"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="relative z-10 inline-block font-black italic tracking-wider px-2"
                >
                  Substance X
                </GradientText>
                <motion.span 
                  className="absolute -top-4 -right-4 text-[#FF4FA3] text-xl md:text-2xl"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  ✦
                </motion.span>
              </span>
              : a product-driven mindset focused on clarity, simplicity, and impact.
            </motion.h2>
          </div>
        </div>
      </section>

        {/* Section 3: Professional Journey */}
        <ProfessionalJourney />
      </div>
    </motion.div>
  );
}
