'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { ButtonProps } from '@/types';

const buttonVariants = {
  primary: 'bg-foreground text-background hover:bg-foreground/90',
  secondary: 'bg-neutral-800 text-foreground hover:bg-neutral-700',
  outline: 'border border-border bg-transparent hover:bg-neutral-800 text-foreground',
  ghost: 'bg-transparent hover:bg-neutral-800 text-foreground',
  accent: 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20',
};

const buttonSizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-base',
  lg: 'h-14 px-8 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'inline-flex items-center justify-center gap-2',
          'rounded-full font-medium',
          'transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          buttonVariants[variant],
          buttonSizes[size],
          (disabled || isLoading) && 'opacity-50 cursor-not-allowed',
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
