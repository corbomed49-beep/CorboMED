import { createClient } from "@supabase/supabase-js";
import { isSupabaseAdminConfigured, isSupabaseConfigured } from "./config";

export function createPublicSupabaseClient() {
  if (!isSupabaseConfigured()) {
    throw new Error("Supabase não configurado");
  }

  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export function createAdminSupabaseClient() {
  if (!isSupabaseAdminConfigured()) {
    throw new Error("Supabase admin não configurado");
  }

  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } }
  );
}
