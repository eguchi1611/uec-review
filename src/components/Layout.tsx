"use client";

import { useProfileUpdate } from "@/hooks/useProfileUpdate";
import { useSessionUser } from "@/hooks/useSessionUser";
import {
  ActionIcon,
  AppShell,
  Box,
  Burger,
  Group,
  NavLink,
  ScrollArea,
  Space,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrightness,
  IconSearch,
  IconTrendingUp,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import NewPostButton from "./NewPostButton";
import ProfileCard from "./ProfileCard";
import SignInCard from "./SignInCard";

const links = [
  {
    href: "/",
    label: "おすすめレビュー",
    icon: <IconTrendingUp size="1rem" />,
  },
  {
    href: "/search",
    label: "検索",
    icon: <IconSearch size="1rem" />,
  },
  {
    href: "/test",
    label: "テストページ",
    icon: <IconSearch size="1rem" />,
  },
];

export default function Layout({ children }: PropsWithChildren) {
  const [opened, { toggle }] = useDisclosure();
  const { toggleColorScheme } = useMantineColorScheme();
  const { loading, user } = useSessionUser();
  useProfileUpdate();

  const pathname = usePathname();

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
          <Space mr="auto" />
          <ActionIcon onClick={toggleColorScheme} variant="transparent">
            <IconBrightness />
          </ActionIcon>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <ScrollArea h="calc(100dvh - var(--app-shell-header-offset, 0px) - var(--app-shell-footer-offset, 0px) - 112px)">
          {links.map(({ href, icon, label }) => (
            <NavLink
              key={href}
              href={href}
              label={label}
              component={Link}
              leftSection={icon}
              active={
                pathname !== "/" ? href.startsWith(pathname) : href === "/"
              }
            />
          ))}
        </ScrollArea>
        <Box pos="absolute" bottom={80} left={0} right={0} p="md">
          <NewPostButton />
        </Box>
        <Box
          pos="absolute"
          bottom={0}
          left={0}
          right={0}
          style={{
            borderTop:
              "calc(0.0625rem* var(--mantine-scale)) solid var(--app-shell-border-color)",
          }}
          h={80}
        >
          {loading || user !== null ? <ProfileCard /> : <SignInCard />}
        </Box>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
