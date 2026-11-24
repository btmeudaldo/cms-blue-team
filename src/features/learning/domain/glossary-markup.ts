import type { GlossaryEntry } from "@/features/learning/content/mcc-glossary";

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

interface CompiledGlossaryMatcher {
  regex: RegExp;
  lookup: Map<string, string>;
}

export function compileGlossaryMatcher(
  entries: GlossaryEntry[],
): CompiledGlossaryMatcher | null {
  if (!entries.length) return null;

  const lookup = new Map<string, string>();
  const forms: string[] = [];

  for (const entry of entries) {
    const allForms = [entry.term, ...(entry.aliases ?? [])];
    for (const form of allForms) {
      if (!form) continue;
      if (!lookup.has(form)) {
        lookup.set(form, entry.term);
        forms.push(form);
      }
    }
  }

  // Sort longest-first so multi-word or longer terms ("SEC F-PLN", "A/THR", "ADIRU")
  // match before shorter substrings ("SEC", "F-PLN", "IR").
  forms.sort((a, b) => b.length - a.length);

  const alternation = forms.map(escapeRegex).join("|");
  // Whole-token boundary: allow "/" as a separator between standalone acronyms
  // (e.g. PFD/ND, VMO/MMO, ECAM/ND XFR) while explicit slash terms (A/THR, E/WD,
  // F/CTL, V/S) still match as single tokens thanks to longest-first sorting.
  const pattern = `(?<![\\p{L}\\p{N}_])${`(?:${alternation})`}(?![\\p{L}\\p{N}_])`;

  return {
    regex: new RegExp(pattern, "gu"),
    lookup,
  };
}

/**
 * Envuelve siglas y conceptos del glosario únicamente en nodos de texto dentro del
 * cuerpo de las diapositivas, sin tocar etiquetas/atributos HTML, encabezados <h1>,
 * enlaces/botones existentes ni el pie de fuente inferior.
 */
export function annotateGlossaryHtml(
  html: string,
  entries: GlossaryEntry[],
): string {
  if (!html || !entries.length) return html;

  const matcher = compileGlossaryMatcher(entries);
  if (!matcher) return html;

  // Tokenize into HTML tags vs text chunks
  const parts = html.split(/(<[^>]+>)/g);
  let skipDepth = 0;
  const skipTagStack: string[] = [];
  const SKIP_TAGS = new Set(["h1", "a", "button", "script", "style", "svg", "textarea"]);

  const out: string[] = [];

  for (const part of parts) {
    if (!part) continue;

    if (part.startsWith("<") && part.endsWith(">")) {
      out.push(part);

      const isClosing = /^<\s*\//.test(part);
      const isSelfClosing = /\/\s*>$/.test(part) || /^<!/.test(part);
      const tagMatch = part.match(/^<\s*\/?\s*([a-zA-Z0-9-]+)/);
      const tagName = tagMatch ? tagMatch[1].toLowerCase() : "";

      if (tagName) {
        if (!isClosing && !isSelfClosing) {
          const isSourceFooter =
            tagName === "div" &&
            /border-t\s+border-slate-200[\s\S]*shrink-0/i.test(part);
          if (SKIP_TAGS.has(tagName) || isSourceFooter) {
            skipTagStack.push(tagName);
            skipDepth++;
          } else if (skipDepth > 0) {
            // Track nested same-name tags inside a skipped block (e.g. nested <div> inside footer)
            const lastSkipped = skipTagStack[skipTagStack.length - 1];
            if (lastSkipped === tagName) {
              skipTagStack.push(tagName);
            }
          }
        } else if (isClosing && skipTagStack.length > 0) {
          const lastSkipped = skipTagStack[skipTagStack.length - 1];
          if (lastSkipped === tagName) {
            skipTagStack.pop();
            if (SKIP_TAGS.has(tagName) || skipTagStack.length === 0) {
              skipDepth = Math.max(0, skipDepth - 1);
            }
          }
        }
      }
      continue;
    }

    if (skipDepth > 0) {
      out.push(part);
      continue;
    }

    const replaced = part.replace(matcher.regex, (matched) => {
      const canonical = matcher.lookup.get(matched);
      if (!canonical) return matched;
      return `<button type="button" class="mcc-glossary-term inline border-b border-dotted border-sky-500/75 dark:border-sky-400/75 text-inherit font-inherit leading-inherit p-0 m-0 bg-transparent cursor-help hover:text-[#1a80ff] dark:hover:text-sky-300 hover:border-solid focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 rounded-[2px] transition-colors" data-glossary-term="${escapeHtmlAttr(canonical)}">${matched}</button>`;
    });
    out.push(replaced);
  }

  return out.join("");
}
