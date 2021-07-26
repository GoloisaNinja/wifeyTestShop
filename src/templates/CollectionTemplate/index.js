import React from "react";
import { graphql } from "gatsby";
import {
  LayoutPadding,
  CollectionProductTemplate,
  GradientH1,
} from "../../components";

export const query = graphql`
  query CollectionQuery($shopifyId: String) {
    shopifyCollection(shopifyId: { eq: $shopifyId }) {
      description
      title
      products {
        shopifyId
        storefrontId
        handle
        images {
          id
          src
          gatsbyImageData(placeholder: "BLURRED")
        }
      }
    }
  }
`;

export default function CollectionTemplate({ data }) {
  return (
    <LayoutPadding>
      <GradientH1
        style={{ textAlign: "center", marginBottom: "3rem" }}
        font={`'Abril Fatface', cursive`}
        color={`#ff00f7, #035efc`}
      >
        {data.shopifyCollection.title}
      </GradientH1>

      {data.shopifyCollection.products.map(product => (
        <CollectionProductTemplate
          key={product.storefrontId}
          productShopifyId={product.shopifyId}
          productStorefrontId={product.storefrontId}
          images={product.images}
          handle={product.handle}
        />
      ))}
    </LayoutPadding>
  );
}
