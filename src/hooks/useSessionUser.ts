import { useSession } from "./useSession";

export function useSessionUser() {
  const session = useSession();

  return session?.user ?? null;
}
