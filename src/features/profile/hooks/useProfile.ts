import { useUser } from "@/features/auth/hooks/useUser";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";
import { getProfile } from "../getProfile";

export function useProfile() {
  const { user } = useUser();
  const { data, error } = useSWR(user?.id ? `users/${user.id}` : null, () =>
    getProfile(user!.id),
  );

  useEffect(() => {
    if (error) {
      toast.error("データの取得中にエラーが発生しました");
      console.error(error);
    }
  }, [error]);

  return {
    profile: data?.profile ?? null,
  };
}
