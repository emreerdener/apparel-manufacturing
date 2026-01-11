import { useState } from "react";
import { Product } from "../types";

export function useProductConfigurator(product: Product) {
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
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
