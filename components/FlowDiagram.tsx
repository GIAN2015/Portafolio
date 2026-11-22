// components/FlowDiagram.tsx
export default function FlowDiagram({
  steps,
  compact = false,
}: {
  steps: string[];
  compact?: boolean;
}) {
  return (
    <ol
      className={
        "flex flex-wrap items-center " + (compact ? "gap-1.5" : "gap-2 sm:gap-3")
      }
      aria-label="Flujo de la solución"
    >
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-1.5 sm:gap-3">
          <span
            className={
              "rounded-xl border border-white/15 bg-black/40 font-medium text-white/90 backdrop-blur " +
              (compact ? "px-2.5 py-1 text-[11px]" : "px-3.5 py-2 text-xs sm:text-sm")
            }
          >
            {s}
          </span>
          {i < steps.length - 1 ? (
            <span aria-hidden className={compact ? "text-xs text-white/50" : "text-white/50"}>
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
