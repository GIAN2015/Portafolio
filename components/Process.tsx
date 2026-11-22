// components/Process.tsx
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";

const steps = [
  { n: "01", t: "Entender el proceso", d: "Converso con las áreas, mapeo cómo fluye la información y dónde se pierde tiempo.", icon: <path d="M11 4a7 7 0 105.3 11.6L20 19" strokeLinecap="round" /> },
  { n: "02", t: "Diseñar la solución", d: "Defino la arquitectura: qué sistemas se conectan, con qué datos y con qué seguridad.", icon: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><path d="M10 6.5h4.5a2 2 0 012 2V14" /></> },
  { n: "03", t: "Implementar e integrar", d: "Desarrollo, conecto los sistemas por API y automatizo, probando con datos reales.", icon: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" strokeLinecap="round" strokeLinejoin="round" /> },
  { n: "04", t: "Desplegar y acompañar", d: "Paso a producción, documento, capacito a los usuarios y doy soporte.", icon: <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /> },
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-28">
      <SectionTitle eyebrow="Cómo trabajo" title="De la necesidad al sistema en producción" />
      <div className="relative grid gap-5 md:grid-cols-4">
        <div className="absolute left-0 right-0 top-[34px] hidden h-px bg-gradient-to-r from-blue-500/0 via-cyan-400/60 to-violet-500/0 md:block" />
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 120}>
            <div className="glass glow-border group relative h-full rounded-2xl p-5 transition duration-300 hover:-translate-y-1.5">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-[0_8px_24px_-8px_rgba(34,211,238,0.8)] transition group-hover:rotate-6 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="white" strokeWidth="1.8">{s.icon}</svg>
                </span>
                <span className="text-3xl font-bold text-white/10 transition group-hover:text-cyan-300/30">{s.n}</span>
              </div>
              <p className="mt-4 font-semibold text-white">{s.t}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
