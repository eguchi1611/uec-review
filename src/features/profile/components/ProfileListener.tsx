import { supabase } from "@/supabase/client";
import { useEffect } from "react";
import { updateProfile } from "../updateProfile";

export function ProfileListener() {
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session || event !== "INITIAL_SESSION") return;
      const { user } = session;
      updateProfile({
        id: user.id,
        name: user.user_metadata.name,
        avatar_url: user.user_metadata.avatar_url,
      });
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return null;
}
