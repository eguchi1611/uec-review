import { Layout } from "@/components/Layout";
import { getProfile } from "@/features/profile/getProfile";
import { Profile } from "@/features/profile/types";
import { Avatar, Box, Stack } from "@mui/material";
import { notFound } from "next/navigation";
import { ReviewCardStackWrapper } from "./_components/ReviewCardStackWrapper";
import { validate } from "uuid";

type Props = {
  params: {
    userId: string;
  };
};

export default async function UserPage({ params: { userId } }: Props) {
  if (!validate(userId)) notFound();
  const profile: Profile | null = (await getProfile(userId)).profile;

  if (profile === null) notFound();

  return (
    <Layout>
      <Stack spacing={2}>
        <Box display="flex" gap={2} alignItems="center">
          <Avatar sx={{ width: 64, height: 64 }} src={profile.avatar_url} />
          <Box typography="h5">{profile.name}</Box>
        </Box>
        <ReviewCardStackWrapper userId={profile.id} />
      </Stack>
    </Layout>
  );
}
