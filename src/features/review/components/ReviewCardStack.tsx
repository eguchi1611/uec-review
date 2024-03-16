"use client";

import { Stack } from "@mui/material";
import { Review } from "../types";
import { ReviewCard } from "./ReviewCard";

type Props = {
  reviews: Review[];
};

export function ReviewCardStack({ reviews }: Props) {
  return (
    <Stack spacing={2}>
      {reviews
        .sort((a, b) =>
          Number(a.created_at) - Number(b.created_at) < 0 ? 1 : -1,
        )
        .map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
    </Stack>
  );
}
