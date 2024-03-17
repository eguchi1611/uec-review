"use client";

import { ReviewCard } from "@/features/review/components/ReviewCard";
import { getReviewById } from "@/features/review/getReviewById";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";

type Props = {
  reviewId: string;
};

export function ReviewCardWrapper({ reviewId }: Props) {
  const { data, error, isLoading } = useSWR(`reviews/reviews/${reviewId}`, () =>
    getReviewById(reviewId),
  );

  useEffect(() => {
    if (error) {
      toast.error("データの取得中にエラーが発生しました");
      console.error(error);
    }
  }, [error]);

  if (isLoading) {
    return null;
  }

  const review = data?.review;
  if (!review) {
    throw "レビューデータを取得できませんでした";
  }
  return <ReviewCard review={review} />;
}
