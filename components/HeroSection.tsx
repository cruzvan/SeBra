
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center">
        
        {/* Pill label removed */}

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tighter mb-8 shadow-black drop-shadow-2xl">
          <div className="overflow-hidden">
            <motion.span 
              className="block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              SECOND BRAIN
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span 
              className="block text-white" 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              MULTIMEDIA
            </motion.span>
          </div>
        </h1>

        <motion.p 
          className="max-w-xl mx-auto text-gray-300 text-lg md:text-xl font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Construimos el universo visual, sonoro y estratégico que tu proyecto necesita.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-40 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500">Desliza para explorar</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
