import { toast } from "react-toastify";
import { signOut } from "../signOut";

export function useSignOut() {
  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("サインアウトしました");
    } catch (error) {
      console.error(error);
      toast.error("エラーが発生しました");
    }
  };

  return { signOut: handleSignOut };
}
