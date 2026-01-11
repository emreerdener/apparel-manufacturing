import Link from "next/link";
import {
  Group,
  Button,
  Text,
  ActionIcon,
  Burger,
  Container,
} from "@mantine/core";
import { IconSearch, IconShoppingBag } from "@tabler/icons-react";

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

const LINKS = [
  { link: "/", label: "Home" },
  {
    link: "/pd/QJLJH-RPKJU/32-oz-oasis-insulated-water-bottle",
    label: "Products",
  },
  { link: "#", label: "About" },
  { link: "#", label: "Contact" },
];

export function Header({ opened, toggle }: HeaderProps) {
  return (
    <Container size="xl" h="100%">
      <Group justify="space-between" h="100%">
        {/* Left Side: Logo & Mobile Menu Toggle */}
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          <Text
            component={Link}
            href="/"
            fw={900}
            size="lg"
            c="blue"
            style={{ textDecoration: "none" }}
          >
            APPAREL MFG
          </Text>
        </Group>

        {/* Center: Navigation Links (Hidden on mobile) */}
        <Group gap="md" visibleFrom="xs">
          {LINKS.map((item) => (
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
