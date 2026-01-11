export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  sku: string;
  title: string;
  price: number;
  description: string;
  features: string[];
  colors: ProductColor[];
  images: string[];
}
