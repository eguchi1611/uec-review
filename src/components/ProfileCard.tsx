import { useSessionUser } from "@/hooks/useSessionUser";
import { ActionIcon, Avatar, Group, Text } from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";

export default function ProfileCard() {
  const user = useSessionUser();

  return (
    <Group p="md">
      <Avatar size={48} src={user?.user_metadata.avatar_url} />
      <Text flex={1}>{user?.user_metadata.name}</Text>
      <ActionIcon variant="transparent">
        <IconSettings />
      </ActionIcon>
    </Group>
  );
}
