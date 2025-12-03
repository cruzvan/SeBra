import React from 'react';
import { View } from '../App';
import { navigationContent } from '../content';

interface SubHeaderProps {
  activeView: View;
  onNavigate: (view: View) => void;
}

const SubHeader: React.FC<SubHeaderProps> = ({ activeView, onNavigate }) => {
  const navItems: { label: string; view: View }[] = [
    { label: navigationContent.about, view: 'About' },
    { label: navigationContent.services, view: 'Services' },
    { label: navigationContent.press, view: 'Press' },
    { label: navigationContent.team, view: 'Team' },
  ];

  return (
    <nav className="flex flex-wrap justify-center items-center w-full md:w-auto gap-x-4 gap-y-2 md:gap-16 px-2 md:px-0">
      {navItems.map((item, index) => (
        <button
          key={item.view}
          onClick={() => onNavigate(item.view)}
          className={`font-display tracking-widest uppercase transition-all duration-300 ease-in-out transform hover:scale-105 sm:hover:scale-110 ${
            activeView === item.view
              ? 'text-cyan-400 sm:scale-110' 
              : 'text-gray-500 hover:text-gray-200'
          } 
          text-[10px] sm:text-xs md:text-xl whitespace-nowrap
          `}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default SubHeader;