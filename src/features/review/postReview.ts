import { supabase } from "@/supabase/client";
import { Tables } from "@/supabase/database.types";

type Args = Omit<Tables<"reviews">, "id" | "user_id" | "created_at">;

export async function postReview(args: Args) {
  const { error } = await supabase.from("reviews").insert(args);
  if (error) throw error;
}
