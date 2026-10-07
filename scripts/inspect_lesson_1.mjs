import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const { data: lesson } = await supabase
    .from("lessons")
    .select("id, content_html")
    .eq("id", "17200000-0000-0000-0000-000000000101")
    .single();

  const parts = lesson.content_html.split("<!-- pagebreak -->");
  console.log("Total slides in lesson 1:", parts.length);
  parts.forEach((p, idx) => {
    const m = p.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    console.log(`Slide ${idx + 1}:`, m ? m[1].replace(/\s+/g, " ").trim() : "No H1");
  });
}

main().catch(console.error);
