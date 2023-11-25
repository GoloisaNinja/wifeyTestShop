import React from "react";
import { QuantityAdjusterWrapper, AdjusterButton } from "./styles";
import { FaPlus, FaMinus } from "react-icons/fa";

export function CartQuantityAdjuster({ item, onAdjust, variant }) {
  const { quantity } = item;
  const handleDecrementQuantity = () => {
    onAdjust({ variantId: item.variant.id, quantity: -1 });
  };
  const handleIncrementQuantity = () => {
    if (variant.node.inventoryQuantity > quantity) {
      onAdjust({ variantId: item.variant.id, quantity: 1 });
    }
  };
  return (
    <QuantityAdjusterWrapper>
      <AdjusterButton onClick={handleDecrementQuantity}>
        <FaMinus />
      </AdjusterButton>
      <div>{quantity}</div>
      <AdjusterButton onClick={handleIncrementQuantity}>
        <FaPlus />
      </AdjusterButton>
    </QuantityAdjusterWrapper>
  );
}
