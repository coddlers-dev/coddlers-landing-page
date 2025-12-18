'use client';

import { motion, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { ABOUT_CONTENT } from '@/constants';

interface AnimatedCounterProps {
  value: string;
  label: string;
}

function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  // Check if value starts with a number (e.g., "50+", "98%", "10+")
  const match = value.match(/^(\d+)(.*)$/);
  const isAnimatable = match !== null;
  const numericValue = isAnimatable ? parseInt(match[1], 10) : 0;
  const suffix = isAnimatable ? match[2] : '';

  useEffect(() => {
    if (!isAnimatable || !ref.current) return;

    const controls = animate(0, numericValue, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = Math.round(latest) + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [isAnimatable, numericValue, suffix]);

  return (
    <div className="text-center py-4">
      <span
        ref={ref}
        className="block text-3xl md:text-4xl font-medium text-white"
      >
        {isAnimatable ? '0' + suffix : value}
      </span>
      <span className="mt-2 block text-xs text-neutral-500 uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-black">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-neutral-500 text-sm font-medium tracking-wide uppercase">
              About
            </span>
            <h2 className="mt-4 text-3xl font-medium text-white sm:text-4xl">
              {ABOUT_CONTENT.headline}
            </h2>
            <p className="mt-6 text-neutral-400 leading-relaxed">
              {ABOUT_CONTENT.description}
            </p>

            {/* Key points */}
            <ul className="mt-8 space-y-3">
              {[
                'Clean, maintainable code',
                'Transparent communication',
                'Modern best practices',
                'Long-term partnership',
              ].map((point, index) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 text-neutral-300 text-sm"
                >
                  <span className="h-1 w-1 rounded-full bg-white flex-shrink-0" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 p-6 md:p-8 rounded-2xl bg-neutral-900 border border-neutral-800"
          >
            {ABOUT_CONTENT.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <AnimatedCounter value={stat.value} label={stat.label} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
