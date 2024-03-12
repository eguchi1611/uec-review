import { useSession } from "./useSession";

export function useSessionUser() {
  const { session, loading } = useSession();

  return { user: session?.user ?? null, loading };
}
