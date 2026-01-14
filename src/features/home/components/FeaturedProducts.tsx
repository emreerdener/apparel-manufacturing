"use client";

import { DUMMY_PRODUCTS } from "@/features/product/data/dummyProducts";
import {
  Card,
  Image,
  Text,
  AspectRatio,
  Stack,
  Flex,
  ScrollArea,
  Space,
  Box,
  rem,
  Center,
  TextInput,
} from "@mantine/core";
import { IconShirt, IconSparkles2 } from "@tabler/icons-react";

export function FeaturedProducts() {
  return (
    <Stack gap={0}>
      {/* AI Search */}
      <Stack align="center" mt={74} mb="xl" px="xl">
        <Box pos="relative" w="100%" maw={600}>
          {/* 1. The Gradient Glow Layer */}
          <Box
            pos="absolute"
            inset={12}
            style={{
              zIndex: 0,
              filter: "blur(20px)",
              opacity: 0.7,
              borderRadius: "var(--mantine-radius-xl)",
              backgroundImage:
                "linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)",
            }}
          />

          <TextInput
            placeholder="What do you want to make?"
            leftSection={<IconSparkles2 size={24} />}
            size="xl"
            radius="lg"
            styles={{
              root: { position: "relative", zIndex: 1 },
              input: {
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              },
            }}
          />
        </Box>
      </Stack>

      <ScrollArea type="never">
        <Flex gap="xl" wrap="nowrap" p="xl">
          {DUMMY_PRODUCTS.map((item, index) => (
            <Card
              key={index}
              shadow="sm"
              radius="md"
              withBorder
              w={rem(260)}
              style={{ flexShrink: 0 }}
            >
              <Card.Section>
                <Box style={{ backgroundColor: "white" }} p="md">
                  <AspectRatio ratio={16 / 9}>
                    <Image src={item.image} alt={item.title} fit="contain" />
                  </AspectRatio>
                </Box>
              </Card.Section>

              <Stack mt="md" gap={5}>
                <Text fw={700} size="lg" lh={1.2}>
                  {item.title}
                </Text>
              </Stack>
            </Card>
          ))}
          <Card
            shadow="sm"
            radius="md"
            withBorder
            w={rem(260)}
            style={{ flexShrink: 0 }}
          >
            <Center h="100%">
              <Stack align="center">
                <IconShirt size={40} />
                <Text fw={700} size="lg">
                  View all products
                </Text>
              </Stack>
            </Center>
          </Card>
          <Space w="xs" />
        </Flex>
      </ScrollArea>
    </Stack>
  );
}
