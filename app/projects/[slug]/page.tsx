// app/projects/[slug]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/projects";
import FlowDiagram from "@/components/FlowDiagram";
import Viewer3DLazy from "@/components/Viewer3DLazy";
import BrandIcon from "@/components/BrandIcon";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: `${p.title} | Gian Sinarahua`, description: p.description } : {};
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx < 0) return notFound();
  const project = projects[idx];
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="space-y-14">
      <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:gap-3 hover:text-white">
        ← Volver a proyectos
      </Link>

      {/* Cabecera */}
      <header className="animate-fadeUp">
        <div className="flex flex-wrap items-center gap-2">
          <span className="btn-primary rounded-full px-3 py-1 text-xs font-semibold text-white">{project.type}</span>
          <span className="glass rounded-full px-3 py-1 text-xs text-slate-300">{project.year}</span>
          <span className="glass rounded-full px-3 py-1 text-xs text-cyan-300">{project.company ?? "Proyecto"}</span>
        </div>
        <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">{project.title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="glass flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-200">
              <BrandIcon name={s} size={18} /> {s}
            </span>
          ))}
        </div>

        {project.links.demo || project.links.repo ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.demo ? (
              <a href={project.links.demo} target="_blank" rel="noreferrer" className="btn-primary rounded-xl px-5 py-3 text-sm font-semibold text-white">
                Ver sitio en vivo
              </a>
            ) : null}
            {project.links.repo ? (
              <a href={project.links.repo} target="_blank" rel="noreferrer" className="glass rounded-xl px-5 py-3 text-sm font-semibold text-white">
                Ver repositorio
              </a>
            ) : null}
          </div>
        ) : null}
      </header>

      {/* Imagen principal */}
      {project.cover ? (
        <Reveal>
          <div className="glass glow-border group relative aspect-[12/7] overflow-hidden rounded-3xl">
            <Image
              src={project.cover}
              alt={project.title}
              unoptimized={project.cover.endsWith(".svg")}
              fill
              priority
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 1150px"
            />
          </div>
        </Reveal>
      ) : null}

      {/* Resultados */}
      <Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {project.highlights.map((h, i) => (
            <div key={h} className="glass glow-border rounded-2xl p-5">
              <span
                className={
                  "flex h-10 w-10 items-center justify-center rounded-xl text-white " +
                  ["bg-gradient-to-br from-blue-500 to-cyan-400", "bg-gradient-to-br from-violet-500 to-blue-500", "bg-gradient-to-br from-emerald-500 to-cyan-500"][i % 3]
                }
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="mt-4 text-sm font-medium leading-snug text-white">{h}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {project.demo3d ? (
        <Reveal>
          <section>
            <SectionTitle
              eyebrow="Demo interactiva"
              title="Pruébalo: escanea una etiqueta"
              subtitle="Recreación del visor con un ensamble de ejemplo modelado para el portafolio (no son piezas del cliente)."
            />
            <div className="glass rounded-3xl p-3 sm:p-4">
              <Viewer3DLazy />
            </div>
          </section>
        </Reveal>
      ) : null}

      {project.architecture ? (
        <Reveal>
          <section>
            <SectionTitle eyebrow="Arquitectura" title="Cómo fluye la solución" />
            <FlowDiagram steps={project.architecture} />
            {project.confidential ? (
              <p className="mt-5 text-xs text-slate-500">
                Proyecto realizado para una empresa: por confidencialidad no se publica código ni datos reales. Las imágenes usan datos de ejemplo.
              </p>
            ) : null}
          </section>
        </Reveal>
      ) : null}

      {/* Problema / Solución */}
      <Reveal>
        <section className="grid gap-5 md:grid-cols-2">
          <div className="glass rounded-3xl border-l-4 !border-l-rose-400/70 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-rose-300">El problema</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.problem ?? "—"}</p>
          </div>
          <div className="glass rounded-3xl border-l-4 !border-l-emerald-400/70 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">La solución</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.solution ?? "—"}</p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <div className="glass rounded-3xl p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Mi rol</p>
          <p className="mt-2 text-base text-white">{project.role}</p>
        </div>
      </Reveal>

      {/* Siguiente proyecto */}
      <Link href={`/projects/${next.slug}`} className="glass glow-border group flex items-center justify-between gap-4 rounded-3xl p-6 transition hover:-translate-y-1">
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-500">Siguiente proyecto</p>
          <p className="mt-1 text-lg font-semibold text-white">{next.title}</p>
        </div>
        <span className="text-2xl text-cyan-300 transition group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
}
