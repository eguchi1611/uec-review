import { mutate } from "swr";

export function mutateReviews() {
  mutate((key) => typeof key === "string" && key.startsWith("review"));
}
