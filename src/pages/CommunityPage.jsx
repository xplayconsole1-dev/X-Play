import React from 'react';
import { Users, Trophy, MessageSquare, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

const CommunityPage = ({ onOpenPreOrder }) => {
  const tournaments = [
    {
      title: 'Valorant 5v5 Inter-College Cup',
      game: 'Valorant',
      prize: '₹25,000 Pool',
      schedule: 'Every Saturday • 7:00 PM IST',
      slots: '32/32 Teams (Waitlist Open)',
      status: 'REGISTRATION LIVE',
      color: 'bg-red-50 text-red-700 border-red-300',
    },
    {
      title: 'EA SPORTS FC 25 Premier 1v1',
      game: 'EA FC 25',
      prize: '₹15,000 Pool',
      schedule: 'Every Sunday • 5:00 PM IST',
      slots: '12 Slots Left',
      status: 'CLOSING SOON',
      color: 'bg-green-50 text-green-700 border-green-300',
    },
    {
      title: 'CS2 Dust II Fast Cup',
      game: 'Counter-Strike 2',
      prize: '₹10,000 Pool',
      schedule: 'Every Friday • 8:00 PM IST',
      slots: 'Open Bracket',
      status: 'OPEN REGISTRATION',
      color: 'bg-sky-50 text-sky-700 border-sky-300',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#060b18] to-slate-950 text-white pt-20 pb-24 select-none font-sans overflow-x-hidden selection:bg-sky-500 selection:text-slate-950">
      <SEO
        title="Community & Esports Tournaments"
        description="Join 18,000+ Indian gamers on XPlay. Discord voice channels, weekly CS2 & EA FC cash tournaments, and verified player reviews."
        keywords="XPlay discord community, college esports tournaments India, GTA RP FiveM community, PC gaming discord India"
      />

      {/* 1. Header */}
      <section className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950/80 border border-sky-400/40 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>18,400+ ACTIVE CONSOLES</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-4">
          XPLAY <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500">GAMER NETWORK</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto uppercase tracking-wider font-semibold">
          Weekly Cash Esports. Official Discord Lounge. Zero Host Footprint.
        </p>
      </section>

      {/* 2. Live Network Telemetry */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="p-6 rounded-2xl bg-white border-2 border-sky-200 shadow-sm">
            <div className="text-2xl sm:text-4xl font-black text-slate-900 font-mono">18,400+</div>
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-bold mt-1">Active XPlayers</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border-2 border-sky-200 shadow-sm">
            <div className="text-2xl sm:text-4xl font-black text-sky-600 font-mono">32,500+</div>
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-bold mt-1">Discord Members</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border-2 border-sky-200 shadow-sm">
            <div className="text-2xl sm:text-4xl font-black text-slate-900 font-mono">64</div>
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-bold mt-1">College Hubs (IIT/NIT)</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border-2 border-sky-200 shadow-sm">
            <div className="text-2xl sm:text-4xl font-black text-emerald-600 font-mono">₹50,000</div>
            <div className="text-[11px] text-slate-500 uppercase tracking-wider font-bold mt-1">Weekly Prize Pool</div>
          </div>
        </div>
      </section>

      {/* 3. Official Channels Action Cards */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-white border-2 border-indigo-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black uppercase text-slate-900 mb-2">Discord 10-Foot Lounge</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Connect with 32,500+ gamers. LFG matchmaking, custom graphics profiles, BIOS setup support, and weekly game giveaways.
              </p>
            </div>
            <a
              href="https://discord.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-600/20"
            >
              <span>Join Official Discord</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="p-8 rounded-3xl bg-white border-2 border-orange-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black uppercase text-slate-900 mb-2">Reddit /r/XPlayConsole</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                User gameplay clips, laptop thermal benchmarks, SanPolicy=4 isolation verification threads, and community modding guides.
              </p>
            </div>
            <a
              href="https://reddit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-orange-600/20"
            >
              <span>Visit Subreddit</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. Weekly Cash Tournaments */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-sky-700 block mb-2">
            ESPORTS ARENA
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-slate-900">
            Weekly Cash Tournaments
          </h2>
        </div>

        <div className="space-y-4">
          {tournaments.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border-2 border-sky-200 hover:border-sky-400 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full border ${t.color}`}>
                    {t.status}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{t.schedule}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{t.title}</h3>
                <div className="text-xs text-slate-600">
                  Prize: <span className="text-emerald-700 font-bold">{t.prize}</span> • Slots: {t.slots}
                </div>
              </div>

              <button
                onClick={() => onOpenPreOrder?.('pocket')}
                className="px-6 py-2.5 rounded-xl bg-black hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shrink-0"
              >
                Register Team
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <button
          onClick={() => onOpenPreOrder?.('pocket')}
          className="px-10 py-4 rounded-xl bg-black hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-xl hover:scale-105 transition-all cursor-pointer"
        >
          <span>Claim Launch Allocation — From ₹7,999</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </section>
    </div>
  );
};

export default CommunityPage;
