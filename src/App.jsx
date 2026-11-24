import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import IntroVideo from './sections/IntroVideo';
import FounderStory from './sections/FounderStory';
import FeatureVideo from './sections/FeatureVideo';
import HardwareShowcase from './sections/HardwareShowcase';
import OutroVideo from './sections/OutroVideo';
import Outro from './sections/Outro';
import FeaturedGames from './sections/FeaturedGames';
import GamingFooter from './sections/GamingFooter';

import PreOrderModal from './components/PreOrderModal';
import LoginModal from './components/LoginModal';
import SEO from './components/SEO';
import ErrorBoundary from './components/ErrorBoundary';

// Dedicated Console Pages (Exact 1:1 Xbox on PC Style)
import ConsolesPage from './pages/ConsolesPage';
import EditionPage from './pages/EditionPage';
import StudentEditionPage from './pages/StudentEditionPage';
import GamesPage from './pages/GamesPage';
import AboutPage from './pages/AboutPage';
import CommunityPage from './pages/CommunityPage';
import SupportPage from './pages/SupportPage';
import NewsPage from './pages/NewsPage';

gsap.registerPlugin(ScrollTrigger);

// ScrollToTop on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [pathname]);

  return null;
};

// Landing Homepage Component (Cinematic Scroll Showcase + XPlay Console Products & Games)
const HomePage = ({ onOpenPreOrder }) => {
  return (
    <>
      <SEO 
        title="XPlay Console | 60 FPS Bare-Metal Gaming on Any PC"
        description="Experience 60 FPS console gaming on any laptop with XPlay DirectStorage NVMe technology."
        keywords="XPlay Console, DirectStorage, NVMe Gaming, PC Gaming, 60 FPS Gaming"
      />

      {/* 1. Hero Mask Animation */}
      <Hero />

      {/* 2. Pinned Scrub Intro Video (output1.mp4) */}
      <IntroVideo />

      {/* 3. Founder Story Section */}
      <FounderStory />

      {/* 4. Pinned Scrub Feature Video (output2.mp4) */}
      <FeatureVideo />

      {/* 5. 4 Products Horizontal Showcase (Scroll to Expand) */}
      <HardwareShowcase onOpenPreOrder={onOpenPreOrder} />

      {/* 6. Outro Video Scrub (output3.mp4) */}
      <OutroVideo />

      {/* 8. Outro Title Reveal */}
      <Outro />

      {/* 9. Games Moving Marquee Line */}
      <FeaturedGames onOpenPreOrder={onOpenPreOrder} />

      {/* 10. Official Commercial Footer */}
      <GamingFooter onOpenPreOrder={onOpenPreOrder} />
    </>
  );
};

const App = () => {
  const [preOrderOpen, setPreOrderOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [selectedEdition, setSelectedEdition] = useState('pro');

  const handleOpenPreOrder = (edition = 'pro') => {
    setSelectedEdition(edition);
    setPreOrderOpen(true);
  };

  return (
    <main>
      <ScrollToTop />

      {/* Floating XPlay Navbar with Consoles Dropdown */}
      <Navbar 
        onOpenPreOrder={handleOpenPreOrder} 
        onOpenLogin={() => setLoginOpen(true)} 
      />

      {/* Route Views */}
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage onOpenPreOrder={handleOpenPreOrder} />} />
          <Route path="/consoles" element={<ConsolesPage onOpenPreOrder={handleOpenPreOrder} />} />
          <Route path="/consoles/student" element={<StudentEditionPage onOpenPreOrder={handleOpenPreOrder} />} />
          <Route path="/consoles/:editionId" element={<EditionPage onOpenPreOrder={handleOpenPreOrder} />} />
          <Route path="/games" element={<GamesPage onOpenPreOrder={handleOpenPreOrder} />} />
          <Route path="/about" element={<AboutPage onOpenPreOrder={handleOpenPreOrder} />} />
          <Route path="/community" element={<CommunityPage onOpenPreOrder={handleOpenPreOrder} />} />
          <Route path="/news" element={<NewsPage onOpenPreOrder={handleOpenPreOrder} />} />
          <Route path="/support" element={<SupportPage onOpenPreOrder={handleOpenPreOrder} />} />
        </Routes>
      </ErrorBoundary>

      {/* Pre-Order Modal */}
      <PreOrderModal
        isOpen={preOrderOpen}
        onClose={() => setPreOrderOpen(false)}
        initialEdition={selectedEdition}
      />

      {/* Login Modal */}
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
      />
    </main>
  );
};

export default App;
