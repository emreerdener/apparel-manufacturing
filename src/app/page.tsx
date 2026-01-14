import { Stack } from "@mantine/core";
import { Product } from "@/features/product/types";
import { createServer } from "@/lib/supabase/server";
import { Hero } from "@/features/home/components/Hero";
import { HowItsDone } from "@/features/home/components/HowItsDone";
import { FeaturedProducts } from "@/features/home/components/FeaturedProducts";
import CTASection from "@/features/layout/components/CTASection";
import FeaturedContent from "@/features/home/components/FeaturedContent";

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
    <>
      <Stack gap={0}>
        <Hero />
        <CTASection />
        <FeaturedProducts products={products} />
        <FeaturedContent />
        <HowItsDone />
      </Stack>
    </>
  );
}
