import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TopNoticeBar from "@/components/TopNoticeBar";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Portafolio & Casos de Éxito MYPE | Integrity Software",
  description:
    "Descubre los proyectos desarrollados por Integrity Software para MYPES en Perú: Landings con Bot de WhatsApp, Tiendas virtuales con Yape y ERPs a medida.",
  keywords: [
    "Portafolio Software MYPE Peru",
    "Casos de Exito Web Lima",
    "Proyectos Integrity Software"
  ]
};

import AssemblyPiece from "@/components/AssemblyPiece";

export default function PortafolioPage() {
  return (
    <>
      <SmoothScroll />
      <ScrollReveal />
      <TopNoticeBar />
      <Navbar />

      <main className="bg-white">
        <AssemblyPiece>
          <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white text-center">
            <div className="w-[95%] max-w-5xl mx-auto px-4">
              <h1 className="text-3xl sm:text-5xl font-extrabold font-heading mb-6 tracking-tight">
                Portafolio &amp; Casos de Éxito MYPE
              </h1>
              <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
                Conoce cómo nuestras soluciones de software y automatización ayudan a emprendedores y empresas peruanas a vender más y optimizar sus procesos.
              </p>
            </div>
          </section>
        </AssemblyPiece>

        <AssemblyPiece>
          <TestimonialsCarousel />
        </AssemblyPiece>

        <AssemblyPiece>
          <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200 text-center">
            <div className="w-[95%] max-w-4xl mx-auto px-4">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-4">
                  ¿Quieres que tu empresa sea nuestro próximo Caso de Éxito?
                </h2>
                <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                  Desarrollamos la solución exacta que necesita tu negocio con atención personalizada directamete en Perú.
                </p>
                <a
                  href="https://wa.me/51982432561?text=Hola%20Integrity%20Software,%20quisiera%20cotizar%20un%20proyecto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <i className="fab fa-whatsapp text-xl"></i> Cotizar por WhatsApp al 982 432 561
                </a>
              </div>
            </div>
          </section>
        </AssemblyPiece>

        <AssemblyPiece>
          <ContactSection />
        </AssemblyPiece>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
