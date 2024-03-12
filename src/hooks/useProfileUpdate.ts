import { supabase } from "@/supabase/client";
import { useEffect } from "react";

export function useProfileUpdate() {
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      const user = session?.user;
      if (user) {
        if (event === "INITIAL_SESSION") {
          supabase
            .from("users")
            .upsert({
              id: user.id,
              avatar_url: user.user_metadata.avatar_url,
              name: user.user_metadata.name,
              user_name: user.user_metadata.user_name,
            })
            .select()
            .single();
        }
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return null;
}
