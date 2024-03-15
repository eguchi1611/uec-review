import { supabase } from "@/supabase/client";

export async function signOut() {
  await supabase.auth.signOut();
}
