import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(() => {
    try {
      return !!sessionStorage.getItem('xplay_preloader_seen');
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (isFinished) return;

    // Infallible fail-safe: Preloader NEVER traps the user on a black screen
    const safetyTimer = setTimeout(() => {
      setIsFinished(true);
      try {
        sessionStorage.setItem('xplay_preloader_seen', 'true');
      } catch {}
    }, 1500);

    // 1. Progress Counter Animation (0 -> 100%)
    const counterObj = { val: 0 };
    gsap.to(counterObj, {
      val: 100,
      duration: 1.2,
      ease: 'power2.inOut',
      onUpdate: () => {
        setProgress(Math.floor(counterObj.val));
      },
    });

    // 2. SVG Stroke Draw & Fill Animation
    const tl = gsap.timeline({
      onComplete: () => {
        // Smooth Exit Animation
        gsap.to('.preloader-screen', {
          opacity: 0,
          scale: 1.05,
          duration: 0.5,
          ease: 'power3.inOut',
          onComplete: () => {
            setIsFinished(true);
            try {
              sessionStorage.setItem('xplay_preloader_seen', 'true');
            } catch {}
            setTimeout(() => {
              ScrollTrigger.refresh();
            }, 100);
          },
        });
      },
    });

    // Animate the stroke tracing of both chevrons
    tl.fromTo(
      '.x-stroke-left, .x-stroke-right',
      {
        strokeDashoffset: 1900,
      },
      {
        strokeDashoffset: 0,
        duration: 1.8,
        ease: 'power2.inOut',
      }
    )
      // Pulse & Fill Bloom
      .to('.x-fill', {
        opacity: 0.9,
        duration: 0.6,
        ease: 'power1.out',
      }, '-=0.4')
      .to('.preloader-badge', {
        opacity: 0,
        y: -10,
        duration: 0.3,
      });

    return () => {
      tl.kill();
    };
  }, []);

  if (isFinished) return null;

  return (
    <div className="preloader-screen fixed inset-0 z-[9999] bg-[#030712] flex flex-col items-center justify-center select-none overflow-hidden">
      
      {/* Subtle Ambient Radial Backlight */}
      <div className="absolute w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Rockstar-Style Animated X Logo Outline */}
      <div className="relative w-40 h-40 sm:w-52 sm:h-52 flex items-center justify-center">
        <svg
          viewBox="0 0 1000 1000"
          className="w-full h-full filter drop-shadow-[0_0_25px_rgba(56,189,248,0.45)]"
        >
          <defs>
            <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E0F2FE" />
              <stop offset="40%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>

            <linearGradient id="fillGrad" x1="0%" y1="0%" x2="30%" y2="100%">
              <stop offset="0%" stopColor="#67E8F9" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>

          {/* Background Faint Outline (Matches Rockstar's dim R* outline in dark) */}
          <polygon
            points="482.6,430.3 247.1,195.0 125.0,195.0 404.1,500.0 125.0,805.0 247.1,805.0 482.6,569.7"
            fill="none"
            stroke="rgba(56, 189, 248, 0.12)"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <polygon
            points="517.4,430.3 752.9,195.0 875.0,195.0 595.9,500.0 875.0,805.0 752.9,805.0 517.4,569.7"
            fill="none"
            stroke="rgba(56, 189, 248, 0.12)"
            strokeWidth="8"
            strokeLinejoin="round"
          />

          {/* Active Animated Tracing Stroke - Left Chevron */}
          <polygon
            points="482.6,430.3 247.1,195.0 125.0,195.0 404.1,500.0 125.0,805.0 247.1,805.0 482.6,569.7"
            fill="none"
            stroke="url(#traceGrad)"
            strokeWidth="12"
            strokeDasharray="1900"
            strokeDashoffset="1900"
            strokeLinejoin="round"
            className="x-stroke-left"
          />

          {/* Active Animated Tracing Stroke - Right Chevron */}
          <polygon
            points="517.4,430.3 752.9,195.0 875.0,195.0 595.9,500.0 875.0,805.0 752.9,805.0 517.4,569.7"
            fill="none"
            stroke="url(#traceGrad)"
            strokeWidth="12"
            strokeDasharray="1900"
            strokeDashoffset="1900"
            strokeLinejoin="round"
            className="x-stroke-right"
          />

          {/* Soft Bloom Fill (Fades in on completion) */}
          <g className="x-fill opacity-0 transition-opacity">
            <polygon
              points="482.6,430.3 247.1,195.0 125.0,195.0 404.1,500.0 125.0,805.0 247.1,805.0 482.6,569.7"
              fill="url(#fillGrad)"
            />
            <polygon
              points="517.4,430.3 752.9,195.0 875.0,195.0 595.9,500.0 875.0,805.0 752.9,805.0 517.4,569.7"
              fill="url(#fillGrad)"
            />
          </g>
        </svg>
      </div>

      {/* Sleek Minimal Progress Counter */}
      <div className="preloader-badge mt-6 flex flex-col items-center gap-2">
        <span className="text-xs font-mono font-bold tracking-widest text-sky-400">
          {progress}%
        </span>
        <div className="w-24 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sky-400 to-sky-200 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

    </div>
  );
};

export default Preloader;