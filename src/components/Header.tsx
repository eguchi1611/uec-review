import { SignInDialog } from "@/features/auth/components/SignInDialog";
import { useSignOut } from "@/features/auth/hooks/useSignOut";
import { useUser } from "@/features/auth/hooks/useUser";
import IconLogin from "@mui/icons-material/Login";
import IconLogout from "@mui/icons-material/Logout";
import { AppBar, Button, Container, Toolbar } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [openSignInDialog, setOpenSignInDialog] = useState(false);
  const { user, loading } = useUser();
  const { signOut } = useSignOut();

  return (
    <AppBar position="fixed" sx={{ bgcolor: "inherit" }}>
      <Container>
        <Toolbar disableGutters>
          <Image
            alt="UEC Review"
            src="/logo.svg"
            width={74}
            height={10}
            style={{
              width: "auto",
              height: "24px",
              marginRight: "auto",
            }}
          />
          {!user && !loading && (
            <Button
              startIcon={<IconLogin />}
              onClick={() => setOpenSignInDialog(true)}
            >
              サインイン
            </Button>
          )}
          {!!user && !loading && (
            <Button startIcon={<IconLogout />} onClick={() => signOut()}>
              サインアウト
            </Button>
          )}
          <SignInDialog
            onClose={() => setOpenSignInDialog(false)}
            open={openSignInDialog}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
