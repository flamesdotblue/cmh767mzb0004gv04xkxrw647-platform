import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

function LuxuryShoe3D() {
  // Simple 3D animated SVG "shoe" with parallax hover
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty('--rx', `${y * -10}deg`);
      el.style.setProperty('--ry', `${x * 12}deg`);
      el.style.setProperty('--tx', `${x * 8}px`);
      el.style.setProperty('--ty', `${y * 8}px`);
    };
    const reset = () => {
      el.style.setProperty('--rx', `0deg`);
      el.style.setProperty('--ry', `0deg`);
      el.style.setProperty('--tx', `0px`);
      el.style.setProperty('--ty', `0px`);
    };
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', reset);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', reset);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full max-w-3xl"
      style={{ perspective: '1200px' }}
    >
      <motion.div
        className="relative rounded-3xl bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 border border-white/10 shadow-2xl p-6"
        style={{
          transformStyle: 'preserve-3d',
          rotateX: 'var(--rx)',
          rotateY: 'var(--ry)',
          x: 'var(--tx)',
          y: 'var(--ty)'
        }}
        animate={{ rotateZ: [0, 1.2, -1.2, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_top_left,rgba(251,191,36,0.12),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(244,63,94,0.12),transparent_45%)]" style={{ transform: 'translateZ(30px)' }} />
        <motion.div className="relative" style={{ transform: 'translateZ(60px)' }}>
          <svg viewBox="0 0 900 500" className="w-full h-auto select-none">
            <defs>
              <linearGradient id="shoeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fde68a"/>
                <stop offset="50%" stopColor="#fb7185"/>
                <stop offset="100%" stopColor="#60a5fa"/>
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Abstract luxury shoe silhouette */}
            <g filter="url(#glow)">
              <path d="M120 320 C 220 300, 340 240, 420 210 C 500 180, 560 210, 650 240 C 740 270, 790 280, 820 270 C 815 300, 780 345, 730 360 C 640 390, 520 390, 380 370 C 260 355, 180 352, 120 350 Z" fill="url(#shoeGrad)" opacity="0.95" />
              <path d="M420 210 C 460 240, 520 250, 560 248" stroke="#fff" strokeOpacity="0.5" strokeWidth="6" fill="none" />
              <path d="M340 240 C 360 250, 420 270, 470 270" stroke="#fff" strokeOpacity="0.5" strokeWidth="6" fill="none" />
              <circle cx="740" cy="330" r="18" fill="#fff" fillOpacity="0.9" />
            </g>
          </svg>
        </motion.div>
        <motion.div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-rose-500/30 blur-2xl" style={{ transform: 'translateZ(90px)' }} />
        <motion.div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-amber-400/30 blur-2xl" style={{ transform: 'translateZ(90px)' }} />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -80]);
  const y2 = useTransform(scrollY, [0, 600], [0, -160]);
  const smoothY1 = useSpring(y1, { stiffness: 80, damping: 20 });
  const smoothY2 = useSpring(y2, { stiffness: 80, damping: 20 });

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div style={{ y: smoothY1 }} className="absolute -top-40 left-1/2 -translate-x-1/2 h-[620px] w-[620px] rounded-full bg-gradient-to-br from-rose-500/30 to-indigo-500/30 blur-3xl" />
        <motion.div style={{ y: smoothY2 }} className="absolute top-20 -left-20 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-amber-400/25 to-emerald-400/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_30%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.05),transparent_35%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight"
            >
              Luxury Athletic Shoes with Precision Engineering
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-white/70 text-lg"
            >
              Experience effortless speed, sculpted comfort, and elevated aesthetics. Crafted with aerospace-grade foams, carbon inflect plates, and hand-finished uppers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <button className="rounded-full bg-white text-neutral-900 px-6 py-3 font-medium shadow-xl hover:bg-white/90 transition">Explore Collection</button>
              <button className="rounded-full border border-white/20 px-6 py-3 font-medium hover:bg-white/10 transition">View Technology</button>
            </motion.div>
          </div>
          <div className="relative">
            <LuxuryShoe3D />
          </div>
        </div>
      </div>
    </section>
  );
}
