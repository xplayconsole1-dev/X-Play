import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [logged, setLogged] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setLogged(true);
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in select-none">
      <div className="relative w-full max-w-md bg-gradient-to-br from-[#0c162b] to-[#050b14] border-2 border-sky-400/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(56,189,248,0.3)] text-white">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!logged ? (
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <span className="text-xs font-sans font-bold tracking-wider text-sky-400 uppercase">
                XPLAY CLOUD ACCESS
              </span>
              <h3 className="text-2xl font-round-bold font-extrabold text-white mt-1">
                Gamer Portal Login
              </h3>
              <p className="text-xs text-slate-300 font-sans mt-1">
                Access your pre-configured games, firmware updates, and cloud save backups.
              </p>
            </div>

            <div className="space-y-3 text-xs font-sans">
              <input
                required
                type="email"
                placeholder="Gamer Tag or Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-900/80 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-sky-400"
              />
              <input
                required
                type="password"
                placeholder="Access Key / Password"
                className="w-full bg-slate-900/80 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-sky-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-round-bold font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-sky-500/30 cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <span>Sign In to Console Vault</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400 flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-round-bold font-extrabold text-white">
              Authenticated Successfully!
            </h4>
            <p className="text-xs text-slate-300 font-sans font-medium">
              Welcome back to XPlay Command Deck.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default LoginModal;
