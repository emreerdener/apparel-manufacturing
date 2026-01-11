import { useState } from "react";
import { Product } from "../types";

export function useProductConfigurator(product: Product) {
  const initialImage = product.media_assets?.images?.[0] || "";
  const initialColor = product.specifications?.colors?.[0] || {
    name: "Default",
    hex: "#000000",
  };

  const [activeImage, setActiveImage] = useState<string>(initialImage);
  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [quantity, setQuantity] = useState<number | string>(1);

  return {
    activeImage,
    setActiveImage,
    selectedColor,
    setSelectedColor,
    quantity,
    setQuantity,
  };
}
