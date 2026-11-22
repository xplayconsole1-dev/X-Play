import React from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowUp, ExternalLink } from 'lucide-react';
import XPlayBlockAnimation from '../components/XPlayBlockAnimation';

const GamingFooter = ({ onOpenPreOrder }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useGSAP(() => {
    gsap.from('.footer-fade-in', {
      scrollTrigger: {
        trigger: '.gaming-footer',
        start: 'top 85%',
        end: 'top 50%',
        scrub: 1,
      },
      opacity: 0,
      y: 35,
      stagger: 0.1,
      ease: 'power2.out',
    });
  });

  const socialLinks = [
    {
      name: 'X (Twitter)',
      url: 'https://twitter.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'Discord',
      url: 'https://discord.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="gaming-footer w-full bg-gradient-to-b from-[#f1f6fc] via-[#e2edfd] to-[#cfe2fe] text-slate-900 select-none overflow-hidden pt-16 pb-12 border-t border-sky-200/80 relative" id="support">
      
      {/* Delicate Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-300/35 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-blue-300/30 rounded-full blur-[90px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl w-full mx-auto px-5 sm:px-8 relative z-10 flex flex-col justify-between">
        
        {/* ========================================================== */}
        {/* TOP 3-COLUMN LAYOUT                                        */}
        {/* ========================================================== */}
        <div className="footer-fade-in grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start pb-10 border-b border-slate-300/70">
          
          {/* LEFT COLUMN: Clean Delicate X Logo + Tagline */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4">
            <Link to="/" className="flex items-center">
              <img
                src="/brand/04_icon.svg"
                alt="XPlay"
                className="h-9 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>

            <p className="text-slate-600 text-sm font-sans leading-relaxed max-w-sm">
              DirectStorage 60 FPS Gaming on Any Laptop. Plug in, boot directly, and play anywhere.
            </p>
          </div>

          {/* CENTER COLUMN: Navigation Links */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-6">
            
            {/* Sub-col 1: Editions */}
            <div className="flex flex-col space-y-2.5">
              <h4 className="text-xs font-sans font-bold text-sky-800 uppercase tracking-wider">
                Consoles
              </h4>
              <div className="flex flex-col space-y-2 text-xs font-sans text-slate-600">
                <button
                  onClick={() => onOpenPreOrder?.('student')}
                  className="text-left hover:text-sky-600 transition-colors cursor-pointer"
                >
                  Student (₹7,999)
                </button>
                <button
                  onClick={() => onOpenPreOrder?.('standard')}
                  className="text-left hover:text-sky-600 transition-colors cursor-pointer"
                >
                  Standard (₹13,499)
                </button>
                <button
                  onClick={() => onOpenPreOrder?.('pro')}
                  className="text-left font-bold text-sky-700 hover:text-sky-800 transition-colors cursor-pointer"
                >
                  Pro (₹18,499)
                </button>
                <button
                  onClick={() => onOpenPreOrder?.('ultimate')}
                  className="text-left hover:text-sky-600 transition-colors cursor-pointer"
                >
                  Ultimate (₹28,479)
                </button>
              </div>
            </div>

            {/* Sub-col 2: Ecosystem */}
            <div className="flex flex-col space-y-2.5">
              <h4 className="text-xs font-sans font-bold text-sky-800 uppercase tracking-wider">
                Ecosystem
              </h4>
              <div className="flex flex-col space-y-2 text-xs font-sans text-slate-600">
                <Link to="/games" className="hover:text-sky-600 transition-colors">
                  1,200+ Games
                </Link>
                <Link to="/games" className="hover:text-sky-600 transition-colors">
                  Game Library
                </Link>
                <Link to="/#about" className="hover:text-sky-600 transition-colors">
                  CNC Hardware
                </Link>
                <Link to="/#consoles" className="hover:text-sky-600 transition-colors">
                  Editions Compare
                </Link>
              </div>
            </div>

            {/* Sub-col 3: Company */}
            <div className="flex flex-col space-y-2.5">
              <h4 className="text-xs font-sans font-bold text-sky-800 uppercase tracking-wider">
                Company
              </h4>
              <div className="flex flex-col space-y-2 text-xs font-sans text-slate-600">
                <Link to="/about" className="hover:text-sky-600 transition-colors">
                  About XPlay
                </Link>
                <Link to="/community" className="hover:text-sky-600 transition-colors">
                  Community Hub
                </Link>
                <Link to="/support" className="hover:text-sky-600 transition-colors">
                  Support Desk
                </Link>
                <span className="hover:text-sky-600 transition-colors cursor-pointer">
                  Pan-India Shipping
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Social Media Links */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <h4 className="text-xs font-sans font-bold text-sky-800 uppercase tracking-wider">
              Community & Social
            </h4>

            <div className="flex flex-col space-y-2">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-3 rounded-xl bg-white/75 hover:bg-white border border-sky-100 hover:border-sky-300 transition-all shadow-sm flex items-center justify-between group cursor-pointer text-slate-700 hover:text-sky-600"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="text-sky-600 group-hover:text-sky-700 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-xs font-sans font-medium">
                      {item.name}
                    </span>
                  </div>

                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 transition-colors" />
                </a>
              ))}
            </div>

          </div>

        </div>

        {/* ========================================================== */}
        {/* DYNAMIC FALLING BLOCK ANIMATION                            */}
        {/* ========================================================== */}
        <div className="footer-fade-in w-full relative z-10 my-6">
          <XPlayBlockAnimation />
        </div>

        {/* ========================================================== */}
        {/* BOTTOM DIRECTORY BAR & ACTIONS                             */}
        {/* ========================================================== */}
        <div className="footer-fade-in w-full pt-6 border-t border-slate-300/70 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-600 z-10">
          
          <div className="text-center md:text-left">
            (c) 2026 XPlay Technologies Pvt. Ltd. • All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-semibold text-slate-700">
            <Link to="/#consoles" className="hover:text-sky-600 transition-colors">
              Consoles
            </Link>
            <Link to="/games" className="hover:text-sky-600 transition-colors">
              Games
            </Link>
            <Link to="/about" className="hover:text-sky-600 transition-colors">
              About
            </Link>
            <Link to="/community" className="hover:text-sky-600 transition-colors">
              Community
            </Link>
            <Link to="/support" className="hover:text-sky-600 transition-colors">
              Support
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="p-2 sm:px-3 rounded-full bg-white hover:bg-sky-50 border border-sky-200 text-slate-700 hover:text-sky-600 transition-all cursor-pointer shadow-sm flex items-center gap-1 text-[11px] font-sans font-bold"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-sky-600" />
              <span className="hidden sm:inline">Back to Top</span>
            </button>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default GamingFooter;
