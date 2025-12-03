

import React from 'react';
import InteractiveCard from './InteractiveCard';
import { legalContent } from '../content';

interface LegalSectionProps {
  type: 'privacy' | 'terms';
}

const LegalSection: React.FC<LegalSectionProps> = ({ type }) => {
  const content = type === 'privacy' ? legalContent.privacy : legalContent.terms;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-5xl text-white mb-4">{content.title}</h2>
        <p className="text-gray-400 font-mono">Información Legal</p>
      </div>
      
      <div className="w-full">
         <InteractiveCard rounded="rounded-3xl" className="bg-gray-900/80 md:bg-gray-900/60 md:backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
            <div 
              className="prose prose-invert prose-lg max-w-none
              prose-headings:font-display prose-headings:text-cyan-200 prose-headings:font-normal prose-headings:mb-4
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-gray-300 prose-ul:mb-6
              prose-li:marker:text-cyan-500
              prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
         </InteractiveCard>
      </div>
    </div>
  );
};

export default LegalSection;