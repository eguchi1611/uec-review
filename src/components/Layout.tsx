"use client";

import { useUser } from "@/features/auth/hooks/useUser";
import { ProfileListener } from "@/features/profile/components/ProfileListener";
import IconHome from "@mui/icons-material/Home";
import IconPerson from "@mui/icons-material/Person";
import IconSearch from "@mui/icons-material/Search";
import { Box, Container } from "@mui/material";
import { usePathname } from "next/navigation";
import { PropsWithChildren, ReactNode } from "react";
import { ActionButton } from "./ActionButton";
import { Header } from "./Header";
import { MobileNavigation } from "./MobileNavigation";
import { Sidebar } from "./Sidebar";

export function Layout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const { user, loading } = useUser();

  const entries: LinkEntry[] = [
    {
      label: "ホーム",
      icon: <IconHome />,
      href: "/",
      active: pathname === "/",
    },
    {
      label: "探す",
      icon: <IconSearch />,
      href: "/search",
      active: pathname.startsWith("/search"),
    },
  ];

  if (loading) {
    entries.push({
      label: "プロフィール",
      icon: <IconPerson />,
      href: user ? `/users/${user?.id}` : undefined,
      active: false,
    });
  } else if (!loading && user !== null) {
    entries.push({
      label: "プロフィール",
      icon: <IconPerson />,
      href: `/users/${user.id}`,
      active: pathname.startsWith(`/users/${user.id}`),
    });
  }

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
          <Box sx={{ position: "sticky", top: 80 }}>
            <Sidebar entries={entries} disablePostButton={!loading && !user} />
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>{children}</Box>
      </Container>
      <MobileNavigation entries={entries} />
      {!loading && !user && (
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
      )}
      <ProfileListener />
    </>
  );
}

export type LinkEntry = {
  label: string;
  icon: ReactNode;
  href?: string;
  active: boolean;
};
