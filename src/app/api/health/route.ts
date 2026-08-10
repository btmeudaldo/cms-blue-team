import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("courses")
      .select("id")
      .limit(1);

    if (!error) {
      return NextResponse.json({ status: "online", source: "supabase" });
    }
  } catch (err) {}

  return NextResponse.json(
    { status: "offline", source: "local_resilient" },
    { status: 503 },
  );
}
