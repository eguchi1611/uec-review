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
      if (user.app_metadata.provider === "twitter") {
        updateProfile({
          id: user.id,
          name: user.user_metadata.name,
          avatar_url: user.user_metadata.avatar_url,
        }).catch((error) => {
          console.error(error);
          toast.error("プロフィールの更新に失敗しました");
        });
      } else if (user.app_metadata.provider === "email") {
        updateProfile({
          id: user.id,
          name: "Debug User (" + user.id + ")",
          avatar_url: "/debug.png",
        }).catch((error) => {
          console.error(error);
          toast.error("プロフィールの更新に失敗しました");
        });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return null;
}
