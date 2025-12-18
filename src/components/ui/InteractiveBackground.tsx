'use client';

import { useEffect, useRef, useState } from 'react';

const DOT_SPACING = 24;
const INFLUENCE_RADIUS = 120;
const MAX_SCALE = 4.5;

interface Dot {
  x: number;
  y: number;
  scale: number;
}

export function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dots, setDots] = useState<Dot[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Initialize dots based on viewport size
  useEffect(() => {
    const initDots = (): void => {
      const container = containerRef.current;
      if (!container) return;

      const width = window.innerWidth;
      const height = window.innerHeight;
      const newDots: Dot[] = [];

      for (let x = DOT_SPACING; x < width; x += DOT_SPACING) {
        for (let y = DOT_SPACING; y < height; y += DOT_SPACING) {
          newDots.push({ x, y, scale: 1 });
        }
      }

      setDots(newDots);
    };

    initDots();
    window.addEventListener('resize', initDots);
    return () => window.removeEventListener('resize', initDots);
  }, []);

  // Animate dots based on mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      setDots(prevDots =>
        prevDots.map(dot => {
          const dx = dot.x - mousePos.current.x;
          const dy = dot.y - mousePos.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Calculate scale based on distance (closer = larger)
          let scale = 1;
          if (distance < INFLUENCE_RADIUS) {
            const influence = 1 - distance / INFLUENCE_RADIUS;
            scale = 1 + influence * (MAX_SCALE - 1);
          }

          return { ...dot, scale };
        })
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Animated dots */}
      {dots.map((dot, index) => {
        const isInflated = dot.scale > 1;
        const opacity = isInflated ? 0.5 + (dot.scale - 1) / (MAX_SCALE - 1) * 0.5 : 0.3;

        return (
          <div
            key={`${dot.x}-${dot.y}-${index}`}
            className="absolute w-[3px] h-[3px] rounded-full transition-all duration-200 ease-out"
            style={{
              left: `${dot.x}px`,
              top: `${dot.y}px`,
              transform: `translate(-50%, -50%) scale(${dot.scale})`,
              backgroundColor: isInflated ? '#6544ab' : '#404040',
              opacity,
              boxShadow: isInflated ? `0 0 ${dot.scale * 3}px rgba(101, 68, 171, ${opacity})` : 'none',
            }}
          />
        );
      })}
    </div>
  );
}

