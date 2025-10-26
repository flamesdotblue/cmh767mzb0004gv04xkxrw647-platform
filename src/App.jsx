import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import CallToAction from './components/CallToAction';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <NavBar />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <CallToAction />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Vitesse Athletics — Luxury performance redefined.
      </footer>
    </div>
  );
}
