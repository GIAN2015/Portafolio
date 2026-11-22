// components/TechMarquee.tsx
import BrandIcon from "@/components/BrandIcon";

const items = [
  "Oracle NetSuite",
  "SolidWorks PDM",
  "Looker Studio",
  "Google Sheets",
  "Claude",
  "Three.js",
  "Next.js",
  "NestJS",
  "Laravel",
  "Vue.js",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Linux",
  "Git",
  "WordPress",
];

export default function TechMarquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="marquee flex w-max gap-3">
        {row.map((n, i) => (
          <div key={i} className="glass flex items-center gap-2.5 rounded-xl px-4 py-2.5">
            <BrandIcon name={n} size={22} />
            <span className="whitespace-nowrap text-sm text-slate-200">{n}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
