"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";

const TYPES: Array<Project["type"] | "Todos"> = [
  "Todos",
  "3D",
  "Integración",
  "IA",
  "Automatización",
  "Sistema",
  "Ecommerce",
  "Web",
  "App",
];

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof TYPES)[number]>("Todos");

  const filtered = useMemo(() => {
    if (active === "Todos") return projects;
    return projects.filter((p) => p.type === active);
  }, [active, projects]);

  return (
    <section id="projects" className="mt-14">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionTitle
          eyebrow="Portafolio"
          title="Proyectos seleccionados"
          subtitle="Casos reales: integraciones ERP, automatización, IA aplicada, sistemas internos y ecommerce. Entra a cada caso para ver problema, solución, arquitectura y resultados."
        />

        <div className="flex flex-wrap gap-2">
          {TYPES.map((t) => {
            const isActive = t === active;
            return (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={
                  isActive
                    ? "rounded-full border border-white/15 bg-white px-3 py-1 text-xs font-semibold text-black"
                    : "rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/80 hover:border-white/20"
                }
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
