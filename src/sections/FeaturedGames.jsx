import React from 'react';

const FeaturedGames = ({ onOpenPreOrder }) => {
  // Official vertical game posters (Steam CDN official 600x900 covers)
  const row1Posters = [
    { title: 'Forza Horizon 5', image: '/assets/games/forza_cover.jpg' },
    { title: 'Hogwarts Legacy', image: '/assets/games/hogwarts_cover.jpg' },
    { title: 'Cyberpunk 2077', image: '/assets/games/cyberpunk_cover.jpg' },
    { title: "Marvel's Spider-Man", image: '/assets/games/spiderman_cover.jpg' },
  ];

  const row2Posters = [
    { title: 'Grand Theft Auto V', image: '/assets/games/gtav_cover.jpg' },
    { title: 'Red Dead Redemption 2', image: '/assets/games/rdr2_cover.jpg' },
    { title: 'God of War', image: '/assets/games/gow_cover.jpg' },
    { title: 'Grand Theft Auto VI', image: '/images/hero-bg.webp' },
  ];

  return (
    <section className="w-full relative overflow-hidden py-14 bg-gradient-to-b from-black via-slate-950 to-[#f1f6fc] select-none" id="games">

      {/* Full Width Dual-Row Moving Marquee (Pure Artwork, No Clutter Headers) */}
      <div className="w-full max-w-full overflow-hidden flex flex-col gap-5">

        {/* Row 1: Leftward Infinite Marquee */}
        <div className="overflow-hidden whitespace-nowrap flex w-full">
          <div className="flex gap-5 animate-marquee shrink-0">
            {[
              ...row1Posters,
              ...row1Posters,
              ...row1Posters,
              ...row1Posters,
              ...row1Posters,
              ...row1Posters,
            ].map((game, idx) => (
              <div
                key={`fg1-${idx}`}
                onClick={() => onOpenPreOrder?.('pro')}
                className="w-44 sm:w-52 md:w-60 aspect-[2/3] rounded-2xl md:rounded-3xl overflow-hidden bg-white border-2 border-slate-200/90 hover:border-sky-500 shadow-xl shadow-slate-300/40 hover:scale-105 transition-all duration-300 cursor-pointer shrink-0"
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Infinite Marquee */}
        <div className="overflow-hidden whitespace-nowrap flex w-full">
          <div className="flex gap-5 animate-marquee-reverse shrink-0">
            {[
              ...row2Posters,
              ...row2Posters,
              ...row2Posters,
              ...row2Posters,
              ...row2Posters,
              ...row2Posters,
            ].map((game, idx) => (
              <div
                key={`fg2-${idx}`}
                onClick={() => onOpenPreOrder?.('pro')}
                className="w-44 sm:w-52 md:w-60 aspect-[2/3] rounded-2xl md:rounded-3xl overflow-hidden bg-white border-2 border-slate-200/90 hover:border-sky-500 shadow-xl shadow-slate-300/40 hover:scale-105 transition-all duration-300 cursor-pointer shrink-0"
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedGames;
