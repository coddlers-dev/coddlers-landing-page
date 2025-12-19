'use client';

import { motion } from 'framer-motion';
import { Code2, CheckCircle2, Github, Figma, Mail } from 'lucide-react';

// Cursor IDE Logo Component
function CursorIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="m466.383 137.073-206.469-119.2034c-6.63-3.8287-14.811-3.8287-21.441 0l-206.4586 119.2034c-5.5734 3.218-9.0144 9.169-9.0144 15.615v240.375c0 6.436 3.441 12.397 9.0144 15.615l206.4686 119.203c6.63 3.829 14.811 3.829 21.441 0l206.468-119.203c5.574-3.218 9.015-9.17 9.015-15.615v-240.375c0-6.436-3.441-12.397-9.015-15.615zm-12.969 25.25-199.316 345.223c-1.347 2.326-4.904 1.376-4.904-1.319v-226.048c0-4.517-2.414-8.695-6.33-10.963l-195.7577-113.019c-2.3263-1.347-1.3764-4.905 1.3182-4.905h398.6305c5.661 0 9.199 6.136 6.368 11.041h-.009z"
        fill="currentColor"
      />
    </svg>
  );
}

const cardBaseClasses =
  'absolute bg-card rounded-2xl shadow-xl shadow-black/20 border border-card-border will-change-transform';

interface FloatingCardProps {
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

function FloatingCard({ delay = 0, className, children }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -12, 0],
      }}
      transition={{
        opacity: { delay, duration: 0.6 },
        scale: { delay, duration: 0.6, type: 'spring', stiffness: 100, damping: 15 },
        y: {
          delay: delay + 0.6,
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      whileHover={{ scale: 1.05, y: -16 }}
      className={`${cardBaseClasses} ${className}`}
    >
      {children}
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
        <span className="text-sm font-medium text-neutral-100">Código Limpo</span>
      </div>
      <div className="space-y-2 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="text-purple-400">const</span>
          <span className="text-neutral-200">construirSoftwareIncrivel</span>
          <span className="text-neutral-500">=</span>
        </div>
        <div className="pl-4 text-green-400">{"// Vamos codar juntos"}</div>
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
      <div className="text-sm font-medium text-neutral-100 mb-3">Progresso de Hoje</div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-green-400" />
          <span className="text-sm text-neutral-300">Revisão de design</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-green-400" />
          <span className="text-sm text-neutral-300">Implementação de código</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-2 border-neutral-600" />
          <span className="text-sm text-neutral-500">Testes & QA</span>
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
        Trabalhamos com
      </div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center">
          <Github size={20} className="text-neutral-300" />
        </div>
        <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
          <CursorIcon size={20} className="text-white" />
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
        <span className="text-xs font-medium text-neutral-500">Nota rápida</span>
      </div>
      <p className="text-sm text-neutral-300 italic leading-relaxed">
        &quot;Código de qualidade não é despesa, é investimento.&quot;
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
