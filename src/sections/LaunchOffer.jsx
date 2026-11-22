import React, { useState } from 'react';
import { Copy, Check, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const LaunchOffer = ({ onOpenPreOrder }) => {
  const [copied, setCopied] = useState(false);
  const promoCode = 'XPLAY20';

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(promoCode).catch(() => {});
    setCopied(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#38BDF8', '#0EA5E9', '#0284C7', '#FFFFFF'],
      });
    } catch {}
    setTimeout(() => setCopied(false), 2500);
  };

  const handleClaim = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#38BDF8', '#0284C7', '#0EA5E9'],
      });
    } catch {}
    onOpenPreOrder?.('pro');
  };

  return (
    <section className="w-full py-16 px-6 relative z-30 select-none bg-gradient-to-b from-[#eef5fc] to-white text-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-12 md:p-16 bg-white border border-slate-200/90 shadow-2xl shadow-sky-500/10 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Subtle Ambient Ice Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-200/30 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100/40 rounded-full blur-[80px] pointer-events-none" />

          {/* Left Column */}
          <div className="space-y-4 max-w-xl text-center lg:text-left relative z-10">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold tracking-wider uppercase font-sans">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>OFFICIAL LAUNCH CELEBRATION</span>
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-round-bold font-extrabold text-slate-900 tracking-tight leading-tight">
              Celebrate our launch with XPlay
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-normal">
              Get an instant 20% discount across all console hardware editions.
              Plug in your console drive, boot into 60 FPS AAA gaming, and leave zero footprint on your laptop.
            </p>

            {/* Promo Code Box */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 hover:border-sky-500 px-5 py-3 rounded-2xl transition-all cursor-pointer group shadow-sm"
                title="Click to copy promo code"
              >
                <span className="text-xs text-slate-500 font-bold uppercase font-sans">Code:</span>
                <span className="font-extrabold text-base text-sky-600 tracking-wider font-sans">
                  {promoCode}
                </span>
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4 text-slate-400 group-hover:text-sky-500 transition-colors" />
                )}
                {copied && (
                  <span className="text-xs text-emerald-600 font-bold font-sans">Copied!</span>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Pricing & Clean Action Button */}
          <div className="flex flex-col items-center lg:items-end justify-center space-y-4 shrink-0 relative z-10">
            <div className="text-center lg:text-right">
              <div className="text-xs font-bold uppercase text-slate-500 font-sans">
                First Gamers Special
              </div>
              <div className="text-4xl sm:text-6xl font-extrabold text-slate-950 font-round-bold tracking-tight">
                From ₹6,999
              </div>
              <div className="text-sm text-slate-400 line-through font-sans mt-0.5">
                Regular ₹7,999
              </div>
            </div>

            <button
              onClick={handleClaim}
              className="bg-sky-500 hover:bg-sky-600 text-white font-round-bold font-extrabold px-8 py-4 rounded-2xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-sky-500/25 hover:scale-105 transition-all cursor-pointer font-sans"
            >
              <span>Pre-Order Console</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LaunchOffer;
