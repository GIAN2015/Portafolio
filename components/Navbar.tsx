"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-black/25">
          {/* Left */}
          <Link href="/" className="flex items-center gap-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-white">
              G
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">Gian Carlos Sinarahua Cárdenas</p>
              <p className="text-xs text-white/60">Integración de Sistemas · Lima, Perú</p>
            </div>
          </Link>

          {/* Center */}
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={isHome ? item.href : `/${item.href}`}
                className="rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            <span className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70 sm:inline">
              Disponible
            </span>

            <a
              href="mailto:giansica29@gmail.com"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              Email
            </a>

            <a
              href="https://wa.me/51967152992?text=Hola%20Gian%2C%20vi%20tu%20portafolio%20y%20quiero%20hablar%20sobre%20un%20proyecto."
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
