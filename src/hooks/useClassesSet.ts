import { supabase } from "@/supabase/client";
import useSWR from "swr";

const fetcher = async () => await supabase.from("classes").select("*");

export function useClassesSet() {
  const { data, error, isLoading } = useSWR("classes", fetcher);

  if (error) console.error(error);

  return {
    classes: data?.data ?? [],
    isLoading,
  };
}
