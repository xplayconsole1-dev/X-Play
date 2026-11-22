import React from 'react';
import { 
  Cpu, 
  Zap, 
  ShieldCheck, 
  HardDrive, 
  Layers, 
  ArrowRight, 
  Check, 
  Box, 
  Cable, 
  Sparkles 
} from 'lucide-react';
import SEO from '../components/SEO';

const ConsolesPage = ({ onOpenPreOrder }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#060b18] to-slate-950 text-white pt-20 pb-24 select-none font-sans overflow-x-hidden selection:bg-sky-500 selection:text-slate-950">
      <SEO
        title="Consoles — High-Speed Gaming Hardware"
        description="Experience XPlay hardware. Powered by high-speed NVMe DirectStorage performance, anodized aluminum alloy enclosure, and zero-footprint host isolation."
        keywords="XPlay console, portable gaming hardware, external NVMe console, Forza Horizon, Spider-Man PC"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'XPlay Console',
          image: 'https://xplayconsole.com/brand/01_product_drive.jpg',
          description: 'A portable gaming console that boots any student or office laptop into 60 FPS AAA gaming.',
          brand: { '@type': 'Brand', name: 'XPlay' },
          offers: {
            '@type': 'Offer',
            price: '7999',
            priceCurrency: 'INR',
            availability: 'https://schema.org/PreOrder'
          }
        }}
      />

      {/* 1. Hardware Hero Showcase */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Top Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/80 border border-sky-400/40 text-sky-400 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>NEXT-GEN HARDWARE REVEAL</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white mb-4">
          XPLAY <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500">CONSOLE</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-lg max-w-xl mx-auto uppercase tracking-wider font-semibold mb-10">
          Play Has No Limits. Carry Your Entire Console With You.
        </p>

        {/* Floating Hardware Beauty Render */}
        <div className="relative w-full max-w-4xl aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-white/20 shadow-[0_20px_60px_rgba(56,189,248,0.15)] bg-slate-900 group">
          <img
            src="/brand/01_product_drive.jpg"
            alt="XPlay Console Hardware"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            onError={(e) => {
              e.target.src = '/assets/xplay_pocket_console_hero.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent sm:opacity-90" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white">
            <div className="text-left">
              <span className="text-[11px] font-mono uppercase tracking-widest text-sky-300 font-bold block">
                CHASSIS SPECIFICATION
              </span>
              <span className="text-lg sm:text-xl font-bold tracking-wide">
                Anodized Aluminum Alloy • 9.8mm Ultra-Slim Profile
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

        {/* Key Hardware Telemetry Pills */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl text-center">
          <div className="p-5 rounded-2xl bg-white border border-sky-200 shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">1,050 <span className="text-xs text-sky-600 font-sans">MB/s</span></div>
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-bold mt-1">Sustained Read</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-sky-200 shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">0 <span className="text-xs text-sky-600 font-sans">BYTES</span></div>
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-bold mt-1">Host SSD Footprint</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-sky-200 shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">60 <span className="text-xs text-sky-600 font-sans">FPS</span></div>
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-bold mt-1">Direct Hardware Link</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-sky-200 shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">40 <span className="text-xs text-sky-600 font-sans">Gbps</span></div>
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-bold mt-1">Braided Metal Link</div>
          </div>
        </div>
      </section>

      {/* 2. Hardware Architecture Showcase (Glacier White Callouts) */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-sky-200">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-sky-700 block mb-2">
            HARDWARE ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight">
            Raw Power In Your Palm
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-3xl bg-white border-2 border-sky-200 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform">
                <HardDrive className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black uppercase text-slate-900 mb-3">Custom DirectStorage</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Bypasses CPU decompression bottleneck. Game assets stream directly from XPlay NVMe directly into your GPU VRAM in milliseconds.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 text-[11px] font-mono text-sky-700 font-bold uppercase">
              1,050 MB/s Zero-Lag Streaming
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl bg-white border-2 border-sky-200 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-cyan-100 border border-cyan-300 flex items-center justify-center text-cyan-700 mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black uppercase text-slate-900 mb-3">Passive Metal Cooling</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                High-efficiency thermal silicone pads conduct heat directly across the aluminum alloy casing. Zero fans, zero noise, and stable sustained read/write performance.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 text-[11px] font-mono text-cyan-800 font-bold uppercase">
              100% Silent Solid-State Architecture
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-white border-2 border-sky-200 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-700 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black uppercase text-slate-900 mb-3">SanPolicy=4 Isolation</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Boots dedicated XPlay OS. Your host office Windows, BitLocker keys, and corporate drives remain 100% offline, unmounted, and untouched.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 text-[11px] font-mono text-blue-800 font-bold uppercase">
              Zero Footprint • IT Admin Safe
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Console Editions Showcase (Showcased like PS5 Standard vs PS5 Digital) */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-sky-200" id="models">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-sky-700 block mb-2">
            THE HARDWARE EDITIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight">
            Choose Your Weapon
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Console 1: XPlay Student */}
          <div className="rounded-3xl p-8 sm:p-10 bg-white border border-slate-200 hover:border-sky-300 flex flex-col justify-between shadow-md hover:shadow-xl relative overflow-hidden group transition-all">
            <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-700 font-black text-[10px] uppercase tracking-wider">
              COLLEGE & ESPORTS
            </div>

            <div className="space-y-6">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-6">
                <img
                  src="/brand/01_product_drive.jpg"
                  alt="XPlay Student"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <span className="text-xs font-mono text-sky-600 font-bold uppercase tracking-wider block mb-1">
                  250GB SSD • 1 GAME + CABLE
                </span>
                <h3 className="text-3xl font-black uppercase text-slate-900">
                  XPlay Student
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-2">
                  Solid Aluminum Console Drive + Braided Cable + 1 Selected Game. Designed for College Students, Casual Gamers, and Esports (Valorant, CS, FIFA).
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>250GB High-Speed SSD</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>Solid Aluminum Console Drive</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>High-Speed Braided Cable</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>1 Selected Game Included</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-500 uppercase block font-bold">Standard Price</span>
                <span className="text-2xl font-black text-slate-900 font-mono">₹7,999</span>
              </div>
              <button
                onClick={() => onOpenPreOrder?.('student')}
                className="px-7 py-3.5 rounded-xl bg-black hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:scale-105 transition-all cursor-pointer"
              >
                <span>Pre-Order Student</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Console 2: XPlay Standard */}
          <div className="rounded-3xl p-8 sm:p-10 bg-white border border-slate-200 hover:border-sky-300 flex flex-col justify-between shadow-md hover:shadow-xl relative overflow-hidden group transition-all">
            <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-700 font-black text-[10px] uppercase tracking-wider">
              DIGITAL STANDALONE
            </div>

            <div className="space-y-6">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-6">
                <img
                  src="/brand/01_product_drive.jpg"
                  alt="XPlay Standard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <span className="text-xs font-mono text-sky-600 font-bold uppercase tracking-wider block mb-1">
                  500GB SSD • STANDALONE DRIVE
                </span>
                <h3 className="text-3xl font-black uppercase text-slate-900">
                  XPlay Standard
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-2">
                  Standalone Solid Console Drive + Dual Type-C / Type-A Cable. Ideal for gamers who already own a controller and game library.
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>500GB High-Speed SSD</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>Standalone Solid Console Drive</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>Dual Type-C / Type-A Cable</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>Zero Host Footprint (SAN Policy 4)</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-500 uppercase block font-bold">Standard Price</span>
                <span className="text-2xl font-black text-slate-900 font-mono">₹13,499</span>
              </div>
              <button
                onClick={() => onOpenPreOrder?.('standard')}
                className="px-7 py-3.5 rounded-xl bg-black hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:scale-105 transition-all cursor-pointer"
              >
                <span>Pre-Order Standard</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Console 3: XPlay Pro (Best Value) */}
          <div className="rounded-3xl p-8 sm:p-10 bg-white border-2 border-sky-400 flex flex-col justify-between shadow-[0_20px_50px_rgba(56,189,248,0.15)] relative overflow-hidden group">
            <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-sky-500 text-white font-black text-[10px] uppercase tracking-wider">
              BEST VALUE
            </div>

            <div className="space-y-6">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-sky-200 mb-6">
                <img
                  src="/brand/01_product_drive.jpg"
                  alt="XPlay Pro"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <span className="text-xs font-mono text-sky-600 font-bold uppercase tracking-wider block mb-1">
                  500GB CRUCIAL NVMe • CONTROLLER + 2 GAMES
                </span>
                <h3 className="text-3xl font-black uppercase text-slate-900">
                  XPlay Pro
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-2">
                  Console Drive + Wireless Dual-Vibration Controller + GTA V (or 2 Games). Full plug-and-play console setup for serious gamers.
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>500GB Crucial NVMe SSD (1,050 MB/s)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>Wireless Dual-Vibration Controller Included</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>GTA V or 2 Selected AAA Games Included</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>Aviation-Grade Anodized Aluminum Enclosure</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-500 uppercase block font-bold">Bundle Price</span>
                <span className="text-2xl font-black text-slate-900 font-mono">₹18,499</span>
              </div>
              <button
                onClick={() => onOpenPreOrder?.('pro')}
                className="px-7 py-3.5 rounded-xl bg-black hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:scale-105 transition-all cursor-pointer"
              >
                <span>Pre-Order Pro</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Console 4: XPlay Ultimate (Flagship) */}
          <div className="rounded-3xl p-8 sm:p-10 bg-white border border-slate-200 hover:border-sky-300 flex flex-col justify-between shadow-md hover:shadow-xl relative overflow-hidden group transition-all">
            <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-slate-900 text-white font-black text-[10px] uppercase tracking-wider">
              FLAGSHIP CHOICE
            </div>

            <div className="space-y-6">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-6">
                <img
                  src="/brand/02_retail_box.jpg"
                  alt="XPlay Ultimate"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <span className="text-xs font-mono text-sky-600 font-bold uppercase tracking-wider block mb-1">
                  1TB CRUCIAL NVMe • 2 GAMES + CONTROLLER
                </span>
                <h3 className="text-3xl font-black uppercase text-slate-900">
                  XPlay Ultimate
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-2">
                  Console Drive + Wireless Controller + 2 Games as per your choice. Built for Hardcore AAA Gamers seeking maximum storage (15-20 heavy games).
                </p>
              </div>

              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>1TB Crucial NVMe SSD (PCIe Gen4)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>Wireless Gaming Controller Included</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>2 Games As Per Your Choice</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-sky-600 shrink-0 stroke-[3]" />
                  <span>Braided Cables + Magnetic Box + Warranty</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-500 uppercase block font-bold">Flagship Price</span>
                <span className="text-2xl font-black text-slate-900 font-mono">₹28,479</span>
              </div>
              <button
                onClick={() => onOpenPreOrder?.('ultimate')}
                className="px-7 py-3.5 rounded-xl bg-black hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all hover:scale-105 cursor-pointer"
              >
                <span>Pre-Order Ultimate</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Inside The Box (Visual Layout) */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-sky-200">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-sky-700 block mb-2">
            UNBOXING EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-slate-900 tracking-tight">
            What's In The Box
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-sky-200 shadow-sm text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-xl bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-600 mb-4">
              <HardDrive className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1 uppercase">XPlay Console</h4>
            <p className="text-[11px] text-slate-500">Anodized Aluminum Alloy Enclosure</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-sky-200 shadow-sm text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-xl bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-600 mb-4">
              <Cable className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1 uppercase">High-Speed Cable</h4>
            <p className="text-[11px] text-slate-500">Braided Shielded Type-C Link</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-sky-200 shadow-sm text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-xl bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-600 mb-4">
              <Box className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1 uppercase">Magnetic Retail Box</h4>
            <p className="text-[11px] text-slate-500">Custom Collector Hard Shell</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-sky-200 shadow-sm text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-xl bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-600 mb-4">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1 uppercase">1-Yr Warranty Card</h4>
            <p className="text-[11px] text-slate-500">Doorstep Swap Guarantee</p>
          </div>
        </div>
      </section>

      {/* 5. Official Hardware Tech Specs Grid (PS5 / Xbox Style) */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-t border-sky-200">
        <h3 className="text-2xl font-black uppercase text-slate-900 tracking-wider mb-8 text-center">
          Console Technical Specifications
        </h3>

        <div className="rounded-2xl border-2 border-sky-200 bg-white shadow-sm overflow-hidden">
          <div className="divide-y divide-slate-100 text-xs sm:text-sm">
            <div className="grid grid-cols-3 p-4 sm:p-5">
              <span className="font-bold text-slate-500 uppercase text-[11px]">Dimensions</span>
              <span className="col-span-2 font-mono text-slate-900 font-bold">102 mm × 38 mm × 9.8 mm</span>
            </div>
            <div className="grid grid-cols-3 p-4 sm:p-5">
              <span className="font-bold text-slate-500 uppercase text-[11px]">Weight</span>
              <span className="col-span-2 font-mono text-slate-900 font-bold">78 grams (Aluminum Alloy Shell)</span>
            </div>
            <div className="grid grid-cols-3 p-4 sm:p-5">
              <span className="font-bold text-slate-500 uppercase text-[11px]">Storage Controller</span>
              <span className="col-span-2 font-mono text-slate-900 font-bold">High-Speed M.2 NVMe SSD (USB 3.2 Gen 2 Bridge)</span>
            </div>
            <div className="grid grid-cols-3 p-4 sm:p-5">
              <span className="font-bold text-slate-500 uppercase text-[11px]">Throughput</span>
              <span className="col-span-2 font-mono text-slate-900 font-bold">Up to 1,050 MB/s Sustained Read/Write</span>
            </div>
            <div className="grid grid-cols-3 p-4 sm:p-5">
              <span className="font-bold text-slate-500 uppercase text-[11px]">Host Interface</span>
              <span className="col-span-2 font-mono text-slate-900 font-bold">USB 3.2 Gen 2 / USB4 / Thunderbolt 3/4</span>
            </div>
            <div className="grid grid-cols-3 p-4 sm:p-5">
              <span className="font-bold text-slate-500 uppercase text-[11px]">OS Security</span>
              <span className="col-span-2 font-mono text-slate-900 font-bold">SanPolicy=4 (Zero host disk mounting / 100% BitLocker isolated)</span>
            </div>
            <div className="grid grid-cols-3 p-4 sm:p-5">
              <span className="font-bold text-slate-500 uppercase text-[11px]">Display Support</span>
              <span className="col-span-2 font-mono text-slate-900 font-bold">Up to 4K @ 144Hz HDR via host display engine</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <div className="max-w-4xl mx-auto px-6 text-center pt-8">
        <button
          onClick={() => onOpenPreOrder?.('pocket')}
          className="px-10 py-4 rounded-xl bg-black hover:bg-slate-800 text-white font-black text-sm uppercase tracking-wider inline-flex items-center gap-2 shadow-xl hover:scale-105 transition-all cursor-pointer"
        >
          <span>Claim Launch Allocation — From ₹7,999</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

    </div>
  );
};

export default ConsolesPage;
