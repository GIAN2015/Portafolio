import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import IntegrationOrbit from "@/components/IntegrationOrbit";
import CountUp from "@/components/CountUp";
import Typewriter from "@/components/Typewriter";

export default function Hero() {
  const waUrl = `https://wa.me/${profile.whatsapp.number}?text=${encodeURIComponent(profile.whatsapp.message)}`;

  const stats = [
    { value: 3, suffix: "+", label: "años de experiencia" },
    { value: projects.length, suffix: "", label: "proyectos y casos" },
    { value: 4, suffix: "", label: "sistemas integrados" },
    { value: 1, suffix: "", label: "publicación científica" },
  ];

  return (
    <section className="relative pt-4 md:pt-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        {/* izquierda */}
        <div className="animate-fadeUp">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Disponible para nuevos retos · Lima, Perú
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Integro sistemas
            <br />
            empresariales <span className="gradient-text">que sí se usan.</span>
          </h1>

          <p className="mt-5 text-lg text-slate-300">
            <Typewriter words={["Integración de sistemas", "Oracle NetSuite ERP / CRM", "Automatización de procesos", "IA aplicada a la empresa", "CAD / PDM y visualización 3D"]} />
          </p>

          <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-300">
            ERP, CAD/PDM, nube, dashboards e IA trabajando juntos. Soy{" "}
            <span className="font-semibold text-white">Gian Sinarahua</span>, analista de sistemas especializado en
            Oracle NetSuite e integraciones.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary rounded-xl px-5 py-3 text-sm font-semibold text-white">
              Ver proyectos
            </a>
            <a
              href={profile.links.cv}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-xl px-5 py-3 text-sm font-semibold text-white transition hover:border-blue-400/50"
            >
              Descargar CV
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-xl px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/50"
            >
              WhatsApp
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-4">
                <p className="text-3xl font-bold text-white">
                  <CountUp to={s.value} />
                  <span className="text-cyan-300">{s.suffix}</span>
                </p>
                <p className="mt-1 text-xs leading-snug text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* derecha */}
        <div className="animate-fadeUp anim-delay-200">
          <IntegrationOrbit />
        </div>
      </div>
    </section>
  );
}
