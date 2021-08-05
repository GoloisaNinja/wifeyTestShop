import React, { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { Input } from "../Input";
import { Button } from "../Button";
import { ProductQuantityAdderWrapper } from "./styles";

export function ProductQuantityAdder({ variantId, available, handleModal }) {
  const [quantity, setQuantity] = useState(1);
  const { updateLineItem } = useContext(CartContext);

  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    //updateLineItem({ variantId, quantity: parseInt(quantity, 10) });
    handleModal({ variantId, quantity: parseInt(quantity, 10) });
  };

  return (
    <ProductQuantityAdderWrapper>
      <strong>Quantity</strong>
      <form>
        <Input
          disabled={!available}
          type="number"
          min="1"
          step="1"
          value={quantity}
          onChange={e => handleQuantityChange(e)}
        />

        <Button
          type="submit"
          disabled={!available}
          onClick={e => handleSubmit(e)}
          width={`100%`}
        >
          Add to Bag
        </Button>
      </form>
    </ProductQuantityAdderWrapper>
  );
}
