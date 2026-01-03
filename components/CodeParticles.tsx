export default function CodeParticles() {
  // posiciones fijas para evitar problemas de hidratación
  const items = [
    { left: "8%",  top: "18%", delay: "0s",  dur: "10s", text: "</>" },
    { left: "18%", top: "70%", delay: "1s",  dur: "12s", text: "{}" },
    { left: "35%", top: "25%", delay: "2s",  dur: "11s", text: "=>"},
    { left: "52%", top: "75%", delay: "0.8s",dur: "13s", text: "API" },
    { left: "66%", top: "20%", delay: "1.6s",dur: "10s", text: "SQL" },
    { left: "78%", top: "60%", delay: "2.6s",dur: "12s", text: "git" },
    { left: "90%", top: "30%", delay: "1.2s",dur: "11s", text: "UI" },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {items.map((it, i) => (
        <span
          key={i}
          className="code-float absolute select-none rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs text-white/60 backdrop-blur"
          style={{
            left: it.left,
            top: it.top,
            animationDelay: it.delay,
            animationDuration: it.dur,
          }}
        >
          {it.text}
        </span>
      ))}
    </div>
  );
}
