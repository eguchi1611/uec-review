"use client";

import { ReviewEditorDialog } from "@/features/review/components/ReviewEditorDialog";
import IconAdd from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function ActionButton() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname === "/") {
    return (
      <>
        <Fab color="primary" onClick={() => setOpen(true)}>
          <IconAdd />
        </Fab>
        <ReviewEditorDialog open={open} onClose={() => setOpen(false)} />
      </>
    );
  }

  return null;
}
