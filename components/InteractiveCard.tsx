

import React, { useState, useRef, useEffect } from 'react';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  rounded?: string;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ children, className = '', rounded = "rounded-2xl" }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [aberration, setAberration] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isMobile) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const x = mouseX - width / 2;
    const y = mouseY - height / 2;

    // Slightly less intense rotation for text cards compared to service cards
    const rotateX = -(y / height) * 8; 
    const rotateY = (x / width) * 8;

    setRotation({ x: rotateX, y: rotateY });

    // Dynamic aberration calculation
    const abX = (x / width) * 20; 
    const abY = (y / height) * 5;
    setAberration({ x: abX, y: abY });
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setRotation({ x: 0, y: 0 });
    setAberration({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
      className="group relative h-full"
    >
      {/* Chromatic Aberration Layers - Ghost elements behind */}
      <div 
        className={`absolute inset-0 ${rounded} bg-rose-500/20 mix-blend-screen opacity-0 md:group-hover:opacity-100 pointer-events-none`}
        style={{
            transform: `translate(${aberration.x * -1}px, ${aberration.y * -1}px)`,
            transition: 'opacity 0.2s ease-out, transform 0.1s linear'
        }}
      />
      <div 
        className={`absolute inset-0 ${rounded} bg-cyan-500/20 mix-blend-screen opacity-0 md:group-hover:opacity-100 pointer-events-none`}
        style={{
             transform: `translate(${aberration.x}px, ${aberration.y}px)`,
             transition: 'opacity 0.2s ease-out, transform 0.1s linear'
        }}
      />

      {/* Main Content Container */}
      <div
        className={`relative h-full transition-transform duration-200 ease-out will-change-transform ${className}`}
        style={{ 
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` 
        }}
      >
        <div style={{ transform: 'translateZ(20px)' }} className="h-full flex flex-col">
            {children}
        </div>
      </div>
    </div>
  );
};

export default InteractiveCard;