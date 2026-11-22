import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import confetti from 'canvas-confetti';
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
  Monitor,
  Activity,
  Gauge,
  Flame,
  CheckCircle,
  Play,
  Star,
  Laptop,
  Shield,
  RotateCcw
} from 'lucide-react';
import SEO from '../components/SEO';
import GamingFooter from '../sections/GamingFooter';

gsap.registerPlugin(ScrollTrigger);

const StudentEditionPage = ({ onOpenPreOrder }) => {
  const pageContainerRef = useRef(null);
  const [activeGameBarTab, setActiveGameBarTab] = useState(0);
  const [selectedGameIndex, setSelectedGameIndex] = useState(0);
  const [activeMode, setActiveMode] = useState('gaming'); // 'study' | 'gaming'
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const triggerConfettiAndPreOrder = () => {
    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.68 },
        colors: ['#0284c7', '#38bdf8', '#107c10', '#ffffff', '#e0f2fe']
      });
    } catch {}
    onOpenPreOrder?.('student');
  };

  // GSAP Smooth ScrollTrigger Entrance Animations
  useGSAP(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal headers smoothly on scroll
      gsap.utils.toArray('.reveal-header').forEach((el) => {
        gsap.fromTo(el, 
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // 2. Stagger reveal cards
      gsap.utils.toArray('.stagger-grid').forEach((grid) => {
        const cards = grid.querySelectorAll('.stagger-card');
        if (cards.length > 0) {
          gsap.fromTo(cards,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.08,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: grid,
                start: 'top 85%',
                toggleActions: 'play none none none'
              }
            }
          );
        }
      });
    }, pageContainerRef);

    return () => ctx.revert();
  }, { scope: pageContainerRef });

  const gameBarTabs = [
    {
      id: 'performance',
      name: 'Performance',
      icon: <Sliders className="w-4 h-4" />,
      title: 'Real-time 60 FPS & Hardware Telemetry',
      desc: 'Track frame rates, GPU clock speed, CPU temperature, and RAM allocation in real time with zero frame pacing penalties.',
      stat1: '60.0 FPS',
      stat1Label: 'Framerate (Locked)',
      stat2: '42°C',
      stat2Label: 'Passive NVMe Temp',
      stat3: '0.00%',
      stat3Label: 'Host Drive Wear'
    },
    {
      id: 'audio',
      name: 'Audio Mixer',
      icon: <Volume2 className="w-4 h-4" />,
      title: 'Game & Discord Voice Channel Balancer',
      desc: 'Balance in-game sound effects, Discord voice chat, and background music without alt-tabbing or leaving your match.',
      stat1: '100% / 65%',
      stat1Label: 'Game / Discord Split',
      stat2: '0 ms',
      stat2Label: 'Audio Latency',
      stat3: 'Spatial',
      stat3Label: 'Stereo Sound Stage'
    },
    {
      id: 'capture',
      name: 'Capture',
      icon: <Camera className="w-4 h-4" />,
      title: 'Instant 1080p 60 FPS Replay & Screenshot Capture',
      desc: 'Record your best clutch kills and high-speed maneuvers in crisp 1080p directly saved onto the XPlay drive.',
      stat1: '1080p',
      stat1Label: 'Recording Quality',
      stat2: '60 FPS',
      stat2Label: 'Capture Framerate',
      stat3: 'Direct NVMe',
      stat3Label: 'Instant Drive Save'
    },
    {
      id: 'optimizations',
      name: 'RAM Boost',
      icon: <LayoutGrid className="w-4 h-4" />,
      title: 'One-Click Background Task Suspension',
      desc: 'Automatically suspend background college tabs and heavy apps to free up to 3.5GB of RAM for dedicated game rendering.',
      stat1: '+3.5 GB',
      stat1Label: 'RAM Recovered',
      stat2: 'Priority 1',
      stat2Label: 'GPU Bus Allocation',
      stat3: 'Zero Footprint',
      stat3Label: 'Safe Standby'
    }
  ];

  const gamesCatalog = [
    {
      title: 'Forza Horizon 5',
      publisher: 'Playground Games',
      genre: 'Open World Racing',
      size: '110 GB',
      perfTarget: '1080p • 60 FPS Ultra',
      cover: '/assets/games/forza_cover.jpg',
      desc: 'Race across vibrant Mexican landscapes with zero texture pop-in powered by DirectStorage high-speed streaming.'
    },
    {
      title: 'Grand Theft Auto V',
      publisher: 'Rockstar Games',
      genre: 'Open World Action',
      size: '95 GB',
      perfTarget: '1080p • 60 FPS Locked',
      cover: '/assets/games/gtav_cover.jpg',
      desc: 'Explore Los Santos and Blaine County in full High-Definition with instant story mode load times and full Online access.'
    },
    {
      title: 'Cyberpunk 2077',
      publisher: 'CD Projekt RED',
      genre: 'Sci-Fi RPG',
      size: '70 GB',
      perfTarget: '1080p • 60 FPS Performance',
      cover: '/assets/games/cyberpunk_cover.jpg',
      desc: 'Traverse Night City with instantaneous crowd asset streaming directly from the high-bandwidth 1,050 MB/s SSD.'
    },
    {
      title: 'Counter-Strike 2',
      publisher: 'Valve',
      genre: 'Competitive Tactical Shooter',
      size: '35 GB',
      perfTarget: '1080p • 144+ FPS Esports',
      cover: '/assets/games/cs2_cover.jpg',
      desc: 'Sub-tick precision gaming with zero input latency. VAC-certified kernel execution with zero ban risk.'
    },
    {
      title: 'Hogwarts Legacy',
      publisher: 'Warner Bros. Games',
      genre: 'Action RPG',
      size: '85 GB',
      perfTarget: '1080p • 60 FPS Dynamic',
      cover: '/assets/games/hogwarts_cover.jpg',
      desc: 'Experience 1800s Hogwarts School of Witchcraft and Wizardry with swift castle travel and seamless open world flight.'
    },
    {
      title: "Marvel's Spider-Man",
      publisher: 'PlayStation Publishing',
      genre: 'Action Adventure',
      size: '75 GB',
      perfTarget: '1080p • 60 FPS Fluid',
      cover: '/assets/games/spiderman_cover.jpg',
      desc: 'Web-swing through Marvel Manhattan with high-velocity DirectStorage asset loading and full DualSense haptic feedback.'
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
      a: 'Yes. The Student Edition is designed as a standalone drive so you can bring whatever input you love: Wireless Gamepad, PS5 DualSense, Cosmic Byte, Redgear, or standard mouse and keyboard. Full native input mapping is pre-calibrated.'
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

  const currentSelectedGame = gamesCatalog[selectedGameIndex];

  return (
    <div 
      ref={pageContainerRef}
      className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased selection:bg-sky-500 selection:text-white overflow-x-hidden"
    >
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-transparent lg:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </div>

        {/* Content Container (f-x-left f-y-center) */}
        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 sm:px-12 md:px-16 pt-24 pb-20">
          <div className="max-w-2xl space-y-6 text-left">

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none font-round-bold drop-shadow-md">
              XPLAY ON PC
            </h1>

            {/* Subheading / Description */}
            <p className="text-[#e5e7eb] text-base sm:text-lg font-normal leading-relaxed drop-shadow-sm">
              Transform any everyday college laptop or budget PC into a dedicated 60 FPS gaming powerhouse. Powered by DirectStorage NVMe speed, plug in your XPlay drive, boot instantly into AAA games, and experience zero host drive wear with permanent game ownership.
            </p>

            {/* Call To Action Button (Ice Blue Signature Color) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={triggerConfettiAndPreOrder}
                className="group bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-300 hover:to-cyan-300 active:scale-95 text-slate-950 font-sans font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-200 cursor-pointer shadow-lg shadow-sky-500/30 inline-flex items-center gap-2 hover:shadow-xl hover:shadow-cyan-400/50"
              >
                <span>PRE-ORDER NOW — ₹6,999</span>
                <ChevronRight className="w-4 h-4 stroke-[3] group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="text-xs text-cyan-300 font-mono font-bold px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-400/30 backdrop-blur-sm">
                Student Edition: 250GB SSD Included (₹6,999)
              </span>
            </div>

            {/* Legal / Hardware Specs Copy */}
            <p className="text-xs text-[#9ca3af] leading-relaxed pt-2">
              Compatible with any Windows 10/11 laptop or desktop with USB 3.0 or Type-C.{' '}
              <a href="#specs" className="text-white underline hover:text-cyan-300 transition-colors">
                See hardware specs.
              </a>
              <br className="hidden sm:inline" />
              {' '}Questions about setup or campus delivery?{' '}
              <a href="#faqs" className="text-white underline hover:text-cyan-300 transition-colors">
                Read student FAQs.
              </a>
            </p>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. SECTION 2: 1x AAA DIGITAL GAME INCLUDED (INTERACTIVE)       */}
      {/* ============================================================== */}
      <section 
        id="game-included" 
        className="py-20 sm:py-28 px-6 sm:px-12 bg-white border-b border-slate-200/80 relative select-none overflow-hidden"
      >
        {/* Soft Ambient Glows */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-100/50 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-sky-100/50 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          
          <div className="max-w-2xl text-left space-y-3 reveal-header">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Permanent Digital Ownership</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 font-round-bold uppercase leading-tight">
              1x AAA Digital Game <br />
              <span className="text-emerald-600">Included In The Box</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Every XPlay Student Edition arrives with a genuine license code for a full AAA title of your choice. The game is permanently registered to your personal Steam, Epic Games, or Rockstar Games account with complete cloud saves, achievements, and online multiplayer.
            </p>
          </div>

          {/* Interactive Game Showcase Card */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 text-white shadow-2xl relative overflow-hidden transition-all duration-500">
            {/* Background cover art overlay blur */}
            <div 
              className="absolute inset-0 opacity-15 bg-cover bg-center filter blur-xl scale-110 pointer-events-none transition-all duration-700"
              style={{ backgroundImage: `url(${currentSelectedGame.cover})` }}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              {/* Game Cover Poster with Active Badge */}
              <div className="md:col-span-4 lg:col-span-3">
                <div className="aspect-[2/3] w-full max-w-[220px] mx-auto rounded-2xl overflow-hidden border-2 border-emerald-400 shadow-2xl shadow-emerald-500/20 relative group">
                  <img 
                    src={currentSelectedGame.cover} 
                    alt={currentSelectedGame.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-emerald-500 text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Included</span>
                  </div>
                </div>
              </div>

              {/* Game Info Details */}
              <div className="md:col-span-8 lg:col-span-9 space-y-4 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800">
                    {currentSelectedGame.genre}
                  </span>
                  <span className="text-xs font-mono text-slate-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {currentSelectedGame.publisher}
                  </span>
                  <span className="text-xs font-mono text-sky-400 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800">
                    {currentSelectedGame.size}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-round-bold">
                  {currentSelectedGame.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  {currentSelectedGame.desc}
                </p>

                {/* Performance Target Pill */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs text-slate-200">
                    <Activity className="w-4 h-4 text-[#9bf00b]" />
                    <span className="font-bold text-white">{currentSelectedGame.perfTarget}</span>
                  </div>

                  <button
                    onClick={triggerConfettiAndPreOrder}
                    className="bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-300 hover:to-cyan-300 active:scale-95 text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-all cursor-pointer shadow-lg shadow-sky-500/30 inline-flex items-center gap-2"
                  >
                    <span>CLAIM WITH ₹6,999 PRE-ORDER</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Game Selection Row */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Select Your Choice Below (Click To Preview)
              </span>
              <span className="text-xs text-emerald-600 font-mono font-bold">
                Lifetime Steam / Epic Ownership
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 stagger-grid">
              {gamesCatalog.map((g, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedGameIndex(idx)}
                  className={`stagger-card rounded-2xl overflow-hidden aspect-[2/3] bg-slate-100 border-2 transition-all duration-300 cursor-pointer relative group ${
                    selectedGameIndex === idx 
                      ? 'border-emerald-500 ring-4 ring-emerald-500/20 -translate-y-2 shadow-xl' 
                      : 'border-slate-200/90 hover:border-emerald-400 hover:-translate-y-1.5 hover:shadow-lg'
                  }`}
                >
                  <img src={g.cover} alt={g.title} className="w-full h-full object-cover select-none" />
                  
                  {/* Selected check indicator */}
                  {selectedGameIndex === idx && (
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-emerald-500 text-black flex items-center justify-center shadow-md">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-[11px] font-bold text-white truncate group-hover:text-emerald-300 transition-colors">
                      {g.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
            <span>Redeem permanently into your personal Steam / Epic account. Zero host drive wear.</span>
            <button 
              onClick={triggerConfettiAndPreOrder}
              className="text-emerald-700 hover:text-emerald-800 font-bold inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Pre-order Student Edition</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. SECTION 3: STUDY MODE OFF, GAMING MODE ON (INTERACTIVE)     */}
      {/* ============================================================== */}
      <section id="gaming-mode" className="py-20 sm:py-28 px-6 sm:px-12 bg-[#f8fafc] border-b border-slate-200/80 select-none relative overflow-hidden">
        {/* Ambient blur */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-200/40 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Visual Container with Interactive Telemetry Switcher */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)] bg-white p-3 space-y-3">
              <div className="relative rounded-2xl overflow-hidden bg-slate-950">
                <img
                  src="/assets/xplay_transform_setup.jpg"
                  alt="XPlay Console setup with laptop and controller"
                  className="w-full h-auto object-cover max-h-[440px] rounded-xl"
                />

                {/* Floating Live Telemetry Badge over image */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3.5 text-white flex flex-wrap items-center justify-between gap-3 text-xs shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${activeMode === 'gaming' ? 'bg-cyan-400' : 'bg-emerald-400'} animate-pulse`} />
                    <span className="font-bold font-mono">
                      {activeMode === 'gaming' ? 'XPLAY DIRECTSTORAGE: 60 FPS LOCKED' : 'STUDY MODE: 0 RPM SILENT (ISOLATED)'}
                    </span>
                  </div>
                  <div className="font-mono text-cyan-300 text-xs font-bold">
                    {activeMode === 'gaming' ? '1,050 MB/s Active' : 'C: Drive 100% Safe'}
                  </div>
                </div>
              </div>

              {/* Mode Toggle Bar */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-2xl">
                <button
                  onClick={() => setActiveMode('study')}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold uppercase transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    activeMode === 'study'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Laptop className="w-4 h-4 text-sky-600" />
                  <span>Study Mode (Assignments)</span>
                </button>
                <button
                  onClick={() => setActiveMode('gaming')}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold uppercase transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    activeMode === 'gaming'
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Gamepad2 className="w-4 h-4 text-emerald-400" />
                  <span>Gaming Mode (60 FPS)</span>
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2 text-left reveal-header">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-sky-600" />
              <span>Instant Hardware Switching</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 font-round-bold uppercase leading-tight">
              Study mode off, <br />
              <span className="text-sky-600">gaming mode on</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Seamlessly switch between college assignments and dedicated 60 FPS console-grade gaming. With XPlay SAN Policy 4 volume isolation, your internal operating system, college coding setups, and personal files remain completely untouched and safe.
            </p>

            {/* Dynamic Telemetry List based on Mode */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2 text-xs">
              <div className="flex items-center justify-between font-mono">
                <span className="text-slate-500">Host OS Footprint:</span>
                <span className="text-emerald-600 font-bold">0 MB Written (100% Isolated)</span>
              </div>
              <div className="flex items-center justify-between font-mono">
                <span className="text-slate-500">GPU Bandwidth:</span>
                <span className="text-sky-600 font-bold">100% Dedicated Pipeline</span>
              </div>
              <div className="flex items-center justify-between font-mono">
                <span className="text-slate-500">Anti-Cheat Compatibility:</span>
                <span className="text-slate-900 font-bold">Vanguard & VAC Certified</span>
              </div>
            </div>

            <div>
              <button
                onClick={triggerConfettiAndPreOrder}
                className="bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-300 hover:to-cyan-300 active:scale-95 text-slate-950 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer shadow-lg shadow-sky-500/20 inline-flex items-center gap-2"
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
      <section id="specs" className="py-20 sm:py-28 px-6 sm:px-12 bg-white border-b border-slate-200/80 select-none relative">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="max-w-2xl text-left space-y-3 reveal-header">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-[0.25em] block">
              DirectStorage NVMe Pipeline
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 font-round-bold uppercase">
              Engineered For Student Laptops
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Designed by Puneet Kushwaha to break the ₹1.5 Lakh gaming hardware barrier. XPlay delivers console-level 60 FPS performance on laptops with standard integrated or dedicated graphics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left stagger-grid">
            {[
              {
                num: '01',
                title: 'Zero Host Drive Wear',
                desc: 'All game assets, shaders, and patches write directly to the 250GB external SSD without taking a single byte of your laptop internal storage.',
                badge: 'SAN Policy 4'
              },
              {
                num: '02',
                title: 'DirectStorage 1,050 MB/s Speed',
                desc: 'Bypasses legacy SATA bottlenecks with sustained sequential read throughput for instantaneous asset streaming and quick boots.',
                badge: 'NVMe Gen 3x4'
              },
              {
                num: '03',
                title: 'Universal Plug & Play Compatibility',
                desc: 'Includes dual braided USB-C and USB-A 3.2 Gen 2 cables. Works with Acer, ASUS, Dell, HP, Lenovo, and custom desktop rigs.',
                badge: 'Dual Braided Cables'
              },
              {
                num: '04',
                title: 'Anti-Cheat & Esports Certified',
                desc: 'Full kernel-level support for Valorant Vanguard, CS2 VAC, and EA Anti-Cheat with zero virtual machine detection penalties.',
                badge: '100% Kernel Safe'
              },
              {
                num: '05',
                title: 'Passive CNC Thermal Cooling',
                desc: 'Aircraft-grade satin silver aluminum body dissipates heat passively, keeping drive temps under 42°C during 8-hour marathon sessions.',
                badge: 'Operating < 42°C'
              },
              {
                num: '06',
                title: 'Pocket Sized (48 Grams)',
                desc: 'Smaller than a standard credit card. Slips into your pocket, backpack or laptop sleeve for easy campus mobility.',
                badge: '98mm x 28mm'
              }
            ].map((f, i) => (
              <div 
                key={i} 
                className="stagger-card p-7 rounded-3xl bg-[#f8fafc] border border-slate-200/80 hover:border-sky-400 hover:bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    {f.num}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 font-bold">
                    {f.badge}
                  </span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-sky-600 transition-colors">
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
      {/* 5. SECTION 5: MAXIMIZE GAMEPLAY WITH XPLAY HUD (INTERACTIVE)   */}
      {/* ============================================================== */}
      <section id="game-hud" className="py-20 sm:py-28 px-6 sm:px-12 bg-[#f8fafc] border-b border-slate-200/80 select-none relative">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="max-w-2xl text-left space-y-3 reveal-header">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-[0.25em] block">
              In-Game System Overlay
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 font-round-bold uppercase">
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
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                    activeGameBarTab === idx
                      ? 'bg-slate-900 text-white shadow-md scale-105'
                      : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            {/* Active Tab Showcase Stage */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-[0_15px_35px_rgba(15,23,42,0.06)]">
              {/* Native XPlay Telemetry HUD Screen (100% XPlay Branded) */}
              <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl relative min-h-[380px] flex flex-col justify-between p-5 text-white">
                {/* Background Game Scene Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-25 filter blur-[1px] scale-105 pointer-events-none"
                  style={{ backgroundImage: `url('/assets/games/cyberpunk_cover.jpg')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent pointer-events-none" />

                {/* HUD Top Bar */}
                <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-300">
                      XPLAY TELEMETRY OVERLAY
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                      60.0 FPS LOCKED
                    </span>
                    <span>14ms</span>
                  </div>
                </div>

                {/* Dynamic Content based on Active Tab */}
                <div className="relative z-10 py-4 my-auto">
                  {activeGameBarTab === 0 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-left">
                          <span className="text-[10px] text-slate-400 uppercase font-mono block">FRAMERATE</span>
                          <span className="text-xl font-black font-mono text-emerald-400">60.0 FPS</span>
                          <span className="text-[10px] text-emerald-500/80 block mt-0.5">DirectStorage 1:1</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-left">
                          <span className="text-[10px] text-slate-400 uppercase font-mono block">NVMe READ</span>
                          <span className="text-xl font-black font-mono text-sky-400">1,050 MB/s</span>
                          <span className="text-[10px] text-sky-400/80 block mt-0.5">Sustained PCIe</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-left">
                          <span className="text-[10px] text-slate-400 uppercase font-mono block">GPU TEMP</span>
                          <span className="text-xl font-black font-mono text-cyan-300">42°C</span>
                          <span className="text-[10px] text-cyan-400/80 block mt-0.5">Passive Cool</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-left">
                          <span className="text-[10px] text-slate-400 uppercase font-mono block">HOST WEAR</span>
                          <span className="text-xl font-black font-mono text-purple-400">0.00%</span>
                          <span className="text-[10px] text-purple-400/80 block mt-0.5">Zero C: Drive Writes</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-between text-xs">
                        <span className="text-slate-400 font-mono">Frame Pacing Curve:</span>
                        <div className="flex items-center gap-2">
                          <div className="w-28 sm:w-36 h-2 rounded-full bg-emerald-500/30 overflow-hidden">
                            <div className="w-full h-full bg-emerald-400 rounded-full" />
                          </div>
                          <span className="text-emerald-400 font-mono font-bold text-xs">16.6ms Flat</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeGameBarTab === 1 && (
                    <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 space-y-1.5 text-left">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-slate-300 font-bold">Game Audio (DirectStorage)</span>
                          <span className="text-cyan-400 font-bold">100%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div className="w-full h-full bg-cyan-400 rounded-full" />
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 space-y-1.5 text-left">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-slate-300 font-bold">Discord Voice Channel</span>
                          <span className="text-sky-400 font-bold">65%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div className="w-[65%] h-full bg-sky-400 rounded-full" />
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 space-y-1.5 text-left">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-slate-300 font-bold">Spatial Sound Passthrough</span>
                          <span className="text-emerald-400 font-bold">Low Latency (0ms)</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div className="w-full h-full bg-emerald-400 rounded-full" />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeGameBarTab === 2 && (
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-between text-left">
                        <div>
                          <span className="text-xs font-mono font-bold text-white block">Instant Replay Buffer</span>
                          <span className="text-[11px] text-slate-400">Captures last 30s clutch play in 1080p 60 FPS</span>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-rose-500/20 text-rose-400 border border-rose-500/30 text-[10px] font-bold font-mono">
                          ACTIVE ●
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-between text-left">
                        <div>
                          <span className="text-xs font-mono font-bold text-white block">Storage Destination</span>
                          <span className="text-[11px] text-slate-400 font-mono">XPlay NVMe Drive (E:\Captures)</span>
                        </div>
                        <span className="text-xs text-sky-400 font-mono font-bold">
                          Zero C: Wear
                        </span>
                      </div>
                    </div>
                  )}

                  {activeGameBarTab === 3 && (
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 text-left space-y-1.5">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-mono font-bold text-white">RAM Optimization Status</span>
                          <span className="text-xs font-mono font-bold text-emerald-400">+3.5 GB Freed</span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Suspended background browser tabs and background tasks. 100% RAM & GPU allocated to game.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-left">
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80">
                          <span className="text-[10px] text-slate-400 uppercase font-mono block">GPU Priority</span>
                          <span className="text-sm font-black font-mono text-cyan-300">Level 1 (Exclusive)</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80">
                          <span className="text-[10px] text-slate-400 uppercase font-mono block">Background I/O</span>
                          <span className="text-sm font-black font-mono text-emerald-400">0 KB/s (Suspended)</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* HUD Bottom Status */}
                <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>DirectStorage v1.2</span>
                  <span className="text-cyan-400 font-bold">XPlay Console OS Engine</span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-bold uppercase tracking-wider">
                  <span>Widget 0{activeGameBarTab + 1}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight font-round-bold">
                  {gameBarTabs[activeGameBarTab].title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {gameBarTabs[activeGameBarTab].desc}
                </p>

                {/* Live Gauges for Active Tab */}
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                    <span className="text-sm font-black font-mono text-emerald-600 block">
                      {gameBarTabs[activeGameBarTab].stat1}
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase">
                      {gameBarTabs[activeGameBarTab].stat1Label}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                    <span className="text-sm font-black font-mono text-sky-600 block">
                      {gameBarTabs[activeGameBarTab].stat2}
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase">
                      {gameBarTabs[activeGameBarTab].stat2Label}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                    <span className="text-sm font-black font-mono text-slate-800 block">
                      {gameBarTabs[activeGameBarTab].stat3}
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase">
                      {gameBarTabs[activeGameBarTab].stat3Label}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-mono text-slate-400 block">
                    Keyboard Shortcut: Press <kbd className="bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-slate-700 font-mono font-bold">Shift + F2</kbd> or Gamepad Guide button anytime
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
          
          <div className="lg:col-span-5 space-y-6 text-left reveal-header">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-[0.25em] block">
              Multi-Device Ecosystem
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 font-round-bold uppercase leading-tight">
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
                onClick={triggerConfettiAndPreOrder}
                className="bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-300 hover:to-cyan-300 active:scale-95 text-slate-950 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer shadow-lg shadow-sky-500/20 inline-flex items-center gap-2"
              >
                <span>Pre-Order Now — ₹6,999</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)] bg-white p-3">
              <img
                src="/assets/play_your_way_devices_clean.png"
                alt="XPlay Console handheld, laptop and PC ecosystem"
                className="w-full h-auto rounded-2xl object-contain bg-gradient-to-b from-slate-50 to-white"
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
          
          <div className="max-w-2xl text-left space-y-3 reveal-header">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-[0.25em] block">
              Package Contents
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 font-round-bold uppercase">
              What's In The Box
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Complete ready-to-play package engineered for college campuses, hostels, and LAN setups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left stagger-grid">
            {inTheBoxItems.map((item, idx) => (
              <div 
                key={idx}
                className="stagger-card p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-sky-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all">
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
          
          <div className="text-center space-y-2 reveal-header">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-[0.25em] block">
              Hardware Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 font-round-bold uppercase">
              Technical Specifications
            </h2>
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              Precision engineering optimized for zero host drive footprint and unthrottled 60 FPS gaming.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200/90 bg-slate-50/60 overflow-hidden divide-y divide-slate-200/80 text-left text-sm shadow-sm">
            {specsList.map((spec, i) => (
              <div key={i} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white transition-colors">
                <span className="text-slate-500 font-medium">{spec.label}</span>
                <span className="text-slate-900 font-bold sm:text-right font-mono">{spec.val}</span>
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
          
          <div className="text-center space-y-2 reveal-header">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-[0.25em] block">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 font-round-bold uppercase">
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
                className="border border-slate-200/90 rounded-2xl bg-white hover:border-sky-300 hover:shadow-sm transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-bold text-base text-slate-900">
                    {faq.q}
                  </span>
                  <span className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-700 transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                    <Plus className="w-4 h-4" />
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
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-sky-50 via-white to-cyan-50 border border-sky-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-lg">
            <div>
              <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-widest block mb-1">
                LIMITED INTRODUCTORY BATCH
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-round-bold">
                Reserve Your Student Edition for ₹6,999
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Includes 250GB DirectStorage SSD + 1x AAA Digital Game Voucher
              </p>
            </div>
            <button
              onClick={triggerConfettiAndPreOrder}
              className="bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-300 hover:to-cyan-300 active:scale-95 text-slate-950 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer shadow-md shrink-0 inline-flex items-center gap-2"
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
