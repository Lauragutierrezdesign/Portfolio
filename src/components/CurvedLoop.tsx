import React, { useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'motion/react';

interface CurvedLoopProps {
  marqueeText: string;
  speed?: number;
  curveAmount?: number;
  direction?: 'left' | 'right';
  interactive?: boolean;
  className?: string;
}

export const CurvedLoop: React.FC<CurvedLoopProps> = ({
  marqueeText,
  speed = 0.1,
  curveAmount = 0,
  direction = 'left',
  interactive = false,
  className = '',
}) => {
  const baseX = useMotionValue(0);
  const textRef = useRef<HTMLDivElement>(null);

  // We duplicate the text enough times to ensure it fills the screen and loops seamlessly
  const repetitions = 10; 
  const repeatedText = Array(repetitions).fill(marqueeText).join(' \u00A0\u00A0 ');

  // Replace the sparkle icon with a colored version
  const renderTextWithSpans = (text: string) => {
    return text.split('✦').map((part, i, arr) => (
      <React.Fragment key={i}>
        {part}
        {i < arr.length - 1 && <span className="text-[#FF4FA3]">✦</span>}
      </React.Fragment>
    ));
  };

  useAnimationFrame((t, delta) => {
    if (!textRef.current) return;

    // Calculate movement based on speed and delta time
    const moveBy = direction === 'left' ? -speed * delta : speed * delta;
    
    let newX = baseX.get() + moveBy;
    
    // Get the width of one full set of the text to know when to loop
    // Since we rendered two identical spans, we loop when we've moved the width of one span
    const totalWidth = textRef.current.scrollWidth;
    const loopWidth = totalWidth / 2;

    if (direction === 'left' && newX <= -loopWidth) {
      newX += loopWidth;
    } else if (direction === 'right' && newX >= 0) {
      newX -= loopWidth;
    }
    
    baseX.set(newX);
  });

  return (
    <div 
      className={`overflow-hidden whitespace-nowrap flex w-full ${className}`}
      style={{
        pointerEvents: interactive ? 'auto' : 'none',
      }}
    >
      <motion.div
        ref={textRef}
        className="flex shrink-0"
        style={{ x: baseX }}
      >
        <span className="px-4">{renderTextWithSpans(repeatedText)}</span>
        <span className="px-4">{renderTextWithSpans(repeatedText)}</span>
      </motion.div>
    </div>
  );
};
