import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import FlowDiagram from "@/components/FlowDiagram";

export default function Hero() {
  const featured = projects[0]; // caso destacado
  const waUrl = `https://wa.me/${profile.whatsapp.number}?text=${encodeURIComponent(
    profile.whatsapp.message
  )}`;

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
      {/* Glow suave */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* LEFT */}
        <div>
          <div className="flex flex-wrap gap-2">
            {["Oracle NetSuite", "APIs REST/SOAP", "Automatización", "IA Generativa"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Integro sistemas empresariales{" "}
            <span className="text-white/70">que sí se usan.</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70">
            Implemento e integro sistemas a la medida de cada negocio: ERP (Oracle
            NetSuite), CAD/PDM, servicios en la nube, dashboards e IA generativa.
            {" "}{profile.current}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
            >
              Ver proyectos
            </a>

            <a
              href={profile.links.cv}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80 hover:bg-white/[0.06]"
            >
              Descargar CV
            </a>

            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/80 hover:bg-white/[0.06]"
            >
              Contactar (WhatsApp)
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <InfoCard label="Enfoque" value="ERP + integraciones" />
            <InfoCard label="Experiencia" value="3 años" />
            <InfoCard label="Base" value="Lima, Perú" />
          </div>
        </div>

        {/* RIGHT (Featured project) */}
        <Link
          href={`/projects/${featured.slug}`}
          className="group rounded-3xl border border-white/10 bg-black/30 p-4 transition hover:border-white/20"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-2">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
                {featured.type}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70">
                {featured.year}
              </span>
            </div>
            <span className="text-xs text-white/60 group-hover:text-white">
              Ver caso →
            </span>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
            {featured.cover ? (
              <Image
                src={featured.cover}
                alt={featured.title}
                width={1200}
                height={700}
                className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                priority
              />
            ) : (
              <div className="flex h-[240px] w-full items-center bg-gradient-to-br from-blue-500/20 via-white/5 to-transparent p-5">
                {featured.architecture ? <FlowDiagram steps={featured.architecture} /> : null}
              </div>
            )}
          </div>

          <h3 className="mt-4 text-lg font-semibold text-white">
            {featured.title}
          </h3>
          <p className="mt-1 text-sm text-white/70">{featured.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {featured.stack.slice(0, 4).map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
              >
                {s}
              </span>
            ))}
          </div>
        </Link>
      </div>
    </section>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
      <p className="text-xs uppercase tracking-widest text-white/50">{label}</p>
      <p className="mt-1 text-sm font-semibold text-white/85">{value}</p>
    </div>
  );
}
