// components/Footer.tsx
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 text-sm font-bold text-white">GS</div>
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} {profile.name}</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          <a className="text-slate-300 hover:text-cyan-300" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="text-slate-300 hover:text-cyan-300" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="text-slate-300 hover:text-cyan-300" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
