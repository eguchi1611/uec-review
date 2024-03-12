import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function NewPostButton() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button fullWidth onClick={open}>
        投稿
      </Button>
      <Modal opened={opened} onClose={close} title="新しい投稿">
        {/* Modal content */}
      </Modal>
    </>
  );
}
