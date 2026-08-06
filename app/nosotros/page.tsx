import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TopNoticeBar from "@/components/TopNoticeBar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Integrity Software S.A.C. (RUC 20609874125)",
  description:
    "Conoce Integrity Software S.A.C., empresa peruana registrada formalmente especializada en impulsar micro y pequeñas empresas con software, bots e integración SUNAT.",
  keywords: [
    "Integrity Software SAC",
    "RUC 20609874125",
    "Empresa Software Peru",
    "Desarrollo MYPE Lima"
  ]
};

import AssemblyPiece from "@/components/AssemblyPiece";

export default function NosotrosPage() {
  return (
    <>
      <SmoothScroll />
      <ScrollReveal />
      <TopNoticeBar />
      <Navbar />

      <main className="bg-white">
        <AssemblyPiece>
          <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
            <div className="w-[95%] max-w-5xl mx-auto px-4 text-center">
              <h1 className="text-3xl sm:text-5xl font-extrabold font-heading mb-6 tracking-tight">
                Integrity Software S.A.C.
              </h1>
              <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
                Impulsamos el crecimiento de las MYPES en Perú mediante soluciones tecnológicas accesibles, potentes y garantizadas.
              </p>
            </div>
          </section>
        </AssemblyPiece>

        <AssemblyPiece>
          <section className="py-16 md:py-24 bg-white border-b border-slate-200">
            <div className="w-[95%] max-w-5xl mx-auto px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-6">
                    Nuestra Misión
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    En Integrity Software nacimos con el objetivo de democratizar la tecnología de primer nivel para las micro y pequeñas empresas peruanas. Creemos que cada negocio local merece herramientas digitales modernas que compitan con las grandes corporaciones.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Desarrollamos código a medida, sin plantillas pesadas, garantizando rapidez, soporte continuo y facturación formal con comprobantes de pago respaldados en SUNAT.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <strong className="text-blue-600 font-extrabold block text-lg mb-1 font-heading">RUC 20609874125</strong>
                      <span className="text-xs text-slate-500 font-medium">Empresa Registrada S.A.C.</span>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <strong className="text-blue-600 font-extrabold block text-lg mb-1 font-heading">Soporte 100% Local</strong>
                      <span className="text-xs text-slate-500 font-medium">Atención en Perú por WhatsApp</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-lg space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 font-heading">Valores que nos Definen</h3>
                  <ul className="space-y-4 m-0 p-0 list-none">
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-blue-600 text-lg mt-1"></i>
                      <div>
                        <strong className="text-slate-900 font-bold block">Transparencia Total</strong>
                        <span className="text-slate-600 text-sm">Entregables claros, precios cerrados y sin mensualidades forzadas.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-blue-600 text-lg mt-1"></i>
                      <div>
                        <strong className="text-slate-900 font-bold block">Código Limpio a Medida</strong>
                        <span className="text-slate-600 text-sm">Carga ultra-rápida, optimizada para celulares y buscadores.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-blue-600 text-lg mt-1"></i>
                      <div>
                        <strong className="text-slate-900 font-bold block">Garantía y Soporte Real</strong>
                        <span className="text-slate-600 text-sm">Acompañamiento post-entrega y solución rápida a requerimientos.</span>
                      </div>
                    </li>
                  </ul>
                </div>
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
