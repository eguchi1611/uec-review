import { useClassesSet } from "@/hooks/useClassesSet";
import useReviewHandler from "@/hooks/useReviewHandler";
import { useSessionUser } from "@/hooks/useSessionUser";
import {
  ActionIcon,
  Anchor,
  Button,
  Group,
  Modal,
  Select,
  Stack,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";
import { IconPlus } from "@tabler/icons-react";
import { useMemo } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const Grades: Record<string, number> = {
  秀: 4,
  優: 3,
  良: 2,
  可: 1,
  不可: 0,
};

type Inputs = {
  grade: string;
  teacher: string;
  class_id: string;
  content: string;
};

export default function NewPostButton() {
  const [opened, { open, close }] = useDisclosure(false);

  const { classes } = useClassesSet();

  const classSet = useMemo(
    () => Object.fromEntries(classes.map((p) => [p.name, p.id])),
    [classes],
  );

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isDirty },
  } = useForm<Inputs>({
    defaultValues: {
      class_id: "",
      content: "",
      grade: "",
      teacher: "",
    },
  });

  const handleClose = () => {
    if (isDirty) {
      modals.open({
        title: "内容が保存されていません",
        children: (
          <Group justify="end">
            <Button
              color="red"
              variant="outline"
              onClick={() => {
                close();
                modals.closeAll();
              }}
            >
              破棄
            </Button>
            <Button onClick={() => modals.closeAll()}>戻る</Button>
          </Group>
        ),
      });
    } else {
      close();
    }
  };

  const { postReview } = useReviewHandler();
  const { user } = useSessionUser();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await postReview({
        class_id: classSet[data.class_id] ?? null,
        grade: Grades[data.grade] ?? null,
        content: data.content ?? null,
        teacher: data.teacher ?? null,
        user_id: user?.id,
      });
      close();
      notifications.show({
        message: "投稿しました",
      });
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ActionIcon radius="xl" size={50} onClick={open}>
        <IconPlus />
      </ActionIcon>
      <Modal opened={opened} onClose={handleClose} title="新しい投稿">
        <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="class_id"
            rules={{ required: "選択してください" }}
            render={({ field, fieldState: { error } }) => (
              <Select
                label="科目"
                placeholder="選択 (検索可)"
                data={Object.keys(classSet)}
                searchable
                clearable
                description={
                  <span>
                    科目が無いなどのフィードバックは
                    <Anchor
                      underline="always"
                      style={{ fontSize: "inherit", color: "inherit" }}
                      href="https://mantine.dev/"
                      target="_blank"
                    >
                      こちら
                    </Anchor>
                  </span>
                }
                error={error?.message}
                {...field}
              />
            )}
          />
          <Group grow align="end">
            <TextInput
              label="教師名"
              placeholder="入力"
              description="通称などでもOK (任意)"
              {...register("teacher")}
            />
            <Controller
              control={control}
              name="grade"
              render={({ field }) => (
                <Select
                  label="成績"
                  placeholder="入力"
                  description="(任意)"
                  clearable
                  data={[...Object.keys(Grades)]}
                  {...field}
                />
              )}
            />
          </Group>
          <Controller
            control={control}
            name="content"
            rules={{ required: "入力してください" }}
            render={({ field, fieldState: { error } }) => (
              <Textarea
                label="メッセージ"
                description="感想など自由にどうぞ"
                placeholder="入力"
                rows={4}
                error={error?.message}
                {...field}
              />
            )}
          />
          <Group justify="end">
            <Button type="submit">投稿</Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
}
