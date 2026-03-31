import React from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

export const PresentationCard = () => {
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/laurauxui/", "_blank", "noopener,noreferrer");
  };

  return (
    <div 
      className="relative w-[280px] h-[180px] md:w-[320px] md:h-[200px] cursor-pointer group"
      onClick={handleClick}
    >
      {/* Background Card 2 */}
      <div 
        className="absolute inset-0 bg-white rounded-[1rem] border border-[#262626]/10 shadow-sm transition-transform duration-500 ease-out group-hover:rotate-[-8deg] group-hover:-translate-x-4 group-hover:-translate-y-2"
        style={{ transform: 'rotate(-4deg) translate(-8px, -4px)', zIndex: 1 }}
      />
      
      {/* Background Card 1 */}
      <div 
        className="absolute inset-0 bg-white rounded-[1rem] border border-[#262626]/10 shadow-sm transition-transform duration-500 ease-out group-hover:rotate-[8deg] group-hover:translate-x-4 group-hover:-translate-y-2"
        style={{ transform: 'rotate(4deg) translate(8px, -4px)', zIndex: 2 }}
      />

      {/* Front Card */}
      <motion.div 
        className="absolute inset-0 bg-white rounded-[1rem] border border-[#262626]/10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-6 flex flex-col justify-between transition-all duration-500 ease-out z-[3] group-hover:translate-y-[-12px] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
        whileHover={{ scale: 1.02 }}
      >
        {/* Animated Gradient Background on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-[1rem] overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-[#7ED957] via-[#FF6FB5] to-[#7ED957] bg-[length:200%_200%]"
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-full bg-primary-blue/5 flex items-center justify-center group-hover:bg-primary-blue/10 transition-colors duration-500">
              <Zap className="text-primary-blue w-5 h-5 fill-current" />
            </div>
            <div className="font-display font-bold text-[10px] tracking-widest uppercase text-primary-blue/40 group-hover:text-primary-blue/60 transition-colors duration-500">
              Product Designer
            </div>
          </div>

          <div className="space-y-1">
            <p className="font-raleway font-bold text-xl md:text-2xl text-primary-blue leading-tight transition-colors duration-500">
              Hello, I'm Laura 👩🏻‍💻
            </p>
            <p className="font-raleway font-medium text-sm md:text-base text-primary-blue/70 transition-colors duration-500">
              Product designer
            </p>
          </div>
        </div>
      </motion.div>

      {/* Handwritten Sticker Style Text (Absolute positioned relative to front card) */}
      <div className="absolute -bottom-4 -right-4 z-[4] transform rotate-12 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
        <div className="bg-[#FF4FA3] text-white px-3 py-1 rounded-md shadow-lg text-xs font-bold tracking-wider uppercase">
          Let's talk!
        </div>
      </div>
    </div>
  );
};
