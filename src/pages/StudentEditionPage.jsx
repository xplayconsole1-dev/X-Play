import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Sliders, 
  Volume2, 
  Camera, 
  LayoutGrid, 
  ShieldCheck, 
  HardDrive, 
  Zap, 
  Cpu, 
  Sparkles, 
  Plus, 
  Minus,
  CheckCircle2,
  Gamepad2,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';
import GamingFooter from '../sections/GamingFooter';

const StudentEditionPage = ({ onOpenPreOrder }) => {
  const [activeGameBarTab, setActiveGameBarTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const gameBarTabs = [
    {
      id: 'performance',
      name: 'Performance',
      icon: <Sliders className="w-4 h-4" />,
      image: 'https://cms-assets.xboxservices.com/assets/ff/ad/ffad9f8e-5c10-4823-981e-fe570350e521.jpg?n=2438801_Hero-multi-feature-0_Performance_767x431.jpg',
      title: 'Real-time 60 FPS & Telemetry',
      desc: 'Track frame rates, GPU clock speed, CPU temperature, and RAM allocation in real time with zero frame pacing penalties.'
    },
    {
      id: 'audio',
      name: 'Audio Mixer',
      icon: <Volume2 className="w-4 h-4" />,
      image: 'https://cms-assets.xboxservices.com/assets/c8/47/c84729a6-106a-4d3d-b5dd-036858cea164.jpg?n=2438801_Hero-multi-feature-0_Audio_767x431.jpg',
      title: 'Game & Discord Voice Balancer',
      desc: 'Balance game sound effects, Discord voice chat, and Spotify music without alt-tabbing or leaving your match.'
    },
    {
      id: 'capture',
      name: 'Capture',
      icon: <Camera className="w-4 h-4" />,
      image: 'https://cms-assets.xboxservices.com/assets/30/f1/30f1e1e9-3d4b-4f2d-a774-2beb60b07c71.jpg?n=2438801_Hero-multi-feature-0_Capture_767x431.jpg',
      title: 'Instant 60 FPS Replay & Capture',
      desc: 'Record your best clutch kills and high-speed maneuvers in crisp 1080p directly saved onto the XPlay drive.'
    },
    {
      id: 'optimizations',
      name: 'RAM Boost',
      icon: <LayoutGrid className="w-4 h-4" />,
      image: 'https://cms-assets.xboxservices.com/assets/3a/10/3a10b744-c6f1-47f4-a124-712647130d5c.jpg?n=2438801_Hero-multi-feature-0_widgets_767x431.jpg',
      title: 'One-Click Task Suspension',
      desc: 'Automatically suspend background college tabs and heavy apps to free up to 3.5GB of RAM for dedicated game rendering.'
    }
  ];

  const faqs = [
    {
      q: 'Does XPlay Student Edition require an expensive gaming laptop?',
      a: 'No. XPlay was engineered specifically for everyday student laptops and budget PCs. Its bare-metal DirectStorage architecture offloads heavy storage I/O and asset decompression directly into the fast NVMe stream, unlocking smooth 60 FPS gameplay on standard hardware without thermal throttling.'
    },
    {
      q: 'Is the included AAA game permanent and registered to my account?',
      a: 'Yes, 100% permanent. Your XPlay Student Edition package includes a genuine digital license key for 1x full AAA title (such as GTA V, Forza Horizon 5, or Cyberpunk 2077) that permanently links to your personal Steam, Epic Games, or Rockstar account. You retain full lifetime ownership, cloud saves, and multiplayer access.'
    },
    {
      q: 'Will XPlay touch my college assignments, projects, or host Windows OS?',
      a: 'Never. XPlay operates under strict hardware SAN Policy 4 isolation. Your laptop internal SSD/HDD and college Windows installation remain 100% read-safe, untouched, and unindexed. When you disconnect XPlay, your laptop returns to its normal study setup with zero residual footprints.'
    },
    {
      q: 'Can I connect my own controller or mouse and keyboard?',
      a: 'Yes. The Student Edition is designed as a standalone drive so you can bring whatever input you love: Xbox Wireless Controller, PS5 DualSense, Cosmic Byte, Redgear, or standard mouse and keyboard. Full native input mapping is pre-calibrated.'
    },
    {
      q: 'What comes inside the XPlay Student Edition box?',
      a: 'The box includes the XPlay 250GB Satin Silver Aluminum CNC Console Drive, dual high-durability braided cables (USB-C to USB-C and USB-C to USB-A 3.2 Gen 2), QuickStart setup manual, 1-Year replacement warranty card, and your digital AAA game activation voucher.'
    },
    {
      q: 'What is the warranty and customer support coverage?',
      a: 'Every XPlay Console comes with a 1-Year Comprehensive Replacement Warranty with free reverse pickup across India, plus dedicated 24/7 direct engineer support on WhatsApp for quick hardware or game configuration help.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased selection:bg-sky-500 selection:text-white">
      <SEO
        title="XPlay Student Edition | 250GB DirectStorage Gaming Drive"
        description="Transform any college laptop or budget PC into a 60 FPS gaming powerhouse. Includes 250GB fast SSD and 1x full AAA game key for ₹6,999."
        keywords="XPlay Student Edition, 250GB Gaming Drive, Budget PC Gaming, DirectStorage NVMe, College Laptop Gaming"
      />

      {/* ============================================================== */}
      {/* 1. HERO SECTION: SLEEK HERO WITH EXACT WEBSITE FLOATING NAVBAR */}
      {/* ============================================================== */}
      <section 
        id="overview" 
        className="relative w-full pt-32 sm:pt-40 pb-20 sm:pb-28 px-6 sm:px-12 bg-gradient-to-b from-[#050914] via-[#091122] to-[#f8fafc] border-b border-slate-200/80 overflow-hidden"
      >
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Column: High-Impact Typography & Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>COLLEGE STUDENTS & ESPORTS LINEUP</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] font-round-bold uppercase">
              XPlay on PC <br />
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Student Edition
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
              Transform any everyday college laptop or budget desktop into an uncompromised 60 FPS gaming sanctuary. Plug in your 250GB DirectStorage NVMe drive, boot instantly, and enjoy AAA gaming with zero host drive wear.
            </p>

            {/* Price & CTA Row */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                onClick={() => onOpenPreOrder?.('student')}
                className="bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-300 hover:to-cyan-300 active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer shadow-lg shadow-sky-500/25 inline-flex items-center justify-center gap-2"
              >
                <span>Get Student Edition — ₹6,999</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 px-3.5 py-2 rounded-full w-fit">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Save ₹1,000 Launch Offer</span>
              </div>
            </div>

            {/* Quick Spec Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/10 text-left">
              <div>
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider block">Storage</span>
                <span className="text-white font-extrabold text-sm sm:text-base">250GB SSD</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider block">Read Speed</span>
                <span className="text-white font-extrabold text-sm sm:text-base">1,050 MB/s</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider block">Isolation</span>
                <span className="text-white font-extrabold text-sm sm:text-base">SAN Policy 4</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean White Hardware Studio Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.25)] group">
              
              {/* Product Visual Stage */}
              <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/70 border border-slate-100 flex items-center justify-center p-6 overflow-hidden">
                <img 
                  src="/editions/xplay_student_edition.jpg" 
                  alt="XPlay Student Edition 250GB Gaming Drive" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                
                <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md border border-slate-200 px-3 py-1 rounded-full text-[11px] font-bold text-slate-800 shadow-xs">
                  Satin Silver CNC Aluminum
                </span>
                
                <span className="absolute top-3 right-3 bg-sky-50 border border-sky-100 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-sky-700">
                  48 Grams
                </span>
              </div>

              {/* Package Summary */}
              <div className="mt-5 flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
                <span>Dual Braided Cables (Type-C & Type-A)</span>
                <span className="font-semibold text-slate-900">1x AAA Game Key Included</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. SECTION 2: 1x AAA DIGITAL GAME INCLUDED                     */}
      {/* ============================================================== */}
      <section 
        id="game-included" 
        className="py-20 sm:py-28 px-6 sm:px-12 bg-white border-b border-slate-200/80"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="max-w-2xl text-left space-y-3">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-[0.25em] block">
              Permanent Digital License
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-round-bold uppercase">
              1x AAA Digital Game <span className="text-sky-600">Included In The Box</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every XPlay Student Edition arrives with a genuine license code for a full AAA title of your choice. The game is permanently registered to your personal Steam, Epic Games, or Rockstar account with complete cloud saves, achievements, and multiplayer.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: 'Forza Horizon 5', img: '/assets/games/forza_cover.jpg' },
              { title: 'Grand Theft Auto V', img: '/assets/games/gtav_cover.jpg' },
              { title: 'Cyberpunk 2077', img: '/assets/games/cyberpunk_cover.jpg' },
              { title: 'Counter-Strike 2', img: '/assets/games/cs2_cover.jpg' },
              { title: 'Hogwarts Legacy', img: '/assets/games/hogwarts_cover.jpg' },
              { title: "Marvel's Spider-Man", img: '/assets/games/spiderman_cover.jpg' },
            ].map((g, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl overflow-hidden aspect-[2/3] bg-slate-100 border border-slate-200/90 hover:border-sky-500 transition-all hover:-translate-y-1 duration-300 shadow-sm hover:shadow-md group relative"
              >
                <img src={g.img} alt={g.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-white truncate">{g.title}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
            <span>Redeem permanently on your account. Zero GB taken from your laptop's internal study drive.</span>
            <button 
              onClick={() => onOpenPreOrder?.('student')}
              className="text-sky-600 hover:text-sky-700 font-bold inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Pre-order Student Edition</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. SECTION 3: STUDY MODE OFF, GAMING MODE ON                   */}
      {/* ============================================================== */}
      <section 
        id="gaming-mode" 
        className="py-20 sm:py-28 px-6 sm:px-12 bg-[#f8fafc] border-b border-slate-200/80"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.06)] bg-white p-2">
              <img
                src="https://cms-assets.xboxservices.com/assets/b0/a4/b0a49731-d54c-45fd-8585-4057f8f28358.png?n=Xbox-On-PC_Xbox-Mode_Hero-0_767x431_01.png"
                alt="PC gaming setup with controller and keyboard"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2 text-left">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-[0.25em] block">
              Instant Hardware Switching
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-round-bold uppercase leading-tight">
              Study mode off, <br />
              <span className="text-sky-600">gaming mode on</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Seamlessly switch between college assignments and dedicated 60 FPS console-grade gaming. With XPlay SAN Policy 4 volume isolation, your internal operating system, college coding setups, and personal files remain completely untouched and safe.
            </p>

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              When plugged in, your laptop allocates 100% of its available graphics bandwidth and RAM directly to the game with zero background clutter.
            </p>

            <div>
              <button
                onClick={() => onOpenPreOrder?.('student')}
                className="bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all cursor-pointer shadow-xs inline-flex items-center gap-2"
              >
                <span>Pre-Order Student Edition</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. SECTION 4: ENGINEERED FOR STUDENT LAPTOPS (#specs)          */}
      {/* ============================================================== */}
      <section 
        id="specs" 
        className="py-20 sm:py-28 px-6 sm:px-12 bg-white border-b border-slate-200/80"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="max-w-2xl text-left space-y-3">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-[0.25em] block">
              DirectStorage NVMe Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-round-bold uppercase">
              Engineered For Student Laptops
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Designed by Puneet Kushwaha to break the ₹1.5 Lakh gaming hardware barrier. XPlay delivers console-level 60 FPS performance on laptops with standard integrated or dedicated graphics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {[
              {
                num: '01',
                title: 'Zero Host Drive Wear',
                desc: 'All game assets, shaders, and patches write directly to the 250GB external SSD without taking a single byte of your laptop internal storage.'
              },
              {
                num: '02',
                title: 'DirectStorage 1,050 MB/s Speed',
                desc: 'Bypasses legacy SATA bottlenecks with sustained sequential read throughput for instantaneous asset streaming and quick boots.'
              },
              {
                num: '03',
                title: 'Universal Plug & Play Compatibility',
                desc: 'Includes dual braided USB-C and USB-A 3.2 Gen 2 cables. Works with Acer, ASUS, Dell, HP, Lenovo, and custom desktop rigs.'
              },
              {
                num: '04',
                title: 'Anti-Cheat & Esports Certified',
                desc: 'Full kernel-level support for Valorant Vanguard, CS2 VAC, and EA Anti-Cheat with zero virtual machine detection penalties.'
              },
              {
                num: '05',
                title: 'Passive CNC Thermal Cooling',
                desc: 'Aircraft-grade satin silver aluminum body dissipates heat passively, keeping drive temps under 42°C during 8-hour marathon sessions.'
              },
              {
                num: '06',
                title: 'Pocket Sized (48 Grams)',
                desc: 'Smaller than a standard credit card. Slips into your pocket, backpack or laptop sleeve for easy campus mobility.'
              }
            ].map((f, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200/80 hover:border-sky-400 hover:bg-white hover:shadow-md transition-all space-y-2 group"
              >
                <span className="text-xs font-mono font-black text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                  {f.num}
                </span>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-sky-600 transition-colors pt-1">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. SECTION 5: XPLAY HUD TABS                                   */}
      {/* ============================================================== */}
      <section 
        id="hud" 
        className="py-20 sm:py-28 px-6 sm:px-12 bg-[#f8fafc] border-b border-slate-200/80"
      >
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="max-w-2xl text-left space-y-3">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-[0.25em] block">
              In-Game System Overlay
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-round-bold uppercase">
              Maximize Gameplay with XPlay HUD
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Customizable in-game widget overlay designed to keep you in the zone with instant hardware telemetry, Discord audio balancing, and screen capture.
            </p>
          </div>

          {/* Interactive 4 Tabs */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              {gameBarTabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveGameBarTab(idx)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase transition-all cursor-pointer ${
                    activeGameBarTab === idx
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            {/* Active Tab Showcase Stage */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-[0_15px_35px_rgba(15,23,42,0.05)]">
              <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-100 bg-slate-950 shadow-md">
                <img
                  src={gameBarTabs[activeGameBarTab].image}
                  alt={gameBarTabs[activeGameBarTab].name}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="lg:col-span-5 space-y-4 text-left">
                <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-widest">
                  Widget 0{activeGameBarTab + 1}
                </span>
                <h3 className="text-2xl font-black text-slate-900 leading-tight">
                  {gameBarTabs[activeGameBarTab].title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {gameBarTabs[activeGameBarTab].desc}
                </p>
                <div className="pt-2">
                  <span className="text-xs font-mono text-slate-400 block">
                    Keyboard Shortcut: Press <kbd className="bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-slate-700 font-mono">Win + G</kbd> anytime
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. SECTION 6: UNIVERSAL COMPATIBILITY                          */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-[0.25em] block">
              Multi-Device Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-round-bold uppercase leading-tight">
              Play on laptop, <br />
              <span className="text-sky-600">desktop or handheld</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Carry your entire gaming sanctuary in your pocket. The XPlay Student Drive is smaller than a credit card and weighs just 48 grams. Plug into your hostel laptop, home PC, or handheld consoles like ASUS ROG Ally, Lenovo Legion Go, and MSI Claw.
            </p>

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Seamlessly sync achievements, saved games, and cloud checkpoints across all your machines.
            </p>

            <div>
              <button
                onClick={() => onOpenPreOrder?.('student')}
                className="bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all cursor-pointer shadow-xs inline-flex items-center gap-2"
              >
                <span>Pre-Order Now</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.06)] bg-white p-2">
              <img
                src="https://cms-assets.xboxservices.com/assets/f4/bf/f4bf70a0-043f-4e08-9df5-6e5a6ef67e3a.jpg?n=2438801_Feature-Merch-0_Handheld_1040x585.jpg"
                alt="XPlay Console handheld and laptop gaming setup"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. SECTION 7: CAMPUS & HOSTEL MOBILITY                         */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="max-w-2xl text-left space-y-2">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-[0.25em] block">
              Gamer Mobility
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-round-bold uppercase">
              Built for Campus Life
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Everything you need for spontaneous LAN tournaments, hostel chill sessions, and library gaming breaks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: 'Campus & Hostel Ready',
                desc: 'Lightweight anodized CNC enclosure fits directly into your pencil pouch or backpack pocket. Plug in and play in 10 seconds flat.'
              },
              {
                title: 'Bring Your Own Gamepad',
                desc: 'Full plug-and-play support for Xbox Series X|S, PS5 DualSense, DualShock 4, Nintendo Switch Pro, or keyboard and mouse.'
              },
              {
                title: 'Lifetime Firmware Updates',
                desc: 'Free over-the-air firmware optimizations and DirectStorage patches delivered directly via the XPlay Control Center.'
              }
            ].map((card, i) => (
              <div 
                key={i} 
                className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-sky-400 hover:shadow-md transition-all space-y-3 group"
              >
                <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 font-mono font-bold text-sm">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. SECTION 8: FREQUENTLY ASKED QUESTIONS                       */}
      {/* ============================================================== */}
      <section id="faqs" className="py-20 sm:py-28 px-6 sm:px-12 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-[0.25em] block">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-round-bold uppercase">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              Everything you need to know about XPlay Student Edition hardware, compatibility, and game licensing.
            </p>
          </div>

          <div className="space-y-3 text-left">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-slate-200/90 rounded-2xl bg-slate-50/50 hover:bg-white hover:border-sky-300 hover:shadow-xs transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-bold text-base text-slate-900">
                    {faq.q}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-slate-200/60 flex items-center justify-center shrink-0 text-slate-700">
                    {openFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Clean Pre-Order Banner at bottom of FAQ */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-sky-50 via-white to-cyan-50 border border-sky-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xs">
            <div>
              <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-widest block mb-1">
                LIMITED LAUNCH BATCH
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                Reserve Your Student Edition for ₹6,999
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Includes 250GB DirectStorage SSD + 1x AAA Digital Game Voucher
              </p>
            </div>
            <button
              onClick={() => onOpenPreOrder?.('student')}
              className="bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-all cursor-pointer shadow-sm shrink-0 active:scale-95"
            >
              Pre-Order Now
            </button>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. OFFICIAL XPLAY GAMING FOOTER                                */}
      {/* ============================================================== */}
      <GamingFooter onOpenPreOrder={onOpenPreOrder} />

    </div>
  );
};

export default StudentEditionPage;
