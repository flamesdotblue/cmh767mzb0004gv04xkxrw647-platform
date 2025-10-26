import React from 'react';
import { Crown } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-neutral-950/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid place-items-center h-9 w-9 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 text-neutral-900 shadow-[0_0_40px_-10px_rgba(251,191,36,0.6)]">
            <Crown size={18} />
          </div>
          <span className="font-semibold tracking-tight text-lg">Vitesse Athletics</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#products" className="hover:text-white transition">Collections</a>
          <a href="#features" className="hover:text-white transition">Technology</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-white/90 transition shadow-lg">
          Shop Now
        </button>
      </div>
    </header>
  );
}
