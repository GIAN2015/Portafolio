"use client";

import dynamic from "next/dynamic";

const Viewer3D = dynamic(() => import("@/components/Viewer3D"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[380px] items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-sm text-white/50 sm:h-[480px]">
      Cargando visor 3D…
    </div>
  ),
});

export default function Viewer3DLazy(props: { compact?: boolean }) {
  return <Viewer3D {...props} />;
}
