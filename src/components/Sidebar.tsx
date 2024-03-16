import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import Link from "next/link";
import { LinkEntry } from "./Layout";
import { PostButton } from "./PostButton";

type Props = {
  entries: LinkEntry[];
  disablePostButton?: boolean;
};

export function Sidebar({ entries, disablePostButton }: Props) {
  return (
    <Stack spacing={2}>
      <List sx={{ width: 200 }} disablePadding>
        {entries.map((entry) => (
          <ListItemButton
            key={entry.label + entry.href}
            component={Link}
            href={entry.href || "/"}
            selected={entry.active}
          >
            <ListItemIcon>{entry.icon}</ListItemIcon>
            <ListItemText primary={entry.label} />
          </ListItemButton>
        ))}
      </List>
      {!disablePostButton && <PostButton />}
    </Stack>
  );
}
