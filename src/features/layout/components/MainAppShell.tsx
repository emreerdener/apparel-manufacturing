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
      footer={{ height: 64 }}
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
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer p="md">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
