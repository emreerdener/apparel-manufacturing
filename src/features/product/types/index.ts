import { Database } from "@/lib/supabase/database.types";

export interface ProductMediaAssets {
  images: string[];
}

export interface ProductColor {
  name: string;
  hex: string;
}

export interface ProductSpecifications {
  dimensions_imperial?: string;
  material?: string;
  ink_options?: string[];
  origin_zip?: string;
  prop_65?: boolean;
  features?: string[];
  colors?: ProductColor[];
}

export interface ProductPricingLogic {
  setup_fee?: { amount: number; code: string };
  pms_match?: { amount: number; code: string };
  rush_service?: { available: boolean; days: number };
  standard_production_days?: number;
}

type ProductRow = Database["public"]["Tables"]["products"]["Row"];

export interface Product
  extends Omit<
    ProductRow,
    "specifications" | "pricing_logic" | "media_assets"
  > {
  specifications: ProductSpecifications | null;
  pricing_logic: ProductPricingLogic | null;
  media_assets: ProductMediaAssets | null;
}
