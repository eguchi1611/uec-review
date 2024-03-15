import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { usePathname } from "next/navigation";
import { SignInWithX } from "../signIn";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function SignInDialog({ open, onClose }: Props) {
  const pathname = usePathname();

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" scroll="body" fullWidth>
      <DialogTitle>サインイン</DialogTitle>
      <DialogContent>
        <Button variant="contained" onClick={() => SignInWithX()}>
          X でサインイン
        </Button>
      </DialogContent>
    </Dialog>
  );
}
