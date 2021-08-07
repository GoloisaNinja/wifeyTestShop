import React, { useState, useContext, useEffect } from "react";
import CartContext from "../../context/CartContext";
import { Input } from "../Input";
import { Button } from "../Button";
import { ProductQuantityAdderWrapper } from "./styles";

export function ProductQuantityAdder({ variantId, available, handleModal }) {
  const [quantity, setQuantity] = useState("1");
  const { updateLineItem } = useContext(CartContext);

  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!isNaN(parseInt(quantity, 10))) {
      //updateLineItem({ variantId, quantity: parseInt(quantity, 10) });
      handleModal({ variantId, quantity: parseInt(quantity, 10) });
    } else {
      handleModal({ error: true });
    }
  };
  useEffect(() => {
    setQuantity("1");
  }, [variantId]);
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
          inverse
          type="submit"
          disabled={!available}
          onClick={e => handleSubmit(e)}
          width={`100%`}
          margin={"0"}
        >
          Add to Bag
        </Button>
      </form>
    </ProductQuantityAdderWrapper>
  );
}
