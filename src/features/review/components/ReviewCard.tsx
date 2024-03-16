import { StretchedLink } from "@/components/common/StretchedLink";
import IconBookmarkBorder from "@mui/icons-material/BookmarkBorder";
import IconImportContacts from "@mui/icons-material/ImportContacts";
import IconMoreHoriz from "@mui/icons-material/MoreHoriz";
import IconShare from "@mui/icons-material/Share";
import IconStar from "@mui/icons-material/Star";
import {
  Box,
  Button,
  Chip,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import { Review } from "../types";
import { NameLabelWithAvatar } from "./NameLabelWithAvatar";

const ReviewCreatedAtLabel = dynamic(() => import("./ReviewCreatedAtLabel"), {
  ssr: false,
});

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
          <IconButton sx={{ ml: "auto" }}>
            <IconMoreHoriz />
          </IconButton>
        </Box>
        <Box display="flex" alignItems="start">
          <Button startIcon={<IconImportContacts />} sx={{ mr: "auto" }}>
            {review.classes?.name}
          </Button>
          <Chip label="優" color="success" variant="outlined" />
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
