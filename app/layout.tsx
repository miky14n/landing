import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "isIA — Inteligencia Artificial que Impulsa tu Negocio",
  description:
    "isIA agencia de inteligencia artificial: automatización, análisis predictivo y soluciones a medida para impulsar tu negocio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
