"use client";

import {
  AppShell,
  Box,
  Burger,
  Group,
  NavLink,
  ScrollArea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import ProfileCard from "./ProfileCard";

export default function Layout({ children }: PropsWithChildren) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Link href="/">
            <Image
              alt="UEC Review"
              src="/logo.svg"
              width={127}
              height={17}
              style={{ height: 24, width: "auto", display: "block" }}
            />
          </Link>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <ScrollArea h="calc(100dvh - var(--app-shell-header-offset, 0px) - var(--app-shell-footer-offset, 0px) - 112px)">
          <NavLink href="/" label="おすすめレビュー" component={Link} />
          <NavLink href="/search" label="検索" component={Link} />
        </ScrollArea>
        <Box
          pos="absolute"
          bottom={0}
          left={0}
          right={0}
          style={{
            borderTop:
              "calc(0.0625rem* var(--mantine-scale)) solid var(--app-shell-border-color);",
          }}
          h={80}
        >
          <ProfileCard />
        </Box>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
