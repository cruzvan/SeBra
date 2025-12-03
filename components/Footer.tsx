
import React from 'react';
import { headerContent } from '../content';
import InstagramIcon from './icons/InstagramIcon';
import BehanceIcon from './icons/BehanceIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import { View } from '../App';

interface FooterProps {
  onNavigate: (view: View) => void;
  onContactClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onContactClick }) => {
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-black/70 md:bg-black/40 md:backdrop-blur-md mt-auto relative z-20">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-white/5 pb-12">
            <div>
               <h4 className="font-display text-white mb-6 tracking-widest uppercase text-sm">Agencia</h4>
               <ul className="space-y-3 text-sm text-gray-500 font-mono">
                  <li><button onClick={() => onNavigate('About')} className="hover:text-cyan-400 transition-colors">Acerca de</button></li>
                  <li><button onClick={() => onNavigate('Services')} className="hover:text-cyan-400 transition-colors">Servicios</button></li>
                  <li><button onClick={() => onNavigate('Team')} className="hover:text-cyan-400 transition-colors">Equipo</button></li>
               </ul>
            </div>
            
            <div>
               <h4 className="font-display text-white mb-6 tracking-widest uppercase text-sm">Talento</h4>
               <ul className="space-y-3 text-sm text-gray-500 font-mono">
                  <li><button onClick={() => onNavigate('PortfolioSe')} className="hover:text-cyan-400 transition-colors">Winters of Blue</button></li>
                  <li><a href="https://cruzvan.github.io/portfolio/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Angelo Cruz</a></li>
               </ul>
            </div>

            <div>
               <h4 className="font-display text-white mb-6 tracking-widest uppercase text-sm">Soporte</h4>
               <ul className="space-y-3 text-sm text-gray-500 font-mono">
                  <li><button onClick={() => onNavigate('FAQ')} className="hover:text-cyan-400 transition-colors">Preguntas Frecuentes</button></li>
                  <li><button onClick={onContactClick} className="hover:text-cyan-400 transition-colors">Contacto</button></li>
               </ul>
            </div>

            <div>
               <h4 className="font-display text-white mb-6 tracking-widest uppercase text-sm">Legal</h4>
               <ul className="space-y-3 text-sm text-gray-500 font-mono">
                  <li><button onClick={() => onNavigate('Privacy')} className="hover:text-cyan-400 transition-colors">Privacidad</button></li>
                  <li><button onClick={() => onNavigate('Terms')} className="hover:text-cyan-400 transition-colors">Términos</button></li>
               </ul>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left: Copyright */}
            <div className="text-gray-500 text-xs font-mono tracking-wide text-center md:text-left">
            <span className="text-cyan-500/50">SEBRA</span> &copy; {new Date().getFullYear()} SECOND BRAIN MULTIMEDIA.
            <br className="md:hidden" /> ALL RIGHTS RESERVED.
            </div>

            {/* Right: Social Icons (Small & Discrete) */}
            <div className="flex items-center gap-6">
            <a 
                href={headerContent.socialLinks.instagram} 
                className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="Instagram"
            >
                <div className="w-5 h-5"><InstagramIcon /></div>
            </a>
            <a 
                href={headerContent.socialLinks.behance} 
                className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="Behance"
            >
                <div className="w-5 h-5"><BehanceIcon /></div>
            </a>
            <a 
                href={headerContent.socialLinks.linkedin} 
                className="text-gray-600 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
            >
                <div className="w-5 h-5"><LinkedInIcon /></div>
            </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
