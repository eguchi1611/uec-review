import { signOut } from "@/features/auth/signOut";
import IconLogout from "@mui/icons-material/Logout";
import IconMoreVert from "@mui/icons-material/MoreVert";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { MouseEvent, useState } from "react";

export function HeaderMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton size="large" onClick={handleClick}>
        <IconMoreVert />
      </IconButton>
      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem>
          <ListItemIcon>
            <IconLogout />
          </ListItemIcon>
          <ListItemText onClick={() => signOut()}>サインアウト</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
