import Image from "next/image";

type Item = {
    src: string;
    alt: string;
    left: string;
    top: string;
    delay: string;
    dur: string;
    size: number;
    invert?: boolean; // para logos negros en fondo oscuro
};

const items: Item[] = [
    { src: "/tech/wordpress.png", alt: "WordPress", left: "8%", top: "18%", delay: "0s", dur: "12s", size: 44 },
    { src: "/tech/woocommerce.png", alt: "WooCommerce", left: "18%", top: "70%", delay: "1.2s", dur: "14s", size: 44 },
    { src: "/tech/elementor.png", alt: "Elementor", left: "35%", top: "28%", delay: "2s", dur: "13s", size: 40, invert: true }, // suele ser negro
    { src: "/tech/next.png", alt: "Next.js", left: "52%", top: "76%", delay: "0.7s", dur: "15s", size: 42, invert: true }, // negro
    { src: "/tech/nest.png", alt: "NestJS", left: "66%", top: "20%", delay: "1.8s", dur: "13s", size: 42 },
    { src: "/tech/laravel.png", alt: "Laravel", left: "78%", top: "60%", delay: "2.4s", dur: "14s", size: 42 },
    { src: "/tech/mysql.png", alt: "MySQL", left: "90%", top: "32%", delay: "1.1s", dur: "13s", size: 46 },
    { src: "/tech/postgres.png", alt: "PostgreSQL", left: "58%", top: "14%", delay: "2.9s", dur: "16s", size: 44 },
    { src: "/tech/vue.png", alt: "Vue.js", left: "12%", top: "42%", delay: "2.2s", dur: "15s", size: 42 },
];

export default function TechFloat() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10">
            {items.map((it, i) => (
                <div
                    key={i}
                    className="tech-float absolute rounded-2xl border border-white/5 bg-white/[0.02] p-3 backdrop-blur"
                    style={{
                        left: it.left,
                        top: it.top,
                        animationDelay: it.delay,
                        animationDuration: it.dur,
                    }}
                >
                    <Image
                        src={it.src}
                        alt={it.alt}
                        width={it.size}
                        height={it.size}
                        className={[
                            "opacity-85",
                            it.invert ? "invert" : "",
                        ].join(" ")}
                    />
                </div>
            ))}
        </div>
    );
}
