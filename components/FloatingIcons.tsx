// components/FloatingIcons.tsx
import BrandIcon from "@/components/BrandIcon";

// posiciones fijas (evita problemas de hidratación)
const items = [
  { n: "Oracle NetSuite", l: "6%", t: "16%", d: "0s", s: 30 },
  { n: "SolidWorks PDM", l: "88%", t: "12%", d: "2s", s: 30 },
  { n: "Looker Studio", l: "12%", t: "62%", d: "4s", s: 28 },
  { n: "Claude", l: "92%", t: "48%", d: "1s", s: 28 },
  { n: "Three.js", l: "48%", t: "88%", d: "3s", s: 26 },
  { n: "Google Sheets", l: "78%", t: "80%", d: "5s", s: 26 },
  { n: "PostgreSQL", l: "28%", t: "30%", d: "6s", s: 24 },
  { n: "Docker", l: "66%", t: "26%", d: "2.5s", s: 26 },
  { n: "Next.js", l: "4%", t: "88%", d: "1.5s", s: 24 },
  { n: "Laravel", l: "58%", t: "58%", d: "3.5s", s: 24 },
  { n: "Git", l: "38%", t: "8%", d: "4.5s", s: 22 },
  { n: "Linux", l: "96%", t: "90%", d: "0.5s", s: 22 },
];

export default function FloatingIcons() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 hidden md:block">
      {items.map((it) => (
        <div
          key={it.n}
          className="drift absolute rounded-2xl border border-white/[0.06] bg-white/[0.025] p-2.5 opacity-40 backdrop-blur-sm"
          style={{ left: it.l, top: it.t, animationDelay: it.d }}
        >
          <BrandIcon name={it.n} size={it.s} />
        </div>
      ))}
    </div>
  );
}
