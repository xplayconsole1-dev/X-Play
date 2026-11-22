import React from 'react';
import { ShieldCheck, Cpu, HardDrive, Layers, Zap, ArrowRight, Lock, CheckCircle2, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

const AboutPage = ({ onOpenPreOrder }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#060b18] to-slate-950 text-white pt-20 pb-24 select-none font-sans overflow-x-hidden selection:bg-sky-500 selection:text-slate-950">
      <SEO
        title="Hardware Architecture — CNC Aluminium & DirectStorage"
        description="The engineering behind XPlay: Precision anodized aluminum enclosure, high-efficiency thermal pads, and zero-footprint portable NVMe storage."
        keywords="about XPlay, portable gaming drive, SanPolicy 4 isolation, CNC aluminium console hardware"
      />

      {/* 1. Header */}
      <section className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950/80 border border-sky-400/40 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>HARDWARE ENGINEERING</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-4">
          BUILT FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500">MAXIMUM THROUGHPUT</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto uppercase tracking-wider font-semibold">
          Zero Host SSD Wear. Efficient Passive Cooling. Portable NVMe Speed.
        </p>
      </section>

      {/* 2. Hardware Hero Render */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="relative rounded-3xl overflow-hidden border-2 border-sky-300 bg-white shadow-[0_20px_60px_rgba(56,189,248,0.2)]">
          <div className="aspect-[16/9] sm:aspect-[21/9] w-full">
            <img
              src="/brand/01_product_drive.jpg"
              alt="Anodized Aluminum Enclosure"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = '/assets/xplay_pocket_console_hero.jpg';
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent sm:opacity-90" />
          
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-wrap items-center justify-between gap-4 text-white">
            <div>
              <span className="text-xs font-mono text-sky-300 font-bold uppercase tracking-wider block">
                SOLID-STATE MONOLITH
              </span>
              <span className="text-lg sm:text-2xl font-black">
                Anodized Aluminum Alloy Chassis
              </span>
            </div>
            <button
              onClick={() => onOpenPreOrder?.('pocket')}
              className="px-6 py-3 rounded-xl bg-white hover:bg-sky-50 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl hover:scale-105 transition-all cursor-pointer"
            >
              <span>Pre-Order Console</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. The 4 Engineering Layers */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <h2 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 mb-8 text-center tracking-wider">
          Anatomy of a High-Speed Console
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border-2 border-sky-200 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-700 font-black text-lg mb-4">
              01
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2 uppercase">Aluminum Alloy Enclosure</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Precision crafted aluminum alloy shell provides rigid structural durability and effective passive heat dissipation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border-2 border-sky-200 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-100 border border-cyan-300 flex items-center justify-center text-cyan-800 font-black text-lg mb-4">
              02
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2 uppercase">Passive Thermal Pads</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              High-efficiency internal thermal silicone pads transfer heat directly to the exterior metal enclosure with zero fan noise.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border-2 border-sky-200 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-700 font-black text-lg mb-4">
              03
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2 uppercase">DirectStorage NVMe</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              1,050 MB/s sustained read speeds feed GPU VRAM directly without CPU bottlenecks. Near-instant world loads.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border-2 border-sky-200 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 border border-indigo-300 flex items-center justify-center text-indigo-700 font-black text-lg mb-4">
              04
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2 uppercase">SanPolicy=4 Isolation</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Host laptop drives remain offline, unmounted, and BitLocker protected. Zero corporate telemetry or traces left behind.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SanPolicy=4 Host Isolation Blueprint */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="rounded-3xl p-8 sm:p-12 bg-white border-2 border-sky-300 shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-sky-700 block mb-2">
              SECURITY ARCHITECTURE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-slate-900">
              Zero Host SSD Footprint
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-200">
              <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase mb-3">
                <Lock className="w-4 h-4" />
                <span>Your Office / Host Laptop</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>BitLocker Encryption 100% Locked</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>Internal SSD Unmounted & Read-Only</span>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>0 Bytes Written to Company Hard Drive</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-sky-50 border-2 border-sky-300">
              <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase mb-3">
                <Zap className="w-4 h-4" />
                <span>XPlay Dedicated Gaming OS</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2 text-slate-800 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>Boots from 1,050 MB/s NVMe Core</span>
                </li>
                <li className="flex items-center gap-2 text-slate-800 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>Direct GPU & RAM Acceleration</span>
                </li>
                <li className="flex items-center gap-2 text-slate-800 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>Clean Disconnect with Zero Traces</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <button
          onClick={() => onOpenPreOrder?.('pocket')}
          className="px-10 py-4 rounded-xl bg-black hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-xl hover:scale-105 transition-all cursor-pointer"
        >
          <span>Claim Launch Allocation — From ₹7,999</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
