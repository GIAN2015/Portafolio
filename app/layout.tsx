import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";

export const metadata: Metadata = {
  title: "Gian Sinarahua | Integración de Sistemas · NetSuite · Automatización e IA",
  description:
    "Portafolio de Gian Carlos Sinarahua Cárdenas: integración de sistemas empresariales, Oracle NetSuite ERP/CRM, APIs REST/SOAP, automatización, IA generativa y visualización 3D.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">
        <NetworkBackground />
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
