import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Sparkles, LogIn, ArrowRight } from 'lucide-react';

const Navbar = ({ onOpenPreOrder, onOpenLogin }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const consoleEditions = [
    {
      id: 'student',
      name: 'Student',
      spec: '250GB SSD',
      price: '₹6,999',
      image: '/editions/xplay_student_edition.jpg',
      path: '/consoles/student'
    },
    {
      id: 'standard',
      name: 'Standard',
      spec: '500GB SSD',
      price: '₹12,499',
      image: '/editions/xplay_standard_edition.jpg',
      path: '/consoles/standard'
    },
    {
      id: 'pro',
      name: 'Pro',
      spec: '500GB + Gamepad',
      price: '₹17,499',
      popular: true,
      image: '/editions/xplay_pro_edition.jpg',
      path: '/consoles/pro'
    },
    {
      id: 'ultimate',
      name: 'Ultimate',
      spec: '1TB + Elite Kit',
      price: '₹27,479',
      image: '/editions/xplay_ultimate_edition.jpg',
      path: '/consoles/ultimate'
    },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center md:px-16 md:py-8 p-5 z-[100] transition-all select-none">
      {/* Clean Delicate X Logo */}
      <Link to="/" onClick={() => setDropdownOpen(false)} className="flex items-center">
        <img
          src="/brand/04_icon.svg"
          alt="XPlay"
          className="h-8 md:h-9 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
        />
      </Link>

      {/* Nav Menu */}
      <div className="flex items-center gap-6 sm:gap-8 font-round-bold text-white text-xs sm:text-sm uppercase tracking-widest">

        {/* Consoles dropdown */}
        <div
          ref={dropdownRef}
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors cursor-pointer py-2"
          >
            <span>Consoles</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-cyan-400' : 'text-white/70'}`} />
          </button>

          {dropdownOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[660px] max-w-[92vw] rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.18)] animate-in fade-in zoom-in-95 duration-200 z-50 text-left normal-case">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <span className="text-xs font-sans font-bold text-slate-400 tracking-wider uppercase">
                  XPlay Consoles
                </span>
                <span className="text-[11px] font-sans font-semibold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                  Save ₹1,000 Launch Offer
                </span>
              </div>

              {/* 4 Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {consoleEditions.map((c) => (
                  <Link
                    key={c.id}
                    to={c.path}
                    onClick={() => setDropdownOpen(false)}
                    className={`relative flex flex-col justify-between p-3 rounded-2xl border transition-all duration-200 group text-center ${
                      c.popular 
                        ? 'bg-sky-50/70 border-sky-300 shadow-sm' 
                        : 'bg-slate-50/60 border-slate-200/70 hover:bg-sky-50/40 hover:border-sky-200'
                    }`}
                  >
                    {/* Popular Pill */}
                    {c.popular && (
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.2 rounded-full bg-sky-600 text-[9px] font-bold text-white uppercase tracking-wider shadow-xs">
                        Best Value
                      </span>
                    )}

                    {/* Small Hardware Stage */}
                    <div className="w-full h-20 rounded-xl bg-white border border-slate-100 mb-2 p-1 flex items-center justify-center overflow-hidden">
                      <img 
                        src={c.image} 
                        alt={c.name}
                        className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Edition Specs */}
                    <div>
                      <h4 className="text-xs font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                        XPlay {c.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
                        {c.spec}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mt-2 pt-1.5 border-t border-slate-100/80">
                      <span className="text-xs font-black text-slate-900 font-sans">
                        {c.price}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Bottom Footer Action */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center">
                <Link
                  to="/consoles"
                  onClick={() => setDropdownOpen(false)}
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-slate-600 hover:text-sky-600 transition-colors"
                >
                  <span>Compare All 4 Hardware Editions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}
        </div>

        <Link to="/#about" className="hover:text-yellow transition-colors hidden md:inline-block">
          Hardware
        </Link>

        <Link to="/#consoles" className="hover:text-yellow transition-colors hidden md:inline-block">
          Editions
        </Link>

        <Link to="/#games" className="hover:text-yellow transition-colors hidden sm:inline-block">
          Games
        </Link>

        <button
          onClick={() => onOpenPreOrder?.('pro')}
          className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-300 hover:to-cyan-300 text-slate-950 font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-sky-500/20 cursor-pointer"
        >
          Pre-Order
        </button>

        <button
          onClick={() => onOpenLogin?.()}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 hover:border-cyan-400 text-white hover:text-cyan-300 font-sans font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all shadow-md cursor-pointer ml-1"
          aria-label="Login"
        >
          <LogIn className="w-3.5 h-3.5 text-cyan-400" />
          <span>Login</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
