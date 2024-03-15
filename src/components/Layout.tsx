"use client";

import IconHome from "@mui/icons-material/Home";
import IconPerson from "@mui/icons-material/Person";
import IconSearch from "@mui/icons-material/Search";
import { Box, Container } from "@mui/material";
import { usePathname } from "next/navigation";
import { PropsWithChildren, ReactNode } from "react";
import { Header } from "./Header";
import { MobileNavigation } from "./MobileNavigation";
import { Sidebar } from "./Sidebar";
import { ActionButton } from "./ActionButton";

export function Layout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  const entries: LinkEntry[] = [
    { label: "ホーム", icon: <IconHome />, href: "/" },
    { label: "探す", icon: <IconSearch />, href: "/search" },
    { label: "プロフィール", icon: <IconPerson />, href: "/users/pro_uecer" },
  ].map((entry) => ({
    ...entry,
    active:
      entry.href !== "/" ? pathname.startsWith(entry.href) : pathname === "/",
  }));

  return (
    <>
      <Header />
      <Container
        sx={{
          display: "flex",
          pt: 10,
          gap: 3,
          overflow: "none",
          pb: { xs: 12, md: 0 },
        }}
      >
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Sidebar entries={entries} />
        </Box>
        <Box sx={{ flex: 1 }}>{children}</Box>
      </Container>
      <MobileNavigation entries={entries} />
      <Box
        sx={{
          display: { md: "none" },
          position: "fixed",
          right: 16,
          bottom: 80,
        }}
      >
        <ActionButton />
      </Box>
    </>
  );
}

export type LinkEntry = {
  label: string;
  icon: ReactNode;
  href: string;
  active: boolean;
};
