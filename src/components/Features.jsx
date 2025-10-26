import React from 'react';
import { Gem, Zap, Shield, Crown, Star } from 'lucide-react';

const features = [
  {
    icon: Crown,
    title: 'Luxury Materials',
    desc: 'Italian microfibre, precision knits, and hand-finished trims for a couture-grade aesthetic.',
  },
  {
    icon: Zap,
    title: 'Energy Return',
    desc: 'Dual-density PEBA foams with carbon inflect plate for propulsive transitions.',
  },
  {
    icon: Gem,
    title: 'Precision Fit',
    desc: 'Adaptive last geometry and micro-tuned heel counters that lock without pressure points.',
  },
  {
    icon: Shield,
    title: 'Enduring Build',
    desc: 'Ceramic-infused outsole rubber and stitched sidewalls for long-haul performance.',
  },
  {
    icon: Star,
    title: 'Concierge Service',
    desc: 'White-glove support, free lifetime tune-ups, and priority replacement program.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Engineered Elegance</h2>
          <p className="text-white/60 mt-2">Where advanced biomechanics meet tailored luxury.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group relative rounded-2xl border border-white/10 bg-neutral-900/40 p-6 overflow-hidden">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5 blur-2xl transition group-hover:bg-white/10" />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-to-br from-amber-400/30 to-rose-500/30 border border-white/10">
                  <f.icon className="text-white" size={18} />
                </div>
                <h3 className="font-semibold">{f.title}</h3>
              </div>
              <p className="text-white/70 mt-3 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
