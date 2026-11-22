"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import type { Project } from "@/data/projects";
import FlowDiagram from "@/components/FlowDiagram";
import BrandIcon, { hasBrand } from "@/components/BrandIcon";

const accentMap = {
  blue: "from-blue-500/40",
  violet: "from-violet-500/40",
  emerald: "from-emerald-500/40",
  amber: "from-amber-500/40",
};

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const accent = accentMap[project.accent ?? "violet"];
  const ref = useRef<HTMLAnchorElement>(null);

  // leve inclinación 3D siguiendo el mouse
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 4}deg) rotateY(${x * 5}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  const icons = project.stack.filter(hasBrand).slice(0, 5);

  return (
    <Link
      ref={ref}
      href={`/projects/${project.slug}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={
        "glass glow-border group relative block h-full overflow-hidden rounded-3xl transition-transform duration-300 ease-out will-change-transform " +
        (featured ? "md:grid md:grid-cols-[1.5fr_1fr]" : "")
      }
    >
      {/* brillo que sigue al mouse */}
      <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(400px_circle_at_var(--mx)_var(--my),rgba(59,130,246,0.15),transparent_60%)]" />

      <div className={"relative w-full overflow-hidden " + (featured ? "aspect-[12/7]" : "h-52")}>
        {project.cover ? (
          <Image
            src={project.cover}
            alt={project.title}
            unoptimized={project.cover.endsWith(".svg")}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.06]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full w-full items-center bg-gradient-to-br from-white/10 to-transparent px-4 pt-10">
            {project.architecture ? <FlowDiagram steps={project.architecture} compact /> : null}
          </div>
        )}
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${accent} via-transparent to-transparent opacity-60`} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b1226] to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full border border-white/20 bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            {project.type}
          </span>
          <span className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs text-white/75 backdrop-blur">
            {project.year}
          </span>
        </div>
      </div>

      <div className={"relative p-5 " + (featured ? "md:flex md:flex-col md:justify-center md:p-8" : "")}>
        {featured ? (
          <span className="mb-3 w-fit rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
            ★ Proyecto destacado
          </span>
        ) : null}
        <p className="text-xs font-medium uppercase tracking-wider text-cyan-300/80">{project.company ?? "Proyecto"}</p>
        <h3 className={"mt-1.5 font-semibold leading-snug text-white " + (featured ? "text-2xl" : "text-lg")}>{project.title}</h3>
        {featured ? <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p> : null}

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {icons.map((s) => (
              <span key={s} title={s} className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                <BrandIcon name={s} size={17} />
              </span>
            ))}
          </div>
          <span className="flex items-center gap-1 text-sm font-medium text-slate-300 transition group-hover:gap-2 group-hover:text-white">
            Ver caso <span aria-hidden>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
