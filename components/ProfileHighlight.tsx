export default function ProfileHighlight() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-widest text-white/60">Perfil</p>
          <p className="mt-1 text-sm text-white/80">
            Integración de Sistemas · Oracle NetSuite · APIs · Automatización e IA · Lima, Perú
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
            Sistemas
          </span>
          <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
            Ecommerce
          </span>
          <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70">
            Deploy real
          </span>
        </div>
      </div>
    </div>
  );
}
