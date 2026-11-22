import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import Talks from "@/components/Talks";
import Credentials from "@/components/Credentials";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Capabilities from "@/components/Capabilities";
import Viewer3DLazy from "@/components/Viewer3DLazy";
import TechMarquee from "@/components/TechMarquee";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  const waUrl = `https://wa.me/${profile.whatsapp.number}?text=${encodeURIComponent(profile.whatsapp.message)}`;

  return (
    <div className="space-y-24 sm:space-y-28">
      <div className="space-y-12">
        <Hero />
        <TechMarquee />
      </div>

      <Reveal>
        <Capabilities />
      </Reveal>

      <Reveal>
        <section id="demo" className="scroll-mt-28">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle
              eyebrow="Demo en vivo"
              title="Visor 3D de piezas CAD"
              subtitle="Escanea una etiqueta y mira la pieza como en los televisores de planta. Gira, explosiona o toca una pieza."
            />
            <a href="/projects/visor-3d-cad-planta" className="mb-8 shrink-0 text-sm font-medium text-cyan-300 hover:text-cyan-200">
              Ver el caso completo →
            </a>
          </div>
          <div className="glass rounded-3xl p-3 sm:p-4">
            <Viewer3DLazy compact />
          </div>
        </section>
      </Reveal>

      <ProjectsGrid projects={projects} />

      <Experience />

      <Skills />

      <Reveal>
        <Credentials />
      </Reveal>

      <Reveal>
        <Talks />
      </Reveal>

      <Reveal>
        <section
          id="contact"
          className="relative scroll-mt-28 overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-600/30 via-[#0b1226] to-cyan-500/20 p-8 text-center sm:p-14"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Contacto</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Necesitas integrar sistemas o automatizar procesos?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">Conversemos sobre tu ERP, tus datos o tu planta.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={waUrl} target="_blank" rel="noreferrer" className="btn-primary rounded-xl px-6 py-3 text-sm font-semibold text-white">
              Escribirme por WhatsApp
            </a>
            <a href={`mailto:${profile.email}`} className="glass rounded-xl px-6 py-3 text-sm font-semibold text-white hover:border-blue-400/50">
              {profile.email}
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="glass rounded-xl px-6 py-3 text-sm font-semibold text-white hover:border-blue-400/50">
              LinkedIn
            </a>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
