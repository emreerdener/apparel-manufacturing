"use client";

import { Container, SimpleGrid, Paper } from "@mantine/core";
import { useProductConfigurator } from "@/features/product/hooks/useProductConfigurator";
import { ProductGallery } from "@/features/product/components/ProductGallery";
import { ProductDetails } from "@/features/product/components/ProductDetails";

// Mock Data
const MOCK_PRODUCT = {
  sku: "QJLJH-RPKJU",
  title: "32 oz. Oasis Insulated Water Bottle",
  price: 26.65,
  description:
    "The 32oz Oasis Water Bottle is a premium stainless steel hydration solution designed for everyday use. Featuring double-wall vacuum insulation, it keeps beverages hot for up to 12 hours and cold for up to 24 hours.",
  features: [
    "Double-wall vacuum insulation",
    "BPA-free stainless steel",
    "Spill-resistant lid",
    "Keeps cold for 24h, hot for 12h",
  ],
  colors: [
    { name: "Digital Lavender", hex: "#E6E6FA" },
    { name: "Modern Blue", hex: "#4169E1" },
    { name: "Sage Leaf Green", hex: "#8FBC8F" },
    { name: "Mocha Brown", hex: "#6F4E37" },
    { name: "Ivory White", hex: "#FFFFF0" },
    { name: "Stone Gray", hex: "#708090" },
  ],
  images: [
    "https://placehold.co/600x600/png?text=Oasis+Bottle+Front",
    "https://placehold.co/600x600/png?text=Detail+Shot",
    "https://placehold.co/600x600/png?text=Lifestyle",
  ],
};

export default function ProductPage() {
  const {
    activeImage,
    setActiveImage,
    selectedColor,
    setSelectedColor,
    quantity,
    setQuantity,
  } = useProductConfigurator(MOCK_PRODUCT);

  return (
    <Container size="lg" py="xl">
      <Paper shadow="xs" p="md" withBorder>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <ProductGallery
            images={MOCK_PRODUCT.images}
            activeImage={activeImage}
            onImageSelect={setActiveImage}
          />
          <ProductDetails
            product={MOCK_PRODUCT}
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
