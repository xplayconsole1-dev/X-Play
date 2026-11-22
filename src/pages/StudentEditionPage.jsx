import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Sliders,
  Volume2,
  Camera,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
  Plus,
  Minus
} from 'lucide-react';
import SEO from '../components/SEO';

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
      title: 'Balance system resources to maximise performance.',
      desc: 'Tap Win+Alt+B to turn the system HDR on or off and for supported PC games, adjust Auto-HDR and intensity.'
    },
    {
      id: 'audio',
      name: 'Audio',
      icon: <Volume2 className="w-4 h-4" />,
      image: 'https://cms-assets.xboxservices.com/assets/c8/47/c84729a6-106a-4d3d-b5dd-036858cea164.jpg?n=2438801_Hero-multi-feature-0_Audio_767x431.jpg',
      title: 'Set volumes for your PC, microphone, game and music.',
      desc: 'Set volumes for your PC, microphone, game and music without leaving your game.'
    },
    {
      id: 'capture',
      name: 'Capture',
      icon: <Camera className="w-4 h-4" />,
      image: 'https://cms-assets.xboxservices.com/assets/30/f1/30f1e1e9-3d4b-4f2d-a774-2beb60b07c71.jpg?n=2438801_Hero-multi-feature-0_Capture_767x431.jpg',
      title: 'Instantly take screenshots and video captures.',
      desc: 'Instantly take screenshots and video captures to share your achievements with friends.'
    },
    {
      id: 'widgets',
      name: 'Widgets',
      icon: <LayoutGrid className="w-4 h-4" />,
      image: 'https://cms-assets.xboxservices.com/assets/3a/10/3a10b744-c6f1-47f4-a124-712647130d5c.jpg?n=2438801_Hero-multi-feature-0_widgets_767x431.jpg',
      title: 'Personalise, select, hide, or move widgets.',
      desc: 'Play tunes with Spotify, get game overlays and add more options from the Widget Store.'
    }
  ];

  const faqs = [
    {
      q: 'What XBOX games are available to play on PC?',
      a: 'The XBOX PC app has thousands of games to discover and play on your PC, including hundreds of titles available with XBOX Game Pass. Check out the XBOX on PC library here and the Game Pass library here. For XPlay Student Edition users, your package includes 1x full AAA digital game key permanently redeemable into your personal Steam/Epic account.'
    },
    {
      q: 'What XBOX games are supported to play on PC?',
      a: 'All natively supported PC games, and all XBOX Play Anywhere titles, which allow you to bring your favourites across XBOX console and XBOX on PC while keeping your in-game progress. You can play these games on PC with your friends across all supported devices.'
    },
    {
      q: 'How do I play XBOX on PC games on Windows?',
      a: 'Download or open the XBOX PC app to install and play the latest games, access the Game Pass library and leverage your in-game benefits for some of the best games, including free-to-play titles. Plug in the XPlay Student Edition 250GB drive for direct 60 FPS play with zero host drive wear.'
    },
    {
      q: 'How do I know if the XBOX PC app is already installed on my computer?',
      a: 'The XBOX PC app is pre-installed on most Windows 11 PCs. You can check if the XBOX PC app is pre-installed by searching for "Xbox" in your Windows toolbar, or by opening your Windows Start button and searching for "Xbox."'
    },
    {
      q: 'Can I cross-play on PC with other platforms outside of XBOX?',
      a: 'Yes. If the game supports cross-play, you can play your favourite XBOX games with your friends, regardless of where they play.'
    },
    {
      q: 'What type of computer do I need to play XBOX on PC games?',
      a: 'A Windows PC running Windows 10/11 with version 22H2, or higher installed. You’ll also want at least 150MB of storage for the XBOX PC app (plus additional space for games) and a display resolution of 720p or higher. System requirements may vary by game and performance scales with higher-end systems. If your PC is in Windows S mode, you’ll need to switch out of it to play games via the XBOX PC app.'
    },
    {
      q: 'Where do I get additional Windows PC gaming assistance?',
      a: 'Visit the PC Gaming support hub for help, troubleshooting, and hardware setup.'
    },
    {
      q: 'What is the best XBOX controller for PC games?',
      a: 'We are biased and we think the XBOX Wireless Controller and XBOX Elite Wireless Controller Series 2 are the best for XBOX on PC gaming. You can also use any one of our Designed for XBOX partner controllers.'
    },
    {
      q: 'Can I stream cloud gaming on a Mac?',
      a: 'Yes, open Safari or your favourite browser and go to Xbox.com/play to get started.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5] font-sans antialiased selection:bg-[#107c10] selection:text-white">
      <SEO
        title="XBOX on PC | Elevate your PC gaming experience with XBOX"
        description="Discover a world of unparalleled gaming adventures designed to elevate your gaming experience on PC with XBOX and XPlay Student Edition."
        keywords="Xbox on PC, Xbox PC gaming, PC Game Pass, Xbox Game Bar, XPlay Student Edition"
      />

      {/* ============================================================== */}
      {/* 1. OFFICIAL MICROSOFT UHF GLOBAL HEADER (EXACT 1:1)            */}
      {/* ============================================================== */}
      <header className="w-full bg-[#111111] text-white z-50 relative select-none border-b border-[#222]">

        {/* Row 1: Universal Microsoft Header */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 h-12 flex items-center justify-between text-xs border-b border-[#222]">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 hover:opacity-85 transition-opacity">
              {/* Microsoft Official SVG */}
              <svg className="w-24 h-5" viewBox="0 0 108 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="1" width="10" height="10" fill="#F25022" />
                <rect x="12" y="1" width="10" height="10" fill="#7FBA00" />
                <rect x="0" y="13" width="10" height="10" fill="#00A4EF" />
                <rect x="12" y="13" width="10" height="10" fill="#FFB900" />
                <text x="28" y="17" fill="#ffffff" fontFamily="Segoe UI, -apple-system, sans-serif" fontSize="15" fontWeight="600">Microsoft</text>
              </svg>
            </Link>
            <span className="text-[#444]">|</span>
            <div className="flex items-center gap-2 text-white">
              {/* Xbox Green Sphere Logo */}
              <svg className="w-5 h-5 text-[#107c10] fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.898 4.295c1.233-.008 2.502.196 3.693.633 1.094.401 1.777.94 1.777.94s-1.854 2.213-3.666 4.367c-1.353-1.608-2.618-3.111-3.626-4.307 0 0 .626-.541 1.822-.633zm-4.707 2.47c1.323 1.494 3.037 3.435 4.631 5.242-2.176 2.586-4.524 5.383-6.289 7.481C2.109 17.273 1.08 14.773 1.08 12c0-2.025.568-3.921 1.628-5.545.687.273 1.34.453 1.907.31zm17.21 0c1.06 1.624 1.628 3.52 1.628 5.545 0 2.773-1.029 5.273-2.657 7.488-1.765-2.098-4.113-4.895-6.289-7.481 1.594-1.807 3.308-3.748 4.631-5.242.567.14 1.22-.04 1.907-.31-.02-.002.049.004-.22.002zM12 13.916c2.053 2.44 4.35 5.176 5.895 7.009-1.774 1.32-3.968 2.075-6.395 2.075s-4.621-.755-6.395-2.075c1.545-1.833 3.842-4.569 5.895-7.009z" />
              </svg>
              <span className="font-bold tracking-wider text-xs uppercase">XBOX</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[#ccc] text-xs">
            <Link to="/" className="hover:text-white transition-colors">XPlay Home</Link>
            <Link to="/consoles" className="hover:text-white transition-colors">All Consoles</Link>
            <span className="hover:text-white transition-colors cursor-pointer hidden md:inline">Game Pass</span>
            <span className="hover:text-white transition-colors cursor-pointer hidden md:inline">Games</span>
            <span className="hover:text-white transition-colors cursor-pointer hidden md:inline">Devices</span>
            <span className="hover:text-white transition-colors cursor-pointer hidden md:inline">Support</span>
          </div>
        </div>

        {/* Row 2: Exact Xbox on PC Page Sub-Header */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="font-black text-sm tracking-widest text-white uppercase flex items-center gap-2">
              <span>XBOX ON PC</span>
              <span className="text-[10px] font-mono font-bold bg-[#107c10] text-white px-2 py-0.5 rounded-[2px]">
                STUDENT
              </span>
            </span>

            <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-[#ccc]">
              <a href="#hero" className="hover:text-[#9bf00b] transition-colors">Overview</a>
              <a href="#better-together" className="hover:text-[#9bf00b] transition-colors">Game Pass</a>
              <a href="#xbox-mode" className="hover:text-[#9bf00b] transition-colors">XBOX Mode</a>
              <a href="#made-for-pc" className="hover:text-[#9bf00b] transition-colors">Made for PC</a>
              <a href="#game-bar" className="hover:text-[#9bf00b] transition-colors">Game Bar</a>
              <a href="#handheld" className="hover:text-[#9bf00b] transition-colors">Hardware</a>
              <a href="#faq" className="hover:text-[#9bf00b] transition-colors">FAQ</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <span className="text-sm font-black font-mono text-white">₹6,999</span>
              <span className="text-[10px] text-emerald-400 font-bold block leading-none">Launch Offer</span>
            </div>
            <button
              onClick={() => onOpenPreOrder?.('student')}
              className="bg-[#107c10] hover:bg-[#0e6b0e] active:scale-95 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-[2px] transition-all cursor-pointer shadow-md"
            >
              GET THE APP
            </button>
          </div>
        </div>

      </header>

      {/* ============================================================== */}
      {/* 2. SECTION 1: EXACT 1:1 HERO ITEM (#backtotop)                */}
      {/* ============================================================== */}
      <section 
        id="backtotop" 
        className="relative w-full min-h-[88vh] flex items-center overflow-hidden bg-black border-b border-[#222]"
      >
        {/* Full-bleed Ambient Video Background (Exact URL from Xbox on PC) */}
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
          {/* Subtle dark gradient overlay to ensure text readability exactly as on xbox.com */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent lg:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>

        {/* Content Container (f-x-left f-y-center) */}
        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 sm:px-12 md:px-16 py-20">
          <div className="max-w-2xl space-y-6 text-left">
            
            {/* H1 Heading (Exact class c-heading-1a from Xbox) */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
              XBOX ON PC
            </h1>

            {/* Subheading / Description (Exact copy from Xbox on PC) */}
            <p className="text-[#e5e7eb] text-base sm:text-lg font-normal leading-relaxed">
              Discover a world of unparalleled gaming adventures designed to elevate your gaming experience on PC. Whether you're playing on a high-end rig, budget-friendly laptop, or anything in between, and whether you prefer a mouse and keyboard or an XBOX controller, we've got you covered.
            </p>

            {/* Call To Action Button (Exact c-call-to-action from Xbox) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenPreOrder?.('student')}
                className="bg-[#107c10] hover:bg-[#0e6b0e] active:scale-95 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-[2px] transition-all cursor-pointer shadow-lg shadow-[#107c10]/40 inline-flex items-center gap-2"
              >
                <span>GET THE APP</span>
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </button>

              <span className="text-xs text-[#9bf00b] font-mono font-bold">
                Student Edition: 250GB SSD Included (₹6,999)
              </span>
            </div>

            {/* Legal Copy (Exact copy and links from Xbox on PC) */}
            <p className="text-xs text-[#9ca3af] leading-relaxed pt-2">
              Requires Windows 10/11, version 22H2 or higher.{' '}
              <a href="#made-for-pc" className="text-white underline hover:text-[#9bf00b] transition-colors">
                See system requirements.
              </a>
              <br className="hidden sm:inline" />
              {' '}Having trouble installing the update or app?{' '}
              <a href="https://support.xbox.com" target="_blank" rel="noreferrer" className="text-white underline hover:text-[#9bf00b] transition-colors">
                Get help here.
              </a>
            </p>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. SECTION 2: GET AN INSTANT LIBRARY ON PC (#better-together)  */}
      {/* ============================================================== */}
      <section 
        id="better-together" 
        className="py-24 px-6 sm:px-12 bg-[#0c101a] border-b border-[#222] relative"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 space-y-6 text-left">
            <img
              src="https://cms-assets.xboxservices.com/assets/36/e9/36e956dc-8d8a-41d2-95be-5d347e87972b.svg?n=XGP-Logo_Image-0_350x_01.svg"
              alt="XBOX Game Pass logo"
              className="h-10 w-auto object-contain"
            />

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Get an instant library on PC
            </h2>

            <p className="text-[#d1d5db] text-base leading-relaxed">
              XBOX Game Pass unlocks immediate access to hundreds of high-quality games and more. Install and play new games on day one and enjoy in-game benefits for the biggest games. Want to own the games you love? Enjoy discounts up to 20%.
            </p>

            <p className="text-sm text-[#9ca3af] leading-relaxed">
              Included with XPlay Student Edition: <strong className="text-white">1x AAA Digital Game License</strong> permanently registered to your personal Steam, Epic Games, or Rockstar account with cloud saves and online multiplayer.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenPreOrder?.('student')}
                className="bg-[#107c10] hover:bg-[#0e6b0e] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-[2px] transition-all cursor-pointer shadow-md"
              >
                EXPLORE GAME PASS
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
                <div key={idx} className="rounded-lg overflow-hidden aspect-[2/3] bg-slate-800 border border-[#222] hover:border-[#9bf00b] transition-all hover:scale-105 duration-300 shadow-md">
                  <img src={g.img} alt={g.title} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. SECTION 3: XBOX MODE ON, WORK MODE OFF (f-x-right)           */}
      {/* ============================================================== */}
      <section id="xbox-mode" className="py-24 px-6 sm:px-12 bg-[#050505] border-b border-[#222]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Official Image from Xbox on PC */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden border border-[#222] shadow-2xl bg-black">
              <img
                src="https://cms-assets.xboxservices.com/assets/b0/a4/b0a49731-d54c-45fd-8585-4057f8f28358.png?n=Xbox-On-PC_Xbox-Mode_Hero-0_767x431_01.png"
                alt="A PC monitor displaying the XBOX Mode UI with an XBOX Elite Wireless Controller, keyboard and mouse beside it"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Text Block (f-x-right) */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2 text-left">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              XBOX mode on,work mode off
            </h2>

            <p className="text-[#d1d5db] text-base leading-relaxed">
              Get an XBOX console-inspired, controller-optimised, dedicated gaming experience on your Windows 11 PC and handheld. Seamlessly switch between XBOX mode and the desktop and play across devices with your achievements, game progress and purchases. Plus, bring all your games together from most PC storefronts.
            </p>

            <div>
              <button
                onClick={() => onOpenPreOrder?.('student')}
                className="bg-[#107c10] hover:bg-[#0e6b0e] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-[2px] transition-all cursor-pointer"
              >
                LEARN MORE
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. SECTION 4: MADE FOR PC                                      */}
      {/* ============================================================== */}
      <section id="made-for-pc" className="py-24 px-6 sm:px-12 bg-[#0c101a] border-b border-[#222]">
        <div className="max-w-[1400px] mx-auto space-y-12">

          <div className="max-w-3xl text-left space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              MADE FOR PC
            </h2>
            <p className="text-[#d1d5db] text-base leading-relaxed">
              The XBOX PC app is the best way to play, connect, and shop with XBOX on PC—all designed for PC players to enhance your gaming experience with XBOX.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* 5 Numbered Feature Bullets */}
            <div className="lg:col-span-6 space-y-4">
              {[
                'Quickly access your XBOX profile and manage your XBOX Game Pass subscription.',
                'Continue your game progress from another device with cloud saves.',
                'Discover and shop the latest games and add-ons in the Store.',
                'Connect with friends across XBOX console, mobile and XBOX on PC and dive into group gaming experiences.',
                'Easily connect your accessories, including XBOX controller, mouse and keyboard and headset.'
              ].map((text, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#141a29] border border-[#222] flex items-start gap-3.5 hover:border-[#107c10] transition-colors">
                  <div className="w-7 h-7 rounded-full bg-[#107c10]/20 flex items-center justify-center text-[#9bf00b] shrink-0 font-mono font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <p className="text-sm text-[#e5e7eb] font-sans leading-relaxed pt-0.5">{text}</p>
                </div>
              ))}
            </div>

            {/* Official Made for PC Image */}
            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden border border-[#222] shadow-2xl">
                <img
                  src="https://cms-assets.xboxservices.com/assets/ac/f4/acf448fa-6645-4495-824f-6985af1f7c1a.jpg?n=2438801_Image-0_Made-for-PC_767x536_02.jpg"
                  alt="A straight on view of a gaming PC complete with monitor, microphone, XBOX wireless controller, keyboard, mouse and headset"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. SECTION 5: MAXIMIZE PC GAMEPLAY WITH GAME BAR               */}
      {/* ============================================================== */}
      <section id="game-bar" className="py-24 px-6 sm:px-12 bg-[#050505] border-b border-[#222]">
        <div className="max-w-[1400px] mx-auto space-y-12">

          <div className="max-w-3xl text-left space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Maximize PC gameplay with Game Bar
            </h2>
            <p className="text-[#d1d5db] text-base leading-relaxed">
              Press Win+G or your XBOX controller guide button to open the Game Bar overlay. Instantly access widgets to find new teammates with LFG, monitor applications and chat with friends across XBOX console, XBOX on PC and mobile—all without leaving your game.
            </p>
          </div>

          {/* Interactive 4 Tabs from Xbox on PC */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 sm:gap-4 border-b border-[#222] pb-2 overflow-x-auto no-scrollbar">
              {gameBarTabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveGameBarTab(idx)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-[2px] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shrink-0 ${activeGameBarTab === idx
                      ? 'bg-[#107c10] text-white shadow-md'
                      : 'bg-[#141a29] hover:bg-[#1a2336] text-[#ccc]'
                    }`}
                >
                  {tab.icon}
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            {/* Active Tab Preview Stage */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-lg bg-[#0e1320] border border-[#222] p-6 sm:p-8">
              <div className="lg:col-span-8 rounded-lg overflow-hidden border border-[#222] shadow-2xl">
                <img
                  src={gameBarTabs[activeGameBarTab].image}
                  alt={gameBarTabs[activeGameBarTab].name}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="lg:col-span-4 space-y-4 text-left">
                <span className="text-xs font-mono font-bold text-[#9bf00b] uppercase">
                  WIDGET 0{activeGameBarTab + 1}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {gameBarTabs[activeGameBarTab].title}
                </h3>
                <p className="text-sm text-[#d1d5db] leading-relaxed">
                  {gameBarTabs[activeGameBarTab].desc}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. SECTION 6: ROG XBOX ALLY X & ROG XBOX ALLY                  */}
      {/* ============================================================== */}
      <section id="handheld" className="py-24 px-6 sm:px-12 bg-[#0c101a] border-b border-[#222]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              ROG XBOX Ally X & ROG XBOX Ally
            </h2>

            <p className="text-[#d1d5db] text-base leading-relaxed">
              Experience seamless PC gaming on the go with the best of ROG and XBOX together in a gaming handheld. Plug in your XPlay Student Drive to access your pre-configured games anywhere without redownloading.
            </p>

            <div>
              <button
                onClick={() => onOpenPreOrder?.('student')}
                className="bg-[#107c10] hover:bg-[#0e6b0e] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-[2px] transition-all cursor-pointer"
              >
                MEET ROG XBOX ALLY
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-lg overflow-hidden border border-[#222] shadow-2xl">
              <img
                src="https://cms-assets.xboxservices.com/assets/70/24/70249dcb-482f-423b-823a-58caf066f4ee.jpg?n=Xbox-on-Handhelds_Page-Hero-0_UI-Update_1920x1080_02.jpg"
                alt="Image of the boot up sequence on the ROG XBOX Ally X with South of Midnight characters in the background"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. SECTION 7: PLAY WITH XBOX ANYWHERE                          */}
      {/* ============================================================== */}
      <section className="py-24 px-6 sm:px-12 bg-[#050505] border-b border-[#222]">
        <div className="max-w-[1400px] mx-auto space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              PLAY WITH XBOX ANYWHERE
            </h2>
          </div>

          <div className="rounded-lg overflow-hidden border border-[#222] shadow-2xl mb-12">
            <img
              src="https://cms-assets.xboxservices.com/assets/f9/ca/f9caa507-88bd-4905-962e-17f295713522.jpg?n=Xbox-on-PC_Image-1084_XPA-ROG_767x431.jpg"
              alt="A handheld gaming device, laptop, XBOX Series S, XBOX Series X, XBOX wireless controllers and a gaming PC"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

            <div className="p-6 rounded-lg bg-[#0e1320] border border-[#222] space-y-3">
              <h3 className="text-xl font-bold text-white">Buy once, play anywhere</h3>
              <p className="text-sm text-[#d1d5db] leading-relaxed">
                Games that are XBOX Play Anywhere play on PC, XBOX console and supported gaming handhelds—at no additional cost.
              </p>
              <a href="https://www.xbox.com/games/browse?PlayWith=XboxPlayAnywhere" target="_blank" rel="noreferrer" className="inline-block text-[#9bf00b] hover:underline font-bold text-xs uppercase tracking-wider">
                SHOP XBOX PLAY ANYWHERE GAMES &gt;
              </a>
            </div>

            <div className="p-6 rounded-lg bg-[#0e1320] border border-[#222] space-y-3">
              <h3 className="text-xl font-bold text-white">Stream hundreds of games</h3>
              <p className="text-sm text-[#d1d5db] leading-relaxed">
                Skip installing and stream most games with cloud gaming, including games you own (XBOX Game Pass subscription required to stream some cloud playable games).
              </p>
              <a href="https://www.xbox.com/cloud-gaming" target="_blank" rel="noreferrer" className="inline-block text-[#9bf00b] hover:underline font-bold text-xs uppercase tracking-wider">
                EXPLORE CLOUD GAMING &gt;
              </a>
            </div>

            <div className="p-6 rounded-lg bg-[#0e1320] border border-[#222] space-y-3">
              <h3 className="text-xl font-bold text-white">Progress goes with you</h3>
              <p className="text-sm text-[#d1d5db] leading-relaxed">
                Pick up where you left off across devices and bring all saves, add-ons and achievements with you.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. SECTION 8: FREQUENTLY ASKED QUESTIONS (EXACT ACCORDION)     */}
      {/* ============================================================== */}
      <section id="faq" className="py-24 px-6 sm:px-12 bg-[#0c101a] border-b border-[#222]">
        <div className="max-w-4xl mx-auto space-y-8">

          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg bg-[#070a10] border border-[#222] overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-[#9bf00b] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-[#107c10] shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#107c10] shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-[#d1d5db] leading-relaxed border-t border-[#181818] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 10. OFFICIAL MICROSOFT & XBOX FOOTER                           */}
      {/* ============================================================== */}
      <footer className="w-full bg-[#050505] text-[#888] text-xs py-14 px-6 sm:px-12 border-t border-[#222] select-none">
        <div className="max-w-[1400px] mx-auto space-y-10">

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            <div>
              <h5 className="font-bold text-white uppercase tracking-wider mb-3">Browse</h5>
              <ul className="space-y-2 text-[#888]">
                <li><a href="#hero" className="hover:text-white transition-colors">Xbox on PC</a></li>
                <li><a href="#better-together" className="hover:text-white transition-colors">PC Game Pass</a></li>
                <li><a href="#game-bar" className="hover:text-white transition-colors">Xbox Game Bar</a></li>
                <li><a href="#handheld" className="hover:text-white transition-colors">Handheld PC</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-white uppercase tracking-wider mb-3">Hardware</h5>
              <ul className="space-y-2 text-[#888]">
                <li><span className="text-white">Student Edition (250GB)</span></li>
                <li><Link to="/consoles" className="hover:text-white transition-colors">Standard Edition (500GB)</Link></li>
                <li><Link to="/consoles" className="hover:text-white transition-colors">Pro Edition (500GB)</Link></li>
                <li><Link to="/consoles" className="hover:text-white transition-colors">Ultimate Edition (1TB)</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-white uppercase tracking-wider mb-3">Microsoft Store</h5>
              <ul className="space-y-2 text-[#888]">
                <li><span className="hover:text-white transition-colors">Account profile</span></li>
                <li><span className="hover:text-white transition-colors">Download Center</span></li>
                <li><span className="hover:text-white transition-colors">Order tracking</span></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-white uppercase tracking-wider mb-3">Education</h5>
              <ul className="space-y-2 text-[#888]">
                <li><span className="hover:text-white transition-colors">Microsoft in education</span></li>
                <li><span className="hover:text-white transition-colors">Devices for education</span></li>
                <li><span className="hover:text-white transition-colors">Student discounts</span></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-white uppercase tracking-wider mb-3">Developer</h5>
              <ul className="space-y-2 text-[#888]">
                <li><span className="hover:text-white transition-colors">Microsoft Visual Studio</span></li>
                <li><span className="hover:text-white transition-colors">Windows App SDK</span></li>
                <li><span className="hover:text-white transition-colors">DirectX 12 Agility</span></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-white uppercase tracking-wider mb-3">Company</h5>
              <ul className="space-y-2 text-[#888]">
                <li><span className="hover:text-white transition-colors">Careers</span></li>
                <li><span className="hover:text-white transition-colors">About Microsoft</span></li>
                <li><span className="hover:text-white transition-colors">Privacy at Microsoft</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#181818] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#666]">
            <div className="flex items-center gap-4">
              <span>English (India)</span>
              <span>Your Privacy Choices</span>
              <span>Consumer Health Privacy</span>
            </div>
            <div>
              <span>© Microsoft 2026. XPlay Hardware Architecture. All rights reserved.</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default StudentEditionPage;
