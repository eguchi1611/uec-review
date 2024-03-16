import { reviewQuery } from "./queries/ReviewQuery";

export async function getReviewsByUserId(userId: string) {
  const { data, error } = await reviewQuery.eq("user_id", userId);
  if (error) throw error;
  return { reviews: data };
}
