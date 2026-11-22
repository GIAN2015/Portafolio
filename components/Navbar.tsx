"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { label: "Proyectos", href: "#projects" },
  { label: "Demo 3D", href: "#demo" },
  { label: "Experiencia", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={
            "mt-3 flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 " +
            (scrolled ? "border border-white/10 bg-[#070d22]/90 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.9)]" : "border border-transparent")
          }
        >
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 text-sm font-bold text-white shadow-[0_6px_20px_-6px_rgba(34,211,238,0.8)]">
              GS
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">Gian Sinarahua</p>
              <p className="hidden text-xs text-slate-400 sm:block">Integración de Sistemas</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={isHome ? item.href : `/${item.href}`}
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/51967152992?text=Hola%20Gian%2C%20vi%20tu%20portafolio%20y%20quiero%20conversar."
            target="_blank"
            rel="noreferrer"
            className="btn-primary rounded-xl px-4 py-2 text-sm font-semibold text-white"
          >
            Contactar
          </a>
        </div>
      </div>
    </header>
  );
}
