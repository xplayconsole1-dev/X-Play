import React, { useState } from 'react';
import {
  HelpCircle,
  Search,
  ShieldCheck,
  Laptop,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';

const SupportPage = ({ onOpenPreOrder }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(0);

  const bootKeys = [
    { brand: 'Lenovo / ThinkPad / IdeaPad / Legion', key: 'F12 or Fn + F12', note: 'Or press the dedicated Novo button with a paperclip on left/right side' },
    { brand: 'HP / Pavilion / Omen / Envy', key: 'F9 or ESC', note: 'Press ESC on startup to open Startup Menu, then tap F9 for Boot Device' },
    { brand: 'Dell / Alienware / Inspiron / XPS', key: 'F12', note: 'Rapidly tap F12 as soon as Dell logo appears' },
    { brand: 'ASUS / ROG / TUF / ZenBook', key: 'F8 or ESC', note: 'Tap F8 or ESC upon pressing power button' },
    { brand: 'Acer / Predator / Nitro / Aspire', key: 'F12', note: 'If disabled, enter BIOS (F2) -> Main -> F12 Boot Menu -> Enable' },
    { brand: 'Apple Mac (Intel Models)', key: 'Hold Option (Alt)', note: 'Hold Option key immediately after turning on Mac until drive selection appears' },
    { brand: 'MSI (Micro-Star International)', key: 'F11', note: 'Tap F11 repeatedly on boot screen' },
    { brand: 'Gigabyte / Aorus', key: 'F12', note: 'Tap F12 upon boot' },
    { brand: 'Microsoft Surface', key: 'Volume Down + Power', note: 'Hold Volume Down, press & release Power, release Vol Down when Surface logo appears' },
  ];

  const filteredBootKeys = bootKeys.filter(item =>
    item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.key.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const faqs = [
    {
      q: 'Will booting XPlay affect my office laptop or trigger company IT admin alerts?',
      a: 'Zero traces. XPlay boots independently directly from its high-speed NVMe storage via strict SanPolicy=4 isolation. Your host Windows, corporate drive, BitLocker keys, VPN profiles, and work files remain in 100% read-only, unmounted, unpartitioned lock. Corporate monitoring tools (CrowdStrike, Zscaler, Sentinel) do not run inside XPlay OS.',
    },
    {
      q: 'How do I download more games like Forza Horizon, Spider-Man, Valorant, or Black Myth: Wukong?',
      a: 'XPlay comes pre-installed with Steam, Epic Games Launcher, Ubisoft Connect, and EA App. Simply log in with your existing accounts and hit Install. Games save directly onto your high-speed XPlay NVMe with zero consumption of your laptop internal storage.',
    },
    {
      q: 'What are the minimum laptop specifications required to run XPlay?',
      a: 'Any laptop or PC manufactured after 2018 with USB 3.2 Gen 1, Gen 2, or Thunderbolt/Type-C ports, an Intel Core i5 (8th Gen+) or AMD Ryzen 5 (3000 series+), and 8GB RAM. For heavy AAA games like Forza Horizon or Spider-Man, a discrete GPU (GTX 1650 / RTX 3050 or higher) or AMD Radeon 680M+ iGPU is recommended.',
    },
    {
      q: 'What is the 1-Year Pan-India Replacement Warranty Policy?',
      a: 'Every XPlay console includes our Zero-Hassle 1-Year Pan-India Replacement Warranty. If your unit experiences any hardware malfunction, thermal defect, or controller failure, we arrange complimentary doorstep pickup and dispatch a brand new sealed replacement unit within 48 hours.',
    },
    {
      q: 'Can I connect Bluetooth controllers, wireless headsets, and external monitors?',
      a: 'Yes, full plug-and-play support. XPlay includes built-in driver support for PlayStation DualSense (with haptics), Xbox Wireless Controllers, 8BitDo, Nintendo Switch Pro controllers, and USB-C / HDMI external displays.',
    },
    {
      q: 'What should I do if my laptop skips the USB drive and boots directly to normal Windows?',
      a: 'This happens if Fast Startup is locking your bootloader. Fix: Inside Windows, hold the SHIFT key while clicking "Restart" -> Select "Use a Device" -> Choose "EFI USB Device (XPlay)". Alternatively, restart and tap your BIOS key (F2 or Del) to disable "Fast Boot".',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#060b18] to-slate-950 text-white pt-20 pb-24 select-none font-sans overflow-x-hidden selection:bg-sky-500 selection:text-slate-950">
      <SEO
        title="Support & BIOS Boot Guide | 1-Year Warranty"
        description="Official XPlay Support Hub. Step-by-step BIOS boot keys for Lenovo, Dell, HP, Asus, Acer, Mac. 1-Year Pan-India Replacement Warranty and 24/7 WhatsApp concierge assistance."
        keywords="XPlay support, BIOS boot key, boot from usb, Lenovo F12 boot key, HP F9 boot key, Dell F12 boot, XPlay warranty, console support"
      />

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16 px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/80 border border-sky-400/40 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
          <span>Official 24/7 Support Hub</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4 uppercase">
          HOW CAN WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500">HELP YOU PLAY?</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto uppercase tracking-wider font-semibold">
          Instant BIOS boot key cheat sheet, 3-step setup guide, and 1-Year Pan-India warranty lookup.
        </p>
      </div>

      {/* Quick Contact Action Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 px-6">
        <div className="p-6 rounded-3xl bg-white border-2 border-green-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-300 flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">WhatsApp VIP Concierge</h3>
            <p className="text-slate-600 text-xs leading-relaxed mb-4">
              Instant 1-on-1 engineer chat for boot troubleshooting, BIOS settings, and order assistance.
            </p>
          </div>
          <a
            href="https://wa.me/919876543210?text=Hi%20XPlay%20Team,%20I%20need%20support%20with%20my%20console"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all shadow-md shadow-green-600/20"
          >
            <span>Chat on WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="p-6 rounded-3xl bg-white border-2 border-sky-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-300 flex items-center justify-center text-sky-600 mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">1-Year Replacement</h3>
            <p className="text-slate-600 text-xs leading-relaxed mb-4">
              Pan-India zero-repair swap warranty. If your hardware faults, we send a brand new sealed console.
            </p>
          </div>
          <div className="w-full py-2.5 rounded-xl bg-sky-50 border border-sky-300 text-sky-800 font-bold text-xs uppercase tracking-wider text-center">
            Zero-Hassle Doorstep Pickup
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white border-2 border-indigo-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-300 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">Support Hours</h3>
            <p className="text-slate-600 text-xs leading-relaxed mb-4">
              Monday - Sunday: 10:00 AM to 11:00 PM IST. Average response time under 4 minutes.
            </p>
          </div>
          <a
            href="mailto:support@xplayconsole.com"
            className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all border border-slate-300"
          >
            <span>support@xplayconsole.com</span>
          </a>
        </div>
      </div>

      {/* 3-Step Setup Illustrated Guide */}
      <div className="max-w-5xl mx-auto mb-20 px-6">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border-2 border-sky-300 shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900 mb-2">
              3-Step Plug & Play Setup
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
              No software installations. Zero configuration. Instant 60 FPS gaming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-700 text-2xl font-black mb-4 shadow-sm">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1 uppercase">Connect Cable</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Plug the braided high-speed Type-C cable into your laptop's USB 3.2 or Thunderbolt port.
              </p>
            </div>

            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-700 text-2xl font-black mb-4 shadow-sm">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1 uppercase">Tap Boot Key</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Turn on your laptop and continuously tap your boot key (<span className="text-sky-700 font-bold">F12</span> on Lenovo/Dell, <span className="text-sky-700 font-bold">F9</span> on HP).
              </p>
            </div>

            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-700 text-2xl font-black mb-4 shadow-sm">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1 uppercase">Select XPlay NVMe</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Select "XPlay OS / NVMe" and hit Enter. Boot into 60 FPS gaming in under 12 seconds flat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive BIOS Boot Key Lookup Table */}
      <div className="max-w-5xl mx-auto mb-20 px-6" id="boot-keys">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900">
              Laptop Boot Menu Hotkeys
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Search your laptop brand to find the exact key to press at boot.
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search HP, Lenovo, Dell..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border-2 border-sky-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-sky-500 shadow-sm transition-colors"
            />
          </div>
        </div>

        <div className="rounded-2xl border-2 border-sky-200 bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-sky-50 border-b border-sky-200 text-slate-600 uppercase text-[11px] tracking-wider">
                  <th className="py-3.5 px-6 font-bold">Laptop Brand / Model</th>
                  <th className="py-3.5 px-6 font-bold text-sky-800">Boot Menu Key</th>
                  <th className="py-3.5 px-6 font-bold hidden md:table-cell">Instructions / Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredBootKeys.map((item, idx) => (
                  <tr key={idx} className="hover:bg-sky-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                      <Laptop className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>{item.brand}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block px-3 py-1 rounded-lg bg-sky-100 border border-sky-300 text-sky-900 font-mono font-bold text-xs sm:text-sm">
                        {item.key}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600 text-xs hidden md:table-cell">
                      {item.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Accordion */}
      <div className="max-w-4xl mx-auto mb-20 px-6" id="faqs">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Everything you need to know about safety, isolation, games, and hardware performance.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border-2 border-sky-200 bg-white shadow-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full py-4 px-6 text-left flex justify-between items-center gap-4 hover:bg-sky-50/50 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-sky-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-sky-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <button
          onClick={() => onOpenPreOrder?.('pocket')}
          className="px-10 py-4 rounded-xl bg-black hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-xl hover:scale-105 transition-all cursor-pointer"
        >
          <span>Claim Launch Pre-Order (From ₹7,999)</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

    </div>
  );
};

export default SupportPage;
