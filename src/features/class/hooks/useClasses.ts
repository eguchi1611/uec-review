import useSWR from "swr";
import { getClasses } from "../getClasses";
import { toast } from "react-toastify";

export function useClasses() {
  const { data, error } = useSWR("getClasses", getClasses);
  if (error) {
    console.error(error);
    toast.error("クラスデータの取得に失敗しました");
  }

  return {
    classes: data?.classes || [],
  };
}
