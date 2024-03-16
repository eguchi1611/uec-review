import { useCallback } from "react";
import { toast } from "react-toastify";
import { deleteReviewById } from "../deleteReviewById";
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

  return { deleteReview };
}
