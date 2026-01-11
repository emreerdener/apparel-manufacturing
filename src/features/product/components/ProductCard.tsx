"use client";

import Link from "next/link";
import { Card, Image, Group, Text, Button } from "@mantine/core";
import { Product } from "@/features/product/types"; // Adjust path if needed

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const imageUrl =
    product.media_assets?.images?.[0] ??
    "https://placehold.co/600x400/png?text=No+Image";

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={imageUrl}
          height={160}
          alt={product.name}
          fallbackSrc="https://placehold.co/600x400/png?text=Placeholder"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500} lineClamp={1}>
          {product.name}
        </Text>
      </Group>

      <Text size="sm" c="dimmed" lineClamp={2} h={40}>
        {product.specifications?.material ?? "Premium Quality Product"}
      </Text>

      <Group mt="md" mb="xs">
        <Text fw={700} size="lg" c="blue">
          ${product.base_price?.toFixed(2) ?? "0.00"}
        </Text>
      </Group>

      {/* Since this file is 'use client', passing Link here works perfectly */}
      <Button
        fullWidth
        mt="md"
        radius="md"
        component={Link}
        href={`/pd/${product.legacy_sku}/${product.slug}`}
      >
        View Details
      </Button>
    </Card>
  );
}
