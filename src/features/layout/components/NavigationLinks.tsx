import Link from "next/link";
import { Group, Button, Menu } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

export function NavigationLinks() {
  const chevron = <IconChevronDown size={18} />;

  return (
    <Group gap="xs" visibleFrom="md">
      <Button component={Link} href="/about" variant="subtle">
        Products
      </Button>

      <Button component={Link} href="/contact" variant="subtle">
        About
      </Button>

      <Menu trigger="hover" openDelay={100} closeDelay={400} withinPortal>
        <Menu.Target>
          <Button variant="subtle" rightSection={chevron}>
            Resources
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item component={Link} href="/faq">
            FAQ
          </Menu.Item>
          <Menu.Item component={Link} href="/news-events">
            News & events
          </Menu.Item>
          <Menu.Item component={Link} href="/links">
            Showrooms
          </Menu.Item>
          <Menu.Item component={Link} href="/links">
            Presentations
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Button component={Link} href="/contact" variant="subtle">
        Contact
      </Button>
    </Group>
  );
}
