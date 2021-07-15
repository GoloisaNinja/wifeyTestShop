import React from "react";
import { ProductTile } from "../ProductTile";
import { ProductGridWrapper } from "./styles";

export function ProductGrid({ products }) {
  return (
    <ProductGridWrapper>
      {products.map(product => (
        <ProductTile key={product.shopifyId} product={product} />
      ))}
    </ProductGridWrapper>
  );
}
