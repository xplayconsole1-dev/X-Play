import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ExternalLink, 
  Sliders, 
  Volume2, 
  Camera, 
  LayoutGrid, 
  ShieldCheck, 
  HardDrive, 
  Zap, 
  Cpu, 
  Thermometer, 
  Gamepad2, 
  Sparkles, 
  Plus, 
  Minus 
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
      title: 'Real-time 60 FPS & Hardware Telemetry',
      desc: 'Track frame rates, GPU clock speed, CPU temperature, and RAM allocation in real time with zero frame pacing penalties.'
    },
    {
      id: 'audio',
      name: 'Audio Mixer',
      icon: <Volume2 className="w-4 h-4" />,
      image: 'https://cms-assets.xboxservices.com/assets/c8/47/c84729a6-106a-4d3d-b5dd-036858cea164.jpg?n=2438801_Hero-multi-feature-0_Audio_767x431.jpg',
      title: 'Game & Discord Voice Channel Balancer',
      desc: 'Balance in-game sound effects, Discord voice chat, and background music without alt-tabbing or leaving your match.'
    },
    {
      id: 'capture',
      name: 'Capture',
      icon: <Camera className="w-4 h-4" />,
      image: 'https://cms-assets.xboxservices.com/assets/30/f1/30f1e1e9-3d4b-4f2d-a774-2beb60b07c71.jpg?n=2438801_Hero-multi-feature-0_Capture_767x431.jpg',
      title: 'Instant 1080p 60 FPS Replay & Screenshot Capture',
      desc: 'Record your best clutch kills and high-speed maneuvers in crisp 1080p directly saved onto the XPlay drive.'
    },
    {
      id: 'optimizations',
      name: 'RAM Boost',
      icon: <LayoutGrid className="w-4 h-4" />,
      image: 'https://cms-assets.xboxservices.com/assets/3a/10/3a10b744-c6f1-47f4-a124-712647130d5c.jpg?n=2438801_Hero-multi-feature-0_widgets_767x431.jpg',
      title: 'One-Click Background Task Suspension',
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
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5] font-sans antialiased selection:bg-cyan-500 selection:text-black">
      <SEO
        title="XPlay Student Edition | 250GB DirectStorage Gaming Drive"
        description="Transform any college laptop or budget PC into a 60 FPS gaming powerhouse. Includes 250GB fast SSD and 1x full AAA game key for ₹6,999."
        keywords="XPlay Student Edition, 250GB Gaming Drive, Budget PC Gaming, DirectStorage NVMe, College Laptop Gaming"
      />

      {/* ============================================================== */}
      {/* 1. XPLAY STUDENT EDITION SUB-NAVBAR                            */}
      {/* ============================================================== */}
      <div className="w-full bg-[#0a0e17]/95 backdrop-blur-md border-b border-white/10 sticky top-20 z-40 select-none">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 h-12 flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <span className="font-black text-sm tracking-widest text-white uppercase flex items-center gap-2">
              <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">XPLAY</span>
              <span>STUDENT EDITION</span>
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono font-bold bg-sky-500/20 text-sky-400 border border-sky-500/30 px-2 py-0.5 rounded">
              250GB SSD • ₹6,999
            </span>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-5 text-[#aaa] font-semibold text-xs">
              <a href="#backtotop" className="hover:text-cyan-400 transition-colors">Overview</a>
              <a href="#game-included" className="hover:text-cyan-400 transition-colors">Game Included</a>
              <a href="#gaming-mode" className="hover:text-cyan-400 transition-colors">Game Mode</a>
              <a href="#engineered-for-pc" className="hover:text-cyan-400 transition-colors">Specs</a>
              <a href="#game-hud" className="hover:text-cyan-400 transition-colors">XPlay HUD</a>
              <a href="#faqs" className="hover:text-cyan-400 transition-colors">FAQ</a>
            </nav>

            <button
              onClick={() => onOpenPreOrder?.('student')}
              className="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-black text-[11px] uppercase tracking-wider px-4 py-2 rounded-full transition-all cursor-pointer shadow-md active:scale-95"
            >
              PRE-ORDER ₹6,999
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. SECTION 1: HERO ITEM (#backtotop)                           */}
      {/* ============================================================== */}
      <section 
        id="backtotop" 
        className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-black border-b border-white/10"
      >
        {/* Full-bleed Ambient Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://cms-assets.xboxservices.com/assets/58/61/58613255-f4d2-4bf9-9217-62a3893ed2d8.jpg?n=2438801_Super-Hero-1084_Poster_1920x1080_03.jpg"
            className="w-full h-full object-cover object-center"
            src="https://cms-assets.xboxservices.com/assets/d8/2f/d82f2cf2-4d36-426e-ac14-9a89340d1fb3.mp4?n=2438801_Super-Hero-1084_1920x1080_02.mp4"
          />
          {/* Subtle dark gradient overlay to ensure crystal clear typography */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent lg:w-4/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1500px] w-full mx-auto px-6 sm:px-12 md:px-16 py-24">
          <div className="max-w-2xl space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>COLLEGE STUDENTS & ESPORTS LINEUP</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
              XPLAY ON PC <br />
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                STUDENT EDITION
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#e5e7eb] text-base sm:text-lg font-normal leading-relaxed">
              Transform any everyday college laptop or budget desktop into an uncompromised 60 FPS gaming sanctuary. Plug in your XPlay Student Drive, boot instantly into high-speed NVMe DirectStorage architecture, and enjoy uncompressed AAA gaming with zero host drive wear.
            </p>

            {/* Call To Action Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenPreOrder?.('student')}
                className="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer shadow-lg shadow-cyan-500/30 inline-flex items-center gap-2"
              >
                <span>GET STUDENT EDITION — ₹6,999</span>
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                <span className="text-emerald-400 font-bold">1x Full AAA Game Included</span>
                <span>•</span>
                <span>250GB DirectStorage SSD</span>
              </div>
            </div>

            {/* Legal Copy */}
            <p className="text-xs text-[#9ca3af] leading-relaxed pt-2">
              Requires Windows 10/11 laptop or desktop with USB 3.0 or Type-C port.{' '}
              <a href="#engineered-for-pc" className="text-white underline hover:text-cyan-400 transition-colors">
                See hardware requirements.
              </a>
              <br className="hidden sm:inline" />
              {' '}Questions before ordering?{' '}
              <a href="#faqs" className="text-white underline hover:text-cyan-400 transition-colors">
                Read student FAQs.
              </a>
            </p>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. SECTION 2: 1x AAA DIGITAL GAME INCLUDED (#game-included)   */}
      {/* ============================================================== */}
      <section 
        id="game-included" 
        className="py-24 px-6 sm:px-12 bg-[#0c101a] border-b border-white/10 relative"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>PERMANENT DIGITAL OWNERSHIP</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              1x AAA Digital Game <br />
              <span className="text-emerald-400">Included In The Box</span>
            </h2>

            <p className="text-[#d1d5db] text-base leading-relaxed">
              Every XPlay Student Edition arrives with a genuine license code for a full AAA title of your choice. The game is permanently registered to your personal Steam, Epic Games, or Rockstar Games account with complete cloud saves, achievements, and online multiplayer.
            </p>

            <p className="text-sm text-[#9ca3af] leading-relaxed">
              Play directly from the 250GB XPlay high-speed drive without consuming a single gigabyte of your laptop's internal storage for college notes, coding environments, or lectures.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenPreOrder?.('student')}
                className="bg-white hover:bg-slate-200 text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all cursor-pointer shadow-md inline-flex items-center gap-2"
              >
                <span>CHOOSE YOUR EDITION</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-3 gap-3">
              {[
                { title: 'Forza Horizon 5', img: '/assets/games/forza_cover.jpg' },
                { title: 'Grand Theft Auto V', img: '/assets/games/gtav_cover.jpg' },
                { title: 'Cyberpunk 2077', img: '/assets/games/cyberpunk_cover.jpg' },
                { title: 'Counter-Strike 2', img: '/assets/games/cs2_cover.jpg' },
                { title: 'Hogwarts Legacy', img: '/assets/games/hogwarts_cover.jpg' },
                { title: "Marvel's Spider-Man", img: '/assets/games/spiderman_cover.jpg' },
              ].map((g, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden aspect-[2/3] bg-slate-800 border border-white/10 hover:border-cyan-400 transition-all hover:scale-105 duration-300 shadow-xl group relative">
                  <img src={g.img} alt={g.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                    <span className="text-[11px] font-bold text-white truncate">{g.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. SECTION 3: STUDY MODE OFF, GAMING MODE ON (#gaming-mode)     */}
      {/* ============================================================== */}
      <section id="gaming-mode" className="py-24 px-6 sm:px-12 bg-[#050505] border-b border-white/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Official Image */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <img
                src="https://cms-assets.xboxservices.com/assets/b0/a4/b0a49731-d54c-45fd-8585-4057f8f28358.png?n=Xbox-On-PC_Xbox-Mode_Hero-0_767x431_01.png"
                alt="A PC monitor displaying the gaming mode with controller, keyboard and mouse"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Text Block */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold tracking-wider uppercase">
              <Zap className="w-3.5 h-3.5" />
              <span>INSTANT OS SWITCHING</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Study mode off, <br />
              <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">gaming mode on</span>
            </h2>

            <p className="text-[#d1d5db] text-base leading-relaxed">
              Seamlessly switch between college assignments and dedicated 60 FPS console-grade gaming. With XPlay SAN Policy 4 volume isolation, your internal operating system, college coding setups, and personal files remain completely untouched and safe.
            </p>

            <p className="text-sm text-[#9ca3af] leading-relaxed">
              When plugged in, your laptop allocates 100% of its available graphics bandwidth and RAM directly to the game with zero Windows background clutter.
            </p>

            <div>
              <button
                onClick={() => onOpenPreOrder?.('student')}
                className="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all cursor-pointer shadow-md inline-flex items-center gap-2"
              >
                <span>PRE-ORDER STUDENT EDITION</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. SECTION 4: ENGINEERED FOR STUDENT LAPTOPS                   */}
      {/* ============================================================== */}
      <section id="engineered-for-pc" className="py-24 px-6 sm:px-12 bg-[#0c101a] border-b border-white/10">
        <div className="max-w-[1400px] mx-auto space-y-12">
          
          <div className="max-w-3xl text-left space-y-4">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest block">
              DirectStorage NVMe Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              ENGINEERED FOR STUDENT LAPTOPS
            </h2>
            <p className="text-[#d1d5db] text-base leading-relaxed">
              Designed by Puneet Kushwaha to break the ₹1.5 Lakh gaming hardware barrier. XPlay delivers console-level 60 FPS performance on laptops with standard integrated or dedicated graphics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* 5 Numbered Feature Bullets */}
            <div className="lg:col-span-6 space-y-4">
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
                }
              ].map((f, i) => (
                <div 
                  key={i} 
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/50 hover:bg-white/[0.06] transition-all flex items-start gap-4 text-left group"
                >
                  <span className="text-cyan-400 font-mono font-black text-lg shrink-0 pt-0.5">
                    {f.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-sm text-[#9ca3af] leading-relaxed mt-1">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Hardware Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black relative group">
                <img
                  src="https://cms-assets.xboxservices.com/assets/71/6a/716a5b6f-6dd3-4929-9e8c-f09b5ca08779.jpg?n=2438801_Hero-multi-feature-0_1248x702.jpg"
                  alt="Student gaming desk setup with laptop, monitor and controller"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-8">
                  <div className="text-left space-y-1">
                    <span className="text-xs font-mono font-bold text-cyan-400">STUDENT EDITION HARDWARE</span>
                    <h4 className="text-xl font-black text-white">Satin Silver Anodized CNC Enclosure</h4>
                    <p className="text-xs text-slate-300">Pocket-sized 48 grams • Dual braided cables included</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. SECTION 5: MAXIMIZE GAMEPLAY WITH XPLAY HUD (#game-hud)     */}
      {/* ============================================================== */}
      <section id="game-hud" className="py-24 px-6 sm:px-12 bg-[#050505] border-b border-white/10">
        <div className="max-w-[1400px] mx-auto space-y-12">
          
          <div className="max-w-3xl text-left space-y-4">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest block">
              In-Game System Overlay
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              MAXIMIZE GAMEPLAY WITH XPLAY HUD
            </h2>
            <p className="text-[#d1d5db] text-base leading-relaxed">
              Customizable in-game widget overlay designed to keep you in the zone with instant hardware telemetry, Discord audio balancing, and screen capture.
            </p>
          </div>

          {/* Interactive 4 Tabs */}
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3 border-b border-white/10 pb-4">
              {gameBarTabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveGameBarTab(idx)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                    activeGameBarTab === idx
                      ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            {/* Active Tab Showcase Stage */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0c101a] rounded-3xl p-6 sm:p-10 border border-white/10">
              <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
                <img
                  src={gameBarTabs[activeGameBarTab].image}
                  alt={gameBarTabs[activeGameBarTab].name}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="lg:col-span-5 space-y-4 text-left">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                  XPlay Widget 0{activeGameBarTab + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {gameBarTabs[activeGameBarTab].title}
                </h3>
                <p className="text-[#d1d5db] text-sm sm:text-base leading-relaxed">
                  {gameBarTabs[activeGameBarTab].desc}
                </p>
                <div className="pt-2">
                  <span className="text-xs font-mono text-[#888] block">
                    Shortcut: Press <kbd className="bg-white/10 px-2 py-0.5 rounded text-white font-mono">Win + G</kbd> anytime
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. SECTION 6: UNIVERSAL DEVICE COMPATIBILITY                    */}
      {/* ============================================================== */}
      <section className="py-24 px-6 sm:px-12 bg-[#0c101a] border-b border-white/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest block">
              Multi-Device Ecosystem
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              PLAY ON LAPTOP, <br />
              <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                DESKTOP OR HANDHELD
              </span>
            </h2>

            <p className="text-[#d1d5db] text-base leading-relaxed">
              Carry your entire gaming sanctuary in your pocket. The XPlay Student Drive is smaller than a credit card and weighs just 48 grams. Plug into your hostel laptop, home PC, or handheld consoles like ASUS ROG Ally, Lenovo Legion Go, and MSI Claw.
            </p>

            <p className="text-sm text-[#9ca3af] leading-relaxed">
              Seamlessly sync achievements, saved games, and cloud checkpoints across all your machines.
            </p>

            <div>
              <button
                onClick={() => onOpenPreOrder?.('student')}
                className="bg-white hover:bg-slate-200 text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all cursor-pointer shadow-md inline-flex items-center gap-2"
              >
                <span>PRE-ORDER NOW</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <img
                src="https://cms-assets.xboxservices.com/assets/f4/bf/f4bf70a0-043f-4e08-9df5-6e5a6ef67e3a.jpg?n=2438801_Feature-Merch-0_Handheld_1040x585.jpg"
                alt="XPlay Console handheld and laptop gaming setup"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. SECTION 7: CAMPUS & HOSTEL GAMING                           */}
      {/* ============================================================== */}
      <section className="py-24 px-6 sm:px-12 bg-[#050505] border-b border-white/10">
        <div className="max-w-[1400px] mx-auto space-y-12">
          
          <div className="max-w-2xl text-left space-y-3">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest block">
              Gamer Mobility
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              BUILT FOR CAMPUS LIFE
            </h2>
            <p className="text-[#aaa] text-sm sm:text-base leading-relaxed">
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
                className="p-8 rounded-3xl bg-[#0c101a] border border-white/10 hover:border-cyan-500/40 transition-all space-y-3 group"
              >
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-mono font-bold">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. SECTION 8: FREQUENTLY ASKED QUESTIONS (#faqs)               */}
      {/* ============================================================== */}
      <section id="faqs" className="py-24 px-6 sm:px-12 bg-[#0c101a] border-b border-white/10">
        <div className="max-w-[1000px] mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest block">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-[#aaa] text-sm sm:text-base max-w-xl mx-auto">
              Everything you need to know about XPlay Student Edition hardware, compatibility, and game licensing.
            </p>
          </div>

          <div className="space-y-3 text-left">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-white">
                    {faq.q}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
                    {openFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#ccc] leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pre-order banner at bottom of FAQ */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-sky-950/80 via-slate-900 to-cyan-950/80 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                LIMITED INTRODUCTORY BATCH
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Reserve Your Student Edition for ₹6,999
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                Includes 250GB DirectStorage SSD + 1x AAA Digital Game Voucher
              </p>
            </div>
            <button
              onClick={() => onOpenPreOrder?.('student')}
              className="bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-300 hover:to-cyan-300 text-slate-950 font-black text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer shadow-lg shadow-cyan-500/20 shrink-0 active:scale-95"
            >
              PRE-ORDER NOW
            </button>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 10. OFFICIAL XPLAY GAMING FOOTER                               */}
      {/* ============================================================== */}
      <GamingFooter onOpenPreOrder={onOpenPreOrder} />

    </div>
  );
};

export default StudentEditionPage;
