'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ANIMATION_CONFIG, SITE_CONFIG } from '@/constants';
import { DotGrid } from '@/components/ui';

interface IntroAnimationProps {
  onComplete: () => void;
}

const letters = SITE_CONFIG.name.split('');

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, ANIMATION_CONFIG.introDelay);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    if (!isVisible) {
      onComplete();
    }
  };

  return (
    <AnimatePresence onExitComplete={handleAnimationComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden select-none"
        >
          {/* Interactive dot background - same as main page */}
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

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Company Logo/Icon - same as main page */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
                damping: 15,
              }}
              className="mb-8"
            >
              <div className="w-20 h-20 rounded-2xl bg-card border border-card-border flex items-center justify-center shadow-lg shadow-black/20">
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-foreground" />
                  <div className="w-3 h-3 rounded-full bg-foreground" />
                  <div className="w-3 h-3 rounded-full bg-foreground" />
                  <div className="w-3 h-3 rounded-full bg-foreground" />
                </div>
              </div>
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.5,
                  },
                },
              }}
              className="flex"
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -30,
                      filter: 'blur(20px)',
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      filter: 'blur(0px)',
                    },
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground inline-block will-change-transform"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.3,
                duration: 0.6,
              }}
              className="mt-8 text-base sm:text-lg text-muted tracking-wide"
            >
              Tecnologia que Transforma
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
