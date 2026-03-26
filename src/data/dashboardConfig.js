// ─── Fuentes compartidas por todos los tableros ───────────────────────────────
export const sharedSources = [
  {
    id: 1,
    name: "EVA — Evaluaciones agropecuarias municipales",
    entity: "EVA · Ministerio de Agricultura",
    description:
      "Precios semanales promedio pagados al productor en centrales mayoristas y minoristas de Colombia, disponibles desde la semana 15 de 2012.",
    url: "https://www.datos.gov.co/Agricultura-y-Desarrollo-Rural/Evaluaciones-Agropecuarias-Municipales-EVA-2019-20/uejq-wxrr/about_data",
    format: "XLSX",
    color: "#1a3d2b",
  },
  {
    id: 2,
    name: "DANE · Encuesta Nacional Agropecuaria (ENA)",
    entity: "DANE · Departamento Administrativo Nacional de Estadística",
    description:
      "Área sembrada, producción y rendimiento por cultivo y municipio a nivel nacional, disponible desde 2014 con periodicidad anual.",
    url: "https://www.dane.gov.co/index.php/estadisticas-por-tema/agropecuario/encuesta-nacional-agropecuaria-ena",
    format: "XLSX",
    color: "#2d6a4f",
  },
  {
    id: 3,
    name: "Clima y sector agropecuario colombiano",
    entity: "Ministerio de Agricultura",
    description:
      "Área sembrada, producción y rendimiento por cultivo y municipio a nivel nacional.",
    url: "https://colombia.aclimate.org/Experto/",
    format: "XLSX",
    color: "#3a5a8a",
  },
  {
    id: 4,
    name: "Clima y sector agropecuario colombiano",
    entity: "UPRA · Unidad de Planificación Rural Agropecuaria",
    description:
      "Tasa de deserción escolar en departamentos productores de papa como indicador socioeconómico complementario.",
    url: "https://upra.gov.co/es-co/monitoreo-de-cultivos",
    format: "XLSX",
    color: "#7a3a2a",
  },
];

// ─── Configuración de cada tablero ───────────────────────────────────────────
export const dashboardData = {
  "precios-diarios": {
    name: "Análisis por departamento",
    title: "Análisis productos agrícolas por departamento",
    description:
      "Visualización de productos agrícolas por departamento, con área de cultivo, producción y rendimiento.",
    powerBiUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiZWY0YTQ4N2EtOWI2Zi00YTQ2LWFkZTItZDlmODE0NTE1ZDQxIiwidCI6IjY5M2NiZWEwLTRlZjktNDI1NC04OTc3LTc2ZTA1Y2I1ZjU1NiIsImMiOjR9&pageName=2724a70cc66cfc03dba0",
    icon: "📈",
    stat: "Cultivo por departamento",
  },
  abastecimiento: {
    name: "Análisis integral",
    title: "Análisis integral de productos agrícolas",
    description:
      "Analisis Integral:  comportamiento del sector agrícola colombiano durante el período 2019–2024, consolidando en un solo espacio las variables más relevantes para el análisis de la actividad productiva nacional.",
    powerBiUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiZWY0YTQ4N2EtOWI2Zi00YTQ2LWFkZTItZDlmODE0NTE1ZDQxIiwidCI6IjY5M2NiZWEwLTRlZjktNDI1NC04OTc3LTc2ZTA1Y2I1ZjU1NiIsImMiOjR9",
    icon: "🌾",
    stat: "Mercado nacional",
  },
  "comercio-exterior": {
    name: "Estudio por municipio",
    title: "Análisis de comercio por municipio",
    description:
      "Sector Agricola Por Municipio: presenta un análisis detallado de la actividad agrícola colombiana desagregado a nivel municipal, permitiendo explorar con precisión territorial cómo se distribuye la producción, el área cultivada y la eficiencia del campo a lo largo del país.",
    powerBiUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiZWY0YTQ4N2EtOWI2Zi00YTQ2LWFkZTItZDlmODE0NTE1ZDQxIiwidCI6IjY5M2NiZWEwLTRlZjktNDI1NC04OTc3LTc2ZTA1Y2I1ZjU1NiIsImMiOjR9&pageName=5c3da758849225e80482",
    icon: "🌍",
    stat: "Cobertura internacional",
  },
  "costos-produccion": {
    name: "Tendencias por región",
    title: "Análisis de tendencias de cultivo por región",
    description:
      "Tendencias de los Cultivos por Año — Colombia 2019–2024: Este tablero analiza la evolución temporal del sector agrícola colombiano, poniendo el foco en cómo han cambiado la producción y la eficiencia productiva año a año, tanto a nivel nacional como por departamento.",
    powerBiUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiZWY0YTQ4N2EtOWI2Zi00YTQ2LWFkZTItZDlmODE0NTE1ZDQxIiwidCI6IjY5M2NiZWEwLTRlZjktNDI1NC04OTc3LTc2ZTA1Y2I1ZjU1NiIsImMiOjR9&pageName=05cd401fc5aea6915d43",
    icon: "🧮",
    stat: "Por región",
  },
};
