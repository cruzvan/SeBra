
import React, { useEffect } from 'react';
import { PortfolioProject } from '../types';
import ResponsiveImage from './ResponsiveImage';

interface PortfolioProjectViewProps {
  project: PortfolioProject;
  onBack: () => void;
  isHeaderVisible: boolean;
}

const PortfolioProjectView: React.FC<PortfolioProjectViewProps> = ({ project, onBack, isHeaderVisible }) => {
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper function to process HTML string
  const renderContent = (htmlContent: string) => {
    
    // Inject lazy loading into any iframe (for embedded videos)
    const processedHtml = htmlContent.replace(/<iframe\s/g, '<iframe loading="lazy" ');

    return (
      <div
        className="prose md:prose-lg prose-invert max-w-none 
          prose-headings:font-display prose-headings:text-cyan-100 prose-headings:font-normal
          prose-p:text-gray-300 prose-p:leading-loose prose-p:mb-6
          prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:text-cyan-300
          prose-strong:text-white prose-strong:font-bold
          prose-li:text-gray-400
          prose-img:rounded-3xl prose-img:border prose-img:border-white/10 prose-img:shadow-2xl
          prose-span:text-sm prose-span:text-gray-500 prose-span:italic prose-span:block prose-span:text-center prose-span:mt-2"
        dangerouslySetInnerHTML={{ __html: processedHtml }}
      />
    );
  };

  return (
    <div className="w-full min-h-screen bg-black absolute top-0 left-0 z-50 animate-fade-in pb-20">
      
      {/* Navigation / Back Button - Sticky */}
      <div className={`sticky left-0 z-[60] p-6 flex justify-between items-center pointer-events-none transition-all duration-300 ${isHeaderVisible ? 'top-24' : 'top-4'}`}>
          <button 
            onClick={onBack}
            className="pointer-events-auto bg-black/60 md:backdrop-blur-md border border-white/10 text-white px-6 py-2 rounded-full font-mono text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 group shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver
          </button>
      </div>

      {/* Hero Banner Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] mt-[-88px]"> {/* Negative margin to pull banner behind sticky header */}
        {/* Main Image */}
        <ResponsiveImage 
            image={project.image}
            aspectRatio='16/9'
            className="w-full h-full object-cover"
        />
        
        {/* Gradient Fade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black"></div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
            <div className="container mx-auto max-w-4xl">
                <div className="flex flex-wrap gap-2 mb-4">
                     {project.tags.map(tag => (
                         <span key={tag} className="bg-cyan-900/80 md:bg-cyan-900/60 md:backdrop-blur-md text-cyan-200 text-xs font-bold px-3 py-1 rounded-full border border-cyan-500/20 shadow-lg">
                             {tag}
                         </span>
                     ))}
                </div>
                <h1 className="font-display text-3xl md:text-5xl lg:text-7xl text-white mb-2 leading-tight shadow-black drop-shadow-lg">
                    {project.title}
                </h1>
                <p className="font-mono text-gray-400 text-sm uppercase tracking-widest">
                    {project.category}
                </p>
            </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-3xl px-6 py-12 md:py-20 relative">
          
          {/* Dynamic HTML Content Body */}
          <div>
            {renderContent(project.content)}
          </div>

          {/* Footer inside view */}
          <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center text-xs font-mono text-gray-500">
              <span>Project ID: {project.id.toString().padStart(3, '0')}</span>
              <span>Second Brain Multimedia</span>
          </div>
      </div>
    </div>
  );
};

export default PortfolioProjectView;