
import React, { useState, useEffect, useRef } from 'react';
import PricingSection from './components/PricingSection';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import PressSection from './components/PressSection';
import ServiceModal from './components/ServiceModal';
import BlogPostView from './components/BlogPostView';
import PortfolioProjectView from './components/PortfolioProjectView';
import HeroSection from './components/HeroSection';
import Background3D from './components/Background3D';
import Footer from './components/Footer';
import FAQSection from './components/FAQSection';
import PortfolioSeSection from './components/PortfolioSeSection';
import PortfolioBraSection from './components/PortfolioBraSection';
import LegalSection from './components/LegalSection';
import ContactModal from './components/ContactModal';
import { Service, BlogPost, PortfolioProject } from './types';
import { pressContent, portfolioSeContent, portfolioBraContent, servicesContent } from './content';
import { AnimatePresence, motion } from 'framer-motion';

export type View = 'About' | 'Services' | 'Press' | 'Team' | 'FAQ' | 'PortfolioSe' | 'PortfolioBra' | 'Privacy' | 'Terms' | 'Plans';

// Helper: Convert Title to Slug
const toSlug = (str: string) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const App: React.FC = () => {
  // State is now derived from URL hash primarily, but we keep local state for React rendering
  const [activeView, setActiveView] = useState<View>('Services');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isStuck, setIsStuck] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  // --- ROUTING LOGIC ---

  const processHash = () => {
    const hash = window.location.hash.slice(1); // Remove '#'
    const [section, detail] = hash.split('/');

    // 1. Determine View
    let newView: View = 'Services'; // Default
    switch (section) {
      case 'about': newView = 'About'; break;
      case 'services': newView = 'Services'; break;
      case 'press': newView = 'Press'; break;
      case 'team': newView = 'Team'; break;
      case 'faq': newView = 'FAQ'; break;
      case 'portfolio-se': newView = 'PortfolioSe'; break;
      case 'portfolio-bra': newView = 'PortfolioBra'; break;
      case 'privacy': newView = 'Privacy'; break;
      case 'terms': newView = 'Terms'; break;
      case 'planes': newView = 'Plans'; break;
      default:
        // If empty or unknown, stick to Services (or home)
        if (section === '') newView = 'Services';
        else newView = 'Services';
        break;
    }

    setActiveView(newView);

    // 2. Handle Details (Modals or Full Page Views)

    // Reset all details first
    setSelectedService(null);
    setSelectedPost(null);
    setSelectedProject(null);

    if (section === 'services' && detail) {
      const foundService = servicesContent.find(s => toSlug(s.title) === detail);
      if (foundService) setSelectedService(foundService);
    } else if (section === 'press' && detail) {
      const foundPost = pressContent.find(p => p.slug === detail);
      if (foundPost) setSelectedPost(foundPost);
    } else if (section === 'portfolio-se' && detail) {
      const foundProject = portfolioSeContent.find(p => p.id.toString() === detail);
      if (foundProject) setSelectedProject(foundProject);
    } else if (section === 'portfolio-bra' && detail) {
      const foundProject = portfolioBraContent.find(p => p.id.toString() === detail);
      if (foundProject) setSelectedProject(foundProject);
    }
  };

  useEffect(() => {
    // Listen for hash changes
    window.addEventListener('hashchange', processHash);

    // Process initial hash
    processHash();

    return () => window.removeEventListener('hashchange', processHash);
  }, []);

  // --- NAVIGATION HANDLERS (Update Hash) ---

  const handleNavigate = (view: View) => {
    let hash = '';
    switch (view) {
      case 'About': hash = 'about'; break;
      case 'Services': hash = 'services'; break;
      case 'Press': hash = 'press'; break;
      case 'Team': hash = 'team'; break;
      case 'FAQ': hash = 'faq'; break;
      case 'PortfolioSe': hash = 'portfolio-se'; break;
      case 'PortfolioBra': hash = 'portfolio-bra'; break;
      case 'Privacy': hash = 'privacy'; break;
      case 'Terms': hash = 'terms'; break;
      case 'Plans': hash = 'planes'; break;
    }

    window.location.hash = hash;

    // Scroll handling
    if (contentRef.current) {
      // If we are just switching main views, scroll to top of content
      // But if we are already there, maybe not needed. 
      // Let's scroll to provide a "navigation" feel.
      const headerHeight = 80;
      const targetScroll = contentRef.current.offsetTop - headerHeight;

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  // Detail Navigation handlers
  const onServiceSelect = (service: Service) => {
    window.location.hash = `services/${toSlug(service.title)}`;
  };

  const onServiceClose = () => {
    // Return to main services view
    window.location.hash = 'services';
    // setSelectedService(null); // The hash listener will handle this
  };

  const onPostSelect = (post: BlogPost) => {
    window.location.hash = `press/${post.slug}`;
  };

  const onPostBack = () => {
    window.location.hash = 'press';
  };

  const onProjectSelect = (project: PortfolioProject) => {
    // Determine which portfolio we are in
    const section = activeView === 'PortfolioSe' ? 'portfolio-se' : 'portfolio-bra';
    window.location.hash = `${section}/${project.id}`;
  };

  const onProjectBack = () => {
    const section = activeView === 'PortfolioSe' ? 'portfolio-se' : 'portfolio-bra';
    window.location.hash = section;
  };

  // --- EFFECTS ---

  useEffect(() => {
    const isFloatingModalOpen = !!selectedService || isContactModalOpen;
    document.body.style.overflow = isFloatingModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedService, isContactModalOpen]);

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
          setIsHeaderVisible(true);
        } else {
          setIsHeaderVisible(false);
        }
        lastScrollY.current = currentScrollY;
      }
    };
    window.addEventListener('scroll', controlHeader, { passive: true });
    return () => window.removeEventListener('scroll', controlHeader);
  }, []);

  useEffect(() => {
    const handleStickyCheck = () => {
      if (!contentRef.current) return;
      const rect = contentRef.current.getBoundingClientRect();
      const offset = isHeaderVisible ? 80 : 0;
      setIsStuck(rect.top <= offset + 2);
    };

    window.addEventListener('scroll', handleStickyCheck, { passive: true });
    handleStickyCheck();
    return () => window.removeEventListener('scroll', handleStickyCheck);
  }, [isHeaderVisible]);


  // --- RENDER ---

  const renderActiveView = () => {
    switch (activeView) {
      case 'About':
        return <AboutSection />;
      case 'Services':
        return <ServicesSection onServiceSelect={onServiceSelect} />;
      case 'Press':
        if (selectedPost) {
          return <BlogPostView post={selectedPost} onBack={onPostBack} isHeaderVisible={isHeaderVisible} />;
        }
        return <PressSection onSelectPost={onPostSelect} />;
      case 'Team':
        return <TeamSection onNavigate={handleNavigate} />;
      case 'FAQ':
        return <FAQSection />;
      case 'Privacy':
        return <LegalSection type="privacy" />;
      case 'Terms':
        return <LegalSection type="terms" />;
      case 'PortfolioSe':
        if (selectedProject) {
          return <PortfolioProjectView project={selectedProject} onBack={onProjectBack} isHeaderVisible={isHeaderVisible} />;
        }
        return <PortfolioSeSection onSelectProject={onProjectSelect} />;
      case 'PortfolioBra':
        if (selectedProject) {
          return <PortfolioProjectView project={selectedProject} onBack={onProjectBack} isHeaderVisible={isHeaderVisible} />;
        }
        return <PortfolioBraSection onSelectProject={onProjectSelect} />;
      case 'Plans':
        return <PricingSection />;
      default:
        return <ServicesSection onServiceSelect={onServiceSelect} />;
    }
  };

  const isBackgroundPaused = !!selectedService || !!selectedPost || !!selectedProject || isContactModalOpen;
  const showHero = !selectedPost && !selectedProject;

  return (
    <div className="min-h-screen bg-black text-gray-100 relative selection:bg-cyan-500/30">

      <Background3D paused={isBackgroundPaused} />

      <Header onContactClick={() => setIsContactModalOpen(true)} isVisible={isHeaderVisible} />

      <div className="relative z-10">

        {showHero && <HeroSection />}

        <div ref={contentRef} className={`relative min-h-screen transition-[padding] duration-300 ${showHero ? 'mt-[-15vh] md:mt-[-5vh]' : (isHeaderVisible ? 'pt-20' : 'pt-4')}`}>

          {showHero && (
            <div className={`sticky z-40 w-full transition-all duration-300 overflow-hidden shadow-2xl ${isHeaderVisible ? 'top-20' : 'top-0'} ${isStuck ? 'rounded-none' : 'rounded-t-[3rem]'}`}>

              <div className={`absolute inset-0 bg-black/80 md:bg-black/60 md:backdrop-blur-xl border-b border-white/5 transition-all duration-300 ${isStuck ? 'rounded-none' : 'rounded-t-[3rem]'}`}></div>

              <div className="relative py-4 px-4 sm:px-6 flex justify-center">
                <div className="container mx-auto">
                  <SubHeader activeView={activeView} onNavigate={handleNavigate} />
                </div>
              </div>
            </div>
          )}

          <div className={`bg-black/80 md:bg-black/60 md:backdrop-blur-xl min-h-screen flex flex-col ${showHero ? 'pt-8' : ''}`}>
            <main className={`container mx-auto flex-grow ${showHero ? 'px-4 sm:px-6 md:px-8' : ''}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPost ? `post-${selectedPost.slug}` : selectedProject ? `project-${selectedProject.id}` : activeView}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderActiveView()}
                </motion.div>
              </AnimatePresence>
            </main>

            <Footer onNavigate={handleNavigate} onContactClick={() => setIsContactModalOpen(true)} />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal service={selectedService} onClose={onServiceClose} />
        )}
        {isContactModalOpen && (
          <ContactModal onClose={() => setIsContactModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
