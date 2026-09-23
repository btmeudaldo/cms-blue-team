export interface SlashCommandItem {
  id: string;
  label: string;
  description: string;
  icon: string;
  category: "basic" | "aviation" | "layout" | "media";
  keywords: string[];
  snippet?: string;
  action?: "image" | "video" | "table";
}

export const SLASH_COMMANDS: SlashCommandItem[] = [
  {
    id: "heading-1",
    label: "Título Principal (H1)",
    description: "Encabezado de sección principal",
    icon: "H1",
    category: "basic",
    keywords: ["h1", "titulo", "header", "heading"],
    snippet: "<h1>Título de la Lección</h1><p><br></p>",
  },
  {
    id: "heading-2",
    label: "Subtítulo (H2)",
    description: "Subdivisión o tema secundario",
    icon: "H2",
    category: "basic",
    keywords: ["h2", "subtitulo", "seccion"],
    snippet: "<h2>Subtítulo de Sección</h2><p><br></p>",
  },
  {
    id: "heading-3",
    label: "Apartado (H3)",
    description: "Punto específico o detalle técnico",
    icon: "H3",
    category: "basic",
    keywords: ["h3", "apartado", "punto"],
    snippet: "<h3>Apartado Específico</h3><p><br></p>",
  },
  {
    id: "bullet-list",
    label: "Lista con Viñetas",
    description: "Enumeración de puntos clave",
    icon: "•",
    category: "basic",
    keywords: ["lista", "puntos", "bullet", "ul"],
    snippet: "<ul><li>Primer elemento clave</li><li>Segundo elemento clave</li></ul><p><br></p>",
  },
  {
    id: "numbered-list",
    label: "Lista Numerada",
    description: "Secuencia ordenada o pasos de procedimiento",
    icon: "1.",
    category: "basic",
    keywords: ["orden", "numeros", "pasos", "ol"],
    snippet: "<ol><li>Paso 1: Preparación inicial</li><li>Paso 2: Ejecución</li><li>Paso 3: Verificación</li></ol><p><br></p>",
  },
  {
    id: "aviation-warning",
    label: "Alerta / Precaución Aeronáutica",
    description: "Aviso de seguridad operacional o límite crítico",
    icon: "⚠️",
    category: "aviation",
    keywords: ["alerta", "warning", "precaucion", "seguridad", "peligro"],
    snippet: '<div class="my-4 rounded-2xl border-l-4 border-amber-500 bg-amber-50/70 dark:bg-amber-950/30 p-4 text-amber-900 dark:text-amber-200 text-xs shadow-2xs">\n  <div class="font-bold flex items-center gap-1.5 mb-1 text-amber-800 dark:text-amber-300">\n    <span>⚠️</span> <span>PRECAUCIÓN OPERACIONAL</span>\n  </div>\n  <p>Texto de advertencia crítica para la seguridad del vuelo o límites estructurales de la aeronave.</p>\n</div><p><br></p>',
  },
  {
    id: "aviation-note",
    label: "Procedimiento de Vuelo (SOP)",
    description: "Nota estándar de operación en cabina",
    icon: "✈️",
    category: "aviation",
    keywords: ["sop", "procedimiento", "vuelo", "nota", "cabina"],
    snippet: '<div class="my-4 rounded-2xl border border-sky-200 dark:border-sky-800 bg-sky-50/60 dark:bg-sky-950/30 p-4 text-sky-950 dark:text-sky-200 text-xs shadow-2xs">\n  <div class="font-bold flex items-center gap-1.5 mb-1 text-sky-800 dark:text-sky-300">\n    <span>✈️</span> <span>PROCEDIMIENTO ESTÁNDAR (SOP)</span>\n  </div>\n  <p>Detalla aquí la maniobra, chequeo cruzado o llamada estándar de cabina correspondiente.</p>\n</div><p><br></p>',
  },
  {
    id: "aviation-checklist",
    label: "Lista de Chequeo Rápida",
    description: "Checklist con verificación de cabina",
    icon: "📋",
    category: "aviation",
    keywords: ["checklist", "chequeo", "verificacion", "lista"],
    snippet: '<div class="my-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60 p-4 text-xs space-y-2 shadow-2xs">\n  <div class="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 mb-2 pb-2 border-b border-slate-200 dark:border-slate-800">\n    <span>📋</span> <span>LISTA DE CHEQUEO / VERIFICACIÓN</span>\n  </div>\n  <div class="flex items-center gap-2 text-slate-700 dark:text-slate-300"><span>☑️</span> <span>Mandos de vuelo ................... LIBRES Y CORRECTOS</span></div>\n  <div class="flex items-center gap-2 text-slate-700 dark:text-slate-300"><span>☑️</span> <span>Instrumentos de vuelo .............. COMPROBADOS</span></div>\n  <div class="flex items-center gap-2 text-slate-700 dark:text-slate-300"><span>☑️</span> <span>Compensador ........................ POSICIÓN DESPEGUE</span></div>\n</div><p><br></p>',
  },
  {
    id: "aviation-table",
    label: "Tabla de Rendimiento / V-Speeds",
    description: "Tabla técnica con encabezados y filas estilizadas",
    icon: "📊",
    category: "aviation",
    keywords: ["tabla", "table", "v-speeds", "velocidades", "limites", "rendimiento"],
    action: "table",
  },
  {
    id: "two-columns",
    label: "Doble Columna (Texto + Gráfico)",
    description: "Disposición en 2 columnas para diagramas y texto",
    icon: "🔀",
    category: "layout",
    keywords: ["columna", "columnas", "grid", "doble", "layout"],
    snippet: '<div class="my-5 grid grid-cols-1 md:grid-cols-2 gap-4 items-center rounded-2xl border border-slate-200 dark:border-slate-800 p-4 bg-slate-50/50 dark:bg-slate-900/50 shadow-2xs">\n  <div>\n    <p class="font-bold text-slate-900 dark:text-white mb-1">📘 Descripción del Sistema</p>\n    <p class="text-xs text-slate-600 dark:text-slate-300">Explica aquí los componentes principales del diagrama adjunto y sus funciones críticas durante las distintas fases de vuelo.</p>\n  </div>\n  <div>\n    <div class="rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-6 text-center text-xs text-slate-400">🖼️ Arrastra o pega un diagrama aquí</div>\n  </div>\n</div><p><br></p>',
  },
  {
    id: "image-upload",
    label: "Insertar Imagen o Diagrama",
    description: "Sube un archivo o proporciona una URL directa",
    icon: "🖼️",
    category: "media",
    keywords: ["imagen", "foto", "diagrama", "esquema", "upload", "img"],
    action: "image",
  },
  {
    id: "video-embed",
    label: "Incrustar Video",
    description: "Reproductor de video YouTube o MP4 para maniobras",
    icon: "🎥",
    category: "media",
    keywords: ["video", "youtube", "vimeo", "mp4", "maniobra"],
    action: "video",
  },
];

export function filterSlashCommands(query: string): SlashCommandItem[] {
  const clean = query.trim().toLowerCase().replace(/^\//, "");
  if (!clean) return SLASH_COMMANDS;
  return SLASH_COMMANDS.filter((cmd) => {
    return (
      cmd.label.toLowerCase().includes(clean) ||
      cmd.description.toLowerCase().includes(clean) ||
      cmd.keywords.some((k) => k.toLowerCase().includes(clean))
    );
  });
}

export type MarkdownShortcutType =
  | "h1"
  | "h2"
  | "h3"
  | "bullet-list"
  | "numbered-list"
  | "quote"
  | "checklist";

export interface MarkdownShortcutMatch {
  type: MarkdownShortcutType;
  prefix: string;
  cleanText: string;
}

export function detectMarkdownPrefix(lineText: string): MarkdownShortcutMatch | null {
  if (lineText.startsWith("# ")) {
    return { type: "h1", prefix: "# ", cleanText: lineText.slice(2) };
  }
  if (lineText.startsWith("## ")) {
    return { type: "h2", prefix: "## ", cleanText: lineText.slice(3) };
  }
  if (lineText.startsWith("### ")) {
    return { type: "h3", prefix: "### ", cleanText: lineText.slice(4) };
  }
  if (lineText.startsWith("- ") || lineText.startsWith("* ")) {
    return { type: "bullet-list", prefix: lineText.slice(0, 2), cleanText: lineText.slice(2) };
  }
  if (/^\d+\.\s/.test(lineText)) {
    const match = lineText.match(/^(\d+\.\s)(.*)$/);
    if (match) {
      return { type: "numbered-list", prefix: match[1], cleanText: match[2] };
    }
  }
  if (lineText.startsWith("> ")) {
    return { type: "quote", prefix: "> ", cleanText: lineText.slice(2) };
  }
  if (lineText.startsWith("[] ")) {
    return { type: "checklist", prefix: "[] ", cleanText: lineText.slice(3) };
  }
  return null;
}

export function generateAviationTableSnippet(): string {
  return `<div class="my-5 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs">
  <table class="w-full text-left text-xs border-collapse">
    <thead>
      <tr class="border-b border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 font-bold">
        <th class="p-3 border-r border-slate-200 dark:border-slate-800">Parámetro / V-Speed</th>
        <th class="p-3 border-r border-slate-200 dark:border-slate-800">Valor / Límite</th>
        <th class="p-3">Observaciones Operacionales</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
      <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/40">
        <td class="p-3 border-r border-slate-100 dark:border-slate-800 font-semibold text-[#1a80ff]">Vx (Mejor Ángulo)</td>
        <td class="p-3 border-r border-slate-100 dark:border-slate-800 font-mono">62 KIAS</td>
        <td class="p-3">Franqueamiento de obstáculos en despegue</td>
      </tr>
      <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/40">
        <td class="p-3 border-r border-slate-100 dark:border-slate-800 font-semibold text-[#1a80ff]">Vy (Mejor Régimen)</td>
        <td class="p-3 border-r border-slate-100 dark:border-slate-800 font-mono">74 KIAS</td>
        <td class="p-3">Máxima ganancia de altitud por unidad de tiempo</td>
      </tr>
      <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/40">
        <td class="p-3 border-r border-slate-100 dark:border-slate-800 font-semibold text-[#1a80ff]">Va (Maniobra)</td>
        <td class="p-3 border-r border-slate-100 dark:border-slate-800 font-mono">105 KIAS</td>
        <td class="p-3">Velocidad límite en aire turbulento</td>
      </tr>
    </tbody>
  </table>
</div><p><br></p>`;
}
