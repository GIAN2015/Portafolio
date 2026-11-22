"use client";

import { useEffect, useRef } from "react";

/**
 * Fondo animado: nodos conectados (idea de "sistemas integrados").
 * Ligero: canvas 2D, se pausa con la pestaña oculta y respeta prefers-reduced-motion.
 */
export default function NetworkBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    type P = { x: number; y: number; vx: number; vy: number; r: number; c: string };
    let pts: P[] = [];
    const colors = ["96,165,250", "34,211,238", "167,139,250"];
    const mouse = { x: -9999, y: -9999 };

    const init = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(90, (w * h) / 16000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
        c: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const max = 130;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < max) {
            ctx.strokeStyle = `rgba(${a.c},${0.16 * (1 - d / max)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (md < 180) {
          ctx.strokeStyle = `rgba(34,211,238,${0.35 * (1 - md / 180)})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
        ctx.fillStyle = `rgba(${a.c},0.75)`;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (document.hidden) return;
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;
      }
      draw();
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };

    init();
    if (reduce) draw();
    else tick();
    window.addEventListener("resize", init);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* auroras */}
      <div className="aurora absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-blue-600/25 blur-[120px]" />
      <div className="aurora absolute -right-40 top-1/3 h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-[120px] [animation-delay:-6s]" />
      <div className="aurora absolute bottom-[-200px] left-1/3 h-[520px] w-[620px] rounded-full bg-violet-600/20 blur-[130px] [animation-delay:-12s]" />
      {/* rejilla sutil */}
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(148,163,184,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.5)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <canvas ref={ref} className="absolute inset-0" />
    </div>
  );
}
