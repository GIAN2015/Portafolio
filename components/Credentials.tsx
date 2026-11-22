import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";

type Cred = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  tags: string[];
  link: { href: string; label: string };
  level?: string;
  accent: string;
  contain?: boolean;
};

const creds: Cred[] = [
  {
    title: "GOVERNANCE Tech Sales Professional",
    issuer: "Dassault Systèmes · SOLIDWORKS",
    date: "Nov 2026 · válido hasta Nov 2028",
    image: "/credentials/solidworks-governance-professional.png",
    tags: ["SOLIDWORKS", "Gobernanza", "PDM"],
    level: "Professional",
    link: { href: "/certs/solidworks-governance-tech-sales-professional.pdf", label: "Ver certificado" },
    accent: "from-red-500/25",
    contain: true,
  },
  {
    title: "Technical Readiness Program",
    issuer: "Dassault Systèmes · SOLIDWORKS",
    date: "Nov 2026",
    image: "/credentials/solidworks-technical-specialist.png",
    tags: ["SOLIDWORKS", "Técnico"],
    level: "Specialist",
    link: { href: "/certs/solidworks-technical-readiness-specialist.pdf", label: "Ver certificado" },
    accent: "from-blue-500/25",
    contain: true,
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy · Cibertec",
    date: "Ene 2026",
    image: "/credentials/ccna-badge.png",
    tags: ["Cisco", "Redes"],
    link: { href: "/certs/ccna-itn.pdf", label: "Ver certificado" },
    accent: "from-cyan-500/25",
  },
  {
    title: "Publicación científica (Elsevier)",
    issuer: "Procedia Computer Science · Vol. 257 (2025)",
    date: "IWHICI 2025",
    image: "/credentials/publication.png",
    tags: ["Investigación", "Optimización"],
    link: { href: "https://www.sciencedirect.com/science/article/pii/S1877050925008932", label: "Ver publicación" },
    accent: "from-orange-500/25",
  },
];

export default function Credentials() {
  return (
    <section id="credentials" className="scroll-mt-28">
      <SectionTitle
        eyebrow="Credenciales"
        title="Certificaciones y publicación"
        subtitle="Certificaciones de SOLIDWORKS (Dassault Systèmes), redes con Cisco e investigación publicada en Elsevier."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {creds.map((c, i) => (
          <Reveal key={c.title} delay={(i % 2) * 120}>
            <a
              href={c.link.href}
              target="_blank"
              rel="noreferrer"
              className="glass glow-border group flex h-full flex-col overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1"
            >
              <div className={`relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br ${c.accent} via-[#0b1226] to-[#050816]`}>
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className={
                    (c.contain ? "object-contain p-5 drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)] " : "object-cover ") +
                    "transition duration-700 group-hover:scale-105"
                  }
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {c.level ? (
                  <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    ★ {c.level}
                  </span>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-white">{c.title}</h3>
                <p className="mt-1 text-sm text-cyan-300/90">{c.issuer}</p>
                <p className="mt-0.5 text-xs text-slate-500">{c.date}</p>
                <span className="mt-auto flex items-center gap-1 pt-4 text-sm font-medium text-slate-300 transition group-hover:gap-2 group-hover:text-white">
                  {c.link.label} <span aria-hidden>→</span>
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
