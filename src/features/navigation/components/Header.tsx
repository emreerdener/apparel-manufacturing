import Link from "next/link";
import { Group, Button, Burger } from "@mantine/core";
import { NAV_LINKS } from "../data/links";
import { Logo } from "./Logo";

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export function Header({ opened, toggle }: HeaderProps) {
  return (
    <Group justify="space-between" h="100%" wrap="nowrap" px="md">
      {/* Left Side: Logo & Mobile Menu Toggle */}
      <Group wrap="nowrap">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", color: "inherit" }}
        >
          <Logo h={32} />
        </Link>

        {/* Center: Navigation Links (Hidden on mobile) */}
        <Group gap="xs" visibleFrom="sm" wrap="nowrap">
          {NAV_LINKS.map((item) => (
            <Button
              key={item.label}
              component={Link}
              href={item.link}
              variant="subtle"
            >
              {item.label}
            </Button>
          ))}
        </Group>
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
