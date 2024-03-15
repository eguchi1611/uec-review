import { supabase } from "@/supabase/client";

export async function SignInWithX() {
  await supabase.auth.signInWithOAuth({
    provider: "twitter",
  });
}
