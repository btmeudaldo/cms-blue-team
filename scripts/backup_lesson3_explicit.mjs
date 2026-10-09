import * as dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import * as fs from "fs";
import * as path from "path";

dotenv.config({ path: ".env.local" });

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function main() {
  const { data: lesson, error } = await sb
    .from("lessons")
    .select("*")
    .eq("id", "d2131c35-2d9f-4626-a37a-954178c8c045")
    .single();

  if (error) {
    console.error("Error fetching lesson:", error);
    process.exit(1);
  }

  const backupDir = path.resolve(process.cwd(), "backups/db-lessons");
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  const ts = new Date().toISOString().replace(/[:.]/g, "-");
  const fileJson = path.join(backupDir, `lesson-3-backup-before-redistribution-${ts}.json`);
  const fileHtml = path.join(backupDir, `lesson-3-backup-before-redistribution-${ts}.html`);

  fs.writeFileSync(fileJson, JSON.stringify(lesson, null, 2), "utf8");
  fs.writeFileSync(fileHtml, lesson.content_html || "", "utf8");

  console.log("✅ Copia de seguridad guardada con éxito:");
  console.log("  JSON:", fileJson, "(", lesson.content_html?.length, "bytes )");
  console.log("  HTML:", fileHtml);
}

main().catch(console.error);
