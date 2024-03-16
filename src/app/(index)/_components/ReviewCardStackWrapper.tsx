"use client";

import { ReviewCardStack } from "@/features/review/components/ReviewCardStack";
import { getReviews } from "@/features/review/getReviews";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";

export function ReviewCardStackWrapper() {
  const { data, error } = useSWR("reviews", getReviews);

  useEffect(() => {
    if (error) {
      toast.error("データの取得中にエラーが発生しました");
      console.error(error);
    }
  }, [error]);

  return <ReviewCardStack reviews={data?.reviews ?? []} />;
}
