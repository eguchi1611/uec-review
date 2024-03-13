"use client";

import { useReviews } from "@/hooks/useReviews";
import { SimpleGrid } from "@mantine/core";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  const { reviews } = useReviews();
  return (
    <SimpleGrid cols={{ xs: 1, md: 2, lg: 3 }}>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </SimpleGrid>
  );
}
