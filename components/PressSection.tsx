

import React, { useState, useMemo } from 'react';
import { pressContent } from '../content';
import { BlogPost } from '../types';
import InteractiveCard from './InteractiveCard';
import ResponsiveImage from './ResponsiveImage';
import { motion, AnimatePresence } from 'framer-motion';

interface PressSectionProps {
  onSelectPost?: (post: BlogPost) => void;
}

const PressSection: React.FC<PressSectionProps> = ({ onSelectPost }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  // Extract unique categories dynamically from content
  const categories = useMemo(() => {
    const uniqueCats = Array.from(new Set(pressContent.map(post => post.category)));
    return ['Todos', ...uniqueCats];
  }, []);

  // Filter logic
  const filteredPosts = useMemo(() => {
    if (activeCategory === 'Todos') return pressContent;
    return pressContent.filter(post => post.category === activeCategory);
  }, [activeCategory]);

  const handlePostClick = (e: React.MouseEvent, post: BlogPost) => {
    e.preventDefault();
    if (onSelectPost) {
      onSelectPost(post);
    }
  };

  return (
    <div className="w-full px-4 py-8">

      {/* Category Filter Sub-Header */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              px-5 py-2 rounded-full text-xs font-mono uppercase tracking-widest border transition-all duration-300
              ${activeCategory === category
                ? 'bg-cyan-950/50 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                : 'bg-black/20 border-white/5 text-gray-500 hover:border-white/20 hover:text-gray-300 hover:bg-white/5'
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Posts Grid with Animation */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e: React.MouseEvent) => handlePostClick(e, post)}
              className="group block w-full cursor-pointer"
            >
              <InteractiveCard rounded="rounded-[1.5rem]" className="rounded-[1.5rem] overflow-hidden bg-gray-900/80 md:bg-gray-900/60 border border-white/10 md:backdrop-blur-md shadow-2xl transition-colors duration-300 md:hover:bg-gray-800/80">
                <div className="flex flex-col md:flex-row items-stretch">

                  {/* Image Container - Flush to edges */}
                  <div className="relative w-full md:w-1/4 h-40 md:h-auto flex-shrink-0 md:rounded-[1.5rem] overflow-hidden">
                    <ResponsiveImage
                      image={post.image}
                      aspectRatio='16/9'
                      className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110 md:filter md:grayscale md:group-hover:grayscale-0"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-cyan-900/80 text-cyan-200 text-[10px] font-bold px-2 py-1 rounded-full md:backdrop-blur-md border border-cyan-500/20 shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content - Compacted Padding & Spacing */}
                  <div className="p-4 md:p-5 flex flex-col justify-center flex-grow">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">{post.date}</div>
                    </div>

                    <h3 className="font-display text-xl md:text-2xl text-white mb-2 leading-tight md:group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>

                    {/* Reduced line clamp to 2 to save vertical space */}
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-2 mb-2">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-2 border-t border-white/5 flex items-center text-cyan-500 font-bold text-[10px] tracking-wider uppercase md:group-hover:translate-x-2 transition-transform duration-300">
                      Leer Artículo
                      <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-mono text-sm">
            No hay artículos en esta categoría.
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PressSection;