"use client";

import { Divider, Stack } from "@mui/material";
import { Review } from "../types";
import { ReviewCard } from "./ReviewCard";

type Props = {
  reviews: Review[];
};

export function ReviewCardStack({ reviews }: Props) {
  return (
    <Stack spacing={2} divider={<Divider flexItem />}>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </Stack>
  );
}
