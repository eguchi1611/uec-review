import { supabase } from "@/supabase/client";
import { Button, Group } from "@mantine/core";

export default function SignInCard() {
  return (
    <Group p="md" align="center" h="100%">
      <Button
        fullWidth
        variant="light"
        onClick={() => {
          supabase.auth.signInWithOAuth({ provider: "twitter" });
        }}
      >
        Twiterでサインイン
      </Button>
    </Group>
  );
}
