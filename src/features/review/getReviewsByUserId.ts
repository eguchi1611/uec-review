import { supabase } from "@/supabase/client";

export async function getReviewsByUserId(userId: string) {
  const { data, error } = await supabase
    .from("reviews")
    .select("*, classes (name), users (name, avatar_url)")
    .order("created_at")
    .limit(100)
    .eq("user_id", userId)
    .neq("id", Math.floor(Math.random() * 1000));
  if (error) throw error;
  return { reviews: data };
}
