import { cn } from '@/lib/utils';
import type { ContainerProps } from '@/types';

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 select-none',
        className
      )}
    >
      {children}
    </div>
  );
}
