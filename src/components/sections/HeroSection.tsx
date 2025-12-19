'use client';

import { motion } from 'framer-motion';
import { ModernButton, DotGrid } from '@/components/ui';
import { FloatingCards } from './FloatingCards';
import { HERO_CONTENT, CONTACT_INFO } from '@/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function HeroSection() {
  const handleContactClick = () => {
    window.location.href = `mailto:${CONTACT_INFO.email}`;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Interactive dot background */}
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#271E37"
        activeColor="#5220FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
        className="z-0"
      />

      {/* Floating decorative cards */}
      <FloatingCards />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Company Logo/Icon */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-card border border-card-border flex items-center justify-center shadow-lg shadow-black/20">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
                <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
                <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
                <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
              </div>
            </div>
          </motion.div>

          {/* Company Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground"
          >
            {HERO_CONTENT.companyName}
          </motion.h1>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            {HERO_CONTENT.headline}
            <br />
            <span className="text-muted">{HERO_CONTENT.headlineAccent}</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed"
          >
            {HERO_CONTENT.subheadline}
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mt-10">
            <ModernButton onClick={handleContactClick} variant="primary">
              {HERO_CONTENT.primaryCta}
            </ModernButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
