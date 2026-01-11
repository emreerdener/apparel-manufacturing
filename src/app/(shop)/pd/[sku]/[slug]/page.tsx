import { createClient } from "@/lib/supabase/server";
import { notFound, redirect } from "next/navigation";
import { ProductView } from "@/features/product/components/ProductView";
import { Product } from "@/features/product/types";

interface ProductPageProps {
  params: Promise<{
    sku: string;
    slug: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { sku, slug } = await params;
  const supabase = await createClient();

  // 1. Fetch by SKU ("The Golden Key")
  // We use the SKU because it is the unique, permanent identifier.
  // Even if the product name changes, the link will still work.
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("legacy_sku", sku) // Match the DB column 'legacy_sku'
    .single();

  if (error || !data) {
    console.error(`Product not found for SKU: ${sku}`, error);
    return notFound();
  }

  const product = data as unknown as Product;

  // 2. SEO "Self-Healing" Check
  // If the product was found, but the URL slug is outdated (e.g., name changed),
  // automatically redirect the user to the canonical (correct) URL.
  if (product.slug && product.slug !== slug) {
    redirect(`/pd/${product.legacy_sku}/${product.slug}`);
  }

  return <ProductView product={product} />;
}
