"use client";

import { useEffect, useRef, useState } from "react";

import { getImageFrameAlignment } from "../domain/image-frame-alignment";
import { getNextImageFrameWidth } from "../domain/image-frame-size";
import {
  getImageWidthFromPreset,
  ImageWidthPreset,
} from "../domain/image-size-presets";
import { uploadLessonImageAction } from "@/app/actions/lesson.actions";
import { sanitizeLessonHtml } from "@/features/learning/domain/sanitize-html";
import {
  detectMarkdownPrefix,
  filterSlashCommands,
  generateAviationTableSnippet,
  SlashCommandItem,
} from "../domain/editor-keyboard-shortcuts";

type LessonEditorToolbarProps = {
  contentHtml: string;
  onChangeContentHtml: (val: string) => void;
};

const PRESET_IMAGES = [
  {
    title: "Sustentación y Fuerzas Aerodinámicas",
    url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
    caption: "Perfiles alares y fuerzas de vuelo: Lift, Drag, Thrust, Weight",
  },
  {
    title: "Cabina de Mando e Instrumentación Six-Pack",
    url: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80",
    caption: "Altimétrico, anemómetro, giróscopos y horizonte artificial",
  },
  {
    title: "Meteorología Aeronáutica y Capas Nubosas",
    url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    caption: "Lectura de mapas de frentes térmicos y reportes METAR/TAF",
  },
  {
    title: "Aeronave Comercial & Procedimientos de Cabina",
    url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    caption: "Briefing de seguridad de vuelo y protocolos de emergencia",
  },
];

export function LessonEditorToolbar({
  contentHtml,
  onChangeContentHtml,
}: LessonEditorToolbarProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const initialContentHtmlRef = useRef(contentHtml);
  const [showImageModal, setShowImageModal] = useState(false);
  const [imageTab, setImageTab] = useState<"file" | "url" | "presets">("file");
  const [customImageUrl, setCustomImageUrl] = useState("");
  const [customCaption, setCustomCaption] = useState("");
  const [fileDataUrl, setFileDataUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [showCodeMode, setShowCodeMode] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showBlocksMenu, setShowBlocksMenu] = useState(false);
  const [isUploadingMedia, setIsUploadingMedia] = useState(false);
  const [uploadStatusMessage, setUploadStatusMessage] = useState<string | null>(null);
  const [showSlashMenu, setShowSlashMenu] = useState(false);
  const [slashQuery, setSlashQuery] = useState("");
  const [slashSelectedIndex, setSlashSelectedIndex] = useState(0);
  const [slashPosition, setSlashPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

  const FALLBACK_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"><rect width="800" height="400" fill="%230f172a"/><text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" fill="%2338bdf8" font-family="sans-serif" font-size="22" font-weight="bold">✈️ Recurso Gráfico Aeronáutico</text><text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" fill="%2394a3b8" font-family="sans-serif" font-size="13">Imagen de lección adjunta</text></svg>`;

  const DEFAULT_PLACEHOLDER_TEXT =
    "Escribe aquí el contenido de la lección para los alumnos de aviación...";

  async function uploadOrCompressImageFile(file: File): Promise<string> {
    try {
      setUploadStatusMessage("Subiendo recurso a almacenamiento seguro...");
      const formData = new FormData();
      formData.append("file", file);
      return await uploadLessonImageAction(formData);
    } catch (err) {
      console.warn("Server storage upload failed, falling back to compressed local data URL:", err);
      setUploadStatusMessage("Optimizando imagen localmente...");
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const raw = e.target?.result as string;
          const img = new Image();
          img.onload = () => {
            try {
              const canvas = document.createElement("canvas");
              const maxDim = 1280;
              let w = img.width;
              let h = img.height;
              if (w > maxDim || h > maxDim) {
                if (w > h) {
                  h = Math.round((h * maxDim) / w);
                  w = maxDim;
                } else {
                  w = Math.round((w * maxDim) / h);
                  h = maxDim;
                }
              }
              canvas.width = w;
              canvas.height = h;
              const ctx = canvas.getContext("2d");
              if (ctx) {
                ctx.drawImage(img, 0, 0, w, h);
                resolve(canvas.toDataURL("image/jpeg", 0.8));
                return;
              }
            } catch (e) {}
            resolve(raw);
          };
          img.onerror = () => resolve(raw);
          img.src = raw;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }
  }

  function clearPlaceholderIfPresent() {
    if (editorRef.current) {
      const text = editorRef.current.textContent?.trim() || "";
      if (
        text === DEFAULT_PLACEHOLDER_TEXT ||
        editorRef.current.innerHTML.includes("placeholder-text")
      ) {
        editorRef.current.innerHTML = "<p><br></p>";
        onChangeContentHtml("");
      }
    }
  }

  // State for active image resizing
  const resizingStateRef = useRef<{
    wrapper: HTMLElement;
    img: HTMLImageElement;
    startX: number;
    startY: number;
    startWidth: number;
    handle: "nw" | "ne" | "se" | "sw";
    badgeEl: HTMLElement | null;
  } | null>(null);

  // Helper to attach controls & interactive handles to all image wrappers in the DOM
  function attachImageControlsToDom(container: HTMLElement) {
    const images = container.querySelectorAll("img");
    images.forEach((img) => {
      // Ensure fallback if image fails to load
      img.onerror = function () {
        const el = this as HTMLImageElement;
        if (el.src !== FALLBACK_SVG) {
          el.src = FALLBACK_SVG;
        }
      };

      // Default to natural aspect ratio (auto) with responsive containment
      if (!img.style.aspectRatio) {
        img.style.aspectRatio = "auto";
      }
      if (!img.style.objectFit) {
        img.style.objectFit = "contain";
      }
      img.style.maxWidth = "100%";
      img.style.height = "auto";

      let wrapper = img.closest(".lesson-img-wrapper") as HTMLElement | null;
      if (!wrapper) {
        const parentDiv = img.closest("div");
        if (parentDiv && parentDiv !== container) {
          wrapper = parentDiv;
          wrapper.classList.add("lesson-img-wrapper");
        } else {
          wrapper = document.createElement("div");
          wrapper.className =
            "lesson-img-wrapper my-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-lg max-w-xl mx-auto text-center relative group";
          img.parentNode?.insertBefore(wrapper, img);
          wrapper.appendChild(img);
        }
      }

      wrapper.style.position = "relative";
      wrapper.setAttribute("draggable", "false");

      // Add Top Floating Quick Bar if not present
      if (!wrapper.querySelector(".img-editor-controls")) {
        const controls = document.createElement("div");
        controls.className =
          "img-editor-controls mb-3 space-y-2 rounded-xl border border-blue-100 bg-blue-50/70 p-2.5 dark:border-blue-900/60 dark:bg-blue-950/30 select-none shadow-2xs";
        controls.setAttribute("contenteditable", "false");
        controls.innerHTML = `
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-blue-200/50 dark:border-blue-800/40 pb-1.5">
            <div class="flex items-center gap-1.5">
              <span class="text-[11px] font-extrabold text-blue-700 dark:text-blue-300 flex items-center gap-1">
                <span>🖼️</span>
                <span>Diagrama</span>
              </span>
              <div class="flex items-center gap-0.5 rounded-lg border border-blue-200/80 bg-white p-0.5 dark:border-blue-800/80 dark:bg-slate-900 shadow-2xs">
                <span class="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase px-1">Ancho:</span>
                <button type="button" class="img-btn-size-25 px-1.5 py-0.5 text-slate-700 dark:text-slate-300 hover:text-[#1a80ff] hover:bg-blue-50 dark:hover:bg-blue-950 text-[10px] font-bold rounded cursor-pointer transition-colors" title="25% del ancho">25%</button>
                <button type="button" class="img-btn-size-50 px-1.5 py-0.5 text-slate-700 dark:text-slate-300 hover:text-[#1a80ff] hover:bg-blue-50 dark:hover:bg-blue-950 text-[10px] font-bold rounded cursor-pointer transition-colors" title="50% del ancho">50%</button>
                <button type="button" class="img-btn-size-75 px-1.5 py-0.5 text-slate-700 dark:text-slate-300 hover:text-[#1a80ff] hover:bg-blue-50 dark:hover:bg-blue-950 text-[10px] font-bold rounded cursor-pointer transition-colors" title="75% del ancho">75%</button>
                <button type="button" class="img-btn-size-100 px-1.5 py-0.5 text-slate-700 dark:text-slate-300 hover:text-[#1a80ff] hover:bg-blue-50 dark:hover:bg-blue-950 text-[10px] font-bold rounded cursor-pointer transition-colors" title="100% (Ancho completo)">100%</button>
                <button type="button" class="img-btn-size-auto px-1.5 py-0.5 text-slate-700 dark:text-slate-300 hover:text-[#1a80ff] hover:bg-blue-50 dark:hover:bg-blue-950 text-[10px] font-bold rounded cursor-pointer transition-colors" title="Tamaño original / Ajuste natural">Auto</button>
              </div>
            </div>
            <div class="img-drag-handle flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-600 text-white text-[10px] font-extrabold cursor-grab active:cursor-grabbing hover:bg-blue-700 transition-colors shadow-2xs" draggable="true" title="Haz clic y arrastra para mover la imagen a cualquier párrafo">
              <span>✥</span>
              <span>Mover</span>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-1.5 pt-1">
            <button type="button" class="img-btn-aspect px-2 py-1 bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-700 dark:text-slate-300 hover:text-[#1a80ff] text-[11px] font-bold rounded-lg border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer" title="Cambiar relación de aspecto (Auto / 16:9 / 1:1 / 4:3)">
              📐 Proporción
            </button>
            <button type="button" class="img-btn-fit px-2 py-1 bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 text-[#1a80ff] text-[11px] font-bold rounded-lg border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer" title="Ver imagen completa sin recortar (contain / cover)">
              🎯 Ajuste
            </button>
            <button type="button" class="img-btn-pos px-2 py-1 bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-700 dark:text-slate-300 hover:text-[#1a80ff] text-[11px] font-bold rounded-lg border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer" title="Mover enfoque vertical (Arriba / Centro / Abajo)">
              ↕️ Enfoque
            </button>
            <div class="flex items-center gap-0.5 rounded-lg border border-slate-200 bg-white p-0.5 dark:border-slate-700 dark:bg-slate-800">
              <button type="button" class="img-btn-align-left px-2 py-0.5 text-slate-700 dark:text-slate-300 hover:text-[#1a80ff] text-[11px] font-bold rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer" title="Alinear a la izquierda">
                ⬅️ Izq
              </button>
              <button type="button" class="img-btn-align-center px-2 py-0.5 text-slate-700 dark:text-slate-300 hover:text-[#1a80ff] text-[11px] font-bold rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer" title="Centrar">
                ↔️ Centro
              </button>
              <button type="button" class="img-btn-align-right px-2 py-0.5 text-slate-700 dark:text-slate-300 hover:text-[#1a80ff] text-[11px] font-bold rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer" title="Alinear a la derecha">
                ➡️ Der
              </button>
            </div>
            <button type="button" class="img-btn-up px-2 py-1 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-bold rounded-lg border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer" title="Subir un bloque">
              ▲ Subir
            </button>
            <button type="button" class="img-btn-down px-2 py-1 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-bold rounded-lg border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer" title="Bajar un bloque">
              ▼ Bajar
            </button>
            <button type="button" class="img-btn-remove px-2 py-1 bg-rose-50 dark:bg-rose-950/60 hover:bg-rose-100 text-rose-600 dark:text-rose-400 text-[11px] font-bold rounded-lg border border-rose-200 dark:border-rose-800 transition-colors cursor-pointer ml-auto" title="Eliminar imagen">
              🗑️
            </button>
          </div>
        `;
        wrapper.insertBefore(controls, wrapper.firstChild);
      }

      // Add Corner Interactive Resize Handles if not present
      if (!wrapper.querySelector(".img-resize-handle")) {
        const handleNW = document.createElement("div");
        handleNW.className =
          "img-resize-handle img-resize-handle-nw absolute -top-1.5 -left-1.5 w-3.5 h-3.5 bg-white dark:bg-slate-900 border-2 border-[#1a80ff] rounded-full shadow-md cursor-nwse-resize select-none hover:scale-125 transition-transform z-20";
        handleNW.setAttribute("contenteditable", "false");
        handleNW.setAttribute("data-handle", "nw");

        const handleNE = document.createElement("div");
        handleNE.className =
          "img-resize-handle img-resize-handle-ne absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-white dark:bg-slate-900 border-2 border-[#1a80ff] rounded-full shadow-md cursor-nesw-resize select-none hover:scale-125 transition-transform z-20";
        handleNE.setAttribute("contenteditable", "false");
        handleNE.setAttribute("data-handle", "ne");

        const handleSE = document.createElement("div");
        handleSE.className =
          "img-resize-handle img-resize-handle-se absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 bg-white dark:bg-slate-900 border-2 border-[#1a80ff] rounded-full shadow-md cursor-nwse-resize select-none hover:scale-125 transition-transform z-20";
        handleSE.setAttribute("contenteditable", "false");
        handleSE.setAttribute("data-handle", "se");

        const handleSW = document.createElement("div");
        handleSW.className =
          "img-resize-handle img-resize-handle-sw absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 bg-white dark:bg-slate-900 border-2 border-[#1a80ff] rounded-full shadow-md cursor-nesw-resize select-none hover:scale-125 transition-transform z-20";
        handleSW.setAttribute("contenteditable", "false");
        handleSW.setAttribute("data-handle", "sw");

        wrapper.appendChild(handleNW);
        wrapper.appendChild(handleNE);
        wrapper.appendChild(handleSE);
        wrapper.appendChild(handleSW);
      }
    });
  }

  // Helper to extract clean HTML without editor controls, resize handles or placeholders
  function getCleanHtml(): string {
    if (!editorRef.current) return "";
    const clone = editorRef.current.cloneNode(true) as HTMLElement;
    const controls = clone.querySelectorAll(".img-editor-controls");
    controls.forEach((c) => c.remove());
    const handles = clone.querySelectorAll(".img-resize-handle");
    handles.forEach((h) => h.remove());
    const badges = clone.querySelectorAll(".img-dimension-badge");
    badges.forEach((b) => b.remove());
    const placeholders = clone.querySelectorAll(".placeholder-text");
    placeholders.forEach((p) => p.remove());
    return clone.innerHTML;
  }

  // Handle global mouse move & mouse up during interactive resize
  useEffect(() => {
    function handleGlobalMouseMove(e: MouseEvent) {
      if (!resizingStateRef.current) return;
      e.preventDefault();

      const { wrapper, startX, startWidth, handle, badgeEl } =
        resizingStateRef.current;
      const deltaX = e.clientX - startX;

      let newWidth = startWidth;
      if (handle === "se" || handle === "ne") {
        newWidth = startWidth + deltaX;
      } else {
        newWidth = startWidth - deltaX;
      }

      // Constrain boundaries: 160px to container maxWidth
      const containerWidth = editorRef.current?.getBoundingClientRect().width || 700;
      newWidth = Math.max(160, Math.min(containerWidth, newWidth));

      wrapper.style.width = `${Math.round(newWidth)}px`;
      wrapper.style.maxWidth = "100%";

      const img = wrapper.querySelector("img");
      if (img) {
        img.style.width = "100%";
        img.style.maxWidth = "100%";
        img.style.height = "auto";
        if (!img.style.aspectRatio) {
          img.style.aspectRatio = "auto";
        }
      }

      if (badgeEl) {
        const pct = Math.round((newWidth / containerWidth) * 100);
        badgeEl.textContent = `📐 ${Math.round(newWidth)}px (${pct}%)`;
      }
    }

    function handleGlobalMouseUp() {
      if (!resizingStateRef.current) return;
      const { badgeEl } = resizingStateRef.current;
      if (badgeEl) badgeEl.remove();

      resizingStateRef.current = null;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";

      handleVisualInput();
    }

    window.addEventListener("mousemove", handleGlobalMouseMove);
    window.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, []);

  // Constant mount dependency array [] to prevent React Hook render size mismatch
  useEffect(() => {
    if (editorRef.current) {
      const initial = initialContentHtmlRef.current?.trim();
      if (!initial) {
        editorRef.current.innerHTML = `<p class="placeholder-text text-slate-400 dark:text-slate-500 italic">${DEFAULT_PLACEHOLDER_TEXT}</p>`;
      } else {
        editorRef.current.innerHTML = initial;
      }
      attachImageControlsToDom(editorRef.current);
      onChangeContentHtml(getCleanHtml());
    }
  }, []);

  function handleVisualInput() {
    if (editorRef.current) {
      attachImageControlsToDom(editorRef.current);
      onChangeContentHtml(getCleanHtml());
    }
  }

  // Handle Drag & Drop repositioning of image wrappers
  const draggedWrapperRef = useRef<HTMLElement | null>(null);

  function handleCanvasMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement;
    const resizeHandle = target.closest(".img-resize-handle") as HTMLElement | null;

    if (resizeHandle) {
      e.preventDefault();
      e.stopPropagation();

      const wrapper = resizeHandle.closest(".lesson-img-wrapper") as HTMLElement | null;
      const img = wrapper?.querySelector("img") as HTMLImageElement | null;
      if (!wrapper || !img) return;

      const handleType = (resizeHandle.getAttribute("data-handle") || "se") as "nw" | "ne" | "se" | "sw";
      const startWidth = wrapper.getBoundingClientRect().width;

      // Create floating dimension badge
      let badgeEl = wrapper.querySelector(".img-dimension-badge") as HTMLElement | null;
      if (!badgeEl) {
        badgeEl = document.createElement("div");
        badgeEl.className =
          "img-dimension-badge absolute -bottom-7 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 text-white px-2.5 py-0.5 text-[10px] font-mono font-bold shadow-md z-30 pointer-events-none";
        badgeEl.setAttribute("contenteditable", "false");
        wrapper.appendChild(badgeEl);
      }
      const containerW = editorRef.current?.getBoundingClientRect().width || 700;
      const initialPct = Math.round((startWidth / containerW) * 100);
      badgeEl.textContent = `📐 ${Math.round(startWidth)}px (${initialPct}%)`;

      document.body.style.cursor =
        handleType === "nw" || handleType === "se"
          ? "nwse-resize"
          : "nesw-resize";
      document.body.style.userSelect = "none";

      resizingStateRef.current = {
        wrapper,
        img,
        startX: e.clientX,
        startY: e.clientY,
        startWidth,
        handle: handleType,
        badgeEl,
      };
    }
  }

  function handleDragStart(e: React.DragEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement;
    const dragHandle = target.closest(".img-drag-handle");
    const wrapper = target.closest(".lesson-img-wrapper") as HTMLElement | null;

    if (dragHandle && wrapper) {
      draggedWrapperRef.current = wrapper;
      e.dataTransfer.setData("text/plain", "lesson-img-wrapper");
      e.dataTransfer.effectAllowed = "move";
      wrapper.style.opacity = "0.5";
    }
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    if (!draggedWrapperRef.current) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }

  async function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    // If external image files are dropped directly onto the canvas
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith("image/")) {
        e.preventDefault();
        clearPlaceholderIfPresent();
        setIsUploadingMedia(true);
        try {
          const url = await uploadOrCompressImageFile(file);
          handleInsertImage(url, file.name.replace(/\.[^/.]+$/, ""));
        } catch (err) {
          console.error("Drop image upload failed:", err);
        } finally {
          setIsUploadingMedia(false);
          setUploadStatusMessage(null);
        }
        return;
      }
    }

    if (!draggedWrapperRef.current || !editorRef.current) return;
    e.preventDefault();

    const wrapper = draggedWrapperRef.current;
    wrapper.style.opacity = "1";

    const target = e.target as HTMLElement;
    const dropTarget = target.closest("p, h2, h3, ul, blockquote, div") as HTMLElement | null;

    if (dropTarget && dropTarget !== wrapper && editorRef.current.contains(dropTarget)) {
      editorRef.current.insertBefore(wrapper, dropTarget);
    } else {
      editorRef.current.appendChild(wrapper);
    }

    draggedWrapperRef.current = null;
    handleVisualInput();
  }

  function handleDragEnd() {
    if (draggedWrapperRef.current) {
      draggedWrapperRef.current.style.opacity = "1";
      draggedWrapperRef.current = null;
    }
  }

  async function handleCanvasPaste(e: React.ClipboardEvent<HTMLDivElement>) {
    const items = e.clipboardData?.items;
    if (!items) return;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type.startsWith("image/")) {
        e.preventDefault();
        const file = item.getAsFile();
        if (!file) continue;

        clearPlaceholderIfPresent();
        setIsUploadingMedia(true);
        try {
          const url = await uploadOrCompressImageFile(file);
          handleInsertImage(url, "Captura pegada");
        } catch (err) {
          console.error("Paste image failed:", err);
        } finally {
          setIsUploadingMedia(false);
          setUploadStatusMessage(null);
        }
        return;
      }
    }
  }

  function handleCanvasClick(e: React.MouseEvent<HTMLDivElement>) {
    clearPlaceholderIfPresent();
    const target = e.target as HTMLElement;

    const btnUp = target.closest(".img-btn-up");
    const btnDown = target.closest(".img-btn-down");
    const btnRemove = target.closest(".img-btn-remove");
    const btnFit = target.closest(".img-btn-fit");
    const btnPos = target.closest(".img-btn-pos");
    const btnAlignLeft = target.closest(".img-btn-align-left");
    const btnAlignCenter = target.closest(".img-btn-align-center");
    const btnAlignRight = target.closest(".img-btn-align-right");
    const btnSize25 = target.closest(".img-btn-size-25");
    const btnSize50 = target.closest(".img-btn-size-50");
    const btnSize75 = target.closest(".img-btn-size-75");
    const btnSize100 = target.closest(".img-btn-size-100");
    const btnSizeAuto = target.closest(".img-btn-size-auto");
    const btnAspect = target.closest(".img-btn-aspect");

    if (
      btnUp ||
      btnDown ||
      btnRemove ||
      btnFit ||
      btnPos ||
      btnAlignLeft ||
      btnAlignCenter ||
      btnAlignRight ||
      btnSize25 ||
      btnSize50 ||
      btnSize75 ||
      btnSize100 ||
      btnSizeAuto ||
      btnAspect
    ) {
      e.preventDefault();
      e.stopPropagation();

      const wrapper = target.closest(
        ".lesson-img-wrapper",
      ) as HTMLElement | null;
      if (!wrapper) return;
      const parent = wrapper.parentNode;
      if (!parent) return;

      try {
        if (btnRemove) {
          wrapper.remove();
        } else if (btnSize25 || btnSize50 || btnSize75 || btnSize100 || btnSizeAuto) {
          let preset: ImageWidthPreset = "reset";
          if (btnSize25) preset = "25%";
          else if (btnSize50) preset = "50%";
          else if (btnSize75) preset = "75%";
          else if (btnSize100) preset = "100%";

          const containerW =
            editorRef.current?.getBoundingClientRect().width || 720;
          const { widthPx } = getImageWidthFromPreset(preset, containerW);

          if (preset === "reset") {
            wrapper.style.width = "auto";
            wrapper.style.maxWidth = "100%";
          } else {
            wrapper.style.width = `${widthPx}px`;
            wrapper.style.maxWidth = "100%";
          }

          const img = wrapper.querySelector("img");
          if (img) {
            img.style.width = "100%";
            img.style.maxWidth = "100%";
            img.style.height = "auto";
          }
          if (preset === "100%") {
            wrapper.style.float = "none";
            wrapper.style.clear = "both";
            wrapper.classList.remove(
              "float-left",
              "float-right",
              "img-align-left",
              "img-align-right",
            );
            wrapper.classList.add("mx-auto", "img-align-center");
          }
        } else if (btnAspect) {
          const img = wrapper.querySelector("img");
          if (img) {
            const current = (img.style.aspectRatio || "auto").replace(/\s+/g, "");
            let nextRatio = "auto";
            let nextFit: "contain" | "cover" = "contain";
            if (current === "auto") {
              nextRatio = "16 / 9";
              nextFit = "cover";
            } else if (current === "16/9") {
              nextRatio = "1 / 1";
              nextFit = "cover";
            } else if (current === "1/1") {
              nextRatio = "4 / 3";
              nextFit = "cover";
            } else {
              nextRatio = "auto";
              nextFit = "contain";
            }
            img.style.aspectRatio = nextRatio;
            img.style.objectFit = nextFit;
          }
        } else if (btnUp) {
          const prev = wrapper.previousElementSibling;
          if (prev) {
            parent.insertBefore(wrapper, prev);
          }
        } else if (btnDown) {
          const next = wrapper.nextElementSibling;
          if (next) {
            parent.insertBefore(wrapper, next.nextElementSibling);
          }
        } else if (btnAlignLeft || btnAlignCenter || btnAlignRight) {
          const alignment = btnAlignLeft
            ? "left"
            : btnAlignRight
              ? "right"
              : "center";

          const alignmentConfig = getImageFrameAlignment(alignment);
          const parentWidth =
            editorRef.current?.getBoundingClientRect().width || 720;
          const currentWidth = wrapper.getBoundingClientRect().width;

          // If aligning left or right and currently taking almost full width (>60%),
          // scale width to 48% so text immediately flows around it into the available space!
          if (alignment !== "center" && currentWidth > parentWidth * 0.6) {
            const wrapWidth = Math.round(parentWidth * 0.48);
            wrapper.style.width = `${wrapWidth}px`;
            wrapper.style.maxWidth = "50%";
          } else if (alignmentConfig.preservesCurrentWidth) {
            wrapper.style.width = `${Math.min(currentWidth, alignmentConfig.maximumWidth)}px`;
            wrapper.style.maxWidth = "100%";
          }

          wrapper.classList.remove(
            "mx-auto",
            "ml-auto",
            "mr-auto",
            "float-left",
            "float-right",
            "img-align-left",
            "img-align-right",
            "img-align-center",
          );
          wrapper.classList.add(...alignmentConfig.classes);

          if (alignment === "right") {
            wrapper.style.float = "right";
            wrapper.style.marginLeft = "1.5rem";
            wrapper.style.marginRight = "0";
            wrapper.style.marginTop = "0.5rem";
            wrapper.style.marginBottom = "1.25rem";
            wrapper.style.clear = "right";
          } else if (alignment === "left") {
            wrapper.style.float = "left";
            wrapper.style.marginLeft = "0";
            wrapper.style.marginRight = "1.5rem";
            wrapper.style.marginTop = "0.5rem";
            wrapper.style.marginBottom = "1.25rem";
            wrapper.style.clear = "left";
          } else {
            wrapper.style.float = "none";
            wrapper.style.marginLeft = "auto";
            wrapper.style.marginRight = "auto";
            wrapper.style.marginTop = "1.5rem";
            wrapper.style.marginBottom = "1.5rem";
            wrapper.style.clear = "both";
            wrapper.style.display = "block";
          }
        } else if (btnFit) {
          const img = wrapper.querySelector("img");
          if (img) {
            const currentFit = img.style.objectFit || "cover";
            if (currentFit === "contain") {
              img.style.objectFit = "cover";
              (img as HTMLElement).style.backgroundColor = "transparent";
            } else {
              img.style.objectFit = "contain";
              (img as HTMLElement).style.backgroundColor = "#0b1120";
            }
          }
        } else if (btnPos) {
          const img = wrapper.querySelector("img");
          if (img) {
            const currentPos = img.style.objectPosition || "center";
            if (currentPos === "center" || currentPos === "50% 50%") {
              img.style.objectPosition = "top";
            } else if (currentPos === "top") {
              img.style.objectPosition = "bottom";
            } else {
              img.style.objectPosition = "center";
            }
          }
        }
      } catch (err) {
        console.warn(
          "No se pudo reordenar o ajustar la imagen en el DOM:",
          err,
        );
      }

      handleVisualInput();
    }
  }

  function toggleCodeMode() {
    if (!showCodeMode && editorRef.current) {
      onChangeContentHtml(getCleanHtml());
    } else if (showCodeMode) {
      setTimeout(() => {
        if (editorRef.current) {
          const content = contentHtml?.trim();
          if (!content) {
            editorRef.current.innerHTML = `<p class="placeholder-text text-slate-400 dark:text-slate-500 italic">${DEFAULT_PLACEHOLDER_TEXT}</p>`;
          } else {
            editorRef.current.innerHTML = content;
          }
          attachImageControlsToDom(editorRef.current);
        }
      }, 0);
    }
    setShowCodeMode(!showCodeMode);
  }

  function applyFormatHeading(tag: "h2" | "h3") {
    if (!editorRef.current) return;
    editorRef.current.focus();
    const selection = window.getSelection();

    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const selectedText = selection.toString();

      const element = document.createElement(tag);
      element.style.fontSize = tag === "h2" ? "1.5rem" : "1.2rem";
      element.style.fontWeight = tag === "h2" ? "800" : "700";
      element.style.marginTop = tag === "h2" ? "1.25rem" : "0.75rem";
      element.style.marginBottom = "0.5rem";
      element.style.display = "block";

      if (selectedText.trim().length > 0) {
        element.textContent = selectedText;
        range.deleteContents();
        range.insertNode(element);
      } else {
        element.innerHTML = tag === "h2" ? "Título de Sección" : "Subtítulo";
        range.insertNode(element);
      }
    }
    handleVisualInput();
  }

  function applyList() {
    if (!editorRef.current) return;
    editorRef.current.focus();
    const selection = window.getSelection();

    if (
      selection &&
      selection.rangeCount > 0 &&
      selection.toString().trim().length > 0
    ) {
      const range = selection.getRangeAt(0);
      const selectedText = selection.toString();
      const ul = document.createElement("ul");
      ul.style.listStyleType = "disc";
      ul.style.paddingLeft = "1.5rem";
      ul.style.marginTop = "0.5rem";
      ul.style.marginBottom = "0.5rem";

      const li = document.createElement("li");
      li.textContent = selectedText;
      ul.appendChild(li);

      range.deleteContents();
      range.insertNode(ul);
    } else {
      insertBlockSnippet(
        '<ul style="list-style-type: disc; padding-left: 1.5rem; margin: 0.5rem 0;">\n  <li>Elemento de lista 1</li>\n  <li>Elemento de lista 2</li>\n</ul><p><br></p>',
      );
    }
    handleVisualInput();
  }

  function applyFontSize(sizeInPx: string) {
    if (!editorRef.current) return;
    editorRef.current.focus();
    const selection = window.getSelection();
    if (
      selection &&
      selection.rangeCount > 0 &&
      selection.toString().trim().length > 0
    ) {
      const range = selection.getRangeAt(0);
      const selectedText = selection.toString();
      const span = document.createElement("span");
      span.style.fontSize = sizeInPx;
      span.textContent = selectedText;
      range.deleteContents();
      range.insertNode(span);
      handleVisualInput();
    }
  }

  function applyAlignment(align: "left" | "center" | "right" | "justify") {
    if (!editorRef.current) return;
    editorRef.current.focus();
    const commandMap = {
      left: "justifyLeft",
      center: "justifyCenter",
      right: "justifyRight",
      justify: "justifyFull",
    };
    document.execCommand(commandMap[align], false, "");
    handleVisualInput();
  }

  function execCommand(command: string, value: string = "") {
    if (!editorRef.current) return;
    editorRef.current.focus();
    document.execCommand(command, false, value);
    handleVisualInput();
  }

  function insertBlockSnippet(htmlSnippet: string) {
    if (editorRef.current) {
      editorRef.current.focus();
      document.execCommand("insertHTML", false, htmlSnippet);
      handleVisualInput();
    }
  }

  function executeSlashCommand(cmd: SlashCommandItem) {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      const range = sel.getRangeAt(0);
      const node = range.startContainer;
      if (node.nodeType === Node.TEXT_NODE && node.textContent) {
        const text = node.textContent;
        const offset = range.startOffset;
        const slashIdx = text.slice(0, offset).lastIndexOf("/");
        if (slashIdx !== -1) {
          node.textContent = text.slice(0, slashIdx) + text.slice(offset);
          const newRange = document.createRange();
          newRange.setStart(node, slashIdx);
          newRange.collapse(true);
          sel.removeAllRanges();
          sel.addRange(newRange);
        }
      }
    }

    setShowSlashMenu(false);

    if (cmd.action === "image") {
      setShowImageModal(true);
    } else if (cmd.action === "table") {
      insertBlockSnippet(generateAviationTableSnippet());
    } else if (cmd.action === "video") {
      const videoUrl = window.prompt("Introduce la URL del video (YouTube o enlace directo MP4):");
      if (videoUrl) {
        let embedUrl = videoUrl.trim();
        if (embedUrl.includes("watch?v=")) {
          embedUrl = embedUrl.replace("watch?v=", "embed/");
        } else if (embedUrl.includes("youtu.be/")) {
          embedUrl = embedUrl.replace("youtu.be/", "www.youtube-nocookie.com/embed/");
        }
        insertBlockSnippet(
          `<div class="my-5 aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">\n  <iframe class="w-full h-full" src="${embedUrl}" title="Video de instrucción aeronáutica" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div><p><br></p>`,
        );
      }
    } else if (cmd.snippet) {
      insertBlockSnippet(cmd.snippet);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (showSlashMenu) {
      const filtered = filterSlashCommands(slashQuery);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSlashSelectedIndex((prev) => (filtered.length ? (prev + 1) % filtered.length : 0));
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSlashSelectedIndex((prev) => (filtered.length ? (prev - 1 + filtered.length) % filtered.length : 0));
        return;
      }
      if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[slashSelectedIndex]) {
          executeSlashCommand(filtered[slashSelectedIndex]);
        }
        return;
      }
      if (e.key === "Escape") {
        e.preventDefault();
        setShowSlashMenu(false);
        return;
      }
    }

    // Markdown prefix auto-formatting triggered when typing space
    if (e.key === " ") {
      const sel = window.getSelection();
      if (sel && sel.rangeCount > 0) {
        const range = sel.getRangeAt(0);
        const node = range.startContainer;
        if (node.nodeType === Node.TEXT_NODE && node.textContent) {
          const textBeforeCaret = node.textContent.slice(0, range.startOffset);
          const match = detectMarkdownPrefix(textBeforeCaret);
          if (match) {
            e.preventDefault();
            node.textContent = node.textContent.slice(match.prefix.length);
            if (match.type === "h1") {
              document.execCommand("formatBlock", false, "<h1>");
            } else if (match.type === "h2") {
              document.execCommand("formatBlock", false, "<h2>");
            } else if (match.type === "h3") {
              document.execCommand("formatBlock", false, "<h3>");
            } else if (match.type === "bullet-list") {
              document.execCommand("insertUnorderedList", false, "");
            } else if (match.type === "numbered-list") {
              document.execCommand("insertOrderedList", false, "");
            } else if (match.type === "quote") {
              document.execCommand("formatBlock", false, "<blockquote>");
            } else if (match.type === "checklist") {
              insertBlockSnippet(
                '<div class="flex items-center gap-2 text-slate-700 dark:text-slate-300"><span>☑️</span> <span>Elemento de chequeo</span></div><p><br></p>',
              );
            }
            handleVisualInput();
            return;
          }
        }
      }
    }
  }

  function getCaretCoordinates(): { top: number; left: number } | null {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return null;
    const range = sel.getRangeAt(0);

    // 1. Try getClientRects first (reliable for collapsed carets in Blink/WebKit)
    const rects = range.getClientRects();
    if (rects.length > 0 && (rects[0].top !== 0 || rects[0].bottom !== 0)) {
      return { top: rects[0].bottom, left: rects[0].left };
    }

    // 2. Try getBoundingClientRect
    const rect = range.getBoundingClientRect();
    if (rect && (rect.top !== 0 || rect.bottom !== 0)) {
      return { top: rect.bottom, left: rect.left };
    }

    // 3. Fallback: inspect startContainer's element
    const el =
      range.startContainer.nodeType === Node.ELEMENT_NODE
        ? (range.startContainer as HTMLElement)
        : range.startContainer.parentElement;

    if (el) {
      const elRect = el.getBoundingClientRect();
      return { top: elRect.bottom, left: elRect.left };
    }

    // 4. Fallback to editor container
    if (editorRef.current) {
      const edRect = editorRef.current.getBoundingClientRect();
      return { top: edRect.top + 60, left: edRect.left + 24 };
    }

    return null;
  }

  function checkSlashTrigger() {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;
    const range = sel.getRangeAt(0);

    let textBeforeCaret = "";
    if (range.startContainer.nodeType === Node.TEXT_NODE) {
      textBeforeCaret = (range.startContainer.textContent || "").slice(0, range.startOffset);
    } else {
      const el = range.startContainer as HTMLElement;
      textBeforeCaret = (el.textContent || "").slice(0, range.startOffset);
    }

    const slashIdx = textBeforeCaret.lastIndexOf("/");
    if (slashIdx !== -1) {
      const charBeforeSlash = slashIdx > 0 ? textBeforeCaret[slashIdx - 1] : " ";
      if (/\s/.test(charBeforeSlash) || charBeforeSlash === "\n" || slashIdx === 0) {
        const query = textBeforeCaret.slice(slashIdx + 1);
        if (!/\s/.test(query)) {
          const coords = getCaretCoordinates();
          if (coords) {
            const menuHeight = 320;
            const menuWidth = 288;
            const spaceBelow = window.innerHeight - coords.top;
            const top = spaceBelow < menuHeight ? coords.top - menuHeight - 12 : coords.top + 8;
            const left = Math.min(coords.left, Math.max(10, window.innerWidth - menuWidth - 20));

            setSlashPosition({ top: Math.max(10, top), left: Math.max(10, left) });
            setSlashQuery(query);
            setShowSlashMenu(true);
            return;
          }
        }
      }
    }

    setShowSlashMenu(false);
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLDivElement>) {
    if (["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(e.key) && showSlashMenu) {
      return;
    }
    checkSlashTrigger();
  }

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setIsUploadingMedia(true);
    try {
      const url = await uploadOrCompressImageFile(file);
      setFileDataUrl(url);
    } catch (err) {
      console.error("Modal file upload error:", err);
    } finally {
      setIsUploadingMedia(false);
      setUploadStatusMessage(null);
    }
  }

  function handleInsertImage(url: string, captionText: string = "") {
    if (!url) return;
    const finalUrl = url.trim() || FALLBACK_SVG;

    const imgHtml = `
<div class="lesson-img-wrapper my-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-lg max-w-xl mx-auto text-center" style="width: auto; max-width: 100%;">
  <img src="${finalUrl}" alt="${captionText || "Diagrama aeronáutico"}" class="w-full max-w-full rounded-xl mx-auto my-2 shadow-xs" onerror="if (this.src !== '${FALLBACK_SVG}') this.src='${FALLBACK_SVG}';" style="aspect-ratio: auto; object-fit: contain; width: 100%; height: auto;" />
  ${captionText ? `<p class="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center italic">${captionText}</p>` : ""}
</div>
<p><br></p>
`.trim();

    insertBlockSnippet(imgHtml);
    if (editorRef.current) {
      attachImageControlsToDom(editorRef.current);
    }
    handleVisualInput();
    setShowImageModal(false);
    setCustomImageUrl("");
    setCustomCaption("");
    setFileDataUrl(null);
    setFileName(null);
  }

  return (
    <div className="space-y-3">
      {/* Visual Toolbar Controls with Uniform Height (h-9 / 36px) */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/90 p-3 shadow-xs">
        <div className="flex flex-wrap items-center gap-2">
          {/* Section 1: Headings & Text Styles */}
          <div className="flex h-9 items-center gap-0.5 bg-white dark:bg-slate-800 px-1 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs">
            <button
              type="button"
              onClick={() => applyFormatHeading("h2")}
              className="h-7 px-2.5 flex items-center justify-center rounded-lg text-xs font-black text-slate-900 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-[#1a80ff] transition-all cursor-pointer"
              title="Convertir en Título Grande"
            >
              Título
            </button>
            <button
              type="button"
              onClick={() => applyFormatHeading("h3")}
              className="h-7 px-2.5 flex items-center justify-center rounded-lg text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-[#1a80ff] transition-all cursor-pointer"
              title="Convertir en Subtítulo Intermedio"
            >
              Subtítulo
            </button>
          </div>

          {/* Section 2: Bold, Italic, Underline */}
          <div className="flex h-9 items-center gap-0.5 bg-white dark:bg-slate-800 px-1 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs">
            <button
              type="button"
              onClick={() => execCommand("bold")}
              className="w-7 h-7 flex items-center justify-center rounded-lg text-xs font-black text-slate-900 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-[#1a80ff] transition-all cursor-pointer"
              title="Negrita"
            >
              B
            </button>
            <button
              type="button"
              onClick={() => execCommand("italic")}
              className="w-7 h-7 flex items-center justify-center rounded-lg text-xs italic font-bold text-slate-900 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-[#1a80ff] transition-all cursor-pointer"
              title="Cursiva"
            >
              I
            </button>
            <button
              type="button"
              onClick={() => execCommand("underline")}
              className="w-7 h-7 flex items-center justify-center rounded-lg text-xs underline font-bold text-slate-900 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-[#1a80ff] transition-all cursor-pointer"
              title="Subrayado"
            >
              U
            </button>
          </div>

          {/* Section 3: Font Size Dropdown Selector */}
          <div className="flex h-9 items-center bg-white dark:bg-slate-800 px-1 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs">
            <select
              onChange={(e) => applyFontSize(e.target.value)}
              defaultValue="14px"
              className="h-7 bg-transparent text-xs font-semibold text-slate-800 dark:text-slate-200 px-1.5 outline-hidden cursor-pointer"
              title="Tamaño de Letra"
            >
              <option value="12px">Tamaño: Pequeña (12px)</option>
              <option value="14px">Tamaño: Normal (14px)</option>
              <option value="18px">Tamaño: Grande (18px)</option>
              <option value="24px">Tamaño: Muy Grande (24px)</option>
            </select>
          </div>

          {/* Section 4: Text Alignment Controls */}
          <div className="flex h-9 items-center gap-0.5 bg-white dark:bg-slate-800 px-1 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xs">
            <button
              type="button"
              onClick={() => applyAlignment("left")}
              className="w-7 h-7 flex items-center justify-center rounded-lg text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-[#1a80ff] transition-all cursor-pointer"
              title="Alinear a la Izquierda"
            >
              ⬅
            </button>
            <button
              type="button"
              onClick={() => applyAlignment("center")}
              className="w-7 h-7 flex items-center justify-center rounded-lg text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-[#1a80ff] transition-all cursor-pointer"
              title="Centrar Texto"
            >
              ↔
            </button>
            <button
              type="button"
              onClick={() => applyAlignment("right")}
              className="w-7 h-7 flex items-center justify-center rounded-lg text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-[#1a80ff] transition-all cursor-pointer"
              title="Alinear a la Derecha"
            >
              ➡
            </button>
            <button
              type="button"
              onClick={() => applyAlignment("justify")}
              className="w-7 h-7 flex items-center justify-center rounded-lg text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-[#1a80ff] transition-all cursor-pointer"
              title="Justificar Texto"
            >
              ≡
            </button>
          </div>

          {/* Section 5: Lists, Aviation Blocks & Images */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={applyList}
              className="h-9 px-3 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:border-[#1a80ff] hover:text-[#1a80ff] transition-all cursor-pointer shadow-2xs"
              title="Lista con viñetas"
            >
              📋 Lista
            </button>

            {/* Aviation Blocks Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowBlocksMenu(!showBlocksMenu)}
                className="h-9 px-3 flex items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-xs font-bold text-[#1a80ff] hover:bg-[#1a80ff] hover:text-white transition-all cursor-pointer shadow-2xs gap-1.5"
                title="Insertar bloques de contenido especializado"
              >
                <span>🧩</span>
                <span>Bloques</span>
                <span className="text-[9px]">▼</span>
              </button>

              {showBlocksMenu && (
                <div className="absolute top-11 left-0 z-40 w-64 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 shadow-2xl space-y-1">
                  <button
                    type="button"
                    onClick={() => {
                      insertBlockSnippet(
                        '<div class="my-4 rounded-2xl bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-800 p-4 text-xs text-sky-900 dark:text-sky-200 font-semibold">\n  <strong>✈️ Procedimiento de Vuelo:</strong> Comprueba siempre la lista de verificación antes del despegue.\n</div><p><br></p>',
                      );
                      setShowBlocksMenu(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs text-slate-700 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-[#1a80ff] transition-colors flex items-center gap-2.5 cursor-pointer"
                  >
                    <span className="text-base">✈️</span>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">Procedimiento de Vuelo</div>
                      <div className="text-[10px] text-slate-400">Cuadro informativo azul</div>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      insertBlockSnippet(
                        '<div class="my-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 p-4 text-xs text-amber-900 dark:text-amber-200 font-semibold shadow-2xs">\n  <strong>⚠️ ATENCIÓN / PRECAUCIÓN:</strong> Compruebe siempre las presiones y temperaturas antes de aplicar potencia de despegue.\n</div><p><br></p>',
                      );
                      setShowBlocksMenu(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs text-slate-700 dark:text-slate-200 hover:bg-amber-50 dark:hover:bg-amber-950/50 hover:text-amber-600 transition-colors flex items-center gap-2.5 cursor-pointer"
                  >
                    <span className="text-base">⚠️</span>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">Alerta / Precaución</div>
                      <div className="text-[10px] text-slate-400">Cuadro de advertencia ámbar</div>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      insertBlockSnippet(
                        '<div class="my-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 text-xs text-slate-800 dark:text-slate-200 shadow-2xs">\n  <div class="font-bold text-[#1a80ff] mb-2">📋 LISTA DE CHEQUEO PRE-VUELO</div>\n  <ul style="list-style-type: none; padding-left: 0; margin: 0;">\n    <li style="margin-bottom: 0.35rem;">☑️ Interruptores maestros — CONECTADOS</li>\n    <li style="margin-bottom: 0.35rem;">☑️ Cantidad de combustible — VERIFICADA</li>\n    <li style="margin-bottom: 0.35rem;">☑️ Mandos de vuelo — LIBRES Y CORRECTOS</li>\n    <li style="margin-bottom: 0.35rem;">☑️ Altímetro — CALIBRADO CON QNH LOCAL</li>\n  </ul>\n</div><p><br></p>',
                      );
                      setShowBlocksMenu(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-[#1a80ff] transition-colors flex items-center gap-2.5 cursor-pointer"
                  >
                    <span className="text-base">📋</span>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">Lista de Chequeo</div>
                      <div className="text-[10px] text-slate-400">Verificaciones previas con casillas</div>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      insertBlockSnippet(
                        '<div class="my-5 grid grid-cols-1 md:grid-cols-2 gap-4 items-center rounded-2xl border border-slate-200 dark:border-slate-800 p-4 bg-slate-50/50 dark:bg-slate-900/50 shadow-2xs">\n  <div>\n    <p class="font-bold text-slate-900 dark:text-white mb-1">📘 Descripción del Sistema</p>\n    <p class="text-xs text-slate-600 dark:text-slate-300">Explica aquí los componentes principales del diagrama adjunto y sus funciones críticas durante las distintas fases de vuelo.</p>\n  </div>\n  <div>\n    <div class="rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-6 text-center text-xs text-slate-400">🖼️ Arrastra o pega un diagrama aquí</div>\n  </div>\n</div><p><br></p>',
                      );
                      setShowBlocksMenu(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-[#1a80ff] transition-colors flex items-center gap-2.5 cursor-pointer"
                  >
                    <span className="text-base">🔀</span>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">Doble Columna</div>
                      <div className="text-[10px] text-slate-400">Texto explicativo + Recurso gráfico</div>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const videoUrl = window.prompt("Introduce la URL del video (YouTube o enlace directo MP4):");
                      if (videoUrl) {
                        let embedUrl = videoUrl.trim();
                        if (embedUrl.includes("watch?v=")) {
                          embedUrl = embedUrl.replace("watch?v=", "embed/");
                        } else if (embedUrl.includes("youtu.be/")) {
                          embedUrl = embedUrl.replace("youtu.be/", "www.youtube-nocookie.com/embed/");
                        }
                        insertBlockSnippet(
                          `<div class="my-5 aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">\n  <iframe class="w-full h-full" src="${embedUrl}" title="Video de instrucción aeronáutica" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div><p><br></p>`,
                        );
                      }
                      setShowBlocksMenu(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-[#1a80ff] transition-colors flex items-center gap-2.5 cursor-pointer"
                  >
                    <span className="text-base">🎥</span>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">Video Incrustado</div>
                      <div className="text-[10px] text-slate-400">Reproductor YouTube o video MP4</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                if (editorRef.current) {
                  editorRef.current.focus();
                  const edRect = editorRef.current.getBoundingClientRect();
                  setSlashPosition({
                    top: Math.max(10, edRect.top + 60),
                    left: Math.max(10, edRect.left + 24),
                  });
                  setSlashQuery("");
                  setSlashSelectedIndex(0);
                  setShowSlashMenu(!showSlashMenu);
                }
              }}
              className="h-9 px-3 flex items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs font-bold text-purple-700 dark:text-purple-300 hover:bg-purple-600 hover:text-white transition-all cursor-pointer gap-1 shadow-2xs"
              title="Abrir Menú de Comandos Rápidos (/)"
            >
              ⚡ / Comandos
            </button>

            <button
              type="button"
              onClick={() => insertBlockSnippet(generateAviationTableSnippet())}
              className="h-9 px-3 flex items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-bold text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500 hover:text-white transition-all cursor-pointer gap-1 shadow-2xs"
              title="Insertar Tabla de Parámetros y V-Speeds"
            >
              📊 Tabla V-Speeds
            </button>

            <button
              type="button"
              onClick={() => setShowImageModal(true)}
              className="h-9 px-3 flex items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500 hover:text-white transition-all cursor-pointer gap-1 shadow-2xs"
              title="Insertar Imagen desde Ordenador o Galería"
            >
              🖼️ Insertar Imagen
            </button>
          </div>
        </div>

        {/* Right Action Buttons: Student Preview & Code Mode */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => setShowPreviewModal(true)}
            className="h-9 px-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-bold text-[#1a80ff] hover:bg-[#1a80ff] hover:text-white transition-all cursor-pointer shadow-2xs flex items-center gap-1.5"
            title="Previsualizar cómo verá el alumno esta lección"
          >
            <span>👁️</span>
            <span>Vista Previa Alumno</span>
          </button>
          <button
            type="button"
            onClick={toggleCodeMode}
            className="text-[11px] font-bold text-slate-500 dark:text-slate-400 hover:text-[#1a80ff] transition-colors cursor-pointer px-1 py-1"
          >
            {showCodeMode ? "👁️ Editor Visual" : "⚙️ HTML"}
          </button>
        </div>
      </div>

      {/* Main Interactive Visual Canvas (WYSIWYG) */}
      {!showCodeMode ? (
        <div className="relative">
          <style>{`
            .visual-canvas h2 {
              font-size: 1.5rem !important;
              font-weight: 800 !important;
              margin-top: 1.25rem !important;
              margin-bottom: 0.5rem !important;
              line-height: 1.3 !important;
            }
            .visual-canvas h3 {
              font-size: 1.2rem !important;
              font-weight: 700 !important;
              margin-top: 1rem !important;
              margin-bottom: 0.35rem !important;
              line-height: 1.35 !important;
            }
            .visual-canvas ul {
              list-style-type: disc !important;
              padding-left: 1.5rem !important;
              margin-top: 0.5rem !important;
              margin-bottom: 0.5rem !important;
            }
            .visual-canvas li {
              margin-bottom: 0.25rem !important;
            }
            .visual-canvas table {
              width: 100% !important;
              border-collapse: collapse !important;
              margin: 1.25rem 0 !important;
            }
            .visual-canvas blockquote {
              border-left: 4px solid #1a80ff !important;
              padding-left: 1rem !important;
              margin: 1rem 0 !important;
              font-style: italic !important;
            }
            .lesson-img-wrapper {
              transition: outline 0.15s ease, box-shadow 0.15s ease;
              user-select: none;
            }
            .lesson-img-wrapper:hover {
              outline: 2px dashed #1a80ff;
              outline-offset: 4px;
            }
            .img-resize-handle {
              opacity: 0.7;
              transition: opacity 0.2s ease, transform 0.15s ease;
            }
            .lesson-img-wrapper:hover .img-resize-handle {
              opacity: 1;
            }
            .img-resize-handle:hover {
              transform: scale(1.35);
              background-color: #1a80ff !important;
              border-color: #ffffff !important;
            }
          `}</style>
          {isUploadingMedia && (
            <div className="mb-3 flex items-center gap-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 px-4 py-2.5 text-xs font-semibold text-[#1a80ff] shadow-xs animate-pulse">
              <span className="inline-block animate-spin">⏳</span>
              <span>{uploadStatusMessage || "Optimizando y subiendo imagen..."}</span>
            </div>
          )}
          <div
            ref={editorRef}
            contentEditable
            onFocus={clearPlaceholderIfPresent}
            onInput={handleVisualInput}
            onBlur={handleVisualInput}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            onClick={handleCanvasClick}
            onMouseDown={handleCanvasMouseDown}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragEnd={handleDragEnd}
            onPaste={handleCanvasPaste}
            className="visual-canvas min-h-[340px] max-h-[600px] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 sm:p-8 text-slate-900 dark:text-slate-100 text-sm leading-relaxed focus:outline-hidden focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 prose prose-slate dark:prose-invert max-w-none shadow-xs"
          />

          {/* Floating Slash Command Palette */}
          {showSlashMenu && (
            <>
              {/* Transparent backdrop to close on outside click */}
              <div
                className="fixed inset-0 z-[9998] bg-transparent"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setShowSlashMenu(false);
                }}
              />
              <div
                style={{
                  position: "fixed",
                  top: `${slashPosition.top}px`,
                  left: `${slashPosition.left}px`,
                  zIndex: 9999,
                }}
                className="w-72 max-h-80 overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl p-2 animate-in fade-in zoom-in-95 duration-100"
              >
              <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800/60 mb-1 flex items-center justify-between">
                <span>Comandos Rápidos</span>
                <span className="font-mono text-[9px] lowercase text-[#1a80ff]">
                  {slashQuery ? `/${slashQuery}` : "Escribe para filtrar"}
                </span>
              </div>
              {filterSlashCommands(slashQuery).length === 0 ? (
                <div className="p-3 text-center text-xs text-slate-400">
                  No se encontraron comandos para &quot;{slashQuery}&quot;
                </div>
              ) : (
                filterSlashCommands(slashQuery).map((cmd, idx) => {
                  const isSelected = idx === slashSelectedIndex;
                  return (
                    <button
                      key={cmd.id}
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        executeSlashCommand(cmd);
                      }}
                      className={`w-full text-left px-2.5 py-2 rounded-xl text-xs flex items-center gap-2.5 transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-blue-50 dark:bg-blue-950/60 text-[#1a80ff]"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      <span className="w-6 h-6 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-sm shrink-0">
                        {cmd.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold truncate text-slate-900 dark:text-white">
                          {cmd.label}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">
                          {cmd.description}
                        </div>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </>
        )}

          <div className="absolute bottom-3 right-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 pointer-events-none">
            ✍️ Editor Visual Activo · Escribe / para comandos o atajos Markdown (#, ##, -, 1.)
          </div>
        </div>
      ) : (
        <textarea
          name="contentHtml"
          rows={12}
          value={contentHtml}
          onChange={(e) => onChangeContentHtml(e.target.value)}
          className="w-full font-mono text-xs rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 text-slate-900 dark:text-slate-100 focus:border-[#1a80ff] focus:outline-hidden transition-all leading-relaxed"
        />
      )}

      {/* Image Insertion Modal */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-xl rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>🖼️</span> Cargar Imagen en la Lección
              </h3>
              <button
                type="button"
                onClick={() => setShowImageModal(false)}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Tabs */}
            <div className="flex border-b border-slate-100 dark:border-slate-800 text-xs font-bold gap-2">
              <button
                type="button"
                onClick={() => setImageTab("file")}
                className={`pb-2 px-3 transition-colors border-b-2 ${
                  imageTab === "file"
                    ? "border-[#1a80ff] text-[#1a80ff]"
                    : "border-transparent text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                }`}
              >
                📁 Cargar de Ordenador
              </button>
              <button
                type="button"
                onClick={() => setImageTab("url")}
                className={`pb-2 px-3 transition-colors border-b-2 ${
                  imageTab === "url"
                    ? "border-[#1a80ff] text-[#1a80ff]"
                    : "border-transparent text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                }`}
              >
                🔗 URL Directa
              </button>
            </div>

            {/* Tab 1: Upload File from Computer */}
            {imageTab === "file" && (
              <div className="space-y-4">
                <div className="relative border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-[#1a80ff] rounded-2xl p-6 text-center bg-slate-50 dark:bg-slate-950/50 transition-all group">
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/webp, image/svg+xml, image/gif"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="flex flex-col items-center justify-center gap-1.5">
                    <span className="text-3xl group-hover:scale-110 transition-transform">
                      📤
                    </span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {fileName
                        ? `Imagen seleccionada: ${fileName}`
                        : "Haz clic para elegir imagen de tu equipo"}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Archivos PNG, JPG, WEBP o SVG (máx. 5 MB)
                    </span>
                  </div>
                </div>

                {isUploadingMedia && (
                  <div className="flex items-center justify-center gap-2 py-1 text-xs font-semibold text-[#1a80ff] animate-pulse">
                    <span className="inline-block animate-spin">⏳</span>
                    <span>{uploadStatusMessage || "Subiendo imagen..."}</span>
                  </div>
                )}

                <input
                  type="text"
                  placeholder="Pie de foto / Leyenda descriptiva (Opcional)"
                  value={customCaption}
                  onChange={(e) => setCustomCaption(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2 text-xs text-slate-900 dark:text-white focus:border-[#1a80ff]"
                />

                {fileDataUrl && (
                  <div className="space-y-3">
                    <img
                      src={fileDataUrl}
                      alt="Vista previa"
                      className="w-full max-h-48 object-contain rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950/5"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        handleInsertImage(fileDataUrl, customCaption)
                      }
                      className="w-full rounded-xl bg-[#1a80ff] py-2.5 text-xs font-bold text-white hover:bg-[#0066e6] transition-all cursor-pointer"
                    >
                      Insertar Imagen en el Editor Visual
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Tab 2: Custom URL Input */}
            {imageTab === "url" && (
              <div className="space-y-3">
                <input
                  type="url"
                  placeholder="https://ejemplo.com/imagen-diagrama.jpg"
                  value={customImageUrl}
                  onChange={(e) => setCustomImageUrl(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:border-[#1a80ff]"
                />
                <input
                  type="text"
                  placeholder="Pie de foto / Leyenda descriptiva (Opcional)"
                  value={customCaption}
                  onChange={(e) => setCustomCaption(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2 text-xs text-slate-900 dark:text-white focus:border-[#1a80ff]"
                />
                {customImageUrl && (
                  <button
                    type="button"
                    onClick={() =>
                      handleInsertImage(customImageUrl, customCaption)
                    }
                    className="w-full rounded-xl bg-[#1a80ff] py-2.5 text-xs font-bold text-white hover:bg-[#0066e6] transition-all cursor-pointer"
                  >
                    Insertar Imagen desde URL
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Student Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/75 backdrop-blur-xs p-4 sm:p-6 animate-in fade-in duration-150">
          <div className="w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b1120] shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-4 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <div className="flex items-center gap-2.5">
                <span className="text-xl">👁️</span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Vista Previa de Alumno (Simulación en Vivo)
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Así es exactamente como se renderizará el contenido en el visor de estudio de los alumnos
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowPreviewModal(false)}
                className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                ✕ Cerrar
              </button>
            </div>

            {/* Modal Content - Exact Mirror of Lesson Player */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-6">
              <div
                className="prose prose-slate dark:prose-invert max-w-none text-slate-900 dark:text-slate-100 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: sanitizeLessonHtml(getCleanHtml()),
                }}
              />
            </div>

            {/* Modal Footer */}
            <div className="border-t border-slate-200 dark:border-slate-800 px-6 py-3 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>💡 Tip: Comprueba la legibilidad y proporciones de tus diagramas</span>
              <button
                type="button"
                onClick={() => setShowPreviewModal(false)}
                className="rounded-xl bg-[#1a80ff] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#0066e6] transition-colors cursor-pointer"
              >
                Volver al Editor
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
