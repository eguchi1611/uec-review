import { supabase } from "@/supabase/client";
import useSWR from "swr";

const fetcher = async () => await supabase.from("reviews").select("*, users ( id, name, user_name, avatar_url ), classes ( id, name )");

export function useReviews() {
  const { data, error, isLoading } = useSWR("reviews", fetcher);

  if (error) console.error(error);

  return {
    reviews: data?.data ?? [],
    isLoading,
  };
}
