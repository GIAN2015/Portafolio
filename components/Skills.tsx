// components/Skills.tsx
import SectionTitle from "@/components/SectionTitle";
import BrandIcon from "@/components/BrandIcon";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

const groups = [
  { label: "ERP / CRM", items: profile.skills.erp, grad: "from-red-500/20" },
  { label: "Integración, automatización e IA", items: profile.skills.integrations, grad: "from-cyan-500/20" },
  { label: "Desarrollo y bases de datos", items: profile.skills.stack, grad: "from-blue-500/20" },
  { label: "BI, DevOps y herramientas", items: profile.skills.tools, grad: "from-violet-500/20" },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-28">
      <SectionTitle eyebrow="Skills" title="Stack y herramientas" />
      <div className="grid gap-5 md:grid-cols-2">
        {groups.map((g, i) => (
          <Reveal key={g.label} delay={(i % 2) * 120}>
            <div className={`glass glow-border h-full rounded-2xl bg-gradient-to-br ${g.grad} via-transparent to-transparent p-5`}>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-300">{g.label}</p>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {g.items.map((s) => (
                  <div key={s} className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/25 px-3 py-2 transition hover:border-cyan-400/40 hover:bg-white/[0.05]">
                    <BrandIcon name={s} size={18} />
                    <span className="truncate text-xs text-slate-200">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
