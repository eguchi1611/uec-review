import { supabase } from "@/supabase/client";

export async function getReviewsByUserId(userId: string) {
  const { data, error } = await supabase
    .from("reviews")
    .select("*, classes (name), users (name, avatar_url)")
    .limit(100)
    .eq("user_id", userId);
  if (error) throw error;
  return { reviews: data };
}
