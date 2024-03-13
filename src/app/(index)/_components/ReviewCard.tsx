"use client";

import { UserCard } from "@/components/UserCard";
import { ClassBadge } from "@/components/reviews/ClassBadge";
import { GradeBadge } from "@/components/reviews/GradeBadge";
import useReviewHandler from "@/hooks/useReviewHandler";
import { Review } from "@/lib/db";
import { showErrorNotification } from "@/utils/notifications";
import { ActionIcon, Card, Group, Menu, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { IconDots, IconTrash } from "@tabler/icons-react";
import Link from "next/link";

type Props = {
  review: Review;
};

export default function ReviewCard({ review }: Props) {
  const { user_id, id, content, users, classes, class_id, grade } =
    review ?? {};
  const { avatar_url, name: userName } = users ?? {};
  const { name: className } = classes ?? {};
  const { deletePost } = useReviewHandler();

  const handleDelete = () => {
    if (!id) return;
    modals.openConfirmModal({
      title: "投稿を削除します",
      labels: { cancel: "キャンセル", confirm: "削除" },
      confirmProps: { color: "red" },
      onConfirm: async () => {
        try {
          await deletePost(id);
          notifications.show({ color: "green", message: "投稿を削除しました" });
        } catch (error) {
          console.error(error);
          showErrorNotification();
        }
      },
    });
  };

  return (
    <Card shadow="sm" radius="md" withBorder pos="relative">
      <Card.Section withBorder inheritPadding py="xs">
        <Link
          href={`/reviews/${id}`}
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
        />
        <Group justify="space-between">
          <UserCard id={user_id} avatar={avatar_url} name={userName} />
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon variant="subtle" color="gray">
                <IconDots size={16} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item
                leftSection={<IconTrash size={14} />}
                color="red"
                onClick={handleDelete}
              >
                削除
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>
      <Card.Section py="md" inheritPadding>
        <Group style={{ float: "right" }}>
          <ClassBadge id={class_id} name={className} />
          {grade && <GradeBadge grade={grade} />}
        </Group>
        <Text>{content}</Text>
      </Card.Section>
    </Card>
  );
}
