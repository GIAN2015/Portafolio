// data/profile.ts
export const profile = {
  name: "Gian Carlos Sinarahua Cárdenas",
  location: "Lima, Perú",
  phone: "+51 967 152 992",
  email: "giansica29@gmail.com",

  // NUEVO
  whatsapp: {
    number: "51967152992",
    message:
      "Hola Gian, vi tu portafolio y quiero conversar sobre un proyecto. ¿Tienes disponibilidad?",
  },

  headline:
    "Integración de sistemas empresariales: Oracle NetSuite ERP/CRM, APIs REST/SOAP, automatización e IA generativa.",
  current:
    "Analista de Desarrollo y Soporte Técnico CAD-PDM-ERP en CADSO · Ingeniería de Sistemas (UNTELS, egreso 2026).",
  highlights: [
    "Desarrollo y personalización de Oracle NetSuite (SuiteScript 2.x, SuiteQL, Saved Searches)",
    "Integraciones automáticas NetSuite → Google Sheets → Looker Studio para reportes gerenciales",
    "IA generativa conectada al ERP con MCP y OAuth 2.0 (rol de solo lectura)",
    "Integraciones entre SolidWorks PDM, ERP y servicios en la nube vía APIs REST/SOAP",
    "Sistema de tickets interno: 40% menos tiempo de resolución",
    "Publicación científica IWHICI 2025",
  ],
  experience: [
    {
      company: "CAD Solutions S.A. (CADSO)",
      role: "Analista de Desarrollo y Soporte Técnico CAD-PDM-ERP",
      period: "Jul 2025 – Actualidad",
      points: [
        "Desarrollo y administración de Oracle NetSuite ERP/CRM: Suitelets, RESTlets, SuiteFlow, SuiteQL, roles y licencias.",
        "Automatización de flujos de datos hacia dashboards de Looker Studio y migración de 5 años de datos históricos.",
        "Integración de IA generativa con el ERP (MCP + OAuth 2.0) e integraciones CAD/PDM con servicios en la nube.",
        "Soporte técnico a clientes en SolidWorks y SolidWorks PDM.",
      ],
    },
    {
      company: "Soluciones Tecnológicas Danyris S.A.C.",
      role: "Desarrollador Web Full-stack",
      period: "Oct 2023 – Oct 2025",
      points: [
        "Sistema de Gestión de Incidencias: 100% de reportes centralizados y 40% menos tiempo de resolución.",
        "Arquitectura REST y despliegue en contenedores (Docker/Proxmox) con 99.9% de disponibilidad.",
        "Ecommerce integrado a la API de un mayorista para sincronizar el catálogo.",
      ],
    },
    {
      company: "Joyería Yuler",
      role: "Líder Técnico",
      period: "Ene 2024 – Oct 2024",
      points: [
        "Sistema de inventario a medida: 100% del stock digitalizado y 25% menos mermas.",
        "Integración con el punto de venta (POS) y 70% menos tiempo de conteo manual.",
      ],
    },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/gian-sinarahua-961827236/",
    github: "https://github.com/GIAN2015",
    cv: "/cv/CV_Gian_Sinarahua_2026.pdf",
  },
  skills: {
    erp: [
      "Oracle NetSuite",
      "SuiteScript 2.x",
      "Suitelets / RESTlets",
      "SuiteFlow",
      "SuiteQL",
      "Saved Searches",
    ],
    integrations: [
      "APIs REST / SOAP",
      "OAuth 2.0",
      "MCP (IA generativa)",
      "Google Sheets API",
      "SolidWorks PDM",
      "ETL / CSV Import",
    ],
    stack: [
      "Next.js",
      "Nest.js",
      "Laravel",
      "WordPress",
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "SQL Server",
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
    ],
    tools: ["Looker Studio", "Power BI", "Excel avanzado (macros)", "Docker", "Git / GitHub", "Oracle Cloud", "SolidWorks"],
  },
  education: [
    { title: "Ingeniería de Sistemas", org: "UNTELS · 2022 – 2026" },
  ],
  certifications: [
    "SOLIDWORKS University – Technical SOLIDWORKS Foundations (PDM, 3DEXPERIENCE) – en curso",
    "Cisco CCNA v7 – Introduction to Networks (Dic 2025)",
    "Excel Avanzado – Automatización con macros (Feb 2025)",
    "Pentesting Web (Feb 2025)",
    "SQL – Stored Procedures (Ene 2025)",
    "Power BI – Dashboards (Ene 2025)",
  ],
  publication: {
    title:
      '“Optimization of net revenue in fruit wholesale distribution through a linear programming model”',
    venue:
      "3rd International Workshop on Human-Centric Innovation and Computational Intelligence (IWHICI 2025)",
  },
};
