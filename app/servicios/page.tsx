import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TopNoticeBar from "@/components/TopNoticeBar";
import ServicesCarousel from "@/components/ServicesCarousel";
import DeliverablesTabs from "@/components/DeliverablesTabs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Servicios de Software & Automatización MYPE Perú | Integrity Software",
  description:
    "Desarrollo de páginas web, chatbots de WhatsApp 24/7, tiendas virtuales con Yape/Plin, sistemas ERP/CRM y automatizaciones de procesos para MYPES en Perú.",
  keywords: [
    "Servicios Software MYPE Peru",
    "Desarrollo Web Lima",
    "Chatbot WhatsApp Peru",
    "Tiendas Virtuales Yape Plin",
    "Automatizacion de Procesos",
    "ERP CRM Peru"
  ]
};

import AssemblyPiece from "@/components/AssemblyPiece";

export default function ServiciosPage() {
  return (
    <>
      <SmoothScroll />
      <ScrollReveal />
      <TopNoticeBar />
      <Navbar />

      <main className="bg-white">
        <AssemblyPiece>
          <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white text-center">
            <div className="w-[95%] max-w-5xl mx-auto px-4">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 rounded-full text-blue-300 font-bold text-xs uppercase tracking-wider mb-6">
                <i className="fas fa-cubes"></i> Soluciones Tecnológicas Especializadas
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-heading mb-6 tracking-tight">
                Servicios de Software &amp; Automatización MYPE Perú
              </h1>
              <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
                Desarrollamos soluciones digitales a medida diseñadas específicamente para maximizar ventas, ahorrar tiempo y formalizar tu negocio en el mercado peruano.
              </p>
            </div>
          </section>
        </AssemblyPiece>

        <AssemblyPiece>
          <ServicesCarousel />
        </AssemblyPiece>

        <AssemblyPiece>
          <DeliverablesTabs />
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
