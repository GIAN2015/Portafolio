import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import SectionTitle from "@/components/SectionTitle";
import Badge from "@/components/Badge";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import Talks from "@/components/Talks";
import Credentials from "@/components/Credentials";
import TechStack from "@/components/TechStack";
export default function HomePage() {
  const waUrl = `https://wa.me/${profile.whatsapp.number}?text=${encodeURIComponent(
    profile.whatsapp.message
  )}`;
  return (
    <div className="space-y-14">
      <div className="animate-fadeUp">
        <Hero />
      </div>
      <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
        <SectionTitle
          eyebrow="Resumen"
          title="Lo que hago"
          subtitle="Trabajo proyectos reales de negocio: desde webs corporativas hasta sistemas internos y ecommerce con integraciones."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {profile.highlights.slice(0, 6).map((h) => (
            <div
              key={h}
              className="rounded-2xl border border-white/10 bg-black/20 p-4"
            >
              <p className="text-sm text-white/80">{h}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="animate-fadeUp anim-delay-200">
        <ProjectsGrid projects={projects} />
      </div>
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
            subtitle="Si necesitas un sistema, ecommerce o una web corporativa, te respondo rápido."
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
              href="#projects"
              className="rounded-2xl border border-white/15 bg-black/20 px-5 py-3 text-sm font-semibold text-white hover:border-white/25"
            >
              Ver proyectos
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
