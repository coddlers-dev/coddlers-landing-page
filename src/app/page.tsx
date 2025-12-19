'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IntroAnimation, HeroSection } from '@/components/sections';

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {/* Intro Animation */}
      <AnimatePresence>
        {showIntro && (
          <IntroAnimation onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Main Content - Hero Only */}
      <AnimatePresence>
        {!showIntro && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen overflow-hidden select-none"
          >
            <HeroSection />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
