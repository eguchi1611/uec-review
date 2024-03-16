import { supabase } from "@/supabase/client";

export async function deleteReviewById(reviewId: number) {
  const { error, count } = await supabase
    .from("reviews")
    .delete({ count: "exact" })
    .eq("id", reviewId);
  if (error) throw error;
  return typeof count === "number" && count >= 1;
}
