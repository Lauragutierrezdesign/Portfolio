import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  colors: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  className?: string;
}

export default function GradientText({
  children,
  colors,
  animationSpeed = 8,
  showBorder = false,
  className = "",
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    backgroundSize: '300% 100%',
    animation: `gradient ${animationSpeed}s linear infinite`,
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {showBorder && (
        <div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            ...gradientStyle,
            padding: '2px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
      )}
      <span
        className="inline-block text-transparent bg-clip-text"
        style={gradientStyle}
      >
        {children}
      </span>
    </div>
  );
}
