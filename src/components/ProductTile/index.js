import React from "react";
import { navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Button } from "../Button";
import {
  ProductTileWrapper,
  ProductTileTitle,
  ProductTileDescription,
  ProductTilePrice,
  ProductTileCompareAtPrice,
  ProductTileContentWrapper,
} from "./styles";

export function ProductTile({ product }) {
  console.log(product);
  return (
    <ProductTileWrapper>
      <GatsbyImage
        image={product.images[0].gatsbyImageData}
        alt={product.handle}
      />
      <ProductTileContentWrapper>
        <ProductTileTitle>{product.title}</ProductTileTitle>
        <ProductTileDescription>{product.description}</ProductTileDescription>
        <div>
          <ProductTilePrice>
            from $
            {parseFloat(product.priceRangeV2.minVariantPrice.amount).toFixed(2)}
          </ProductTilePrice>
          {product.variants[0].compareAtPrice !== null &&
            parseFloat(product.priceRangeV2.minVariantPrice.amount).toFixed(
              2
            ) !== parseFloat(product.variants[0].compareAtPrice).toFixed(2) && (
              <ProductTileCompareAtPrice>
                ${parseFloat(product.variants[0].compareAtPrice).toFixed(2)}
              </ProductTileCompareAtPrice>
            )}
        </div>

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
