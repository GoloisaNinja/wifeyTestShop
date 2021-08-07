import React, { useState, useContext, useEffect } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { FaCheck } from "react-icons/fa";
import { CollectionQuantityAdderWrapper } from "./styles";

export function CollectionQuantityAdder({
  confirmed,
  variantId,
  available,
  handleIndividualProductDetails,
}) {
  const [quantity, setQuantity] = useState("1");
  const [isConfirmed, setisConfirmed] = useState(confirmed);

  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setisConfirmed(!isConfirmed);
    if (!isNaN(parseInt(quantity, 10))) {
      handleIndividualProductDetails({ quantity, confirmed: !isConfirmed });
    }
  };
  useEffect(() => {
    setisConfirmed(confirmed);
  }, [confirmed, variantId]);
  useEffect(() => {
    setQuantity("1");
  }, [variantId]);

  return (
    <CollectionQuantityAdderWrapper>
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
          {isConfirmed ? <FaCheck /> : "Confirm?"}
        </Button>
      </form>
    </CollectionQuantityAdderWrapper>
  );
}
