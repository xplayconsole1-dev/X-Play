import React from 'react';

const SystemRequirements = () => {
  return (
    <section className="w-full py-16 px-6 relative z-30 select-none bg-white text-slate-900">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-sky-700 bg-sky-50 border border-sky-200 px-3.5 py-1 rounded-full font-sans">
            HARDWARE COMPATIBILITY
          </span>
          <h2 className="text-3xl sm:text-5xl font-round-bold font-extrabold text-slate-900 tracking-tight">
            System Requirements
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Almost any everyday student or office laptop made after 2018 is fully supported out of the box.
          </p>
        </div>

        {/* Side-by-Side Minimum vs Recommended Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">

          {/* Card 1: Minimum Requirements */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-4 shadow-lg shadow-slate-100 hover:border-sky-500 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-round-bold font-extrabold text-slate-900">
                  Minimum Requirements
                </h3>
                <span className="text-xs font-bold text-slate-700 bg-slate-200 px-3 py-1 rounded-full font-sans uppercase tracking-wider">
                  Target: 60 FPS
                </span>
              </div>

              <div className="divide-y divide-slate-200/70 text-xs sm:text-sm font-sans">
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-slate-500 font-medium">Processor</span>
                  <span className="font-semibold text-slate-900 text-right">Intel Core i3 / i5 (8th Gen+) or AMD Ryzen 3 / 5 (3000+)</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-slate-500 font-medium">Memory</span>
                  <span className="font-semibold text-slate-900 text-right">8GB RAM</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-slate-500 font-medium">Graphics</span>
                  <span className="font-semibold text-slate-900 text-right">Intel UHD 620 / Iris Xe or AMD Vega 6/8</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-slate-500 font-medium">Port</span>
                  <span className="font-semibold text-slate-900 text-right">USB 3.0 (Type-A) or USB-C (Adapter included)</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-slate-500 font-medium">Display</span>
                  <span className="font-semibold text-slate-900 text-right">720p / 1080p 60Hz Screen</span>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-500 font-sans font-medium">
              Verified: GTA V, Valorant, CS2, Minecraft, FiveM RP
            </div>
          </div>

          {/* Card 2: Recommended Requirements */}
          <div className="bg-white border-2 border-sky-500 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-4 shadow-xl shadow-sky-500/10 hover:border-sky-600 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-round-bold font-extrabold text-slate-950">
                  Recommended Requirements
                </h3>
                <span className="text-xs font-bold text-white bg-sky-500 px-3 py-1 rounded-full font-sans uppercase tracking-wider">
                  Target: 60-120 FPS Locked
                </span>
              </div>

              <div className="divide-y divide-slate-200/70 text-xs sm:text-sm font-sans">
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-slate-500 font-medium">Processor</span>
                  <span className="font-semibold text-slate-950 text-right">Intel Core i5 / i7 (11th Gen+) or AMD Ryzen 5 / 7 (5000+)</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-slate-500 font-medium">Memory</span>
                  <span className="font-semibold text-slate-950 text-right">16GB RAM</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-slate-500 font-medium">Graphics</span>
                  <span className="font-semibold text-slate-950 text-right">NVIDIA RTX 3050+ or AMD Radeon 6600M+</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-slate-500 font-medium">Port</span>
                  <span className="font-semibold text-slate-950 text-right">USB-C 3.2 Gen 2 / Thunderbolt 4</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-slate-500 font-medium">Display</span>
                  <span className="font-semibold text-slate-950 text-right">1080p / 1440p High Refresh or 4K TV</span>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-sky-600 font-sans font-bold">
              Verified: Cyberpunk 2077 (DLSS 3.5), Hogwarts Legacy, Forza Horizon 5
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SystemRequirements;
