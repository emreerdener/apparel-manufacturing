"use client";

import { useState } from "react";
import {
  Stack,
  Flex,
  ScrollArea,
  Box,
  TextInput,
  Skeleton,
} from "@mantine/core";
import { IconSparkles2 } from "@tabler/icons-react";

export function FeaturedProducts() {
  const [focused, setFocused] = useState(false);

  return (
    <Stack gap={0}>
      {/* AI Search */}
      <Stack align="center" mt={74} mb="xl" px="xl">
        <Box pos="relative" w="100%" maw={600}>
          {/* 1. The Gradient Glow Layer */}
          <Box
            pos="absolute"
            inset={8}
            style={{
              zIndex: 0,
              borderRadius: "var(--mantine-radius-lg)",
              backgroundImage:
                "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)",
              transition: "all 0.4s ease-in-out",
              // 4. Conditional styles based on focus state
              // When focused: brighter (higher opacity), slightly more blur, more saturated colors
              opacity: focused ? 0.8 : 0.5,
              filter: focused
                ? "blur(24px) saturate(1.5)"
                : "blur(20px) saturate(1.0)",
            }}
          />

          <TextInput
            placeholder="What do you want to make?"
            leftSection={<IconSparkles2 size={24} />}
            size="xl"
            radius="lg"
            // 5. Attach focus handlers to update state
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            styles={{
              root: { position: "relative", zIndex: 1 },
              input: {
                boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                backgroundColor: "var(--mantine-color-body)",
              },
            }}
          />
        </Box>
      </Stack>

      <ScrollArea type="never">
        <Flex gap="xl" wrap="nowrap" p="xl">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Skeleton h={260} radius="lg" key={index} />
            ))}
        </Flex>
      </ScrollArea>
    </Stack>
  );
}
