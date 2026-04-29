import { createClient, SupabaseClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "";

let supabase: SupabaseClient | null = null;

try {
  if (
    supabaseUrl &&
    supabaseKey &&
    supabaseUrl.startsWith("http")
  ) {
    supabase = createClient(supabaseUrl, supabaseKey);
    console.log("Supabase connected successfully.");
  } else {
    console.warn(
      "Supabase not configured. Using fallback data. Set SUPABASE_URL and SUPABASE_ANON_KEY in .env"
    );
  }
} catch (error) {
  console.warn("Failed to initialize Supabase:", error);
}

export { supabase };
