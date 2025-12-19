'use client';

import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ModernButtonProps extends Omit<HTMLMotionProps<'button'>, 'children' | 'className' | 'variant'> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export const ModernButton = forwardRef<HTMLButtonElement, ModernButtonProps>(
  ({ className, children, variant = 'primary', ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          'group relative inline-flex items-center justify-center',
          'px-8 py-3.5 text-base font-medium',
          'rounded-full cursor-pointer overflow-hidden select-none',
          'transition-all duration-300 ease-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
          variant === 'primary' && [
            'bg-white text-black',
            'hover:shadow-[0_8px_30px_rgba(255,255,255,0.4)]',
          ],
          variant === 'secondary' && [
            'bg-white/10 text-white backdrop-blur-sm',
            'border border-white/20',
            'hover:bg-white/20 hover:border-white/30',
          ],
          className
        )}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
        {...props}
      >
        {/* Hover shimmer effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ x: '-100%', opacity: 0 }}
          whileHover={{
            x: '100%',
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: "easeInOut"
            }
          }}
          style={{
            background: variant === 'primary'
              ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          }}
        />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </motion.button>
    );
  }
);

ModernButton.displayName = 'ModernButton';
