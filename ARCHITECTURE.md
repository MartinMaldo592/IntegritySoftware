# 🏛️ Documentación de Arquitectura de Software: Integrity Software S.A.C.

> **Fecha:** Julio 2026  
> **Versión de Arquitectura:** 3.0.0 (Tailwind CSS v4 + Next.js 16 + TypeScript 7)  
> **Autor:** Antigravity AI & Equipo de Ingeniería de Integrity Software S.A.C.

---

## 🎯 1. Filosofía de Arquitectura

El proyecto está diseñado bajo los principios de **Clean Architecture** adaptados a aplicaciones web modernas de alto rendimiento con **Next.js 16 App Router** y **Tailwind CSS v4**.

### Principios Fundamentales:
1. **Desacoplamiento Estricto (Data-UI Separation):** Ningún componente visual contiene listas de datos ni textos fijos dentro del código JSX. Toda la información reside en la capa de datos (`data/`).
2. **Estilizado Utility-First con Tailwind CSS:** Cada componente UI gestiona sus propios estilos de forma aislada mediante utilidades de Tailwind CSS, haciendo trivial la adición, duplicación o edición de secciones en el futuro.
3. **Tipado Estricto Cero-Implicit-Any (`types/`):** Todas las estructuras de datos, props y respuestas de estado están respaldadas por interfaces de **TypeScript 7.0**.
4. **Cero Manipulación Manual del DOM:** Las animaciones e interacciones (efectos 3D tilt, carruseles horizontales, tabs morphing) se gestionan mediante **React Hooks** (`useState`, `useEffect`, `useRef`).

---

## 📐 2. Diagrama de Capas de la Arquitectura

```mermaid
graph TD
    subgraph Data & Types Layer
        T[types/index.ts] --> D1[data/hero.ts]
        T --> D2[data/benefits.ts]
        T --> D3[data/services.ts]
        T --> D4[data/testimonials.ts]
        T --> D5[data/deliverables.ts]
    end

    subgraph Component UI Layer (Tailwind CSS v4)
        D1 --> C1[components/HeroSection.tsx]
        D2 --> C2[components/BenefitsGrid.tsx]
        D3 --> C3[components/ServicesCarousel.tsx]
        D4 --> C4[components/TestimonialsCarousel.tsx]
        D5 --> C5[components/DeliverablesTabs.tsx]
        C6[components/TopNoticeBar.tsx]
        C7[components/Navbar.tsx]
        C8[components/ContactSection.tsx]
        C9[components/Footer.tsx]
        C10[components/WhatsAppFloat.tsx]
    end

    subgraph App Orchestration Layer
        C1 & C2 & C3 & C4 & C5 & C6 & C7 & C8 & C9 & C10 --> Page[app/page.tsx]
        Layout[app/layout.tsx] --> Page
    end
```

---

## 📦 3. Responsabilidad de Componentes

| Componente | Archivo | Responsabilidad |
| :--- | :--- | :--- |
| **Root Layout** | `app/layout.tsx` | Inyección de HTML base, fuentes de Google, FontAwesome y metadata SEO. |
| **Página Principal** | `app/page.tsx` | Componedor ligero (~25 líneas) que orquesta los 11 componentes. |
| **Top Notice Bar** | `components/TopNoticeBar.tsx` | Banner superior corporativo con RUC 20609874125. |
| **Navbar** | `components/Navbar.tsx` | Menú de navegación principal con menú drawer responsivo. |
| **Hero Section** | `components/HeroSection.tsx` | Slider animado con máquina de escribir y parallax. |
| **Benefits Grid** | `components/BenefitsGrid.tsx` | Tarjetas de beneficios con rotación 3D en mouse move. |
| **Services Carousel** | `components/ServicesCarousel.tsx` | Carrusel horizontal deslizante para los 5 servicios MYPE. |
| **Testimonials Carousel** | `components/TestimonialsCarousel.tsx` | Carrusel horizontal de calificaciones de clientes en Perú. |
| **Deliverables Tabs** | `components/DeliverablesTabs.tsx` | Pestañas interactivas con indicador deslizante (*morphing pill*). |
| **Trust Banner** | `components/TrustBanner.tsx` | Banner informativo de medios de pago locales (Yape/Plin/BCP). |
| **Contact Section** | `components/ContactSection.tsx` | Formulario de cotización con redirección automática a WhatsApp API. |
| **Footer** | `components/Footer.tsx` | Pie de página con datos de contacto y derechos reservados. |
| **WhatsApp Float** | `components/WhatsAppFloat.tsx` | Botón flotante pulsante de atención 24/7. |

---

## 🔧 4. Mantenimiento y Extensibilidad

### ¿Cómo agregar o modificar un Servicio MYPE?
1. Abre [data/services.ts](file:///c:/Users/1964-oti/Downloads/PROYECTOS/IntegritySoftware/data/services.ts).
2. Agrega o modifica el objeto cumpliendo la interfaz `ServiceItem`.
3. ¡Listo! El componente `ServicesCarousel.tsx` lo renderizará automáticamente.

### ¿Cómo modificar el diseño o agregar una sección nueva?
1. Crea un nuevo componente en `components/NuevaSeccion.tsx`.
2. Utiliza las clases utilitarias de **Tailwind CSS**.
3. Importa e inserta el componente en `app/page.tsx`.

---

## 🔒 5. Estándares de Compilación

La aplicación utiliza el compilador oficial de Next.js 16 con soporte para **TypeScript 7 CLI** y **Tailwind CSS v4**:
```bash
npm run build
```
- **Modo Estricto:** Activo sin errores de tipos.
- **Renderizado Estático (SSG):** Páginas estáticas pre-renderizadas para máxima velocidad y SEO.
