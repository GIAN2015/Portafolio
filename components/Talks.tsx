import SectionTitle from "@/components/SectionTitle";
import Badge from "@/components/Badge";

export default function Talks() {
    return (
        <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
            <SectionTitle
                eyebrow="Comunidad"
                title="Ponencias & talleres"
                subtitle="Experiencia compartiendo conocimientos y construyendo comunidad."
            />

            <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="flex flex-wrap gap-2">
                        <Badge>WordPress</Badge>
                        <Badge>Elementor</Badge>
                        <Badge>Comunidad</Badge>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-white">
                        Ponencia: WordPress + Elementor (en universidad)
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                        Realicé una ponencia práctica sobre creación de sitios web con WordPress y
                        Elementor, compartiendo buenas prácticas de diseño, estructura y despliegue.
                        Actividad realizada con la comunidad Chapitec.
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-white/75">
                        <li>• Enfoque: sitios corporativos, secciones clave y UX</li>
                        <li>• Resultado: guía práctica + demostración en vivo</li>
                        <li>• Rol: expositor / facilitador</li>
                    </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-widest text-white/60">
                        Imagen Referencial
                    </p>
                    <p className="mt-2 text-sm text-white/70">

                       <img src="/talks/chapitec-wordpress-elementor.jpg"></img>


                    </p>

                  
                </div>
            </div>
        </section>
    );
}
