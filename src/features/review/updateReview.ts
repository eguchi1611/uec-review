import { supabase } from "@/supabase/client";
import { Tables } from "@/supabase/database.types";

type Args = Omit<Tables<"reviews">, "id" | "user_id" | "created_at">;

export async function updateReview(args: Args, reviewId: number) {
  const { error, count } = await supabase
    .from("reviews")
    .update(args, { count: "exact" })
    .eq("id", reviewId);
  if (error) throw error;
  return count === 1;
}
