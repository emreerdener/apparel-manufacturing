"use client";

import Link from "next/link";
import {
  Container,
  Title,
  Text,
  Button,
  Card,
  Image,
  Group,
  SimpleGrid,
} from "@mantine/core";

// Mock data matching the structure we used in the product page
const FEATURED_PRODUCT = {
  sku: "QJLJH-RPKJU",
  slug: "32-oz-oasis-insulated-water-bottle",
  title: "32 oz. Oasis Insulated Water Bottle",
  description: "Premium stainless steel hydration solution.",
  price: 26.65,
  image: "https://placehold.co/600x400/png?text=Oasis+Bottle", // Placeholder
};

export default function Home() {
  return (
    <Container size="lg" py="xl">
      <Group justify="space-between" mb="xl">
        <Title order={1}>Apparel Manufacturing</Title>
      </Group>

      <Title order={2} mb="md">
        Featured Products
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src={FEATURED_PRODUCT.image}
              height={160}
              alt={FEATURED_PRODUCT.title}
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>{FEATURED_PRODUCT.title}</Text>
          </Group>

          <Text size="sm" c="dimmed">
            {FEATURED_PRODUCT.description}
          </Text>

          <Group mt="md" mb="xs">
            <Text fw={700} size="lg" c="blue">
              ${FEATURED_PRODUCT.price}
            </Text>
          </Group>

          <Button
            fullWidth
            mt="md"
            radius="md"
            component={Link}
            href={`/pd/${FEATURED_PRODUCT.sku}/${FEATURED_PRODUCT.slug}`}
          >
            View Details
          </Button>
        </Card>
      </SimpleGrid>
    </Container>
  );
}
