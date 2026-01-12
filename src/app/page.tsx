import { Container, Title, Group, SimpleGrid } from "@mantine/core";
import { Product } from "@/features/product/types";
import { ProductCard } from "@/features/product/components/ProductCard";
import { createServer } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createServer();

  // 1. Fetch active products
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true)
    .limit(3);

  if (error) {
    console.error("Supabase Error:", error);
  }

  const products = (data as unknown as Product[]) ?? [];

  return (
    <Container size="xl" py="xl">
      <Group justify="space-between" mb="xl">
        <Title order={1}>Apparel Manufacturing</Title>
      </Group>

      <Title order={2} mb="md">
        Featured Products
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
