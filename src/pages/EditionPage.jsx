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
  ChevronRight,
  Package
} from 'lucide-react';
import SEO from '../components/SEO';
import { EDITIONS_DATA } from '../constants/editionsData';
import GamingFooter from '../sections/GamingFooter';

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
      q: 'Does it support integrated graphics (Intel Iris Xe / AMD Radeon)?',
      a: 'Yes! XPlay includes pre-configured low-overhead DirectStorage driver profiles specifically optimized for Intel Iris Xe, AMD Radeon 680M/780M, and entry-level GTX/RTX GPUs, locking smooth 60 FPS in competitive and AAA titles.'
    },
    {
      q: 'What is the warranty and pan-India shipping timeline?',
      a: 'All XPlay Console editions include a 1-Year Comprehensive Replacement Warranty. Orders ship via Express BlueDart/Delhivery air shipping with typical delivery in 2-4 business days across all Indian pin codes.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased selection:bg-[#00e5ff] selection:text-black overflow-x-hidden">
      <SEO
        title={`${edition.title} (${edition.capacityNum}) | XPlay Console`}
        description={edition.summary}
        keywords={`XPlay ${edition.title}, ${edition.storage}, portable gaming NVMe, PC console gaming, buy XPlay`}
      />

      {/* ============================================================== */}
      {/* 1. STICKY SUB-NAV & BUY BAR                                    */}
      {/* ============================================================== */}
      <div className="sticky top-16 left-0 w-full z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200 px-4 sm:px-8 py-3 flex items-center justify-between text-xs transition-all shadow-sm">
        <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar">
          <Link to="/" className="text-slate-500 hover:text-slate-900 font-bold transition-colors shrink-0">
            XPlay
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-sky-600 font-extrabold uppercase tracking-wider shrink-0">
            {edition.title}
          </span>
          
          <div className="hidden lg:flex items-center gap-5 ml-4 text-slate-600 font-semibold">
            <a href="#overview" className="hover:text-sky-600 transition-colors">Overview</a>
            <a href="#instant-library" className="hover:text-sky-600 transition-colors">Digital Library</a>
            <a href="#play-anywhere" className="hover:text-sky-600 transition-colors">Play Anywhere</a>
            <a href="#in-the-box" className="hover:text-sky-600 transition-colors">In The Box</a>
            <a href="#faq" className="hover:text-sky-600 transition-colors">FAQ</a>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right hidden sm:block">
            <span className="text-base font-black text-slate-900 font-mono leading-none block">
              {edition.price}
            </span>
            <span className="text-[10px] text-emerald-600 font-bold block">
              Launch: {edition.launchPrice}
            </span>
          </div>

          <button
            onClick={() => onOpenPreOrder?.(edition.id)}
            className="px-4 sm:px-6 py-2 rounded-[2px] bg-[#00e5ff] hover:bg-[#00c8e6] text-slate-950 font-black uppercase tracking-wider text-xs shadow-md shadow-[#00e5ff]/20 transition-all cursor-pointer hover:scale-105 active:scale-95"
          >
            Pre-Order Now
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. CINEMATIC VIDEO HERO SECTION                                */}
      {/* ============================================================== */}
      <section 
        id="overview" 
        className="relative w-full min-h-[92vh] flex items-center overflow-hidden bg-black select-none"
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent lg:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 sm:px-12 md:px-16 pt-20 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[#00e5ff] text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#00e5ff]" />
              <span>{edition.tagline}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none font-round-bold drop-shadow-md">
              {edition.title}
            </h1>

            <p className="text-[#e5e7eb] text-base sm:text-lg font-normal max-w-xl leading-relaxed drop-shadow-sm">
              {edition.summary}
            </p>

            {/* Key Telemetry Badges */}
            <div className="grid grid-cols-3 gap-3 max-w-lg pt-2">
              <div className="p-3.5 rounded-xl bg-black/50 border border-white/15 backdrop-blur-sm text-left">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">Storage</div>
                <div className="text-xl font-black text-white font-mono mt-0.5">{edition.capacityNum}</div>
              </div>
              <div className="p-3.5 rounded-xl bg-black/50 border border-white/15 backdrop-blur-sm text-left">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">Speed</div>
                <div className="text-xl font-black text-[#00e5ff] font-mono mt-0.5">1,050 MB/s</div>
              </div>
              <div className="p-3.5 rounded-xl bg-black/50 border border-white/15 backdrop-blur-sm text-left">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">Isolation</div>
                <div className="text-xl font-black text-emerald-400 font-mono mt-0.5">SAN Policy 4</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenPreOrder?.(edition.id)}
                className="group bg-[#00e5ff] hover:bg-[#00c8e6] active:scale-95 text-slate-950 font-black text-xs uppercase tracking-wider px-8 py-4 rounded-[2px] transition-all duration-200 cursor-pointer shadow-lg shadow-[#00e5ff]/30 inline-flex items-center gap-2 hover:shadow-xl hover:shadow-[#00e5ff]/50"
              >
                <span>PRE-ORDER NOW — {edition.launchPrice}</span>
                <ChevronRight className="w-4 h-4 stroke-[3] group-hover:translate-x-1 transition-transform text-slate-950" />
              </button>

              <span className="text-xs text-[#00e5ff] font-mono font-bold px-3 py-1 rounded bg-black/40 border border-[#00e5ff]/30 backdrop-blur-sm">
                Save ₹1,000 Today (MSRP {edition.price})
              </span>
            </div>

            <p className="text-xs text-[#9ca3af] leading-relaxed pt-1">
              Requires Windows 10/11 version 22H2 or higher. 1-Year Comprehensive Replacement Warranty included.
            </p>
          </div>

          {/* Right Column: Commercial Hardware & Packaging Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] max-w-lg rounded-3xl p-5 bg-white border border-slate-200 shadow-2xl flex flex-col justify-between overflow-hidden group">
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-[#00e5ff] text-[11px] font-bold uppercase tracking-widest font-mono shadow-md">
                  {edition.capacityNum} NVMe
                </span>
              </div>

              <div className="w-full flex-1 flex items-center justify-center relative overflow-hidden rounded-2xl bg-white">
                <img
                  src={`/editions/xplay_${edition.id}_edition.jpg`}
                  alt={`${edition.title} Commercial Hardware & Packaging`}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = '/brand/01_product_drive.jpg';
                  }}
                />
              </div>

              <div className="pt-3 px-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-sans">
                <span className="font-semibold">{edition.chassis}</span>
                <span className="text-sky-600 font-mono font-bold">1,050 MB/s DirectStorage</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. SECTION 2: ELEVATE YOUR PC GAMING EXPERIENCE WITH XPLAY     */}
      {/* ============================================================== */}
      <section id="instant-library" className="w-full bg-white text-center select-none pt-24 pb-0 border-b border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-6 mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-900 font-round-bold leading-tight">
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

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {edition.title} unlocks immediate access to high-quality games and more. Install and play new games on day one and enjoy in-game benefits for the biggest games. Own the games you love with permanent licenses on Steam, Epic, and Rockstar with zero host storage wear.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenPreOrder?.(edition.id)}
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
      {/* 4. SECTION 3: PLAY WITH XPLAY ANYWHERE (FULL BLEED)            */}
      {/* ============================================================== */}
      <section id="play-anywhere" className="w-full bg-[#f8fafc] text-center select-none pt-24 pb-16 border-b border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-6 mb-14">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 font-round-bold leading-tight">
            PLAY WITH XPLAY ANYWHERE
          </h2>
          <div className="w-16 h-1.5 bg-[#00e5ff] mx-auto mt-4 rounded-full" />
        </div>

        {/* 100% Full Bleed Edge-To-Edge Image */}
        <div className="w-full overflow-hidden bg-black shadow-lg">
          <img
            src="/assets/xbox_pc/play_anywhere.jpg"
            alt="Play with XPlay anywhere hardware ecosystem"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. WHAT'S IN THE BOX (PHYSICAL UNBOXING INVENTORY)             */}
      {/* ============================================================== */}
      <section id="in-the-box" className="py-24 px-6 sm:px-12 md:px-16 bg-white select-none border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-600 block">
              PHYSICAL UNBOXING
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 font-round-bold">
              What's In The Box
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Everything included inside the official {edition.title} retail box to start 60 FPS gaming in under 30 seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {edition.inTheBox.map((item, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200 flex items-start gap-4 hover:border-sky-400 hover:shadow-md transition-all text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0 mt-0.5">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">{item.name}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. 3-COLUMN FEATURE PILLARS                                    */}
      {/* ============================================================== */}
      <section className="w-full py-24 px-6 sm:px-12 md:px-16 bg-[#f8fafc] select-none border-b border-slate-200/80">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-round-bold uppercase leading-tight">
              Buy once, play anywhere
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Games that are XPlay Anywhere play on PC, laptop, and supported gaming handhelds—at no additional cost.
            </p>
            <a 
              href="#faq" 
              className="text-sky-600 hover:text-sky-700 hover:underline font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5"
            >
              <span>SHOP XPLAY ANYWHERE GAMES</span>
              <ChevronRight className="w-3.5 h-3.5 stroke-[3] text-sky-600" />
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-round-bold uppercase leading-tight">
              Stream hundreds of games
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Skip installing and stream most games with cloud gaming, including games you own. No high-end laptop GPU required.
            </p>
            <a 
              href="#faq" 
              className="text-sky-600 hover:text-sky-700 hover:underline font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5"
            >
              <span>EXPLORE DIRECTSTORAGE</span>
              <ChevronRight className="w-3.5 h-3.5 stroke-[3] text-sky-600" />
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-round-bold uppercase leading-tight">
              Progress goes with you
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Pick up where you left off across devices and bring all saves, add-ons, and achievements with you seamlessly.
            </p>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. FREQUENTLY ASKED QUESTIONS & RESERVATION BANNER             */}
      {/* ============================================================== */}
      <section id="faq" className="w-full py-24 px-6 sm:px-12 md:px-16 bg-white select-none border-b border-slate-200/80">
        <div className="max-w-[1200px] mx-auto space-y-12">
          
          <div className="text-left space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-900 font-round-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200 text-left">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                >
                  <span className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-sky-600 transition-colors flex items-center gap-3">
                    <ChevronRight className={`w-4 h-4 text-sky-600 transition-transform duration-200 ${openFaq === index ? 'rotate-90' : ''}`} />
                    <span>{faq.q}</span>
                  </span>
                </button>

                {openFaq === index && (
                  <div className="pt-4 pl-7 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Full Width Reservation Banner */}
          <div className="p-8 sm:p-12 rounded-2xl bg-[#f8fafc] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xl">
            <div>
              <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-widest block mb-1">
                LIMITED INTRODUCTORY BATCH
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-round-bold">
                Reserve {edition.title} for {edition.launchPrice}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Includes {edition.storage} + Dedicated Hardware Guarantee
              </p>
            </div>
            <button
              onClick={() => onOpenPreOrder?.(edition.id)}
              className="bg-slate-900 hover:bg-[#00e5ff] hover:text-slate-950 active:scale-95 text-white font-black text-xs uppercase tracking-wider px-8 py-4 rounded-[2px] transition-all cursor-pointer shadow-md shrink-0 inline-flex items-center gap-2"
            >
              <span>PRE-ORDER NOW</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. EDITION SWITCHER                                            */}
      {/* ============================================================== */}
      <section className="py-16 px-6 sm:px-12 md:px-16 bg-white select-none border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-xl font-black uppercase text-slate-900 font-round-bold">Explore Other Editions</h4>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">Compare features across Student, Standard, Pro, and Ultimate</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {Object.keys(EDITIONS_DATA).map((key) => {
              const ed = EDITIONS_DATA[key];
              const isCurrent = key === edition.id;
              const linkPath = key === 'student' ? '/consoles/student' : `/consoles/${key}`;
              return (
                <Link
                  key={key}
                  to={linkPath}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all ${
                    isCurrent
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                  }`}
                >
                  {ed.title} • {ed.launchPrice}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. OFFICIAL GAMING FOOTER                                      */}
      {/* ============================================================== */}
      <GamingFooter onOpenPreOrder={onOpenPreOrder} />

    </div>
  );
};

export default EditionPage;