"use client";

import { AppShell, Stack, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { Header } from "./Header";
import { NAV_LINKS } from "../data/links";

export function MainAppShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: true },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Stack gap="xs">
          {NAV_LINKS.map((item) => (
            <Button
              key={item.label}
              component={Link}
              href={item.link}
              variant="subtle"
              onClick={toggle}
              justify="flex-start"
              size="lg"
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer p="md">Footer</AppShell.Footer>
    </AppShell>
  );
}
