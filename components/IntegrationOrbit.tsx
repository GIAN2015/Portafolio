// components/IntegrationOrbit.tsx
import BrandIcon from "@/components/BrandIcon";
import { profile } from "@/data/profile";

const nodes = [
  { name: "Oracle NetSuite", label: "ERP / CRM", angle: -90 },
  { name: "SolidWorks PDM", label: "CAD / PDM", angle: -30 },
  { name: "Looker Studio", label: "Dashboards", angle: 30 },
  { name: "Claude", label: "IA generativa", angle: 90 },
  { name: "Google Sheets", label: "Datos", angle: 150 },
  { name: "Three.js", label: "Visor 3D", angle: 210 },
];

const C = 200; // centro del viewBox 400x400
const R = 150;

export default function IntegrationOrbit() {
  const pos = nodes.map((n) => {
    const a = (n.angle * Math.PI) / 180;
    return { ...n, x: C + R * Math.cos(a), y: C + R * Math.sin(a) };
  });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      {/* líneas y paquetes de datos */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="hubGlow">
            <stop offset="0" stopColor="#3b82f6" stopOpacity="0.55" />
            <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="line" x1="0" x2="1">
            <stop offset="0" stopColor="#60a5fa" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <circle cx={C} cy={C} r={R} fill="none" stroke="rgba(148,163,184,0.15)" strokeDasharray="2 6" />
        <circle cx={C} cy={C} r={95} fill="url(#hubGlow)" />
        {pos.map((p, i) => (
          <g key={p.name}>
            <path id={`l${i}`} d={`M${C} ${C} L${p.x} ${p.y}`} stroke="url(#line)" strokeOpacity="0.45" strokeWidth="1.5" className="flow-dash" fill="none" />
            <circle r="3.5" fill="#22d3ee">
              <animateMotion dur={`${2.2 + (i % 3) * 0.5}s`} repeatCount="indefinite" begin={`${i * 0.35}s`} keyPoints={i % 2 ? "1;0" : "0;1"} keyTimes="0;1" calcMode="linear">
                <mpath href={`#l${i}`} />
              </animateMotion>
            </circle>
          </g>
        ))}
      </svg>

      {/* hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="pulse-ring absolute inset-0 rounded-full border border-cyan-400/50" />
        <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 shadow-[0_0_60px_-5px_rgba(59,130,246,0.8)] sm:h-28 sm:w-28">
          {profile.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
          ) : (
            <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl">GS</span>
          )}
        </div>
      </div>

      {/* nodos */}
      {pos.map((p, i) => (
        <div
          key={p.name}
          className="float-y absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${(p.x / 400) * 100}%`, top: `${(p.y / 400) * 100}%`, animationDelay: `${i * 0.6}s` }}
        >
          <div className="glass flex flex-col items-center gap-1 rounded-2xl px-3 py-2 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)]">
            <BrandIcon name={p.name} size={26} />
            <span className="whitespace-nowrap text-[10px] font-medium text-slate-300 sm:text-[11px]">{p.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
