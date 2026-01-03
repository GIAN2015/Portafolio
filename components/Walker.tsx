export default function Walker() {
  return (
    <div className="pointer-events-none fixed bottom-6 left-0 z-10">
      <div className="walker flex items-center gap-3 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-sm text-white/80 backdrop-blur">
        {/* mini robot */}
        <div className="relative h-8 w-8">
          <div className="absolute inset-0 rounded-full bg-white/10" />
          <div className="absolute left-2 top-3 h-2 w-2 rounded-full bg-white/70" />
          <div className="absolute right-2 top-3 h-2 w-2 rounded-full bg-white/70" />
          <div className="absolute left-3 right-3 top-[18px] h-[2px] rounded bg-white/50" />
          <div className="absolute -top-1 left-1/2 h-2 w-[2px] -translate-x-1/2 rounded bg-white/40" />
        </div>

        <div className="leading-tight">
          <p className="text-xs text-white/70">deploying vibes…</p>
          <p className="text-[11px] text-white/50">scroll para ver proyectos</p>
        </div>
      </div>
    </div>
  );
}
