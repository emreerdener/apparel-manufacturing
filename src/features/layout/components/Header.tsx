import Link from "next/link";
import { Group, Button, Burger, ActionIcon, Box } from "@mantine/core";
import { Logo } from "./Logo";
import { NavigationLinks } from "./NavigationLinks";
import { IconShoppingBag } from "@tabler/icons-react";

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
      <Group wrap="nowrap" w={{ base: 44, md: "auto" }}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
        <Box visibleFrom="md">
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", color: "inherit" }}
          >
            <Logo h={38} />
          </Link>
        </Box>

        <Box visibleFrom="md">
          <NavigationLinks />
        </Box>
      </Group>

      <Box hiddenFrom="md">
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", color: "inherit" }}
        >
          <Logo h={38} />
        </Link>
      </Box>

      {/* Right Side: Actions */}
      <Group gap="xs" wrap="nowrap">
        <Button variant="light" visibleFrom="md">
          Log in
        </Button>
        <ActionIcon aria-label="Shopping bag" h={42} w={42} variant="outline">
          <IconShoppingBag size={24} />
        </ActionIcon>
      </Group>
    </Group>
  );
}
