// components/SectionTitle.tsx
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-widest text-zinc-400">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold text-white">{title}</h2>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
