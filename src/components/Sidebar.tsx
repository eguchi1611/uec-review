import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { LinkEntry } from "./Layout";

type Props = {
  entries: LinkEntry[];
};

export function Sidebar({ entries }: Props) {
  return (
    <List sx={{ width: "100%", maxWidth: 360 }} disablePadding>
      {entries.map((entry) => (
        <ListItemButton
          key={entry.label}
          component={Link}
          href={entry.href}
          selected={entry.active}
        >
          <ListItemIcon>{entry.icon}</ListItemIcon>
          <ListItemText primary={entry.label} />
        </ListItemButton>
      ))}
    </List>
  );
}
