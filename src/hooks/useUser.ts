import { Tables } from "@/supabase.types";
import { supabase } from "@/supabase/client";
import { useEffect, useState } from "react";
import { useSessionUser } from "./useSessionUser";

export function useUser() {
  const { user: sessionUser } = useSessionUser();
  const [data, setData] = useState<Tables<"users"> | null>(null);

  useEffect(() => {
    if (sessionUser !== null) {
      supabase
        .from("users")
        .select("*")
        .eq("id", sessionUser!.id)
        .single()
        .then(async (res) => {
          setData(res.data);
        });
    }
  }, [sessionUser]);

  return data;
}
