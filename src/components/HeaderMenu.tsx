import { signOut } from "@/features/auth/signOut";
import { useProfile } from "@/features/profile/hooks/useProfile";
import IconLogout from "@mui/icons-material/Logout";
import {
  Avatar,
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

  const { profile } = useProfile();

  return (
    <>
      {profile?.avatar_url && (
        <IconButton size="large" onClick={handleClick}>
          <Avatar sx={{ width: 32, height: 32 }} src={profile?.avatar_url} />
        </IconButton>
      )}
      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
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
