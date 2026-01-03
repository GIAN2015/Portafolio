// components/Footer.tsx
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-900 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} {profile.name}. Hecho con Next.js.
        </p>

        <div className="flex flex-wrap gap-3 text-sm">
          <a className="text-zinc-300 hover:text-white" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          {profile.links.github ? (
            <a className="text-zinc-300 hover:text-white" href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : null}
          {profile.links.linkedin ? (
            <a className="text-zinc-300 hover:text-white" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
