import { supabase } from "@/supabase/client";
import { QueryData } from "@supabase/supabase-js";

const q = supabase
  .from("reviews")
  .select("*, classes (name), users (name, avatar_url)")
  .limit(100);

export type Review = QueryData<typeof q>[number];
