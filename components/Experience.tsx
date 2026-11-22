// components/Experience.tsx
import SectionTitle from "@/components/SectionTitle";
import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <section
      id="experience"
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
    >
      <SectionTitle
        eyebrow="Trayectoria"
        title="Experiencia profesional"
        subtitle="Del desarrollo full-stack a la integración de sistemas empresariales."
      />

      <ol className="relative space-y-6 border-l border-white/10 pl-6">
        {profile.experience.map((e) => (
          <li key={e.company} className="relative">
            <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border border-white/40 bg-white/80" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <p className="text-base font-semibold text-white">{e.role}</p>
                <p className="text-sm text-white/65">{e.company}</p>
              </div>
              <p className="text-xs uppercase tracking-widest text-white/50">{e.period}</p>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-white/75">
              {e.points.map((pt) => (
                <li key={pt}>• {pt}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
