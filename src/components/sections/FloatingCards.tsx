'use client';

import { motion } from 'framer-motion';
import { Code2, CheckCircle2, Slack, Github, Figma, Mail } from 'lucide-react';

const floatAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

const cardBaseClasses =
  'absolute bg-card rounded-2xl shadow-xl shadow-black/20 border border-card-border backdrop-blur-sm';

interface FloatingCardProps {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

function FloatingCard({ delay = 0, className, children }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{ scale: 1.02, y: -4 }}
      className={`${cardBaseClasses} ${className}`}
    >
      <motion.div animate={floatAnimation} transition={{ delay: delay * 0.5 }}>
        {children}
      </motion.div>
    </motion.div>
  );
}

function CodeCard() {
  return (
    <FloatingCard
      delay={0.3}
      className="left-[5%] top-[20%] p-4 w-64 -rotate-6 hidden lg:block"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
          <Code2 size={16} className="text-blue-400" />
        </div>
        <span className="text-sm font-medium text-neutral-100">Clean Code</span>
      </div>
      <div className="space-y-2 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="text-purple-400">const</span>
          <span className="text-neutral-200">buildGreatSoftware</span>
          <span className="text-neutral-500">=</span>
        </div>
        <div className="pl-4 text-green-400">{"// Let's code together"}</div>
      </div>
    </FloatingCard>
  );
}

function TaskCard() {
  return (
    <FloatingCard
      delay={0.5}
      className="left-[8%] bottom-[15%] p-4 w-56 rotate-3 hidden lg:block"
    >
      <div className="text-sm font-medium text-neutral-100 mb-3">Today&apos;s Progress</div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-green-400" />
          <span className="text-sm text-neutral-300">Design review</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-green-400" />
          <span className="text-sm text-neutral-300">Code implementation</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-neutral-600" />
          <span className="text-sm text-neutral-500">Testing & QA</span>
        </div>
      </div>
      <div className="mt-3 h-2 bg-neutral-800 rounded-full overflow-hidden">
        <div className="h-full w-2/3 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />
      </div>
    </FloatingCard>
  );
}

function IntegrationsCard() {
  return (
    <FloatingCard
      delay={0.7}
      className="right-[5%] bottom-[20%] p-4 w-52 -rotate-3 hidden lg:block"
    >
      <div className="text-sm font-medium text-neutral-100 mb-3">
        We work with
      </div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center">
          <Github size={20} className="text-neutral-300" />
        </div>
        <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
          <Slack size={20} className="text-purple-400" />
        </div>
        <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center">
          <Figma size={20} className="text-pink-400" />
        </div>
      </div>
    </FloatingCard>
  );
}

function NoteCard() {
  return (
    <FloatingCard
      delay={0.4}
      className="right-[8%] top-[18%] p-4 w-48 rotate-6 hidden lg:block"
    >
      <div className="flex items-center gap-2 mb-2">
        <Mail size={14} className="text-blue-400" />
        <span className="text-xs font-medium text-neutral-500">Quick note</span>
      </div>
      <p className="text-sm text-neutral-300 italic leading-relaxed">
        &quot;Quality code is not an expense, it&apos;s an investment.&quot;
      </p>
    </FloatingCard>
  );
}

export function FloatingCards() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full max-w-7xl mx-auto">
        <CodeCard />
        <TaskCard />
        <IntegrationsCard />
        <NoteCard />
      </div>
    </div>
  );
}
