import { supabase } from "@/supabase/client";
import { useEffect } from "react";
import { toast } from "react-toastify";
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
      }).catch((error) => {
        console.error(error);
        toast.error("プロフィールの更新に失敗しました");
      });
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return null;
}
