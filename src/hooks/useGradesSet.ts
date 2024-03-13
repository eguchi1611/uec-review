import { supabase } from "@/supabase/client";
import useSWR from "swr";

const fetcher = async () => await supabase.from("grades").select("*");

export function useGradesSet() {
  const { data, error, isLoading } = useSWR("grades", fetcher);

  if (error) console.error(error);

  return {
    grades: data?.data ?? [],
    isLoading,
  };
}
