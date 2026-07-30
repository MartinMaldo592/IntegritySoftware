import "./globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Integrity Software | Desarrollo de Software & Automatización MYPE Perú",
  description:
    "Integrity Software S.A.C. (RUC 20609874125). Empresa peruana especializada en desarrollo de páginas web, bots de WhatsApp, tiendas virtuales con Yape/Plin, sistemas ERP/CRM y automatizaciones SUNAT para MYPES en Perú.",
  keywords: [
    "Integrity Software",
    "RUC 20609874125",
    "Desarrollo Web MYPE Peru",
    "Bot de WhatsApp Lima",
    "Tienda Virtual Yape Culqi",
    "ERP CRM MYPE",
    "Automatización SUNAT Peru"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
