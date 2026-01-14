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
} from "@mantine/core";

export function FeaturedProducts() {
  return (
    <Stack gap={0}>
      <Text mt="xl" ta="center" size="md" fw="bold" tt="uppercase" lts={1.1}>
        Popular products
      </Text>
      <ScrollArea type="never">
        <Flex gap="xl" wrap="nowrap" p="xl">
          {DUMMY_PRODUCTS.map((item, index) => (
            <Card
              key={index}
              shadow="sm"
              radius="md"
              withBorder
              w={rem(420)}
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
                <Text fw={700} size="lg">
                  {item.title}
                </Text>
              </Stack>
            </Card>
          ))}
          <Space w="xs" />
        </Flex>
      </ScrollArea>
    </Stack>
  );
}
