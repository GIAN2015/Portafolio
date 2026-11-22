// components/FlowDiagram.tsx
export default function FlowDiagram({ steps, compact = false }: { steps: string[]; compact?: boolean }) {
  if (compact) {
    return (
      <ol className="flex flex-wrap items-center gap-1.5" aria-label="Flujo de la solución">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-1.5">
            <span className="rounded-xl border border-white/15 bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white/90">{s}</span>
            {i < steps.length - 1 ? <span className="text-xs text-white/50">→</span> : null}
          </li>
        ))}
      </ol>
    );
  }
  return (
    <ol className="grid gap-3 sm:flex sm:items-stretch" aria-label="Flujo de la solución">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-3 sm:flex-1">
          <div className="glass relative flex-1 rounded-2xl p-4 transition hover:-translate-y-1 hover:border-cyan-400/40">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-xs font-bold text-white">
              {i + 1}
            </span>
            <p className="mt-3 text-sm font-medium leading-snug text-white">{s}</p>
          </div>
          {i < steps.length - 1 ? (
            <svg width="34" height="12" viewBox="0 0 34 12" className="hidden shrink-0 sm:block" aria-hidden>
              <line x1="0" y1="6" x2="28" y2="6" stroke="#22d3ee" strokeWidth="2" className="flow-dash" />
              <path d="M26 1 L33 6 L26 11" fill="none" stroke="#22d3ee" strokeWidth="2" />
            </svg>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
