
import React from 'react';
import { motion } from 'framer-motion';
import { PortfolioProject } from '../types';
import CloseIcon from './icons/CloseIcon';
import ResponsiveImage from './ResponsiveImage';

interface PortfolioModalProps {
  project: PortfolioProject;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, onClose }) => {
  
  // Inject lazy loading into any iframe found in the content HTML string
  const processedContent = project.content.replace(
      /<iframe\s/g, 
      '<iframe loading="lazy" '
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Main Container - Dimensions matched to ServiceModal */}
      <motion.div
        layoutId={`portfolio-${project.id}`}
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-7xl bg-gray-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-50"
        style={{ height: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-black/40 hover:bg-cyan-500 rounded-full text-white/80 hover:text-white transition-all duration-300 border border-white/10 group"
        >
          <CloseIcon />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto custom-scrollbar h-full w-full bg-gray-900/50">
            
            {/* Hero Image Section - Height reduced to allow content visibility */}
            <div className="w-full h-64 md:h-96 relative shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                {/* FIX: Pass the entire `project.image` object to the `image` prop as expected by the ResponsiveImage component. */}
                <ResponsiveImage
                    image={project.image}
                    className="w-full h-full object-cover"
                />
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20">
                    <div className="max-w-4xl">
                        <div className="flex flex-wrap gap-2 mb-3">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono uppercase tracking-widest rounded-full backdrop-blur-md">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h2 className="font-display text-3xl md:text-5xl text-white mb-1 leading-tight drop-shadow-2xl">
                            {project.title}
                        </h2>
                        <p className="font-mono text-gray-400 text-xs md:text-sm uppercase tracking-widest">
                            {project.category}
                        </p>
                    </div>
                </div>
            </div>

            {/* Rich Content Body */}
            <div className="max-w-4xl mx-auto px-6 py-10 md:py-16">
                <div 
                    className="prose prose-invert prose-lg max-w-none
                    prose-headings:font-display prose-headings:text-cyan-100 prose-headings:font-normal
                    prose-p:text-gray-300 prose-p:leading-loose prose-p:text-base md:prose-p:text-lg
                    prose-img:rounded-3xl prose-img:border prose-img:border-white/10 prose-img:shadow-2xl prose-img:my-8
                    prose-a:text-cyan-400 hover:prose-a:text-cyan-300
                    prose-li:text-gray-300
                    "
                    dangerouslySetInnerHTML={{ __html: processedContent }}
                />
                
                {/* Navigation/Footer inside modal */}
                <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center text-xs font-mono text-gray-500">
                    <span>Project ID: {project.id.toString().padStart(3, '0')}</span>
                    <span>Second Brain Multimedia</span>
                </div>
            </div>

        </div>
      </motion.div>
    </div>
  );
};

export default PortfolioModal;