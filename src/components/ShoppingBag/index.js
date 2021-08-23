import React, { useContext } from "react";
import { Link } from "gatsby";
import { FaShoppingBag } from "react-icons/fa";
import CartContext from "../../context/CartContext";
import { ShoppingBagWrapper } from "./styles";

export function ShoppingBag() {
  const { checkout } = useContext(CartContext);
  let totalQuantity = 0;
  if (checkout) {
    checkout.lineItems.forEach(
      lineItem => (totalQuantity += lineItem.quantity)
    );
  }
  return (
    <ShoppingBagWrapper>
      <Link to="/cart">
        <FaShoppingBag />
        {totalQuantity > 0 && <div>{totalQuantity}</div>}
      </Link>
    </ShoppingBagWrapper>
  );
}
