import Link from "next/link";
import { Button, Menu, Flex } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

export function NavigationLinks() {
  const chevron = <IconChevronDown size={18} />;
  const linkSize = { base: "lg", md: "md" };
  return (
    <Flex gap={{ base: "lg", md: 0 }} direction={{ base: "column", md: "row" }}>
      <Button component={Link} href="/products" variant="subtle" fz={linkSize}>
        Products
      </Button>

      <Button component={Link} href="/about" variant="subtle" fz={linkSize}>
        About us
      </Button>

      <Menu trigger="hover" openDelay={100} closeDelay={400} withinPortal>
        <Menu.Target>
          <Button variant="subtle" rightSection={chevron} fz={linkSize}>
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
          <Menu.Item component={Link} href="/showrooms">
            Showrooms
          </Menu.Item>
          <Menu.Item component={Link} href="/presentations">
            Presentations
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Button component={Link} href="/contact" variant="subtle" fz={linkSize}>
        Contact
      </Button>
    </Flex>
  );
}
