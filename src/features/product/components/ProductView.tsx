"use client";

import { Container, SimpleGrid, Paper } from "@mantine/core";
import { useProductConfigurator } from "@/features/product/hooks/useProductConfigurator";
import { ProductGallery } from "@/features/product/components/ProductGallery";
import { ProductDetails } from "@/features/product/components/ProductDetails";
import { Product } from "../types";

interface ProductViewProps {
  product: Product;
}

export function ProductView({ product }: ProductViewProps) {
  const {
    activeImage,
    setActiveImage,
    selectedColor,
    setSelectedColor,
    quantity,
    setQuantity,
  } = useProductConfigurator(product);

  // Safety check: ensure media_assets exists, default to empty array if null
  const galleryImages = product.media_assets?.images ?? [];

  return (
    <Container size="lg" py="xl">
      <Paper shadow="xs" p="md" withBorder>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <ProductGallery
            images={galleryImages}
            activeImage={activeImage}
            onImageSelect={setActiveImage}
          />
          <ProductDetails
            product={product}
            selectedColor={selectedColor}
            onColorSelect={setSelectedColor}
            quantity={quantity}
            onQuantityChange={setQuantity}
          />
        </SimpleGrid>
      </Paper>
    </Container>
  );
}
