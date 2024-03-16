import { ReviewCard } from "@/features/review/components/ReviewCard";
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
        {reviews
          .sort((a, b) =>
            Number(a.created_at) - Number(b.created_at) < 0 ? 1 : -1,
          )
          .map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
      </Stack>
    </Box>
  );
}
