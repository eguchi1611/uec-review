import { Button } from "@mantine/core";
import Link from "next/link";

type Props = {
  id?: number;
  name?: string;
};

export function ClassBadge({ id, name }: Props) {
  return (
    <Button
      color="teal"
      size="compact-xs"
      variant="light"
      component={Link}
      href={`/classes/${id}`}
      style={{ zIndex: 100 }}
    >
      {name}
    </Button>
  );
}
