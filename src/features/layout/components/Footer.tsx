"use client";

import {
  ActionIcon,
  Anchor,
  Card,
  Flex,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import dynamic from "next/dynamic";

const ThemeSwitch = dynamic(
  () => import("./ThemeSwitch").then((mod) => mod.ThemeSwitch),
  { ssr: false }
);

export default function Footer() {
  return (
    <Stack gap={0}>
      <Card
        px="xl"
        py={60}
        radius={0}
        withBorder
        style={{ borderLeft: "none", borderRight: "none" }}
      >
        <Stack>
          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Flex
                gap="xs"
                direction="column"
                align={{ base: "center", sm: "flex-start" }}
              >
                <Title order={2}>Apparel Manufacturing</Title>

                {/* Address */}
                <Anchor
                  href="https://www.google.com/maps/search/?api=1&query=5405+Webb+Pkwy+Lilburn+GA+30047"
                  target="_blank"
                  underline="hover"
                  c="inherit"
                >
                  <Text>5405 Webb Pkwy</Text>
                  <Text>Lilburn, GA 30047</Text>
                </Anchor>

                {/* Phone Numbers */}
                <Group gap={5}>
                  <Text>Phone:</Text>
                  <Anchor href="tel:+17706381100">770-638-1100</Anchor>
                </Group>

                <Group gap={5}>
                  <Text>Phone:</Text>
                  <Anchor href="tel:+18003361608">800-336-1608</Anchor>
                </Group>

                {/* Fax */}
                <Text>Fax: 770-638-8030</Text>

                {/* Email */}
                <Anchor href="mailto:customercare@apparelmanufacturing.com">
                  customercare@apparelmanufacturing.com
                </Anchor>
              </Flex>
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 2 }}>
              <Flex
                gap="xs"
                direction="column"
                align={{ base: "center", sm: "flex-start" }}
              >
                <Title order={4}>Company</Title>
                <Anchor c="inherit">Contact</Anchor>
                <Anchor c="inherit">About us</Anchor>
                <Anchor c="inherit">News & events</Anchor>
                <Anchor c="inherit">Careers</Anchor>
              </Flex>
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 2 }}>
              <Flex
                gap="xs"
                direction="column"
                align={{ base: "center", sm: "flex-start" }}
              >
                <Title order={4}>Products</Title>
                <Anchor c="inherit">Search</Anchor>
                <Anchor c="inherit">Categories</Anchor>
                <Anchor c="inherit">Brands</Anchor>
                <Anchor c="inherit">Collections</Anchor>
              </Flex>
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 2 }}>
              <Flex
                gap="xs"
                direction="column"
                align={{ base: "center", sm: "flex-start" }}
              >
                <Title order={4}>Resources</Title>
                <Anchor c="inherit">Showrooms</Anchor>
                <Anchor c="inherit">Presentations</Anchor>
                <Anchor c="inherit">FAQ</Anchor>
              </Flex>
            </Grid.Col>
          </Grid>
        </Stack>
      </Card>

      {/* Sub Footer */}
      <Grid h="100%" p="lg" justify="center" align="center" gutter="lg">
        {/* Social icons */}
        <Grid.Col span={{ base: 12, sm: 4 }} order={{ base: 2, sm: 1 }}>
          <Flex justify={{ base: "center", sm: "flex-start" }} gap="xs">
            <ActionIcon
              component="a"
              href="https://facebook.com"
              target="_blank"
              variant="subtle"
              aria-label="Apparel Manufacturing Facebook"
              size="lg"
            >
              <IconBrandFacebook size={24} />
            </ActionIcon>

            <ActionIcon
              component="a"
              href="https://twitter.com"
              target="_blank"
              variant="subtle"
              aria-label="Apparel Manufacturing X"
              size="lg"
            >
              <IconBrandX size={24} />
            </ActionIcon>

            <ActionIcon
              component="a"
              href="https://linkedin.com"
              target="_blank"
              variant="subtle"
              aria-label="Apparel Manufacturing LinkedIn"
              size="lg"
            >
              <IconBrandLinkedin size={24} />
            </ActionIcon>

            <ActionIcon
              component="a"
              href="https://instagram.com"
              target="_blank"
              variant="subtle"
              aria-label="Apparel Manufacturing Instagram"
              size="lg"
            >
              <IconBrandInstagram size={24} />
            </ActionIcon>
          </Flex>
        </Grid.Col>

        {/* Copyright */}
        <Grid.Col span={{ base: 12, sm: 4 }} order={{ base: 3, sm: 2 }}>
          <Text
            size="sm"
            c="dimmed"
            ta="center"
            style={{ whiteSpace: "nowrap" }}
          >
            © 2026 Apparel Manufacturing Co., Inc.
          </Text>
        </Grid.Col>

        {/* Mode switch */}
        <Grid.Col span={{ base: 12, sm: 4 }} order={{ base: 1, sm: 3 }}>
          <Flex justify={{ base: "center", sm: "flex-end" }}>
            <ThemeSwitch />
          </Flex>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
