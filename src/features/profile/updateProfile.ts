import { supabase } from "@/supabase/client";
import { Tables } from "@/supabase/database.types";
import { toast } from "react-toastify";

type Args = Omit<Tables<"users">, "created_at">;

export async function updateProfile(args: Args) {
  try {
    const { error } = await supabase.from("users").upsert(args);
    if (error) throw error;
  } catch (error) {
    console.error(error);
    toast.error("プロフィールの更新に失敗しました");
  }
}
