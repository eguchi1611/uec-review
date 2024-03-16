import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { postReview } from "../postReview";
import { Review } from "../types";
import { updateReview } from "../updateReview";
import { mutateReviews } from "../utils/mutateReviews";
import { Inputs, ReviewEditor } from "./ReviewEditor";

type Props = {
  open: boolean;
  onClose: () => void;
  defaultValues?: Review;
};

export function ReviewEditorDialog({ open, onClose, defaultValues }: Props) {
  const router = useRouter();

  const handleSubmit = useCallback(
    async (data: Inputs) => {
      const postData = {
        class_id: Number(data.classId),
        year: Number(data.year),
        teacher_name: data.teacherName || null,
        result: Number(data.result) >= 0 ? Number(data.result) : null,
        message: data.message,
      };
      try {
        if (defaultValues) {
          // 投稿の編集
          const res = await updateReview(postData, defaultValues.id);
          if (!res) throw "投稿を更新できません";
          toast.success("投稿を更新しました");
        } else {
          // 新規投稿
          await postReview(postData);
          toast.success("投稿しました");
        }
        onClose();
        router.refresh();
      } catch (error) {
        console.error(error);
        if (defaultValues) {
          toast.error("投稿の更新に失敗しました");
        } else {
          toast.error("投稿に失敗しました");
        }
        return false;
      } finally {
        mutateReviews();
      }
      return true;
    },
    [router, onClose, defaultValues],
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
