"use client";

import { useEffect, useRef } from "react";

/** Barra de progreso de lectura + halo de luz que sigue al cursor. */
export default function ScrollFx() {
  const bar = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    const onMove = (e: PointerEvent) => {
      if (glow.current) glow.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] h-[3px]">
        <div ref={bar} className="h-full origin-left bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500" style={{ transform: "scaleX(0)" }} />
      </div>
      <div
        ref={glow}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 -z-10 hidden h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_65%)] transition-transform duration-300 ease-out md:block"
      />
    </>
  );
}
