import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import Link from "next/link";
import { LinkEntry } from "./Layout";

type Props = {
  entries: LinkEntry[];
};

export function MobileNavigation({ entries }: Props) {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { md: "none" },
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <BottomNavigation value={true}>
        {entries.map((entry) => (
          <BottomNavigationAction
            key={entry.label}
            icon={entry.icon}
            component={Link}
            href={entry.href}
            value={entry.active}
            scroll={false}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
