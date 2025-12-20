

import React, { useState, useMemo } from 'react';
import InteractiveCard from './InteractiveCard';
import { portfolioBraContent } from '../content';
import { PortfolioProject } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import ResponsiveImage from './ResponsiveImage';

interface PortfolioBraSectionProps {
  onSelectProject: (project: PortfolioProject) => void;
}

const PortfolioBraSection: React.FC<PortfolioBraSectionProps> = ({ onSelectProject }) => {
  const [activeTag, setActiveTag] = useState<string>('Todos');

  const tags = useMemo(() => {
    const allTags = portfolioBraContent.flatMap(p => p.tags);
    return ['Todos', ...Array.from(new Set(allTags))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeTag === 'Todos') return portfolioBraContent;
    return portfolioBraContent.filter(p => p.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <div className="w-full px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
        <div>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-2">BRAULIO</h2>
          <p className="text-purple-400 font-mono tracking-widest uppercase">Tecnología & Código Creativo</p>
        </div>
        <p className="text-gray-500 font-mono text-sm max-w-md mt-6 md:mt-0 text-right">
          Arquitectura de sistemas complejos y experiencias inmersivas. Donde la lógica se encuentra con la magia.
        </p>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
                activeTag === tag 
                ? 'bg-purple-500 text-white font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-105' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        <AnimatePresence>
          {filteredProjects.map((p) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={p.id}
              className="group cursor-pointer"
              onClick={() => onSelectProject(p)}
            >
              <div className="aspect-[4/3] mb-4">
                <InteractiveCard rounded="rounded-[2rem]" className="rounded-[2rem] overflow-hidden border border-white/10 bg-gray-900 h-full w-full">
                  <ResponsiveImage
                    image={p.image}
                    aspectRatio="4/3"
                    className="w-full h-full object-cover md:filter md:grayscale md:group-hover:grayscale-0 transition-all duration-700 transform md:group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {p.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="bg-black/60 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-full font-mono uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </InteractiveCard>
              </div>
              <div className="px-2">
                <h3 className="font-display text-2xl text-white group-hover:text-purple-400 transition-colors">{p.title}</h3>
                <span className="text-gray-500 text-xs font-mono uppercase tracking-wider">{p.category}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PortfolioBraSection;