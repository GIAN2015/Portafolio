// components/BrandIcon.tsx
import {
  siClaude,
  siDassaultsystemes,
  siDocker,
  siGit,
  siGithub,
  siGooglecloud,
  siGooglesheets,
  siJavascript,
  siLaravel,
  siLinux,
  siLooker,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPostman,
  siReact,
  siTailwindcss,
  siThreedotjs,
  siTypescript,
  siVercel,
  siVuedotjs,
  siWoocommerce,
  siWordpress,
  siElementor,
  siCisco,
} from "simple-icons";

type SI = { path: string; hex: string; title: string };

const map: Record<string, SI> = {
  "Claude": siClaude,
  "3DEXPERIENCE": siDassaultsystemes,
  "Docker": siDocker,
  "Git": siGit,
  "GitHub": siGithub,
  "Google Cloud": siGooglecloud,
  "Google Sheets API": siGooglesheets,
  "Google Sheets": siGooglesheets,
  "JavaScript": siJavascript,
  "Laravel": siLaravel,
  "Linux": siLinux,
  "Looker Studio": siLooker,
  "MySQL": siMysql,
  "Nest.js": siNestjs,
  "NestJS": siNestjs,
  "Next.js": siNextdotjs,
  "Node.js": siNodedotjs,
  "PHP": siPhp,
  "PostgreSQL": siPostgresql,
  "Postman": siPostman,
  "React": siReact,
  "Tailwind CSS": siTailwindcss,
  "Three.js / WebGL": siThreedotjs,
  "Three.js": siThreedotjs,
  "TypeScript": siTypescript,
  "Vercel": siVercel,
  "Vue.js": siVuedotjs,
  "Vue": siVuedotjs,
  "WooCommerce": siWoocommerce,
  "WordPress": siWordpress,
  "Elementor": siElementor,
  "Cisco": siCisco,
  "Git / GitHub": siGithub,
};

// marcas sin ícono público: monograma con su color
const mono: Record<string, { t: string; c: string }> = {
  "Oracle NetSuite": { t: "NS", c: "#C74634" },
  "SuiteScript 2.x": { t: "SS", c: "#C74634" },
  "RESTlets": { t: "RL", c: "#C74634" },
  "Suitelet": { t: "SL", c: "#C74634" },
  "SuiteQL": { t: "SQ", c: "#C74634" },
  "SolidWorks": { t: "SW", c: "#DA291C" },
  "SolidWorks PDM": { t: "PDM", c: "#DA291C" },
  "SolidWorks API": { t: "SW", c: "#DA291C" },
  "MCP": { t: "MCP", c: "#D97757" },
  "OAuth 2.0": { t: "OA", c: "#0EA5E9" },
  "API REST": { t: "API", c: "#22D3EE" },
  "APIs REST / SOAP": { t: "API", c: "#22D3EE" },
  "SQL": { t: "SQL", c: "#60A5FA" },
  "CSV Import": { t: "CSV", c: "#10B981" },
  "Excel avanzado": { t: "XL", c: "#21A366" },
  "glTF / .glb": { t: "glb", c: "#8B5CF6" },
  "Nube": { t: "☁", c: "#38BDF8" },
  "Lector de códigos": { t: "|||", c: "#E2E8F0" },
  "Oracle": { t: "OR", c: "#C74634" },
  "SQL Server": { t: "SQL", c: "#CC2927" },
  "Suitelets / RESTlets": { t: "SL", c: "#C74634" },
  "SuiteFlow": { t: "SF", c: "#C74634" },
  "Saved Searches": { t: "SS", c: "#C74634" },
  "MCP (IA generativa)": { t: "MCP", c: "#D97757" },
  "ETL / CSV Import": { t: "ETL", c: "#10B981" },
  "Power BI": { t: "BI", c: "#F2C811" },
  "Excel avanzado (macros)": { t: "XL", c: "#21A366" },
  "Oracle Cloud": { t: "OCI", c: "#C74634" },
  "HTML": { t: "</>", c: "#E34F26" },
  "CSS": { t: "{}", c: "#1572B6" },
};

const dark = new Set(["000000", "181717", "191919"]);

export function hasBrand(name: string) {
  return !!map[name] || !!mono[name];
}

export default function BrandIcon({ name, size = 20 }: { name: string; size?: number }) {
  const si = map[name];
  if (si) {
    const fill = dark.has(si.hex) ? "#ffffff" : `#${si.hex}`;
    return (
      <svg role="img" aria-label={name} viewBox="0 0 24 24" width={size} height={size} fill={fill}>
        <path d={si.path} />
      </svg>
    );
  }
  const m = mono[name];
  if (m) {
    return (
      <span
        aria-label={name}
        className="inline-flex items-center justify-center rounded-md font-bold leading-none text-white"
        style={{ width: size, height: size, background: m.c, fontSize: size * (m.t.length > 2 ? 0.36 : 0.46) }}
      >
        {m.t}
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center justify-center rounded-md bg-white/10 font-bold text-white/80"
      style={{ width: size, height: size, fontSize: size * 0.45 }}
    >
      {name.slice(0, 2)}
    </span>
  );
}
