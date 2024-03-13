import { UserCard } from "@/components/UserCard";
import { ClassBadge } from "@/components/reviews/ClassBadge";
import { ActionIcon, Card, Group, Menu, Text } from "@mantine/core";
import { IconDots, IconEye, IconFileZip, IconTrash } from "@tabler/icons-react";
import Link from "next/link";

type Props = {
  id: number;
  content?: string;
  userAvatar?: string;
  userName?: string;
  clazzName?: string;
  classId?: number;
  userId?: string;
};

export default function ReviewCard({
  id,
  content,
  userAvatar,
  clazzName,
  userName,
  classId,
  userId,
}: Props) {
  return (
    <Card shadow="sm" radius="md" withBorder>
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <UserCard id={userId} avatar={userAvatar} name={userName} />
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon variant="subtle" color="gray">
                <IconDots size={16} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item leftSection={<IconFileZip size={14} />}>
                Download zip
              </Menu.Item>
              <Menu.Item leftSection={<IconEye size={14} />}>
                Preview all
              </Menu.Item>
              <Menu.Item leftSection={<IconTrash size={14} />} color="red">
                Delete all
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>
      <Card.Section py="md" inheritPadding pos="relative">
        <Link
          href={`/reviews/${id}`}
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
        />
        <Group style={{ float: "right" }}>
          <ClassBadge id={classId} name={clazzName} />
        </Group>
        <Text>{content}</Text>
      </Card.Section>
    </Card>
  );
}
