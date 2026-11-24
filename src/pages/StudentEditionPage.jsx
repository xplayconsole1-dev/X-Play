import React, { useState } from 'react';
import { 
  ChevronRight, 
  HardDrive
} from 'lucide-react';
import SEO from '../components/SEO';
import GamingFooter from '../sections/GamingFooter';

const StudentEditionPage = ({ onOpenPreOrder }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'What XPlay games are available to play on PC?',
      a: 'Hundreds of premier titles are fully supported on XPlay on PC, including Forza Horizon 5, GTA V, Cyberpunk 2077, Counter-Strike 2, Hogwarts Legacy, and Call of Duty. Every Student Edition includes 1x genuine AAA game key registered permanently to your personal Steam, Epic, or Rockstar account.'
    },
    {
      q: 'What hardware specifications are supported?',
      a: 'XPlay Student Edition is engineered to run on virtually any everyday college laptop or desktop PC running Windows 10 or Windows 11 (version 22H2 or higher). It requires only a standard USB 3.0 or Type-C port, bypassing slow internal laptop storage through dedicated 1,050 MB/s NVMe DirectStorage pipeline.'
    },
    {
      q: 'How does XPlay DirectStorage protect my internal laptop drive?',
      a: 'XPlay operates under strict hardware SAN Policy 4 volume isolation. All game assets, shaders, save files, and updates are streamed directly from the high-speed external aluminum drive. Your internal OS and college assignments remain 100% read-safe with zero host drive wear.'
    },
    {
      q: 'How do I play XPlay on PC games on Windows?',
      a: 'Simply connect the XPlay 250GB console drive to your PC using the included braided USB 3.2 Gen 2 cable. Boot into XPlay mode or launch directly from desktop. All controller mappings, graphic presets, and performance configurations are pre-calibrated.'
    },
    {
      q: 'What is the 1-Year replacement warranty coverage?',
      a: 'Every XPlay Console comes with a 1-Year Comprehensive Replacement Warranty with free doorstep reverse pickup across India, plus dedicated 24/7 direct engineer support on WhatsApp for setup and game configuration assistance.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-[#f5f5f5] font-sans antialiased selection:bg-[#00e5ff] selection:text-black overflow-x-hidden">
      <SEO
        title="XPlay on PC | Student Edition (250GB DirectStorage Gaming Drive)"
        description="Transform any college laptop or budget PC into a 60 FPS gaming powerhouse. Includes 250GB fast SSD and 1x full AAA game key for ₹6,999."
        keywords="XPlay on PC, XPlay Student Edition, 250GB Gaming Drive, Budget PC Gaming, DirectStorage NVMe"
      />

      {/* ============================================================== */}
      {/* 1. HERO SECTION: EXACT 1:1 FULL SCREEN VIDEO HERO              */}
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
            poster="/assets/xbox_pc/hero_poster.jpg"
            className="w-full h-full object-cover object-center"
            src="https://cms-assets.xboxservices.com/assets/d8/2f/d82f2cf2-4d36-426e-ac14-9a89340d1fb3.mp4?n=2438801_Super-Hero-1084_1920x1080_02.mp4"
          />
          {/* Subtle dark gradient overlay to ensure crystal clear typography */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-transparent lg:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </div>

        {/* Content Container (Left-aligned, clean official layout) */}
        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 sm:px-12 md:px-16 pt-24 pb-20">
          <div className="max-w-2xl space-y-6 text-left">

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none font-round-bold drop-shadow-md">
              XPLAY ON PC
            </h1>

            {/* Subheading / Description */}
            <p className="text-[#e5e7eb] text-base sm:text-lg font-normal leading-relaxed drop-shadow-sm">
              Discover a world of unparalleled gaming adventures designed to elevate your gaming experience on PC. Whether you're playing on a high-end rig, budget-friendly laptop, or anything in between, and whether you prefer a mouse and keyboard or an XPlay controller, we've got you covered.
            </p>

            {/* Call To Action Button (Ice Blue with Chevron) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenPreOrder?.('student')}
                className="group bg-[#00e5ff] hover:bg-[#00c8e6] active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider px-8 py-4 rounded-[2px] transition-all duration-200 cursor-pointer shadow-lg shadow-[#00e5ff]/30 inline-flex items-center gap-2 hover:shadow-xl hover:shadow-[#00e5ff]/50"
              >
                <span>PRE-ORDER NOW — ₹6,999</span>
                <ChevronRight className="w-4 h-4 stroke-[3] group-hover:translate-x-1 transition-transform text-slate-950" />
              </button>

              <span className="text-xs text-[#00e5ff] font-mono font-bold px-3 py-1 rounded bg-black/40 border border-[#00e5ff]/30 backdrop-blur-sm">
                Student Edition: 250GB SSD Included (₹6,999)
              </span>
            </div>

            {/* Legal / Hardware Specs Copy */}
            <p className="text-xs text-[#9ca3af] leading-relaxed pt-2">
              Requires Windows 10/11 version 22H2 or higher.{' '}
              <a href="#specs" className="text-white underline hover:text-[#00e5ff] transition-colors">
                See system requirements.
              </a>
              <br className="hidden sm:inline" />
              {' '}Having trouble setting up or choosing edition?{' '}
              <a href="#faqs" className="text-white underline hover:text-[#00e5ff] transition-colors">
                Get help here.
              </a>
            </p>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. SECTION 2: ELEVATE YOUR PC GAMING EXPERIENCE WITH XPLAY     */}
      {/* ============================================================== */}
      <section className="w-full bg-[#111111] text-center select-none pt-24 pb-0">
        <div className="max-w-[1400px] mx-auto px-6 mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-round-bold leading-tight">
            Elevate your PC gaming <br />
            experience with XPLAY
          </h2>
        </div>

        {/* 100% Full Bleed Edge-To-Edge Image Banner */}
        <div className="relative w-full h-[580px] sm:h-[700px] flex items-end overflow-hidden bg-black">
          <img
            src="/assets/xbox_pc/library_poster.jpg"
            alt="XPlay Game Library"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent hidden sm:block w-3/4" />

          {/* Content Overlay */}
          <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 sm:px-12 md:px-16 pb-16 text-left">
            <div className="max-w-xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#00e5ff]">
                <HardDrive className="w-4 h-4 text-[#00e5ff]" />
                <span>XPLAY DIRECTSTORAGE VAULT</span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-black text-white font-round-bold leading-tight uppercase">
                Get an instant library on PC
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                XPlay unlocks immediate access to high-quality games and more. Install and play new games on day one and enjoy in-game benefits for the biggest games. Want to own the games you love? Enjoy permanent ownership on Steam, Epic, and Rockstar with zero host storage wear.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenPreOrder?.('student')}
                  className="bg-[#00e5ff] hover:bg-[#00c8e6] active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider px-8 py-3.5 rounded-[2px] transition-all cursor-pointer shadow-lg shadow-[#00e5ff]/30 inline-flex items-center gap-2"
                >
                  <span>EXPLORE GAMES</span>
                  <ChevronRight className="w-4 h-4 stroke-[3] text-slate-950" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ============================================================== */}
      {/* 3. SECTION 3: PLAY WITH XPLAY ANYWHERE (FULL BLEED)            */}
      {/* ============================================================== */}
      <section className="w-full bg-[#111111] text-center select-none pt-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 mb-14">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-round-bold leading-tight">
            PLAY WITH XPLAY ANYWHERE
          </h2>
          <div className="w-16 h-1 bg-[#00e5ff] mx-auto mt-4 rounded-full" />
        </div>

        {/* 100% Full Bleed Edge-To-Edge Image */}
        <div className="w-full overflow-hidden bg-black">
          <img
            src="/assets/xbox_pc/play_anywhere.jpg"
            alt="Play with XPlay anywhere hardware ecosystem"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. SECTION 4: 3-COLUMN FEATURE PILLARS                         */}
      {/* ============================================================== */}
      <section className="w-full py-24 px-6 sm:px-12 md:px-16 bg-[#111111] select-none border-t border-white/5">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-white font-round-bold uppercase leading-tight">
              Buy once, play anywhere
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Games that are XPlay Anywhere play on PC, laptop, and supported gaming handhelds—at no additional cost.
            </p>
            <a 
              href="#specs" 
              className="text-[#00e5ff] hover:underline font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5"
            >
              <span>SHOP XPLAY ANYWHERE GAMES</span>
              <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-white font-round-bold uppercase leading-tight">
              Stream hundreds of games
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Skip installing and stream most games with cloud gaming, including games you own. No high-end laptop GPU required.
            </p>
            <a 
              href="#specs" 
              className="text-[#00e5ff] hover:underline font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5"
            >
              <span>EXPLORE DIRECTSTORAGE</span>
              <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-white font-round-bold uppercase leading-tight">
              Progress goes with you
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Pick up where you left off across devices and bring all saves, add-ons, and achievements with you seamlessly.
            </p>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. SECTION 5: FREQUENTLY ASKED QUESTIONS                       */}
      {/* ============================================================== */}
      <section id="faqs" className="w-full py-24 px-6 sm:px-12 md:px-16 bg-[#111111] select-none border-t border-white/5">
        <div className="max-w-[1200px] mx-auto space-y-12">
          
          <div className="text-left space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-round-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10 text-left">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                >
                  <span className="font-bold text-base sm:text-lg text-white group-hover:text-[#00e5ff] transition-colors flex items-center gap-3">
                    <ChevronRight className={`w-4 h-4 text-[#00e5ff] transition-transform duration-200 ${openFaq === index ? 'rotate-90' : ''}`} />
                    <span>{faq.q}</span>
                  </span>
                </button>

                {openFaq === index && (
                  <div className="pt-4 pl-7 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Full Width Reservation Banner */}
          <div className="p-8 sm:p-12 rounded-xl bg-black border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl">
            <div>
              <span className="text-xs font-mono font-bold text-[#00e5ff] uppercase tracking-widest block mb-1">
                LIMITED INTRODUCTORY BATCH
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-round-bold">
                Reserve Your Student Edition for ₹6,999
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Includes 250GB DirectStorage SSD + 1x AAA Digital Game Voucher
              </p>
            </div>
            <button
              onClick={() => onOpenPreOrder?.('student')}
              className="bg-[#00e5ff] hover:bg-[#00c8e6] active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider px-8 py-4 rounded-[2px] transition-all cursor-pointer shadow-lg shadow-[#00e5ff]/30 shrink-0 inline-flex items-center gap-2"
            >
              <span>PRE-ORDER NOW</span>
              <ChevronRight className="w-4 h-4 stroke-[3] text-slate-950" />
            </button>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. OFFICIAL XPLAY GAMING FOOTER                                */}
      {/* ============================================================== */}
      <GamingFooter onOpenPreOrder={onOpenPreOrder} />

    </div>
  );
};

export default StudentEditionPage;
