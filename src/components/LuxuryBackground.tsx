import React, { useEffect, useRef } from 'react';

export const LuxuryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Precision particles with soft luminous halo
    const particleCount = Math.min(Math.floor((width * height) / 28000), 55);
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      maxAlpha: number;
      pulse: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 1.4 + 0.6,
        alpha: Math.random() * 0.25 + 0.05,
        maxAlpha: Math.random() * 0.4 + 0.15,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let t = 0;

    const render = () => {
      t += 0.006;
      ctx.clearRect(0, 0, width, height);

      // 1. Deep Caustic Ambient Wave
      const waveGrad = ctx.createRadialGradient(
        width * 0.5 + Math.sin(t * 0.5) * 120,
        height * 0.35 + Math.cos(t * 0.4) * 80,
        40,
        width * 0.5,
        height * 0.4,
        width * 0.65
      );
      waveGrad.addColorStop(0, 'rgba(255, 255, 255, 0.035)');
      waveGrad.addColorStop(0.4, 'rgba(255, 255, 255, 0.012)');
      waveGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = waveGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Architectural Grid with Crosshairs
      const gridSize = 72;
      const startX = 0;
      const startY = 0;

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.018)';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = startX; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = startY; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Precision micro crosshairs (+) at every 2nd intersection
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      const arm = 3;
      for (let x = startX; x < width; x += gridSize * 2) {
        for (let y = startY; y < height; y += gridSize * 2) {
          ctx.beginPath();
          ctx.moveTo(x - arm, y);
          ctx.lineTo(x + arm, y);
          ctx.moveTo(x, y - arm);
          ctx.lineTo(x, y + arm);
          ctx.stroke();
        }
      }

      // 3. Subtle floating particles with proximity links
      const linkDist = 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Proximity glow
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const distToMouse = Math.sqrt(mdx * mdx + mdy * mdy);
        let boost = 0;
        if (distToMouse < 200) {
          boost = (1 - distToMouse / 200) * 0.35;
        }

        const currentAlpha = Math.min(
          p.maxAlpha + boost,
          p.alpha + Math.sin(t * 2 + p.pulse) * 0.08 + boost
        );

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none -z-10 h-full w-full"
        aria-hidden="true"
      />
      {/* Rich tactile micro-grain noise overlay */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 opacity-[0.025] mix-blend-screen bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
    </>
  );
};
