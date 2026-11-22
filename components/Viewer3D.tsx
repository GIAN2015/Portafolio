"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

/* ------------------------------------------------------------------ */
/*  Datos de ejemplo (propiedades tipo SolidWorks)                     */
/* ------------------------------------------------------------------ */
type PartInfo = {
  code: string;
  name: string;
  material: string;
  mass: string;
  rev: string;
  status: string;
};

const ASSEMBLY = { code: "ENS-200", name: "Reductor de transmisión (demo)" };

const PARTS: PartInfo[] = [
  { code: "PZ-1001", name: "Base de montaje", material: "Acero ASTM A36", mass: "4.82 kg", rev: "C", status: "Liberado" },
  { code: "PZ-1002", name: "Carcasa", material: "Aluminio 6061-T6", mass: "1.95 kg", rev: "B", status: "Liberado" },
  { code: "PZ-1003", name: "Eje de transmisión", material: "Acero AISI 4140", mass: "0.88 kg", rev: "D", status: "Liberado" },
  { code: "PZ-1004", name: "Engranaje recto Z24", material: "Acero AISI 1045", mass: "0.61 kg", rev: "A", status: "En revisión" },
  { code: "PZ-1005", name: "Tapa frontal", material: "Aluminio 6061-T6", mass: "0.34 kg", rev: "B", status: "Liberado" },
  { code: "PZ-1006", name: "Perno hexagonal M8 (x4)", material: "Acero grado 8.8", mass: "0.05 kg c/u", rev: "A", status: "Comercial" },
];

/* ------------------------------------------------------------------ */
/*  Geometrías procedurales                                            */
/* ------------------------------------------------------------------ */
function baseGeometry() {
  const w = 4.2, d = 3.0, r = 0.25;
  const s = new THREE.Shape();
  s.moveTo(-w / 2 + r, -d / 2);
  s.lineTo(w / 2 - r, -d / 2);
  s.quadraticCurveTo(w / 2, -d / 2, w / 2, -d / 2 + r);
  s.lineTo(w / 2, d / 2 - r);
  s.quadraticCurveTo(w / 2, d / 2, w / 2 - r, d / 2);
  s.lineTo(-w / 2 + r, d / 2);
  s.quadraticCurveTo(-w / 2, d / 2, -w / 2, d / 2 - r);
  s.lineTo(-w / 2, -d / 2 + r);
  s.quadraticCurveTo(-w / 2, -d / 2, -w / 2 + r, -d / 2);
  for (const [x, y] of [[-1.65, -1.1], [1.65, -1.1], [-1.65, 1.1], [1.65, 1.1]]) {
    const h = new THREE.Path();
    h.absarc(x, y, 0.17, 0, Math.PI * 2, true);
    s.holes.push(h);
  }
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.35, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04, bevelSegments: 2 });
  g.rotateX(-Math.PI / 2);
  return g;
}

function housingGeometry() {
  const pts = [
    new THREE.Vector2(0.62, 0),
    new THREE.Vector2(1.35, 0),
    new THREE.Vector2(1.35, 0.18),
    new THREE.Vector2(1.18, 0.22),
    new THREE.Vector2(1.18, 1.55),
    new THREE.Vector2(1.3, 1.6),
    new THREE.Vector2(1.3, 1.8),
    new THREE.Vector2(0.95, 1.8),
    new THREE.Vector2(0.95, 0.25),
    new THREE.Vector2(0.62, 0.25),
  ];
  pts.push(pts[0].clone());
  return new THREE.LatheGeometry(pts, 72);
}

function shaftGeometry() {
  const pts = [
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0.28, 0),
    new THREE.Vector2(0.3, 0.05),
    new THREE.Vector2(0.3, 1.6),
    new THREE.Vector2(0.38, 1.62),
    new THREE.Vector2(0.38, 2.2),
    new THREE.Vector2(0.26, 2.25),
    new THREE.Vector2(0.26, 3.1),
    new THREE.Vector2(0.22, 3.15),
    new THREE.Vector2(0, 3.15),
  ];
  return new THREE.LatheGeometry(pts, 48);
}

function gearGeometry(teeth = 24, rOut = 1.15, rIn = 0.98) {
  const s = new THREE.Shape();
  const step = (Math.PI * 2) / teeth;
  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    const pts: [number, number][] = [
      [Math.cos(a) * rIn, Math.sin(a) * rIn],
      [Math.cos(a + step * 0.2) * rOut, Math.sin(a + step * 0.2) * rOut],
      [Math.cos(a + step * 0.5) * rOut, Math.sin(a + step * 0.5) * rOut],
      [Math.cos(a + step * 0.7) * rIn, Math.sin(a + step * 0.7) * rIn],
    ];
    pts.forEach(([x, y], j) => (i === 0 && j === 0 ? s.moveTo(x, y) : s.lineTo(x, y)));
  }
  s.closePath();
  const hole = new THREE.Path();
  hole.absarc(0, 0, 0.41, 0, Math.PI * 2, true);
  s.holes.push(hole);
  for (let k = 0; k < 6; k++) {
    const a = (k / 6) * Math.PI * 2;
    const p = new THREE.Path();
    p.absarc(Math.cos(a) * 0.62, Math.sin(a) * 0.62, 0.13, 0, Math.PI * 2, true);
    s.holes.push(p);
  }
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.32, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02, bevelSegments: 1, curveSegments: 24 });
  g.rotateX(-Math.PI / 2);
  return g;
}

function coverGeometry() {
  const s = new THREE.Shape();
  s.absarc(0, 0, 1.3, 0, Math.PI * 2, false);
  const c = new THREE.Path();
  c.absarc(0, 0, 0.42, 0, Math.PI * 2, true);
  s.holes.push(c);
  for (let k = 0; k < 4; k++) {
    const a = Math.PI / 4 + (k / 4) * Math.PI * 2;
    const p = new THREE.Path();
    p.absarc(Math.cos(a) * 1.08, Math.sin(a) * 1.08, 0.09, 0, Math.PI * 2, true);
    s.holes.push(p);
  }
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.16, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, bevelSegments: 2, curveSegments: 48 });
  g.rotateX(-Math.PI / 2);
  return g;
}

function boltGroup(mat: THREE.Material) {
  const grp = new THREE.Group();
  const head = new THREE.CylinderGeometry(0.16, 0.16, 0.12, 6);
  const shank = new THREE.CylinderGeometry(0.08, 0.08, 0.5, 16);
  for (let k = 0; k < 4; k++) {
    const a = Math.PI / 4 + (k / 4) * Math.PI * 2;
    const b = new THREE.Group();
    const h = new THREE.Mesh(head, mat);
    h.position.y = 0.06;
    const sh = new THREE.Mesh(shank, mat);
    sh.position.y = -0.25;
    b.add(h, sh);
    b.position.set(Math.cos(a) * 1.08, 0, -Math.sin(a) * 1.08);
    grp.add(b);
  }
  return grp;
}

/* ------------------------------------------------------------------ */

type Mode = "ensamble" | "pieza";

export default function Viewer3D({ compact = false }: { compact?: boolean }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const api = useRef<{
    select: (code: string | null) => void;
    setMode: (m: Mode) => void;
    setExplode: (v: boolean) => void;
  } | null>(null);

  const [mode, setMode] = useState<Mode>("ensamble");
  const [explode, setExplode] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [scanning, setScanning] = useState<string | null>(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.shadowMap.enabled = true;
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

    const camera = new THREE.PerspectiveCamera(40, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(7, 5.5, 7.5);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.9;
    controls.minDistance = 3;
    controls.maxDistance = 18;
    controls.target.set(0, 1.4, 0);

    const key = new THREE.DirectionalLight(0xffffff, 1.6);
    key.position.set(5, 9, 4);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    scene.add(key, new THREE.HemisphereLight(0xc7d2fe, 0x0b0b10, 0.6));

    const grid = new THREE.GridHelper(14, 28, 0x6366f1, 0x27272a);
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.35;
    scene.add(grid);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(14, 14), new THREE.ShadowMaterial({ opacity: 0.35 }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.001;
    floor.receiveShadow = true;
    scene.add(floor);

    const steel = () => new THREE.MeshStandardMaterial({ color: 0x9ca3af, metalness: 0.85, roughness: 0.32 });
    const alu = () => new THREE.MeshStandardMaterial({ color: 0xd4d8de, metalness: 0.7, roughness: 0.25 });
    const dark = () => new THREE.MeshStandardMaterial({ color: 0x52525b, metalness: 0.9, roughness: 0.35 });
    const blue = () => new THREE.MeshStandardMaterial({ color: 0x3b5bdb, metalness: 0.55, roughness: 0.35 });

    type Entry = { obj: THREE.Object3D; base: THREE.Vector3; exploded: THREE.Vector3 };
    const entries: Record<string, Entry> = {};
    const add = (code: string, obj: THREE.Object3D, base: [number, number, number], exp: [number, number, number]) => {
      obj.position.set(...base);
      obj.userData.code = code;
      obj.traverse((o) => {
        o.userData.code = code;
        if ((o as THREE.Mesh).isMesh) {
          (o as THREE.Mesh).castShadow = true;
          (o as THREE.Mesh).receiveShadow = true;
        }
      });
      scene.add(obj);
      entries[code] = { obj, base: new THREE.Vector3(...base), exploded: new THREE.Vector3(...exp) };
    };

    add("PZ-1001", new THREE.Mesh(baseGeometry(), blue()), [0, 0, 0], [0, 0, 0]);
    add("PZ-1002", new THREE.Mesh(housingGeometry(), alu()), [0, 0.39, 0], [0, 0.39, 0]);
    add("PZ-1003", new THREE.Mesh(shaftGeometry(), steel()), [0, 0.45, 0], [0, 3.2, 0]);
    add("PZ-1004", new THREE.Mesh(gearGeometry(), dark()), [0, 2.25, 0], [2.6, 2.6, 0]);
    add("PZ-1005", new THREE.Mesh(coverGeometry(), alu()), [0, 2.21, 0], [0, 4.6, -1.8]);
    add("PZ-1006", boltGroup(steel()), [0, 2.4, 0], [0, 5.6, -1.8]);
    // engranaje y tapa no deben solaparse en ensamble: el engranaje queda sobre la tapa
    entries["PZ-1004"].base.set(0, 2.62, 0);
    entries["PZ-1006"].base.set(0, 2.45, 0);

    const state = { mode: "ensamble" as Mode, explode: false, selected: null as string | null };
    const target = new THREE.Vector3(0, 1.4, 0);
    const camGoal = { pos: null as THREE.Vector3 | null };

    const applyVisual = () => {
      for (const [code, e] of Object.entries(entries)) {
        const isSel = state.selected === code;
        e.obj.visible = state.mode === "ensamble" || !state.selected || isSel;
        e.obj.traverse((o) => {
          const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
          if (!m || !("emissive" in m)) return;
          m.emissive.setHex(isSel ? 0x4f46e5 : 0x000000);
          m.emissiveIntensity = isSel ? 0.45 : 0;
          m.transparent = state.mode === "ensamble" && !!state.selected && !isSel;
          m.opacity = m.transparent ? 0.28 : 1;
        });
      }
    };

    const focus = (code: string | null) => {
      if (code && state.mode === "pieza") {
        const e = entries[code];
        const box = new THREE.Box3().setFromObject(e.obj);
        const sphere = box.getBoundingSphere(new THREE.Sphere());
        target.copy(sphere.center);
        const dir = camera.position.clone().sub(controls.target).normalize();
        camGoal.pos = sphere.center.clone().add(dir.multiplyScalar(Math.max(sphere.radius * 3.2, 3.2)));
      } else {
        target.set(0, state.explode ? 2.4 : 1.4, 0);
        const dir = camera.position.clone().sub(controls.target).normalize();
        camGoal.pos = target.clone().add(dir.multiplyScalar(state.explode ? 11 : 9.5));
      }
    };

    api.current = {
      select: (code) => {
        state.selected = code;
        if (code) controls.autoRotate = state.mode === "pieza";
        applyVisual();
        focus(code);
      },
      setMode: (m) => {
        state.mode = m;
        applyVisual();
        focus(state.selected);
      },
      setExplode: (v) => {
        state.explode = v;
        focus(state.mode === "pieza" ? state.selected : null);
      },
    };

    // selección con click/tap
    const ray = new THREE.Raycaster();
    const ptr = new THREE.Vector2();
    let down = { x: 0, y: 0 };
    const onDown = (ev: PointerEvent) => (down = { x: ev.clientX, y: ev.clientY });
    const onUp = (ev: PointerEvent) => {
      if (Math.hypot(ev.clientX - down.x, ev.clientY - down.y) > 5) return; // fue un arrastre
      const r = renderer.domElement.getBoundingClientRect();
      ptr.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
      ray.setFromCamera(ptr, camera);
      const hit = ray.intersectObjects(Object.values(entries).map((e) => e.obj).filter((o) => o.visible), true)[0];
      const code = (hit?.object.userData.code as string) ?? null;
      setSelected(code);
      api.current?.select(code);
    };
    renderer.domElement.addEventListener("pointerdown", onDown);
    renderer.domElement.addEventListener("pointerup", onUp);

    // render solo cuando es visible
    let visible = true;
    const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting));
    io.observe(mount);

    const ro = new ResizeObserver(() => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight, false);
    });
    ro.observe(mount);

    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      for (const e of Object.values(entries)) {
        e.obj.position.lerp(state.explode ? e.exploded : e.base, 0.08);
      }
      entries["PZ-1004"].obj.rotation.y += 0.006;
      entries["PZ-1003"].obj.rotation.y += 0.006;
      controls.target.lerp(target, 0.08);
      if (camGoal.pos) {
        camera.position.lerp(camGoal.pos, 0.06);
        if (camera.position.distanceTo(camGoal.pos) < 0.05) camGoal.pos = null;
      }
      controls.update();
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      renderer.domElement.removeEventListener("pointerdown", onDown);
      renderer.domElement.removeEventListener("pointerup", onUp);
      controls.dispose();
      scene.traverse((o) => {
        const m = o as THREE.Mesh;
        if (m.isMesh) {
          m.geometry.dispose();
          (m.material as THREE.Material).dispose();
        }
      });
      pmrem.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
      api.current = null;
    };
  }, []);

  const changeMode = (m: Mode) => {
    setMode(m);
    api.current?.setMode(m);
  };
  const toggleExplode = () => {
    setExplode((v) => {
      api.current?.setExplode(!v);
      return !v;
    });
  };
  const scan = (raw: string) => {
    const code = raw.trim().toUpperCase();
    const part = PARTS.find((p) => p.code === code);
    if (!part) {
      setScanning("NO-ENCONTRADO");
      setTimeout(() => setScanning(null), 1200);
      return;
    }
    setScanning(code);
    if (window.innerWidth < 1024) mountRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => {
      setScanning(null);
      setMode("pieza");
      api.current?.setMode("pieza");
      setSelected(code);
      api.current?.select(code);
    }, 900);
  };

  const info = PARTS.find((p) => p.code === selected);

  return (
    <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
      {/* Visor */}
      <div
        className={
          "relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),rgba(0,0,0,0.6)_70%)] " +
          (compact ? "h-[340px] sm:h-[420px]" : "h-[380px] sm:h-[500px]")
        }
      >
        <div ref={mountRef} className="absolute inset-0" />

        <div className="pointer-events-none absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[11px] text-white/85 backdrop-blur">
            {ASSEMBLY.code} · {ASSEMBLY.name}
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] text-emerald-300 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> En vivo · WebGL
          </span>
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center gap-2">
          <div className="flex overflow-hidden rounded-xl border border-white/15 bg-black/50 backdrop-blur">
            {(["ensamble", "pieza"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => changeMode(m)}
                className={"px-3 py-1.5 text-xs capitalize " + (mode === m ? "bg-white font-semibold text-black" : "text-white/80 hover:bg-white/10")}
              >
                Modo {m}
              </button>
            ))}
          </div>
          <button
            onClick={toggleExplode}
            className={"rounded-xl border border-white/15 px-3 py-1.5 text-xs backdrop-blur " + (explode ? "bg-indigo-500 text-white" : "bg-black/50 text-white/80 hover:bg-white/10")}
          >
            {explode ? "Ensamblar" : "Vista explosionada"}
          </button>
          <span className="ml-auto hidden text-[11px] text-white/50 sm:inline">Arrastra para girar · toca una pieza</span>
        </div>

        {scanning ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="relative w-56 rounded-2xl border border-white/15 bg-black/70 p-5 text-center">
              <div className="relative mx-auto h-16 w-40 overflow-hidden rounded-lg border border-white/20 bg-white/5">
                <div className="absolute inset-x-0 top-0 h-0.5 animate-[scan_0.9s_ease-in-out_infinite] bg-red-500 shadow-[0_0_12px_2px_rgba(239,68,68,0.8)]" />
                <div className="flex h-full items-center justify-center gap-[2px] px-3">
                  {Array.from({ length: 22 }).map((_, i) => (
                    <span key={i} className="h-10 bg-white/80" style={{ width: i % 3 === 0 ? 3 : 1 }} />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-xs text-white/80">
                {scanning === "NO-ENCONTRADO" ? "Código no encontrado" : `Leyendo etiqueta ${scanning}…`}
              </p>
            </div>
          </div>
        ) : null}
      </div>

      {/* Panel lateral */}
      <div className="flex flex-col gap-3">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
          <p className="text-xs uppercase tracking-widest text-white/55">Simular escaneo de etiqueta</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              scan(input);
            }}
            className="mt-3 flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ej. PZ-1004"
              className="min-w-0 flex-1 rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-white/35 focus:border-indigo-400 focus:outline-none"
            />
            <button className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-black hover:opacity-90">Escanear</button>
          </form>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {PARTS.map((p) => (
              <button
                key={p.code}
                onClick={() => scan(p.code)}
                className={
                  "rounded-lg border px-2 py-1 font-mono text-[11px] " +
                  (selected === p.code ? "border-indigo-400 bg-indigo-500/20 text-white" : "border-white/10 bg-white/[0.04] text-white/75 hover:border-white/25")
                }
              >
                {p.code}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 rounded-2xl border border-white/10 bg-black/30 p-4">
          <p className="text-xs uppercase tracking-widest text-white/55">Propiedades de la pieza</p>
          {info ? (
            <dl className="mt-3 space-y-2 text-sm">
              <Row k="Código" v={<span className="font-mono">{info.code}</span>} />
              <Row k="Descripción" v={info.name} />
              <Row k="Material" v={info.material} />
              <Row k="Masa" v={info.mass} />
              <Row k="Revisión" v={info.rev} />
              <Row
                k="Estado"
                v={
                  <span className={"rounded-full px-2 py-0.5 text-xs " + (info.status === "En revisión" ? "bg-amber-500/15 text-amber-300" : "bg-emerald-500/15 text-emerald-300")}>
                    {info.status}
                  </span>
                }
              />
              <Row k="Ensamble" v={<span className="font-mono">{ASSEMBLY.code}</span>} />
            </dl>
          ) : (
            <p className="mt-3 text-sm text-white/55">
              Escanea una etiqueta o toca una pieza para ver sus datos, tal como aparecen en la TV de planta.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-white/5 pb-1.5 last:border-0">
      <dt className="text-white/50">{k}</dt>
      <dd className="text-right text-white/90">{v}</dd>
    </div>
  );
}
