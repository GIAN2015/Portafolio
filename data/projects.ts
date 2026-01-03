// data/projects.ts
export type Project = {
  slug: string;
  title: string;
  company?: string;
  type: "Web" | "Ecommerce" | "Sistema" | "Landing" | "App";
  description: string;
  problem?: string;
  solution?: string;
  role: string;
  stack: string[];
  tags: string[];
  year: string;
  links: { demo?: string; repo?: string };
  highlights: string[];

  cover?: string; // "/projects/xxx.png"
  accent?: "blue" | "violet" | "emerald" | "amber";
};

export const projects: Project[] = [
  {
    slug: "helpdesk-tickets-next-nest-postgres",
    title: "Sistema Helpdesk de Tickets",
    company: "Danyris",
    type: "Sistema",
    description:
      "Sistema interno de incidencias con roles, estados y seguimiento.",
    problem: "Flujo de soporte lento y desordenado para incidencias internas.",
    solution:
      "Frontend Next.js + Backend Nest.js + PostgreSQL, desplegado en servidor.",
    role: "Fullstack (Front + Back) / Integración DB / Deploy",
    stack: ["Next.js", "Nest.js", "PostgreSQL"],
    tags: ["Fullstack", "Sistema", "Empresa"],
    year: "2025",
    links: { demo: "https://sistema-tickets.danyris.com/login" },
    highlights: ["Roles y estados", "Historial y notificaciones", "Mejor control del soporte"],
    cover: "/projects/helpdesk-tickets-next-nest-postgres.png",
    accent: "blue",
  },
  {
    slug: "ds-clic-woocommerce-deltron",
    title: "DS CLIC - Ecommerce (WooCommerce + Deltron)",
    company: "Danyris",
    type: "Ecommerce",
    description:
      "Ecommerce conectado a API de Deltron para mostrar catálogo solicitado.",
    problem:
      "Catálogo cambiaba constantemente y necesitaban sincronizar productos.",
    solution:
      "WordPress + WooCommerce + Elementor con integración a API REST (Deltron).",
    role: "Implementación ecommerce + Integración API",
    stack: ["WordPress", "WooCommerce", "Elementor", "API REST"],
    tags: ["Ecommerce", "WordPress", "API"],
    year: "2024-2025",
    links: { demo: "https://dsclic.com.pe/" },
    highlights: ["Consumo de API", "Catálogo actualizado", "UX enfocada en venta"],
    cover: "/projects/ds-clic-woocommerce-deltron.png",
    accent: "amber",
  },
  {
    slug: "danyris-nest-web",
    title: "Web Corporativa Danyris",
    company: "Danyris",
    type: "Web",
    description: "Sitio corporativo para presentar soluciones tecnológicas.",
    problem: "Necesitaban presencia profesional y estructura clara de servicios.",
    solution:
      "Desarrollo con Nest.js y secciones optimizadas para navegación y conversión.",
    role: "Desarrollo web / Implementación",
    stack: ["Nest.js", "Node.js"],
    tags: ["Backend", "Web", "Empresa"],
    year: "2024-2025",
    links: { demo: "https://danyris.com" },
    highlights: ["Arquitectura ordenada", "Deploy en servidor", "Mejor estructura de navegación"],
    cover: "/projects/danyris-nest-web.png",
    accent: "violet",
  },
  {
    slug: "planetas-nasa-laravel",
    title: "Registro de Planetas (NASA API)",
    type: "App",
    description: "App conectada a una API de NASA para información de planetas.",
    role: "Backend / Integración API / Layout",
    stack: ["Laravel", "PHP", "API REST"],
    tags: ["Laravel", "API", "App"],
    year: "2024",
    links: {},
    highlights: ["Consumo de API", "Estructura MVC", "Presentación de datos"],
    cover: "/projects/planetas-nasa-laravel.png",
    accent: "emerald",
  },
  {
    slug: "detalles-papo-wordpress",
    title: "Detalles Papo - Web (WordPress)",
    company: "Detalles Papo",
    type: "Web",
    description: "Sitio para librería/regalos con secciones y contacto.",
    role: "Implementación web",
    stack: ["WordPress", "Elementor"],
    tags: ["WordPress", "Web"],
    year: "2024",
    links: {},
    highlights: ["Diseño responsive", "Secciones claras", "Contacto directo"],
    cover: "/projects/detalles-papo-wordpress.png",
    accent: "amber",
  },
  {
    slug: "macetas-mary-vue-ecommerce",
    title: "Macetas Mary - Ventas (Vue.js)",
    company: "Macetas Mary",
    type: "Ecommerce",
    description: "Página de ventas para macetas con catálogo y contacto.",
    role: "Frontend Developer",
    stack: ["Vue.js", "JavaScript"],
    tags: ["Frontend", "Vue", "Ecommerce"],
    year: "2025",
    links: {},
    highlights: ["UI limpia", "Catálogo", "Navegación simple"],
    cover: "/projects/macetas-mary-vue-ecommerce.png",
    accent: "emerald",
  },
];
