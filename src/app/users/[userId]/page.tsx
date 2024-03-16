import { Layout } from "@/components/Layout";
import { ProfileCard } from "@/features/profile/components/ProfileCard";
import { getProfile } from "@/features/profile/getProfile";
import { Profile } from "@/features/profile/types";
import { getReviewsByUserId } from "@/features/review/getReviewsByUserId";
import { Review } from "@/features/review/types";
import { notFound } from "next/navigation";

type Props = {
  params: {
    userId: string;
  };
};

export default async function UserPage({ params: { userId } }: Props) {
  const reviews: Review[] = (await getReviewsByUserId(userId)).reviews;
  const profile: Profile | null = (await getProfile(userId)).profile;

  if (profile === null) notFound();

  return (
    <Layout>
      <ProfileCard profile={profile} reviews={reviews} />
    </Layout>
  );
}
