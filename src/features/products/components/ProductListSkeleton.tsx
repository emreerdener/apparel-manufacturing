import { SimpleGrid } from "@mantine/core";
import { SageProductCardSkeleton } from "@/features/products/components";

export function ProductListSkeleton() {
  // Render 8 skeletons to fill the grid nicely
  const skeletons = Array(8).fill(null);

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg">
      {skeletons.map((_, index) => (
        <SageProductCardSkeleton key={index} />
      ))}
    </SimpleGrid>
  );
}
