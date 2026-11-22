import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const Storefronts = () => {
  return (
    <section className="w-full py-16 px-6 relative z-30 select-none bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-sky-700 bg-sky-50 border border-sky-200 px-3.5 py-1 rounded-full font-sans">
            NATIVE STOREFRONT INTEGRATION
          </span>
          <h2 className="text-3xl sm:text-5xl font-round-bold font-extrabold text-slate-900 tracking-tight">
            Powered by Steam & Epic Games
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Log directly into your existing accounts. Your games, achievements, and cloud saves sync instantly with zero driver configuration.
          </p>
        </div>

        {/* 2 Storefront Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Valve Steam */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl shadow-slate-200/60 border border-slate-200/90 hover:border-sky-500 transition-all duration-300 group">
            <div className="space-y-4">
              <span className="inline-block px-2.5 py-1 text-[11px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 rounded-sm font-sans">
                AVAILABLE WITH STEAM
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-round-bold font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                Steam Official Storefront
              </h3>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans font-normal">
                Connect your Steam library. Games download directly to the NVMe at up to 1,050 MB/s sustained speed. Steam Cloud saves, friends list, and VAC anti-cheat work out of the box.
              </p>
            </div>

            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-5 text-xs text-emerald-600 font-sans font-bold">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Cloud Saves Synced</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>VAC Anti-Cheat Safe</span>
                </div>
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-sky-600 group-hover:text-sky-700 font-sans">
                  <span>Connect Steam Library</span>
                  <ChevronRight className="w-4 h-4 stroke-[3] group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Epic Games */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl shadow-slate-200/60 border border-slate-200/90 hover:border-sky-500 transition-all duration-300 group">
            <div className="space-y-4">
              <span className="inline-block px-2.5 py-1 text-[11px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 rounded-sm font-sans">
                AVAILABLE WITH EPIC GAMES
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-round-bold font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                Epic Games Store
              </h3>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans font-normal">
                Play Fortnite, Rocket League, EA Sports FC, and claim your free weekly Epic Store titles with zero driver setup or manual configuration.
              </p>
            </div>

            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-5 text-xs text-emerald-600 font-sans font-bold">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>EasyAntiCheat Safe</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Weekly Free Titles</span>
                </div>
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-sky-600 group-hover:text-sky-700 font-sans">
                  <span>Browse Epic Titles</span>
                  <ChevronRight className="w-4 h-4 stroke-[3] group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Storefronts;
