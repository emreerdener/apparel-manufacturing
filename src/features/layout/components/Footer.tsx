"use client";

import { ActionIcon, Card, Flex, Grid, Stack, Text } from "@mantine/core";
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
      <Card p="lg" radius={0}>
        Footer content
      </Card>

      {/* Sub Footer */}
      <Grid h="100%" p="lg" justify="center" align="center" gutter="lg">
        {/* Social icons */}
        <Grid.Col span={{ base: 12, sm: 4 }} order={{ base: 2, sm: 1 }}>
          <Flex justify={{ base: "center", sm: "flex-start" }} gap="xs">
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
