import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import SectionTitle from "@/components/SectionTitle";
import Badge from "@/components/Badge";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import Talks from "@/components/Talks";
import Credentials from "@/components/Credentials";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Capabilities from "@/components/Capabilities";
import Viewer3DLazy from "@/components/Viewer3DLazy";
export default function HomePage() {
  const waUrl = `https://wa.me/${profile.whatsapp.number}?text=${encodeURIComponent(
    profile.whatsapp.message
  )}`;
  return (
    <div className="space-y-14">
      <div className="animate-fadeUp">
        <Hero />
      </div>
      <Capabilities />

      <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Demo en vivo"
            title="Visor 3D de piezas CAD"
            subtitle="Escanea una etiqueta y mira cómo aparece la pieza, igual que en los televisores de planta. Gira, explosiona el ensamble o toca una pieza."
          />
          <a href="/projects/visor-3d-cad-planta" className="mb-6 shrink-0 text-sm font-medium text-white/80 hover:text-white">
            Ver el caso completo →
          </a>
        </div>
        <Viewer3DLazy compact />
      </section>

      <div className="animate-fadeUp anim-delay-200">
        <ProjectsGrid projects={projects} />
      </div>
      <Experience />
      <Skills />
      <div className="animate-fadeUp anim-delay-300">
        <Credentials />
      </div>
      <TechStack />
      <div className="animate-fadeUp anim-delay-500">
        <Talks />
      </div>

      <div className="animate-fadeUp anim-delay-500">
        <section
          id="contact"
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
        >
          <SectionTitle
            eyebrow="Contacto"
            title="Hablemos"
            subtitle="¿Buscas a alguien para integrar sistemas, automatizar procesos o desarrollar sobre tu ERP? Escríbeme."
          />

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
            >
              Escribirme por WhatsApp
            </a>
            <a
              href={profile.links.cv}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 bg-black/20 px-5 py-3 text-sm font-semibold text-white hover:border-white/25"
            >
              Descargar CV
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/15 bg-black/20 px-5 py-3 text-sm font-semibold text-white hover:border-white/25"
            >
              LinkedIn
            </a>
          </div>

          <div className="mt-6 text-sm text-white/70">
            <p>{profile.email}</p>
            <p>{profile.phone}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
