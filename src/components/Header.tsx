import { AppBar, Button, Container, Toolbar } from "@mui/material";
import Image from "next/image";
import IconLogin from "@mui/icons-material/Login";

export function Header() {
  return (
    <AppBar position="fixed" sx={{ bgcolor: "white" }}>
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
            }}
          />
          <Button sx={{ ml: "auto" }} startIcon={<IconLogin />}>
            サインイン
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
