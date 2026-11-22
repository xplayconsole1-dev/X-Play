import React, { useState } from 'react';
import { Search, Zap, Play, ArrowRight, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

const GamesPage = ({ onOpenPreOrder }) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Next-Gen AAA', 'Esports & Competitive', 'Action RPG', 'Open World', 'Sports & Racing'];

  const games = [
    {
      id: 'gta6',
      title: 'Grand Theft Auto VI',
      studio: 'Rockstar Games',
      category: 'Next-Gen AAA',
      fps: 'DirectStorage Architecture',
      image: '/images/hero-bg.webp',
      badge: 'UPCOMING 2026',
      platform: 'Rockstar Games',
    },
    {
      id: 'gtav',
      title: 'Grand Theft Auto V',
      studio: 'Rockstar Games',
      category: 'Open World',
      fps: '60 FPS DirectStorage',
      image: '/assets/games/gtav_official.jpg',
      badge: 'VERIFIED 60 FPS',
      platform: 'Steam / Rockstar',
    },
    {
      id: 'cp2077',
      title: 'Cyberpunk 2077: Phantom Liberty',
      studio: 'CD PROJEKT RED',
      category: 'Action RPG',
      fps: '60 FPS Ray-Tracing',
      image: '/assets/games/cyberpunk_official.jpg',
      badge: 'VERIFIED 60 FPS',
      platform: 'Steam / Epic',
    },
    {
      id: 'fc25',
      title: 'EA SPORTS FC 25',
      studio: 'Electronic Arts',
      category: 'Sports & Racing',
      fps: '120 FPS High Refresh',
      image: '/assets/games/fc25_official.jpg',
      badge: 'TOURNAMENT READY',
      platform: 'EA App / Steam',
    },
    {
      id: 'rdr2',
      title: 'Red Dead Redemption 2',
      studio: 'Rockstar Games',
      category: 'Open World',
      fps: '60 FPS Ultra Preset',
      image: '/assets/games/rdr2_official.jpg',
      badge: 'VERIFIED 60 FPS',
      platform: 'Steam / Epic',
    },
    {
      id: 'spiderman',
      title: "Marvel's Spider-Man Remastered",
      studio: 'PlayStation PC LLC',
      category: 'Action RPG',
      fps: '60 FPS DirectStorage',
      image: '/assets/games/spiderman_cover.jpg',
      badge: 'VERIFIED 60 FPS',
      platform: 'Steam',
    },
    {
      id: 'gow',
      title: 'God of War Ragnarök',
      studio: 'Santa Monica Studio',
      category: 'Next-Gen AAA',
      fps: '60 FPS High Detail',
      image: '/assets/games/gow_hero.jpg',
      badge: 'VERIFIED 60 FPS',
      platform: 'Steam / Epic',
    },
    {
      id: 'cs2',
      title: 'Counter-Strike 2',
      studio: 'Valve Corporation',
      category: 'Esports & Competitive',
      fps: '144+ FPS Esports',
      image: '/assets/games/cs2_hero.jpg',
      badge: 'ZERO INPUT LAG',
      platform: 'Steam Direct',
    },
    {
      id: 'fortnite',
      title: 'Fortnite: Unreal Engine 5.4',
      studio: 'Epic Games',
      category: 'Esports & Competitive',
      fps: '120 FPS Performance Mode',
      image: '/assets/games/fortnite_hero.jpg',
      badge: 'DIRECT BOOT',
      platform: 'Epic Games',
    },
    {
      id: 'eldenring',
      title: 'Elden Ring: Shadow of the Erdtree',
      studio: 'FromSoftware Inc.',
      category: 'Action RPG',
      fps: '60 FPS Locked',
      image: '/assets/games/cp2077_cover.jpg',
      badge: 'VERIFIED 60 FPS',
      platform: 'Steam',
    },
    {
      id: 'valorant',
      title: 'Valorant',
      studio: 'Riot Games',
      category: 'Esports & Competitive',
      fps: '165+ FPS High-Refresh',
      image: '/assets/games/cs2_cover.jpg',
      badge: 'VANGUARD COMPATIBLE',
      platform: 'Riot Direct',
    },
    {
      id: 'forza',
      title: 'Forza Horizon 6',
      studio: 'Playground Games',
      category: 'Sports & Racing',
      fps: '60 FPS DirectStorage',
      image: '/assets/games/forza_cover.jpg',
      badge: 'VERIFIED 60 FPS',
      platform: 'Xbox / Steam',
    },
    {
      id: 'hogwarts',
      title: 'Hogwarts Legacy',
      studio: 'Warner Bros. Games',
      category: 'Action RPG',
      fps: '60 FPS DirectStorage',
      image: '/assets/games/hogwarts_cover.jpg',
      badge: 'VERIFIED 60 FPS',
      platform: 'Steam / Epic',
    },
    {
      id: 'wukong',
      title: 'Black Myth: Wukong',
      studio: 'Game Science',
      category: 'Next-Gen AAA',
      fps: '60 FPS FSR/DLSS',
      image: '/assets/games/gow_cover.jpg',
      badge: 'DIRECTSTORAGE',
      platform: 'Steam / Epic',
    },
  ];

  const filteredGames = games.filter((g) => {
    const matchesCategory = activeCategory === 'All' || g.category === activeCategory;
    const matchesSearch =
      g.title.toLowerCase().includes(search.toLowerCase()) ||
      g.studio.toLowerCase().includes(search.toLowerCase()) ||
      g.category.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#060b18] to-slate-950 text-white pt-20 pb-24 select-none font-sans overflow-x-hidden selection:bg-sky-500 selection:text-slate-950">
      <SEO
        title="Games Directory — 1,200+ Verified Titles"
        description="Browse 1,200+ games verified on XPlay at locked 60 FPS. Plug in and play Forza Horizon, Spider-Man, Hogwarts Legacy, Cyberpunk 2077 with DirectStorage NVMe speed."
        keywords="XPlay games, play PC games on external drive, 60 FPS laptop gaming, Forza Horizon on laptop, Spider-Man PC"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'XPlay Verified Games Library',
          numberOfItems: games.length.toString(),
        }}
      />

      {/* 1. Header & Live Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950/80 border border-sky-400/40 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>1,200+ VERIFIED EXPERIENCES</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              GAMES <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500">DIRECTORY</span>
            </h1>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search GTA 6, Cyberpunk, studio..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-900 border border-white/20 rounded-xl pl-11 pr-4 py-3 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-sky-400 shadow-sm transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-sky-500 text-slate-950 shadow-md scale-105'
                  : 'bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-sky-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Featured Game Spotlight */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-slate-950 group shadow-[0_20px_60px_rgba(56,189,248,0.2)]">
          <div className="aspect-[21/9] sm:aspect-[24/9] w-full relative">
            <img
              src="/images/hero-bg.webp"
              alt="Grand Theft Auto VI on XPlay"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent hidden md:block" />
          </div>

          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 flex flex-col md:flex-row md:items-end justify-between gap-6 text-white">
            <div className="space-y-2 max-w-xl">
              <span className="inline-block px-3 py-1 rounded-full bg-sky-500 text-slate-950 font-black text-[10px] uppercase tracking-wider">
                SPOTLIGHT DAY ONE
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
                Grand Theft Auto VI
              </h2>
              <p className="text-slate-200 text-xs sm:text-sm font-medium">
                Locked 60 FPS • Custom DirectStorage Architecture • Zero internal SSD installation required.
              </p>
            </div>

            <button
              onClick={() => onOpenPreOrder?.('pro')}
              className="px-8 py-3.5 rounded-xl bg-white hover:bg-sky-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl hover:scale-105 transition-all cursor-pointer shrink-0 self-start md:self-auto"
            >
              <span>Pre-Order Console</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Pure Artwork Game Posters Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              onClick={() => onOpenPreOrder?.('pro')}
              className="group rounded-2xl overflow-hidden bg-[#0b1328] border border-white/10 hover:border-sky-400 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Pure Artwork Poster (3:4 ratio) */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-900">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/images/hero-bg.webp';
                  }}
                />
                
                {/* Subtle top performance tag */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-sky-400/50 text-[10px] font-mono font-bold text-sky-400 shadow-sm">
                  {game.fps.split(' ')[0]} {game.fps.split(' ')[1]}
                </div>
              </div>

              {/* Clean bottom metadata bar */}
              <div className="p-4 flex flex-col justify-between flex-1 gap-3 bg-[#0b1328]">
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-sky-400 transition-colors truncate">
                    {game.title}
                  </h3>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                    <span>{game.studio}</span>
                    <span className="font-mono font-medium text-slate-500">{game.platform}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-bold bg-sky-950/60 px-2 py-0.5 rounded-md border border-sky-400/40">
                    {game.badge}
                  </span>
                  <span className="text-[11px] font-bold text-slate-300 group-hover:text-sky-400 flex items-center gap-1">
                    Play <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-24 text-slate-400 space-y-2">
            <p className="text-base font-bold text-white">No games found matching "{search}"</p>
            <p className="text-xs">Try searching for Spider-Man, Forza, FC 25, or CS2.</p>
          </div>
        )}
      </section>

      {/* 4. Bottom Launch CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center pt-24">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0b1328] border border-white/15 shadow-xl">
          <h3 className="text-2xl sm:text-4xl font-black uppercase text-white mb-3">
            Your Entire Library. Zero PC Storage Used.
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto mb-6">
            Plug XPlay into any everyday laptop and play 1,200+ games at locked 60 FPS without installing a single byte to your laptop.
          </p>
          <button
            onClick={() => onOpenPreOrder?.('student')}
            className="px-8 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-xl hover:scale-105 transition-all cursor-pointer"
          >
            <span>Pre-Order Console (From ₹7,999)</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default GamesPage;
