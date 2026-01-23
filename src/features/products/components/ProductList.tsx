import { SimpleGrid, Text } from "@mantine/core";
import { sageClient } from "@/features/products/services/sageClient";
import { SageProductCard } from "@/features/products/components";

export default async function ProductList({ query }: { query: string }) {
  const products = await sageClient.searchProducts(query);

  if (products.length === 0) {
    return (
      <Text>
        No products found for "{query}". (Check API connection if this persists)
      </Text>
    );
  }

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="xl">
      {products.map((product) => (
        <SageProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
}
