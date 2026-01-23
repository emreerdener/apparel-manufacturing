import {
  Title,
  Text,
  Image,
  Group,
  Button,
  Badge,
  Grid,
  GridCol,
  Stack,
} from "@mantine/core";
import { sageClient } from "@/features/products/services/sageClient";
import Link from "next/link";

export default async function ProductDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ suppId?: string }>;
}) {
  // Await the params promise properly
  const { id } = await params;
  const { suppId } = await searchParams;
  const product = await sageClient.getProduct(id);

  if (!product) {
    return (
      <Stack align="center" mt="xl">
        <Title>Product not found</Title>
        <Button component="a" href="/products">
          Back to catalog
        </Button>
      </Stack>
    );
  }

  return (
    <div>
      <Button component="a" href="/products" variant="subtle" mb="md">
        ← Back to catalog
      </Button>
      <Grid>
        <GridCol span={{ base: 12, md: 6 }}>
          <Image
            src={product.imageUrl}
            radius="md"
            alt={product.name}
            fallbackSrc="https://placehold.co/600x400?text=No+Image"
          />
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <Stack>
            <Badge size="lg" variant="light">
              {product.itemCode}
            </Badge>
            <Title order={2}>{product.name}</Title>

            {product.price ? (
              <Text size="xl" fw={700} c="blue">
                ${product.price.toFixed(2)}
              </Text>
            ) : (
              <Text size="xl" fw={700} c="dimmed">
                Contact for pricing
              </Text>
            )}

            <Text>{product.fullDescription || product.description}</Text>

            {product.colors && product.colors.length > 0 && (
              <div>
                <Text fw={600} mb="xs">
                  Colors:
                </Text>
                <Group gap="xs">
                  {product.colors.map((c) => (
                    <Badge key={c} variant="outline">
                      {c}
                    </Badge>
                  ))}
                </Group>
              </div>
            )}

            <Button size="lg" mt="xl">
              Request quote
            </Button>
          </Stack>
        </GridCol>
      </Grid>
    </div>
  );
}
