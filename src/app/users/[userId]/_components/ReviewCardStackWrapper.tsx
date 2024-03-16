"use client";

import { ReviewCardStack } from "@/features/review/components/ReviewCardStack";
import { getReviewsByUserId } from "@/features/review/getReviewsByUserId";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";

type Props = {
  userId: string;
};

export function ReviewCardStackWrapper({ userId }: Props) {
  const { data, error } = useSWR(`reviews/users/${userId}`, () =>
    getReviewsByUserId(userId),
  );

  useEffect(() => {
    if (error) {
      toast.error("データの取得中にエラーが発生しました");
      console.error(error);
    }
  }, [error]);

  return (
    <>
      <ReviewCardStack reviews={data?.reviews ?? []} />
    </>
  );
}
