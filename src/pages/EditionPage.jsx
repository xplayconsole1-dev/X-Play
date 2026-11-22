import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Check, 
  ChevronDown, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  HardDrive, 
  Gamepad2, 
  KeyRound, 
  Sparkles, 
  ExternalLink,
  Laptop,
  Monitor,
  Flame,
  Layers,
  ChevronRight,
  Package
} from 'lucide-react';
import SEO from '../components/SEO';
import { EDITIONS_DATA } from '../constants/editionsData';

const EditionPage = ({ editionId: propEditionId, onOpenPreOrder }) => {
  const params = useParams();
  const currentKey = propEditionId || params.editionId || 'pro';
  const edition = EDITIONS_DATA[currentKey] || EDITIONS_DATA.pro;

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'Will XPlay modify or leave any trace on my college or office laptop?',
      a: 'Zero trace. XPlay operates strictly under Windows SAN Policy 4 (Offline Shared). It isolates your internal host drive completely, ensuring your personal and office data, files, and operating system remain untouched and 100% private.'
    },
    {
      q: 'How do the Digital Game Keys work? Do I get to keep them?',
      a: 'Yes, 100% permanently. The included AAA Digital Game Keys are genuine publisher licenses. You redeem them directly into your personal Steam, Epic Games, or Rockstar Games account. You own the games forever with full cloud saves and multiplayer access.'
    },
    {
      q: 'Can any laptop run games at 60 FPS through XPlay?',
      a: 'XPlay Console is pre-configured with low-overhead DirectX 12 and Vulkan runtimes and bypasses Windows bloatware. Tested across Intel Core i3/i5/i7/i9, AMD Ryzen, Intel Iris Xe, and Nvidia GeForce/RTX systems.'
    },
    {
      q: 'What is the warranty and pan-India shipping timeline?',
      a: 'All XPlay Console editions include a 1-Year Comprehensive Replacement Warranty. Orders ship via Express BlueDart/Delhivery air shipping with typical delivery in 2-4 business days across all Indian pin codes.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans select-none overflow-x-hidden selection:bg-sky-500 selection:text-slate-950">
      <SEO
        title={`${edition.title} (${edition.capacityNum}) | XPlay Console`}
        description={edition.summary}
        keywords={`XPlay ${edition.title}, ${edition.storage}, portable gaming NVMe, PC console gaming, buy XPlay`}
      />

      {/* ============================================================== */}
      {/* 1. XBOX-STYLE SECONDARY SUB-NAV & BUY BAR (STICKY BELOW HEADER) */}
      {/* ============================================================== */}
      <div className="sticky top-16 left-0 w-full z-40 bg-slate-950/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-3 flex items-center justify-between text-xs transition-all">
        <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar">
          <Link to="/" className="text-slate-400 hover:text-white font-bold transition-colors shrink-0">
            XPlay
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-sky-400 font-extrabold uppercase tracking-wider shrink-0">
            {edition.title}
          </span>
          
          <div className="hidden lg:flex items-center gap-5 ml-4 text-slate-300 font-semibold">
            <a href="#overview" className="hover:text-sky-400 transition-colors">Overview</a>
            <a href="#instant-library" className="hover:text-sky-400 transition-colors">Digital Library</a>
            <a href="#console-mode" className="hover:text-sky-400 transition-colors">Console Mode</a>
            <a href="#made-for-pc" className="hover:text-sky-400 transition-colors">Made for PC</a>
            <a href="#in-the-box" className="hover:text-sky-400 transition-colors">In The Box</a>
            <a href="#faq" className="hover:text-sky-400 transition-colors">FAQ</a>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right hidden sm:block">
            <span className="text-base font-black text-white font-mono leading-none block">
              {edition.price}
            </span>
            <span className="text-[10px] text-emerald-400 font-bold block">
              Launch: {edition.launchPrice}
            </span>
          </div>

          <button
            onClick={() => onOpenPreOrder?.(edition.id)}
            className="px-4 sm:px-6 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black uppercase tracking-wider text-xs shadow-lg shadow-sky-500/25 transition-all cursor-pointer hover:scale-105"
          >
            Pre-Order Now
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. XBOX ON PC EXACT HERO SECTION WITH AMBIENT VIDEO ANIMATION  */}
      {/* ============================================================== */}
      <section id="overview" className={`relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b ${edition.heroBgGradient} pt-12 pb-20 px-6 sm:px-12`}>
        
        {/* Ambient Video Background (The exact Xbox-on-PC looping ambient effect) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden opacity-35 pointer-events-none mix-blend-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 filter blur-[0.5px]"
            src="https://cms-assets.xboxservices.com/assets/d8/2f/d82f2cf2-4d36-426e-ac14-9a89340d1fb3.mp4?n=2438801_Super-Hero-1084_1920x1080_02.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/60" />
        </div>

        {/* Ambient Cyan Horizon Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-sky-500/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Hero Typography & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sky-300 text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>{edition.tagline}</span>
            </div>

            {/* Master Headline (Xbox on PC exact typography pattern) */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
              Elevate your PC gaming experience with <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-400 to-sky-500">XPlay</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-xl font-normal max-w-xl leading-relaxed">
              {edition.summary}
            </p>

            {/* Key Telemetry Badges */}
            <div className="grid grid-cols-3 gap-3 max-w-lg pt-2">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Storage</div>
                <div className="text-xl font-black text-white font-mono mt-0.5">{edition.capacityNum}</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Speed</div>
                <div className="text-xl font-black text-sky-400 font-mono mt-0.5">1,050 MB/s</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Isolation</div>
                <div className="text-xl font-black text-emerald-400 font-mono mt-0.5">SAN Policy 4</div>
              </div>
            </div>

            {/* Dual CTAs & Pricing Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenPreOrder?.(edition.id)}
                className="px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black uppercase tracking-wider text-sm flex items-center gap-2 shadow-2xl shadow-sky-500/30 transition-all cursor-pointer hover:scale-105"
              >
                <span>Pre-Order {edition.price}</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>

              <a
                href="#in-the-box"
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold uppercase tracking-wider text-xs border border-white/20 transition-all cursor-pointer"
              >
                What's In The Box
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Launch Offer: {edition.launchPrice} • ₹1,000 Flat Off • 1-Year Pan-India Warranty</span>
            </div>

          </div>

          {/* Right Column: Floating 3D Hardware Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <div className="relative w-full aspect-[4/3] max-w-lg rounded-3xl p-4 sm:p-5 bg-white border-2 border-white/40 shadow-[0_20px_80px_rgba(6,182,212,0.25)] flex flex-col justify-between overflow-hidden group">
              
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-sky-400 text-[11px] font-bold uppercase tracking-widest font-mono shadow-md">
                  {edition.capacityNum} SSD
                </span>
              </div>

              {/* Hardware Visual on Pure White */}
              <div className="w-full flex-1 flex items-center justify-center relative overflow-hidden rounded-2xl bg-white">
                <img
                  src={`/editions/xplay_${edition.id}_edition.jpg`}
                  alt={`${edition.title} Commercial Hardware & Packaging`}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Bottom Specs Line */}
              <div className="pt-3 px-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-sans">
                <span className="font-semibold">{edition.chassis}</span>
                <span className="text-sky-600 font-mono font-bold">1,050 MB/s NVMe</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ============================================================== */}
      {/* 3. GET AN INSTANT LIBRARY ON PC (DIGITAL GAME KEYS)            */}
      {/* ============================================================== */}
      <section id="instant-library" className="py-24 px-6 sm:px-12 bg-slate-950 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 block mb-2">
              DIGITAL GAME LICENSES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
              Get an instant library on PC
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              No physical discs to scratch or carry. Redeem full digital game keys directly to your Steam, Epic Games, or Rockstar accounts with cloud saves and multiplayer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-sky-500/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-6">
                <KeyRound className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">100% Genuine Digital Keys</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Claim your game license on your own personal account. You own the game permanently with automated game patches and updates.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-sky-500/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Instant Cloud Saves</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Progress saved automatically to publisher cloud networks. Resume your playthrough on your home PC or any friend's laptop anytime.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-sky-500/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Zero Host Bloatware</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Heavy 150GB game installations live strictly on your XPlay NVMe drive. Your laptop internal drive retains 100% free space.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. CONSOLE MODE ON, WORK MODE OFF (SPLIT COMPARISON)           */}
      {/* ============================================================== */}
      <section id="console-mode" className="py-24 px-6 sm:px-12 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 block mb-2">
              HOST ISOLATION ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
              XPlay mode on, work mode off
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Switch from Excel and lecture notes to full 60 FPS gaming sanctuary in seconds. Unplug the drive, and your laptop returns to work with zero files modified.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Work Mode */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-slate-400 font-bold text-sm uppercase font-mono">
                    <Laptop className="w-5 h-5 text-slate-500" />
                    <span>Work / College Mode (Unplugged)</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-mono">
                    DEFAULT OS
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Your Standard Daily Workspace</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>College presentations, code editors, and office tools open</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>Host storage left completely untouched (0 bytes written)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>No administrator permission conflicts or warranty voiding</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-800 text-xs font-mono text-slate-500">
                STATE: CLEAN STANDALONE HOST
              </div>
            </div>

            {/* Console Mode */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-sky-950/60 via-slate-900 to-black border-2 border-sky-500/80 shadow-2xl shadow-sky-500/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-sky-400 font-bold text-sm uppercase font-mono">
                    <Monitor className="w-5 h-5 text-sky-400" />
                    <span>XPlay Console Mode (Plugged In)</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-mono font-bold">
                    ACTIVE 60 FPS
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Bare-Metal 60 FPS Console Sanctuary</h3>
                <ul className="space-y-3 text-sm text-slate-200">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Boots direct into game launcher with controller navigation</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Windows SAN Policy 4 locks host drive for 100% security</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>DirectStorage uncompressed NVMe throughput: 1,050 MB/s</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-sky-900/40 text-xs font-mono text-sky-400 font-bold">
                STATE: ISOLATED BARE-METAL CONSOLE
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. MADE FOR PC (HARDWARE ENGINEERING SPECIFICATIONS)           */}
      {/* ============================================================== */}
      <section id="made-for-pc" className="py-24 px-6 sm:px-12 bg-slate-950 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 block mb-2">
              HARDWARE ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
              MADE FOR PC
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Designed from the silicon up to transform existing student and work laptops into dedicated high-performance gaming consoles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <Cpu className="w-8 h-8 text-sky-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">10Gbps USB 3.2 Gen 2</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                ASMedia 10Gbps bridge controller running on unthrottled PCIe lanes for near-zero bus latency.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <Flame className="w-8 h-8 text-cyan-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Thermal Heatpipe Core</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Internal silicone thermal conductive pad bonded directly to the aluminum chassis dissipates heat passively without fans.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <HardDrive className="w-8 h-8 text-sky-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">{edition.capacityNum} High-Speed Core</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Tier-1 high endurance 3D NAND flash cells rated for thousands of read/write gaming cycles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Windows SAN Policy 4</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Guarantees zero writes or file table changes to your host laptop drive. Completely safe for corporate/college devices.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. WHAT'S IN THE BOX (PHYSICAL UNBOXING INVENTORY)             */}
      {/* ============================================================== */}
      <section id="in-the-box" className="py-24 px-6 sm:px-12 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 block mb-2">
              PHYSICAL UNBOXING
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
              What's In The Box
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Everything you need to unpack, plug into your laptop, and start 60 FPS gaming in under 30 seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {edition.inTheBox.map((item, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4 hover:border-sky-500/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">{item.name}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. FREQUENTLY ASKED QUESTIONS (ACCORDION)                     */}
      {/* ============================================================== */}
      <section id="faq" className="py-24 px-6 sm:px-12 bg-slate-950 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400 block mb-2">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-sky-400 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-sky-400 shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-slate-800/80 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. EDITION SWITCHER / BOTTOM BANNER                            */}
      {/* ============================================================== */}
      <section className="py-16 px-6 sm:px-12 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-black uppercase text-white">Explore Other Editions</h4>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">Compare features across Student, Standard, Pro, and Ultimate</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {Object.keys(EDITIONS_DATA).map((key) => {
              const ed = EDITIONS_DATA[key];
              const isCurrent = key === edition.id;
              return (
                <Link
                  key={key}
                  to={`/consoles/${key}`}
                  className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                    isCurrent
                      ? 'bg-sky-500 text-slate-950 font-black'
                      : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                  }`}
                >
                  {ed.capacityNum} • {ed.price}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default EditionPage;
