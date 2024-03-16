import { Layout } from "@/components/Layout";
import { ProfileCard } from "@/features/profile/components/ProfileCard";
import { getProfile } from "@/features/profile/getProfile";
import { Profile } from "@/features/profile/queries/ProfileQuery";
import { getReviewsByUserId } from "@/features/review/getReviewsByUserId";
import { Review } from "@/features/review/queries/ReviewQuery";
import { notFound } from "next/navigation";

type Props = {
  params: {
    userId: string;
  };
};

export default async function UserPage({ params: { userId } }: Props) {
  let reviews: Review[] = [];
  try {
    const data = await getReviewsByUserId(userId);
    reviews = data.reviews;
    console.log(reviews.map((r) => r.message));
  } catch (error) {
    console.error(error);
    notFound();
  }

  let profile: Profile | null = null;

  try {
    const data = await getProfile(userId);
    profile = data.profile;
  } catch (error) {
    console.error(error);
    notFound();
  }

  return (
    <Layout>
      <ProfileCard profile={profile} reviews={reviews} />
    </Layout>
  );
}
