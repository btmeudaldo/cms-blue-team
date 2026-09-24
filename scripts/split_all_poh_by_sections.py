#!/usr/bin/env python3
"""
split_all_poh_by_sections.py

Segmenta los manuales oficiales de la flota Cessna 172 de Blue Team Flight School
en archivos PDF individuales organizados por matrícula y sección técnica,
siguiendo la nomenclatura: [MATRÍCULA]_[SECCIÓN]_[TÍTULO].pdf

Fuentes procesadas:
- EC-NNA: POH C172N Base (Secciones 1 a 7) + Suplemento Continental TAE 125-02-114 (Secciones 1 a 9)
- EC-OXV: Suplemento Continental TAE 125 (Secciones 1 a 7) + POH F172K Base (Secciones 1 a 6 + Aviónica KRT2)
- EC-NNX: Manual Base Reims F172 + Suplemento Continental TAE 125 (Secciones 1 a 7)
- EC-OXT: Suplementos Continental TAE 125-02-99 (Secciones 1 a 7) + POH F172M Base
"""

import os
import pymupdf

OUTPUT_BASE = "public/manuals/cessna/secciones"

SECTIONS_CONFIG = {
    "EC-NNA": {
        "file": "Manuales/Cessna/OM+EC-NNA+++suplemento+motor.pdf",
        "output_dir": os.path.join(OUTPUT_BASE, "EC-NNA"),
        "sections": [
            # POH Base Cessna 172N
            {"code": "POH-SEC01", "name": "General_y_Dimensiones", "start": 7, "end": 16},
            {"code": "POH-SEC02", "name": "Limitaciones_Operacionales", "start": 17, "end": 28},
            {"code": "POH-SEC03", "name": "Procedimientos_Emergencia", "start": 29, "end": 46},
            {"code": "POH-SEC04", "name": "Procedimientos_Normales_Prevuelo", "start": 47, "end": 68},
            {"code": "POH-SEC05", "name": "Rendimiento_y_Performance", "start": 69, "end": 88},
            {"code": "POH-SEC06", "name": "Masa_Centrado_y_Carga", "start": 89, "end": 100},
            {"code": "POH-SEC07", "name": "Descripcion_de_Sistemas_Celula_y_Flaps", "start": 101, "end": 138},
            # Suplemento Motor Continental TAE 125-02-114 (CD-155)
            {"code": "SUPL-TAE-SEC01", "name": "General_Motor_Diesel", "start": 153, "end": 166},
            {"code": "SUPL-TAE-SEC02", "name": "Limitaciones_Motor_y_Prohibicion_Barrenas", "start": 167, "end": 178},
            {"code": "SUPL-TAE-SEC03", "name": "Procedimientos_Emergencia_FADEC_y_Motor", "start": 179, "end": 202},
            {"code": "SUPL-TAE-SEC04", "name": "Procedimientos_Normales_y_Chequeo_FADEC", "start": 203, "end": 226},
            {"code": "SUPL-TAE-SEC05", "name": "Rendimiento_y_Consumos_JetA1", "start": 227, "end": 290},
            {"code": "SUPL-TAE-SEC06", "name": "Masa_y_Centrado_STC", "start": 291, "end": 294},
            {"code": "SUPL-TAE-SEC07", "name": "Sistema_Propulsor_FADEC_y_Electrico", "start": 295, "end": 298},
            {"code": "SUPL-TAE-SEC08", "name": "Mantenimiento_y_Servicio", "start": 299, "end": 300},
            {"code": "SUPL-TAE-SEC09", "name": "Suplementos_Opcionales", "start": 301, "end": 302},
        ]
    },
    "EC-OXV": {
        "file": "Manuales/Cessna/POH+++SUPLEMENTOS+F172K+EC-OXV OCR.pdf",
        "output_dir": os.path.join(OUTPUT_BASE, "EC-OXV"),
        "sections": [
            # Suplemento Motor Continental TAE 125-02-114
            {"code": "SUPL-TAE-SEC01", "name": "General_Motor_Diesel", "start": 16, "end": 29},
            {"code": "SUPL-TAE-SEC02", "name": "Limitaciones_Motor_y_Prohibicion_Barrenas", "start": 30, "end": 39},
            {"code": "SUPL-TAE-SEC03", "name": "Procedimientos_Emergencia_FADEC_y_Motor", "start": 40, "end": 61},
            {"code": "SUPL-TAE-SEC04", "name": "Procedimientos_Normales_y_Chequeo_FADEC", "start": 62, "end": 95},
            {"code": "SUPL-TAE-SEC05", "name": "Rendimiento_y_Consumos_JetA1", "start": 96, "end": 139},
            {"code": "SUPL-TAE-SEC06", "name": "Masa_y_Centrado_STC", "start": 140, "end": 143},
            {"code": "SUPL-TAE-SEC07", "name": "Sistema_Propulsor_FADEC_y_Electrico", "start": 144, "end": 148},
            # POH Base Reims F172K
            {"code": "POH-SEC01", "name": "Check_List_Operacional", "start": 152, "end": 157},
            {"code": "POH-SEC02", "name": "Descripcion_y_Flaps_40_Grados", "start": 158, "end": 173},
            {"code": "POH-SEC03", "name": "Procedimientos_Emergencia", "start": 174, "end": 181},
            {"code": "POH-SEC04", "name": "Limitaciones_Operacionales", "start": 182, "end": 189},
            {"code": "POH-SEC05", "name": "Cuidado_y_Mantenimiento_Avion", "start": 190, "end": 199},
            {"code": "POH-SEC06", "name": "Datos_Operacionales_y_Rendimiento", "start": 200, "end": 217},
            {"code": "POH-SEC07", "name": "Avionica_Radio_KRT2_VHF", "start": 218, "end": 256},
        ]
    },
    "EC-NNX": {
        "file": "Manuales/Cessna/OM+EC-NNX+++suplemento+motor.pdf",
        "output_dir": os.path.join(OUTPUT_BASE, "EC-NNX"),
        "sections": [
            # Manual Base Reims F172
            {"code": "POH-BASE", "name": "Manual_Vuelo_Reims_F172", "start": 1, "end": 54},
            # Suplemento Motor Continental TAE 125
            {"code": "SUPL-TAE-SEC01", "name": "General_Motor_Diesel", "start": 69, "end": 86},
            {"code": "SUPL-TAE-SEC02", "name": "Limitaciones_Motor_y_Prohibicion_Barrenas", "start": 87, "end": 96},
            {"code": "SUPL-TAE-SEC03", "name": "Procedimientos_Emergencia_FADEC_y_Motor", "start": 97, "end": 118},
            {"code": "SUPL-TAE-SEC04", "name": "Procedimientos_Normales_y_Chequeo_FADEC", "start": 119, "end": 146},
            {"code": "SUPL-TAE-SEC05", "name": "Rendimiento_y_Consumos_JetA1", "start": 147, "end": 194},
            {"code": "SUPL-TAE-SEC06", "name": "Masa_y_Centrado_STC", "start": 195, "end": 202},
            {"code": "SUPL-TAE-SEC07", "name": "Sistema_Propulsor_FADEC_y_Electrico", "start": 203, "end": 204},
        ]
    },
    "EC-OXT": {
        "file": "Manuales/Cessna/SUPLEMENTOS+F172M+EC-OXT OCR.pdf",
        "output_dir": os.path.join(OUTPUT_BASE, "EC-OXT"),
        "sections": [
            # Suplemento Motor Continental TAE 125-02-99
            {"code": "SUPL-TAE-SEC01", "name": "General_Motor_Diesel", "start": 15, "end": 32},
            {"code": "SUPL-TAE-SEC02", "name": "Limitaciones_Motor_y_Prohibicion_Barrenas", "start": 33, "end": 44},
            {"code": "SUPL-TAE-SEC03", "name": "Procedimientos_Emergencia_FADEC_y_Motor", "start": 45, "end": 66},
            {"code": "SUPL-TAE-SEC04", "name": "Procedimientos_Normales_y_Chequeo_FADEC", "start": 67, "end": 94},
            {"code": "SUPL-TAE-SEC05", "name": "Rendimiento_y_Consumos_JetA1", "start": 95, "end": 142},
            {"code": "SUPL-TAE-SEC06", "name": "Masa_y_Centrado_STC", "start": 143, "end": 148},
            {"code": "SUPL-TAE-SEC07", "name": "Sistema_Propulsor_FADEC_y_Electrico", "start": 149, "end": 150},
        ]
    }
}

def extract_section_pdf(src_doc, start_p, end_p, out_path):
    out_doc = pymupdf.open()
    for p in range(start_p - 1, min(end_p, len(src_doc))):
        page = src_doc[p]
        rect = page.rect
        new_p = out_doc.new_page(width=rect.width, height=rect.height)
        new_p.show_pdf_page(new_p.rect, src_doc, p)
    
    os.makedirs(os.path.dirname(os.path.abspath(out_path)), exist_ok=True)
    out_doc.save(out_path, deflate=True, garbage=4, clean=True)
    out_doc.close()

def main():
    print("=" * 70)
    print("SEPARACIÓN DE MANUALES POH EN SECCIONES TÉCNICAS OFICIALES")
    print("=" * 70)
    
    total_created = 0
    
    for reg, cfg in SECTIONS_CONFIG.items():
        src_path = cfg["file"]
        out_dir = cfg["output_dir"]
        
        if not os.path.exists(src_path):
            print(f"⚠️ Archivo origen no encontrado para {reg}: {src_path}")
            continue
            
        src_doc = pymupdf.open(src_path)
        print(f"\n[{reg}] Procesando '{src_path}' ({len(src_doc)} pags totales)...")
        
        for sec in cfg["sections"]:
            filename = f"{reg}_{sec['code']}_{sec['name']}.pdf"
            target_path = os.path.join(out_dir, filename)
            
            extract_section_pdf(src_doc, sec["start"], sec["end"], target_path)
            pages_extracted = (sec["end"] - sec["start"]) + 1
            print(f"  * {filename} (Pags {sec['start']} a {sec['end']} | {pages_extracted} pags)")
            total_created += 1
            
        src_doc.close()
        
    print("\n" + "=" * 70)
    print(f"Proceso completado con exito. Total de {total_created} secciones creadas en '{OUTPUT_BASE}'.")
    print("=" * 70)

if __name__ == "__main__":
    main()
