import { supabase } from "@/supabase/client";
import { Tables } from "@/supabase/database.types";
import { toast } from "react-toastify";

type Args = Omit<Tables<"users">, "created_at">;

export async function updateProfile(args: Args) {
  try {
    await supabase.from("users").upsert(args);
    // toast.success("正常に更新しました");
  } catch (error) {
    console.error(error);
    toast.error("エラーが発生しました");
  }
}
