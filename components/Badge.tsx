export default function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={
        "inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80 backdrop-blur " +
        className
      }
    >
      {children}
    </span>
  );
}
