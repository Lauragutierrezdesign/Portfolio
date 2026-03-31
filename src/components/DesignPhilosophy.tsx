import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTAINER_CLASSES } from '../constants';

const values = [
  {
    title: "Stay curious.",
    description: "I continuously learn, explore, and evolve to design better products."
  },
  {
    title: "Design with intention.",
    description: "Every interaction is crafted with purpose, not by accident."
  },
  {
    title: "Empathy first.",
    description: "I design by understanding real people, not just user flows."
  }
];

export default function DesignPhilosophy() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="pt-10 pb-24 bg-bg-cream overflow-hidden" id="about">
      <div className={CONTAINER_CLASSES}>
        {/* Section Header - Duplicated from SelectedWork */}
        <div className="mb-8 md:mb-10 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-[800px]">
            <h2 className="font-display font-bold text-[32px] md:text-[36px] text-primary-blue mb-2">
              Design philosophy
            </h2>
            
            <div className="space-y-6">
              <p className="font-display font-bold text-2xl md:text-[32px] text-primary-blue leading-tight">
                I believe great products come from understanding people first.
              </p>
              <p className="font-raleway text-lg md:text-xl text-primary-blue leading-relaxed max-w-3xl font-medium">
                My approach combines user research, product thinking, and visual clarity to design experiences that feel natural and effortless. I aim to create products that are not only beautiful, but also useful, scalable, and aligned with business goals.
              </p>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="px-4 py-2 rounded-full border border-primary-blue/20 bg-primary-blue/5">
              <span className="text-xs md:text-sm font-raleway font-bold text-primary-blue tracking-wider uppercase">
                Approach
              </span>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-12 md:mt-16">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary-blue font-raleway">
              My Core Values
            </span>
          </div>

          <div className="flex flex-col border-t border-primary-blue/10">
            {values.map((value, index) => {
              const isHovered = hoveredIndex === index;
              const isOtherHovered = hoveredIndex !== null && !isHovered;

              return (
                <div 
                  key={index}
                  className="relative py-10 md:py-14 border-b border-primary-blue/10 group cursor-default"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div
                    animate={{ 
                      opacity: isOtherHovered ? 0.4 : 1,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex flex-col md:flex-row md:items-start gap-4 md:gap-16"
                  >
                    <motion.h3
                      animate={{ 
                        color: isHovered ? "#FF4FA3" : "#005C99",
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="text-4xl md:text-4xl font-display font-bold whitespace-nowrap"
                    >
                      {value.title}
                    </motion.h3>

                    <div className="flex-1 overflow-hidden">
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ 
                              duration: 0.4,
                              ease: [0.16, 1, 0.3, 1]
                            }}
                          >
                            <p className="text-lg md:text-xl text-primary-blue font-raleway font-medium leading-relaxed max-w-xl pt-2 md:pt-4">
                              {value.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
