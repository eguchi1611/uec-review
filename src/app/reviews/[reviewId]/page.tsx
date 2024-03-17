import { Layout } from "@/components/Layout";
import { ReviewCardWrapper } from "./ReviewCardWrapper";

type Props = {
  params: {
    reviewId: string;
  };
};

export default async function ReviewPage({ params: { reviewId } }: Props) {
  return (
    <Layout>
      <ReviewCardWrapper reviewId={reviewId} />
    </Layout>
  );
}
