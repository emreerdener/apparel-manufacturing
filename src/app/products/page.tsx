import { Title, TextInput, Button, Group, Stack } from "@mantine/core";
import { Suspense } from "react";
import {
  ProductList,
  ProductListSkeleton,
} from "../../features/products/components";
import { IconSearch } from "@tabler/icons-react";

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const query = params.q || "Apparel";

  return (
    <Stack p="xl">
      <Title order={1}>{query}</Title>

      <form action="/products" method="get">
        <Group mb="xs" gap="lg">
          <TextInput
            name="q"
            size="lg"
            placeholder="Search products..."
            defaultValue={query}
            leftSection={<IconSearch size={20} />}
            style={{ flex: 1 }}
          />
          <Button type="submit" size="lg">
            Search
          </Button>
        </Group>
      </form>

      <Suspense key={query} fallback={<ProductListSkeleton />}>
        <ProductList query={query} />
      </Suspense>
    </Stack>
  );
}
