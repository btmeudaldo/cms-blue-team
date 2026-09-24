#!/usr/bin/env python3
"""
split_pdf_sections.py - Divide un manual POH en archivos PDF por cada sección técnica oficial.

Permite estructurar los manuales en carpetas organizadas por aeronave y sección (General, Limitaciones,
Emergencias, Normales, Rendimiento, Masa y Centrado, Sistemas, etc.), para luego indexarlas y agruparlas.
"""
import sys
import os
import json
from pypdf import PdfReader, PdfWriter

def extract_section(reader, start_page, end_page, output_file):
    writer = PdfWriter()
    for p in range(start_page - 1, min(end_page, len(reader.pages))):
        writer.add_page(reader.pages[p])
    os.makedirs(os.path.dirname(os.path.abspath(output_file)), exist_ok=True)
    with open(output_file, 'wb') as f:
        writer.write(f)
    print(f"  ✓ Guardado: {os.path.basename(output_file)} (Págs {start_page} a {end_page} -> {len(writer.pages)} págs)")

def split_by_ranges(pdf_path, out_dir, sections_map):
    reader = PdfReader(pdf_path)
    total = len(reader.pages)
    print(f"Procesando '{pdf_path}' ({total} páginas totales)...")
    for sec in sections_map:
        code = sec.get('code', 'SEC')
        title = sec['name']
        start_p = sec['start']
        end_p = sec['end']
        filename = f"{code}_{title}.pdf"
        out_path = os.path.join(out_dir, filename)
        extract_section(reader, start_p, end_p, out_path)

if __name__ == '__main__':
    if len(sys.argv) < 4:
        print("Uso: python scripts/split_pdf_sections.py archivo.pdf directorio_salida definicion.json")
        sys.exit(1)
    pdf_in = sys.argv[1]
    dir_out = sys.argv[2]
    with open(sys.argv[3], 'r', encoding='utf-8') as f_json:
        sec_map = json.load(f_json)
    split_by_ranges(pdf_in, dir_out, sec_map)
