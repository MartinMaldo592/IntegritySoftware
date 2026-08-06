import "./globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://integritysoftware.pe"),
  title: "Integrity Software S.A.C. | Desarrollo de Software & Automatización MYPE Perú",
  description:
    "Integrity Software S.A.C. (RUC 20609874125). Empresa peruana especializada en desarrollo de páginas web, bots de WhatsApp, tiendas virtuales con Yape/Plin, sistemas ERP/CRM y automatizaciones de procesos para MYPES en Perú.",
  keywords: [
    "Integrity Software",
    "RUC 20609874125",
    "Desarrollo Web MYPE Peru",
    "Bot de WhatsApp Lima",
    "Tienda Virtual Yape Culqi",
    "ERP CRM MYPE",
    "Automatización de Procesos Peru"
  ],
  openGraph: {
    title: "Integrity Software S.A.C. | Software & Automatizaciones MYPE Perú",
    description:
      "Desarrollo de Software a Medida, Bots de WhatsApp 24/7, Tiendas Virtuales y ERP/CRM para Micro y Pequeñas Empresas en Perú.",
    url: "https://integritysoftware.pe",
    siteName: "Integrity Software S.A.C.",
    images: [
      {
        url: "/img/hero_enterprise_tech_1785388460733.jpg",
        width: 1200,
        height: 630,
        alt: "Integrity Software S.A.C. - Soluciones Tecnológicas MYPE Perú"
      }
    ],
    locale: "es_PE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrity Software S.A.C. | Software & Automatización MYPE Perú",
    description:
      "Soluciones web, bots de WhatsApp 24/7 y sistemas a medida para hacer crecer tu empresa en Perú.",
    images: ["/img/hero_enterprise_tech_1785388460733.jpg"]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "INTEGRITY SOFTWARE S.A.C.",
  "image": "https://integritysoftware.pe/img/hero_enterprise_tech_1785388460733.jpg",
  "@id": "https://integritysoftware.pe",
  "url": "https://integritysoftware.pe",
  "telephone": "+51982432561",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lima",
    "addressCountry": "PE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -12.046374,
    "longitude": -77.042793
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "20:00"
  },
  "sameAs": [
    "https://www.facebook.com",
    "https://www.instagram.com"
  ],
  "taxID": "20609874125",
  "legalName": "INTEGRITY SOFTWARE S.A.C.",
  "description": "Desarrollo de software a medida, sistemas ERP/CRM, bots inteligentes de WhatsApp y automatizaciones para Micro y Pequeñas Empresas en Perú."
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
