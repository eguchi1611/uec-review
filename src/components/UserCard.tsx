import { Avatar, Group, Text } from "@mantine/core";
import Link from "next/link";

type Props = {
  id?: string;
  name?: string;
  avatar?: string;
};

export function UserCard({ id, name, avatar }: Props) {
  return (
    <Group pos="relative">
      <Avatar src={avatar} size="sm" />
      <Text style={{ whiteSpace: "nowrap" }}>{name}</Text>
      <Link
        href={`/users/${id}`}
        style={{
          color: "transparent",
          textDecoration: "none",
          position: "absolute",
          inset: 0,
        }}
      />
    </Group>
  );
}
