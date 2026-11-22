// components/Experience.tsx
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

const colors = ["from-blue-500 to-cyan-400", "from-violet-500 to-blue-500", "from-amber-400 to-orange-500"];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28">
      <SectionTitle eyebrow="Trayectoria" title="Experiencia profesional" subtitle="Del desarrollo full-stack a la integración de sistemas empresariales." />
      <div className="relative">
        <div className="absolute bottom-2 left-[19px] top-2 w-px bg-gradient-to-b from-blue-500 via-cyan-400/50 to-transparent sm:left-[23px]" />
        <ol className="space-y-6">
          {profile.experience.map((e, i) => (
            <li key={e.company}>
              <Reveal delay={i * 100} className="relative pl-14 sm:pl-16">
                <span
                  className={`absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${colors[i % colors.length]} text-sm font-bold text-white shadow-[0_8px_24px_-8px_rgba(59,130,246,0.8)] sm:h-12 sm:w-12`}
                >
                  {e.company.replace(/[^A-ZÁÉÍÓÚ]/g, "").slice(0, 2) || e.company.slice(0, 2)}
                </span>
                <div className="glass glow-border rounded-2xl p-5 transition hover:-translate-y-0.5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-white">{e.role}</p>
                      <p className="text-sm text-cyan-300/90">{e.company}</p>
                    </div>
                    <span className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">{e.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
