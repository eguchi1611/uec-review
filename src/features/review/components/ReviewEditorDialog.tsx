import { Dialog, DialogContent, DialogTitle } from "@mui/material";
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
    <Dialog open={open} onClose={onClose} maxWidth="sm" scroll="body">
      <DialogTitle>
        {defaultValues
          ? `レビューを編集 (ID: ${defaultValues.id})`
          : "レビューを投稿"}
      </DialogTitle>
      <DialogContent>
        <ReviewEditor defaultValues={defaultValues} onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}
