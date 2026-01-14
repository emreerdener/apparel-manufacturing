"use client";

import Link from "next/link";
import {
  Card,
  Image,
  Text,
  Button,
  Stack,
  AspectRatio,
  Title,
} from "@mantine/core";
import { Product } from "@/features/product/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const imageUrl =
    product.media_assets?.images?.[0] ??
    "https://placehold.co/600x400/png?text=Preview+Image";

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <AspectRatio ratio={16 / 9}>
          <Image
            src={imageUrl}
            alt={product.name}
            fallbackSrc="https://placehold.co/600x400/png?text=Placeholder"
          />
        </AspectRatio>
      </Card.Section>

      <Stack gap="xs" py="md">
        <Title order={3}>{product.name}</Title>

        <Text c="dimmed" lineClamp={2}>
          {product.specifications?.material ?? "Premium Quality Product"}
        </Text>
      </Stack>

      <Button
        fullWidth
        radius="md"
        component={Link}
        href={`/pd/${product.legacy_sku}/${product.slug}`}
        variant="light"
      >
        View details
      </Button>
    </Card>
  );
}
