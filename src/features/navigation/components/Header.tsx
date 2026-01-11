import Link from "next/link";
import { Group, Button, ActionIcon, Burger, Container } from "@mantine/core";
import { IconSearch, IconShoppingBag } from "@tabler/icons-react";
import { NAV_LINKS } from "../data/links";
import { Logo } from "./Logo";

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export function Header({ opened, toggle }: HeaderProps) {
  return (
    <Container size="xl" h="100%">
      <Group justify="space-between" h="100%">
        {/* Left Side: Logo & Mobile Menu Toggle */}
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", color: "inherit" }}
          >
            <Logo h={26} />
          </Link>
        </Group>

        {/* Center: Navigation Links (Hidden on mobile) */}
        <Group gap="md" visibleFrom="xs">
          {NAV_LINKS.map((item) => (
            <Button
              key={item.label}
              component={Link}
              href={item.link}
              variant="subtle"
              c="gray.7"
            >
              {item.label}
            </Button>
          ))}
        </Group>

        {/* Right Side: Actions */}
        <Group gap="xs">
          <ActionIcon variant="subtle" color="gray" size="lg">
            <IconSearch size={20} stroke={1.5} />
          </ActionIcon>
          <ActionIcon variant="subtle" color="gray" size="lg">
            <IconShoppingBag size={20} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Group>
    </Container>
  );
}
