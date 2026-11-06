import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  color: string;
}

export const WaterCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isTouch, setIsTouch] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const mousePos = useRef({ x: -100, y: -100 });
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    // Check if device is touch primary
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = [
      'rgba(46, 196, 182,',   // Cyan brand
      'rgba(0, 240, 255,',    // Neon cyan
      'rgba(56, 189, 248,',   // Sky blue
      'rgba(255, 255, 255,',  // Spray foam white
    ];

    const addParticles = (x: number, y: number, count = 2) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.5 + 0.5;
        const baseColor = colors[Math.floor(Math.random() * colors.length)];
        particles.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.2, // slight upward float
          size: Math.random() * 4 + 2,
          alpha: Math.random() * 0.6 + 0.3,
          decay: Math.random() * 0.02 + 0.015,
          color: baseColor,
        });
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Add spray particles on move
      addParticles(e.clientX, e.clientY, 2);

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.size *= 0.98;
        p.alpha -= p.decay;

        if (p.alpha <= 0 || p.size < 0.5) {
          particles.current.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        ctx.shadowColor = 'rgba(46, 196, 182, 0.5)';
        ctx.shadowBlur = 6;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-50 mix-blend-screen"
        style={{ width: '100vw', height: '100vh' }}
      />
      {/* Outer subtle fluid ring */}
      <div
        ref={cursorDotRef}
        className={`pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-150 ease-out will-change-transform ${
          isHovered
            ? 'w-12 h-12 rounded-full border border-cyan-400/80 bg-cyan-400/15 backdrop-invert-[0.05] shadow-[0_0_20px_rgba(46,196,182,0.6)]'
            : 'w-4 h-4 rounded-full border border-cyan-300/40 bg-white/30 shadow-[0_0_10px_rgba(0,240,255,0.4)]'
        }`}
      />
    </>
  );
};
