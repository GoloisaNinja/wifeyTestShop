import React from "react";
import { navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Button } from "../Button";
import {
  ProductTileWrapper,
  ProductTileTitle,
  ProductTileDescription,
  ProductTilePrice,
  ProductTileContentWrapper,
} from "./styles";

export function ProductTile({ product }) {
  return (
    <ProductTileWrapper>
      <GatsbyImage
        image={product.images[0].gatsbyImageData}
        alt={product.handle}
      />
      <ProductTileContentWrapper>
        <ProductTileTitle>{product.title}</ProductTileTitle>
        <ProductTileDescription>{product.description}</ProductTileDescription>
        <ProductTilePrice>
          from $
          {parseFloat(product.priceRangeV2.minVariantPrice.amount).toFixed(2)}
        </ProductTilePrice>
        <Button
          width={`100%`}
          onClick={() =>
            navigate(`/products/${encodeURIComponent(product.handle)}`)
          }
        >
          View Product
        </Button>
      </ProductTileContentWrapper>
    </ProductTileWrapper>
  );
}
