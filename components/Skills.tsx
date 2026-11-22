// components/Skills.tsx
import SectionTitle from "@/components/SectionTitle";
import { profile } from "@/data/profile";

const groups = [
  { label: "ERP / CRM", items: profile.skills.erp },
  { label: "Integración, automatización e IA", items: profile.skills.integrations },
  { label: "Desarrollo y bases de datos", items: profile.skills.stack },
  { label: "BI, DevOps y herramientas", items: profile.skills.tools },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
    >
      <SectionTitle eyebrow="Skills" title="Habilidades técnicas" />
      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((g) => (
          <div key={g.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-widest text-white/55">{g.label}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
