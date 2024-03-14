import { AppBar, Toolbar } from "@mui/material";
import Image from "next/image";

export function Header() {
  return (
    <AppBar position="fixed" sx={{ bgcolor: "white" }}>
      <Toolbar>
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
      </Toolbar>
    </AppBar>
  );
}
