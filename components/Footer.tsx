"use client";

export default function Footer() {
  return (
    <footer className="footer-light">
      <div className="container">
        <div className="footer-grid-light">
          <div className="footer-brand">
            <a href="#" className="brand-logo" style={{ textDecoration: "none" }}>
              <div className="logo-symbol">IS</div>
              <div className="brand-title" style={{ color: "#ffffff" }}>
                Integrity <span className="living-software">Software</span>
              </div>
            </a>
            <p>
              INTEGRITY SOFTWARE S.A.C. (RUC 20609874125). Soluciones de software, automatización y bots accesibles para micro y pequeñas empresas en el Perú.
            </p>
          </div>

          <div className="footer-col">
            <h4>Servicios MYPE</h4>
            <ul>
              <li><a href="#servicios">1. Landing + Bot de WhatsApp</a></li>
              <li><a href="#servicios">2. Tienda Virtual & Yape/Culqi</a></li>
              <li><a href="#servicios">3. ERP/CRM MYPE a Medida</a></li>
              <li><a href="#servicios">4. Conexión SUNAT & APIs</a></li>
              <li><a href="#servicios">5. Soporte Técnico Mensual</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#casos">Casos de Éxito</a></li>
              <li><a href="#detalles">Entregables</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contacto Rápido</h4>
            <ul>
              <li>INTEGRITY SOFTWARE S.A.C.</li>
              <li>RUC: 20609874125</li>
              <li>Lima, Perú</li>
              <li>contacto@integritysoftware.pe</li>
              <li>WhatsApp: +51 900 000 000</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 INTEGRITY SOFTWARE S.A.C. (RUC 20609874125). Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
