import { supabase } from "@/supabase/client";
import { QueryData } from "@supabase/supabase-js";

const q = supabase.from("users").select("*");
export type Profile = QueryData<typeof q>[number];
