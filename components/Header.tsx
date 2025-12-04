import React from 'react';
import InstagramIcon from './icons/InstagramIcon';
import BehanceIcon from './icons/BehanceIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import { headerContent } from '../content';

interface HeaderProps {
  onContactClick: () => void;
  isVisible: boolean;
}

const Header: React.FC<HeaderProps> = ({ onContactClick, isVisible }) => {
  return (
    <header className={`fixed top-0 left-0 w-full z-50 h-20 bg-black border-b border-white/10 shadow-2xl transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          
          <div className="flex items-center gap-2 sm:gap-4 w-1/3">
             <a href={headerContent.socialLinks.instagram} aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-300 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                <InstagramIcon />
            </a>
          </div>

          <div className="font-display text-lg sm:text-3xl font-bold tracking-wider w-1/3 text-center">
            <span className="text-white-600">{headerContent.logoPrefix}</span>
            <span className="text-cyan-400">{headerContent.logoSuffix}</span>
          </div>
          
          <div className="flex justify-end w-1/3">
            <button
              onClick={onContactClick}
              className="px-2 sm:px-6 py-1 sm:py-2 text-[11px] sm:text-sm font-medium text-black bg-white hover:bg-gray-200 rounded-full transition-colors duration-300 whitespace-nowrap"
            >
              {headerContent.ctaText}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;