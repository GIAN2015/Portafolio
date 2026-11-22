// data/projects.ts
export type Project = {
  slug: string;
  title: string;
  company?: string;
  type: "3D" | "Integración" | "IA" | "Automatización" | "Web" | "Ecommerce" | "Sistema" | "Landing" | "App";
  description: string;
  problem?: string;
  solution?: string;
  role: string;
  stack: string[];
  tags: string[];
  year: string;
  links: { demo?: string; repo?: string };
  highlights: string[];

  /** Pasos del flujo / arquitectura, se dibujan como diagrama */
  architecture?: string[];
  /** Proyecto de empresa: se muestra sin código ni datos reales */
  confidential?: boolean;
  /** Muestra el visor 3D interactivo en el detalle */
  demo3d?: boolean;

  cover?: string; // "/projects/xxx.png"
  accent?: "blue" | "violet" | "emerald" | "amber";
};

export const projects: Project[] = [
  {
    slug: "visor-3d-cad-planta",
    title: "Visualización 3D de piezas CAD en planta",
    company: "CADSO · cliente industrial",
    type: "3D",
    description:
      "Sistema que exporta automáticamente los modelos de SolidWorks a 3D web y los muestra en los televisores de planta al escanear la etiqueta de la pieza.",
    problem:
      "En planta, los operarios necesitaban ver la pieza exacta que van a ensamblar, con sus datos de ingeniería, sin abrir SolidWorks ni buscar planos impresos.",
    solution:
      "Un proceso en segundo plano exporta los archivos de SolidWorks a binario 3D (.glb) junto con sus propiedades, los publica del servidor a la nube y un visor web los renderiza. Al escanear la etiqueta, el televisor muestra la pieza en modo ensamble o modo pieza con su data.",
    role: "Diseño de la arquitectura, automatización de la exportación CAD, publicación en la nube y desarrollo del visor 3D",
    stack: ["SolidWorks API", "glTF / .glb", "Three.js / WebGL", "Nube", "Lector de códigos"],
    tags: ["CAD", "3D", "Manufactura", "Integración"],
    year: "2026",
    links: {},
    highlights: [
      "Exportación CAD → .glb automática, sin intervención manual",
      "La pieza aparece sola en la TV al escanear la etiqueta",
      "Modo ensamble y modo pieza con datos de ingeniería",
    ],
    architecture: ["SolidWorks", "Exportación automática .glb", "Servidor → Nube", "Visor 3D web", "TV de planta + escáner"],
    confidential: true,
    demo3d: true,
    cover: "/projects/visor-3d-cad-planta.svg",
    accent: "violet",
  },
  {
    slug: "netsuite-looker-pipeline",
    title: "Pipeline de datos NetSuite → Looker Studio",
    company: "CADSO",
    type: "Integración",
    description:
      "Integración automática que lleva Casos, Actividades Técnicas y Oportunidades del ERP a dashboards gerenciales.",
    problem:
      "La información comercial y de servicio técnico vivía dentro de NetSuite y los reportes para gerencia se armaban a mano exportando datos, con información desactualizada y horas de trabajo repetitivo.",
    solution:
      "Desarrollé RESTlets en SuiteScript 2.x que exponen los registros del ERP (con consultas SuiteQL y Saved Searches) y los sincronizan con Google Sheets mediante su API. Esas hojas alimentan dashboards en Looker Studio que se actualizan solos.",
    role: "Diseño de la integración, desarrollo SuiteScript (RESTlets), modelado de datos y dashboards",
    stack: ["Oracle NetSuite", "SuiteScript 2.x", "RESTlets", "SuiteQL", "Google Sheets API", "Looker Studio"],
    tags: ["ERP", "Integración", "BI", "Automatización"],
    year: "2025-2026",
    links: {},
    highlights: [
      "Reportes gerenciales sin consolidación manual",
      "Datos de ventas y servicio técnico en un solo tablero",
      "Depuración de RESTlets para Casos, Actividades y Oportunidades",
    ],
    architecture: ["NetSuite ERP/CRM", "RESTlet (SuiteScript 2.x)", "Google Sheets API", "Looker Studio"],
    cover: "/projects/netsuite-looker-pipeline.svg",
    confidential: true,
    accent: "blue",
  },
  {
    slug: "ia-generativa-erp-mcp",
    title: "Asistente de IA conectado al ERP (MCP + OAuth 2.0)",
    company: "CADSO",
    type: "IA",
    description:
      "Integración de IA generativa con Oracle NetSuite para consultar datos del ERP en lenguaje natural, de forma segura.",
    problem:
      "Obtener información puntual del ERP (clientes, oportunidades, actividades) requería saber construir búsquedas o pedírselo al área técnica.",
    solution:
      "Configuré la conexión de un asistente de IA (Claude) con NetSuite mediante Model Context Protocol (MCP), autenticado con OAuth 2.0 y un rol dedicado de solo lectura, para que la IA consulte datos reales sin poder modificar nada.",
    role: "Configuración de la integración, seguridad (OAuth 2.0, roles y permisos) y pruebas",
    stack: ["Claude", "MCP", "Oracle NetSuite", "OAuth 2.0", "SuiteQL"],
    tags: ["IA Generativa", "ERP", "Seguridad"],
    year: "2026",
    links: {},
    highlights: [
      "Consultas al ERP en lenguaje natural",
      "Rol de solo lectura: la IA no puede alterar datos",
      "Acceso controlado y auditable con OAuth 2.0",
    ],
    architecture: ["Usuario", "Asistente de IA (Claude)", "Servidor MCP", "OAuth 2.0 · rol solo lectura", "NetSuite ERP"],
    cover: "/projects/ia-generativa-erp-mcp.svg",
    confidential: true,
    accent: "violet",
  },
  {
    slug: "suitelet-facturas-totales",
    title: "Suitelet de Facturas Totales",
    company: "CADSO",
    type: "Sistema",
    description:
      "Módulo a medida dentro de NetSuite que consolida facturas con conversión de tipo de cambio y cálculo de detracción.",
    problem:
      "Finanzas necesitaba ver el total facturado en una sola moneda y con las detracciones aplicadas, algo que los reportes estándar del ERP no daban.",
    solution:
      "Desarrollé un Suitelet en SuiteScript 2.x que consulta las facturas, aplica el tipo de cambio y la lógica de detracción, y presenta el consolidado dentro del mismo ERP.",
    role: "Análisis del requerimiento con Finanzas, desarrollo SuiteScript y validación",
    stack: ["Oracle NetSuite", "SuiteScript 2.x", "Suitelet", "SuiteQL"],
    tags: ["ERP", "Finanzas", "Desarrollo a medida"],
    year: "2025-2026",
    links: {},
    highlights: ["Consolidado en una sola moneda", "Detracción calculada automáticamente", "Integrado al flujo del ERP"],
    architecture: ["Facturas en NetSuite", "Suitelet (SuiteScript 2.x)", "Tipo de cambio + detracción", "Reporte consolidado"],
    cover: "/projects/suitelet-facturas-totales.svg",
    confidential: true,
    accent: "emerald",
  },
  {
    slug: "migracion-historica-netsuite",
    title: "Migración de 5 años de datos históricos a NetSuite",
    company: "CADSO",
    type: "Automatización",
    description:
      "Proceso ETL para limpiar, transformar e importar en bloque las actividades de 2021 a 2025 al ERP.",
    problem:
      "Cinco años de actividades comerciales y técnicas estaban fuera del ERP, lo que impedía tener historial completo de clientes y reportes confiables.",
    solution:
      "Extraje y normalicé los datos, los transformé al formato de importación de NetSuite y los cargué mediante importación masiva CSV. Documenté el proceso en manuales técnicos (importación de facturas de proveedores y eliminación masiva) para que el equipo pueda repetirlo.",
    role: "ETL, validación de datos, carga masiva y documentación técnica",
    stack: ["Oracle NetSuite", "CSV Import", "Excel avanzado", "SQL"],
    tags: ["ETL", "Datos", "Documentación"],
    year: "2025-2026",
    links: {},
    highlights: ["Historial 2021–2025 disponible en el ERP", "Proceso documentado y repetible", "Datos validados antes de la carga"],
    architecture: ["Datos históricos 2021–2025", "Limpieza y transformación", "CSV Import masivo", "NetSuite ERP"],
    cover: "/projects/migracion-historica-netsuite.svg",
    confidential: true,
    accent: "amber",
  },
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
    highlights: [
      "40% menos tiempo de resolución de tickets",
      "100% de los reportes operativos centralizados",
      "Roles, estados, historial y notificaciones",
    ],
    architecture: ["Usuario", "Frontend Next.js", "API REST Nest.js", "PostgreSQL"],
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
