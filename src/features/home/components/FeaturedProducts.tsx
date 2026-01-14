import { ProductCard } from "@/features/product/components/ProductCard";
import { Product } from "@/features/product/types";
import { SimpleGrid } from "@mantine/core";

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl" p="xl">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
}
