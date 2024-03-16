"use client";

import IconMoreHoriz from "@mui/icons-material/MoreHoriz";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { MouseEvent, useState } from "react";
import { useReviewHelper } from "../hooks/useReviewHelper";

type Props = {
  reviewId: number;
};

export function ReviewCardMenu({ reviewId }: Props) {
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
        <MenuItem onClick={() => (deleteReview(reviewId), handleClose())}>
          削除
        </MenuItem>
      </Menu>
    </>
  );
}
