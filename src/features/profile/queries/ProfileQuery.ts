import { supabase } from "@/supabase/client";
import { QueryData } from "@supabase/supabase-js";

export const profileQuery = supabase.from("users").select("*");

export type Profile = QueryData<typeof profileQuery>[number];
