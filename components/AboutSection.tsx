

import React, { useState } from 'react';
import { aboutContent } from '../content';
import InteractiveCard from './InteractiveCard';
import ResponsiveImage from './ResponsiveImage';
import AnimatedMedia from './AnimatedMedia';

const AboutSection: React.FC = () => {
  const [isMediaHovered, setIsMediaHovered] = useState(false);

  const renderMedia = (isHovered: boolean) => {
    const { media } = aboutContent;
    const mediaClasses = "w-full h-full object-cover";

    if (media.type === 'animation') {
      return <AnimatedMedia src={media.data.src} className={mediaClasses} isHovered={isHovered} />;
    }
    
    // Assuming type is 'image' if not 'animation'
    return <ResponsiveImage image={media.data} aspectRatio="1/1" className={mediaClasses} />;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      {/* Bento Grid Container - 3x2 Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* 1. Intro Card (Top Left - Spans 2 cols) */}
        <div className="lg:col-span-2">
            <InteractiveCard rounded="rounded-[2.5rem]" className="bg-gray-900/70 md:bg-gray-900/40 md:backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-white/10 h-full flex flex-col justify-center shadow-xl">
                <h3 className="font-display text-3xl md:text-4xl text-white mb-6 leading-tight">
                    <span className="text-cyan-400">{aboutContent.mainTitle}</span>
                </h3>
                <div className="space-y-4">
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {aboutContent.introParagraph1}
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        {aboutContent.introParagraph2}
                    </p>
                </div>
            </InteractiveCard>
        </div>

        {/* 2. Image Card (Top Right - 1 col - Square 1:1) */}
        <div 
            className="lg:col-span-1"
            onMouseEnter={() => setIsMediaHovered(true)}
            onMouseLeave={() => setIsMediaHovered(false)}
        >
          <InteractiveCard rounded="rounded-[2.5rem]" className="relative w-full h-full aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-gray-900">
             <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay z-10 pointer-events-none"></div>
             {renderMedia(isMediaHovered)}
             <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest border border-cyan-500/30 px-3 py-1 rounded-full bg-black/50 md:backdrop-blur-sm">
                    Est. 2024
                </span>
             </div>
          </InteractiveCard>
        </div>

        {/* 3. Mission (Bottom Left - 1 col) */}
        <div className="lg:col-span-1">
            <InteractiveCard rounded="rounded-[2.5rem]" className="bg-gray-900/70 md:bg-gray-900/40 md:backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 h-full flex flex-col justify-between shadow-xl group">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                    <h4 className="font-display text-xl text-white mb-3">{aboutContent.mission.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        {aboutContent.mission.text}
                    </p>
                </div>
            </InteractiveCard>
        </div>

        {/* 4. Vision (Bottom Center - 1 col) */}
        <div className="lg:col-span-1">
            <InteractiveCard rounded="rounded-[2.5rem]" className="bg-gray-900/70 md:bg-gray-900/40 md:backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 h-full flex flex-col justify-between shadow-xl group">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <div>
                    <h4 className="font-display text-xl text-white mb-3">{aboutContent.vision.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        {aboutContent.vision.text}
                    </p>
                </div>
            </InteractiveCard>
        </div>

        {/* 5. Values (Bottom Right - 1 col) */}
        <div className="lg:col-span-1">
            <InteractiveCard rounded="rounded-[2.5rem]" className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 md:from-gray-900/60 md:to-gray-800/60 md:backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 shadow-xl h-full flex flex-col">
                <h4 className="font-display text-2xl text-white leading-tight mb-6">
                    {aboutContent.values.title}
                </h4>
                
                <div className="flex flex-col gap-4 flex-grow">
                    {aboutContent.values.items.map((val, idx) => (
                        <div key={idx} className="bg-black/20 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-center flex-1">
                            <strong className="block text-cyan-300 font-display mb-1 text-base">{val.title}</strong>
                            <p className="text-xs text-gray-400 leading-tight">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </InteractiveCard>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;