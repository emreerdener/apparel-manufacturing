"use client";

import { AppShell, Stack, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { Header } from "./Header";
import { NAV_LINKS } from "../data/links";
import Footer from "./Footer";

export function MainAppShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 72 }}
      footer={{ height: 64 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: true },
      }}
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
              size="lg"
            >
              {item.label}
            </Button>
          ))}
          <Button variant="subtle" size="lg">
            Log in
          </Button>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer p="md">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
