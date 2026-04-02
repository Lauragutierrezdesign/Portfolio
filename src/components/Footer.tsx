import React from 'react';
import { motion } from 'motion/react';
import { CONTAINER_CLASSES } from '../constants';

const Footer = () => {
  const socialLinks = [
    { name: 'EMAIL', href: 'mailto:design.lauragutierrez@gmail.com' },
    { name: 'WHATSAPP', href: 'https://wa.link/fukyq9' },
  ];

  return (
    <footer className="bg-primary-blue py-24 md:py-32 border-t border-white/10">
      <div className={CONTAINER_CLASSES}>
        {/* Top Footer Area */}
        <div className="mb-10 max-w-3xl">
          <h2 className="font-display font-bold text-4xl md:text-[40px] text-bg-cream leading-tight mb-6">
            Turning complexity into clarity.
          </h2>
          <p className="text-lg md:text-xl text-bg-cream/80 leading-relaxed font-raleway font-medium max-w-md">
            Have a question, some feedback, or an idea worth building? I’d love to hear it — send it my way.
          </p>
        </div>
      </div>

      {/* Separator Line - Full Width */}
      <div className="w-full border-t border-white/20" />

      <div className={CONTAINER_CLASSES}>
        {/* Bottom Footer Area */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          {/* Left: Social Links & Micro-copy */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-wrap gap-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-sans font-medium tracking-widest text-bg-cream transition-colors duration-300 hover:text-[#4FC3FF] flex items-center gap-1 group"
                >
                  {link.name}
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </a>
              ))}
            </div>
            <p className="text-s font-sans text-bg-cream/70">
              Designed in Santo Domingo with <span className="text-[#FF4FA3]">♥</span> © 2026 Laura Gutierrez
            </p>
          </div>

          {/* Right: Email & Action Buttons */}
          <div className="flex flex-col lg:items-end gap-8">
            <a 
              href="mailto:design.lauragutierrez@gmail.com" 
              className="font-sans text-2xl md:text-3xl text-bg-cream hover:text-[#4FC3FF] transition-colors duration-300 block"
            >
              design.lauragutierrez@gmail.com
            </a>
            
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <motion.a
                href="https://www.linkedin.com/in/laurauxui/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-bg-cream text-primary-blue px-8 py-3 rounded-full font-display font-bold transition-all duration-300 hover:bg-[#4FC3FF] hover:text-white hover:shadow-[0_4px_14px_0_rgba(79,195,255,0.39)]"
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="/src/assets/pdf/LauraGutierrez-Product-Designer-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-bg-cream px-8 py-3 rounded-full font-sans font-medium border border-bg-cream transition-all duration-300 hover:bg-[#4FC3FF] hover:border-[#4FC3FF] hover:text-white"
              >
                Resume / CV
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
