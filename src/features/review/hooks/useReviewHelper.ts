import { TablesInsert, TablesUpdate } from "@/supabase/database.types";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { Inputs } from "../components/ReviewEditor";
import { deleteReviewById } from "../deleteReviewById";
import { postReview } from "../postReview";
import { updateReview } from "../updateReview";
import { mutateReviews } from "../utils/mutateReviews";

export function useReviewHelper() {
  const deleteReview = useCallback(async (reviewId: number) => {
    try {
      const res = await deleteReviewById(reviewId);
      if (!res) throw "権限がないか投稿が見つかりません";
      toast.success("投稿を削除しました");
    } catch (error) {
      console.error(error);
      toast.error("投稿を削除できませんでした");
    } finally {
      mutateReviews();
    }
  }, []);

  const postReview0 = useCallback(async (inputs: Inputs) => {
    try {
      const review: TablesInsert<"reviews"> = {
        class_id: Number(inputs.classId),
        year: Number(inputs.year),
        teacher_name: inputs.teacherName || null,
        result: Number(inputs.result) >= 0 ? Number(inputs.result) : null,
        message: inputs.message,
      };
      await postReview(review);
      toast.success("レビューを投稿しました");
      // Refresh
      mutateReviews();
    } catch (error) {
      console.error(error);
      toast.error("レビューを投稿できませんでした");
      return false;
    }
    return true;
  }, []);

  const updateReview0 = useCallback(
    async (reviewId: number, inputs: Inputs) => {
      try {
        const review: TablesUpdate<"reviews"> = {
          class_id: Number(inputs.classId),
          year: Number(inputs.year),
          teacher_name: inputs.teacherName || null,
          result: Number(inputs.result) >= 0 ? Number(inputs.result) : null,
          message: inputs.message,
        };
        await updateReview(review, reviewId);
        toast.success("レビューを更新しました");
        // Refresh
        mutateReviews();
      } catch (error) {
        console.error(error);
        toast.error("レビューを更新できませんでした");
        return false;
      }
      return true;
    },
    [],
  );

  return {
    deleteReview,
    postReview: postReview0,
    updateReview: updateReview0,
  };
}
