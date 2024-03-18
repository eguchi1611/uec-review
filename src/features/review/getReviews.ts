import { supabase } from "@/supabase/client";

export async function getReviews() {
  const { data, error } = await supabase
    .from("reviews")
    .select("*, classes (name), users (name, avatar_url)")
    .neq("id", Math.floor(Math.random() * 1000)) // キャッシュが残る
    .order("created_at", { ascending: false })
    .limit(50);
  if (error) throw error;
  return { reviews: data };
}
