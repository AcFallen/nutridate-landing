"use client";

import { motion, useScroll, useSpring } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Team from '@/components/Team';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX }}
      />
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Team />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}