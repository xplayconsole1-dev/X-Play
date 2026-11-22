import React, { useState } from 'react';
import { X, Check, ShieldCheck, ArrowRight, HardDrive } from 'lucide-react';
import confetti from 'canvas-confetti';

const PreOrderModal = ({ isOpen, onClose, initialEdition = 'pro' }) => {
  const [edition, setEdition] = useState(initialEdition);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    laptopModel: '',
    city: '',
    promoCode: 'XPLAY20',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const editions = [
    { id: 'student', name: 'XPlay Student', storage: '250GB (1 Game)', price: '₹6,999', mrp: '₹7,999' },
    { id: 'standard', name: 'XPlay Standard', storage: '500GB (Standalone)', price: '₹12,499', mrp: '₹13,499' },
    { id: 'pro', name: 'XPlay Pro', storage: '500GB Crucial (Controller + 1 Game)', price: '₹17,499', mrp: '₹18,499', popular: true },
    { id: 'ultimate', name: 'XPlay Ultimate', storage: '1TB Crucial (Controller + 2 Games)', price: '₹27,479', mrp: '₹28,479' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#38BDF8', '#0EA5E9', '#FFFFFF'],
      });
    } catch {}

    const selected = editions.find((ed) => ed.id === edition) || editions[1];
    const message = `Hello XPlay Team, I would like to reserve an XPlay Console!\nEdition: ${selected.name} (${selected.storage})\nLaunch Price: ${selected.price} (with code ${formData.promoCode})\nName: ${formData.name}\nPhone: ${formData.phone}\nLaptop: ${formData.laptopModel}\nCity: ${formData.city}`;
    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in select-none">
      <div className="relative w-full max-w-xl bg-gradient-to-br from-[#0c162b] to-[#050b14] border-2 border-sky-400/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(56,189,248,0.3)] text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-xs font-sans font-bold tracking-wider text-sky-400 uppercase">
                COMMERCIAL BATCH RESERVATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-round-bold font-extrabold text-white mt-1">
                Reserve Your XPlay Console
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1">
                Zero advance payment required. Free Pan-India Cash On Delivery.
              </p>
            </div>

            {/* Edition Selection Pills */}
            <div className="grid grid-cols-2 gap-2.5">
              {editions.map((ed) => (
                <div
                  key={ed.id}
                  onClick={() => setEdition(ed.id)}
                  className={`p-3 rounded-2xl border cursor-pointer transition-all ${
                    edition === ed.id
                      ? 'bg-sky-500/20 border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-bold font-round-bold text-white">{ed.name}</span>
                    <span className="text-[10px] font-sans font-bold text-sky-400">{ed.storage}</span>
                  </div>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-sm font-extrabold font-display text-sky-300">{ed.price}</span>
                    <span className="text-[10px] text-slate-400 line-through font-sans">{ed.mrp}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
              <input
                required
                type="text"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-900/80 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-sky-400"
              />
              <input
                required
                type="tel"
                placeholder="WhatsApp Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-900/80 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-sky-400"
              />
              <input
                type="text"
                placeholder="Laptop Model (e.g. Dell G15 / MacBook)"
                value={formData.laptopModel}
                onChange={(e) => setFormData({ ...formData, laptopModel: e.target.value })}
                className="w-full bg-slate-900/80 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-sky-400"
              />
              <input
                required
                type="text"
                placeholder="Delivery City / State"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full bg-slate-900/80 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-sky-400"
              />
            </div>

            {/* Launch Code Applied Banner */}
            <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-between text-xs font-sans">
              <span className="text-slate-300">Promo Code Applied:</span>
              <span className="font-bold text-sky-300">XPLAY20 (20% OFF)</span>
            </div>

            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-round-bold font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-sky-500/30 cursor-pointer transition-all hover:scale-[1.02]"
            >
              <span>Confirm Reservation via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(52,211,153,0.3)]">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="text-2xl font-round-bold font-extrabold text-white">
              Reservation Dispatched!
            </h3>
            <p className="text-sm text-slate-300 font-sans max-w-sm mx-auto">
              Redirecting you to our official WhatsApp Concierge to confirm shipping address and free COD.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default PreOrderModal;
