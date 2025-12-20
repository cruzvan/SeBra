import React from 'react';
import { View } from '../App';
import { navigationContent } from '../content';

interface SubHeaderProps {
  activeView: View;
  onNavigate: (view: View) => void;
  currentTheme: { color: string; bg: string; border: string; glow: string };
}

const SubHeader: React.FC<SubHeaderProps> = ({ activeView, onNavigate, currentTheme }) => {
  const navItems: { label: string; view: View }[] = [
    { label: navigationContent.about, view: 'About' },
    { label: navigationContent.services, view: 'Services' },
    { label: navigationContent.press, view: 'Press' },
    { label: "Planes", view: 'Plans' },
    { label: navigationContent.team, view: 'Team' },
  ];

  return (
    <nav className="flex flex-wrap justify-center items-center w-full gap-2 px-2 md:px-0">
      {navItems.map((item) => {
        const isActive = activeView === item.view;
        return (
          <button
            key={item.view}
            onClick={() => onNavigate(item.view)}
            className={`
                relative px-6 py-3 rounded-t-xl font-display tracking-widest uppercase text-xs md:text-sm transition-all duration-300
                ${isActive
                ? `${currentTheme.color} bg-white/5 border-t border-x border-white/10 shadow-[0_-5px_20px_rgba(0,0,0,0.5)] z-10`
                : 'text-gray-500 hover:text-gray-200 hover:bg-white/5'
              }
            `}
          >
            {item.label}
            {/* Active Tab Indicator / Connection Line - Hides the bottom border of the tab to merge with content */}
            {isActive && (
              <div className={`absolute bottom-[-1px] left-0 right-0 h-[2px] ${currentTheme.bg} z-20`}></div>
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default SubHeader;