import { useSessionUser } from "@/hooks/useSessionUser";
import { supabase } from "@/supabase/client";
import { ActionIcon, Avatar, Button, Group, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { IconLogout, IconSettings } from "@tabler/icons-react";

export default function ProfileCard() {
  const { user } = useSessionUser();

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Group p="md">
        <Avatar size={48} src={user?.user_metadata.avatar_url} />
        <Text flex={1}>{user?.user_metadata.name}</Text>
        <ActionIcon variant="transparent" onClick={open}>
          <IconSettings />
        </ActionIcon>
      </Group>
      <Modal opened={opened} onClose={close} title="ユーザー設定">
        <Button
          variant="outline"
          leftSection={<IconLogout size={14} />}
          onClick={async () => {
            await supabase.auth.signOut();
            notifications.show({ message: "サインアウトしました" });
          }}
        >
          サインアウト
        </Button>
      </Modal>
    </>
  );
}
