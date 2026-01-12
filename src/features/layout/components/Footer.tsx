"use client";

import { Group, Text } from "@mantine/core";
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
    <Group justify="space-between" h="100%">
      <Group>
        <IconBrandFacebook size={24} />
        <IconBrandX size={24} />
        <IconBrandLinkedin size={24} />
        <IconBrandInstagram size={24} />
      </Group>

      <Text size="sm" c="dimmed">
        © 2026 Apparel Manufacturing Co., Inc.
      </Text>
      <ThemeSwitch />
    </Group>
  );
}
