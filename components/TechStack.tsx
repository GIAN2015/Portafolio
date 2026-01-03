import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

const stack = [
  { name: "Next.js", src: "/tech/next.png", tone: "Frontend" },
  { name: "NestJS", src: "/tech/nest.png", tone: "Backend" },
  { name: "Laravel", src: "/tech/laravel.png", tone: "Backend" },
  { name: "WordPress", src: "/tech/wordpress.png", tone: "CMS" },
  { name: "WooCommerce", src: "/tech/woocommerce.png", tone: "Ecommerce" },
  { name: "Elementor", src: "/tech/elementor.png", tone: "Builder" },
  { name: "PostgreSQL", src: "/tech/postgres.png", tone: "DB" },
  { name: "MySQL", src: "/tech/mysql.png", tone: "DB" },
  { name: "Vue", src: "/tech/vue.png", tone: "Frontend" },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
    >
      <SectionTitle
        eyebrow="Stack"
        title="Tecnologías con las que trabajo"
        subtitle="Un stack práctico para construir sistemas, ecommerce y automatización con deploy real."
      />

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((t) => {
          const invert = ["Next.js", "Elementor"].includes(t.name); // logos negros
          return (
            <div
              key={t.name}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <Image
                  src={t.src}
                  alt={t.name}
                  width={34}
                  height={34}
                  className={invert ? "invert opacity-85" : "opacity-85"}
                />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-white/60">{t.tone}</p>
              </div>

              <div className="ml-auto text-xs text-white/40 group-hover:text-white/60">
                •••
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
