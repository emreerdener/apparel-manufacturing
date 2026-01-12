import Link from "next/link";
import { Group, Button, Burger } from "@mantine/core";
import { Logo } from "./Logo";
import { NavigationLinks } from "./NavigationLinks";

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export function Header({ opened, toggle }: HeaderProps) {
  return (
    <Group
      justify="space-between"
      h="100%"
      wrap="nowrap"
      px={{ base: "md", sm: "lg" }}
    >
      {/* Left Side: Logo & Mobile Menu Toggle */}
      <Group wrap="nowrap">
        <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", color: "inherit" }}
        >
          <Logo h={38} />
        </Link>

        <NavigationLinks />
      </Group>

      {/* Right Side: Actions */}
      <Group gap="xs" wrap="nowrap">
        <Button variant="subtle" visibleFrom="sm">
          Log in
        </Button>
        <Button>Start order</Button>
      </Group>
    </Group>
  );
}
