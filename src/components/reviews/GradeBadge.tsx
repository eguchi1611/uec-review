import { Button } from "@mantine/core";

type Props = {
  grade: number;
};

const gradeLabel: Record<number, string> = {
  0: "不可",
  1: "可",
  2: "良",
  3: "優",
  4: "秀",
};

export function GradeBadge({ grade }: Props) {
  return (
    <Button color="blue" size="compact-xs" variant="light" component="span">
      {gradeLabel[grade]}
    </Button>
  );
}
