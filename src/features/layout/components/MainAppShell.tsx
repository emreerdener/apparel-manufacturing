"use client";

import { AppShell, Stack, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Header } from "./Header";
import Footer from "./Footer";
import { NavigationLinks } from "./NavigationLinks";

export function MainAppShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 72 }}
      navbar={{
        width: 300,
        breakpoint: "md",
        collapsed: { mobile: !opened, desktop: true },
      }}
    >
      <AppShell.Header>
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Stack gap="xs">
          <NavigationLinks />
          <Button variant="subtle" size="lg">
            Log in
          </Button>
          <Button size="lg">Start an order</Button>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        <Stack>
          {children}
          <Footer />
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
