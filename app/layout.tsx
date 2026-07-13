import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "isIA — Agentes de IA que automatizan la operación de tu empresa 24/7",
  description:
    "Construimos agentes de IA que conectan tus sistemas y automatizan",
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
