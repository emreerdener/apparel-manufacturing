"use client";

import { Container, SimpleGrid, Paper } from "@mantine/core";
import { useProductConfigurator } from "@/features/product/hooks/useProductConfigurator";
import { ProductGallery } from "@/features/product/components/ProductGallery";
// import { ProductDetails } from '@/features/product/components/ProductDetails'; (You'd build this next)

// Mock Data (In reality, fetch this via server component or API)
const MOCK_PRODUCT = {
  sku: "QJLJH-RPKJU",
  title: "32 oz. Oasis Insulated Water Bottle",
  price: 26.65,
  description: "...",
  features: ["Double-wall", "BPA-free"],
  colors: [{ name: "Blue", hex: "blue" }],
  images: ["/img1.png", "/img2.png"],
};

export default function ProductPage() {
  const { activeImage, setActiveImage } = useProductConfigurator(MOCK_PRODUCT);

  return (
    <Container size="lg" py="xl">
      <Paper shadow="xs" p="md" withBorder>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <ProductGallery
            images={MOCK_PRODUCT.images}
            activeImage={activeImage}
            onImageSelect={setActiveImage}
          />
          {/* <ProductDetails ... /> */}
        </SimpleGrid>
      </Paper>
    </Container>
  );
}
