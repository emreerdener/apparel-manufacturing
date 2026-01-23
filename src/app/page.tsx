import { Stack } from "@mantine/core";
import {
  Hero,
  HowItsDone,
  FeaturedProducts,
  FeaturedContent,
} from "@/features/home/components";
import { CTASection } from "@/features/layout/components";

export default async function Home() {
  return (
    <>
      <Stack gap={0}>
        <Hero />
        <CTASection />
        <FeaturedProducts />
        <FeaturedContent />
        <HowItsDone />
      </Stack>
    </>
  );
}
