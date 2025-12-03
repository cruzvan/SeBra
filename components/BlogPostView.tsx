
import React, { useEffect } from 'react';
import { BlogPost } from '../types';
import ResponsiveImage from './ResponsiveImage';

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
  isHeaderVisible: boolean;
}

const BlogPostView: React.FC<BlogPostViewProps> = ({ post, onBack, isHeaderVisible }) => {
  
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
            prose-p:text-gray-400 prose-p:leading-loose prose-p:mb-6
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
      
      {/* Navigation / Back Button - Sticky to ensure it stays visible during scroll */}
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
      <div className="relative w-full h-[60vh] md:h-[70vh] mt-[-88px]"> {/* Negative margin to pull banner behind sticky header */}
        {/* Main Image */}
        <ResponsiveImage 
            image={post.image}
            aspectRatio='16/9'
            className="w-full h-full object-cover"
        />
        
        {/* Gradient Fade Overlay - Blends image into black background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black"></div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
            <div className="container mx-auto max-w-4xl">
                <span className="inline-block px-4 py-1 mb-6 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 text-xs font-bold tracking-widest uppercase md:backdrop-blur-md">
                    {post.category}
                </span>
                <h1 className="font-display text-3xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight shadow-black drop-shadow-lg">
                    {post.title}
                </h1>
                <div className="flex items-center gap-4 text-gray-400 font-mono text-sm">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span>Lectura de 5 min</span>
                </div>
            </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-3xl px-6 py-12 md:py-20 relative">
          
          {/* Excerpt */}
          <p className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed mb-12 border-l-4 border-cyan-500 pl-6 italic">
              {post.excerpt}
          </p>

          {/* Dynamic HTML Content Body */}
          <div>
            {renderContent(post.content)}
          </div>

          {/* Share / Footer */}
          <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
              <span className="text-gray-500 text-sm font-mono">Compartir este artículo</span>
              <div className="flex gap-4">
                  {/* Social placeholders */}
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default BlogPostView;