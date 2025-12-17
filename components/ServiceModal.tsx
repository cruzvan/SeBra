

import React, { useState, FormEvent } from 'react';
import { Service } from '../types';
import CloseIcon from './icons/CloseIcon';
import { motion } from 'framer-motion';
import ResponsiveImage from './ResponsiveImage';
import emailjs from '@emailjs/browser'; // Import emailjs

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false); // New state for error handling

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(false);

    const templateParams = {
      user_email: email,
      service_title: service.title,
    };

    try {
      // NOTE: You might want to create a NEW template in EmailJS for this form
      // and use its ID here. Use the same Service ID as before.
      await emailjs.send('service_s3br4mult1m3d14', 'template_bcfwu0a', templateParams);
      
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
        onClose();
      }, 3000);

    } catch (error) {
      console.error('EmailJS send error:', error);
      setSubmitError(true);
    }
  };
  
  // Use the explicit images from the service object. Fallback for detailImage is mainImage.
  const mainImage = service.mainImage;
  const detailImage = service.detailImage || service.mainImage;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
      />
      
      {/* Modal Container */}
      <motion.div
        layoutId={`service-${service.title}`}
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-7xl bg-[#050505]/95 border border-white/10 rounded-3xl shadow-[0_0_60px_-15px_rgba(8,145,178,0.3)] backdrop-blur-2xl flex flex-col md:flex-row z-50 overflow-y-auto md:overflow-hidden custom-scrollbar isolate"
        style={{ height: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Gradient Glows */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(34,211,238,0.05),transparent_40%)] pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(168,85,247,0.05),transparent_40%)] pointer-events-none -z-10" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/40 hover:bg-cyan-900/40 rounded-full text-white/70 hover:text-cyan-200 transition-all border border-transparent hover:border-cyan-500/30"
          aria-label="Close"
        >
          <CloseIcon />
        </button>

        {/* Left Column: Text Content */}
        <div className="w-full md:w-3/5 p-4 sm:p-8 md:p-16 md:overflow-y-auto custom-scrollbar flex flex-col flex-shrink-0 relative">
            <motion.h2 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-display text-2xl sm:text-4xl md:text-6xl font-bold mb-8 text-cyan-400 leading-tight drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]"
            >
              {service.title}
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mb-10 rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.5)]" 
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 text-sm sm:text-lg md:text-xl leading-relaxed whitespace-pre-wrap font-light tracking-wide"
            >
              {service.detailedDescription}
            </motion.p>
        </div>

        {/* Right Column: Images & Form */}
        <div className="w-full md:w-2/5 border-t md:border-t-0 md:border-l border-white/10 flex flex-col bg-black/20 relative">
            
            {/* Image Section 1 */}
            <div className="relative h-40 md:h-1/3 overflow-hidden group border-b border-white/5 flex-shrink-0">
                <div className="absolute inset-0 bg-cyan-900/30 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                <ResponsiveImage 
                    image={mainImage}
                    aspectRatio='16/9'
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                />
            </div>

            {/* Image Section 2 */}
            <div className="relative h-40 md:h-1/3 overflow-hidden group border-b border-white/5 flex-shrink-0">
                <div className="absolute inset-0 bg-purple-900/30 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
                <ResponsiveImage
                    image={detailImage}
                    aspectRatio='16/9'
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                />
            </div>

            {/* Form Section */}
            <div className="h-auto md:h-1/3 p-6 sm:p-8 flex flex-col justify-center bg-gradient-to-b from-[#0a0a0a] to-[#050505] flex-shrink-0 relative">
                {/* Subtle top glow separator */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                
                <div className="relative z-10 flex-grow flex flex-col justify-center">
                    {service.title === "Obsidian Custom Database" ? (
                      <div className="flex flex-col gap-3 h-full justify-center">
                        <a 
                          href="https://ko-fi.com/s/608c8f7cf0" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full py-3 font-bold text-white bg-pink-500 rounded-xl hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-500 transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] text-base text-center flex items-center justify-center"
                        >
                          Comprar versión Lite
                        </a>
                        <a 
                          href="https://forms.gle/9YCrZqGBW2HfZeL48" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full py-3 font-bold text-black bg-cyan-400 rounded-xl hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] text-base text-center flex items-center justify-center"
                        >
                          Rellenar cuestionario bóveda personalizada
                        </a>
                      </div>
                    ) : (
                      <>
                        <h3 className="font-display text-xl mb-2 text-white">Interested?</h3>
                        <p className="text-sm text-gray-500 font-mono mb-4">Let's discuss how we can bring this vision to life.</p>
                        
                        {submitted ? (
                            <motion.div 
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              className="text-center text-green-400 p-4 bg-green-900/10 rounded-xl border border-green-500/20 text-sm shadow-[0_0_15px_rgba(74,222,128,0.1)]"
                            >
                                Request received! We'll be in touch soon.
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] focus:outline-none transition-all text-white placeholder-gray-600 text-base"
                                />
                                <button
                                    type="submit"
                                    className="w-full py-3 font-bold text-black bg-cyan-400 rounded-xl hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] text-base"
                                >
                                    Request Information
                                </button>
                            </form>
                        )}
                        {submitError && (
                          <p className="text-red-500 text-center text-sm mt-2">
                            Hubo un error al enviar tu solicitud. Inténtalo de nuevo.
                          </p>
                        )}
                      </>
                    )}
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceModal;
