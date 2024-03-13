import { Tables } from "@/supabase.types";
import { supabase } from "@/supabase/client";

export default function useReviewHandler() {
  const postReview = async (props: Partial<Tables<"reviews">>) => {
    await supabase.from("reviews").insert({ ...props, published: true });
  };

  return { postReview };
}
