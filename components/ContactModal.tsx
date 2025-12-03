
import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import CloseIcon from './icons/CloseIcon';
import { servicesContent } from '../content';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'General Inquiry',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
        onClose();
    }, 3000); // Close after 3 seconds
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-3xl bg-[#050505]/95 border border-white/10 rounded-3xl shadow-[0_0_60px_-15px_rgba(8,145,178,0.3)] backdrop-blur-2xl overflow-hidden z-50 isolate"
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
        
        <div className="p-8 md:p-12">
            {submitted ? (
                 <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                 >
                    <h2 className="font-display text-3xl text-cyan-400 mb-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">¡Gracias!</h2>
                    <p className="text-gray-300">Hemos recibido tu mensaje. Nos pondremos en contacto contigo pronto.</p>
                 </motion.div>
            ) : (
                <>
                    <div className="text-center mb-8">
                        <h2 className="font-display text-4xl font-bold text-white leading-tight drop-shadow-lg">Hablemos</h2>
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: 64 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          className="h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" 
                        />
                        <p className="text-gray-400 mt-4 font-light">Completa el formulario y empecemos a crear algo increíble.</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text" name="name" placeholder="Tu Nombre" required
                                value={formData.name} onChange={handleChange}
                                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] focus:outline-none transition-all text-white placeholder-gray-600"
                            />
                            <input
                                type="email" name="email" placeholder="Tu Email" required
                                value={formData.email} onChange={handleChange}
                                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] focus:outline-none transition-all text-white placeholder-gray-600"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <select name="service" required value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] focus:outline-none transition-all text-white placeholder-gray-600">
                                <option value="General Inquiry">Tipo de Servicio</option>
                                {servicesContent.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                            </select>
                            <input
                                type="number" 
                                name="budget" 
                                placeholder="Presupuesto (USD)" 
                                required 
                                min="0"
                                value={formData.budget} 
                                onChange={handleChange} 
                                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] focus:outline-none transition-all text-white placeholder-gray-600"
                            />
                        </div>
                        
                        <textarea
                            name="message" placeholder="Cuéntanos sobre tu proyecto..." rows={4}
                            value={formData.message} onChange={handleChange}
                            className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] focus:outline-none transition-all text-white placeholder-gray-600 resize-none"
                        />

                        <button
                            type="submit"
                            className="w-full py-3 font-bold text-black bg-cyan-400 rounded-xl hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                        >
                            Enviar Mensaje
                        </button>
                    </form>
                </>
            )}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactModal;
