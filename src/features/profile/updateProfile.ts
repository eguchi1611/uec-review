import { supabase } from "@/supabase/client";
import { Tables } from "@/supabase/database.types";

type Args = Omit<Tables<"users">, "created_at">;

export async function updateProfile(args: Args) {
  const { error } = await supabase.from("users").upsert(args);
  if (error) throw error;
}
