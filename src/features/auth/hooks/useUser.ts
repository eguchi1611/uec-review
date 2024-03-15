import { supabase } from "@/supabase/client";
import { type User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export function useUser() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setLoading(false);
      setUser(session?.user || null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { user, loading };
}
