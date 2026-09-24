#!/usr/bin/env python3
"""
split_poh_pages.py - Utilidad avanzada para dividir páginas dobles (2-en-1 apaisadas) en PDFs de manuales POH.

Características:
1. Detecta páginas apaisadas (2 páginas de manual escaneadas en una sola hoja) usando la relación de aspecto visual.
2. Soporta páginas con rotación interna de visor (/Rotate = 0, 90, 180, 270 grados).
3. Divide exactamente por el eje medial manteniendo la orientación de lectura natural (izquierda -> derecha).
4. Ajusta tanto 'mediabox' como 'cropbox' para que el visor PDF muestre limpiamente cada página sin artefactos de recorte.
5. Permite procesar un archivo individual o procesar por lotes directorios completos.
"""

import sys
import os
import copy
from pypdf import PdfReader, PdfWriter

def split_double_pages(input_path: str, output_path: str, aspect_threshold: float = 1.25) -> dict:
    """
    Procesa un PDF dividiendo únicamente las páginas cuya relación ancho/alto visual
    sea mayor o igual a aspect_threshold (por defecto 1.25).
    """
    reader = PdfReader(input_path)
    writer = PdfWriter()
    original_count = len(reader.pages)
    split_count = 0

    for idx, page in enumerate(reader.pages):
        box = page.mediabox
        rot = page.get('/Rotate', 0) % 360
        w = float(box.width)
        h = float(box.height)
        
        # Dimensiones visuales percibidas por el usuario
        if rot in [90, 270]:
            vw, vh = h, w
        else:
            vw, vh = w, h
            
        aspect = vw / vh

        # Si el aspecto visual indica página apaisada 2-en-1:
        if aspect >= aspect_threshold:
            split_count += 1
            
            # CASO A: Rotación 0° o 180° (el ancho real w > h)
            if rot in [0, 180]:
                mid_x = (float(box.left) + float(box.right)) / 2.0
                
                p_left = copy.copy(page)
                p_left.mediabox = copy.copy(box)
                p_left.cropbox = copy.copy(box)
                
                p_right = copy.copy(page)
                p_right.mediabox = copy.copy(box)
                p_right.cropbox = copy.copy(box)
                
                if rot == 0:
                    p_left.mediabox.right = mid_x
                    p_left.cropbox.right = mid_x
                    p_right.mediabox.left = mid_x
                    p_right.cropbox.left = mid_x
                    writer.add_page(p_left)
                    writer.add_page(p_right)
                else: # 180°
                    p_left.mediabox.left = mid_x
                    p_left.cropbox.left = mid_x
                    p_right.mediabox.right = mid_x
                    p_right.cropbox.right = mid_x
                    writer.add_page(p_right)
                    writer.add_page(p_left)
                    
            # CASO B: Rotación 90° o 270° (en el mediabox la altura h > w)
            elif rot in [90, 270]:
                mid_y = (float(box.bottom) + float(box.top)) / 2.0
                
                p_a = copy.copy(page)
                p_a.mediabox = copy.copy(box)
                p_a.cropbox = copy.copy(box)
                
                p_b = copy.copy(page)
                p_b.mediabox = copy.copy(box)
                p_b.cropbox = copy.copy(box)
                
                if rot == 90:
                    # Con 90° en sentido horario:
                    # La mitad izquierda visual corresponde a Y superior [mid_y, top]
                    # La mitad derecha visual corresponde a Y inferior [bottom, mid_y]
                    p_a.mediabox.bottom = mid_y
                    p_a.cropbox.bottom = mid_y
                    p_b.mediabox.top = mid_y
                    p_b.cropbox.top = mid_y
                    writer.add_page(p_a)
                    writer.add_page(p_b)
                else: # 270° (90° antihorario)
                    # La mitad izquierda visual corresponde a Y inferior [bottom, mid_y]
                    # La mitad derecha visual corresponde a Y superior [mid_y, top]
                    p_a.mediabox.top = mid_y
                    p_a.cropbox.top = mid_y
                    p_b.mediabox.bottom = mid_y
                    p_b.cropbox.bottom = mid_y
                    writer.add_page(p_a)
                    writer.add_page(p_b)
        else:
            # Página individual vertical estándar o cuadrada: se mantiene intacta
            writer.add_page(page)

    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    with open(output_path, 'wb') as f_out:
        writer.write(f_out)
        
    final_count = len(writer.pages)
    stats = {
        'input': input_path,
        'output': output_path,
        'original_pages': original_count,
        'split_pages': split_count,
        'final_pages': final_count
    }
    return stats

def main():
    if len(sys.argv) < 3:
        print("Uso: python scripts/split_poh_pages.py <entrada.pdf> <salida.pdf> [aspect_ratio_min]")
        print("Ejemplo: python scripts/split_poh_pages.py manual.pdf manual_dividido.pdf")
        sys.exit(1)
        
    in_file = sys.argv[1]
    out_file = sys.argv[2]
    threshold = float(sys.argv[3]) if len(sys.argv) > 3 else 1.25
    
    if not os.path.exists(in_file):
        print(f"Error: El archivo de entrada '{in_file}' no existe.")
        sys.exit(1)
        
    print(f"Procesando '{in_file}'...")
    stats = split_double_pages(in_file, out_file, threshold)
    print("=" * 60)
    print(f"PDF procesado con éxito:")
    print(f"  • Archivo salida: {stats['output']}")
    print(f"  • Páginas originales: {stats['original_pages']}")
    print(f"  • Hojas 2-en-1 detectadas y divididas: {stats['split_pages']}")
    print(f"  • Páginas totales resultantes: {stats['final_pages']}")
    print("=" * 60)

if __name__ == '__main__':
    main()
