import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import * as fs from "fs";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const uploads = [
  { local: "public/images/da40/da40-cover.jpg", remote: "fleet/da40/da40-cover.jpg", mime: "image/jpeg" },
  { local: "public/images/da40/cockpit-instruments.jpg", remote: "fleet/da40/cockpit-instruments.jpg", mime: "image/jpeg" },
  { local: "public/images/da40/da40-anemometro.jpg", remote: "fleet/da40/da40-anemometro.jpg", mime: "image/jpeg" },
  { local: "public/images/da40/da40-cg-limits-cropped.png", remote: "fleet/da40/da40-cg-limits.png", mime: "image/png" },
  { local: "public/images/da40/da40-moment-arms.png", remote: "fleet/da40/da40-moment-arms.png", mime: "image/png" },
  { local: "public/images/da40/da40-load-factors.png", remote: "fleet/da40/da40-load-factors.png", mime: "image/png" },
  { local: "public/images/da40/da40-temp-limits.png", remote: "fleet/da40/da40-temp-limits.png", mime: "image/png" },
  { local: "public/images/da40/da40-fuel-system.png", remote: "fleet/da40/da40-fuel-system.png", mime: "image/png" },
  { local: "public/images/da40/da40-fuel-schematic.png", remote: "fleet/da40/da40-fuel-schematic.png", mime: "image/png" },
  { local: "public/images/da40/da40-fuel-cooler-baffle.png", remote: "fleet/da40/da40-fuel-cooler-baffle.png", mime: "image/png" },
  { local: "public/images/da40/da40-fuel-cooler.png", remote: "fleet/da40/da40-fuel-cooler.png", mime: "image/png" },
  { local: "public/images/da40/da40-cooling-system.png", remote: "fleet/da40/da40-cooling-system.png", mime: "image/png" },
  { local: "public/images/da40/da40-placards.png", remote: "fleet/da40/da40-placards.png", mime: "image/png" },
  { local: "public/images/da40/da40-electrical-sources.png", remote: "fleet/da40/da40-electrical-sources.png", mime: "image/png" },
  { local: "public/images/da40/da40-electrical-buses.png", remote: "fleet/da40/da40-electrical-buses.png", mime: "image/png" },
  { local: "public/images/da40/3.3-fadec.jpg", remote: "fleet/da40/3.3-fadec.jpg", mime: "image/jpeg" },
  { local: "public/images/c172/cockpit-instruments.jpg", remote: "fleet/c172/cockpit-instruments.jpg", mime: "image/jpeg" },
];

async function run() {
  console.log("📤 Subiendo imágenes locales a Supabase Storage (bucket 'course-covers')...");

  for (const item of uploads) {
    if (!fs.existsSync(item.local)) {
      console.warn(`⚠️ Archivo local no encontrado: ${item.local}`);
      continue;
    }
    const fileBuffer = fs.readFileSync(item.local);
    const { data, error } = await supabase.storage
      .from("course-covers")
      .upload(item.remote, fileBuffer, {
        contentType: item.mime,
        upsert: true,
      });

    if (error) {
      console.error(`❌ Error subiendo ${item.remote}:`, error);
    } else {
      const { data: publicData } = supabase.storage
        .from("course-covers")
        .getPublicUrl(item.remote);
      console.log(`✅ Subido: ${item.remote} -> ${publicData.publicUrl}`);
    }
  }
}

run();
