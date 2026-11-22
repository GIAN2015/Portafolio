import SectionTitle from "@/components/SectionTitle";
import Badge from "@/components/Badge";

export default function Talks() {
  return (
    <section>
      <SectionTitle eyebrow="Comunidad" title="Ponencias y talleres" subtitle="Compartiendo conocimiento y construyendo comunidad." />
      <div className="glass glow-border group grid overflow-hidden rounded-3xl md:grid-cols-2">
        <div className="relative min-h-[260px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/talks/chapitec-wordpress-elementor.jpg"
            alt="Ponencia de Gian en Chapitec"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent md:bg-gradient-to-r" />
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">
            <Badge>Chapitec</Badge>
            <Badge>Expositor</Badge>
            <Badge>Talleres</Badge>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-white">Ponente y organizador en la comunidad Chapitec</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {[
              "Ponencia práctica: sitios web con WordPress + Elementor",
              "Talleres de React, Next.js, Flutter y Google Cloud",
              "Ponente UNTELS: Modelado de Datos y JavaScript (2025)",
            ].map((x) => (
              <li key={x} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
