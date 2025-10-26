import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Apex Pro Carbon',
    desc: 'Race-day propulsion, featherlight feel.',
    price: '$340',
    gradient: 'from-rose-500/20 to-amber-400/20',
  },
  {
    name: 'Echelon Elite Knit',
    desc: 'Precision fit with engineered knit.',
    price: '$290',
    gradient: 'from-indigo-500/20 to-cyan-400/20',
  },
  {
    name: 'Monarch Trail GTX',
    desc: 'All-weather grip with luxury trim.',
    price: '$320',
    gradient: 'from-emerald-400/20 to-lime-300/20',
  },
];

function TiltCard({ children }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const enter = () => el.classList.add('will-change-transform');
    const leave = () => {
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
      el.style.setProperty('--tx', '0px');
      el.style.setProperty('--ty', '0px');
      el.classList.remove('will-change-transform');
    };
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--rx', `${y * -8}deg`);
      el.style.setProperty('--ry', `${x * 10}deg`);
      el.style.setProperty('--tx', `${x * 6}px`);
      el.style.setProperty('--ty', `${y * 6}px`);
    };
    el.addEventListener('mouseenter', enter);
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    return () => {
      el.removeEventListener('mouseenter', enter);
      el.removeEventListener('mousemove', move);
      el.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="[transform-style:preserve-3d]"
      style={{
        rotateX: 'var(--rx)',
        rotateY: 'var(--ry)',
        x: 'var(--tx)',
        y: 'var(--ty)',
        perspective: '900px',
      }}
    >
      {children}
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section id="products" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">Signature Collection</h2>
            <p className="text-white/60 mt-2">Meticulously tuned silhouettes for road, track, and trail.</p>
          </div>
          <button className="hidden md:inline-flex rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition">View All</button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <TiltCard key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative rounded-3xl border border-white/10 bg-gradient-to-br ${p.gradient} p-6 overflow-hidden`}
              >
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{p.name}</h3>
                    <p className="text-white/70 mt-1">{p.desc}</p>
                  </div>
                  <span className="rounded-full bg-white text-neutral-900 px-3 py-1 text-sm font-semibold">{p.price}</span>
                </div>
                <div className="mt-6">
                  <div className="aspect-[4/2] w-full rounded-2xl bg-neutral-900/40 border border-white/10 grid place-items-center overflow-hidden">
                    <motion.div
                      animate={{ rotateZ: [0, 1.2, -1.2, 0], y: [0, -3, 0] }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                      className="h-24 w-3/4 rounded-xl bg-gradient-to-r from-white/60 to-white/10 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.3)]"
                    />
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <button className="rounded-full bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-white/90">Explore</button>
                  <a className="text-white/80 text-sm hover:text-white cursor-pointer">Learn more →</a>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
