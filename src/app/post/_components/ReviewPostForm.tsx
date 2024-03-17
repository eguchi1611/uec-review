"use client";

import {
  Inputs,
  ReviewEditor,
} from "@/features/review/components/ReviewEditor";
import { useReviewHelper } from "@/features/review/hooks/useReviewHelper";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function ReviewPostForm() {
  const { postReview } = useReviewHelper();
  const router = useRouter();

  const handleSubmit = async (inputs: Inputs) => {
    const bool = await postReview(inputs);
    if (bool) {
      router.back();
      toast.success("Hello");
    }
    return bool;
  };

  return <ReviewEditor onSubmit={handleSubmit} />;
}
