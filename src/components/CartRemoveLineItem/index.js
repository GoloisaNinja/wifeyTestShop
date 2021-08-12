import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { RemoveLineItemWrapper } from "./styles";

export function CartRemoveLineItem({ lineItemId }) {
  const { removeLineItem } = useContext(CartContext);
  const handleClick = () => {
    removeLineItem(lineItemId);
  };

  return (
    <RemoveLineItemWrapper onClick={handleClick}>
      <FaTrashAlt />
    </RemoveLineItemWrapper>
  );
}
