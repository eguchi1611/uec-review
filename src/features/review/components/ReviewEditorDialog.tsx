import IconClear from "@mui/icons-material/Clear";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { useCallback } from "react";
import { useReviewHelper } from "../hooks/useReviewHelper";
import { Review } from "../types";
import { Inputs, ReviewEditor } from "./ReviewEditor";

type Props = {
  open: boolean;
  onClose: () => void;
  defaultValues?: Review;
};

export function ReviewEditorDialog({ open, onClose, defaultValues }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));
  const { postReview, updateReview } = useReviewHelper();

  const handleSubmit = useCallback(
    async (data: Inputs) => {
      if (defaultValues) {
        if (await updateReview(defaultValues.id, data)) {
          onClose();
          return true;
        }
      } else {
        if (await postReview(data)) {
          onClose();
          return true;
        }
      }
      return false;
    },
    [onClose, defaultValues, postReview, updateReview],
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      scroll="body"
      fullScreen={mobile}
    >
      <DialogTitle>
        <Box sx={{ position: "relative" }}>
          {defaultValues
            ? `レビューを編集 (ID: ${defaultValues.id})`
            : "レビューを投稿"}
          <IconButton
            size="small"
            sx={{ position: "absolute", top: 0, right: 0 }}
            onClick={onClose}
          >
            <IconClear />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <ReviewEditor defaultValues={defaultValues} onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}
