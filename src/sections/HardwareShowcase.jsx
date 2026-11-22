import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HardDrive, ArrowRight, Sparkles } from 'lucide-react';
import { EDITIONS_DATA } from '../constants/editionsData';

gsap.registerPlugin(ScrollTrigger);

const editions = [
  {
    ...EDITIONS_DATA.student,
    capacityPill: '250GB SSD',
    includesSummary: '1x AAA Digital Game Key Included',
    includesPill: 'Drive Only (Bring Your Gamepad)',
  },
  {
    ...EDITIONS_DATA.standard,
    capacityPill: '500GB SSD',
    includesSummary: 'Pure Standalone DirectStorage Drive',
    includesPill: 'Dual USB-C & USB-A Braided Cables',
  },
  {
    ...EDITIONS_DATA.pro,
    capacityPill: '500GB Crucial NVMe',
    includesSummary: 'Wireless Gamepad + 1x AAA Key Included',
    includesPill: 'Complete Ready-To-Play Setup',
  },
  {
    ...EDITIONS_DATA.ultimate,
    capacityPill: '1TB Crucial NVMe',
    includesSummary: 'Elite Controller + 2x AAA Keys + Travel Case',
    includesPill: 'Flagship Collector Tier',
  }
];

const editionImages = {
  student: '/editions/xplay_student_edition.jpg',
  standard: '/editions/xplay_standard_edition.jpg',
  pro: '/editions/xplay_pro_edition.jpg',
  ultimate: '/editions/xplay_ultimate_edition.jpg'
};

const HardwareShowcase = ({ onOpenPreOrder }) => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeStep, setActiveStep] = useState(0);

  useGSAP(() => {
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    // 1. Smoothly fade out preceding video (.second-vd) on approach
    gsap.to('.second-vd', {
      scrollTrigger: {
        trigger: section,
        start: 'top 90%',
        end: 'top top',
        scrub: 1,
      },
      opacity: 0,
      ease: 'power1.inOut',
    });

    // 2. Exact card metrics: single centered card per view
    const getMetrics = () => {
      const isMobile = window.innerWidth < 768;
      const cardWidth = isMobile ? Math.min(window.innerWidth * 0.85, 340) : 440;
      const gap = isMobile ? 24 : 44;
      const step = cardWidth + gap;
      const totalDistance = step * (editions.length - 1);
      const centerOffset = Math.max(16, (window.innerWidth - cardWidth) / 2);

      gsap.set(track, { paddingLeft: `${centerOffset}px`, paddingRight: `${centerOffset}px` });
      return { totalDistance, step };
    };

    let { totalDistance } = getMetrics();

    // 3. Pinned ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${window.innerHeight * 2.5}`,
        pin: true,
        scrub: 0.8,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onRefresh: () => {
          const metrics = getMetrics();
          totalDistance = metrics.totalDistance;
        },
        onUpdate: (self) => {
          const p = self.progress;
          const targetIndex = p * (editions.length - 1);
          const currentIdx = Math.round(targetIndex);
          setActiveStep(currentIdx);

          cardsRef.current.forEach((card, idx) => {
            if (!card) return;
            const dist = Math.abs(targetIndex - idx);
            const factor = Math.max(0, 1 - dist);

            // Scale down/up cleanly from bottom center so top never clashes with header
            const scale = 0.92 + factor * 0.10; // 0.92 -> 1.02
            const opacity = 0.50 + factor * 0.50; // 0.50 -> 1.00

            gsap.set(card, {
              scale,
              opacity,
              borderColor: factor > 0.5 ? 'rgba(56, 189, 248, 0.7)' : 'rgba(226, 232, 240, 0.8)',
              boxShadow: factor > 0.5 
                ? '0 25px 50px -12px rgba(14, 165, 233, 0.22)' 
                : '0 10px 25px -5px rgba(15, 23, 42, 0.05)',
            });
          });
        }
      }
    });

    tl.to(track, {
      x: () => -totalDistance,
      ease: 'none',
      duration: 3,
    });

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-screen bg-[#f1f6fc] overflow-hidden select-none z-30 flex flex-col justify-between pt-16 md:pt-20 pb-4 md:pb-6"
    >
      {/* Background Soft Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(14,165,233,0.10),transparent)] pointer-events-none" />

      {/* Header: Compact & Cleanly Separated from Cards */}
      <div className="w-full text-center px-4 z-10 shrink-0 mb-2 md:mb-4">
        <p className="text-[10px] md:text-[11px] font-bold text-sky-600 uppercase tracking-[0.25em] mb-1">
          DirectStorage Hardware Lineup
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-slate-900 font-round-bold leading-tight">
          Choose Your <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">XPlay Console</span>
        </h2>
        <p className="text-slate-500 text-xs md:text-sm max-w-md mx-auto mt-1 font-medium">
          Scroll down to inspect each edition one-by-one.
        </p>
      </div>

      {/* Horizontal Cards Showcase Track */}
      <div className="relative w-full flex-1 flex items-center overflow-visible my-auto">
        <div 
          ref={trackRef} 
          className="flex items-center gap-6 md:gap-11 w-max"
        >
          {editions.map((edition, idx) => (
            <div 
              key={edition.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="w-[85vw] max-w-[340px] md:max-w-[440px] shrink-0 rounded-3xl bg-white/95 border border-slate-200/90 p-5 md:p-6 backdrop-blur-md transition-all flex flex-col justify-between shadow-[0_15px_35px_rgba(15,23,42,0.06)]"
              style={{ transformOrigin: 'center bottom' }}
            >
              <div>
                {/* Header: Title and Storage Badge */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="text-[10px] font-extrabold tracking-wider text-sky-600 uppercase block leading-none mb-1">
                      {edition.tagline}
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-slate-900 font-sans tracking-tight">
                      {edition.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-50 border border-sky-200/70 text-sky-800 text-xs font-bold shrink-0">
                    <HardDrive className="w-3.5 h-3.5 text-sky-600" />
                    <span>{edition.capacityNum}</span>
                  </div>
                </div>

                {/* Product Hardware Studio Stage (Compact height so it never overflows) */}
                <div className="relative w-full h-36 md:h-44 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100/60 border border-slate-100 mb-3.5 p-2 flex items-center justify-center group">
                  <img 
                    src={editionImages[edition.id]} 
                    alt={edition.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* What's In The Package Pills */}
                <div className="space-y-1.5 mb-2">
                  <div className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-800 text-center flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span className="truncate">{edition.includesSummary}</span>
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-sky-50/60 border border-sky-100 text-[11px] font-semibold text-sky-700 text-center truncate">
                    {edition.includesPill}
                  </div>
                </div>
              </div>

              {/* Bottom Row: Official Launch Pricing & Pre-Order Button */}
              <div className="pt-3 mt-1 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-slate-400 line-through leading-none">
                      {edition.price}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      SAVE ₹1,000
                    </span>
                  </div>
                  <div className="text-xl md:text-2xl font-black text-slate-900 leading-none mt-1">
                    {edition.launchPrice}
                  </div>
                </div>

                <button
                  onClick={() => onOpenPreOrder && onOpenPreOrder(edition.id)}
                  className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors duration-200 shadow-md cursor-pointer active:scale-95"
                >
                  <span>Pre-Order</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Active Dots Indicator: 1 of 4 */}
      <div className="w-full flex flex-col items-center gap-1.5 pb-1 z-10 shrink-0">
        <div className="flex items-center gap-2">
          {editions.map((ed, idx) => (
            <div 
              key={ed.id}
              className={`h-1.5 rounded-full transition-all duration-300 ${activeStep === idx ? 'w-7 bg-sky-600' : 'w-2 bg-slate-300'}`}
            />
          ))}
        </div>
        <span className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-widest">
          Edition {activeStep + 1} of 4
        </span>
      </div>
    </section>
  );
};

export default HardwareShowcase;
