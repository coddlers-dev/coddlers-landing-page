'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { CTA_CONTENT, CONTACT_INFO } from '@/constants';

export function CTASection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-neutral-950">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center px-4"
        >
          {/* Headline */}
          <h2 className="text-3xl font-medium text-white sm:text-4xl">
            {CTA_CONTENT.headline}
          </h2>

          {/* Description */}
          <p className="mt-6 text-neutral-400 leading-relaxed">
            {CTA_CONTENT.description}
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-10"
          >
            <Button size="lg" className="group">
              {CTA_CONTENT.buttonText}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Button>
          </motion.div>

          <p className="mt-6 text-neutral-500 text-sm">
            or email us at{' '}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-white hover:underline"
            >
              {CONTACT_INFO.email}
            </a>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
