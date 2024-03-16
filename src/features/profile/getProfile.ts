import { supabase } from "@/supabase/client";

export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .limit(1)
    .maybeSingle();
  if (error) throw error;
  return { profile: data };
}
