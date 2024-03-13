import ReviewCard from "@/app/(index)/_components/ReviewCard";
import Layout from "@/components/Layout";
import { getReview } from "@/lib/db";
import { Container } from "@mantine/core";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export const dynamic = "force-dynamic";

export default async function ReviewPage({ params: { id } }: Props) {
  const { data: review } = await getReview(Number(id));

  if (review === null) {
    notFound();
  }

  return (
    <Layout>
      <Container size="xs">
        <ReviewCard review={review} />
      </Container>
    </Layout>
  );
}
