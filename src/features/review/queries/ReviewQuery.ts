import { supabase } from "@/supabase/client";
import { QueryData } from "@supabase/supabase-js";

export const reviewQuery = supabase
  .from("reviews")
  .select("*, classes (name), users (name, avatar_url)");

export type Review = QueryData<typeof reviewQuery>[number];
