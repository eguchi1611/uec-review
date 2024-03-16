"use client";

import IconMoreHoriz from "@mui/icons-material/MoreHoriz";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { MouseEvent, useState } from "react";
import { useReviewHelper } from "../hooks/useReviewHelper";
import { Review } from "../types";
import { ReviewEditorDialog } from "./ReviewEditorDialog";

type Props = {
  review: Review;
};

export function ReviewCardMenu({ review }: Props) {
  const [openEditor, setOpenEditor] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { deleteReview } = useReviewHelper();

  return (
    <>
      <IconButton sx={{ ml: "auto" }} onClick={handleClick}>
        <IconMoreHoriz />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => (setOpenEditor(true), handleClose())}>
          編集
        </MenuItem>
        <MenuItem onClick={() => (deleteReview(review.id), handleClose())}>
          削除
        </MenuItem>
      </Menu>
      <ReviewEditorDialog
        defaultValues={review}
        open={openEditor}
        onClose={() => setOpenEditor(false)}
      />
    </>
  );
}
