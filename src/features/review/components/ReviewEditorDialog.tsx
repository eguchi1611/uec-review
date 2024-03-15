import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { ReviewEditor } from "./ReviewEditor";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function ReviewEditorDialog({ open, onClose }: Props) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" scroll="body">
      <DialogTitle>レビューを投稿</DialogTitle>
      <DialogContent>
        <ReviewEditor onExit={onClose} />
      </DialogContent>
    </Dialog>
  );
}
