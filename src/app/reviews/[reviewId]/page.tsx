import { Layout } from "@/components/Layout";
import { ReviewCard } from "@/features/review/components/ReviewCard";
import { getReviewById } from "@/features/review/getReviewById";
import { notFound } from "next/navigation";

type Props = {
  params: {
    reviewId: string;
  };
};

export default async function ReviewPage({ params: { reviewId } }: Props) {
  const { review } = await getReviewById(reviewId);

  if (!review) notFound();

  return (
    <Layout>
      <ReviewCard review={review} />
    </Layout>
  );
}
