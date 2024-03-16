import { StretchedLink } from "@/components/common/StretchedLink";
import IconBookmarkBorder from "@mui/icons-material/BookmarkBorder";
import IconImportContacts from "@mui/icons-material/ImportContacts";
import IconShare from "@mui/icons-material/Share";
import IconStar from "@mui/icons-material/Star";
import { Box, Button, Chip, Paper, Stack, Typography } from "@mui/material";
import { amber, blue, grey, red } from "@mui/material/colors";
import dynamic from "next/dynamic";
import { Review } from "../types";
import { NameLabelWithAvatar } from "./NameLabelWithAvatar";
import { ReviewCardMenu } from "./ReviewCardMenu";

const ReviewCreatedAtLabel = dynamic(() => import("./ReviewCreatedAtLabel"), {
  ssr: false,
});

const RESULT_PROPS = [
  { label: "不可", color: grey[500] },
  { label: "可", color: grey[700] },
  { label: "良", color: amber[500] },
  { label: "優", color: blue[500] },
  { label: "秀", color: red[500] },
];

type Props = {
  review: Review;
};

export function ReviewCard({ review }: Props) {
  return (
    <Paper sx={{ p: 2, position: "relative" }}>
      <StretchedLink href={`/reviews/${review.id}`} />
      <Stack spacing={1}>
        <Box display="flex" alignItems="start">
          <NameLabelWithAvatar
            href={`/users/${review.user_id}`}
            name={review.users?.name || "No name"}
            avatarUrl={review.users?.avatar_url}
          />
          <ReviewCardMenu reviewId={review.id} />
        </Box>
        <Box display="flex" alignItems="start">
          <Button startIcon={<IconImportContacts />} sx={{ mr: "auto" }}>
            {review.classes?.name}
          </Button>
          {typeof review?.result === "number" && (
            <Chip
              label={RESULT_PROPS[review.result].label}
              variant="outlined"
              sx={{
                color: RESULT_PROPS[review.result].color,
                borderColor: RESULT_PROPS[review.result].color,
              }}
            />
          )}
        </Box>
        <Typography>{review.message}</Typography>
        <Box display="flex" alignItems="end" gap={1}>
          <Button color="primary" startIcon={<IconStar />}>
            32
          </Button>
          <Button color="inherit" startIcon={<IconBookmarkBorder />}>
            10
          </Button>
          <Button color="inherit" startIcon={<IconShare />} sx={{ mr: "auto" }}>
            共有
          </Button>
          <ReviewCreatedAtLabel createdAt={review.created_at} />
        </Box>
      </Stack>
    </Paper>
  );
}
