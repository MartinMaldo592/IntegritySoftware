import { DeliverableTab } from "@/types";

export const DELIVERABLES_DATA: DeliverableTab[] = [
  {
    id: "tab-landing",
    navLabel: "1. Landing + Bot",
    title: "Landing Page + Bot de WhatsApp",
    description: "Solución para captar clientes y agendar citas automáticamente desde WhatsApp y la Web.",
    features: [
      "Diseño Web: Landing page optimizada para celulares y alta conversión.",
      "Bot de WhatsApp: Respuestas automáticas 24/7, toma de datos y agendas.",
      "Dominio & Hosting: Configuración lista para anunciar en Facebook / Google Ads."
    ],
    tag: "Desarrollo Personalizado",
    img: "/img/dashboard_mockup.jpg"
  },
  {
    id: "tab-tienda",
    navLabel: "2. Tienda Virtual",
    title: "Catálogo Digital / Tienda Virtual Básica",
    description: "Para MYPES que venden por redes sociales y necesitan automatizar su catálogo con Yape, Plin y tarjetas.",
    features: [
      "Pasarelas Perú: Pago con Yape, Plin, Culqi, Mercado Pago o tarjeta de crédito.",
      "Control de Stock: Gestión sencilla de productos, categorías y precios.",
      "Pedidos Directos: Confirmación automática de compra directo a tu WhatsApp."
    ],
    tag: "Desarrollo Personalizado",
    img: "/img/hero_enterprise_tech_1785388460733.jpg"
  },
  {
    id: "tab-erp",
    navLabel: "3. ERP / CRM MYPE",
    title: "Sistema de Gestión a Medida (ERP / CRM simple)",
    description: "Centraliza todo el control de tu empresa en un sistema web accesible desde tu celular o computadora.",
    features: [
      "Módulos: Inventario, ventas, registro de clientes e historial de caja.",
      "Dashboard: Cuadro de mando visual con gráficos sencillos e intuitivos.",
      "Multiusuario: Accesos con permisos para administradores y vendedores."
    ],
    tag: "Desarrollo Personalizado",
    img: "/img/dashboard_mockup.jpg"
  },
  {
    id: "tab-sunat",
    navLabel: "4. SUNAT & APIs",
    title: "Automatización & Conexión de Sistemas (SUNAT/APIs)",
    description: "Conecta tus ventas diarias con la emisión automática de boletas y facturas en SUNAT sin digitar nada manualmente.",
    features: [
      "SUNAT / OSE: Emisión automática de comprobantes electrónicos (Boletas / Facturas).",
      "Reportes Automáticos: Envío diario de resumen de ventas por correo o WhatsApp.",
      "Sincronización: Conexión de hojas de Google Sheets / Excel con tu sistema."
    ],
    tag: "Integración Directa",
    img: "/img/dashboard_mockup.jpg"
  },
  {
    id: "tab-soporte",
    navLabel: "5. Soporte Mensual",
    title: "Mantenimiento & Soporte Técnico Mensual",
    description: "Mantén tu web o sistema siempre activo, rápido y seguro sin preocuparte por fallas técnicas.",
    features: [
      "Monitoreo 24/7: Control de servidores, velocidad y copias de seguridad.",
      "Actualizaciones: Cambios menores de texto, precios o imágenes a solicitud.",
      "Soporte Directo: Atención prioritaria por WhatsApp para resolver cualquier incidencia."
    ],
    tag: "Plan de Soporte Mensual Recurrente",
    img: "/img/hero_enterprise_tech_1785388460733.jpg"
  }
];
