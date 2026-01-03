import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Badge from "@/components/Badge";

const publicationUrl =
  "https://www.sciencedirect.com/science/article/pii/S1877050925008932";

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
    >
      <SectionTitle
        eyebrow="Credenciales"
        title="Certificaciones & publicación científica"
        subtitle="Evidencias formales que complementan el portafolio (formación + investigación aplicada)."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {/* CCNA */}
        <div className="group overflow-hidden rounded-3xl border border-white/10 bg-black/20 transition hover:border-white/20">
          {/* Cover */}
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/credentials/ccna-badge.png"
              alt="Cisco Networking Academy Verified - CCNA: Introduction to Networks"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute left-5 top-5 flex flex-wrap gap-2">
              <Badge>Cisco NetAcad</Badge>
              <Badge>CCNA</Badge>
              <Badge>Networking</Badge>
            </div>

            <div className="absolute bottom-5 left-5">
              <h3 className="text-lg font-semibold text-white">
                CCNA: Introduction to Networks
              </h3>
              <p className="mt-1 text-xs text-white/70">Cibertec · 02 Jan 2026</p>
            </div>
          </div>

          {/* Body */}
          <div className="p-5">
            <p className="text-sm leading-relaxed text-white/70">
              Curso completado en Cisco Networking Academy. Base sólida en fundamentos
              de redes, direccionamiento IP y conceptos clave para redes modernas.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/certs/ccna-itn.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
              >
                Ver certificado (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Publicación */}
        <div className="group overflow-hidden rounded-3xl border border-white/10 bg-black/20 transition hover:border-white/20">
          {/* Cover (tu screenshot de inicio) */}
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/credentials/publication.png"
              alt="Publicación científica en Procedia Computer Science (Elsevier)"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            <div className="absolute left-5 top-5 flex flex-wrap gap-2">
              <Badge>Research</Badge>
              <Badge>Procedia CS</Badge>
              <Badge>Optimization</Badge>
            </div>

            <div className="absolute bottom-5 left-5">
              <h3 className="text-lg font-semibold text-white">
                Publicación científica (Elsevier)
              </h3>
              <p className="mt-1 text-xs text-white/70">
                Procedia Computer Science · 2025
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="p-5">
            <p className="text-sm leading-relaxed text-white/70">
              Artículo sobre optimización de ingresos netos en distribución mayorista de
              frutas usando programación lineal. Publicado en Procedia Computer Science.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={publicationUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-black/20 px-4 py-2 text-sm font-semibold text-white hover:border-white/25"
              >
                Ver publicación
              </a>
            </div>

            <p className="mt-3 text-xs text-white/55">
              Vol. 257 (2025) · pp. 1172–1177
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
