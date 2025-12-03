
import React from 'react';
import { teamContent } from '../content';
import InteractiveCard from './InteractiveCard';
import ResponsiveImage from './ResponsiveImage';
import { View } from '../App';

interface TeamSectionProps {
  onNavigate: (view: View) => void;
}

const TeamSection: React.FC<TeamSectionProps> = ({ onNavigate }) => {

  const handleMemberClick = (index: number) => {
      if (index === 0) { // First member ('Winters of Blue')
          onNavigate('PortfolioSe');
      } else if (index === 1) { // Second member ('Angelo Cruz')
          window.open('https://cruzvan.github.io/portfolio/', '_blank');
      }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      {/* Intro Text Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="font-display text-3xl md:text-5xl text-white mb-6 leading-tight">
          {teamContent.intro.title}
        </h2>
        {/* Reduced text size to text-base */}
        <p className="text-gray-100 text-base leading-relaxed">
          {teamContent.intro.description}
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
        
        {teamContent.members.map((member, index) => (
            <div 
                key={index}
                onClick={() => handleMemberClick(index)}
                className="group relative flex flex-col items-center cursor-pointer w-full"
            >
                {/* Image Size Increased by ~10% (16rem * 1.1 = 17.6rem) */}
                <div className="w-[17.6rem] h-[17.6rem] mb-8 relative">
                    <InteractiveCard className="h-full w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10 pointer-events-none"></div>
                        <ResponsiveImage 
                            image={member.image}
                            aspectRatio="1/1"
                            className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110 md:filter md:grayscale md:group-hover:grayscale-0"
                        />
                    </InteractiveCard>
                </div>
                
                <div className="text-center z-10">
                    <h3 className="font-display text-3xl text-white mb-2 md:group-hover:text-cyan-400 transition-colors">{member.name}</h3>
                    <p className="font-mono text-cyan-500 text-sm tracking-widest uppercase mb-1">{member.role}</p>
                    <p className="text-gray-500 text-xs">{member.subRole}</p>
                </div>
            </div>
        ))}

      </div>
    </div>
  );
};

export default TeamSection;
