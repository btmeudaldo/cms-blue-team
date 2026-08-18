"use client";

import { useEffect, useRef, useState } from "react";

import { getImageFrameAlignment } from "../domain/image-frame-alignment";
import { getNextImageFrameWidth } from "../domain/image-frame-size";

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

  const FALLBACK_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"><rect width="800" height="400" fill="%230f172a"/><text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" fill="%2338bdf8" font-family="sans-serif" font-size="22" font-weight="bold">✈️ Recurso Gráfico Aeronáutico</text><text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" fill="%2394a3b8" font-family="sans-serif" font-size="13">Imagen de lección adjunta</text></svg>`;

  const DEFAULT_PLACEHOLDER_TEXT =
    "Escribe aquí el contenido de la lección para los alumnos de aviación...";

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

      // Ensure all images in the editor have aspect-ratio 1 / 1 by default if not set
      if (!img.style.aspectRatio) {
        img.style.aspectRatio = "1 / 1";
        img.style.objectFit = img.style.objectFit || "cover";
      }

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
        const leftAlignment = getImageFrameAlignment("left");
        const centerAlignment = getImageFrameAlignment("center");
        const rightAlignment = getImageFrameAlignment("right");
        controls.innerHTML = `
          <div class="flex items-center justify-between gap-2 border-b border-blue-200/50 dark:border-blue-800/40 pb-1.5">
            <span class="text-[11px] font-extrabold text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
              <span>🖼️</span>
              <span>Imagen Interactiva</span>
              <span class="text-[10px] font-normal text-slate-500 dark:text-slate-400">· Arrastra las esquinas ⚪ para cambiar tamaño</span>
            </span>
            <div class="img-drag-handle flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-600 text-white text-[10px] font-extrabold cursor-grab active:cursor-grabbing hover:bg-blue-700 transition-colors shadow-2xs" draggable="true" title="Haz clic y arrastra para mover la imagen a cualquier párrafo">
              <span>✥</span>
              <span>Arrastrar</span>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-1.5 pt-1">
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
        img.style.aspectRatio = "1 / 1";
      }

      if (badgeEl) {
        badgeEl.textContent = `📐 ${Math.round(newWidth)}px`;
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
      badgeEl.textContent = `📐 ${Math.round(startWidth)}px`;

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

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
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

    if (
      btnUp ||
      btnDown ||
      btnRemove ||
      btnFit ||
      btnPos ||
      btnAlignLeft ||
      btnAlignCenter ||
      btnAlignRight
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
          if (alignmentConfig.preservesCurrentWidth) {
            const currentWidth = wrapper.getBoundingClientRect().width;
            wrapper.style.width = `${Math.min(currentWidth, alignmentConfig.maximumWidth)}px`;
            wrapper.style.maxWidth = "100%";
          }
          wrapper.classList.remove("mx-auto", "ml-auto", "mr-auto");
          wrapper.classList.add(...alignmentConfig.classes);
          wrapper.style.marginLeft = alignmentConfig.marginLeft;
          wrapper.style.marginRight = alignmentConfig.marginRight;
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

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      setFileDataUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }

  function handleInsertImage(url: string, captionText: string) {
    if (!url) return;
    const finalUrl = url.trim() || FALLBACK_SVG;

    const imgHtml = `
<div class="lesson-img-wrapper my-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-lg max-w-xl mx-auto text-center">
  <img src="${finalUrl}" alt="${captionText || "Imagen aeronáutica"}" class="w-full max-w-md aspect-square object-cover rounded-xl mx-auto my-2 shadow-xs" onerror="if (this.src !== '${FALLBACK_SVG}') this.src='${FALLBACK_SVG}';" style="aspect-ratio: 1 / 1; object-fit: cover;" />
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

          {/* Section 5: Lists, Callout Box & Images */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={applyList}
              className="h-9 px-3 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:border-[#1a80ff] hover:text-[#1a80ff] transition-all cursor-pointer shadow-2xs"
              title="Lista con viñetas"
            >
              📋 Lista
            </button>

            <button
              type="button"
              onClick={() =>
                insertBlockSnippet(
                  '<div class="my-4 rounded-2xl bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-800 p-4 text-xs text-sky-900 dark:text-sky-200 font-semibold">\n  <strong>✈️ Nota de Vuelo:</strong> Comprueba siempre la lista de verificación antes del despegue.\n</div><p><br></p>',
                )
              }
              className="h-9 px-3 flex items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-xs font-bold text-[#1a80ff] hover:bg-[#1a80ff] hover:text-white transition-all cursor-pointer shadow-2xs"
              title="Insertar Nota / Alerta Aeronáutica"
            >
              ✈️ Nota Alerta
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

        {/* Code Toggle Mode (For Power Users) */}
        <button
          type="button"
          onClick={toggleCodeMode}
          className="text-[11px] font-bold text-slate-500 dark:text-slate-400 hover:text-[#1a80ff] transition-colors cursor-pointer shrink-0"
        >
          {showCodeMode ? "👁️ Ver Editor Visual" : "⚙️ Modo Avanzado (HTML)"}
        </button>
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
          <div
            ref={editorRef}
            contentEditable
            onFocus={clearPlaceholderIfPresent}
            onInput={handleVisualInput}
            onBlur={handleVisualInput}
            onClick={handleCanvasClick}
            onMouseDown={handleCanvasMouseDown}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragEnd={handleDragEnd}
            className="visual-canvas min-h-[340px] max-h-[600px] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 sm:p-8 text-slate-900 dark:text-slate-100 text-sm leading-relaxed focus:outline-hidden focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 prose prose-slate dark:prose-invert max-w-none shadow-xs"
          />
          <div className="absolute bottom-3 right-4 text-[10px] font-bold text-slate-400 dark:text-slate-500 pointer-events-none">
            ✍️ Editor Visual Activo (Lo que ves es lo que verá el alumno)
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
                      Archivos PNG, JPG, WEBP o SVG
                    </span>
                  </div>
                </div>

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
                      className="w-full h-32 object-cover rounded-xl border border-slate-200 dark:border-slate-800"
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
    </div>
  );
}
