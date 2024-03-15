import { supabase } from "@/supabase/client";
import { toast } from "react-toastify";

export async function signOut() {
  try {
    await supabase.auth.signOut();
    toast.success("サインアウトしました");
  } catch (error) {
    console.error(error);
    toast.error("エラーが発生しました");
  }
}
