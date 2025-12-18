'use client';

import { motion } from 'framer-motion';
import { Code2, Search, Users, Lightbulb } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SERVICES } from '@/constants';

const iconMap = {
  Code2,
  Search,
  Users,
  Lightbulb,
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-neutral-950">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neutral-500 text-sm font-medium tracking-wide uppercase">
            Services
          </span>
          <h2 className="mt-4 text-3xl font-medium text-white sm:text-4xl">
            How We Can Help
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            End-to-end software development services tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                className="group p-6 md:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-medium text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
