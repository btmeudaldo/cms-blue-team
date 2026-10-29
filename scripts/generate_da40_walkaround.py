import math
from PIL import Image, ImageDraw, ImageFont

def generate_da40_walkaround():
    w, h = 1600, 1200
    img = Image.new("RGB", (w, h), color="#F8FAFC")
    draw = ImageDraw.Draw(img)

    try:
        f_title = ImageFont.truetype("arialbd.ttf", 36)
        f_sub = ImageFont.truetype("arial.ttf", 20)
        f_badge = ImageFont.truetype("arialbd.ttf", 22)
        f_bold = ImageFont.truetype("arialbd.ttf", 18)
        f_reg = ImageFont.truetype("arial.ttf", 16)
        f_small = ImageFont.truetype("arial.ttf", 14)
        f_num = ImageFont.truetype("arialbd.ttf", 24)
    except:
        f_title = f_sub = f_badge = f_bold = f_reg = f_small = f_num = ImageFont.load_default()

    c_navy = "#0B2E59"
    c_blue = "#1A80FF"
    c_sky = "#0284C7"
    c_slate = "#334155"
    c_slate_light = "#64748B"
    c_border = "#CBD5E1"
    c_green = "#16A34A"
    c_amber = "#D97706"

    # Header Card
    draw.rounded_rectangle([30, 25, w - 30, 105], radius=16, fill=c_navy)
    draw.text((60, 38), "DIAMOND DA40 TDI · RUTA DE INSPECCIÓN EXTERIOR (WALK-AROUND)", fill="#FFFFFF", font=f_title)
    draw.text((60, 76), "Secuencia Oficial AFM Sección 4A.3.1 (Estaciones 1 a 8 en sentido antihorario)", fill="#93C5FD", font=f_sub)

    # Aircraft Center Coordinates
    cx = 800
    cy = 600

    # Draw stylized top-view silhouette of Diamond DA40
    # Fuselage
    # Nose (top) to Tail (bottom)
    nose_y = cy - 360
    tail_y = cy + 340
    fuse_w = 70

    # Main wing
    wing_y = cy - 70
    wing_span = 620 # each side 620px
    wing_chord_root = 130
    wing_chord_tip = 80

    # Draw wings (swept forward slightly at trailing edge, straight leading edge)
    # Left wing (screen left, aircraft left)
    draw.polygon([
        (cx - fuse_w//2, wing_y),
        (cx - fuse_w//2 - wing_span, wing_y + 15),
        (cx - fuse_w//2 - wing_span, wing_y + 15 + wing_chord_tip),
        (cx - fuse_w//2, wing_y + wing_chord_root)
    ], fill="#E2E8F0", outline="#94A3B8", width=3)

    # Right wing
    draw.polygon([
        (cx + fuse_w//2, wing_y),
        (cx + fuse_w//2 + wing_span, wing_y + 15),
        (cx + fuse_w//2 + wing_span, wing_y + 15 + wing_chord_tip),
        (cx + fuse_w//2, wing_y + wing_chord_root)
    ], fill="#E2E8F0", outline="#94A3B8", width=3)

    # Fuselage pod
    draw.polygon([
        (cx, nose_y),
        (cx + 45, nose_y + 90),
        (cx + 48, cy),
        (cx + 26, tail_y - 60),
        (cx + 18, tail_y),
        (cx - 18, tail_y),
        (cx - 26, tail_y - 60),
        (cx - 48, cy),
        (cx - 45, nose_y + 90)
    ], fill="#CBD5E1", outline="#64748B", width=3)

    # Canopy
    draw.rounded_rectangle([cx - 36, nose_y + 120, cx + 36, cy - 30], radius=20, fill="#38BDF8", outline="#0284C7", width=2)

    # T-Tail (Horizontal Stabilizer at tail)
    htail_span = 210
    htail_y = tail_y - 30
    draw.polygon([
        (cx - htail_span, htail_y - 20),
        (cx + htail_span, htail_y - 20),
        (cx + htail_span, htail_y + 35),
        (cx - htail_span, htail_y + 35)
    ], fill="#E2E8F0", outline="#94A3B8", width=3)

    # 3-blade Propeller MTV-6
    prop_y = nose_y
    draw.line([(cx - 75, prop_y - 15), (cx + 75, prop_y + 15)], fill="#0F172A", width=8)
    draw.line([(cx, prop_y - 75), (cx, prop_y + 20)], fill="#0F172A", width=8)
    draw.ellipse([cx - 16, prop_y - 16, cx + 16, prop_y + 16], fill="#F8FAFC", outline="#0F172A", width=2)

    # Inspection Stations Data
    stations = [
        {
            "num": 1,
            "x": cx - 180,
            "y": cy + 70,
            "card_x": 60,
            "card_y": 260,
            "title": "1. TREN PRINCIPAL IZQUIERDO",
            "items": [
                "• Pata y carenado de rueda: estado",
                "• Presión neumático: 2.5 bar / 36 psi",
                "• Desgaste, slip marks y fuga de frenos",
                "• Retirar calzos (chocks)"
            ]
        },
        {
            "num": 2,
            "x": cx - 480,
            "y": wing_y + 40,
            "card_x": 60,
            "card_y": 440,
            "title": "2. SEMIALA IZQUIERDA",
            "items": [
                "• Superficie alar, step y tomas inferiores",
                "• Drenaje de combustible (tank sump)",
                "• Sonda Pitot calefactada (quitar funda)",
                "• Avisador de pérdida (anillo rojo)",
                "• Alerón y flap: bisagras y roll pins"
            ]
        },
        {
            "num": 3,
            "x": cx - 100,
            "y": cy + 180,
            "card_x": 60,
            "card_y": 660,
            "title": "3. FUSELAJE IZQUIERDO",
            "items": [
                "• Superficie de composite y acabado",
                "• Tomas estáticas (si instaladas)",
                "• Antenas y ventanilla trasera"
            ]
        },
        {
            "num": 4,
            "x": cx,
            "y": tail_y + 40,
            "card_x": 580,
            "card_y": 900,
            "title": "4. EMPENAJE EN 'T'",
            "items": [
                "• Estabilizadores vertical y horizontal",
                "• Timón de profundidad y varillaje",
                "• Tab de compensador y timón de dirección",
                "• Descargadores de estática y amarre (tie-down)"
            ]
        },
        {
            "num": 5,
            "x": cx + 100,
            "y": cy + 180,
            "card_x": 1100,
            "card_y": 660,
            "title": "5. FUSELAJE DERECHO",
            "items": [
                "• Superficie de composite del fuselaje",
                "• Antenas y estado general de pintura"
            ]
        },
        {
            "num": 6,
            "x": cx + 480,
            "y": wing_y + 40,
            "card_x": 1100,
            "card_y": 440,
            "title": "6. SEMIALA DERECHA",
            "items": [
                "• Flap y alerón: bisagras y roll pins",
                "• Luces de posición y ACL (strobe)",
                "• Borde de ataque y tapón combustible cerrado",
                "• Drenador de depósito auxiliar y principal",
                "• Deflector enfriador combustible (<20°C ON / >20°C OFF)"
            ]
        },
        {
            "num": 7,
            "x": cx + 180,
            "y": cy + 70,
            "card_x": 1100,
            "card_y": 240,
            "title": "7. TREN PRINCIPAL DERECHO",
            "items": [
                "• Pata y carenado: inspección visual",
                "• Presión neumático: 2.5 bar / 36 psi",
                "• Desgaste, slip marks y latiguillos de freno",
                "• Retirar calzos (chocks)"
            ]
        },
        {
            "num": 8,
            "x": cx,
            "y": nose_y - 40,
            "card_x": 580,
            "card_y": 140,
            "title": "8. MORRO Y MOTOR (TAE 125)",
            "items": [
                "• Aceite motor: varilla (4.5 - 6.0 l)",
                "• Aceite reductora: mirilla capó inferior",
                "• 5 Tomas de aire despejadas",
                "• Hélice y spinner sin melladuras ni fugas",
                "• Pata de morro (elastómeros) y neumático",
                "• Drenaje de Gascolator en intradós"
            ]
        }
    ]

    # Draw route arrows in counter-clockwise sequence: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 1
    route_pts = [
        (stations[0]["x"], stations[0]["y"]),
        (stations[1]["x"], stations[1]["y"]),
        (stations[2]["x"], stations[2]["y"]),
        (stations[3]["x"], stations[3]["y"]),
        (stations[4]["x"], stations[4]["y"]),
        (stations[5]["x"], stations[5]["y"]),
        (stations[6]["x"], stations[6]["y"]),
        (stations[7]["x"], stations[7]["y"]),
        (stations[0]["x"], stations[0]["y"])
    ]

    for k in range(len(route_pts) - 1):
        p1 = route_pts[k]
        p2 = route_pts[k+1]
        draw.line([p1, p2], fill="#38BDF8", width=4)
        # Midpoint arrow
        mx = (p1[0] + p2[0]) / 2
        my = (p1[1] + p2[1]) / 2
        ang = math.atan2(p2[1] - p1[1], p2[0] - p1[0])
        arrow_len = 16
        ax1 = mx - arrow_len * math.cos(ang - math.pi / 6)
        ay1 = my - arrow_len * math.sin(ang - math.pi / 6)
        ax2 = mx - arrow_len * math.cos(ang + math.pi / 6)
        ay2 = my - arrow_len * math.sin(ang + math.pi / 6)
        draw.polygon([(mx, my), (ax1, ay1), (ax2, ay2)], fill=c_blue)

    # Draw Stations cards & circles
    for st in stations:
        # Station circle on aircraft
        r = 24
        draw.ellipse([st["x"] - r, st["y"] - r, st["x"] + r, st["y"] + r], fill=c_navy, outline="#FFFFFF", width=3)
        num_str = str(st["num"])
        draw.text((st["x"] - 7, st["y"] - 14), num_str, fill="#FFFFFF", font=f_num)

        # Leader line from circle to card
        # Connect to card border
        card_w = 440
        card_h = 24 + len(st["items"]) * 22 + 16
        card_cx = st["card_x"] + card_w // 2
        card_cy = st["card_y"] + card_h // 2
        draw.line([(st["x"], st["y"]), (card_cx, card_cy)], fill="#94A3B8", width=1)

        # Card box
        draw.rounded_rectangle([st["card_x"], st["card_y"], st["card_x"] + card_w, st["card_y"] + card_h], radius=10, fill="#FFFFFF", outline=c_border, width=2)
        # Card header badge
        draw.rounded_rectangle([st["card_x"], st["card_y"], st["card_x"] + card_w, st["card_y"] + 32], radius=10, fill="#F1F5F9")
        draw.rectangle([st["card_x"], st["card_y"] + 20, st["card_x"] + card_w, st["card_y"] + 32], fill="#F1F5F9")
        draw.text((st["card_x"] + 12, st["card_y"] + 6), st["title"], fill=c_navy, font=f_bold)

        # Items
        for j, item in enumerate(st["items"]):
            draw.text((st["card_x"] + 14, st["card_y"] + 38 + j * 22), item, fill=c_slate, font=f_small)

    out_path = "public/images/da40/da40-walkaround.png"
    img.save(out_path, "PNG", quality=95)
    print("Walkaround diagram saved to", out_path)

if __name__ == "__main__":
    generate_da40_walkaround()

