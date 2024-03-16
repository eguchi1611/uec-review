import { Layout } from "@/components/Layout";
import { ProfileCard } from "@/features/profile/components/ProfileCard";
import { getReviewsByUserId } from "@/features/review/getReviewsByUserId";
import { Review } from "@/features/review/queries/ReviewQuery";
import { notFound } from "next/navigation";

type Props = {
  params: {
    userId: string;
  };
};

export default async function UserPage({ params }: Props) {
  let reviews: Review[] = [];
  try {
    const data = await getReviewsByUserId(params.userId);
    reviews = data.reviews;
    console.log(reviews.map((r) => r.message));
  } catch (error) {
    console.error(error);
    notFound();
  }

  return (
    <Layout>
      <ProfileCard reviews={reviews} />
    </Layout>
  );
}
