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

export interface Product {
  id: string;
  created_at?: string;
  name: string;
  description: string;
  slug?: string;
  legacy_sku?: string;
  is_active?: boolean;
  price: number | null;
  specifications: ProductSpecifications | null;
  pricing_logic: ProductPricingLogic | null;
  media_assets: ProductMediaAssets | null;
}
