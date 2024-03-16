import { profileQuery } from "./queries/ProfileQuery";

export async function getProfile(userId: string) {
  const { data, error } = await profileQuery.eq("id", userId).limit(1).single();
  if (error) throw error;
  return { profile: data };
}
