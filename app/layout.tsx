import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CodeParticles from "@/components/CodeParticles";
import Walker from "@/components/Walker";
import TechFloat from "@/components/TechFloat";
export const metadata: Metadata = {
  title: "Gian Sinarahua | Integración de Sistemas · NetSuite · Automatización e IA",
  description:
    "Portafolio de Gian Carlos Sinarahua Cárdenas: integración de sistemas empresariales, Oracle NetSuite ERP/CRM, APIs REST/SOAP, automatización e IA generativa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">
        <TechFloat />
        <CodeParticles />
        <Walker />
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(34,197,94,0.10),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:80px_80px]" />
          <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,transparent,rgba(0,0,0,0.85))]" />
        </div>

        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
