import React from "react";
import { Layout, CartContents } from "../components";

const Cart = () => {
  const padding = "20px";
  return (
    <Layout padding={padding}>
      <CartContents />
    </Layout>
  );
};
export default Cart;
