// components/About.tsx
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import BrandIcon from "@/components/BrandIcon";

export default function About() {
  return (
    <section id="about" className="scroll-mt-28">
      <SectionTitle eyebrow="Sobre mí" title="Ingeniero de sistemas que conecta piezas" />
      <div className="grid auto-rows-[minmax(140px,auto)] gap-4 md:grid-cols-4">
        <Reveal className="md:col-span-2 md:row-span-2">
          <div className="glass glow-border flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-blue-600/25 via-transparent to-transparent p-6">
            <p className="text-lg leading-relaxed text-slate-200">
              No me quedo solo en el código: me gusta entender cómo trabaja una empresa y
              <span className="text-cyan-300"> construir el sistema que lo resuelve de punta a punta</span>, desde el ERP hasta la pantalla en planta.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Oracle NetSuite", "SolidWorks PDM", "Looker Studio", "Claude", "Three.js"].map((n) => (
                <span key={n} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/30">
                  <BrandIcon name={n} size={22} />
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <Tile k="Base" v="Lima, Perú" sub="Presencial · híbrido · remoto" />
        </Reveal>
        <Reveal delay={150}>
          <Tile k="Formación" v="Ing. de Sistemas" sub="UNTELS · egreso 2026" />
        </Reveal>
        <Reveal delay={200}>
          <Tile k="Idiomas" v="Español · Inglés" sub="Nativo · intermedio" />
        </Reveal>
        <Reveal delay={250}>
          <div className="glass glow-border flex h-full flex-col justify-center rounded-3xl bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent p-5">
            <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Estado
            </p>
            <p className="mt-2 text-lg font-semibold text-white">Abierto a nuevas oportunidades</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Tile({ k, v, sub }: { k: string; v: string; sub: string }) {
  return (
    <div className="glass glow-border flex h-full flex-col justify-center rounded-3xl p-5">
      <p className="text-xs uppercase tracking-widest text-slate-500">{k}</p>
      <p className="mt-2 text-lg font-semibold text-white">{v}</p>
      <p className="mt-1 text-sm text-slate-400">{sub}</p>
    </div>
  );
}
