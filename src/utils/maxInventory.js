import { useCallback } from "react";

export default function useReturnMaxInventory() {
  const determineMaxInventoryOfVariant = useCallback(
    (selectedVariant, variants) => {
      console.log(selectedVariant);
      console.log(variants);
      let max = 0;
      variants.forEach(v => {
        if (v.shopifyId === selectedVariant.id) {
          max = v.inventoryQuantity;
        }
      });
      return max;
    },
    []
  );

  return determineMaxInventoryOfVariant;
}
