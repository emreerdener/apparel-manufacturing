"use client";

import { ActionIcon, Group, Stack, Text } from "@mantine/core";
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
    <Stack p="lg">
      <Group justify="space-between" h="100%">
        <Group gap="xs">
          <ActionIcon
            variant="subtle"
            aria-label="Apparel Manufacturing Facebook"
            size="lg"
          >
            <IconBrandFacebook size={24} />
          </ActionIcon>

          <ActionIcon
            variant="subtle"
            aria-label="Apparel Manufacturing X"
            size="lg"
          >
            <IconBrandX size={24} />
          </ActionIcon>

          <ActionIcon
            variant="subtle"
            aria-label="Apparel Manufacturing LinkedIn"
            size="lg"
          >
            <IconBrandLinkedin size={24} />
          </ActionIcon>

          <ActionIcon
            variant="subtle"
            aria-label="Apparel Manufacturing Instagram"
            size="lg"
          >
            <IconBrandInstagram size={24} />
          </ActionIcon>
        </Group>

        <Text size="sm" c="dimmed">
          © 2026 Apparel Manufacturing Co., Inc.
        </Text>
        <ThemeSwitch />
      </Group>
    </Stack>
  );
}
