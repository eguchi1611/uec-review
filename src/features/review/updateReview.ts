import { supabase } from "@/supabase/client";
import { TablesUpdate } from "@/supabase/database.types";

export type Args = TablesUpdate<"reviews">;

export async function updateReview(args: Args, reviewId: number) {
  const { error, count } = await supabase
    .from("reviews")
    .update(args, { count: "exact" })
    .eq("id", reviewId);
  if (error) throw error;
  return count === 1;
}
