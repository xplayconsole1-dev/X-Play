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
  ArrowRight,
  Package,
  Cable,
  Check,
  Award,
  Thermometer,
  Layers,
  Monitor
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

  const inTheBoxItems = [
    {
      title: 'XPlay 250GB Console Drive',
      spec: 'Satin Silver CNC Aluminum (48g)',
      desc: 'High-speed DirectStorage NVMe drive with pre-configured bootable game vault architecture.',
      icon: <HardDrive className="w-5 h-5 text-sky-600" />
    },
    {
      title: 'Braided Type-C to Type-C Cable',
      spec: 'USB 3.2 Gen 2 (10 Gbps) • 1.2m',
      desc: 'Heavy-duty nylon braided cable engineered for sustained 1,050 MB/s data bandwidth.',
      icon: <Cable className="w-5 h-5 text-cyan-600" />
    },
    {
      title: 'Braided Type-C to Type-A Cable',
      spec: 'USB 3.2 Gen 2 • 1.2m',
      desc: 'Connect seamlessly to college lab desktops and laptops without native Type-C ports.',
      icon: <Cable className="w-5 h-5 text-teal-600" />
    },
    {
      title: '1x AAA Digital Game Voucher',
      spec: 'Steam / Epic / Rockstar Key',
      desc: 'Permanent lifetime digital game license registered directly to your personal gamer account.',
      icon: <Award className="w-5 h-5 text-emerald-600" />
    },
    {
      title: 'QuickStart Setup Guide',
      spec: 'Full Visual Instruction Booklet',
      desc: 'Step-by-step 10-second setup guide for Windows 10/11 laptops and desktop computers.',
      icon: <Package className="w-5 h-5 text-amber-600" />
    },
    {
      title: '1-Year Replacement Warranty',
      spec: 'Free Doorstep Courier Swap in India',
      desc: 'Full hardware replacement protection plus 24/7 direct engineer support on WhatsApp.',
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />
    }
  ];

  const specsList = [
    { label: 'Storage Capacity', val: '250GB Ultra-Fast 3D NAND SSD' },
    { label: 'Sequential Read Speed', val: 'Up to 1,050 MB/s (DirectStorage Optimized)' },
    { label: 'Sequential Write Speed', val: 'Up to 950 MB/s' },
    { label: 'Host Interface', val: 'USB 3.2 Gen 2 (10 Gbps) Type-C' },
    { label: 'Drive Enclosure', val: 'CNC Aircraft-Grade Anodized Aluminum' },
    { label: 'Thermal Profile', val: 'Passive Heat Spreader (Operating Temp < 42°C)' },
    { label: 'Host Drive Isolation', val: 'SAN Policy 4 (Zero Host Footprint / Zero Wear)' },
    { label: 'Anti-Cheat Certification', val: 'Valorant Vanguard, CS2 VAC, EA Anti-Cheat, BattlEye' },
    { label: 'Weight & Dimensions', val: '48 Grams • 98mm x 28mm x 9mm' },
    { label: 'Operating System', val: 'Windows 10 / Windows 11 (64-Bit, 22H2 or higher)' }
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
        title="XPlay on PC | Student Edition (250GB DirectStorage Gaming Drive)"
        description="Transform any college laptop or budget PC into a 60 FPS gaming powerhouse. Includes 250GB fast SSD and 1x full AAA game key for ₹6,999."
        keywords="XPlay Student Edition, 250GB Gaming Drive, Budget PC Gaming, DirectStorage NVMe, College Laptop Gaming"
      />

      {/* ============================================================== */}
      {/* 1. SECTION 1: EXACT 1:1 XBOX ON PC HERO ITEM (#backtotop)      */}
      {/* ============================================================== */}
      <section 
        id="backtotop" 
        className="relative w-full h-screen min-h-screen flex items-center overflow-hidden bg-black select-none"
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent lg:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>

        {/* Content Container (f-x-left f-y-center) */}
        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 sm:px-12 md:px-16 pt-20">
          <div className="max-w-2xl space-y-6 text-left">
            
            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none font-round-bold">
              XPLAY ON PC
            </h1>

            {/* Subheading / Description */}
            <p className="text-[#e5e7eb] text-base sm:text-lg font-normal leading-relaxed">
              Transform any everyday college laptop or budget PC into a dedicated 60 FPS gaming powerhouse. Powered by DirectStorage NVMe speed, plug in your XPlay drive, boot instantly into AAA games, and experience zero host drive wear with permanent game ownership.
            </p>

            {/* Call To Action Button (Exact Xbox Green) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenPreOrder?.('student')}
                className="bg-[#107c10] hover:bg-[#0e6b0e] active:scale-95 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-[2px] transition-all cursor-pointer shadow-lg shadow-[#107c10]/40 inline-flex items-center gap-2"
              >
                <span>PRE-ORDER NOW — ₹6,999</span>
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </button>

              <span className="text-xs text-[#9bf00b] font-mono font-bold">
                Student Edition: 250GB SSD Included (₹6,999)
              </span>
            </div>

            {/* Legal / Hardware Specs Copy */}
            <p className="text-xs text-[#9ca3af] leading-relaxed pt-2">
              Compatible with any Windows 10/11 laptop or desktop with USB 3.0 or Type-C.{' '}
              <a href="#specs" className="text-white underline hover:text-[#9bf00b] transition-colors">
                See hardware specs.
              </a>
              <br className="hidden sm:inline" />
              {' '}Questions about setup or campus delivery?{' '}
              <a href="#faqs" className="text-white underline hover:text-[#9bf00b] transition-colors">
                Read student FAQs.
              </a>
            </p>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. SECTION 2: 1x AAA DIGITAL GAME INCLUDED (LIGHT THEME)        */}
      {/* ============================================================== */}
      <section 
        id="game-included" 
        className="py-20 sm:py-28 px-6 sm:px-12 bg-white border-b border-slate-200/80 relative select-none"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="max-w-2xl text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Permanent Digital Ownership</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-round-bold uppercase leading-tight">
              1x AAA Digital Game <br />
              <span className="text-emerald-600">Included In The Box</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Every XPlay Student Edition arrives with a genuine license code for a full AAA title of your choice. The game is permanently registered to your personal Steam, Epic Games, or Rockstar Games account with complete cloud saves, achievements, and online multiplayer.
            </p>

            <p className="text-sm text-slate-500 leading-relaxed">
              Play directly from the 250GB XPlay high-speed drive without consuming a single gigabyte of your laptop's internal storage for college notes, coding environments, or lectures.
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
                className="rounded-2xl overflow-hidden aspect-[2/3] bg-slate-100 border border-slate-200/90 hover:border-emerald-500 transition-all hover:-translate-y-1.5 duration-300 shadow-xs hover:shadow-lg group relative cursor-pointer"
              >
                <img src={g.img} alt={g.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-white truncate">{g.title}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
            <span>Redeem permanently into your personal Steam / Epic account. Zero host drive wear.</span>
            <button 
              onClick={() => onOpenPreOrder?.('student')}
              className="text-emerald-700 hover:text-emerald-800 font-bold inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Pre-order Student Edition</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. SECTION 3: STUDY MODE OFF, GAMING MODE ON (LIGHT THEME)     */}
      {/* ============================================================== */}
      <section id="gaming-mode" className="py-20 sm:py-28 px-6 sm:px-12 bg-[#f8fafc] border-b border-slate-200/80 select-none">
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-sky-600" />
              <span>Instant Hardware Switching</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-round-bold uppercase leading-tight">
              Study mode off, <br />
              <span className="text-sky-600">gaming mode on</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Seamlessly switch between college assignments and dedicated 60 FPS console-grade gaming. With XPlay SAN Policy 4 volume isolation, your internal operating system, college coding setups, and personal files remain completely untouched and safe.
            </p>

            <p className="text-slate-500 text-sm leading-relaxed">
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
      <section id="specs" className="py-20 sm:py-28 px-6 sm:px-12 bg-white border-b border-slate-200/80 select-none">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="max-w-2xl text-left space-y-3">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-[0.25em] block">
              DirectStorage NVMe Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-round-bold uppercase">
              Engineered For Student Laptops
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
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
      {/* 5. SECTION 5: MAXIMIZE GAMEPLAY WITH XPLAY HUD (LIGHT THEME)   */}
      {/* ============================================================== */}
      <section id="game-hud" className="py-20 sm:py-28 px-6 sm:px-12 bg-[#f8fafc] border-b border-slate-200/80 select-none">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="max-w-2xl text-left space-y-3">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-[0.25em] block">
              In-Game System Overlay
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-round-bold uppercase">
              Maximize Gameplay with XPlay HUD
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
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
      {/* 6. SECTION 6: UNIVERSAL DEVICE COMPATIBILITY (LIGHT THEME)      */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white border-b border-slate-200/80 select-none">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-[0.25em] block">
              Multi-Device Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-round-bold uppercase leading-tight">
              Play on laptop, <br />
              <span className="text-sky-600">desktop or handheld</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Carry your entire gaming sanctuary in your pocket. The XPlay Student Drive is smaller than a credit card and weighs just 48 grams. Plug into your hostel laptop, home PC, or handheld consoles like ASUS ROG Ally, Lenovo Legion Go, and MSI Claw.
            </p>

            <p className="text-slate-500 text-sm leading-relaxed">
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
      {/* 7. SECTION 7: WHAT'S IN THE BOX UNBOXING (LIGHT THEME)         */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-[#f8fafc] border-b border-slate-200/80 select-none">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="max-w-2xl text-left space-y-3">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-[0.25em] block">
              Package Contents
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-round-bold uppercase">
              What's In The Box
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Complete ready-to-play package engineered for college campuses, hostels, and LAN setups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {inTheBoxItems.map((item, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-sky-400 hover:shadow-md transition-all space-y-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-sky-600 block uppercase tracking-wider mb-1">
                    {item.spec}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mt-1.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. SECTION 8: TECHNICAL SPECIFICATIONS MATRIX (LIGHT THEME)     */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 bg-white border-b border-slate-200/80 select-none">
        <div className="max-w-4xl mx-auto space-y-10">
          
          <div className="text-center space-y-2">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-[0.25em] block">
              Hardware Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-round-bold uppercase">
              Technical Specifications
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              Precision engineering optimized for zero host drive footprint and unthrottled 60 FPS gaming.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200/90 bg-slate-50/60 overflow-hidden divide-y divide-slate-200/80 text-left text-sm">
            {specsList.map((spec, i) => (
              <div key={i} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white transition-colors">
                <span className="text-slate-500 font-medium">{spec.label}</span>
                <span className="text-slate-900 font-bold sm:text-right">{spec.val}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. SECTION 9: FREQUENTLY ASKED QUESTIONS (LIGHT THEME)         */}
      {/* ============================================================== */}
      <section id="faqs" className="py-20 sm:py-28 px-6 sm:px-12 bg-[#f8fafc] border-b border-slate-200/80 select-none">
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
                className="border border-slate-200/90 rounded-2xl bg-white hover:border-sky-300 hover:shadow-xs transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-bold text-base text-slate-900">
                    {faq.q}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-700">
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
                LIMITED INTRODUCTORY BATCH
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
              className="bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-all cursor-pointer shadow-sm shrink-0 active:scale-95 inline-flex items-center gap-2"
            >
              <span>PRE-ORDER NOW</span>
              <ChevronRight className="w-4 h-4" />
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
