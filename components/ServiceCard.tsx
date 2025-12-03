
import React, { useState, useRef, useEffect } from 'react';
import { Service } from '../types';
import ResponsiveImage from './ResponsiveImage';
import AnimatedMedia from './AnimatedMedia';

interface ServiceCardProps {
  service: Service;
  onSelect: (service: Service) => void;
  shadowColor: string;
  index: number;
  className?: string;
  isTall?: boolean; 
}

const glowClassMap: { [key: string]: string } = {
    cyan: 'bg-cyan-700',
    pink: 'bg-pink-700',
    sky: 'bg-sky-700',
    rose: 'bg-rose-700',
    indigo: 'bg-indigo-700',
    blue: 'bg-blue-700',
    fuchsia: 'bg-fuchsia-700',
};


const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect, shadowColor, index, className = '' }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [aberration, setAberration] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
        // Updated threshold to include tablets (iPad portrait is 768px, landscape 1024px)
        setIsMobile(window.innerWidth < 1024);
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

    const rotateX = -(y / height) * 8; 
    const rotateY = (x / width) * 8;

    setRotation({ x: rotateX, y: rotateY });

    const abX = (x / width) * 20; 
    const abY = (y / height) * 5;
    setAberration({ x: abX, y: abY });
  };
  
  const handleMouseEnter = () => {
      if (!isMobile) {
          setIsHovered(true);
      }
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setRotation({ x: 0, y: 0 });
    setAberration({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const glowClass = glowClassMap[shadowColor] || glowClassMap.cyan;
  const outerRadius = "rounded-[2.5rem]";

  const renderAsset = () => {
    const assetClasses = "absolute inset-0 w-full h-full object-cover transition-all duration-700 md:group-hover:scale-110 md:filter md:grayscale md:group-hover:grayscale-0";
    
    // Force static image on mobile/tablet to improve performance and data usage
    if (isMobile) {
        return <ResponsiveImage image={service.mainImage} aspectRatio="4/3" className={assetClasses} />;
    }

    if (service.cardAsset.type === 'animation') {
      return <AnimatedMedia src={service.cardAsset.data.src} className={assetClasses} isHovered={isHovered} />;
    }
    return <ResponsiveImage image={service.cardAsset.data} aspectRatio="4/3" className={assetClasses} />;
  };

  return (
    <div
      ref={cardRef}
      onClick={() => onSelect(service)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
      className={`group relative w-full h-full cursor-pointer ${className}`}
    >
      {/* 1. Outer Glow */}
      <div 
        className={`absolute -inset-[1px] ${outerRadius} ${glowClass} opacity-0 blur-md transition-opacity duration-500 md:group-hover:opacity-40 md:group-hover:animate-pulse-glow`}
      />

      {/* 2. Central Deep Glow */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 rounded-full ${glowClass} opacity-0 blur-[80px] transition-all duration-700 md:group-hover:w-[120%] md:group-hover:h-[120%] md:group-hover:opacity-20`}
      />

      {/* 3. Aberration Layers */}
      <div 
        className={`absolute inset-0 ${outerRadius} bg-rose-600/20 mix-blend-screen opacity-0 md:group-hover:opacity-100 pointer-events-none`}
        style={{
            transform: `translate(${aberration.x * -1}px, ${aberration.y * -1}px)`,
            transition: 'opacity 0.2s ease-out, transform 0.1s linear'
        }}
      />
      <div 
        className={`absolute inset-0 ${outerRadius} bg-cyan-600/20 mix-blend-screen opacity-0 md:group-hover:opacity-100 pointer-events-none`}
        style={{
             transform: `translate(${aberration.x}px, ${aberration.y}px)`,
             transition: 'opacity 0.2s ease-out, transform 0.1s linear'
        }}
      />

      {/* 4. MAIN CARD */}
      <div
        className={`relative w-full h-full bg-[#080808]/80 md:bg-[#080808]/60 md:backdrop-blur-xl transition-transform duration-200 ease-out will-change-transform ${outerRadius} border border-white/5 md:group-hover:border-white/20 flex flex-col`}
        style={{ 
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` 
        }}
      >
        <div className="h-full flex flex-col">
            
            {/* Image Container - Expanded to take up available space */}
            <div 
                className={`w-full flex-grow relative overflow-hidden rounded-[2.5rem] shadow-lg bg-gray-900 transition-all duration-300 min-h-[16rem] md:min-h-[22rem] isolate`} 
                style={{ 
                    transform: 'translateZ(20px)',
                    // Force the browser to respect overflow-hidden during transform
                    WebkitMaskImage: '-webkit-radial-gradient(white, black)'
                }}
            >
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] z-20 pointer-events-none" />
                
                {renderAsset()}

                {/* Tags */}
                <div className="absolute bottom-5 left-5 z-30 translate-y-4 opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out flex flex-wrap gap-2">
                    {service.tags?.slice(0, 2).map(tag => (
                        <span key={tag} className="bg-black/80 text-cyan-300 text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 md:backdrop-blur-sm">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* CTA Moved Inside Image */}
                <div className="absolute bottom-5 right-5 z-30 translate-y-4 opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out">
                    <div className="flex items-center gap-3 bg-black/80 md:bg-black/60 md:backdrop-blur-xl border border-white/10 px-5 py-2 rounded-full shadow-xl">
                        <span className="text-xs font-bold tracking-widest uppercase text-cyan-300 md:group-hover:text-cyan-200">
                            View Details
                        </span>
                        <div className="w-2 h-2 rounded-full bg-white/20 md:group-hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                    </div>
                </div>
            </div>
            
            {/* Text Content - Occupies remaining space */}
            <div className="px-6 py-5 flex flex-col justify-start relative z-20 shrink-0">
                <h3 
                    className="font-display text-xl md:text-2xl font-bold mb-2 text-cyan-100 md:group-hover:text-white transition-colors leading-tight" 
                    style={{ transform: 'translateZ(40px)' }}
                >
                    {service.title}
                </h3>
                
                <p 
                    className="text-gray-400 text-sm leading-relaxed md:group-hover:text-gray-300 transition-colors" 
                    style={{ transform: 'translateZ(30px)' }}
                >
                    {service.briefDescription}
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
