import { supabase } from "@/supabase/client";

export async function getClasses() {
  const { data, error } = await supabase.from("classes").select("*");
  if (error) throw error;
  return { classes: data };
}
