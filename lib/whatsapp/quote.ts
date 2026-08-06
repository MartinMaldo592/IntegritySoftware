export interface QuotePayload {
  name?: string;
  businessRubro?: string;
  phone?: string;
  messageDetails?: string;
}

const DEFAULT_PHONE_NUMBER = "51982432561";
const COMPANY_RUC = "20609874125";
const COMPANY_NAME = "Integrity Software S.A.C.";

/**
 * Builds a clean, prefilled WhatsApp URL for a specific service quote.
 * Deep module encapsulating URL encoding, parameter validation, and RUC header formatting.
 */
export function buildServiceQuoteUrl(serviceTitle: string): string {
  const message = `Hola ${COMPANY_NAME} (RUC ${COMPANY_RUC}), quisiera cotizar el servicio: ${serviceTitle}`;
  return `https://wa.me/${DEFAULT_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a WhatsApp URL for detailed form quote requests with customer contact info.
 */
export function buildDetailedQuoteUrl(payload: QuotePayload, serviceTitle: string): string {
  const parts = [
    `Hola ${COMPANY_NAME} (RUC ${COMPANY_RUC}).`,
    `📌 *Solicitud de Cotización*`,
    payload.name ? `- *Nombre/Negocio:* ${payload.name}` : null,
    payload.businessRubro ? `- *Rubro:* ${payload.businessRubro}` : null,
    payload.phone ? `- *Teléfono:* ${payload.phone}` : null,
    `- *Servicio:* ${serviceTitle}`,
    payload.messageDetails ? `- *Detalles:* ${payload.messageDetails}` : null
  ].filter(Boolean);

  const fullMessage = parts.join("\n");
  return `https://wa.me/${DEFAULT_PHONE_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
}

/**
 * Builds a WhatsApp URL for requesting the corporate PDF Brochure.
 */
export function buildBrochureRequestUrl(): string {
  const message = `Hola ${COMPANY_NAME}, quisiera recibir el Brochure Corporativo en PDF`;
  return `https://wa.me/${DEFAULT_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a WhatsApp URL for general consultation.
 */
export function buildGeneralInquiryUrl(): string {
  const message = `Hola ${COMPANY_NAME}, quisiera cotizar un servicio para mi empresa`;
  return `https://wa.me/${DEFAULT_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
