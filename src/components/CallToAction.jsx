import React from 'react';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.04),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.04),transparent_40%)]" />
      </div>
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-white/10 bg-neutral-900/60 p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute -top-20 -right-10 h-60 w-60 rounded-full bg-rose-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="relative">
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">Join the Private Launch</h3>
            <p className="text-white/70 mt-2 max-w-2xl">Get early access to limited drops, bespoke fittings, and invitation-only experiences. Arriving Q1.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="you@domain.com"
                className="w-full rounded-full bg-neutral-800/80 border border-white/10 px-5 py-3 outline-none placeholder:text-white/40 focus:border-white/30"
              />
              <button type="submit" className="rounded-full bg-white text-neutral-900 px-6 py-3 font-medium hover:bg-white/90">Request Invite</button>
            </form>
            <p className="text-xs text-white/50 mt-3">We respect your inbox. Unsubscribe anytime.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
