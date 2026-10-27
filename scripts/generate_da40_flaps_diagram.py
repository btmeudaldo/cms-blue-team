import os
import math
from PIL import Image, ImageDraw, ImageFont

def create_da40_flaps_diagram():
    w, h = 1600, 1050
    img = Image.new("RGB", (w, h), color="#F8FAFC")
    draw = ImageDraw.Draw(img)

    # Fonts
    try:
        font_main_title = ImageFont.truetype("arialbd.ttf", 36)
        font_sub_title = ImageFont.truetype("arial.ttf", 20)
        font_card_title = ImageFont.truetype("arialbd.ttf", 22)
        font_bold = ImageFont.truetype("arialbd.ttf", 20)
        font_reg = ImageFont.truetype("arial.ttf", 18)
        font_small = ImageFont.truetype("arial.ttf", 15)
        font_mono = ImageFont.truetype("consola.ttf", 20)
        font_mono_bold = ImageFont.truetype("consolab.ttf", 22)
    except:
        font_main_title = font_sub_title = font_card_title = font_bold = font_reg = font_small = font_mono = font_mono_bold = ImageFont.load_default()

    # Colors
    c_navy = "#0B2E59"
    c_blue = "#1A80FF"
    c_sky = "#0284C7"
    c_slate = "#334155"
    c_slate_light = "#64748B"
    c_border = "#CBD5E1"
    c_card_bg = "#FFFFFF"
    c_green = "#16A34A"
    c_amber = "#D97706"
    c_gray_bg = "#F1F5F9"

    # Header Card
    draw.rounded_rectangle([30, 25, w - 30, 105], radius=16, fill=c_navy)
    draw.text((60, 40), "DIAMOND DA40 TDI · SISTEMA DE FLAPS ELÉCTRICOS Y MANDOS", fill="#FFFFFF", font=font_main_title)
    draw.text((60, 78), "Superficies de Curvatura (Plain Flaps) GFRP/CFRP · Sincronización Mecánica y Control de Cabina", fill="#93C5FD", font=font_sub_title)

    # -------------------------------------------------------------
    # SECTION 1: PERFILES ALULARES Y DEFLEXIONES (0°, 20°, 42°)
    # -------------------------------------------------------------
    # 3 Cards side by side
    sec1_y = 125
    sec1_h = 360
    card_w = (w - 60 - 40) // 3  # ~490px each

    flap_configs = [
        {
            "title": "CRUISE (UP) · 0°",
            "badge": "Limpio / Alta Velocidad",
            "badge_color": c_green,
            "badge_bg": "#DCFCE7",
            "angle": 0,
            "vfe": "Sin limitación de Flaps",
            "desc": "Perfil aerodinámico limpio con mínima resistencia de forma.",
            "usage": "Ascenso de crucero, vuelo de ruta y esperas limpias.",
            "led_color": c_green,
            "led_text": "LUZ VERDE (UP)",
        },
        {
            "title": "TAKE-OFF (T/O) · 20°",
            "badge": "VFE = 108 KIAS",
            "badge_color": c_sky,
            "badge_bg": "#E0F2FE",
            "angle": 20,
            "vfe": "VFE = 108 KIAS (límite estructural)",
            "desc": "Aumento significativo de sustentación con resistencia moderada.",
            "usage": "Carrera de despegue, ascenso inicial y tramo de aproximación.",
            "led_color": "#F8FAFC",
            "led_border": "#94A3B8",
            "led_text": "LUZ BLANCA (T/O)",
        },
        {
            "title": "LANDING (LDG) · 42°",
            "badge": "VFE = 91 KIAS",
            "badge_color": c_amber,
            "badge_bg": "#FEF3C7",
            "angle": 42,
            "vfe": "VFE = 91 KIAS (límite estructural)",
            "desc": "Máxima sustentación y alta resistencia inducida y de forma.",
            "usage": "Aproximación final, senda pronunciada y toma de contacto.",
            "led_color": "#F8FAFC",
            "led_border": "#94A3B8",
            "led_text": "LUZ BLANCA (LDG)",
        }
    ]

    def draw_airfoil_profile(x_start, y_center, chord, flap_angle, draw_obj):
        # Wing body (fixed 75% of chord)
        main_chord = chord * 0.75
        flap_chord = chord * 0.25

        # NACA-style profile coordinates
        # Top curve
        top_pts = []
        bot_pts = []
        steps = 30
        for i in range(steps + 1):
            t = (i / steps)
            x = x_start + t * main_chord
            # Airfoil thickness function
            thickness = 36 * (math.sin(t * math.pi) ** 0.7)
            y_t = y_center - thickness * 0.65
            y_b = y_center + thickness * 0.35
            top_pts.append((x, y_t))
            bot_pts.insert(0, (x, y_b))

        # Join main wing polygon
        wing_poly = top_pts + bot_pts
        draw_obj.polygon(wing_poly, fill="#E2E8F0", outline="#475569", width=3)

        # Main wing spar / structural ribs
        draw_obj.line([(x_start + main_chord * 0.3, y_center - 20), (x_start + main_chord * 0.3, y_center + 12)], fill="#94A3B8", width=3)
        draw_obj.line([(x_start + main_chord * 0.65, y_center - 16), (x_start + main_chord * 0.65, y_center + 10)], fill="#94A3B8", width=3)

        # Flap hinge point
        hinge_x = x_start + main_chord
        hinge_y = y_center + 5
        draw_obj.ellipse([hinge_x - 5, hinge_y - 5, hinge_x + 5, hinge_y + 5], fill=c_navy, outline="#FFFFFF", width=2)

        # Flap contour deflected by flap_angle
        rad = math.radians(flap_angle)
        f_top_pts = []
        f_bot_pts = []
        f_steps = 15
        for i in range(f_steps + 1):
            t = (i / f_steps)
            fx_rel = t * flap_chord
            # taper thickness to trailing edge
            thick = (1.0 - t) * 14
            yt_rel = -thick * 0.6
            yb_rel = thick * 0.4

            # Rotate around hinge
            # Rotated coordinates: x' = x*cos(r) + y*sin(r), y' = -x*sin(r) + y*cos(r) (screen y is downwards)
            rot_x_t = fx_rel * math.cos(rad) - yt_rel * math.sin(rad)
            rot_y_t = fx_rel * math.sin(rad) + yt_rel * math.cos(rad)
            rot_x_b = fx_rel * math.cos(rad) - yb_rel * math.sin(rad)
            rot_y_b = fx_rel * math.sin(rad) + yb_rel * math.cos(rad)

            f_top_pts.append((hinge_x + rot_x_t, hinge_y + rot_y_t))
            f_bot_pts.insert(0, (hinge_x + rot_x_b, hinge_y + rot_y_b))

        flap_poly = f_top_pts + f_bot_pts
        f_fill = "#BAE6FD" if flap_angle == 0 else ("#7DD3FC" if flap_angle == 20 else "#38BDF8")
        draw_obj.polygon(flap_poly, fill=f_fill, outline=c_navy, width=3)

        # Trailing edge indicator
        te_x = hinge_x + flap_chord * math.cos(rad)
        te_y = hinge_y + flap_chord * math.sin(rad)
        if flap_angle > 0:
            # Arc showing deflection
            draw_obj.arc([hinge_x - 45, hinge_y - 45, hinge_x + 45, hinge_y + 45], start=0, end=flap_angle, fill=c_amber, width=2)
            deg_x = hinge_x + 55 * math.cos(rad / 2)
            deg_y = hinge_y + 55 * math.sin(rad / 2)
            draw_obj.text((deg_x, deg_y - 8), f"{flap_angle}°", fill=c_navy, font=font_mono_bold)

    for i, cfg in enumerate(flap_configs):
        cx = 30 + i * (card_w + 20)
        draw.rounded_rectangle([cx, sec1_y, cx + card_w, sec1_y + sec1_h], radius=14, fill=c_card_bg, outline=c_border, width=2)

        # Header of card
        draw.rounded_rectangle([cx, sec1_y, cx + card_w, sec1_y + 52], radius=14, fill=c_gray_bg)
        draw.rectangle([cx, sec1_y + 36, cx + card_w, sec1_y + 52], fill=c_gray_bg) # unround bottom
        draw.text((cx + 16, sec1_y + 14), cfg["title"], fill=c_navy, font=font_card_title)

        # Badge
        badge_w = 175 if i == 0 else 135
        bx = cx + card_w - badge_w - 12
        draw.rounded_rectangle([bx, sec1_y + 12, bx + badge_w, sec1_y + 40], radius=8, fill=cfg["badge_bg"])
        draw.text((bx + 10, sec1_y + 16), cfg["badge"], fill=cfg["badge_color"], font=font_bold)

        # Airfoil visual
        draw_airfoil_profile(cx + 25, sec1_y + 145, 340, cfg["angle"], draw)

        # Descriptions & Data
        div_y = sec1_y + 225
        draw.line([(cx + 15, div_y), (cx + card_w - 15, div_y)], fill="#E2E8F0", width=1)

        draw.text((cx + 16, div_y + 10), cfg["desc"], fill=c_slate, font=font_reg)
        draw.text((cx + 16, div_y + 36), f"• Empleo: {cfg['usage']}", fill=c_slate, font=font_small)
        draw.text((cx + 16, div_y + 60), f"• Límite: {cfg['vfe']}", fill=c_navy, font=font_bold)

        # LED Indicator representation
        draw.rounded_rectangle([cx + 16, div_y + 90, cx + card_w - 16, div_y + 122], radius=6, fill="#F8FAFC", outline="#E2E8F0", width=1)
        led_x = cx + 28
        led_y = div_y + 106
        draw.ellipse([led_x - 8, led_y - 8, led_x + 8, led_y + 8], fill=cfg["led_color"], outline=cfg.get("led_border", c_green), width=2)
        draw.text((cx + 46, div_y + 96), f"Avisador en cabina: {cfg['led_text']}", fill=c_slate, font=font_small)

    # -------------------------------------------------------------
    # SECTION 2: ARQUITECTURA MECÁNICA Y CONTROL DE CABINA
    # -------------------------------------------------------------
    sec2_y = 505
    sec2_h = 515

    # Card Left: Mechanical Architecture (Torque tube, push rods, electric motor)
    col1_w = 980
    draw.rounded_rectangle([30, sec2_y, 30 + col1_w, sec2_y + sec2_h], radius=14, fill=c_card_bg, outline=c_border, width=2)
    draw.rounded_rectangle([30, sec2_y, 30 + col1_w, sec2_y + 48], radius=14, fill=c_gray_bg)
    draw.rectangle([30, sec2_y + 32, 30 + col1_w, sec2_y + 48], fill=c_gray_bg)
    draw.text((46, sec2_y + 12), "ARQUITECTURA MECÁNICA Y SINCRONIZACIÓN TRANSVERSAL (AFM 7.3)", fill=c_navy, font=font_card_title)

    # Diagram of aircraft wings + torque tube
    # Center fuselage representation
    fuse_cx = 30 + col1_w // 2
    fuse_top = sec2_y + 75
    fuse_w = 120
    fuse_h = 240
    draw.rounded_rectangle([fuse_cx - fuse_w // 2, fuse_top, fuse_cx + fuse_w // 2, fuse_top + fuse_h], radius=24, fill="#F1F5F9", outline="#94A3B8", width=2)
    draw.text((fuse_cx - 36, fuse_top + 15), "FUSELAJE", fill=c_slate_light, font=font_bold)

    # Wings left and right
    wing_span = 360
    # Left wing
    draw.polygon([(fuse_cx - fuse_w // 2, fuse_top + 40), (fuse_cx - fuse_w // 2 - wing_span, fuse_top + 60), 
                  (fuse_cx - fuse_w // 2 - wing_span, fuse_top + 190), (fuse_cx - fuse_w // 2, fuse_top + 210)],
                 fill="#F8FAFC", outline="#CBD5E1", width=2)
    draw.text((fuse_cx - fuse_w // 2 - 280, fuse_top + 75), "SEMIALA IZQUIERDA", fill=c_slate_light, font=font_bold)

    # Right wing
    draw.polygon([(fuse_cx + fuse_w // 2, fuse_top + 40), (fuse_cx + fuse_w // 2 + wing_span, fuse_top + 60), 
                  (fuse_cx + fuse_w // 2 + wing_span, fuse_top + 190), (fuse_cx + fuse_w // 2, fuse_top + 210)],
                 fill="#F8FAFC", outline="#CBD5E1", width=2)
    draw.text((fuse_cx + fuse_w // 2 + 130, fuse_top + 75), "SEMIALA DERECHA", fill=c_slate_light, font=font_bold)

    # Flap surfaces at trailing edge of wings
    flap_w = 260
    flap_h = 42
    # Left flap
    lf_x = fuse_cx - fuse_w // 2 - flap_w - 20
    lf_y = fuse_top + 172
    draw.rounded_rectangle([lf_x, lf_y, lf_x + flap_w, lf_y + flap_h], radius=6, fill="#BAE6FD", outline=c_navy, width=2)
    draw.text((lf_x + 55, lf_y + 10), "FLAP IZQUIERDO (GFRP/CFRP)", fill=c_navy, font=font_bold)

    # Right flap
    rf_x = fuse_cx + fuse_w // 2 + 20
    rf_y = fuse_top + 172
    draw.rounded_rectangle([rf_x, rf_y, rf_x + flap_w, rf_y + flap_h], radius=6, fill="#BAE6FD", outline=c_navy, width=2)
    draw.text((rf_x + 45, rf_y + 10), "FLAP DERECHO (GFRP/CFRP)", fill=c_navy, font=font_bold)

    # Central Electric Motor & Actuator
    motor_x = fuse_cx - 35
    motor_y = fuse_top + 95
    draw.rounded_rectangle([motor_x, motor_y, motor_x + 70, motor_y + 50], radius=8, fill="#0F172A", outline="#38BDF8", width=2)
    draw.text((motor_x + 10, motor_y + 8), "MOTOR", fill="#38BDF8", font=font_small)
    draw.text((motor_x + 6, motor_y + 26), "ACTUADOR", fill="#FFFFFF", font=font_small)

    # Torque Tube (Tubo de Torsión transversal) across fuselage
    tt_y = fuse_top + 120
    draw.line([(fuse_cx - fuse_w // 2 - 10, tt_y), (fuse_cx + fuse_w // 2 + 10, tt_y)], fill="#EA580C", width=8)
    draw.ellipse([fuse_cx - fuse_w // 2 - 15, tt_y - 6, fuse_cx - fuse_w // 2 - 5, tt_y + 6], fill="#C2410C")
    draw.ellipse([fuse_cx + fuse_w // 2 + 5, tt_y - 6, fuse_cx + fuse_w // 2 + 15, tt_y + 6], fill="#C2410C")

    # Mechanical Push-Rods connecting to flaps
    draw.line([(fuse_cx - fuse_w // 2 - 10, tt_y), (lf_x + flap_w // 2, lf_y)], fill="#0284C7", width=4)
    draw.line([(fuse_cx + fuse_w // 2 + 10, tt_y), (rf_x + flap_w // 2, rf_y)], fill="#0284C7", width=4)

    # 6 Hinges symbols on flaps
    for hx in [lf_x + 30, lf_x + 130, lf_x + 230]:
        draw.rectangle([hx - 4, lf_y - 6, hx + 4, lf_y + 4], fill="#475569")
    for hx in [rf_x + 30, rf_x + 130, rf_x + 230]:
        draw.rectangle([hx - 4, rf_y - 6, hx + 4, rf_y + 4], fill="#475569")

    # Explanatory Callout Boxes below diagram
    box_y = sec2_y + 335
    draw.rounded_rectangle([50, box_y, 490, box_y + 160], radius=10, fill="#F8FAFC", outline="#E2E8F0", width=1)
    draw.text((65, box_y + 12), "SINCRONIZACIÓN MECÁNICA RIGUROSA", fill=c_navy, font=font_bold)
    draw.text((65, box_y + 40), "• Tubo de torsión en fuselaje: interconecta rígidamente ambos", fill=c_slate, font=font_small)
    draw.text((65, box_y + 62), "  planos para impedir deflexión asimétrica ante fallo de varilla.", fill=c_slate, font=font_small)
    draw.text((65, box_y + 88), "• 6 Bisagras de aluminio (3 por ala) con pasadores elásticos", fill=c_slate, font=font_small)
    draw.text((65, box_y + 110), "  (roll pins). La falta de un pasador compromete la seguridad.", fill=c_slate, font=font_small)
    draw.text((65, box_y + 134), "• Varillas con rótulas y barniz de sellado (locking varnish).", fill=c_slate, font=font_small)

    draw.rounded_rectangle([515, box_y, 990, box_y + 160], radius=10, fill="#F8FAFC", outline="#E2E8F0", width=1)
    draw.text((530, box_y + 12), "PROTECCIÓN ELÉCTRICA Y FINALES DE CARRERA", fill=c_navy, font=font_bold)
    draw.text((530, box_y + 40), "• Motor eléctrico de corriente continua (DC) reversible.", fill=c_slate, font=font_small)
    draw.text((530, box_y + 64), "• Interruptores fin de carrera (limit switches) en UP y LDG", fill=c_slate, font=font_small)
    draw.text((530, box_y + 86), "  que cortan alimentación evitando sobre-recorrido mecánico.", fill=c_slate, font=font_small)
    draw.text((530, box_y + 110), "• Disyuntor FLAP: protege el circuito contra sobrecarga o bloqueo.", fill=c_slate, font=font_small)
    draw.text((530, box_y + 134), "• Operación automática al seleccionar la posición deseada en cabina.", fill=c_slate, font=font_small)

    # Card Right: Cockpit Control & Flap Position Indicator (AFM 7.3)
    col2_x = 30 + col1_w + 20
    col2_w = w - col2_x - 30
    draw.rounded_rectangle([col2_x, sec2_y, col2_x + col2_w, sec2_y + sec2_h], radius=14, fill=c_card_bg, outline=c_border, width=2)
    draw.rounded_rectangle([col2_x, sec2_y, col2_x + col2_w, sec2_y + 48], radius=14, fill=c_gray_bg)
    draw.rectangle([col2_x, sec2_y + 32, col2_x + col2_w, sec2_y + 48], fill=c_gray_bg)
    draw.text((col2_x + 16, sec2_y + 12), "MANDOS DE CABINA (AFM 7.3)", fill=c_navy, font=font_card_title)

    # Instrument panel section mockup
    pnl_x = col2_x + 25
    pnl_y = sec2_y + 65
    pnl_w = col2_w - 50
    pnl_h = 240
    draw.rounded_rectangle([pnl_x, pnl_y, pnl_x + pnl_w, pnl_y + pnl_h], radius=14, fill="#1E293B", outline="#0F172A", width=2)
    draw.text((pnl_x + 20, pnl_y + 14), "FLAP CONTROL & INDICATION", fill="#94A3B8", font=font_small)

    # 3-position Switch (Left of Panel)
    sw_x = pnl_x + 80
    sw_y = pnl_y + 120
    draw.rounded_rectangle([sw_x - 22, sw_y - 65, sw_x + 22, sw_y + 65], radius=8, fill="#0F172A", outline="#475569", width=2)
    # Switch lever
    draw.line([(sw_x, sw_y), (sw_x, sw_y - 45)], fill="#E2E8F0", width=8)
    draw.ellipse([sw_x - 9, sw_y - 54, sw_x + 9, sw_y - 36], fill="#FFFFFF")
    draw.text((sw_x - 65, sw_y - 60), "UP", fill="#38BDF8", font=font_bold)
    draw.text((sw_x - 65, sw_y - 10), "T/O", fill="#E2E8F0", font=font_bold)
    draw.text((sw_x - 65, sw_y + 40), "LDG", fill="#E2E8F0", font=font_bold)

    # Position Indicator Lights (Right of Switch)
    ind_x = pnl_x + 240
    # UP Light (Green)
    draw.ellipse([ind_x - 12, sw_y - 60, ind_x + 12, sw_y - 36], fill=c_green, outline="#22C55E", width=3)
    draw.text((ind_x + 25, sw_y - 56), "CRUISE (UP)", fill="#FFFFFF", font=font_bold)

    # T/O Light (White)
    draw.ellipse([ind_x - 12, sw_y - 12, ind_x + 12, sw_y + 12], fill="#F8FAFC", outline="#94A3B8", width=2)
    draw.text((ind_x + 25, sw_y - 8), "TAKE-OFF (T/O)", fill="#E2E8F0", font=font_bold)

    # LDG Light (White)
    draw.ellipse([ind_x - 12, sw_y + 36, ind_x + 12, sw_y + 60], fill="#F8FAFC", outline="#94A3B8", width=2)
    draw.text((ind_x + 25, sw_y + 40), "LANDING (LDG)", fill="#E2E8F0", font=font_bold)

    # Transit note box below mockup
    tr_y = sec2_y + 325
    draw.rounded_rectangle([col2_x + 20, tr_y, col2_x + col2_w - 20, tr_y + 80], radius=10, fill="#FEF3C7", outline="#FDE68A", width=1)
    draw.text((col2_x + 35, tr_y + 12), "⚡ INDICACIÓN DE TRÁNSITO", fill="#92400E", font=font_bold)
    draw.text((col2_x + 35, tr_y + 38), "Si dos luces se iluminan a la vez,", fill="#78350F", font=font_small)
    draw.text((col2_x + 35, tr_y + 58), "indica que los flaps están en movimiento.", fill="#78350F", font=font_small)

    # Circuit breaker badge
    cb_y = sec2_y + 420
    draw.rounded_rectangle([col2_x + 20, cb_y, col2_x + col2_w - 20, cb_y + 75], radius=10, fill="#F1F5F9", outline="#CBD5E1", width=1)
    draw.ellipse([col2_x + 40, cb_y + 20, col2_x + 75, cb_y + 55], fill="#0F172A", outline="#475569", width=2)
    draw.text((col2_x + 48, cb_y + 27), "CB", fill="#FFFFFF", font=font_bold)
    draw.text((col2_x + 90, cb_y + 16), "DISYUNTOR FLAP", fill=c_navy, font=font_bold)
    draw.text((col2_x + 90, cb_y + 40), "Protección rearmable en panel", fill=c_slate_light, font=font_small)

    # Save
    out_path = "public/images/da40/da40-flaps-system.png"
    img.save(out_path, "PNG", quality=95)
    print(f"Diagram successfully saved to {out_path}")

if __name__ == "__main__":
    create_da40_flaps_diagram()
