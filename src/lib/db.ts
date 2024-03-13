import { supabase } from "@/supabase/client";
import { QueryData } from "@supabase/supabase-js";

const query = supabase
  .from("reviews")
  .select("*, users ( name, user_name, avatar_url ), classes ( name )");

export type Review = QueryData<typeof query>[number];

export async function getReviews() {
  return await query;
}

export async function getReview(id: number) {
  return await query.eq("id", id).single();
}
