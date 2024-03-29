"use client";

import { StretchedLink } from "@/components/common/StretchedLink";
import { useUser } from "@/features/auth/hooks/useUser";
import IconBookmarkBorder from "@mui/icons-material/BookmarkBorder";
import IconImportContacts from "@mui/icons-material/ImportContacts";
import IconShare from "@mui/icons-material/Share";
import IconStarBorder from "@mui/icons-material/StarBorder";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import { amber, blue, grey, red } from "@mui/material/colors";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Review } from "../types";
import { NameLabelWithAvatar } from "./NameLabelWithAvatar";
import { ReviewCardMenu } from "./ReviewCardMenu";
import { ReviewCardShareDialog } from "./ReviewCardShareDialog";

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
  const { user } = useUser();

  const [openShare, setOpenShare] = useState(false);

  return (
    <Box sx={{ position: "relative" }}>
      <StretchedLink href={`/reviews/${review.id}`} />
      <Stack spacing={1}>
        <Box display="flex" alignItems="start">
          <NameLabelWithAvatar
            href={`/users/${review.user_id}`}
            name={review.users?.name || "No name"}
            avatarUrl={review.users?.avatar_url}
          />
          {review.user_id === user?.id && <ReviewCardMenu review={review} />}
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
        <Typography whiteSpace="pre-wrap">{review.message}</Typography>
        <Box display="flex" alignItems="end" gap={1}>
          <Button
            color="inherit"
            startIcon={<IconStarBorder />}
            sx={{ width: 80 }}
            onClick={() => alert("これから実装する！")}
          ></Button>
          <Button
            color="inherit"
            startIcon={<IconBookmarkBorder />}
            sx={{ width: 80 }}
            onClick={() => alert("これから実装する！")}
          ></Button>
          <Button
            color="inherit"
            startIcon={<IconShare />}
            sx={{ mr: "auto" }}
            onClick={() => setOpenShare(true)}
          >
            共有
          </Button>
          <ReviewCardShareDialog
            onClose={() => setOpenShare(false)}
            open={openShare}
            review={review}
          />
          <ReviewCreatedAtLabel createdAt={review.created_at} />
        </Box>
      </Stack>
    </Box>
  );
}
