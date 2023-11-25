import React, { useState, useEffect } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { FaCheck } from "react-icons/fa";
import { CollectionQuantityAdderWrapper } from "./styles";

export function CollectionQuantityAdder({
  confirmed,
  variantId,
  available,
  maxInventory,
  handleIndividualProductDetails,
}) {
  const [quantity, setQuantity] = useState("1");
  const [isConfirmed, setisConfirmed] = useState(confirmed);
  const [disableConfirm, setDisableConfirm] = useState(false);
  const handleQuantityChange = e => {
    if (e.currentTarget.value > maxInventory) {
      e.currentTarget.value = maxInventory;
    } else if (e.currentTarget.value < 1) {
      e.currentTarget.value = 1;
    }
    setQuantity(e.currentTarget.value);
    if (
      e.currentTarget.value === "" ||
      !e.currentTarget.value ||
      isNaN(parseInt(e.currentTarget.value))
    ) {
      setDisableConfirm(true);
    } else if (disableConfirm) {
      setDisableConfirm(false);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    setisConfirmed(!isConfirmed);
    handleIndividualProductDetails({ quantity, confirmed: !isConfirmed });
  };
  useEffect(() => {
    setisConfirmed(confirmed);
  }, [confirmed]);
  useEffect(() => {
    setQuantity("1");
  }, [variantId]);

  return (
    <CollectionQuantityAdderWrapper>
      <strong>Quantity</strong>
      <form>
        <Input
          disabled={!available || isConfirmed}
          type="number"
          min="1"
          max={maxInventory}
          step="1"
          value={quantity}
          onChange={e => handleQuantityChange(e)}
        />
        <Button
          inverse="false"
          type="submit"
          disabled={!available || disableConfirm}
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
