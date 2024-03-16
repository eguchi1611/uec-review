import { ReviewCardStack } from "@/features/review/components/ReviewCardStack";
import { Review } from "@/features/review/types";
import { Avatar, Box, Stack } from "@mui/material";
import { Profile } from "../types";

type Props = {
  reviews: Review[];
  profile: Profile;
};

export function ProfileCard({ reviews, profile }: Props) {
  return (
    <Box>
      <Box display="flex" gap={2} alignItems="center">
        <Avatar sx={{ width: 64, height: 64 }} src={profile.avatar_url} />
        <Box typography="h5">{profile.name}</Box>
      </Box>
      <Stack spacing={2} mt={2}>
        <ReviewCardStack reviews={reviews} />
      </Stack>
    </Box>
  );
}
