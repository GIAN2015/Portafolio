import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import FlowDiagram from "@/components/FlowDiagram";

const accentMap = {
  blue: "from-blue-500/25 via-blue-500/0 to-transparent",
  violet: "from-violet-500/25 via-violet-500/0 to-transparent",
  emerald: "from-emerald-500/25 via-emerald-500/0 to-transparent",
  amber: "from-amber-500/25 via-amber-500/0 to-transparent",
};

export default function ProjectCard({ project }: { project: Project }) {
  const accent = accentMap[project.accent ?? "violet"];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.06)] transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
    >
      <div className="relative h-44 w-full">
        {project.cover ? (
          <Image
            src={project.cover}
            alt={project.title}
            unoptimized={project.cover.endsWith(".svg")}
            fill
            className="object-cover opacity-95 transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full w-full items-center bg-gradient-to-br from-white/10 to-transparent px-4 pt-10">
            {project.architecture ? <FlowDiagram steps={project.architecture} compact /> : null}
          </div>
        )}

        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${accent}`} />
        {project.cover ? (
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        ) : null}

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/90 backdrop-blur">
            {project.type}
          </span>
          <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70 backdrop-blur">
            {project.year}
          </span>
        </div>
      </div>

      <div className="p-5">
        <p className="text-xs text-white/60">{project.company ?? "Proyecto"}</p>
        <h3 className="mt-1 text-lg font-semibold text-white">{project.title}</h3>

        <p className="mt-2 text-sm leading-relaxed text-white/70 max-h-[3.2rem] overflow-hidden">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/75"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-white/55">
            {project.tags.slice(0, 3).join(" · ")}
          </span>
          <span className="text-sm font-medium text-white/80 group-hover:text-white">
            Ver caso →
          </span>
        </div>
      </div>
    </Link>
  );
}
