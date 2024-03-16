import { supabase } from "@/supabase/client";

export async function getReviewById(reviewId: string) {
  const { data, error } = await supabase
    .from("reviews")
    .select("*, classes (name), users (name, avatar_url)")
    .eq("id", reviewId)
    .neq("id", Math.floor(Math.random() * 1000)) // キャッシュが残る
    .maybeSingle();
  if (error) throw error;
  return { review: data };
}
