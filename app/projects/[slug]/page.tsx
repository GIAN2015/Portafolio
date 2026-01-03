// app/projects/[slug]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Badge from "@/components/Badge";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <Link href="/#projects" className="text-sm text-white/70 hover:text-white">
          ← Volver
        </Link>

        <div className="flex items-center gap-2">
          <Badge>{project.type}</Badge>
          <Badge className="text-white/70">{project.year}</Badge>
        </div>
      </div>

      <header className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
        <div className="relative h-56 w-full">
          {project.cover ? (
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority={false}
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-white/10 to-transparent" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-5 left-6">
            <p className="text-sm text-white/70">{project.company ?? "Proyecto"}</p>
            <h1 className="mt-1 text-3xl font-semibold text-white sm:text-4xl">
              {project.title}
            </h1>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <p className="max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
              >
                Ver demo
              </a>
            ) : null}
            {project.links.repo ? (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-black/20 px-5 py-3 text-sm font-semibold text-white hover:border-white/25"
              >
                Ver repositorio
              </a>
            ) : null}
          </div>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <SectionTitle eyebrow="Contexto" title="Problema" />
          <p className="text-sm leading-relaxed text-white/70">
            {project.problem ?? "—"}
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <SectionTitle eyebrow="Ejecución" title="Solución" />
          <p className="text-sm leading-relaxed text-white/70">
            {project.solution ?? "—"}
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <SectionTitle eyebrow="Mi aporte" title="Rol y resultados" />
        <p className="text-sm text-white/85">{project.role}</p>

        <div className="mt-6">
          <p className="text-xs uppercase tracking-widest text-white/60">Highlights</p>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="rounded-2xl border border-white/10 bg-black/20 p-3"
              >
                • {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <p className="text-xs uppercase tracking-widest text-white/60">Tags</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Badge key={t} className="text-white/70">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
