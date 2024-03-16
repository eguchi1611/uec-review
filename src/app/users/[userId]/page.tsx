import { Layout } from "@/components/Layout";
import { ProfileCard } from "@/features/profile/components/ProfileCard";
import { getReviewsByUserId } from "@/features/review/getReviewsByUserId";

type Props = {
  params: {
    userId: string;
  };
};

export default async function UserPage({ params }: Props) {
  const { reviews } = await getReviewsByUserId(params.userId);
  return (
    <Layout>
      <ProfileCard reviews={reviews} />
    </Layout>
  );
}
