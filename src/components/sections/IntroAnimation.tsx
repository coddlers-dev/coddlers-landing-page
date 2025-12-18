'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ANIMATION_CONFIG, SITE_CONFIG } from '@/constants';

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
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          {/* Letters */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.3,
                },
              },
            }}
            className="flex overflow-hidden"
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
                    rotateX: -90,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                  },
                }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 12,
                }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium text-white inline-block"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 1.2,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 h-px w-32 sm:w-48 origin-left bg-white/50"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.5,
              duration: 0.6,
            }}
            className="mt-6 text-sm sm:text-base text-neutral-500 tracking-widest uppercase"
          >
            Build Better Software
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
