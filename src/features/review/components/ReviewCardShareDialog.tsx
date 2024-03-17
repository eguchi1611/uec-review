import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { IconBrandX, IconLink } from "@tabler/icons-react";
import { toast } from "react-toastify";
import { Review } from "../types";

type Props = {
  onClose: () => void;
  open: boolean;
  review: Review;
};

export function ReviewCardShareDialog({ onClose, open, review }: Props) {
  const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/reviews/${review.id}`;

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent("uec_reviewを投稿しました")}&url=${encodeURIComponent(postUrl)}&hashtags=uec_review`;

  const handleCopyUrl = async () => {
    await navigator.clipboard.writeText(postUrl);
    toast.success("コピーしました");
  };

  return (
    <Dialog onClose={onClose} open={open} fullWidth maxWidth="xs">
      <DialogTitle>レビューを共有</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem disableGutters>
          <ListItemButton
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href={twitterUrl}
            onClick={() => onClose()}
          >
            <ListItemIcon>
              <IconBrandX />
            </ListItemIcon>
            <ListItemText primary="Xでポスト" />
          </ListItemButton>
        </ListItem>
        <ListItem disableGutters>
          <ListItemButton onClick={() => (handleCopyUrl(), onClose())}>
            <ListItemIcon>
              <IconLink />
            </ListItemIcon>
            <ListItemText primary="URLをコピー" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}
