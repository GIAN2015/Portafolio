"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";

const TYPES: Array<Project["type"] | "Todos"> = ["Todos", "3D", "Integración", "IA", "Automatización", "Sistema", "Ecommerce", "Web", "App"];

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof TYPES)[number]>("Todos");

  const filtered = useMemo(
    () => (active === "Todos" ? projects : projects.filter((p) => p.type === active)),
    [active, projects]
  );

  return (
    <section id="projects" className="scroll-mt-28">
      <SectionTitle
        eyebrow="Portafolio"
        title="Proyectos que resuelven problemas reales"
        subtitle="Integraciones ERP, automatización, IA aplicada, visualización 3D y sistemas a medida."
      />

      <div className="mb-8 flex flex-wrap gap-2">
        {TYPES.map((t) => {
          const isActive = t === active;
          const count = t === "Todos" ? projects.length : projects.filter((p) => p.type === t).length;
          if (!count) return null;
          return (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={
                "rounded-full px-4 py-1.5 text-sm transition " +
                (isActive
                  ? "btn-primary font-semibold text-white"
                  : "glass text-slate-300 hover:border-blue-400/40 hover:text-white")
              }
            >
              {t} <span className={isActive ? "text-white/80" : "text-slate-500"}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2" key={active}>
        {filtered.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 120} className={i === 0 && active === "Todos" ? "md:col-span-2" : ""}>
            <ProjectCard project={p} featured={i === 0 && active === "Todos"} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
