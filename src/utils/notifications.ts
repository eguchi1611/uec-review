import { notifications } from "@mantine/notifications";

export function showErrorNotification() {
  notifications.show({
    color: "red",
    message: "エラーが発生しました",
  });
}
