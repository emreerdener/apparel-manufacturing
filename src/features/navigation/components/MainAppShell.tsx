"use client";

import { AppShell, Stack, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { Header } from "./Header";

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
          <Button component={Link} href="/" variant="subtle" onClick={toggle}>
            Home
          </Button>
          <Button
            component={Link}
            href="/pd/QJLJH-RPKJU/32-oz-oasis-insulated-water-bottle"
            variant="subtle"
            onClick={toggle}
          >
            Products
          </Button>
          <Button component={Link} href="#" variant="subtle" onClick={toggle}>
            About
          </Button>
          <Button component={Link} href="#" variant="subtle" onClick={toggle}>
            Contact
          </Button>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer p="md">Footer</AppShell.Footer>
    </AppShell>
  );
}
