"use client";

import { useReviews } from "@/hooks/useReviews";
import { SimpleGrid } from "@mantine/core";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  const { reviews } = useReviews();
  return (
    <SimpleGrid cols={{ xs: 1, md: 2, lg: 3 }}>
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          id={review.id}
          content={review.content ?? undefined}
          userAvatar={review.users?.avatar_url ?? undefined}
          clazzName={review.classes?.name}
          userName={review.users?.name ?? undefined}
          classId={review.classes?.id ?? undefined}
          userId={review.users?.id ?? undefined}
        />
      ))}
    </SimpleGrid>
  );
}
