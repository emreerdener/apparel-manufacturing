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
  Box,
  Badge,
} from "@mantine/core";
import type { SageProduct } from "@/features/products/services/sageClient";

interface SageProductCardProps {
  product: SageProduct;
}

export function SageProductCard({ product }: SageProductCardProps) {
  const imageUrl =
    product.imageUrl || "https://placehold.co/600x400/png?text=No+Image";

  return (
    <Card shadow="sm" padding="lg" radius="lg" withBorder>
      <Stack h="100%">
        <Card.Section>
          <Box
            style={{
              backgroundColor: "white",
              borderBottom: "1px solid var(--paper-border-color)",
            }}
          >
            <AspectRatio ratio={1}>
              <Image
                src={imageUrl}
                alt={product.name}
                fit="contain"
                fallbackSrc="https://placehold.co/600x400/png?text=Placeholder"
              />
            </AspectRatio>
          </Box>
        </Card.Section>

        <Stack h="100%" justify="space-between">
          <Stack gap="xs">
            <Badge variant="light" color="gray" size="md">
              {product.description || "No description available"}
            </Badge>

            <Text fw={700} size="md" lh={1.2} lineClamp={3}>
              {product.name}
            </Text>
          </Stack>

          <Button
            fullWidth
            component={Link}
            href={`/products/product/${product.id}?suppId=${product.supplierId || ""}`}
            variant="light"
          >
            View details
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}
