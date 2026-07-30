"use client";

export default function TrustBanner() {
  return (
    <div className="container reveal-on-scroll">
      <div className="peru-trust-bar">
        <div className="flag-peru"></div>
        <div>
          <strong style={{ color: "var(--text-primary)" }}>
            INTEGRITY SOFTWARE S.A.C. (RUC: 20609874125). Medios de Pago Locales (Yape, Plin, Transferencia BCP/BBVA/Interbank).
          </strong>
          <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
            Factura o boleta de venta electrónica, soporte técnico garantizado y atención directa por WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
}
