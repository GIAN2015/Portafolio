// components/Capabilities.tsx
import SectionTitle from "@/components/SectionTitle";

const items = [
  {
    title: "ERP a medida",
    text: "Desarrollo y personalización de Oracle NetSuite: Suitelets, RESTlets, SuiteQL y flujos.",
    color: "from-blue-500/30",
    icon: (
      <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
    ),
  },
  {
    title: "Integraciones",
    text: "APIs REST/SOAP entre ERP, CAD/PDM, Google y servicios en la nube.",
    color: "from-emerald-500/30",
    icon: (
      <>
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M8.6 10.6l6.8-3.2M8.6 13.4l6.8 3.2" />
      </>
    ),
  },
  {
    title: "Automatización e IA",
    text: "Datos que fluyen solos a dashboards e IA generativa conectada al ERP.",
    color: "from-violet-500/30",
    icon: <path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z" strokeLinejoin="round" />,
  },
  {
    title: "CAD y 3D en planta",
    text: "Modelos de SolidWorks convertidos a 3D web y mostrados al escanear una etiqueta.",
    color: "from-amber-500/30",
    icon: (
      <>
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" strokeLinejoin="round" />
        <path d="M4 7.5l8 4.5 8-4.5M12 12v9" strokeLinejoin="round" />
      </>
    ),
  },
];

export default function Capabilities() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
      <SectionTitle
        eyebrow="Lo que hago"
        title="Analizo el proceso, diseño la solución e integro los sistemas"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.title}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${it.color} via-transparent to-transparent p-5 transition hover:-translate-y-1 hover:border-white/25`}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-black/40">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="white" strokeWidth="1.6">
                {it.icon}
              </svg>
            </div>
            <p className="mt-4 font-semibold text-white">{it.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-white/65">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
