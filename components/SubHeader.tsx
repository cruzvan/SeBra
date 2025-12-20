import React from 'react';
import { View } from '../App';

interface SubHeaderProps {
  activeView: string;
  onNavigate: (view: any) => void;
  currentTheme: { color: string; bg: string; border: string; glow: string };
}

const SubHeader: React.FC<SubHeaderProps> = ({ activeView, onNavigate, currentTheme }) => {
  const navItems = [
    { label: 'Acerca de', view: 'About' },
    { label: 'Servicios Creativos', view: 'Services' },
    { label: 'Prensa', view: 'Press' },
    { label: 'Planes', view: 'Plans' },
    { label: 'Quienes Somos', view: 'Team' },
    // { label: 'FAQ', view: 'FAQ' },
    // { label: 'Portfolio Se', view: 'PortfolioSe' },
    // { label: 'Portfolio Bra', view: 'PortfolioBra' },
  ];

  return (
    <nav className="w-full z-50">

      {/* DESKTOP VIEW: Tabs Row */}
      <div className="hidden md:flex flex-wrap items-center w-full gap-2 px-0 md:justify-start">
        {navItems.map((item) => {
          const isActive = activeView === item.view;
          return (
            <button
              key={item.view}
              onClick={() => onNavigate(item.view)}
              className={`
                    relative px-6 py-3 rounded-t-xl font-display tracking-widest uppercase text-sm transition-all duration-300
                    ${isActive
                  ? `${currentTheme.color} bg-white/5 border-t border-x border-white/10 shadow-[0_-5px_20px_rgba(0,0,0,0.5)] z-10`
                  : 'text-gray-500 hover:text-gray-200 hover:bg-white/5 border border-transparent'
                }
                `}
            >
              {item.label}
              {isActive && (
                <div className={`absolute bottom-[-1px] left-0 right-0 h-[2px] ${currentTheme.bg} z-20`}></div>
              )}
            </button>
          );
        })}
      </div>

      {/* MOBILE VIEW: Visible Control Grid */}
      <div className="md:hidden w-full px-4 pb-0">
        <div className="grid grid-cols-2 gap-2">
          {navItems.map((item) => {
            const isActive = activeView === item.view;
            return (
              <button
                key={item.view}
                onClick={() => onNavigate(item.view)}
                className={`
                            relative px-2 py-3 rounded-lg font-display tracking-wider uppercase text-[10px] transition-all duration-300 border
                            ${isActive
                    ? `bg-white/10 border-white/20 text-white font-bold shadow-none`
                    : 'bg-transparent border-white/5 text-gray-500'
                  }
                        `}
                // Inline style for dynamic active border color to match theme exactly without complex class parsing if needed
                style={isActive ? { borderColor: 'rgba(255,255,255,0.2)' } : {}}
              >
                <span className={isActive ? currentTheme.color : ''}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default SubHeader;