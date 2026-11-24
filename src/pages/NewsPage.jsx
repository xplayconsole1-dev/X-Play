import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Tag, 
  ChevronRight, 
  Share2, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  HardDrive 
} from 'lucide-react';
import SEO from '../components/SEO';
import GamingFooter from '../sections/GamingFooter';

const NewsPage = ({ onOpenPreOrder }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Hardware', 'DirectStorage', 'Platform', 'Community'];

  const newsItems = [
    {
      id: 1,
      category: 'Hardware',
      title: 'XPlay Student Edition Officially Announced for College Gamers Across India',
      excerpt: 'Engineered specifically for everyday college laptops and budget desktop PCs. Bypasses slow internal SSDs to deliver locked 60 FPS AAA performance for ₹6,999.',
      date: 'Nov 24, 2026',
      readTime: '3 min read',
      tag: 'FEATURED LAUNCH',
      highlight: true,
      image: '/brand/01_product_drive.jpg',
    },
    {
      id: 2,
      category: 'DirectStorage',
      title: 'Under The Hood: How DirectStorage 2.0 Bypasses CPU Decompression Bottlenecks',
      excerpt: 'Deep-dive into XPlay silicon architecture. Why NVMe-to-VRAM GPU DMA streaming reduces load screens to under 1.8 seconds in open-world titles.',
      date: 'Nov 22, 2026',
      readTime: '5 min read',
      tag: 'TECH BENCHMARK',
      image: '/assets/xbox_pc/library_poster.jpg',
    },
    {
      id: 3,
      category: 'Platform',
      title: 'Genuine AAA Game Key Distribution Policy: Permanent Ownership on Steam & Epic',
      excerpt: 'Every XPlay Console bundle includes authentic digital license vouchers registered permanently to your personal accounts with full cloud saves.',
      date: 'Nov 18, 2026',
      readTime: '4 min read',
      tag: 'PARTNERSHIP',
      image: '/assets/xbox_pc/play_anywhere.jpg',
    },
    {
      id: 4,
      category: 'Hardware',
      title: 'SAN Policy 4 Security Explained: Zero Host Footprint & BitLocker Isolation',
      excerpt: 'Why IT administrators and university security policies allow XPlay on college and corporate laptops without risk of host OS tampering.',
      date: 'Nov 12, 2026',
      readTime: '4 min read',
      tag: 'SECURITY',
      image: '/brand/02_retail_box.jpg',
    },
    {
      id: 5,
      category: 'Community',
      title: 'Weekly Collegiate Esports Cup Season 1 Announced: CS2 & EA FC 25 Cash Pool',
      excerpt: 'Inter-college competitive brackets start this weekend on the official XPlay Discord. Open registration for all verified console owners.',
      date: 'Nov 08, 2026',
      readTime: '2 min read',
      tag: 'ESPORTS',
      image: '/brand/01_product_drive.jpg',
    },
  ];

  const filteredNews = selectedCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const featured = newsItems[0];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pt-24 pb-0 select-none font-sans overflow-x-hidden selection:bg-[#00e5ff] selection:text-black">
      <SEO
        title="News & Updates | XPlay Console Pressroom"
        description="Official product announcements, DirectStorage hardware benchmarks, collegiate esports tournaments, and release notes from XPlay Technologies."
        keywords="XPlay news, XPlay console release, DirectStorage NVMe news, budget gaming PC India announcements"
      />

      {/* Header Section */}
      <section className="max-w-6xl mx-auto px-6 pt-6 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          <span>OFFICIAL PRESSROOM & RELEASES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-slate-900 mb-4 font-round-bold">
          XPLAY <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600">NEWSROOM</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
          The latest engineering updates, hardware launch milestones, partnerships, and collegiate esports announcements.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold font-mono transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-sky-300 hover:text-sky-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Headline Hero Article */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group hover:border-sky-300 transition-all">
          <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto relative overflow-hidden bg-slate-900">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1 rounded-full bg-[#00e5ff] text-slate-950 text-[11px] font-mono font-bold uppercase tracking-wider shadow-md">
                {featured.tag}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-sky-600 font-bold">
                  <Tag className="w-3.5 h-3.5" />
                  {featured.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.date}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-round-bold leading-tight uppercase group-hover:text-sky-600 transition-colors">
                {featured.title}
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                {featured.excerpt}
              </p>
            </div>

            <div className="pt-8 flex items-center justify-between border-t border-slate-100">
              <button
                onClick={() => onOpenPreOrder?.('student')}
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-950 bg-[#00e5ff] hover:bg-[#00c8e6] px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer hover:scale-105"
              >
                <span>Read Announcement</span>
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </button>
              <span className="text-xs text-slate-400 font-mono">{featured.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredNews.slice(1).map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-sky-300 transition-all flex flex-col justify-between text-left group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold uppercase text-[10px]">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-round-bold leading-snug uppercase group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-400">{item.readTime}</span>
                <button
                  onClick={() => onOpenPreOrder?.('pro')}
                  className="font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1 uppercase tracking-wider cursor-pointer"
                >
                  <span>Explore Hardware</span>
                  <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Official Gaming Footer */}
      <GamingFooter onOpenPreOrder={onOpenPreOrder} />
    </div>
  );
};

export default NewsPage;
