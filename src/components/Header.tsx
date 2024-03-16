import { SignInDialog } from "@/features/auth/components/SignInDialog";
import { useUser } from "@/features/auth/hooks/useUser";
import IconLogin from "@mui/icons-material/Login";
import { AppBar, Button, Container, Toolbar } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { HeaderMenu } from "./HeaderMenu";

export function Header() {
  const [openSignInDialog, setOpenSignInDialog] = useState(false);
  const { user, loading } = useUser();

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
          {(!!user || loading) && <HeaderMenu />}
          <SignInDialog
            onClose={() => setOpenSignInDialog(false)}
            open={openSignInDialog}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
