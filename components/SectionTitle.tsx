// components/SectionTitle.tsx
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={"mb-8 " + (center ? "text-center" : "")}>
      {eyebrow ? (
        <p className={"inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 " + (center ? "justify-center" : "")}>
          <span className="h-px w-6 bg-gradient-to-r from-blue-500 to-cyan-400" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className={"mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base " + (center ? "mx-auto" : "")}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
