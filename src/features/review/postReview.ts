import { supabase } from "@/supabase/client";
import { TablesInsert } from "@/supabase/database.types";

type Args = TablesInsert<"reviews">;

export async function postReview(args: Args) {
  const { error } = await supabase.from("reviews").insert(args);
  if (error) throw error;
}
