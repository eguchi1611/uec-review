import { ReviewEditorDialog } from "@/features/review/components/ReviewEditorDialog";
import { Button } from "@mui/material";
import { useState } from "react";

export function PostButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        新規投稿
      </Button>
      <ReviewEditorDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
