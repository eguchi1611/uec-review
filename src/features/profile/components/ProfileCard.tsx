import { ReviewCard } from "@/features/review/components/ReviewCard";
import { Review } from "@/features/review/queries/ReviewQuery";
import { Avatar, Box, Stack } from "@mui/material";

type Props = {
  reviews: Review[];
};

export function ProfileCard({ reviews }: Props) {
  return (
    <Box>
      <Box display="flex" gap={2} alignItems="center">
        <Avatar sx={{ width: 64, height: 64 }} />
        <Box typography="h5">名前</Box>
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
